import { Mail, ExternalLink } from 'lucide-react'

export function ContactInfo() {
  return (
    <div className="flex flex-col gap-8">
      {/* E-posta */}
      <div>
        <h3
          className="text-xs font-semibold uppercase tracking-widest mb-3"
          style={{ color: 'var(--color-red)' }}
        >
          E-posta
        </h3>
        <a
          href="mailto:inancmezun@gmail.com"
          className="inline-flex items-center gap-2 text-base font-medium transition-colors"
          style={{ color: 'var(--color-ink)' }}
        >
          <Mail size={16} style={{ color: 'var(--color-ink-muted)' }} />
          inancmezun@gmail.com
        </a>
      </div>

      {/* Sosyal medya */}
      <div>
        <h3
          className="text-xs font-semibold uppercase tracking-widest mb-3"
          style={{ color: 'var(--color-red)' }}
        >
          Sosyal Medya
        </h3>
        <div className="flex gap-4">
          <SocialLink href="https://instagram.com/inancmezun" label="Instagram" />
          <SocialLink href="https://linkedin.com/company/inancmezun" label="LinkedIn" />
        </div>
      </div>
    </div>
  )
}

function SocialLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 text-sm font-medium transition-colors"
      style={{ color: 'var(--color-ink-muted)' }}
    >
      <ExternalLink size={14} />
      {label}
    </a>
  )
}
