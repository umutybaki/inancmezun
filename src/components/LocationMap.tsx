export function LocationMap() {
  return (
    <div className="w-full overflow-hidden rounded-lg" style={{ height: 400 }}>
      <iframe
        src="https://maps.google.com/maps?q=TEV+%C4%B0nan%C3%A7+T%C3%BCrke%C5%9F+%C3%96zel+Lisesi,+Muallimk%C3%B6y,+Gebze&hl=tr&output=embed"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="TEV İnanç Türkeş Özel Lisesi konumu"
      />
    </div>
  )
}
