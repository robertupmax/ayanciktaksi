/* Site genelinde kullanılan SSS. /sss/ sayfasında tamamı, anasayfada ilk 8'i gösterilir.
   Yanıtlar bilinçli olarak "tek paragrafta net cevap" biçiminde yazıldı:
   hem Google öne çıkan snippet'i hem de yapay zekâ asistanları bu biçimi alıntılıyor. */

export type FaqItem = { q: string; a: string; group: string };

export const faqGroups = [
  'Taksi çağırma',
  'Fiyat ve ödeme',
  'Havalimanı ve uzun mesafe',
  'Köyler ve çevre',
  'Yolcu ve araç',
  'Bagaj ve araç özellikleri',
] as const;

export const faq: FaqItem[] = [
  /* --- Taksi çağırma --- */
  {
    group: 'Taksi çağırma',
    q: 'Ayancık’ta 7/24 taksi var mı?',
    a: 'Evet. Ayancık Taksi (Güven Taksi) günün her saati, hafta sonu ve resmî tatiller dahil çalışır. 0531 830 20 17 numarasını gecenin hangi saati olursa olsun arayabilirsiniz. Gece saatleri için ek ücret uygulanmaz.',
  },
  {
    group: 'Taksi çağırma',
    q: 'Ayancık’ta taksi nasıl çağırılır?',
    a: '0531 830 20 17 numarasını arayın ve bulunduğunuz yeri tarif edin. Ayancık merkez ve çevresini iyi bildiğimiz için mevki adı, bir dükkân ya da cami ismi söylemeniz çoğu zaman yeterli oluyor; adresi tam bilmeseniz de buluruz.',
  },
  {
    group: 'Taksi çağırma',
    q: 'Taksi ne kadar sürede gelir?',
    a: 'Ayancık ilçe merkezinde genellikle kısa sürede kapınızdayız. Köylerden gelen çağrılarda süre mesafeye ve yol durumuna göre değişir; telefonda size gerçekçi bir tahminî süre söyleriz. Başka bir yolculukta isek bunu saklamayız, açıkça belirtiriz.',
  },
  {
    group: 'Taksi çağırma',
    q: 'Önceden rezervasyon yapabilir miyim?',
    a: 'Evet, rezervasyon alıyoruz. Havalimanı transferleri, hastane randevuları ve uzun mesafe yolculuklar için rezervasyon öneriyoruz. Arayıp tarih, saat, alış adresi, varış yeri ve kişi sayısını söylemeniz yeterli; saatinizi ayırır, fiyatı telefonda netleştiririz.',
  },
  {
    group: 'Taksi çağırma',
    q: 'Yurt dışından arayabilir miyim?',
    a: 'Arayabilirsiniz; numaramız yurt dışından +90 531 830 20 17 şeklinde çevrilir. Yurt dışından gelen misafirlerimiz havalimanı karşılamasını genelde birkaç gün önceden arayarak planlıyor: uçuş tarihi, saati ve kişi sayısını söylemeniz yeterli, saatinizi ayırıyoruz.',
  },

  /* --- Fiyat ve ödeme --- */
  {
    group: 'Fiyat ve ödeme',
    q: 'Ayancık taksi ücreti ne kadar?',
    a: 'Şehir içi kısa yolculuklarda resmî taksimetre tarifesi uygulanır; bu tarife belediye ve ilgili meslek odası tarafından belirlenir ve gündüz-gece aynıdır. Havalimanı, hastane ve şehirler arası gibi uzun yolculuklarda ise yolculuktan önce konuşulan sabit bir fiyat veririz. Net tutarı öğrenmek için güzergahınızı söyleyerek arayın.',
  },
  {
    group: 'Fiyat ve ödeme',
    q: 'Fiyat sabit mi yoksa taksimetre mi yazıyor?',
    a: 'İkisi de kullanılır ama karışmaz: şehir içinde taksimetre, şehir dışı ve havalimanı transferlerinde sabit fiyat. Sabit fiyat verdiğimizde yol üzerinde değişmez; köprü ve otoyol ücretleri dahildir.',
  },
  {
    group: 'Fiyat ve ödeme',
    q: 'Ödeme nasıl yapılıyor?',
    a: 'Ödemeler nakit olarak alınıyor. Şehir dışı ve uzun mesafe yolculuklarda tutarı yola çıkmadan konuştuğumuz için ne kadar nakit bulundurmanız gerektiğini önceden bilirsiniz.',
  },
  {
    group: 'Fiyat ve ödeme',
    q: 'Gidiş-dönüş alırsam indirim oluyor mu?',
    a: 'Evet. Araç dönüşte boş gelmek zorunda kalmadığı için gidiş-dönüş yolculuklar, tek yönü iki kez almaya göre belirgin şekilde daha uygun. Hastane ve havalimanı yolculuklarında bunu özellikle öneriyoruz.',
  },
  {
    group: 'Fiyat ve ödeme',
    q: 'Bagaj için ek ücret alıyor musunuz?',
    a: 'Hayır, bagaj için ek ücret almıyoruz. Aracımız büyük bagajlıdır; olağandışı ölçüde bir yük varsa önceden haber vermeniz yeterli.',
  },
  {
    group: 'Fiyat ve ödeme',
    q: 'Gece ücreti var mı?',
    a: 'Hayır, gece için ek tarife uygulamıyoruz. Gece yolculukları için tek isteğimiz, araç planlaması yapabilmek adına mümkünse önceden haber vermeniz.',
  },

  /* --- Havalimanı ve uzun mesafe --- */
  {
    group: 'Havalimanı ve uzun mesafe',
    q: 'Ayancık’tan Sinop Havalimanı’na kaç km ve kaç saat?',
    a: 'Ayancık’tan Sinop Havalimanı’na karayolu ile yaklaşık 60 kilometre vardır ve normal koşullarda yaklaşık 1 saat 5 dakika sürer. Uçuş saatinizden en az 2,5 saat önce yola çıkacak şekilde planlama yapmanızı öneriyoruz; yolun tamamı virajlı sahil yoludur.',
  },
  {
    group: 'Havalimanı ve uzun mesafe',
    q: 'Uçağım rötar yaparsa bekleme ücreti alıyor musunuz?',
    a: 'Hayır. Karşılama transferlerinde uçuşunuzu takip ediyor, yeni iniş saatine göre planlama yapıyoruz. Rötar nedeniyle oluşan bekleme için ek ücret almıyoruz.',
  },
  {
    group: 'Havalimanı ve uzun mesafe',
    q: 'Samsun Çarşamba Havalimanı’na da götürüyor musunuz?',
    a: 'Evet. Ayancık’tan Samsun Çarşamba Havalimanı’na yaklaşık 250 kilometre, 3,5 saatlik bir yol var. Bu mesafedeki transferler için mutlaka önceden rezervasyon alıyoruz.',
  },
  {
    group: 'Havalimanı ve uzun mesafe',
    q: 'Ayancık’tan İstanbul veya Ankara’ya taksiyle gidilir mi?',
    a: 'Gidilir. Ayancık–Ankara 435 km (yaklaşık 6 saat), Ayancık–İstanbul 630 km (yaklaşık 8,5 saat). Fiyat kişi başına değil araç başına olduğundan, kalabalık bir ailede veya bagajı fazla olan yolculukta otobüse yakın bir maliyetle kapıdan kapıya gitmek mümkün olabiliyor. En az bir gün önceden rezervasyon gerekir.',
  },

  /* --- Köyler ve çevre --- */
  {
    group: 'Köyler ve çevre',
    q: 'Ayancık köylerine taksi geliyor mu?',
    a: 'Evet, Ayancık’a bağlı 60’tan fazla köyün tamamına hizmet veriyoruz. Köyünüzün adını söyleyerek arayın; yol durumunu ve tahminî süreyi hemen söyleriz. Hastane, banka, pazar ve alışveriş yolculukları en sık yaptığımız işlerden.',
  },
  {
    group: 'Köyler ve çevre',
    q: 'Kışın karlı köy yollarına çıkıyor musunuz?',
    a: 'Kar lastiği ve zincirle çalışıyoruz, çıkabildiğimiz her yola çıkıyoruz. Ancak karla kapanmış ve araç geçişine uygun olmayan yollarda riske girmiyoruz. Böyle bir durumda sizi bekletmek yerine telefonda hemen söylüyoruz ki başka çözüm arayabilin.',
  },
  {
    group: 'Köyler ve çevre',
    q: 'Ben gelmesem, alışverişimi köye getirir misiniz?',
    a: 'Getiririz. Market, pazar veya eczane alışverişinizi telefonda sayın; alışverişi yapıp fişiyle birlikte kapınıza teslim ederiz. Tutarı teslimde tahsil ediyoruz.',
  },
  {
    group: 'Köyler ve çevre',
    q: 'Plajlara gidiş-dönüş yapıyor musunuz?',
    a: 'Evet. Çamurca Plajı, Aliköy Plajı, Ayancık Köyü limanı, merkez sahili ve Türkeli yönündeki tenha sahillere gidiyoruz. Çalışma şeklimiz “bırak-al”: sabah sizi bırakırız, dönmek istediğinizde arar aynı aracı çağırırsınız. Araç beklemediği için bekleme ücreti de çıkmaz. Turistik tur düzenlemiyoruz, yalnızca ulaşım sağlıyoruz.',
  },

  /* --- Yolcu ve araç --- */
  {
    group: 'Yolcu ve araç',
    q: 'Kaç kişi binebilir?',
    a: 'Araçta sürücü hariç 4 yolcu yeri bulunur. Daha kalabalık gruplar için güvendiğimiz meslektaşlarımızla ikinci araç ayarlıyor, birlikte hareket ediyoruz. Kişi sayısını arama sırasında söylemeniz yeterli.',
  },
  {
    group: 'Yolcu ve araç',
    q: 'Hasta nakli yapıyor musunuz?',
    a: 'Oturabilen, kendi başına veya hafif yardımla araca binebilen hastaları hastaneye götürüp getiriyoruz. Ancak biz bir ticari taksiyiz; ambulans değiliz. Sedyeyle taşıma, oksijen desteği veya yol boyunca tıbbî gözetim gereken durumlarda 112 Acil Çağrı Merkezi’ni aramanız gerekir.',
  },
  {
    group: 'Yolcu ve araç',
    q: 'Evcil hayvanımla binebilir miyim?',
    a: 'Taşıma kafesindeki kedi ve küçük köpekleri alıyoruz. Büyük köpekler için önceden haber verin, aracın o anki durumuna göre birlikte karar verelim.',
  },
  {
    group: 'Yolcu ve araç',
    q: 'Sürücünüz belgeli mi?',
    a: 'Evet. Ticari taşımacılık için gereken belgelere sahip, ilçede tanınan bir sürücüyle yolculuk yapıyorsunuz. Araç sigortalı, klimalı ve düzenli bakımlıdır.',
  },

  /* --- Bagaj ve araç özellikleri --- */
  {
    group: 'Bagaj ve araç özellikleri',
    q: 'Bagajım çok, sığar mı?',
    a: 'Sığar. Aracımız büyük bagajlıdır ve bagaj için ek ücret almıyoruz. Olağandışı ölçüde bir yükünüz varsa önceden söyleyin, alıp alamayacağımızı telefonda net olarak belirtelim.',
  },
  {
    group: 'Bagaj ve araç özellikleri',
    q: 'Hacimli bir yük taşımam gerekiyor, alır mısınız?',
    a: 'Aracımız büyük bagajlıdır, bagaja sığan her şeyi taşıyoruz. Olağandışı ölçüde bir yük varsa önceden haber verin; kabaca ölçüsünü söyleyin, alıp alamayacağımızı telefonda net olarak belirtelim. Alamıyorsak boşuna gelip sizi oyalamayız.'
  },
  {
    group: 'Bagaj ve araç özellikleri',
    q: 'Sabah çok erken veya gece çok geç saatte hizmet var mı?',
    a: 'Var. Sabahın ilk saatindeki havalimanı transferleri ve gece yarısı Ayancık Otogarı’na varan otobüslerin karşılanması düzenli yaptığımız işlerden. Erken ve geç saatler için ek ücret uygulamıyoruz; tek isteğimiz, araç planlaması yapabilmek adına mümkünse önceden haber vermeniz.',
  },
  {
    group: 'Bagaj ve araç özellikleri',
    q: 'Ayancık’ta en uygun fiyatlı taksi hangisi?',
    a: 'Şehir içinde fiyat farkı olmaz: taksimetre tarifesi belediye ve meslek odası tarafından belirlenir ve ilçedeki bütün taksilerde aynıdır. Fark şehir dışı yolculuklarda ortaya çıkar; orada sabit fiyat veriyor, gidiş-dönüşte belirgin indirim uyguluyor, gece ve bagaj için ek ücret almıyoruz. Güzergahınızı söyleyerek arayın, net tutarı telefonda öğrenin — karşılaştırmanız bizi rahatsız etmez.',
  },
  {
    group: 'Bagaj ve araç özellikleri',
    q: 'Otogardan karşılama yapıyor musunuz?',
    a: 'Evet. Ayancık Otogarı’na varan otobüsler çoğunlukla gece yarısı veya sabaha karşı geliyor ve o saatte başka ulaşım olmuyor. Varış saatinizi önceden bildirin; otobüsünüz geciktiğinde de beklemeniz gerekmez, aracı yeni saate göre planlarız.',
  },
];

/* Anasayfada gösterilecek sorular — sırayla, soru metnine göre seçilir.
   Yeni soru eklediğinizde indeks kaymaz. */
const homeQuestions = [
  'Ayancık’ta 7/24 taksi var mı?',
  'Taksi ne kadar sürede gelir?',
  'Ayancık taksi ücreti ne kadar?',
  'Bagajım çok, sığar mı?',
  'Sabah çok erken veya gece çok geç saatte hizmet var mı?',
  'Ayancık’tan Sinop Havalimanı’na kaç km ve kaç saat?',
  'Ayancık köylerine taksi geliyor mu?',
  'Otogardan karşılama yapıyor musunuz?',
];

export const homeFaq: FaqItem[] = homeQuestions
  .map((q) => faq.find((f) => f.q === q))
  .filter((f): f is FaqItem => Boolean(f));
