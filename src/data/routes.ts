/* Güzergahlar — /guzergahlar/<slug>/ sayfalarını otomatik üretir.
   Mesafeler karayolu üzerinden yaklaşık değerlerdir. */

export type Route = {
  slug: string;
  from: string;
  to: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  km: number;
  minutes: number;
  intro: string;
  notes: string[];
  popular?: boolean;
};

export const routes: Route[] = [
  {
    slug: 'ayancik-sinop-havalimani-taksi',
    from: 'Ayancık',
    to: 'Sinop Havalimanı',
    title: 'Ayancık – Sinop Havalimanı Taksi',
    metaTitle: 'Ayancık Sinop Havalimanı Taksi | Mesafe, Süre ve Transfer',
    metaDescription:
      'Ayancık’tan Sinop Havalimanı’na yaklaşık 60 km, 1 saat 5 dakika. Sabit fiyatlı, uçuş saatine göre planlanan taksi transferi. 7/24 arayın.',
    km: 60,
    minutes: 65,
    intro:
      'Ayancık’tan Sinop Havalimanı’na sahil karayolu üzerinden gidilir. Uçuş saatinize göre kalkış saatini birlikte belirler, sabit fiyat veririz.',
    notes: [
      'Uçuş saatinden en az 2,5 saat önce yola çıkacak şekilde planlıyoruz.',
      'Yolun tamamı virajlı sahil yolu; kışın yağış süreyi uzatabilir.',
      'Dönüş transferlerinde uçuşunuzu takip eder, rötarda ek ücret almayız.',
    ],
    popular: true,
  },
  {
    slug: 'ayancik-sinop-taksi',
    from: 'Ayancık',
    to: 'Sinop Merkez',
    title: 'Ayancık – Sinop Merkez Taksi',
    metaTitle: 'Ayancık Sinop Taksi | 55 km — Hastane, Otogar, Üniversite',
    metaDescription:
      'Ayancık’tan Sinop merkeze taksi: 55 km, yaklaşık 1 saat. Hastane, üniversite, otogar ve resmî daire yolculukları. Gidiş-dönüş avantajlı.',
    km: 55,
    minutes: 60,
    intro:
      'İlçenin il merkeziyle bağlantısı 55 kilometrelik sahil karayoluyla sağlanır. En sık istenen güzergahımız; özellikle Sinop Atatürk Devlet Hastanesi ve üniversite için.',
    notes: [
      'Aynı gün gidiş-dönüş en çok tercih edilen seçenek ve daha uygun.',
      'Hastane, üniversite kampüsü, otogar ve çarşı duraklarına bırakıyoruz.',
      'Sinop’ta işiniz uzayacaksa araç bekleyebilir ya da hazır olunca çağırırsınız.',
    ],
    popular: true,
  },
  {
    slug: 'ayancik-turkeli-taksi',
    from: 'Ayancık',
    to: 'Türkeli',
    title: 'Ayancık – Türkeli Taksi',
    metaTitle: 'Ayancık Türkeli Taksi | 35 km Sahil Yolu',
    metaDescription:
      'Ayancık’tan Türkeli’ye taksi: 35 km, yaklaşık 35 dakika. Sahil yolu üzerinden, tenha plajlara ulaşım için de ideal. 7/24.',
    km: 35,
    minutes: 35,
    intro:
      'Türkeli, Ayancık’ın batı komşusu. 1957’de ilçe olmuş, sahil yolu üzerinden 35 kilometre uzaklıkta. Yaz aylarında tenha sahiller için de tercih edilen bir yön.',
    notes: [
      'Yol boyunca sakin koylar ve sahil noktaları var; isterseniz mola veririz.',
      'Düğün, taziye ve akraba ziyaretlerinde sık çalıştığımız güzergah.',
    ],
    popular: true,
  },
  {
    slug: 'ayancik-erfelek-tatlica-selaleleri-taksi',
    from: 'Ayancık',
    to: 'Erfelek Tatlıca Şelaleleri',
    title: 'Ayancık – Erfelek Tatlıca Şelaleleri Taksi',
    metaTitle: 'Ayancık Erfelek Tatlıca Şelaleleri Taksi | Günübirlik Tur',
    metaDescription:
      'Ayancık’tan Erfelek Tatlıca Şelaleleri’ne taksi: yaklaşık 50 km. Günübirlik tur, bekleme veya bırak-al seçeneğiyle. Yazın en serin durak.',
    km: 50,
    minutes: 55,
    intro:
      'Sinop’un en bilinen doğa durağı Tatlıca Şelaleleri, Ayancık’tan yaklaşık 50 kilometre. Ahşap patika boyunca onlarca şelale var; yazın bunaltıcı sıcakta en serin yer.',
    notes: [
      'Yürüyüş patikası için rahat ayakkabı getirin, taşlar ıslak ve kaygan olur.',
      'Günübirlik turda aracı bekletmek yerine saat belirleyip dönüşte çağırabilirsiniz.',
      'Erfelek ilçe merkezi Ayancık’tan 46 km uzaklıkta.',
    ],
    popular: true,
  },
  {
    slug: 'ayancik-akgol-cangal-taksi',
    from: 'Ayancık',
    to: 'Akgöl ve Çangal Ormanları',
    title: 'Ayancık – Akgöl ve Çangal Ormanları Taksi',
    metaTitle: 'Ayancık Akgöl Taksi | Çangal Ormanları ve İnaltı Mağarası Turu',
    metaDescription:
      'Ayancık’tan Akgöl, Çangal Ormanları ve İnaltı Mağarası’na taksi turu. Orman yolu rehberliği, piknik ve fotoğraf molası. Günübirlik tur.',
    km: 30,
    minutes: 50,
    intro:
      'Akgöl, ilçenin en bilinen doğal güzelliği ve Çangal Ormanları’nın içinde yer alıyor. Yol orman yolu olduğu için süre mesafeden uzun; manzara ise yolu hak ediyor.',
    notes: [
      'Orman yolu stabilize; yağışlı havada süre uzar, bazı kesimler zorlaşır.',
      'Aynı güzergahta İnaltı Mağarası’na da uğranabilir.',
      'Dönüş saatini baştan belirleyelim; aracımız büyük bagajlıdır.',
    ],
    popular: true,
  },
  {
    slug: 'ayancik-boyabat-taksi',
    from: 'Ayancık',
    to: 'Boyabat',
    title: 'Ayancık – Boyabat Taksi',
    metaTitle: 'Ayancık Boyabat Taksi | 72 km, Yaklaşık 1 Saat 20 Dakika',
    metaDescription:
      'Ayancık’tan Boyabat’a taksi: 72 km, yaklaşık 1 saat 20 dakika. Sabit fiyat, kapıdan kapıya, gidiş-dönüş indirimli. 7/24 rezervasyon.',
    km: 72,
    minutes: 80,
    intro:
      'Boyabat, Ayancık’ın güney komşusu ve iç kesimlere açılan kapısı. 72 kilometrelik yol kısmen dağ geçidinden geçiyor.',
    notes: [
      'Kış aylarında yüksek kesimlerde kar nedeniyle süre uzayabilir.',
      'Boyabat üzerinden Kastamonu ve Ankara yönüne devam edebiliriz.',
    ],
  },
  {
    slug: 'ayancik-gerze-taksi',
    from: 'Ayancık',
    to: 'Gerze',
    title: 'Ayancık – Gerze Taksi',
    metaTitle: 'Ayancık Gerze Taksi | 94 km Sahil Yolu Transfer',
    metaDescription:
      'Ayancık’tan Gerze’ye taksi: 94 km, yaklaşık 1 saat 40 dakika. Sinop üzerinden sahil yolu, sabit fiyat, 7/24 hizmet.',
    km: 94,
    minutes: 100,
    intro:
      'Gerze’ye Sinop üzerinden sahil yoluyla ulaşılır; toplam 94 kilometre. Yaz aylarında plaj ve balık restoranları için tercih edilen bir güzergah.',
    notes: [
      'Yol tamamen sahil yolu; manzaralı ama virajlı.',
      'Sinop’ta bir işiniz varsa aynı yolculukta durabilirsiniz.',
    ],
  },
  {
    slug: 'ayancik-kastamonu-taksi',
    from: 'Ayancık',
    to: 'Kastamonu',
    title: 'Ayancık – Kastamonu Taksi',
    metaTitle: 'Ayancık Kastamonu Taksi | 140 km Çangal Yolu',
    metaDescription:
      'Ayancık’tan Kastamonu’ya taksi: 140 km, yaklaşık 2 saat 30 dakika. Çangal yolu üzerinden sabit fiyatlı şehirler arası transfer.',
    km: 140,
    minutes: 150,
    intro:
      'Ayancık’ın iç kesimlerle bağlantısı Çangal yolu üzerinden Kastamonu istikametiyle sağlanır. Hastane, üniversite ve aile ziyaretleri için düzenli çalıştığımız bir güzergah.',
    notes: [
      'Çangal yolu kış aylarında karlı olabilir; kar lastiği ve zincirle çıkıyoruz.',
      'Uzun mesafe olduğu için en az bir gün önceden rezervasyon alıyoruz.',
    ],
  },
  {
    slug: 'ayancik-samsun-taksi',
    from: 'Ayancık',
    to: 'Samsun',
    title: 'Ayancık – Samsun Taksi',
    metaTitle: 'Ayancık Samsun Taksi | 218 km — Hastane ve Havalimanı',
    metaDescription:
      'Ayancık’tan Samsun’a taksi: 218 km, yaklaşık 3 saat 15 dakika. Hastane, Çarşamba Havalimanı ve şehirler arası transfer. Sabit fiyat.',
    km: 218,
    minutes: 195,
    intro:
      'Samsun, bölgedeki en büyük sağlık ve ulaşım merkezi. İleri tetkik, ameliyat ve Çarşamba Havalimanı uçuşları için Ayancık’tan düzenli yolculuk yapıyoruz.',
    notes: [
      'Samsun Çarşamba Havalimanı için toplam mesafe yaklaşık 250 km olur.',
      'Hasta ve yaşlı yolcularda mola planı yaparak gidiyoruz.',
      'Aynı gün gidiş-dönüş mümkün; tek fiyatla planlayalım.',
    ],
  },
  {
    slug: 'ayancik-ankara-taksi',
    from: 'Ayancık',
    to: 'Ankara',
    title: 'Ayancık – Ankara Taksi',
    metaTitle: 'Ayancık Ankara Taksi | 435 km Kapıdan Kapıya Transfer',
    metaDescription:
      'Ayancık’tan Ankara’ya taksi: 435 km, yaklaşık 6 saat. Kapıdan kapıya, sabit fiyat, gece yolculuğu mümkün. Önceden rezervasyon.',
    km: 435,
    minutes: 360,
    intro:
      'Ankara’ya 435 kilometrelik yol Boyabat ve Kastamonu üzerinden gidiyor. Hastane randevusu, uçuş bağlantısı veya aile yolculuğu için kapıdan kapıya alternatif.',
    notes: [
      'Dört kişilik bir aile için kişi başı maliyet otobüse yaklaşır.',
      'Mola planı ve sürüş güvenliği için saatleri birlikte belirliyoruz.',
      'En az bir gün önceden rezervasyon gerekir.',
    ],
  },
  {
    slug: 'ayancik-istanbul-taksi',
    from: 'Ayancık',
    to: 'İstanbul',
    title: 'Ayancık – İstanbul Taksi',
    metaTitle: 'Ayancık İstanbul Taksi | 630 km Uzun Mesafe Transfer',
    metaDescription:
      'Ayancık’tan İstanbul’a taksi: 630 km, yaklaşık 8,5 saat. Kapıdan kapıya uzun mesafe transfer, sabit fiyat, önceden rezervasyon.',
    km: 630,
    minutes: 510,
    intro:
      'Uzun mesafe ama her yıl yaptığımız bir yolculuk: bagajı fazla olan, otogar aktarması yapamayan ya da gece yola çıkması gereken yolcular için.',
    notes: [
      'Mutlaka önceden rezervasyon ve fiyat teyidi alıyoruz.',
      'Köprü ve otoyol ücretleri fiyata dahildir.',
      'İstanbul içinde bırakılacak adresi baştan netleştiriyoruz.',
    ],
  },
];

export const popularRoutes = routes.filter((r) => r.popular);
export const getRoute = (slug: string) => routes.find((r) => r.slug === slug);

export const fmtDuration = (m: number) => {
  const h = Math.floor(m / 60);
  const mm = m % 60;
  if (h === 0) return `${mm} dk`;
  if (mm === 0) return `${h} sa`;
  return `${h} sa ${mm} dk`;
};
