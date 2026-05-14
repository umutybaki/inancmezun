import Image from 'next/image'
import { ExternalLink } from 'lucide-react'
import type { BoardMemberType } from '@/types/content'

interface BoardMemberProps {
  member: BoardMemberType
}

function getInitials(name: string): string {
  return name
    .split(' ')
    .map((n) => n[0])
    .slice(0, 2)
    .join('')
    .toUpperCase()
}

export function BoardMember({ member }: BoardMemberProps) {
  return (
    <article
      className="flex flex-col gap-4 p-6 rounded-lg"
      style={{
        backgroundColor: 'var(--color-cream-alt)',
        border: '1px solid var(--color-border)',
      }}
    >
      {/* Avatar */}
      <div className="flex items-center gap-6">
        {member.foto ? (
          <div className="relative w-16 h-16 rounded-full overflow-hidden shrink-0">
            <Image
              src={member.foto}
              alt={member.ad}
              fill
              className="object-cover"
              sizes="64px"
            />
          </div>
        ) : (
          <div
            className="w-16 h-16 rounded-full flex items-center justify-center shrink-0 text-lg font-bold"
            style={{
              backgroundColor: 'var(--color-red)',
              color: 'var(--color-cream)',
              fontFamily: 'var(--font-serif)',
            }}
          >
            {getInitials(member.ad)}
          </div>
        )}

        <div className="flex flex-col gap-0.5">
          <h3
            className="font-bold text-base leading-snug"
            style={{
              color: 'var(--color-ink)',
              fontFamily: 'var(--font-serif)',
            }}
          >
            {member.ad}
          </h3>
          <p
            className="text-sm font-medium"
            style={{ color: 'var(--color-red)' }}
          >
            {member.rol}
          </p>
          <p
            className="text-xs"
            style={{ color: 'var(--color-ink-tertiary)' }}
          >
            Mezuniyet {member.mezuniyetYili}
          </p>
        </div>
      </div>

      {/* Bio */}
      <p
        className="text-sm leading-relaxed"
        style={{ color: 'var(--color-ink-muted)' }}
      >
        {member.kisaBio}
      </p>

      {/* LinkedIn */}
      {member.linkedin && (
        <a
          href={member.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-medium self-start"
          style={{ color: 'var(--color-ink-muted)' }}
        >
          <ExternalLink size={12} />
          LinkedIn
        </a>
      )}
    </article>
  )
}
