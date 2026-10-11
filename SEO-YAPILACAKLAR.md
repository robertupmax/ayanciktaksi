# Ayancık Taksi — SEO Yapılacaklar Listesi

Site teknik olarak hazır. Asıl sıralama farkı buradaki **off-page** ve **yerel SEO**
işlerinden gelir. Sırayla yapın; her maddenin yanına yapınca tarih yazın.

---

## 1. Google İşletme Profili (en önemli iş)

Ayancık'ta "taksi" aratan kişilerin büyük bölümü haritadan arar. Web sitesinden
daha fazla çağrı buradan gelir.

### İki kayıt sorunu — önce bunu çözün

Şu anda Google'da aynı işletme için iki ayrı kayıt görünüyor:

| Kayıt | Telefon | Adres |
| --- | --- | --- |
| Güven Taksi | +90 531 830 20 17 | Yalı, Cemil Yıldız Cad. 14 / Şevki Şentürk Köprüsü |
| Güven Taksi Hakkı Ünlü | +90 542 376 79 16 | Yalı Mah., Eski Hastane Sok. 11A |

**İki kayıt birbirinin sinyalini böler.** Yapmanız gereken:

- [ ] Hangi kaydın sizin olduğuna karar verin (bu sitede **0531 830 20 17** esas alındı).
- [ ] Sizin olmayan kaydı Google'a "yinelenen kayıt" olarak bildirin veya sahibine kapattırın.
- [ ] Kalan kaydın adını, adresini ve telefonunu **sitedeki ile harfi harfine aynı** yapın.

### Kaydın doldurulması

- [ ] Kategori: **Taksi hizmeti** (birincil). İkincil: Havalimanı servisi, Araç servisi.
- [ ] Çalışma saatleri: **7/24** olarak işaretleyin.
- [ ] Hizmet alanı: Ayancık, Türkeli, Erfelek, Sinop, Boyabat ekleyin.
- [ ] Web sitesi alanına `https://ayanciktaksi.com` yazın.
- [ ] "Randevu/Rezervasyon" bağlantısına WhatsApp linkinizi koyun.
- [ ] **Hizmetler** bölümüne sitedeki 8 hizmeti tek tek ekleyin (aynı isimlerle).
- [ ] **En az 10 fotoğraf** yükleyin: araç dışı, araç içi (temiz!), sürücü, durak konumu,
      Ayancık sahili, Sinop Havalimanı önü, kış lastiği, bagaj dolu hali.
- [ ] İşletme açıklamasına sitedeki anasayfa özetini yazın (750 karakter sınırı).
- [ ] Soru-Cevap bölümüne kendiniz 5 soru sorup cevaplayın (fiyat, 7/24, havalimanı,
      köyler, kredi kartı). Google bu bölümü arama sonucunda gösteriyor.

### Yorumlar — sıralamanın motoru

- [ ] `src/data/site.ts` içindeki `reviewUrl` alanına Google'dan aldığınız
      "yorum bırak" kısa bağlantısını yazın.
- [ ] Bu bağlantıyı QR koda çevirip **araç içine yapıştırın**.
- [ ] Her memnun yolcuya yolculuk sonunda WhatsApp'tan bağlantıyı gönderin.
- [ ] **Hedef: ilk 3 ayda 25 yorum.** Rakiplerin çoğunun hiç yorumu yok — bu tek
      başına sizi öne çıkarır.
- [ ] Gelen her yoruma 24 saat içinde cevap yazın. Olumsuz yoruma da sakin cevap verin.
- [ ] Yorumlarda "Ayancık", "havalimanı", "Sinop" gibi kelimelerin geçmesi işe yarar —
      ama müşteriden asla belirli kelime yazmasını istemeyin, bu kurallara aykırı.

### Düzenli paylaşım

- [ ] Ayda 2–4 "Güncelleme" paylaşın: yaz sezonu duyurusu, kış yol durumu,
      bayram çalışma saatleri, yeni blog yazısı bağlantısı.

---

## 2. Dizin ve rehber kayıtları (NAP tutarlılığı)

