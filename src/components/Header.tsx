'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Hakkımızda', href: '/hakkimizda' },
  { label: 'Duyurular', href: '/duyurular' },
  { label: 'Blog', href: '/blog' },
  { label: 'Destek Ol', href: '/destek' },
]

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header
      style={{ backgroundColor: 'var(--color-red)' }}
      className="relative z-50"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 group"
            onClick={() => setMobileOpen(false)}
          >
            {/* Yellow accent circle */}
            <span
              className="w-2.5 h-2.5 rounded-full flex-shrink-0"
              style={{ backgroundColor: 'var(--color-yellow)' }}
            />
            <span
              className="text-xl font-bold tracking-wide"
              style={{
                fontFamily: 'var(--font-serif)',
                color: 'var(--color-cream)',
                letterSpacing: '0.05em',
              }}
            >
              İLMD
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium transition-all duration-150 border-b border-transparent hover:border-current"
                style={{ color: 'var(--color-cream)' }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center">
            <Link
              href="/iletisim"
              className="text-sm font-medium px-4 py-1.5 rounded border transition-colors duration-150"
              style={{
                color: 'var(--color-cream)',
                borderColor: 'var(--color-yellow)',
              }}
              onMouseEnter={(e) => {
                ;(e.currentTarget as HTMLAnchorElement).style.backgroundColor =
                  'var(--color-yellow)'
                ;(e.currentTarget as HTMLAnchorElement).style.color =
                  'var(--color-ink)'
              }}
              onMouseLeave={(e) => {
                ;(e.currentTarget as HTMLAnchorElement).style.backgroundColor =
                  'transparent'
                ;(e.currentTarget as HTMLAnchorElement).style.color =
                  'var(--color-cream)'
              }}
            >
              İletişim
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded"
            style={{ color: 'var(--color-cream)' }}
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label="Menüyü aç/kapat"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div
          style={{ backgroundColor: 'var(--color-red-dark)' }}
          className="md:hidden border-t"
        >
          <nav className="flex flex-col px-4 py-4 gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium py-2.5 border-b last:border-b-0"
                style={{
                  color: 'var(--color-cream)',
                  borderColor: 'rgba(255,255,255,0.1)',
                }}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/iletisim"
              className="text-sm font-medium py-2.5 mt-1"
              style={{ color: 'var(--color-yellow)' }}
              onClick={() => setMobileOpen(false)}
            >
              İletişim →
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
