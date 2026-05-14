import Link from 'next/link'

export function Footer() {
  return (
    <footer style={{ backgroundColor: 'var(--color-ink)', color: 'var(--color-cream)' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Col 1: Logo + Copyright */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <span
                className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                style={{ backgroundColor: 'var(--color-yellow)' }}
              />
              <span
                className="text-lg font-bold"
                style={{
                  fontFamily: 'var(--font-serif)',
                  color: 'var(--color-cream)',
                  letterSpacing: '0.05em',
                }}
              >
                İLMD
              </span>
            </div>
            <p className="text-sm" style={{ color: 'var(--color-ink-tertiary)' }}>
              İnanç Lisesi Mezunlar Derneği
            </p>
            <p className="text-xs mt-auto" style={{ color: 'var(--color-ink-tertiary)' }}>
              © 2026 İnanç Lisesi Mezunlar Derneği
            </p>
          </div>

          {/* Col 2: Keşfet */}
          <div className="flex flex-col gap-3">
            <h3
              className="text-xs font-semibold uppercase tracking-widest mb-1"
              style={{ color: 'var(--color-yellow)' }}
            >
              Keşfet
            </h3>
            <FooterLink href="/hakkimizda">Hakkımızda</FooterLink>
            <FooterLink href="/tarihce">Tarihçe</FooterLink>
            <FooterLink href="/duyurular">Duyurular</FooterLink>
            <FooterLink href="/blog">Blog</FooterLink>
            <FooterLink href="/destek">Destek Ol</FooterLink>
          </div>

          {/* Col 3: Takip et */}
          <div className="flex flex-col gap-3">
            <h3
              className="text-xs font-semibold uppercase tracking-widest mb-1"
              style={{ color: 'var(--color-yellow)' }}
            >
              Takip Et
            </h3>
            <FooterExternalLink href="https://facebook.com">Facebook</FooterExternalLink>
            <FooterExternalLink href="https://instagram.com">Instagram</FooterExternalLink>
            <FooterExternalLink href="https://linkedin.com">LinkedIn</FooterExternalLink>
          </div>

          {/* Col 4: İletişim */}
          <div className="flex flex-col gap-3">
            <h3
              className="text-xs font-semibold uppercase tracking-widest mb-1"
              style={{ color: 'var(--color-yellow)' }}
            >
              İletişim
            </h3>
            <FooterExternalLink href="mailto:inancmezun@gmail.com">
              inancmezun@gmail.com
            </FooterExternalLink>
            <Link
              href="/iletisim"
              className="text-sm footer-yellow-link"
              style={{ color: 'var(--color-yellow)' }}
            >
              İletişim →
            </Link>
          </div>
        </div>

        {/* Bottom line */}
        <div
          className="mt-10 pt-6 border-t text-xs"
          style={{
            borderColor: 'rgba(255,255,255,0.08)',
            color: 'var(--color-ink-tertiary)',
          }}
        >
          TEVİTÖL mezunlarının dayanışma, paylaşım ve katkı evi.
        </div>
      </div>
    </footer>
  )
}

function FooterLink({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <Link
      href={href}
      className="text-sm transition-colors hover:text-[var(--color-cream)]"
      style={{ color: 'var(--color-ink-tertiary)' }}
    >
      {children}
    </Link>
  )
}

function FooterExternalLink({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      className="text-sm transition-colors hover:text-[var(--color-cream)]"
      style={{ color: 'var(--color-ink-tertiary)' }}
    >
      {children}
    </a>
  )
}
