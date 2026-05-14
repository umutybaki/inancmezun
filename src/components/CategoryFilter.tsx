'use client'

interface CategoryFilterProps {
  categories: { value: string; label: string }[]
  selected: string
  onChange: (value: string) => void
}

export function CategoryFilter({
  categories,
  selected,
  onChange,
}: CategoryFilterProps) {
  return (
    <div
      role="group"
      aria-label="Kategori filtresi"
      className="flex flex-wrap gap-2"
    >
      {categories.map((cat) => {
        const isSelected = cat.value === selected
        return (
          <button
            key={cat.value}
            onClick={() => onChange(cat.value)}
            className="text-sm font-medium px-4 py-1.5 rounded-full transition-colors duration-150 border"
            style={
              isSelected
                ? {
                    backgroundColor: 'var(--color-red)',
                    color: 'var(--color-cream)',
                    borderColor: 'var(--color-red)',
                  }
                : {
                    backgroundColor: 'transparent',
                    color: 'var(--color-ink-muted)',
                    borderColor: 'var(--color-border)',
                  }
            }
            aria-pressed={isSelected}
          >
            {cat.label}
          </button>
        )
      })}
    </div>
  )
}
