'use client'

import { useState } from 'react'
import { CategoryFilter } from '@/components/CategoryFilter'
import { AnnouncementCard } from '@/components/AnnouncementCard'
import { EmptyState } from '@/components/EmptyState'
import type { Announcement } from '@/types/content'

const CATEGORIES = [
  { value: 'tumu', label: 'Tümü' },
  { value: 'dernek', label: 'Dernek' },
  { value: 'mezun-haberi', label: 'Mezun Haberi' },
  { value: 'kampanya', label: 'Kampanya' },
]

interface FilteredAnnouncementsProps {
  announcements: Announcement[]
}

export function FilteredAnnouncements({
  announcements,
}: FilteredAnnouncementsProps) {
  const [selected, setSelected] = useState('tumu')

  const filtered =
    selected === 'tumu'
      ? announcements
      : announcements.filter((a) => a.category === selected)

  return (
    <div>
      {/* Filter pills */}
      <div className="mb-8">
        <CategoryFilter
          categories={CATEGORIES}
          selected={selected}
          onChange={setSelected}
        />
      </div>

      {/* List */}
      {filtered.length === 0 ? (
        <EmptyState
          message="Bu kategoride henüz duyuru bulunmuyor."
          ctaText="Tüm duyuruları görüntüle"
          ctaHref="/duyurular"
        />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((announcement) => (
            <AnnouncementCard
              key={announcement.slug}
              announcement={announcement}
            />
          ))}
        </div>
      )}
    </div>
  )
}
