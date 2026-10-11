# Yayınlama Rehberi — GitHub + Cloudflare Pages

Site statiktir. Cloudflare Pages üzerinde ücretsiz planla sorunsuz çalışır.

---

## 1. GitHub'a yükleme

Proje klasöründe git deposu hazır (`main` dalı, ilk commit atılmış).

```bash
# GitHub'da ayanciktaksi adında BOŞ bir depo oluşturun (README eklemeyin), sonra:
git remote add origin https://github.com/<kullanici-adiniz>/ayanciktaksi.git
git branch -M main
git push -u origin main
```

Depo gizli (private) olabilir — Cloudflare Pages gizli depolara da bağlanır.

---

## 2. Cloudflare Pages projesi

1. Cloudflare panelinde **Workers & Pages → Create → Pages → Connect to Git**
2. GitHub hesabınızı bağlayın, `ayanciktaksi` deposunu seçin
3. Derleme ayarları:

| Ayar | Değer |
| --- | --- |
| Framework preset | **Astro** |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Root directory | *(boş bırakın)* |

4. **Environment variables** bölümüne ekleyin:

```
NODE_VERSION = 22
```

5. **Save and Deploy**

İlk derleme 1–2 dakika sürer. Sonunda `ayanciktaksi.pages.dev` gibi bir adres verilir.
Bu adresi tarayıcıda açıp siteyi kontrol edin.

> Bundan sonra `main` dalına her `git push` yaptığınızda site otomatik güncellenir.

---

## 3. Alan adını bağlama (ayanciktaksi.com)

### Alan adı Cloudflare'de değilse önce taşıyın

1. Cloudflare panelinde **Add a site** → `ayanciktaksi.com`
2. Free planı seçin
3. Cloudflare size iki **nameserver** verir (örn. `ada.ns.cloudflare.com`)
4. Alan adını aldığınız firmanın panelinden nameserver'ları bunlarla değiştirin
5. Yayılması 1–24 saat sürebilir

### Pages projesine bağlama

1. Pages projeniz → **Custom domains** → **Set up a custom domain**
2. `ayanciktaksi.com` yazın → Cloudflare DNS kaydını otomatik oluşturur
3. Aynı işlemi `www.ayanciktaksi.com` için de yapın

### www → apex yönlendirmesi

Site `ayanciktaksi.com` (www'suz) üzerinde çalışacak şekilde yapılandırıldı
(`astro.config.mjs` içindeki `site` ayarı). `www` adresini ana adrese yönlendirin:

**Rules → Redirect Rules → Create rule**

| Alan | Değer |
| --- | --- |
| Rule name | `www to apex` |
| If → Custom filter | Hostname **equals** `www.ayanciktaksi.com` |
| Then → Type | Dynamic |
| Expression | `concat("https://ayanciktaksi.com", http.request.uri.path)` |
| Status code | **301** |
| Preserve query string | ✅ açık |

---

## 4. Yayın sonrası ayarlar (Cloudflare panelinde)

- [ ] **SSL/TLS → Overview** → şifreleme modu **Full (strict)**
- [ ] **SSL/TLS → Edge Certificates** → **Always Use HTTPS** açık
- [ ] **SSL/TLS → Edge Certificates** → **Automatic HTTPS Rewrites** açık
- [ ] **Speed → Optimization** → Brotli açık
- [ ] **Caching → Configuration** → Browser Cache TTL: `Respect Existing Headers`
      (`public/_headers` dosyası zaten doğru değerleri veriyor)

Güvenlik başlıkları ve önbellek kuralları `public/_headers` dosyasında tanımlı;
Cloudflare Pages bunu otomatik okur, ek ayar gerekmez.

`public/_redirects` dosyasında eski/yanlış yolların kurtarma yönlendirmeleri var.

---

## 5. Yayından hemen sonra yapılacaklar

1. **Google Search Console**'a `ayanciktaksi.com` ekleyin
   (Cloudflare DNS doğrulaması en kolayı)
2. `https://ayanciktaksi.com/sitemap-index.xml` adresini gönderin
3. **Google İşletme Profili**'ne web sitesi adresini ekleyin
4. Telefondan siteyi açıp **arama ve WhatsApp butonlarını gerçekten test edin**
5. `SEO-YAPILACAKLAR.md` dosyasındaki listeye başlayın

---

## Alternatif: Cloudflare Pages olmadan

`npm run build` komutunun ürettiği `dist/` klasörünü herhangi bir statik
barındırıcıya (Netlify, Vercel, GitHub Pages, normal bir hosting'in `public_html`
klasörü) yükleyebilirsiniz. Sunucu tarafı hiçbir gereksinim yoktur.

GitHub Pages kullanacaksanız `_headers` ve `_redirects` dosyaları çalışmaz;
yönlendirmeleri barındırıcınızın kendi yöntemiyle tanımlamanız gerekir.
