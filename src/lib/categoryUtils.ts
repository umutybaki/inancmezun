import type { Announcement } from '@/types/content'
import type React from 'react'

type Category = Announcement['category']

export function categoryLabel(category: Category): string {
  switch (category) {
    case 'dernek':
      return 'Dernek'
    case 'mezun-haberi':
      return 'Mezun Haberi'
    case 'kampanya':
      return 'Kampanya'
    default:
      return category
  }
}

export function categoryStyle(category: Category): React.CSSProperties {
  switch (category) {
    case 'dernek':
      return {
        backgroundColor: 'var(--color-red)',
        color: 'var(--color-cream)',
      }
    case 'mezun-haberi':
      return {
        backgroundColor: 'var(--color-yellow)',
        color: 'var(--color-ink)',
      }
    case 'kampanya':
      return {
        backgroundColor: 'var(--color-ink)',
        color: 'var(--color-cream)',
      }
    default:
      return {}
  }
}
