import type { Metadata } from 'next'
import { PageHeader } from '@/components/PageHeader'
import { FilteredAnnouncements } from './FilteredAnnouncements'
import { getAllAnnouncements } from '@/lib/content'
import { constructMetadata } from '@/lib/seo'

export const metadata: Metadata = constructMetadata({
  title: 'Duyurular',
  description:
    'İnanç Lisesi Mezunlar Derneği\'nin en güncel duyuruları, etkinlikleri ve haberleri.',
})

export default async function DuyurularPage() {
  const announcements = await getAllAnnouncements()

  return (
    <>
      <PageHeader
        title="Duyurular"
        subtitle="Dernek haberleri, mezun başarıları ve kampanyalar."
        breadcrumb={[{ label: 'Duyurular', href: '/duyurular' }]}
      />

      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <FilteredAnnouncements announcements={announcements} />
        </div>
      </section>
    </>
  )
}
