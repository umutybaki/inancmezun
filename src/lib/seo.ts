import type { Metadata } from 'next'

export const siteConfig = {
  name: 'İnanç Lisesi Mezunlar Derneği',
  shortName: 'İLMD',
  description: 'TEVİTÖL mezunlarının dayanışma, paylaşım ve katkı evi.',
  url: 'https://inancmezun.org',
  ogImage: '/og-default.png',
}

export function constructMetadata({
  title,
  description,
  image,
}: {
  title?: string
  description?: string
  image?: string
} = {}): Metadata {
  const metaTitle = title
    ? `${title} | ${siteConfig.shortName}`
    : siteConfig.name

  return {
    title: metaTitle,
    description: description ?? siteConfig.description,
    openGraph: {
      title: metaTitle,
      description: description ?? siteConfig.description,
      url: siteConfig.url,
      siteName: siteConfig.name,
      images: [
        {
          url: image ?? siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: siteConfig.name,
        },
      ],
      locale: 'tr_TR',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: metaTitle,
      description: description ?? siteConfig.description,
      images: [image ?? siteConfig.ogImage],
    },
    metadataBase: new URL(siteConfig.url),
  }
}
