import Link from 'next/link'

export function HeroQuote() {
  return (
    <section
      style={{ backgroundColor: 'var(--color-cream)' }}
      className="py-20 md:py-28 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-4xl mx-auto">
        {/* Eyebrow */}
        <p
          className="text-xs font-semibold uppercase tracking-widest mb-6"
          style={{ color: 'var(--color-red)' }}
        >
          İnanç Lisesi Mezunlar Derneği — 1993&#39;ten beri
        </p>

        {/* Main heading */}
        <h1
          className="text-3xl sm:text-4xl md:text-5xl font-bold leading-snug mb-6"
          style={{
            fontFamily: 'var(--font-serif)',
            color: 'var(--color-ink)',
          }}
        >
          Aynı sıralardan, aynı ranzalardan, aynı{' '}
          <em
            style={{
              fontStyle: 'italic',
              color: 'var(--color-red)',
            }}
          >
            hayal pencerelerinden
          </em>
          .
        </h1>

        {/* Subtext */}
        <p
          className="text-base md:text-lg max-w-2xl mb-10 leading-relaxed"
          style={{ color: 'var(--color-ink-muted)' }}
        >
          TEVİTÖL mezunlarının dayanışma, paylaşım ve katkı evi.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center gap-4">
          <Link
            href="/#destek"
            className="inline-flex items-center px-6 py-3 rounded text-sm font-semibold transition-colors duration-150 hover:opacity-90"
            style={{
              backgroundColor: 'var(--color-red)',
              color: 'var(--color-cream)',
            }}
          >
            Bize katıl
          </Link>
          <Link
            href="/#hakkimizda"
            className="text-sm font-medium border-b transition-colors duration-150 hover:opacity-70"
            style={{
              color: 'var(--color-ink)',
              borderColor: 'var(--color-ink)',
            }}
          >
            Derneği tanıyın →
          </Link>
        </div>
      </div>
    </section>
  )
}
