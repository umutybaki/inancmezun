import type { Metadata } from 'next'
import { PageHeader } from '@/components/PageHeader'
import { constructMetadata } from '@/lib/seo'

export const metadata: Metadata = constructMetadata({
  title: 'Tarihçe',
  description:
    'İnanç Lisesi ve Mezunlar Derneği\'nin kuruluşundan günümüze tarihi.',
})

const sections = [
  {
    id: 'kurulusun-arkasindan',
    heading: 'Kuruluşun Arkasındaki İlham',
    content: `
      İnanç Lisesi, Türkiye'nin öncü yatılı eğitim kurumlarından biri olan TEVİTÖL
      (Türkiye Eğitim Vakfı İktisadi İşletmesi) bünyesinde, Kocaeli'nin Gebze ilçesine
      bağlı Muallimköy'de faaliyete geçmiştir. Muallimköy'ün doğayla iç içe, sakin
      ortamı; öğrencilerin hem akademik hem de kişisel olarak gelişmelerine zemin
      hazırlamıştır.

      Okulun kuruluş felsefesi, her koşuldan gelen yetenekli gençlere nitelikli ve
      değerlerle örülü bir eğitim sunmaktır. Bu vizyon, ilk mezunlarından itibaren
      güçlü bir aidiyet duygusu doğurmuştur.
    `,
  },
  {
    id: 'ilk-mezunlar',
    heading: 'İlk Mezunlar ve Derneğin Doğuşu',
    content: `
      1993 yılında mezun olan ilk öğrenciler, okuldan ayrılmalarının ardından
      bir araya gelerek aralarındaki bağı korumak istediklerini fark ettiler.
      Ortak anılar, arkadaşlıklar ve okula duyulan derin bağlılık; resmi bir
      yapının kurulmasını kaçınılmaz kıldı.

      Böylece İnanç Lisesi Mezunlar Derneği (İLMD) hayata geçirildi. Kurucu
      üyeler, derneğin yalnızca bir "mezun klübü" olmadığını; kuruma ve gelecek
      nesil öğrencilere katkı sağlama amacı taşıdığını vurguladı.
    `,
  },
  {
    id: 'buyume-yillari',
    heading: 'Büyüme Yılları: 1993–2010',
    content: `
      Derneğin ilk yıllarında üye sayısı hızla arttı. Her yeni mezuniyet dönemiyle
      birlikte dernek tabanı genişledi; yurt içindeki şehirlerden olduğu gibi
      yurt dışındaki mezunlardan da katılım geldi.

      Bu dönemde düzenlenen yıllık buluşmalar, mezunların hem birbirleriyle hem
      de okulla bağını canlı tuttu. Dernek, mezunların kariyer planlamasında
      ağ oluşturmasına, öğrencilere burs sağlanmasına ve okul altyapısının
      güçlendirilmesine katkıda bulundu.
    `,
  },
  {
    id: 'dijital-donusum',
    heading: 'Dijital Dönüşüm ve Yeni Nesil',
    content: `
      2010'ların ortasından itibaren dijitalleşme dalgası derneği de derinden
      etkiledi. Sosyal medya platformları üzerinden mezun grupları oluşturuldu;
      uzaktan etkinlikler, çevrimiçi mentorluk programları ve dijital bültenler
      hayata geçirildi.

      Bu dönüşüm sayesinde farklı kuşakların bir arada varolduğu canlı bir
      ekosistem oluştu. 2000'li ve 2010'lu yıllarda mezun olan genç nesil,
      derneğin yönetimine ve etkinliklerine aktif biçimde dahil oldu.
    `,
  },
  {
    id: 'bugune-bakis',
    heading: 'Bugüne Bakış ve Gelecek Vizyonu',
    content: `
      Bugün İLMD, binlerce mezunu kapsayan, aktif bir yönetim kurulu ve
      gönüllü ağıyla çalışan bir dernek olarak faaliyetlerini sürdürmektedir.
      Her yıl gerçekleştirilen büyük buluşmalar, burs programları, mentorluk
      etkinlikleri ve sosyal sorumluluk projeleri derneğin ana eksenleri olmaya
      devam etmektedir.

      Önümüzdeki dönemde dernek, kurumsal kimliğini güçlendirmeyi, genç
      mezunların katılımını artırmayı ve okul ile mezunlar arasındaki köprüyü
      daha sağlam temellere oturtmayı hedeflemektedir. İnanç Lisesi'nin bize
      verdiği her şeyi ileriki nesillere aktarmak, derneğimizin en temel
      varoluş sebebidir.
    `,
  },
]

export default function TarihcePage() {
  return (
    <>
      <PageHeader
        title="Tarihçe"
        subtitle="1993'ten günümüze İnanç Lisesi Mezunlar Derneği'nin yolculuğu."
        breadcrumb={[{ label: 'Tarihçe', href: '/tarihce' }]}
      />

      <article className="py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {sections.map((section, i) => (
            <section key={section.id} id={section.id} className={i > 0 ? 'mt-14' : ''}>
              <h2
                className="text-2xl font-bold mb-5"
                style={{
                  fontFamily: 'var(--font-serif)',
                  color: 'var(--color-ink)',
                }}
              >
                {section.heading}
              </h2>
              {section.content
                .trim()
                .split('\n\n')
                .map((para, j) => (
                  <p
                    key={j}
                    className="text-base leading-relaxed mb-4"
                    style={{
                      color: 'var(--color-ink-muted)',
                      fontFamily: 'var(--font-serif)',
                    }}
                  >
                    {para.trim()}
                  </p>
                ))}
              {i < sections.length - 1 && (
                <hr
                  className="mt-12"
                  style={{ borderColor: 'var(--color-border)' }}
                />
              )}
            </section>
          ))}
        </div>
      </article>
    </>
  )
}
