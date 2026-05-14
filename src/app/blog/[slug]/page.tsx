import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { PageHeader } from '@/components/PageHeader'
import { MdxContent } from '@/components/MdxContent'
import { getAllBlogPosts, getBlogPostBySlug } from '@/lib/content'
import { constructMetadata } from '@/lib/seo'
import { formatDate } from '@/lib/dates'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const posts = await getAllBlogPosts()
  return posts.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = await getBlogPostBySlug(slug)
  if (!post) return {}
  return constructMetadata({
    title: post.title,
    description: post.excerpt,
    image: post.cover,
  })
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = await getBlogPostBySlug(slug)

  if (!post) notFound()

  return (
    <>
      <PageHeader
        title={post.title}
        breadcrumb={[
          { label: 'Blog', href: '/blog' },
          { label: post.title, href: `/blog/${post.slug}` },
        ]}
      />

      <article className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-5">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2.5 py-0.5 rounded-full font-medium"
                  style={{
                    backgroundColor: 'var(--color-yellow-soft)',
                    color: 'var(--color-yellow-deep)',
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Author meta */}
          <div
            className="flex flex-wrap items-center gap-2 text-sm mb-8"
            style={{ color: 'var(--color-ink-muted)' }}
          >
            <span className="font-medium" style={{ color: 'var(--color-ink)' }}>
              {post.author}
            </span>
            <span>·</span>
            <span>Mezuniyet {post.authorYear}</span>
            <span>·</span>
            <span>{formatDate(post.date)}</span>
            {post.readingTime && (
              <>
                <span>·</span>
                <span>{post.readingTime} dk okuma</span>
              </>
            )}
          </div>

          {/* Cover image */}
          {post.cover && (
            <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden mb-10">
              <Image
                src={post.cover}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}

          {/* Body content */}
          <MdxContent html={post.content} />

          {/* Author bio box */}
          {post.authorBio && (
            <aside
              className="mt-12 p-6 rounded-lg"
              style={{
                backgroundColor: 'var(--color-cream-warm)',
                border: '1px solid var(--color-border)',
              }}
            >
              <p
                className="text-xs font-semibold uppercase tracking-widest mb-2"
                style={{ color: 'var(--color-red)' }}
              >
                Yazar hakkında
              </p>
              <p
                className="font-bold mb-1"
                style={{
                  fontFamily: 'var(--font-serif)',
                  color: 'var(--color-ink)',
                }}
              >
                {post.author} — {post.authorYear} Mezunu
              </p>
              <p
                className="text-sm leading-relaxed"
                style={{ color: 'var(--color-ink-muted)' }}
              >
                {post.authorBio}
              </p>
            </aside>
          )}

          {/* Back link */}
          <div
            className="mt-12 pt-8 border-t"
            style={{ borderColor: 'var(--color-border)' }}
          >
            <Link
              href="/blog"
              className="text-sm font-medium"
              style={{ color: 'var(--color-ink-muted)' }}
            >
              ← Tüm yazılar
            </Link>
          </div>
        </div>
      </article>
    </>
  )
}
