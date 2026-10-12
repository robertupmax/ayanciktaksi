/* =========================================================================
   AYANCIK TAKSİ — MERKEZİ AYAR DOSYASI
   Sitedeki telefon, adres, çalışma saati gibi tüm bilgiler
   BURADAN yönetilir. Başka bir dosyayı değiştirmeniz gerekmez.
   ========================================================================= */

/** Telefon numarası — SADECE RAKAM, ülke kodu dahil. Örn: 905318302017 */
const PHONE_DIGITS = '905318302017';


export const site = {
  /* ---------- Kimlik ---------- */
  domain: 'ayanciktaksi.com',
  url: 'https://ayanciktaksi.com',
  brand: 'Ayancık Taksi',
  legalName: 'Güven Taksi',
  /** Google Haritalar / Yandex kaydındaki isim. NAP tutarlılığı için önemli. */
  gbpName: 'Güven Taksi',
  tagline: 'Ayancık ve çevresinde 7/24 taksi',
  foundingYear: 2008,

  /* ---------- Şoför ----------
     Plakayı yazdığınızda başlıkta, iletişim sayfasında ve
     yapılandırılmış veride otomatik görünür. Boş bırakılırsa gizlenir. */
  driver: {
    name: 'Hüseyin Çokluk',
    title: 'Şoför',
    plate: '57 T 2017',
    bio:
      'Taşımacılık sektöründe uzun yıllardır çalışan, Ayancık’ta yaşayan ve ilçede tanınan bir şoför.',
  },

  /* ---------- İletişim ---------- */
  phone: {
    digits: PHONE_DIGITS,
    /** Ekranda görünen biçim */
    display: '0531 830 20 17',
    displayIntl: '+90 531 830 20 17',
    href: `tel:+${PHONE_DIGITS}`,
  },
  /* ---------- Konum ---------- */
  address: {
    street: 'Yalı Mahallesi',
    district: 'Ayancık',
    city: 'Sinop',
    region: 'TR-57',
    postalCode: '57400',
    country: 'TR',
    full: 'Yalı Mahallesi, Ayancık / Sinop 57400',
  },
  geo: { lat: 41.9469, lng: 34.5881 },
  /** Google Haritalar'daki işletme kaydınızın linki */
  mapsUrl: 'https://maps.google.com/?q=G%C3%BCven+Taksi+Ayanc%C4%B1k',
  mapsEmbed:
    'https://www.google.com/maps?q=Ayanc%C4%B1k%2C%20Sinop&z=13&output=embed',
  /** Google yorum bırakma linki — Google İşletme panelinizden alıp buraya yazın */
  reviewUrl: 'https://search.google.com/local/writereview?placeid=',

  /* ---------- Çalışma saatleri ---------- */
  hours: { text: 'Her gün 24 saat', schema: 'Mo-Su 00:00-23:59' },

  /* ---------- Sosyal (boş bırakılanlar sitede gösterilmez) ---------- */
  social: {
    instagram: '',
    facebook: '',
    youtube: '',
  },

  /* ---------- Hizmet alanı ---------- */
  serviceArea: {
    primary: 'Ayancık',
    radiusKm: 120,
    places: [
      'Ayancık', 'Sinop', 'Türkeli', 'Erfelek', 'Boyabat', 'Gerze',
      'Sinop Havalimanı', 'Kastamonu', 'Çangal', 'Akgöl',
    ],
  },

  /* ---------- Filo / güven ---------- */
  fleet: {
    vehicles: 'Klimalı, bakımlı, geniş bagajlı ticari taksi',
    capacity: 4,
    luggage: 'Büyük bagaj',
    features: [
      'Büyük bagajlı araç',
      'Esnek saat: sabah erken ve gece geç',
      'Ticari taşımacılık belgeli sürücü',
      'Nakit ödeme',
      'Sigortalı araç',
    ],
  },

  /* ---------- Öne çıkan satış noktaları (anasayfa ve hizmet sayfalarında) ---------- */
  usp: [
    {
      icon: 'bag',
      title: 'Büyük bagajlı araç',
      text:
        'Havalimanı, otogar ve köy yolculuklarında en çok takılınan nokta bagaj. Aracımız büyük bagajlıdır ve bagaj için ek ücret almıyoruz. Olağandışı ölçüde bir yükünüz varsa önceden söylemeniz yeterli.',
    },
    {
      icon: 'clock',
      title: 'Esnek çalışma saatleri',
      text:
        'Sabahın ilk saatinde havalimanına, gece yarısı varan otobüse göre çalışıyoruz. Erken ve geç saatlerde de aynı numara açık; gece için ek tarife uygulamıyoruz.',
    },
    {
      icon: 'card',
      title: 'Uygun ve belli fiyat',
      text:
        'Şehir içinde resmî taksimetre tarifesi, şehir dışında yola çıkmadan konuşulan sabit fiyat. Gidiş-dönüş alındığında belirgin şekilde daha hesaplı; gece ücreti ve bagaj ücreti yok.',
    },
    {
      icon: 'shield',
      title: 'Tanıdık ve güvenilir',
      text:
        'Ayancık’ta yaşayan, ilçede tanınan, ticari taşımacılık belgeli bir sürücüyle yolculuk yapıyorsunuz. Araç sigortalı, klimalı ve düzenli bakımlı.',
    },
  ],
} as const;

export type SiteConfig = typeof site;
