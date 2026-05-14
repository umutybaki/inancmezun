import Link from 'next/link'

export default function NotFound() {
  return (
    <section
      className="flex flex-col items-center justify-center flex-1 py-28 px-4 text-center"
      style={{ backgroundColor: 'var(--color-cream)' }}
    >
      <p
        className="text-xs font-semibold uppercase tracking-widest mb-4"
        style={{ color: 'var(--color-red)' }}
      >
        404
      </p>
      <h1
        className="text-3xl md:text-4xl font-bold mb-4"
        style={{
          fontFamily: 'var(--font-serif)',
          color: 'var(--color-ink)',
        }}
      >
        Sayfa bulunamadı
      </h1>
      <p
        className="text-base max-w-md mb-10"
        style={{ color: 'var(--color-ink-muted)' }}
      >
        Aradığınız sayfa taşınmış, silinmiş ya da hiç var olmamış olabilir.
        Belki de aynı ranzada yanlış kata çıktınız.
      </p>
      <Link
        href="/"
        className="inline-flex items-center px-6 py-2.5 rounded text-sm font-semibold"
        style={{
          backgroundColor: 'var(--color-red)',
          color: 'var(--color-cream)',
        }}
      >
        Ana sayfaya dön →
      </Link>
    </section>
  )
}
