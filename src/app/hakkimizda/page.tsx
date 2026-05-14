import type { Metadata } from 'next'
import { PageHeader } from '@/components/PageHeader'
import { BoardMember } from '@/components/BoardMember'
import { constructMetadata } from '@/lib/seo'
import type { BoardData } from '@/types/content'
import Link from 'next/link'
import kurulData from '@/content/yonetim/kurul.json'

export const metadata: Metadata = constructMetadata({
  title: 'Hakkımızda',
  description:
    'İnanç Lisesi Mezunlar Derneği hakkında: misyonumuz, yönetim kurulumuz ve üyelik bilgileri.',
})

const board = kurulData as BoardData

const missions = [
  {
    title: 'Bağ Kurmak',
    description:
      'Yıllar ve şehirler ötesinde dağılmış mezunlarımızı tek bir çatı altında buluşturmak. Arkadaşlıkları canlandırmak, yeni dostluklar kurmak.',
  },
  {
    title: 'Hatırlamak ve Hatırlatmak',
    description:
      'İnanç Lisesi\'nin bize kattığı değerleri yaşatmak, okul tarihini ve kültürünü gelecek nesillere aktarmak.',
  },
  {
    title: 'Köprü Olmak',
    description:
      'Bugünkü öğrencilere mentorluk, burs ve kariyer desteği sunarak geçmiş ile geleceği birbirine bağlamak.',
  },
]

export default function HakkimizdaPage() {
  return (
    <>
      <PageHeader
        title="Hakkımızda"
        subtitle="İnanç Lisesi Mezunlar Derneği — kimiz, neden varız, ne yapıyoruz."
        breadcrumb={[{ label: 'Hakkımızda', href: '/hakkimizda' }]}
      />

      {/* Intro */}
      <section className="py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <p
            className="text-lg leading-relaxed mb-6"
            style={{
              color: 'var(--color-ink-muted)',
              fontFamily: 'var(--font-serif)',
            }}
          >
            İnanç Lisesi Mezunlar Derneği (İLMD), Kocaeli&#39;nin Gebze ilçesindeki
            Muallimköy&#39;de yer alan TEVİTÖL bünyesindeki İnanç Lisesi&#39;nden mezun
            olan bireylerin dayanışma ve paylaşım örgütüdür. 1993 yılında kurulan
            derneğimiz, bugün binlerce mezunu bir araya getirmektedir.
          </p>
          <p
            className="text-base leading-relaxed"
            style={{ color: 'var(--color-ink-muted)' }}
          >
            Dernek olarak amacımız; mezunlar arasındaki bağı güçlendirmek,
            kuruma katkı sağlamak, yeni nesil öğrencilere destek olmak ve
            ortak anıları yaşatmaktır.
          </p>
        </div>
      </section>

      {/* Mission cards */}
      <section
        style={{ backgroundColor: 'var(--color-cream-warm)' }}
        className="py-14 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-6xl mx-auto">
          <h2
            className="text-2xl font-bold mb-10 text-center"
            style={{
              fontFamily: 'var(--font-serif)',
              color: 'var(--color-ink)',
            }}
          >
            Misyonumuz
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {missions.map((m) => (
              <div
                key={m.title}
                className="p-7 rounded-lg"
                style={{
                  backgroundColor: 'var(--color-cream-alt)',
                  border: '1px solid var(--color-border)',
                }}
              >
                <h3
                  className="text-lg font-bold mb-3"
                  style={{
                    fontFamily: 'var(--font-serif)',
                    color: 'var(--color-ink)',
                  }}
                >
                  {m.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: 'var(--color-ink-muted)' }}
                >
                  {m.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Board members */}
      <section className="py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-2"
              style={{ color: 'var(--color-red)' }}
            >
              {board.dönem} Dönemi
            </p>
            <h2
              className="text-2xl font-bold"
              style={{
                fontFamily: 'var(--font-serif)',
                color: 'var(--color-ink)',
              }}
            >
              Yönetim Kurulu
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {board.üyeler.map((member) => (
              <BoardMember key={member.ad} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* Membership CTA */}
      <section
        style={{ backgroundColor: 'var(--color-ink)' }}
        className="py-14 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className="text-2xl md:text-3xl font-bold mb-4"
            style={{
              fontFamily: 'var(--font-serif)',
              color: 'var(--color-cream)',
            }}
          >
            Siz de aramıza katılın
          </h2>
          <p
            className="text-base mb-8 max-w-xl mx-auto"
            style={{ color: 'var(--color-ink-tertiary)' }}
          >
            İnanç Lisesi mezunuysanız derneğimizin üyesi olabilir, etkinliklere
            katılabilir ve gönüllülük faaliyetlerinde yer alabilirsiniz.
          </p>
          <Link
            href="/destek"
            className="inline-flex items-center px-7 py-3 rounded text-sm font-semibold"
            style={{
              backgroundColor: 'var(--color-red)',
              color: 'var(--color-cream)',
            }}
          >
            Üyelik ve destek
          </Link>
        </div>
      </section>
    </>
  )
}
