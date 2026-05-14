import { HeroQuote } from '@/components/HeroQuote'
import { FeaturedAnnouncement } from '@/components/FeaturedAnnouncement'
import { BoardMember } from '@/components/BoardMember'
import { getFeaturedAnnouncement } from '@/lib/content'
import kurulData from '@/content/yonetim/kurul.json'
import type { BoardData } from '@/types/content'

const board = kurulData as BoardData

const missions = [
  {
    title: 'Autodeploy çalışıyor',
    description:
      'Bu string github actions tarafından gönderildi.',
  },
  {
    title: 'Hatırlamak ve Hatırlatmak',
    description:
      "İnanç Lisesi'nin bize kattığı değerleri yaşatmak, okul tarihini gelecek nesillere aktarmak.",
  },
  {
    title: 'Köprü Olmak',
    description:
      'Bugünkü öğrencilere mentorluk ve kariyer desteği sunarak geçmiş ile geleceği birbirine bağlamak.',
  },
]

const supportOptions = [
  {
    eyebrow: 'Üyelik',
    title: 'Yıllık Aidat',
    amount: '250 ₺ / yıl',
    description:
      'Derneğe kayıtlı üye olarak etkinliklere öncelikli katılım hakkı kazanın.',
    cta: 'Üye Ol',
    ctaHref: 'mailto:inancmezun@gmail.com?subject=Üyelik%20Başvurusu',
    dark: false,
  },
  {
    eyebrow: 'Bağış',
    title: 'Tek Seferlik Bağış',
    amount: 'İstediğiniz kadar',
    description:
      'Burs fonuna veya etkinlik düzenlenmesine destek olmak için tek seferlik bağış yapabilirsiniz.',
    cta: 'Bağış Yap',
    ctaHref: 'mailto:inancmezun@gmail.com?subject=Bağış%20Hakkında',
    dark: true,
  },
  {
    eyebrow: 'Gönüllülük',
    title: 'Gönüllü Olmak',
    amount: 'Zamanınızla katkı',
    description:
      'Etkinlik organizasyonu, mentorluk veya iletişim alanlarında gönüllü olarak yer alabilirsiniz.',
    cta: 'Gönüllü Başvurusu',
    ctaHref: 'mailto:inancmezun@gmail.com?subject=Gönüllü%20Olmak%20İstiyorum',
    dark: false,
  },
]

export default async function HomePage() {
  const featuredAnnouncement = await getFeaturedAnnouncement()

  return (
    <>
      <HeroQuote />

      <div style={{ height: 1, backgroundColor: 'var(--color-border)' }} />

      {featuredAnnouncement && (
        <FeaturedAnnouncement announcement={featuredAnnouncement} />
      )}

      {/* Hakkımızda */}
      <section id="hakkimizda" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: 'var(--color-red)' }}
          >
            Hakkımızda
          </p>
          <h2
            className="text-2xl md:text-3xl font-bold mb-6"
            style={{ fontFamily: 'var(--font-serif)', color: 'var(--color-ink)' }}
          >
            Biz kimiz?
          </h2>
          <p
            className="text-lg leading-relaxed mb-3 max-w-3xl"
            style={{ color: 'var(--color-ink-muted)', fontFamily: 'var(--font-serif)' }}
          >
            İnanç Lisesi Mezunlar Derneği (İLMD), Kocaeli&apos;nin Gebze ilçesindeki
            Muallimköy&apos;de yer alan TEVİTÖL bünyesindeki İnanç Lisesi&apos;nden mezun
            olan bireylerin dayanışma ve paylaşım örgütüdür.
          </p>
          <p
            className="text-base leading-relaxed mb-12 max-w-3xl"
            style={{ color: 'var(--color-ink-muted)' }}
          >
            Amacımız; mezunlar arasındaki bağı güçlendirmek, kuruma katkı sağlamak,
            yeni nesil öğrencilere destek olmak ve ortak anıları yaşatmaktır.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {missions.map((m) => (
              <div
                key={m.title}
                className="p-6 rounded-lg"
                style={{
                  backgroundColor: 'var(--color-cream-warm)',
                  border: '1px solid var(--color-border)',
                }}
              >
                <h3
                  className="text-base font-bold mb-2"
                  style={{ fontFamily: 'var(--font-serif)', color: 'var(--color-ink)' }}
                >
                  {m.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--color-ink-muted)' }}>
                  {m.description}
                </p>
              </div>
            ))}
          </div>

          {/* Yönetim Kurulu */}
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-2"
            style={{ color: 'var(--color-red)' }}
          >
            {board.dönem} Dönemi
          </p>
          <h3
            className="text-xl font-bold mb-8"
            style={{ fontFamily: 'var(--font-serif)', color: 'var(--color-ink)' }}
          >
            Yönetim Kurulu
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {board.üyeler.map((member) => (
              <BoardMember key={member.ad} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* Destek Ol */}
      <section
        id="destek"
        className="py-16 px-4 sm:px-6 lg:px-8"
        style={{ backgroundColor: 'var(--color-cream-warm)' }}
      >
        <div className="max-w-6xl mx-auto">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: 'var(--color-red)' }}
          >
            Destek Ol
          </p>
          <h2
            className="text-2xl md:text-3xl font-bold mb-4"
            style={{ fontFamily: 'var(--font-serif)', color: 'var(--color-ink)' }}
          >
            Derneğin yaşaması için
          </h2>
          <p
            className="text-base leading-relaxed mb-10 max-w-2xl"
            style={{ color: 'var(--color-ink-muted)' }}
          >
            İLMD, gönüllü ilkeleriyle ve üyelerinin katkılarıyla ayakta duran bir
            dernektir. Her türlü destek, geçmişimize verilen bir değerdir.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {supportOptions.map((opt) => (
              <div
                key={opt.title}
                className="flex flex-col gap-4 p-7 rounded-lg"
                style={{
                  backgroundColor: opt.dark ? 'var(--color-ink-soft)' : 'var(--color-cream-alt)',
                  border: opt.dark ? 'none' : '1px solid var(--color-border)',
                }}
              >
                <p
                  className="text-xs font-semibold uppercase tracking-widest"
                  style={{ color: opt.dark ? 'var(--color-yellow)' : 'var(--color-red)' }}
                >
                  {opt.eyebrow}
                </p>
                <h3
                  className="text-xl font-bold"
                  style={{
                    fontFamily: 'var(--font-serif)',
                    color: opt.dark ? 'var(--color-cream)' : 'var(--color-ink)',
                  }}
                >
                  {opt.title}
                </h3>
                <p
                  className="text-sm font-semibold"
                  style={{ color: opt.dark ? 'var(--color-yellow)' : 'var(--color-yellow-deep)' }}
                >
                  {opt.amount}
                </p>
                <p
                  className="text-sm leading-relaxed flex-1"
                  style={{ color: opt.dark ? 'var(--color-ink-tertiary)' : 'var(--color-ink-muted)' }}
                >
                  {opt.description}
                </p>
                <a
                  href={opt.ctaHref}
                  className="text-sm font-semibold border-b pb-0.5 self-start"
                  style={{
                    color: opt.dark ? 'var(--color-yellow)' : 'var(--color-red)',
                    borderColor: opt.dark ? 'var(--color-yellow)' : 'var(--color-red)',
                  }}
                >
                  {opt.cta} →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
