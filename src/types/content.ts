export interface Announcement {
  title: string
  slug: string
  date: string
  category: 'dernek' | 'mezun-haberi' | 'kampanya'
  featured?: boolean
  excerpt: string
  cover?: string
  externalLink?: string
  externalLinkLabel?: string
  content: string
}

export interface BlogPost {
  title: string
  slug: string
  date: string
  author: string
  authorYear: number
  authorBio?: string
  cover?: string
  excerpt: string
  tags?: string[]
  readingTime?: number
  content: string
}

export interface BoardMemberType {
  ad: string
  rol: string
  mezuniyetYili: number
  kisaBio: string
  foto?: string
  linkedin?: string
}

export interface BoardData {
  dönem: string
  üyeler: BoardMemberType[]
}
