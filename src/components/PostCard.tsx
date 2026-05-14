import Link from 'next/link'
import Image from 'next/image'
import type { BlogPost } from '@/types/content'
import { formatDateShort } from '@/lib/dates'

interface PostCardProps {
  post: BlogPost
}

export function PostCard({ post }: PostCardProps) {
  return (
    <article
      className="flex flex-col rounded-lg overflow-hidden transition-shadow duration-200 hover:shadow-md"
      style={{
        backgroundColor: 'var(--color-cream-alt)',
        border: '1px solid var(--color-border)',
      }}
    >
      {/* Cover image */}
      {post.cover && (
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={post.cover}
            alt={post.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      )}

      <div className="flex flex-col gap-3 p-6 flex-1">
        {/* Meta */}
        <div
          className="flex flex-wrap items-center gap-2 text-xs"
          style={{ color: 'var(--color-ink-tertiary)' }}
        >
          <span className="font-medium" style={{ color: 'var(--color-ink-muted)' }}>
            {post.author}
          </span>
          <span>·</span>
          <span>Mezuniyet {post.authorYear}</span>
          <span>·</span>
          <span>{formatDateShort(post.date)}</span>
          {post.readingTime && (
            <>
              <span>·</span>
              <span>{post.readingTime} dk okuma</span>
            </>
          )}
        </div>

        {/* Title */}
        <h3
          className="text-xl font-bold leading-snug"
          style={{
            fontFamily: 'var(--font-serif)',
            color: 'var(--color-ink)',
          }}
        >
          {post.title}
        </h3>

        {/* Excerpt */}
        <p
          className="text-sm leading-relaxed flex-1"
          style={{ color: 'var(--color-ink-muted)' }}
        >
          {post.excerpt}
        </p>

        {/* Tags */}
        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-1">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2 py-0.5 rounded-full"
                style={{
                  backgroundColor: 'var(--color-yellow-soft)',
                  color: 'var(--color-yellow-deep)',
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* CTA */}
        <Link
          href={`/blog/${post.slug}`}
          className="text-sm font-semibold self-start border-b pb-0.5 mt-1"
          style={{
            color: 'var(--color-red)',
            borderColor: 'var(--color-red)',
          }}
        >
          Okumaya devam →
        </Link>
      </div>
    </article>
  )
}
