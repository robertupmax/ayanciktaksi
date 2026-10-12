/* =========================================================================
   FOTOĞRAF YERLEŞİMİ
   Her kayıt bir "yer" (slot) tanımlar. `file` alanı
   src/assets/photos/ klasöründeki dosya adıdır (uzantısız).

   Fotoğrafı eklemek için: dosyayı o adla klasöre atın. Hepsi bu.
   Dosya yoksa o bölüm sitede hiç görünmez.
   ========================================================================= */
import type { PhotoSlot } from '../lib/photos';

export const photos = {
  /* --- Anasayfa --- */
  hero: {
    file: 'taksi-hero',
    alt: 'Ayancık Taksi aracı — Sinop Ayancık’ta 7/24 hizmet veren ticari taksi',
  },
  driver: {
    file: 'soför-huseyin-cokluk',
    alt: 'Ayancık Taksi şoförü Hüseyin Çokluk',
    caption: 'Şoför Hüseyin Çokluk',
  },
  aracIc: {
    file: 'taksi-ic',
    alt: 'Ayancık Taksi aracının iç görünümü — temiz ve klimalı',
    caption: 'Araç içi',
  },
  bagaj: {
    file: 'taksi-bagaj',
    alt: 'Ayancık Taksi aracının geniş bagajı',
    caption: 'Büyük bagaj',
  },

  /* --- Hizmet sayfaları --- */
  havalimani: {
    file: 'sinop-havalimani',
    alt: 'Sinop Havalimanı — Ayancık’tan yaklaşık 60 km',
    caption: 'Sinop Havalimanı',
  },
  hastane: {
    file: 'ayancik-devlet-hastanesi',
    alt: 'Ayancık Devlet Hastanesi',
    caption: 'Ayancık Devlet Hastanesi',
  },
  koyYolu: {
    file: 'ayancik-koy-yolu',
    alt: 'Ayancık’a bağlı köylere giden yol',
    caption: 'Köy yolu',
  },
  sehirIci: {
    file: 'ayancik-merkez',
    alt: 'Ayancık ilçe merkezi',
    caption: 'Ayancık merkez',
  },
  otogar: {
    file: 'ayancik-otogar',
    alt: 'Ayancık Otogarı',
    caption: 'Ayancık Otogarı',
  },
  sehirlerArasi: {
    file: 'sahil-yolu',
    alt: 'Ayancık–Sinop sahil karayolu',
    caption: 'Sahil yolu',
  },
  ogrenci: {
    file: 'ayancik-myo',
    alt: 'Sinop Üniversitesi Ayancık Meslek Yüksekokulu',
    caption: 'Ayancık Meslek Yüksekokulu',
  },

  /* --- Plajlar ve gezilecek yerler --- */
  plaj: {
    file: 'ayancik-sahil',
    alt: 'Ayancık sahili',
    caption: 'Ayancık sahili',
  },
  camurca: { file: 'camurca-plaji', alt: 'Çamurca Plajı, Ayancık' },
  alikoy: { file: 'alikoy-plaji', alt: 'Aliköy Plajı, Ayancık' },
  liman: { file: 'ayancik-limani', alt: 'Ayancık limanı ve sahili' },
  akgol: { file: 'akgol', alt: 'Akgöl, Ayancık — Çangal Ormanları içinde' },
  cangal: { file: 'cangal-ormanlari', alt: 'Çangal Ormanları, Ayancık' },
  inalti: { file: 'inalti-magarasi', alt: 'İnaltı Mağarası, Ayancık' },
  kuguYalisi: { file: 'kugu-yalisi', alt: 'Kuğu Yalısı, Ayancık' },
  tatlica: { file: 'tatlica-selaleleri', alt: 'Erfelek Tatlıca Şelaleleri, Sinop' },
  hamsilos: { file: 'hamsilos', alt: 'Hamsilos Koyu, Sinop' },
  sinopKale: { file: 'sinop-kalesi', alt: 'Sinop Kalesi ve Tarihi Sinop Cezaevi' },
  kilise: { file: 'ayancik-kilisesi', alt: 'Ayancık Kilisesi' },
} satisfies Record<string, PhotoSlot>;

/** Gezilecek yer slug'ı → fotoğraf eşlemesi */
export const placePhotos: Record<string, PhotoSlot> = {
  'akgol': photos.akgol,
  'cangal-ormanlari': photos.cangal,
  'inalti-magarasi': photos.inalti,
  'ayancik-sahili-kugu-yalisi': photos.kuguYalisi,
  'camurca-plaji': photos.camurca,
  'alikoy-plaji': photos.alikoy,
  'ayancik-koyu-limani': photos.liman,
  'erfelek-tatlica-selaleleri': photos.tatlica,
  'hamsilos-akliman': photos.hamsilos,
  'sinop-kalesi-tarihi-cezaevi': photos.sinopKale,
  'ayancik-kilisesi': photos.kilise,
};

/** Hizmet slug'ı → fotoğraf eşlemesi */
export const servicePhotos: Record<string, PhotoSlot> = {
  'sinop-havalimani-transfer': photos.havalimani,
  'hastane-transfer': photos.hastane,
  'koy-taksi': photos.koyYolu,
  'plaj-ulasimi': photos.plaj,
  'sehirler-arasi-taksi': photos.sehirlerArasi,
  'ogrenci-taksi': photos.ogrenci,
  'sehir-ici-taksi': photos.sehirIci,
};
