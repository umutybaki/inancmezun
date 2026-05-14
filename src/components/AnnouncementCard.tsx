import Link from 'next/link'
import type { Announcement } from '@/types/content'
import { formatDateShort } from '@/lib/dates'
import { categoryLabel, categoryStyle } from '@/lib/categoryUtils'

interface AnnouncementCardProps {
  announcement: Announcement
}

export function AnnouncementCard({ announcement }: AnnouncementCardProps) {
  return (
    <article
      className="flex flex-col gap-3 p-6 rounded-lg transition-shadow duration-200 hover:shadow-md"
      style={{
        backgroundColor: 'var(--color-cream-alt)',
        border: '1px solid var(--color-border)',
      }}
    >
      {/* Category + Date */}
      <div className="flex flex-wrap items-center gap-3">
        <span
          className="text-xs font-semibold px-2.5 py-0.5 rounded-full"
          style={categoryStyle(announcement.category)}
        >
          {categoryLabel(announcement.category)}
        </span>
        <span
          className="text-xs"
          style={{ color: 'var(--color-ink-tertiary)' }}
        >
          {formatDateShort(announcement.date)}
        </span>
      </div>

      {/* Title */}
      <h3
        className="text-lg font-bold leading-snug"
        style={{
          fontFamily: 'var(--font-serif)',
          color: 'var(--color-ink)',
        }}
      >
        {announcement.title}
      </h3>

      {/* Excerpt */}
      <p
        className="text-sm leading-relaxed flex-1"
        style={{ color: 'var(--color-ink-muted)' }}
      >
        {announcement.excerpt}
      </p>

      {/* CTA */}
      <Link
        href={`/duyurular/${announcement.slug}`}
        className="text-sm font-semibold self-start border-b pb-0.5 mt-1"
        style={{
          color: 'var(--color-red)',
          borderColor: 'var(--color-red)',
        }}
      >
        Okumaya devam →
      </Link>
    </article>
  )
}
