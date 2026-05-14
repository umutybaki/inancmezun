import { HeroQuote } from '@/components/HeroQuote'
import { ActionCard } from '@/components/ActionCard'
import { FeaturedAnnouncement } from '@/components/FeaturedAnnouncement'
import { getFeaturedAnnouncement } from '@/lib/content'
import Link from 'next/link'

const actionCards = [
  {
    eyebrow: 'Biz kimiz?',
    title: 'Aynı köklere sahip, farklı yollarda yürüyenler',
    description:
      'İLMD, İnanç Lisesi (TEVİTÖL) mezunlarını bir arada tutan, dayanışmayı ve paylaşımı ilke edinen gönüllü bir dernektir.',
    ctaText: 'Hakkımızda oku',
    ctaHref: '/hakkimizda',
    variant: 'light' as const,
  },
  {
    eyebrow: 'Güncel Haberler',
    title: 'Son duyurular ve mezun hikayeleri',
    description:
      'Dernek etkinliklerini, mezun başarılarını ve kampanyaları takip edin. Siz de haberinizi paylaşabilirsiniz.',
    ctaText: 'Duyurulara git',
    ctaHref: '/duyurular',
    variant: 'dark' as const,
  },
  {
    eyebrow: 'Destek Ol',
    title: 'Emeğiniz ya da katkınızla güç katın',
    description:
      'Yıllık aidat, tek seferlik bağış veya gönüllülük ile derneğimizin büyümesine ortak olun.',
    ctaText: 'Destek seçenekleri',
    ctaHref: '/destek',
    variant: 'light' as const,
  },
]

export default async function HomePage() {
  const featuredAnnouncement = await getFeaturedAnnouncement()

  return (
    <>
      {/* Hero */}
      <HeroQuote />

      {/* Divider */}
      <div style={{ height: 1, backgroundColor: 'var(--color-border)' }} />

      {/* 3-card grid */}
      <section className="py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {actionCards.map((card) => (
              <ActionCard key={card.ctaHref} {...card} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured announcement */}
      {featuredAnnouncement && (
        <FeaturedAnnouncement announcement={featuredAnnouncement} />
      )}

      {/* Hakkımızda teaser */}
      <section
        style={{ backgroundColor: 'var(--color-cream-warm)' }}
        className="py-16 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-2xl md:text-3xl font-bold mb-4"
            style={{
              fontFamily: 'var(--font-serif)',
              color: 'var(--color-ink)',
            }}
          >
            Biz kimiz?
          </h2>
          <p
            className="text-base md:text-lg leading-relaxed mb-6 max-w-2xl"
            style={{ color: 'var(--color-ink-muted)' }}
          >
            İnanç Lisesi Mezunlar Derneği (İLMD), 1993 yılından bu yana TEVİTÖL mezunlarını
            bir çatı altında buluşturma misyonunu sürdürmektedir. Derneğimiz; mezunlar
            arasındaki bağı canlı tutmak, kuruma katkı sağlamak ve yeni nesil öğrencilere
            destek olmak amacıyla kurulmuştur.
          </p>
          <Link
            href="/tarihce"
            className="text-sm font-semibold border-b pb-0.5"
            style={{
              color: 'var(--color-red)',
              borderColor: 'var(--color-red)',
            }}
          >
            Tarihçenin tamamını oku →
          </Link>
        </div>
      </section>
    </>
  )
}
