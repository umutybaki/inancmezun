import { format } from 'date-fns'
import { tr } from 'date-fns/locale'

export function formatDate(dateStr: string): string {
  return format(new Date(dateStr), 'd MMMM yyyy', { locale: tr })
}

export function formatDateShort(dateStr: string): string {
  return format(new Date(dateStr), 'd MMM yyyy', { locale: tr })
}