Her kayıtta **tam olarak aynı** bilgiyi kullanın:

```
İsim    : Güven Taksi (Ayancık Taksi)
Telefon : 0531 830 20 17
Adres   : Yalı Mahallesi, Ayancık / Sinop 57400
Web     : https://ayanciktaksi.com
```

Sitenizi şu dizinlere ekleyin / mevcut kayda web sitesi bağlantısı ekletin:

- [ ] **Yandex İşletmem** (yandex.com.tr/sprav) — Türkiye'de ciddi trafik getirir
- [ ] **Apple Business Connect** (iPhone kullanıcıları için Apple Haritalar)
- [ ] **Bing Places**
- [ ] taksibul.net — kaydınız zaten var, web sitesi bağlantısı ekletin
- [ ] taksiji.com — kayıt var, bilgileri güncelletin (orada sabit hat yazıyor)
- [ ] saritaksiler.com.tr — kayıt var, bağlantı ekletin
- [ ] taksiciabi.com.tr — kayıt var
- [ ] ilcemde.com — kayıt var
- [ ] bulurum.com
- [ ] sinopuretiyor.com — kayıt var, bağlantı ekletin
- [ ] dijital.link — kayıt var
- [ ] Foursquare / Swarm
- [ ] OpenStreetMap (`shop=taxi` noktası ekleyin — birçok uygulama buradan besleniyor)
- [ ] Ayancık Ticaret ve Sanayi Odası / esnaf odası üye listesi
- [ ] Ayancık Belediyesi ve Kaymakamlık sitelerinde "faydalı numaralar" sayfası varsa
      eklenmeyi talep edin

> **Uyarı:** Bazı dizinler ücretli "öne çıkarma" satar. Başlangıçta ücretsiz kayıt
> yeterlidir; ücretli paketlerin geri dönüşü genelde düşüktür.

---

## 3. Yerel bağlantılar (en değerli off-page iş)

Dizin kayıtları herkeste var. Fark yaratan şey, **Ayancık'a özgü gerçek siteler**
üzerinden gelen bağlantılar:

- [ ] **Konaklama işletmeleri** — Ayancık ve çevresindeki pansiyon, otel, apart ve
      yazlık kiralayanlarla konuşun. "Ulaşım" sayfalarına sizi havalimanı transferi
      için önermelerini isteyin. Karşılığında misafirlerine indirim verin.
- [ ] **Ayancık Gazetesi** ve yerel haber siteleri — "Ayancık'a gelen misafirler için
      ulaşım rehberi" gibi bir habere konu olun veya yazı verin.
- [ ] **Sinop gezi blogları** — gezilecek yerler yazınızı kaynak göstermelerini isteyin.
      Akgöl ve İnaltı Mağarası yol bilgisi internette çok eksik; sizin yazınız
      gerçekten doldurduğu için alıntılanma şansı yüksek.
- [ ] **Sinop Üniversitesi Ayancık MYO** öğrenci toplulukları ve öğrenci grupları —
      öğrenci taksisi sayfanızı paylaşın.
- [ ] **Düğün salonu, restoran, balıkçı** gibi işletmelerle karşılıklı tavsiye.
- [ ] **Facebook grupları:** "Ayancıklılar", "Sinop", gurbetçi grupları. Spam değil,
      gerçek soru cevaplayarak ve blog yazılarınızı paylaşarak.

---

## 4. Google Search Console ve Bing

- [ ] `ayanciktaksi.com` için **Google Search Console** doğrulaması yapın
      (Cloudflare DNS üzerinden TXT kaydı en kolay yöntem).
- [ ] `https://ayanciktaksi.com/sitemap-index.xml` adresini gönderin.
- [ ] Anasayfa için "URL İncele → Dizine eklenmeyi iste" yapın.
- [ ] **Bing Webmaster Tools**'a da ekleyin (Search Console'dan içe aktarabilirsiniz).
- [ ] İlk ay haftada bir "Performans" raporuna bakın: hangi aramalarla geliyorlar?
      Beklemediğiniz bir kelime çıkarsa o konuda blog yazısı ekleyin.

---

