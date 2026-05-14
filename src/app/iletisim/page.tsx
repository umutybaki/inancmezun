import type { Metadata } from 'next'
import { PageHeader } from '@/components/PageHeader'
import { ContactInfo } from '@/components/ContactInfo'
import { LocationMap } from '@/components/LocationMap'
import { constructMetadata } from '@/lib/seo'

export const metadata: Metadata = constructMetadata({
  title: 'İletişim',
  description: 'İnanç Lisesi Mezunlar Derneği iletişim bilgileri ve konum.',
})

const DIRECTIONS_URL =
  'https://www.google.com/maps/dir/?api=1&destination=TEV+%C4%B0nan%C3%A7+T%C3%BCrke%C5%9F+%C3%96zel+Lisesi,+Muallimk%C3%B6y,+Gebze'

export default function IletisimPage() {
  return (
    <>
      <PageHeader
        title="İletişim"
        subtitle="Soru, öneri veya iş birliği için bize ulaşın."
        breadcrumb={[{ label: 'İletişim', href: '/iletisim' }]}
      />

      <section className="py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Contact info — 40% */}
            <div className="lg:w-2/5">
              <ContactInfo />
            </div>

            {/* Map — 60% */}
            <div className="lg:w-3/5 flex flex-col gap-3">
              <LocationMap />
              <a
                href={DIRECTIONS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold self-start border-b pb-0.5"
                style={{
                  color: 'var(--color-red)',
                  borderColor: 'var(--color-red)',
                }}
              >
                Yol tarifi al →
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
