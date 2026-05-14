import Link from 'next/link'
import type { Announcement } from '@/types/content'
import { formatDate } from '@/lib/dates'
import { categoryLabel, categoryStyle } from '@/lib/categoryUtils'

interface FeaturedAnnouncementProps {
  announcement: Announcement | null
}

export function FeaturedAnnouncement({ announcement }: FeaturedAnnouncementProps) {
  if (!announcement) return null

  return (
    <section className="py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <p
          className="text-xs font-semibold uppercase tracking-widest mb-5"
          style={{ color: 'var(--color-ink-muted)' }}
        >
          Son Duyuru
        </p>
        <div
          className="pl-5 py-6 pr-6 rounded-lg"
          style={{
            borderLeft: '3px solid var(--color-yellow)',
            backgroundColor: 'var(--color-cream-alt)',
            border: '1px solid var(--color-border)',
            borderLeftWidth: '3px',
            borderLeftColor: 'var(--color-yellow)',
          }}
        >
          {/* Category + Date */}
          <div className="flex flex-wrap items-center gap-3 mb-3">
            <span
              className="text-xs font-semibold px-2.5 py-0.5 rounded-full"
              style={categoryStyle(announcement.category)}
            >
              {categoryLabel(announcement.category)}
            </span>
            <span
              className="text-xs"
              style={{ color: 'var(--color-ink-muted)' }}
            >
              {formatDate(announcement.date)}
            </span>
          </div>

          {/* Title */}
          <h2
            className="text-xl font-bold mb-2 leading-snug"
            style={{
              fontFamily: 'var(--font-serif)',
              color: 'var(--color-ink)',
            }}
          >
            {announcement.title}
          </h2>

          {/* Excerpt */}
          <p
            className="text-sm leading-relaxed mb-4 max-w-2xl"
            style={{ color: 'var(--color-ink-muted)' }}
          >
            {announcement.excerpt}
          </p>

          {/* Link */}
          <Link
            href={`/duyurular/${announcement.slug}`}
            className="text-sm font-semibold border-b pb-0.5"
            style={{
              color: 'var(--color-red)',
              borderColor: 'var(--color-red)',
            }}
          >
            Detay →
          </Link>
        </div>
      </div>
    </section>
  )
}
