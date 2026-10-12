/* =========================================================================
   Yapılandırılmış veri (JSON-LD) üreticileri.
   Yerel SEO + yapay zekâ asistanlarının doğru bilgi çıkarması için kritik.
   ========================================================================= */
import { site } from '../data/site';
import { villages } from '../data/villages';

const ORG_ID = `${site.url}/#taxiservice`;
const WEBSITE_ID = `${site.url}/#website`;

/** Ana işletme kaydı — her sayfada bulunur */
export function businessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': ['TaxiService', 'LocalBusiness'],
    '@id': ORG_ID,
    name: `${site.brand} — ${site.legalName}`,
    alternateName: [
      site.legalName,
      'Ayancık Taksi Durağı',
      'Güven Taksi Ayancık',
      `${site.driver.name} Taksi`,
      `Taksici ${site.driver.name}`,
    ],
    description:
      'Sinop Ayancık’ta 7/24 ticari taksi hizmeti. Büyük bagajlı araç, esnek çalışma saatleri. Sinop Havalimanı transferi, hastane ulaşımı, köy yolculukları, plaj ulaşımı ve şehirler arası taksi.',
    url: site.url,
    telephone: site.phone.displayIntl,
    priceRange: '₺₺',
    currenciesAccepted: 'TRY',
    paymentAccepted: 'Nakit',
    foundingDate: String(site.foundingYear),
    image: `${site.url}/og.png`,
    logo: `${site.url}/logo.png`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: site.address.street,
      addressLocality: site.address.district,
      addressRegion: site.address.city,
      postalCode: site.address.postalCode,
      addressCountry: 'TR',
    },
    geo: { '@type': 'GeoCoordinates', latitude: site.geo.lat, longitude: site.geo.lng },
    employee: {
      '@type': 'Person',
      name: site.driver.name,
      jobTitle: site.driver.title,
      worksFor: { '@id': ORG_ID },
    },
    founder: { '@type': 'Person', name: site.driver.name },
    ...(site.driver.plate
      ? { vehicleIdentificationNumber: site.driver.plate, identifier: site.driver.plate }
      : {}),
    hasMap: site.mapsUrl,
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],
        opens: '00:00',
        closes: '23:59',
      },
    ],
    areaServed: [
      { '@type': 'AdministrativeArea', name: 'Ayancık, Sinop' },
      { '@type': 'AdministrativeArea', name: 'Türkeli, Sinop' },
      { '@type': 'AdministrativeArea', name: 'Erfelek, Sinop' },
      { '@type': 'AdministrativeArea', name: 'Sinop' },
      { '@type': 'Airport', name: 'Sinop Havalimanı', iataCode: 'NOP' },
    ],
    serviceArea: {
      '@type': 'GeoCircle',
      geoMidpoint: { '@type': 'GeoCoordinates', latitude: site.geo.lat, longitude: site.geo.lng },
      geoRadius: site.serviceArea.radiusKm * 1000,
    },
    knowsLanguage: ['tr'],
    availableLanguage: ['Türkçe'],
    provider: { '@id': ORG_ID },
    potentialAction: [
      { '@type': 'ReserveAction',
        target: { '@type': 'EntryPoint', urlTemplate: site.phone.href, actionPlatform: ['http://schema.org/MobileWebPlatform'] } },
    ],
  };
}

/** Site + arama kutusu */
export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    url: site.url,
    name: site.brand,
    inLanguage: 'tr',
    publisher: { '@id': ORG_ID },
  };
}

/** Hizmet kataloğu — anasayfada */
export function offerCatalogSchema(items: { name: string; url: string; description: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'OfferCatalog',
    name: `${site.brand} hizmetleri`,
    itemListElement: items.map((s, i) => ({
      '@type': 'Offer',
      position: i + 1,
      itemOffered: {
        '@type': 'Service',
        name: s.name,
        description: s.description,
        url: s.url,
        serviceType: s.name,
        provider: { '@id': ORG_ID },
        areaServed: { '@type': 'AdministrativeArea', name: 'Ayancık, Sinop' },
      },
    })),
  };
}

/** Tek hizmet sayfası */
export function serviceSchema(s: { name: string; description: string; url: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: s.name,
    description: s.description,
    url: s.url,
    serviceType: s.name,
    provider: { '@id': ORG_ID },
    areaServed: [
      { '@type': 'AdministrativeArea', name: 'Ayancık, Sinop' },
      { '@type': 'AdministrativeArea', name: 'Sinop' },
    ],
    availableChannel: {
      '@type': 'ServiceChannel',
      servicePhone: { '@type': 'ContactPoint', telephone: site.phone.displayIntl, contactType: 'reservations' },
      serviceUrl: s.url,
    },
    hoursAvailable: { '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],
      opens: '00:00', closes: '23:59' },
  };
}

/** SSS — Google zengin sonucu ve yapay zekâ alıntıları için */
export function faqSchema(items: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}

/** Güzergah sayfaları */
export function tripSchema(r: { from: string; to: string; km: number; minutes: number; url: string; title: string; description: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Trip',
    name: r.title,
    description: r.description,
    url: r.url,
    provider: { '@id': ORG_ID },
    itinerary: {
      '@type': 'ItemList',
      numberOfItems: 2,
      itemListElement: [
        { '@type': 'ListItem', position: 1, item: { '@type': 'Place', name: r.from } },
        { '@type': 'ListItem', position: 2, item: { '@type': 'Place', name: r.to } },
      ],
    },
    subjectOf: {
      '@type': 'TravelAction',
      distance: { '@type': 'Distance', name: `${r.km} km` },
      provider: { '@id': ORG_ID },
    },
  };
}

export function breadcrumbSchema(crumbs: { name: string; href: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: new URL(c.href, site.url).href,
    })),
  };
}

export function articleSchema(a: {
  title: string; description: string; url: string; date: string; updated?: string; tag: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: a.title,
    description: a.description,
    url: a.url,
    mainEntityOfPage: { '@type': 'WebPage', '@id': a.url },
    datePublished: a.date,
    dateModified: a.updated ?? a.date,
    articleSection: a.tag,
    inLanguage: 'tr',
    author: { '@type': 'Organization', name: site.brand, '@id': ORG_ID },
    publisher: { '@id': ORG_ID },
    image: `${site.url}/og.png`,
    isPartOf: { '@id': WEBSITE_ID },
  };
}

/** Köy listesi — hizmet alanı kapsamını makinelere açıkça bildirir */
export function serviceAreaListSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Ayancık Taksi hizmet verdiği köyler',
    numberOfItems: villages.length,
    itemListElement: villages.map((v, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'Place',
        name: `${v}, Ayancık, Sinop`,
        containedInPlace: { '@type': 'AdministrativeArea', name: 'Ayancık, Sinop' },
      },
    })),
  };
}

export { ORG_ID, WEBSITE_ID };
