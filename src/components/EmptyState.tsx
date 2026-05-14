import Link from 'next/link'

interface EmptyStateProps {
  message: string
  ctaText?: string
  ctaHref?: string
}

export function EmptyState({ message, ctaText, ctaHref }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-20 px-4 text-center">
      <div
        className="w-12 h-12 rounded-full flex items-center justify-center mb-4"
        style={{ backgroundColor: 'var(--color-cream-warm)' }}
      >
        <span
          className="text-xl"
          role="img"
          aria-label="boş"
        >
          🗂
        </span>
      </div>
      <p
        className="text-sm mb-5"
        style={{ color: 'var(--color-ink-muted)' }}
      >
        {message}
      </p>
      {ctaText && ctaHref && (
        <Link
          href={ctaHref}
          className="text-sm font-semibold border-b pb-0.5"
          style={{
            color: 'var(--color-red)',
            borderColor: 'var(--color-red)',
          }}
        >
          {ctaText} →
        </Link>
      )}
    </div>
  )
}
