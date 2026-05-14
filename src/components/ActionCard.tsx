import Link from 'next/link'

interface ActionCardProps {
  eyebrow: string
  title: string
  description: string
  ctaText: string
  ctaHref: string
  variant: 'light' | 'dark'
}

export function ActionCard({
  eyebrow,
  title,
  description,
  ctaText,
  ctaHref,
  variant,
}: ActionCardProps) {
  const isLight = variant === 'light'

  return (
    <article
      className="flex flex-col gap-4 p-7 rounded-lg h-full"
      style={{
        backgroundColor: isLight
          ? 'var(--color-cream-alt)'
          : 'var(--color-ink-soft)',
        border: isLight ? '1px solid var(--color-border)' : 'none',
      }}
    >
      {/* Eyebrow */}
      <p
        className="text-xs font-semibold uppercase tracking-widest"
        style={{
          color: isLight ? 'var(--color-red)' : 'var(--color-yellow)',
        }}
      >
        {eyebrow}
      </p>

      {/* Title */}
      <h3
        className="text-xl font-bold leading-snug"
        style={{
          fontFamily: 'var(--font-serif)',
          color: isLight ? 'var(--color-ink)' : 'var(--color-cream)',
        }}
      >
        {title}
      </h3>

      {/* Description */}
      <p
        className="text-sm leading-relaxed flex-1"
        style={{
          color: isLight ? 'var(--color-ink-muted)' : 'var(--color-ink-tertiary)',
        }}
      >
        {description}
      </p>

      {/* CTA */}
      <Link
        href={ctaHref}
        className="inline-flex items-center text-sm font-semibold mt-2 border-b pb-0.5 transition-colors self-start"
        style={{
          color: isLight ? 'var(--color-red)' : 'var(--color-yellow)',
          borderColor: isLight ? 'var(--color-red)' : 'var(--color-yellow)',
        }}
      >
        {ctaText} →
      </Link>
    </article>
  )
}
