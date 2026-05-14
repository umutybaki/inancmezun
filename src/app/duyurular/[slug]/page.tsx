import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { PageHeader } from '@/components/PageHeader'
import { MdxContent } from '@/components/MdxContent'
import { getAllAnnouncements, getAnnouncementBySlug } from '@/lib/content'
import { constructMetadata } from '@/lib/seo'
import { formatDate } from '@/lib/dates'
import { categoryLabel, categoryStyle } from '@/lib/categoryUtils'
import { ExternalLink } from 'lucide-react'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const announcements = await getAllAnnouncements()
  return announcements.map((a) => ({ slug: a.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const announcement = await getAnnouncementBySlug(slug)
  if (!announcement) return {}
  return constructMetadata({
    title: announcement.title,
    description: announcement.excerpt,
    image: announcement.cover,
  })
}

export default async function AnnouncementDetailPage({ params }: Props) {
  const { slug } = await params
  const announcement = await getAnnouncementBySlug(slug)

  if (!announcement) notFound()

  return (
    <>
      <PageHeader
        title={announcement.title}
        breadcrumb={[
          { label: 'Duyurular', href: '/duyurular' },
          { label: announcement.title, href: `/duyurular/${announcement.slug}` },
        ]}
      />

      <article className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Category pill + date */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span
              className="text-xs font-semibold px-3 py-1 rounded-full"
              style={categoryStyle(announcement.category)}
            >
              {categoryLabel(announcement.category)}
            </span>
            <span
              className="text-sm"
              style={{ color: 'var(--color-ink-muted)' }}
            >
              {formatDate(announcement.date)}
            </span>
          </div>

          {/* Cover image */}
          {announcement.cover && (
            <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden mb-8">
              <Image
                src={announcement.cover}
                alt={announcement.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}

          {/* Lead / excerpt */}
          <p
            className="text-lg leading-relaxed mb-8 font-medium"
            style={{
              color: 'var(--color-ink-muted)',
              fontFamily: 'var(--font-serif)',
              borderLeft: '3px solid var(--color-yellow)',
              paddingLeft: '1rem',
            }}
          >
            {announcement.excerpt}
          </p>

          {/* Body */}
          <MdxContent html={announcement.content} />

          {/* External link */}
          {announcement.externalLink && (
            <div className="mt-10 pt-8 border-t" style={{ borderColor: 'var(--color-border)' }}>
              <a
                href={announcement.externalLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded text-sm font-semibold"
                style={{
                  backgroundColor: 'var(--color-red)',
                  color: 'var(--color-cream)',
                }}
              >
                <ExternalLink size={15} />
                {announcement.externalLinkLabel ?? 'Daha fazla bilgi'}
              </a>
            </div>
          )}

          {/* Back link */}
          <div className="mt-12 pt-8 border-t" style={{ borderColor: 'var(--color-border)' }}>
            <Link
              href="/duyurular"
              className="text-sm font-medium"
              style={{ color: 'var(--color-ink-muted)' }}
            >
              ← Tüm duyurular
            </Link>
          </div>
        </div>
      </article>
    </>
  )
}
