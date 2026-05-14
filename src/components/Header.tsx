'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Hakkımızda', href: '/#hakkimizda' },
  { label: 'Destek Ol', href: '/#destek' },
  { label: 'İletişim', href: '/iletisim' },
  { label: 'Duyurular', href: '/duyurular' },
  { label: 'Blog', href: '/blog' },
]

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header
      style={{ backgroundColor: 'var(--color-red)' }}
      className="relative z-50"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-3">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3"
            onClick={() => setMobileOpen(false)}
          >
            <Image
              src="/tevinanc_logo.png"
              alt="TEV İnanç Lisesi logosu"
              width={84}
              height={84}
              className="object-contain"
            />
            <span
              className="text-base font-bold leading-tight"
              style={{ color: 'var(--color-cream)' }}
            >
              Mezunlar Derneği
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
          </nav>
        </div>
      )}
    </header>
  )
}
