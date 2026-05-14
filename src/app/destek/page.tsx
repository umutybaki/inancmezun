import type { Metadata } from 'next'
import { PageHeader } from '@/components/PageHeader'
import { constructMetadata } from '@/lib/seo'
import Link from 'next/link'

export const metadata: Metadata = constructMetadata({
  title: 'Destek Ol',
  description:
    'İnanç Lisesi Mezunlar Derneği\'ne aidat, bağış veya gönüllülükle destek olun.',
})

const supportOptions = [
  {
    eyebrow: 'Üyelik',
    title: 'Yıllık Aidat',
    amount: '250 ₺ / yıl',
    description:
      'Derneğe kayıtlı üye olarak etkinliklere öncelikli katılım hakkı kazanın. Yıllık aidatınız derneğin operasyonel giderlerini karşılamaya doğrudan katkı sağlar.',
    cta: 'Üye Ol',
    ctaHref: 'mailto:inancmezun@gmail.com?subject=Üyelik%20Başvurusu',
    variant: 'light' as const,
  },
  {
    eyebrow: 'Bağış',
    title: 'Tek Seferlik Bağış',
    amount: 'İstediğiniz kadar',
    description:
      'Burs fonuna, okul altyapı projelerine veya etkinlik düzenlenmesine destek olmak için tek seferlik bağış yapabilirsiniz.',
    cta: 'Bağış Yap',
    ctaHref: 'mailto:inancmezun@gmail.com?subject=Bağış%20Hakkında',
    variant: 'dark' as const,
  },
  {
    eyebrow: 'Gönüllülük',
    title: 'Gönüllü Olmak',
    amount: 'Zamanınızla katkı',
    description:
      'Etkinlik organizasyonu, mentorluk, içerik üretimi veya iletişim alanlarında gönüllü olarak yer alabilirsiniz. Her katkı değerlidir.',
    cta: 'Gönüllü Başvurusu',
    ctaHref: 'mailto:inancmezun@gmail.com?subject=Gönüllü%20Olmak%20İstiyorum',
    variant: 'light' as const,
  },
]

export default function DestekPage() {
  return (
    <>
      <PageHeader
        title="Destek Ol"
        subtitle="Emeğinizle ya da katkınızla derneğimizin gücüne güç katın."
        breadcrumb={[{ label: 'Destek Ol', href: '/destek' }]}
      />

      {/* Intro */}
      <section className="pt-14 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <p
            className="text-base leading-relaxed"
            style={{
              color: 'var(--color-ink-muted)',
              fontFamily: 'var(--font-serif)',
            }}
          >
            İLMD, gönüllü ilkeleriyle ve üyelerinin katkılarıyla ayakta duran bir
            dernektir. Kaynaklarımız; burs programları, okul ile ilişkiler, etkinlikler
            ve dijital altyapı için kullanılmaktadır. Her türlü destek, geçmişimize
            verilen bir değerdir.
          </p>
        </div>
      </section>

      {/* Support cards */}
      <section className="py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {supportOptions.map((opt) => {
              const isLight = opt.variant === 'light'
              return (
                <div
                  key={opt.title}
                  className="flex flex-col gap-4 p-7 rounded-lg"
                  style={{
                    backgroundColor: isLight
                      ? 'var(--color-cream-alt)'
                      : 'var(--color-ink-soft)',
                    border: isLight
                      ? '1px solid var(--color-border)'
                      : 'none',
                  }}
                >
                  <p
                    className="text-xs font-semibold uppercase tracking-widest"
                    style={{
                      color: isLight
                        ? 'var(--color-red)'
                        : 'var(--color-yellow)',
                    }}
                  >
                    {opt.eyebrow}
                  </p>
                  <h3
                    className="text-xl font-bold leading-snug"
                    style={{
                      fontFamily: 'var(--font-serif)',
                      color: isLight
                        ? 'var(--color-ink)'
                        : 'var(--color-cream)',
                    }}
                  >
                    {opt.title}
                  </h3>
                  <p
                    className="text-sm font-semibold"
                    style={{
                      color: isLight
                        ? 'var(--color-yellow-deep)'
                        : 'var(--color-yellow)',
                    }}
                  >
                    {opt.amount}
                  </p>
                  <p
                    className="text-sm leading-relaxed flex-1"
                    style={{
                      color: isLight
                        ? 'var(--color-ink-muted)'
                        : 'var(--color-ink-tertiary)',
                    }}
                  >
                    {opt.description}
                  </p>
                  <a
                    href={opt.ctaHref}
                    className="inline-flex items-center text-sm font-semibold mt-2 border-b pb-0.5 self-start"
                    style={{
                      color: isLight
                        ? 'var(--color-red)'
                        : 'var(--color-yellow)',
                      borderColor: isLight
                        ? 'var(--color-red)'
                        : 'var(--color-yellow)',
                    }}
                  >
                    {opt.cta} →
                  </a>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Şeffaflık */}
      <section
        className="py-14 px-4 sm:px-6 lg:px-8 mt-6"
        style={{ backgroundColor: 'var(--color-cream-warm)' }}
      >
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-xl font-bold mb-5"
            style={{
              fontFamily: 'var(--font-serif)',
              color: 'var(--color-ink)',
            }}
          >
            Şeffaflık taahhüdümüz
          </h2>
          <p
            className="text-sm leading-relaxed mb-4"
            style={{ color: 'var(--color-ink-muted)' }}
          >
            Derneğimiz, gelir ve giderlere ilişkin yıllık finansal raporunu tüm
            üyelerle ve kamuoyuyla paylaşmaktadır. Her yıl gerçekleştirilen Genel
            Kurul toplantısında hesaplar denetim kurulu tarafından incelenir ve
            oy çokluğuyla onaylanır.
          </p>
          <p
            className="text-sm leading-relaxed"
            style={{ color: 'var(--color-ink-muted)' }}
          >
            Bağış ve aidat gelirlerinin kullanım detaylarını öğrenmek için{' '}
            <Link
              href="/iletisim"
              style={{ color: 'var(--color-red)' }}
              className="underline underline-offset-2"
            >
              bizimle iletişime geçebilirsiniz
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  )
}
