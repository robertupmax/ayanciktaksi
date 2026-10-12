/* =========================================================================
   FOTOĞRAF SİSTEMİ
   Fotoğrafları  src/assets/photos/  klasörüne atın. Dosya adı önemlidir:
   aşağıdaki "slot" adlarıyla aynı olmalı (uzantı fark etmez).

   Örnek:  src/assets/photos/taksi-hero.jpg

   Astro görselleri otomatik olarak boyutlandırır, WebP'ye çevirir ve
   tembel yükler. Dosya yoksa o bölüm sessizce gizlenir; site bozulmaz.
   ========================================================================= */
import type { ImageMetadata } from 'astro';

const files = import.meta.glob<{ default: ImageMetadata }>(
  '../assets/photos/*.{jpg,jpeg,png,webp,avif,JPG,JPEG,PNG}',
  { eager: true },
);

/** Dosya adından (uzantısız) görsel verisini bulur */
const byName = new Map<string, ImageMetadata>();
for (const [path, mod] of Object.entries(files)) {
  const name = path.split('/').pop()!.replace(/\.[^.]+$/, '').toLowerCase();
  byName.set(name, mod.default);
}

export type PhotoSlot = {
  /** src/assets/photos/ içindeki dosya adı (uzantısız) */
  file: string;
  /** Görme engelli kullanıcılar ve Google için açıklama — SEO açısından önemli */
  alt: string;
  /** Görselin altında görünecek kısa açıklama (isteğe bağlı) */
  caption?: string;
};

export function getPhoto(slot?: PhotoSlot) {
  if (!slot) return null;
  const img = byName.get(slot.file.toLowerCase());
  return img ? { img, alt: slot.alt, caption: slot.caption } : null;
}

/** Yüklenmiş fotoğrafların listesi — kontrol amaçlı */
export const availablePhotos = [...byName.keys()].sort();
