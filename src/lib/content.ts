import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import remarkHtml from 'remark-html'
import type { Announcement, BlogPost } from '@/types/content'

const contentDir = path.join(process.cwd(), 'src/content')

async function markdownToHtml(markdown: string): Promise<string> {
  const result = await remark()
    .use(remarkHtml, { sanitize: false })
    .process(markdown)
  return result.toString()
}

function slugFromFilename(filename: string): string {
  return filename.replace(/\.md$/, '')
}

// ─── Announcements ──────────────────────────────────────────────────────────

export async function getAllAnnouncements(): Promise<Announcement[]> {
  const dir = path.join(contentDir, 'duyurular')

  if (!fs.existsSync(dir)) return []

  const files = fs.readdirSync(dir).filter((f) => f.endsWith('.md'))

  const announcements = await Promise.all(
    files.map(async (file) => {
      const slug = slugFromFilename(file)
      const raw = fs.readFileSync(path.join(dir, file), 'utf8')
      const { data, content } = matter(raw)
      const html = await markdownToHtml(content)

      return {
        title: data.title ?? '',
        slug,
        date: data.date ?? '',
        category: data.category ?? 'dernek',
        featured: data.featured ?? false,
        excerpt: data.excerpt ?? '',
        cover: data.cover,
        externalLink: data.externalLink,
        externalLinkLabel: data.externalLinkLabel,
        content: html,
      } as Announcement
    })
  )

  return announcements.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )
}

export async function getAnnouncementBySlug(
  slug: string
): Promise<Announcement | null> {
  const filePath = path.join(contentDir, 'duyurular', `${slug}.md`)

  if (!fs.existsSync(filePath)) return null

  const raw = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(raw)
  const html = await markdownToHtml(content)

  return {
    title: data.title ?? '',
    slug,
    date: data.date ?? '',
    category: data.category ?? 'dernek',
    featured: data.featured ?? false,
    excerpt: data.excerpt ?? '',
    cover: data.cover,
    externalLink: data.externalLink,
    externalLinkLabel: data.externalLinkLabel,
    content: html,
  } as Announcement
}

export async function getFeaturedAnnouncement(): Promise<Announcement | null> {
  const all = await getAllAnnouncements()
  return all.find((a) => a.featured) ?? all[0] ?? null
}

// ─── Blog Posts ──────────────────────────────────────────────────────────────

export async function getAllBlogPosts(): Promise<BlogPost[]> {
  const dir = path.join(contentDir, 'blog')

  if (!fs.existsSync(dir)) return []

  const files = fs.readdirSync(dir).filter((f) => f.endsWith('.md'))

  const posts = await Promise.all(
    files.map(async (file) => {
      const slug = slugFromFilename(file)
      const raw = fs.readFileSync(path.join(dir, file), 'utf8')
      const { data, content } = matter(raw)
      const html = await markdownToHtml(content)

      // Estimate reading time: ~200 words/minute
      const wordCount = content.trim().split(/\s+/).length
      const readingTime = data.readingTime ?? Math.max(1, Math.round(wordCount / 200))

      return {
        title: data.title ?? '',
        slug,
        date: data.date ?? '',
        author: data.author ?? '',
        authorYear: data.authorYear ?? 0,
        authorBio: data.authorBio,
        cover: data.cover,
        excerpt: data.excerpt ?? '',
        tags: data.tags ?? [],
        readingTime,
        content: html,
      } as BlogPost
    })
  )

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )
}

export async function getBlogPostBySlug(
  slug: string
): Promise<BlogPost | null> {
  const filePath = path.join(contentDir, 'blog', `${slug}.md`)

  if (!fs.existsSync(filePath)) return null

  const raw = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(raw)
  const html = await markdownToHtml(content)

  const wordCount = content.trim().split(/\s+/).length
  const readingTime = data.readingTime ?? Math.max(1, Math.round(wordCount / 200))

  return {
    title: data.title ?? '',
    slug,
    date: data.date ?? '',
    author: data.author ?? '',
    authorYear: data.authorYear ?? 0,
    authorBio: data.authorBio,
    cover: data.cover,
    excerpt: data.excerpt ?? '',
    tags: data.tags ?? [],
    readingTime,
    content: html,
  } as BlogPost
}
