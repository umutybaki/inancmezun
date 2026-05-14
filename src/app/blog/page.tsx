import type { Metadata } from 'next'
import { PageHeader } from '@/components/PageHeader'
import { PostCard } from '@/components/PostCard'
import { getAllBlogPosts } from '@/lib/content'
import { constructMetadata } from '@/lib/seo'
import { EmptyState } from '@/components/EmptyState'

export const metadata: Metadata = constructMetadata({
  title: 'Blog',
  description:
    'İnanç Lisesi mezunlarının deneyimleri, hikayeleri ve düşünceleri.',
})

export default async function BlogPage() {
  const posts = await getAllBlogPosts()

  return (
    <>
      <PageHeader
        title="Blog"
        subtitle="Mezunlarımızın kaleminden: hayat hikayeleri, kariyer yolculukları ve düşünceler."
        breadcrumb={[{ label: 'Blog', href: '/blog' }]}
      />

      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Intro + CTA */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-10">
            <p
              className="text-sm max-w-xl"
              style={{ color: 'var(--color-ink-muted)' }}
            >
              Bir mezun olarak deneyimlerinizi, birikimlerinizi ve bakış açınızı
              paylaşmak ister misiniz?
            </p>
            <a
              href="mailto:inancmezun@gmail.com?subject=Blog%20Yazısı%20Göndermek%20İstiyorum"
              className="text-sm font-semibold border-b pb-0.5 shrink-0"
              style={{
                color: 'var(--color-red)',
                borderColor: 'var(--color-red)',
              }}
            >
              Yazı göndermek istiyorum →
            </a>
          </div>

          {/* Grid */}
          {posts.length === 0 ? (
            <EmptyState
              message="Henüz yayımlanmış bir blog yazısı yok."
              ctaText="Yazı gönderin"
              ctaHref="mailto:inancmezun@gmail.com"
            />
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => (
                <PostCard key={post.slug} post={post} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  )
}
