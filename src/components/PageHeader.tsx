import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

interface PageHeaderProps {
  title: string
  subtitle?: string
  breadcrumb?: { label: string; href: string }[]
}

export function PageHeader({ title, subtitle, breadcrumb }: PageHeaderProps) {
  return (
    <section
      style={{ backgroundColor: 'var(--color-cream-warm)' }}
      className="border-b"
      aria-labelledby="page-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        {/* Breadcrumb */}
        {breadcrumb && breadcrumb.length > 0 && (
          <nav
            aria-label="Konum"
            className="flex items-center gap-1 text-xs mb-4"
            style={{ color: 'var(--color-ink-muted)' }}
          >
            <Link
              href="/"
              className="hover:underline"
              style={{ color: 'var(--color-ink-muted)' }}
            >
              Ana Sayfa
            </Link>
            {breadcrumb.map((crumb) => (
              <span key={crumb.href} className="flex items-center gap-1">
                <ChevronRight size={12} />
                <Link
                  href={crumb.href}
                  className="hover:underline"
                  style={{ color: 'var(--color-ink-muted)' }}
                >
                  {crumb.label}
                </Link>
              </span>
            ))}
          </nav>
        )}

        {/* Heading */}
        <h1
          id="page-heading"
          className="text-3xl md:text-4xl font-bold leading-tight"
          style={{
            fontFamily: 'var(--font-serif)',
            color: 'var(--color-ink)',
          }}
        >
          {title}
        </h1>

        {/* Subtitle */}
        {subtitle && (
          <p
            className="mt-3 text-base md:text-lg max-w-2xl"
            style={{ color: 'var(--color-ink-muted)' }}
          >
            {subtitle}
          </p>
        )}
      </div>
    </section>
  )
}
