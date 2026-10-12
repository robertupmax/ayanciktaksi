# Ayancık Taksi — ayanciktaksi.com

Sinop Ayancık'ta hizmet veren **Güven Taksi** için Astro ile yapılmış statik web sitesi.
40 sayfa, Türkçe, tam yapılandırılmış veri (JSON-LD), sıfır JavaScript bağımlılığı.

---

## Hızlı başlangıç

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # dist/ klasörüne üretir
npm run preview   # üretilmiş siteyi önizler
npm run check     # tip ve şablon kontrolü
```

Node.js 20 veya üzeri gerekir.

---

## En çok değiştireceğiniz dosya

### `src/data/site.ts`

**Telefon, WhatsApp, adres, çalışma saatleri — hepsi buradan yönetilir.**
Başka hiçbir dosyaya dokunmanıza gerek yok; numarayı burada değiştirdiğinizde
sitedeki 200+ bağlantı, yapılandırılmış veri ve `llms.txt` otomatik güncellenir.

```ts
const PHONE_DIGITS = '905318302017';      // sadece rakam, ülke kodu dahil
const WHATSAPP_DIGITS = '905318302017';
```

Ayrıca buradan ayarlanır: işletme adı, e-posta, adres, koordinat, Google Haritalar
bağlantısı, sosyal medya hesapları (boş bırakılanlar sitede görünmez).

> **Yapmanız gereken iki şey var:**
> 1. `reviewUrl` — Google İşletme Profili panelinizden "yorum bırak" bağlantınızı alıp yazın.
> 2. `mapsUrl` — Google Haritalar'daki işletme kaydınızın tam bağlantısını yazın.
> 3. `geo` koordinatlarını durağınızın tam konumuyla değiştirin (şu an ilçe merkezi).

---

## İçerik nasıl eklenir?

| Ne eklemek istiyorsunuz | Hangi dosya | Sonuç |
| --- | --- | --- |
| Yeni hizmet | `src/data/services.ts` | `/hizmetler/<slug>/` sayfası otomatik oluşur |
| Yeni güzergah | `src/data/routes.ts` | `/guzergahlar/<slug>/` sayfası otomatik oluşur |
| Yeni gezilecek yer | `src/data/places.ts` | Gezi rehberine eklenir |
| Yeni köy | `src/data/villages.ts` | Hizmet bölgesi ve şemalara eklenir |
| Yeni S.S.S. | `src/data/faq.ts` | `/sss/` sayfasına ve FAQPage şemasına eklenir |
| **Yeni blog yazısı** | `src/content/blog/<slug>.md` | `/blog/<slug>/` sayfası otomatik oluşur |

### Blog yazısı şablonu

```markdown
---
title: "Başlık"
metaTitle: "Arama sonucunda görünecek başlık (65 karakteri geçmesin)"
description: "Arama sonucu açıklaması (70–165 karakter)"
date: 2026-10-11
updated: 2026-10-11       # isteğe bağlı
tag: "Ulaşım"
related: ["koy-taksi", "ayancik-sinop-taksi"]   # hizmet/güzergah slug'ları
faq:
  - q: "Soru?"
    a: "Tek paragrafta net cevap."
---

İçerik buraya (Markdown).
```

`faq` alanı hem sayfanın altına açılır-kapanır S.S.S. bölümü ekler hem de
`FAQPage` yapılandırılmış verisi üretir.

---

## Tasarım

Tüm renkler ve ölçüler `src/styles/global.css` dosyasının en üstündeki `:root`
bloğunda tanımlıdır. Marka rengini değiştirmek için tek satır yeterli:

```css
--taxi: #ffb800;   /* taksi sarısı */
--ink:  #12151a;   /* koyu zemin */
```

Koyu tema (`prefers-color-scheme: dark`) otomatik desteklenir.
Taban yazı boyutu bilinçli olarak 17px — yolcuların önemli bir bölümü yaşlı.

---

## Proje yapısı

```
src/
├─ data/            Tüm içerik verisi (site, hizmetler, güzergahlar, köyler, SSS, yerler)
├─ content/blog/    Blog yazıları (Markdown)
├─ components/      Header, Footer, CallBar, Faq, Icon, Seo, Breadcrumbs, CallButtons
├─ layouts/Base     Her sayfanın ortak çerçevesi
├─ lib/
│  ├─ schema.ts     JSON-LD üreticileri (LocalBusiness, Service, FAQPage, Trip, BlogPosting)
│  └─ posts.ts      Blog yardımcıları
├─ pages/           Sayfalar (dinamik rotalar dahil)
└─ styles/global.css
public/             robots.txt, manifest, _headers, _redirects, favicon, og.png
```

---

## SEO altyapısı

- **Yapılandırılmış veri:** her sayfada `TaxiService` + `LocalBusiness` + `WebSite`;
  sayfa türüne göre `Service`, `FAQPage`, `BlogPosting`, `Trip`, `BreadcrumbList`,
  `ItemList`, `TouristAttraction`, `ContactPage`.
- **`/llms.txt`** — yapay zekâ asistanlarının (ChatGPT, Claude, Perplexity, Gemini)
  işletme bilgisini doğru alıntılaması için makine-okunur özet. `src/pages/llms.txt.ts`
  tarafından verilerden otomatik üretilir, elle güncellemeye gerek yoktur.
- **`robots.txt`** — yapay zekâ tarayıcıları açıkça izinli (GPTBot, ClaudeBot,
  PerplexityBot, Google-Extended, Applebot-Extended vb.).
- **Site haritası** — `@astrojs/sitemap` ile `sitemap-index.xml`.
- Her sayfada benzersiz title ve description; tek `<h1>`; `geo.*` meta etiketleri.

Off-page (dizin kayıtları, Google İşletme Profili, yorum stratejisi) için
**`SEO-YAPILACAKLAR.md`** dosyasına bakın.

---

## Yayınlama

Site tamamen statiktir; `dist/` klasörü herhangi bir statik barındırıcıda çalışır.
Cloudflare Pages için önerilen ayarlar:

| Ayar | Değer |
| --- | --- |
| Framework preset | Astro |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Node version | `22` (ortam değişkeni: `NODE_VERSION=22`) |

`public/_headers` ve `public/_redirects` dosyaları Cloudflare Pages tarafından
otomatik okunur (güvenlik başlıkları ve önbellekleme hazır).

Ayrıntılı adımlar için **`YAYINLAMA.md`** dosyasına bakın.

---

## Lisans ve içerik notu

Site metinleri Ayancık Taksi (Güven Taksi) için yazılmıştır. Mesafe ve coğrafya
bilgileri kamuya açık kaynaklardan (Vikipedi, Ayancık Kaymakamlığı verileri)
derlenmiştir ve yaklaşık değerlerdir.