## 5. Yapay zekâ aramaları (AI SEO)

İnsanlar artık "Ayancık'ta taksi nasıl bulurum" diye ChatGPT'ye de soruyor.
Site bunun için hazırlandı:

- `/llms.txt` — işletme bilgilerinin makine-okunur özeti (otomatik üretiliyor)
- `robots.txt` — GPTBot, ClaudeBot, PerplexityBot, Google-Extended açıkça izinli
- Tüm S.S.S. cevapları **tek paragrafta tam cevap** olacak şekilde yazıldı —
  yapay zekâ asistanları bu biçimi doğrudan alıntılıyor
- `FAQPage` ve `LocalBusiness` şemaları her sayfada

Yapmanız gerekenler:

- [ ] Yayından 2 hafta sonra ChatGPT, Perplexity ve Gemini'ye şunları sorun:
      *"Ayancık'ta taksi"*, *"Sinop havalimanından Ayancık'a nasıl gidilir"*,
      *"taxi in Ayancık Turkey"*. Sizi gösteriyor mu, bilgiler doğru mu?
- [ ] Eksik veya yanlış bilgi varsa ilgili S.S.S. maddesini netleştirin.
- [ ] Yeni blog yazılarında da aynı kuralı uygulayın: her başlık bir soru,
      ilk paragraf o sorunun tam cevabı.

---

## 6. İçerik takvimi

Site 10 rehber yazısıyla başlıyor. Ayda 1 yazı ekleyin — bir yıl sonra 22 yazınız olur.

Hazır fikirler (arama hacmi olan, henüz yazmadığınız konular):

- Ayancık'ta kışın yol durumu ve güvenli sürüş
- Ayancık otogarı: hangi firma nereye, saatler nasıl işliyor
- Sinop'ta bir günde gezilecek yerler (Ayancık'tan çıkışlı)
- Ayancık'ta nerede kalınır: pansiyon ve apart rehberi
- Düğün konvoyu ve özel gün taksi hizmeti
- Çangal Ormanları'nda kamp ve piknik rehberi
- Ayancık'ta balık sezonu ve nerede yenir
- Erfelek Tatlıca Şelaleleri tam rehberi (ayrı yazı)
- Ayancık'ta bayramda ulaşım
- Sinop Üniversitesi Ayancık MYO öğrencileri için şehir rehberi
- Kurban Bayramı'nda köye ulaşım
- Ayancık'tan Kastamonu'ya Çangal yolu: ne beklemeli

> **Kural:** Her yazı gerçek bir soruyu gerçekten cevaplasın. Mesafe, süre, saat ve
> fiyat mantığı gibi somut bilgi verin. "Kaliteli hizmet sunuyoruz" cümlesi hiçbir
> arama sonucunda işe yaramaz.

---

## 7. Teknik kontroller (yayından sonra)

- [ ] **PageSpeed Insights** — hem mobil hem masaüstü 95+ olmalı
      (site statik ve JS'siz olduğu için rahat geçer)
- [ ] **Zengin Sonuç Testi** (search.google.com/test/rich-results) —
      anasayfa, bir hizmet sayfası ve bir blog yazısını test edin
- [ ] **Mobil uyumluluk** — gerçek bir telefonda arama ve WhatsApp butonlarını deneyin
- [ ] `https://ayanciktaksi.com/llms.txt` açılıyor mu
- [ ] `https://ayanciktaksi.com/sitemap-index.xml` açılıyor mu
- [ ] `www.ayanciktaksi.com` → `ayanciktaksi.com` yönlendirmesi çalışıyor mu
- [ ] HTTPS zorunlu mu (Cloudflare'de "Always Use HTTPS" açık olmalı)

---

## 8. Ölçün

Ayda bir şu üç sayıyı bir yere yazın:

1. **Google İşletme Profili → Arama görüntüleme sayısı ve telefon tıklaması**
   (en gerçekçi gösterge budur)
2. **Search Console → toplam tıklama ve gösterim**
3. **Yorum sayısı ve ortalama puan**

Site trafiği değil, **gelen çağrı sayısı** başarı ölçüsüdür.
