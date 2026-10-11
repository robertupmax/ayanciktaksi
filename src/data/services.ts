/* Hizmetler — her hizmet kendi sayfasını otomatik oluşturur (/hizmetler/<slug>/) */

export type Service = {
  slug: string;
  title: string;
  navTitle: string;
  h1: string;
  short: string;
  metaTitle: string;
  metaDescription: string;
  icon: string;
  wa: 'general' | 'airport' | 'hospital' | 'village' | 'tour' | 'intercity' | 'student' | 'cargo';
  highlights: string[];
  body: { heading: string; paragraphs: string[]; list?: string[] }[];
  faq: { q: string; a: string }[];
  featured?: boolean;
};

export const services: Service[] = [
  {
    slug: 'sinop-havalimani-transfer',
    title: 'Sinop Havalimanı Transferi',
    navTitle: 'Havalimanı Transferi',
    h1: 'Ayancık – Sinop Havalimanı Taksi Transferi',
    short:
      'Uçuş saatinize göre planlanmış, sabit fiyatlı havalimanı transferi. Ayancık’tan havalimanına yaklaşık 1 saat.',
    metaTitle: 'Ayancık Sinop Havalimanı Taksi Transfer | Sabit Fiyat 7/24',
    metaDescription:
      'Ayancık’tan Sinop Havalimanı’na sabit fiyatlı taksi transferi. Uçuş takibi, kapıdan alış, gece uçuşları dahil 7/24. Hemen arayın.',
    icon: 'plane',
    wa: 'airport',
    highlights: [
      'Sabit fiyat — taksimetre sürprizi yok',
      'Uçuş saatinize göre kapınızdan alış',
      'Gece ve sabah erken uçuşlar dahil',
      'Rötar olursa ek ücret yok',
    ],
    body: [
      {
        heading: 'Ayancık’tan havalimanına ne kadar sürer?',
        paragraphs: [
          'Ayancık ile Sinop şehir merkezi arasındaki mesafe sahil karayolu üzerinden yaklaşık 55 kilometredir. Sinop Havalimanı şehir merkezine çok yakın olduğu için Ayancık’tan havalimanına toplam yol yaklaşık 60 kilometre, normal trafik ve hava koşullarında yaklaşık 1 saat 5 dakika sürer.',
          'Yolun büyük bölümü virajlı sahil yoludur. Kış aylarında yağış ve buzlanma, yaz aylarında ise yoğun tatilci trafiği süreyi uzatabilir. Bu yüzden uçuş saatinizden en az 2,5 saat önce yola çıkacak şekilde planlama yapıyoruz.',
        ],
      },
      {
        heading: 'Nasıl çalışıyor?',
        paragraphs: [
          'Bizi arayın veya WhatsApp’tan yazın; uçuş numaranızı, saatini ve alış adresinizi iletin. Sizin için saat hesabını biz yapar, kalkış saatini birlikte netleştiririz. Fiyatı önceden söyler, yazılı olarak teyit ederiz.',
          'Dönüş transferlerinde uçuşunuzu takip ederiz. Uçağınız rötar yaptıysa bekleme için ek ücret almayız; siz bagajınızı alıp çıktığınızda araç kapıda olur.',
        ],
        list: [
          'Giden yolcu: uçuş saatinden geriye doğru planlama',
          'Gelen yolcu: terminal çıkışında karşılama',
          'Bebek/çocuk koltuğu talebi ücretsiz',
          'Valiz, bisiklet, sörf malzemesi gibi büyük bagajlar için önceden bilgi verin',
        ],
      },
      {
        heading: 'Samsun ve Kastamonu havalimanları',
        paragraphs: [
          'Sinop Havalimanı’nda uygun uçuş bulamazsanız Samsun Çarşamba Havalimanı da bir alternatiftir; Ayancık’tan yaklaşık 250 kilometre ve 3,5 saatlik bir yoldur. Kastamonu Havalimanı için ise Çangal üzerinden yaklaşık 170 kilometrelik bir güzergah izlenir. Bu uzun mesafeli transferler için mutlaka önceden rezervasyon alıyoruz.',
        ],
      },
    ],
    faq: [
      {
        q: 'Havalimanı transferi için ne kadar önceden haber vermeliyim?',
        a: 'Gündüz uçuşları için en az 3-4 saat önce haber vermeniz yeterli. Sabah erken (06:00–08:00 arası) kalkışlar ve yoğun yaz döneminde bir gün önceden rezervasyon yapmanızı öneriyoruz.',
      },
      {
        q: 'Fiyat sabit mi, taksimetre mi yazıyor?',
        a: 'Havalimanı transferlerinde sabit fiyat uygularız. Fiyatı yolculuktan önce söyleriz; yol üzerinde değişmez. Şehir içi kısa yolculuklarda ise resmî taksimetre tarifesi geçerlidir.',
      },
      {
        q: 'Uçağım rötar yaparsa ne olur?',
        a: 'Uçuşunuzu takip ediyoruz. Rötar durumunda bekleme ücreti almıyoruz, aracı yeni iniş saatine göre yeniden planlıyoruz.',
      },
      {
        q: 'Gece yarısı veya sabaha karşı transfer yapıyor musunuz?',
        a: 'Evet, 7/24 hizmet veriyoruz. Gece transferlerinde ek gece ücreti uygulamıyoruz, ancak araç planlaması için önceden haber vermeniz gerekiyor.',
      },
    ],
    featured: true,
  },

  {
    slug: 'hastane-transfer',
    title: 'Hastane ve Sağlık Transferi',
    navTitle: 'Hastane Transferi',
    h1: 'Ayancık Hastane Taksi — Ayancık Devlet ve Sinop Atatürk Devlet Hastanesi',
    short:
      'Randevunuza yetişin. Ayancık Devlet Hastanesi, Sinop Atatürk Devlet Hastanesi ve özel hastane transferleri; refakatçi desteğiyle.',
    metaTitle: 'Ayancık Hastane Taksi | Sinop Devlet Hastanesi Transfer 7/24',
    metaDescription:
      'Ayancık Devlet Hastanesi ve Sinop Atatürk Devlet Hastanesi için taksi. Randevu saatine göre planlama, yaşlı ve hasta yolcuya kapıdan kapıya refakat. 7/24.',
    icon: 'hospital',
    wa: 'hospital',
    highlights: [
      'Randevu saatinize göre planlama',
      'Kapıdan kapıya — merdiven ve kayıt desteği',
      'Yaşlı ve hasta yolcuda sabırlı refakat',
      'Bekleme veya dönüş için aynı araç',
    ],
    body: [
      {
        heading: 'En çok kullanılan sağlık güzergahları',
        paragraphs: [
          'Ayancık’ta en sık yaptığımız yolculuk, köylerden ilçe merkezine hastane, banka ve alışveriş için gelip gitme. İkinci sırada ise Ayancık’tan Sinop’a sevk edilen hastaları götürüp getirme var.',
          'Ayancık Devlet Hastanesi ilçe içindedir; köylerden gelişlerde mesafe 5 ile 35 kilometre arasında değişir. Sinop Atatürk Devlet Hastanesi ise sahil yolu üzerinden yaklaşık 55 kilometre, ortalama 1 saat uzaklıktadır.',
        ],
        list: [
          'Köy → Ayancık Devlet Hastanesi (ve dönüş)',
          'Ayancık → Sinop Atatürk Devlet Hastanesi',
          'Ayancık → Sinop’taki özel hastane ve tıp merkezleri',
          'Ayancık → Samsun hastaneleri (ileri tetkik ve ameliyat için)',
          'Diyaliz ve kemoterapi gibi düzenli tedaviler için haftalık sabit program',
        ],
      },
      {
        heading: 'Yaşlı ve hasta yolcu için nasıl çalışıyoruz?',
        paragraphs: [
          'Yolcularımızın önemli bir bölümü yaşlı komşularımız. Bu yüzden acele ettirmiyoruz. Aracı kapının önüne çekiyor, inip binmede yardımcı oluyor, gerektiğinde bastonu ve poşetleri biz taşıyoruz.',
          'Hastanede işi uzayacak yolcularımız için iki seçenek sunuyoruz: araç bekler ya da işiniz bittiğinde bizi arayıp aynı aracı çağırırsınız. Hangisi daha uygunsa telefonda birlikte karar veririz.',
        ],
      },
      {
        heading: 'Refakatçisi olmayan yolcular',
        paragraphs: [
          'Çocukları şehir dışında olan yaşlı yolcularımız için, isteğe bağlı olarak hastane girişine kadar eşlik edip kayıt sırasına yönlendiriyoruz. Yolculuk sonunda, isterse yakınını arayıp “annenizi/babanızı eve bıraktım” diye haber veriyoruz. Bu hizmet için ek ücret almıyoruz.',
          'Not: Biz bir ticari taksiyiz; ambulans veya hasta nakil aracı değiliz. Sedyeyle taşıma, oksijen desteği veya yolculuk sırasında tıbbî gözetim gereken durumlarda 112 Acil Çağrı Merkezi’ni aramanız gerekir.',
        ],
      },
    ],
    faq: [
      {
        q: 'Hastanede işim bitene kadar taksi bekler mi?',
        a: 'Evet, isterseniz araç bekler. Kısa süreli beklemelerde ücretsiz, uzun beklemelerde ise telefonda konuştuğumuz uygun bir bekleme ücreti uygularız. Dilerseniz işiniz bittiğinde tekrar arayın, aynı araç sizi alır.',
      },
      {
        q: 'Tekerlekli sandalye ile yolculuk yapabilir miyim?',
        a: 'Katlanabilir tekerlekli sandalyeyi bagaja alıyor, yolcunun araca binmesine yardımcı oluyoruz. Sandalyeden kalkamayan yolcular için tekerlekli sandalyeye uygun (rampalı) araç gerekir; bu durumda sizi doğru yere yönlendirelim, arayın konuşalım.',
      },
      {
        q: 'Diyaliz için haftada üç gün düzenli gidiş-dönüş yapar mısınız?',
        a: 'Evet. Düzenli tedavi programlarında haftalık sabit saat belirliyor ve bu yolculuklar için indirimli bir anlaşma fiyatı uyguluyoruz. Arayıp programınızı paylaşın.',
      },
      {
        q: 'Sevk kağıdıyla Sinop’a gitmem gerekiyor, aynı gün dönebilir miyim?',
        a: 'Evet, aynı gün gidiş-dönüş en sık yaptığımız yolculuk. Sabah erken çıkıp işiniz bittiğinde dönecek şekilde planlıyoruz. Gidiş-dönüş birlikte alındığında daha uygun fiyat çıkar.',
      },
    ],
    featured: true,
  },

  {
    slug: 'koy-taksi',
    title: 'Köy Taksisi',
    navTitle: 'Köy Taksisi',
    h1: 'Ayancık Köy Taksisi — 60’tan Fazla Köye Hizmet',
    short:
      'Ayancık’a bağlı köylerden merkeze, merkezden köye. Minibüs saatini beklemeden, kapınızdan.',
    metaTitle: 'Ayancık Köy Taksi | Tüm Köylere 7/24 Ulaşım',
    metaDescription:
      'Ayancık köylerinden ilçe merkezine taksi: hastane, banka, pazar ve alışveriş yolculukları. 60’tan fazla köye hizmet, kapıdan kapıya, 7/24.',
    icon: 'village',
    wa: 'village',
    highlights: [
      'Ayancık’ın 60’tan fazla köyüne hizmet',
      'Minibüs saatini beklemek yok',
      'Pazar günü ve resmî tatillerde de çalışıyoruz',
      'Alışveriş poşetlerini kapınıza kadar taşıyoruz',
    ],
    body: [
      {
        heading: 'Köyden merkeze gitmenin en pratik yolu',
        paragraphs: [
          'Ayancık’ın köyleri arasında ulaşım genellikle minibüslerle sağlanır ve çoğu köye günde sadece birkaç sefer vardır. Hastane randevunuz minibüs saatine uymadığında, bankada işiniz uzadığında ya da akşam üstü dönmek istediğinizde elinizde seçenek kalmıyor.',
          'Biz tam bu boşluğu dolduruyoruz. Bir telefonla kapınıza geliriz, işinizi bitirene kadar bekleriz ya da hazır olduğunuzda sizi alırız. Yolculuk sonunda poşetleri kapıya kadar taşırız.',
        ],
      },
      {
        heading: 'En sık yaptığımız köy yolculukları',
        paragraphs: [
          'Çangal yönündeki yüksek köyler, sahil köyleri ve Ayancık Çayı vadisindeki yerleşimler düzenli olarak hizmet verdiğimiz bölgeler. Yol şartlarını biliyoruz; kışın kar, ilkbaharda heyelan riski olan güzergahları takip ediyoruz.',
        ],
        list: [
          'Hastane ve sağlık ocağı randevuları',
          'Banka, PTT, tapu, muhtarlık ve kaymakamlık işleri',
          'Haftalık pazar ve market alışverişi',
          'Düğün, cenaze, taziye ve bayram ziyaretleri',
          'Çay ocağı, kahvehane ve akşam dönüşleri',
          'Yaz aylarında köy evine gelen misafirlerin karşılanması',
        ],
      },
      {
        heading: 'Kış şartları',
        paragraphs: [
          'Ayancık’ın yüksek kesimleri kış boyunca genellikle karla kaplı geçer. Kar lastiği ve zincirle çalışıyor, yol kapalıysa size dürüstçe söylüyoruz. Ulaşamayacağımız bir yol için “geliyorum” deyip sizi bekletmeyiz — gelemeyeceksek telefonda hemen belirtiriz ki başka çözüm arayabilin.',
        ],
      },
    ],
    faq: [
      {
        q: 'Köyüme geliyor musunuz?',
        a: 'Ayancık’a bağlı tüm köylere hizmet veriyoruz. Köyünüzün adını söyleyerek arayın; yol durumunu ve tahminî süreyi hemen söyleriz.',
      },
      {
        q: 'Köyden merkeze gidiş-dönüş ne kadar?',
        a: 'Mesafeye göre değişir. Gidiş-dönüşü birlikte aldığınızda tek yön iki kez ödemekten daha uygun oluyor. Köy adını söyleyin, telefonda net fiyat verelim.',
      },
      {
        q: 'Kışın karlı yollarda da geliyor musunuz?',
        a: 'Kar lastiği ve zincirle çalışıyoruz. Karla kapanmış, araç geçişine uygun olmayan yollarda ise riske girmiyoruz; bu durumu size açıkça söylüyoruz.',
      },
      {
        q: 'Sadece alışverişimi getirseniz olur mu, ben gelmeyeyim?',
        a: 'Olur. Market, eczane veya pazar alışverişinizi alıp köyünüze getirebiliyoruz. Listeyi WhatsApp’tan yazın, alışverişi yapıp fişle birlikte teslim ederiz.',
      },
    ],
    featured: true,
  },

  {
    slug: 'plaj-koy-turu',
    title: 'Plaj ve Koy Turları',
    navTitle: 'Plaj ve Koylar',
    h1: 'Ayancık Plaj ve Koy Turu — Denize Taksiyle Gidin',
    short:
      'Ayancık sahili, Kuğu Yalısı ve çevredeki sakin koylar. Gün boyu araç kiralama veya bırak-al usulü.',
    metaTitle: 'Ayancık Plaj Taksi | Koy ve Sahil Turu — Sinop',
    metaDescription:
      'Ayancık ve çevresindeki plajlara, koylara taksiyle gidin. Yarım gün veya tam gün tur, bırak-al hizmeti, aile ve grup yolculukları. 7/24.',
    icon: 'beach',
    wa: 'tour',
    highlights: [
      'Yarım gün ve tam gün tur seçenekleri',
      '“Bırak-al”: sabah bırakalım, akşam alalım',
      'Şemsiye, soğuk kutu, sörf malzemesi için geniş bagaj',
      'Kalabalık grup için ikinci araç ayarlayabiliriz',
    ],
    body: [
      {
        heading: 'Nereye gidelim?',
        paragraphs: [
          'Ayancık, açık denize bakan bir liman ilçesi. Merkezdeki sahil ve Kuğu Yalısı yürüme mesafesindeyken, kalabalıktan uzak koylar için biraz yol gitmek gerekiyor. Yolu, hangi saatte hangi koyun sakin olduğunu ve denizin hangi rüzgârda dalgalı olacağını biliyoruz.',
          'Sinop yönünde Hamsilos Koyu ve Akliman, Türkeli yönünde ise daha tenha sahiller var. Günübirlik gezide hangisinin size uygun olduğuna telefonda birlikte karar verelim — kaç kişi olduğunuzu ve çocuk olup olmadığını söylemeniz yeterli.',
        ],
        list: [
          'Ayancık merkez sahili ve Kuğu Yalısı',
          'Türkeli yönündeki tenha sahiller (yaklaşık 35 km)',
          'Hamsilos Koyu ve Akliman, Sinop (yaklaşık 60 km)',
          'Erfelek Tatlıca Şelaleleri (yaklaşık 50 km) — serinlemek için',
          'Akgöl ve Çangal ormanları — orman içinde piknik',
        ],
      },
      {
        heading: 'Bırak-al nasıl işliyor?',
        paragraphs: [
          'Tüm gün araç tutmak istemiyorsanız en ekonomik yöntem bu: sabah sizi plaja bırakırız, akşam dönmek istediğinizde arar, aynı aracı çağırırsınız. İki yön fiyatı baştan konuşulur, arada taksimetre işlemez.',
          'Alternatif olarak aracı gün boyu tutabilirsiniz. Birkaç koyu gezmek, arada yemeğe gitmek veya çocukla esnek hareket etmek isteyenler genelde bunu tercih ediyor.',
        ],
      },
      {
        heading: 'Yazın Ayancık’a gelen misafirler için',
        paragraphs: [
          'Yaz aylarında ilçeye yurt içinden ve yurt dışından çok sayıda misafir geliyor. Çoğu zaman araç getirmiyor ya da tek araçla birkaç aile kalabalık oluyor. Havalimanından karşılama, köy evine bırakma, plaj turu ve dönüş transferini tek seferde planlayabiliyoruz; böylece tatiliniz boyunca aynı numarayı arıyorsunuz.',
        ],
      },
    ],
    faq: [
      {
        q: 'Tam gün araç kiralamak ne kadar?',
        a: 'Gezeceğiniz yerlere ve toplam kilometreye göre değişiyor. Nereleri gezmek istediğinizi söyleyin, telefonda tek bir toplam fiyat verelim — gün sonunda sürpriz olmaz.',
      },
      {
        q: 'Kaç kişi sığıyor?',
        a: 'Araçta sürücü hariç 4 yolcu yeri var. Daha kalabalıksanız haber verin; güvendiğimiz meslektaşlarımızla ikinci araç ayarlıyor, konvoy halinde gidiyoruz.',
      },
      {
        q: 'Çocuk koltuğu var mı?',
        a: 'Var. Çocuğunuzun yaşını önceden söylerseniz uygun koltuğu hazır ederiz; ek ücret almıyoruz.',
      },
      {
        q: 'Plajda beklemeniz gerekiyor mu?',
        a: 'Gerekmiyor. İsterseniz bırakıp gidelim, dönüşte tekrar arayın. İsterseniz gün boyu aracı tutun. İkisinin fiyatı farklıdır, telefonda ikisini de söyleyelim siz karar verin.',
      },
    ],
    featured: true,
  },

  {
    slug: 'sehirler-arasi-taksi',
    title: 'Şehirler Arası Taksi',
    navTitle: 'Şehirler Arası',
    h1: 'Ayancık Şehirler Arası Taksi — Sinop, Samsun, Kastamonu, Ankara, İstanbul',
    short:
      'Otobüs saatine mahkûm kalmayın. Kapıdan kapıya, sabit fiyatlı uzun mesafe yolculukları.',
    metaTitle: 'Ayancık Şehirler Arası Taksi | Samsun, Ankara, İstanbul',
    metaDescription:
      'Ayancık’tan şehirler arası taksi: Sinop, Samsun, Kastamonu, Boyabat, Ankara ve İstanbul. Kapıdan kapıya, sabit fiyat, 7/24 rezervasyon.',
    icon: 'road',
    wa: 'intercity',
    highlights: [
      'Kapıdan kapıya — aktarma ve otogar yok',
      'Baştan sabit fiyat',
      'Gece yolculuğu mümkün',
      'Tek kişi veya aile — fiyat araç başına',
    ],
    body: [
      {
        heading: 'Ayancık’tan mesafeler',
        paragraphs: [
          'Ayancık, Sinop’a 55 kilometrelik sahil yoluyla bağlanır. İç kesimlere ve diğer illere ulaşım ise Çangal yolu üzerinden Kastamonu istikametiyle sağlanır. Aşağıdaki mesafeler karayolu üzerinden yaklaşık değerlerdir.',
        ],
        list: [
          'Sinop — 55 km, yaklaşık 1 saat',
          'Türkeli — 35 km, yaklaşık 35 dakika',
          'Erfelek — 46 km, yaklaşık 50 dakika',
          'Boyabat — 72 km, yaklaşık 1 saat 20 dakika',
          'Gerze — 94 km, yaklaşık 1 saat 40 dakika',
          'Kastamonu — 140 km, yaklaşık 2 saat 30 dakika',
          'Samsun — 218 km, yaklaşık 3 saat 15 dakika',
          'Ankara — 435 km, yaklaşık 6 saat',
          'İstanbul — 630 km, yaklaşık 8 saat 30 dakika',
        ],
      },
      {
        heading: 'Hangi durumlarda tercih ediliyor?',
        paragraphs: [
          'Uzun mesafe taksi, otobüsten pahalı ama bazı durumlarda tek mantıklı seçenek oluyor: gece yarısı yola çıkmak gerektiğinde, yaşlı veya hasta bir yakınla otogar aktarması yapmak mümkün olmadığında, bagaj fazla olduğunda ya da aile kalabalık olduğu için kişi başı otobüs bileti toplamı taksiyi geçtiğinde.',
          'Fiyatı araç başına veriyoruz, kişi başına değil. Dört kişilik bir aile için Ayancık–Samsun gibi bir güzergahta bu genellikle otobüsle benzer bir tutara denk geliyor ve kapıdan kapıya gidiyorsunuz.',
        ],
      },
      {
        heading: 'Rezervasyon',
        paragraphs: [
          'Uzun mesafe yolculuklar için en az bir gün önceden haber verin. Güzergahı, tarihi, saati ve kişi sayısını iletin; fiyatı WhatsApp üzerinden yazılı olarak teyit ederiz. Böylece ikimizde de aynı bilgi olur.',
        ],
      },
    ],
    faq: [
      {
        q: 'Şehirler arası fiyat nasıl belirleniyor?',
        a: 'Toplam mesafe ve dönüşün boş olup olmamasına göre sabit bir fiyat veriyoruz. Yolculuk öncesi söylediğimiz fiyat değişmez; yol üzerindeki köprü ve otoyol ücretleri dahildir.',
      },
      {
        q: 'Gidiş-dönüş alırsam indirim var mı?',
        a: 'Var. Aracın dönüşte boş gelmesi gerekmediği için gidiş-dönüş yolculuklar tek yöne göre belirgin şekilde daha avantajlı oluyor.',
      },
      {
        q: 'Gece yola çıkabilir miyiz?',
        a: 'Çıkabiliriz. Uzun gece yolculuklarında dinlenme molalarını planlıyor, güvenli sürüşten taviz vermiyoruz.',
      },
      {
        q: 'Kredi kartı ile ödeyebilir miyim?',
        a: 'Evet, nakit ve kredi kartı kabul ediyoruz.',
      },
    ],
  },

  {
    slug: 'ogrenci-taksi',
    title: 'Öğrenci Taksisi',
    navTitle: 'Öğrenci Taksisi',
    h1: 'Ayancık Öğrenci Taksisi — Okula, Yurda, Otogara',
    short:
      'Ayancık Meslek Yüksekokulu ve lise öğrencileri için ekonomik, güvenilir ulaşım. Dönem boyu anlaşmalı fiyat.',
    metaTitle: 'Ayancık Öğrenci Taksi | MYO, Yurt ve Otogar Ulaşımı',
    metaDescription:
      'Sinop Üniversitesi Ayancık MYO ve lise öğrencileri için taksi. Yurt, okul, otogar ve tatil dönüşü transferleri; paylaşımlı yolculuk ve dönemlik anlaşma.',
    icon: 'student',
    wa: 'student',
    highlights: [
      'Paylaşımlı yolculukta kişi başı ucuz',
      'Dönem boyu sabit anlaşmalı fiyat',
      'Sabah ilk derse ve akşam geç çıkışa uygun',
      'Ailesi arayıp teyit alabilir',
    ],
    body: [
      {
        heading: 'Kışın Ayancık’ın en düzenli yolcuları',
        paragraphs: [
          'Sinop Üniversitesi’ne bağlı Ayancık Meslek Yüksekokulu ve ilçedeki liseler sayesinde kış ayları boyunca öğrenci yolcularımız oluyor. Sabah derse yetişmek, akşam karanlıkta yurda dönmek, hafta sonu memlekete gitmek için otogara ulaşmak — bunların hepsinde düzenli çalışıyoruz.',
          'Öğrenci bütçesini biliyoruz. Aynı yöne giden öğrencileri bir araya getirip paylaşımlı yolculuk yapıyoruz; böylece kişi başı maliyet belirgin şekilde düşüyor. Ayrıca dönem boyunca aynı saatte düzenli gidip gelen öğrencilere sabit anlaşmalı fiyat uyguluyoruz.',
        ],
      },
      {
        heading: 'Tatil dönüşleri ve otogar',
        paragraphs: [
          'Dönem sonu, ara tatil ve bayramlarda Ayancık Otogarı ile yurt/ev arasında yoğun hareket oluyor. Valizle minibüs beklemek yerine bir telefonla kapınızdan alınmak hem hızlı hem güvenli. Gece varan otobüslerden inenler için de otogarda karşılama yapıyoruz.',
        ],
        list: [
          'Yurt ↔ Ayancık MYO',
          'Ev ↔ okul (lise ve ortaokul)',
          'Yurt ↔ Ayancık Otogarı',
          'Ayancık ↔ Sinop (üniversite merkez kampüsü ve sınav günleri)',
          'Gece varan otobüslerde otogar karşılama',
        ],
      },
      {
        heading: 'Aileler için',
        paragraphs: [
          'Çocuğu Ayancık’ta okuyan ve kendisi şehir dışında olan aileler bizi arayıp düzenli bir ulaşım anlaşması yapabiliyor. Öğrenci araca bindiğinde ve indiğinde isterseniz size haber veriyoruz. Sabit bir sürücüyle, tanıdık bir araçla gidip gelmek hem öğrenci hem aile için daha huzurlu oluyor.',
        ],
      },
    ],
    faq: [
      {
        q: 'Öğrenci indirimi var mı?',
        a: 'Düzenli gidip gelen öğrencilere dönemlik anlaşma fiyatı uyguluyoruz; bu, tek tek binmeye göre belirgin şekilde ucuz. Ayrıca aynı yöne giden öğrencileri birleştirerek kişi başı maliyeti düşürüyoruz.',
      },
      {
        q: 'Her sabah aynı saatte alabilir misiniz?',
        a: 'Evet. Dönem başında saatinizi ve adresinizi alıp sabit programa yazıyoruz; her sabah aramanıza gerek kalmıyor.',
      },
      {
        q: 'Gece geç saatte yurda dönüş güvenli mi?',
        a: 'Ticari taşımacılık belgeli, ilçede tanınan bir sürücüyle yolculuk yapıyorsunuz. Dilerseniz yurda vardığınızda ailenize haber veriyoruz.',
      },
      {
        q: 'Arkadaşlarımla bölüşebilir miyiz?',
        a: 'Kesinlikle. Fiyat araç başına olduğu için 3-4 kişi bölüştüğünüzde kişi başı çok daha uygun oluyor.',
      },
    ],
  },

  {
    slug: 'sehir-ici-taksi',
    title: 'Şehir İçi Taksi',
    navTitle: 'Şehir İçi',
    h1: 'Ayancık Şehir İçi Taksi — 7/24 En Yakın Taksi',
    short:
      'İlçe merkezinde kısa yolculuklar: market, pazar, otogar, eczane, düğün. Taksimetre tarifesiyle.',
    metaTitle: 'Ayancık Taksi 7/24 | En Yakın Taksi — Şehir İçi',
    metaDescription:
      'Ayancık şehir içi taksi: otogar, pazar, market, eczane ve kısa mesafe yolculuklar. Resmî taksimetre tarifesi, 7/24 açık, hemen arayın.',
    icon: 'city',
    wa: 'general',
    highlights: [
      'İlçe merkezinde kısa sürede kapınızda',
      'Resmî taksimetre tarifesi',
      'Bagaj ve poşet için ek ücret yok',
      'Gece, bayram, pazar — hep açığız',
    ],
    body: [
      {
        heading: 'Ayancık içinde nereye gidiyorsunuz?',
        paragraphs: [
          'Ayancık, Ayancık Çayı vadisinde deniz ile Maltepe arasına kurulmuş, yokuşlu bir ilçe. Yürünecek mesafeler kısa görünse de eğim ve yağış işi zorlaştırıyor. Özellikle yaşlılarımız, poşetle alışveriş dönüşü olanlar ve yağmurlu havada aceleyle bir yere yetişmesi gerekenler için şehir içi taksi en pratik çözüm.',
        ],
        list: [
          'Otogar ↔ ev (otobüs saatlerine göre)',
          'Haftalık pazar ve market dönüşü',
          'Eczane, sağlık ocağı, laboratuvar',
          'Banka, PTT, kaymakamlık, tapu, nüfus müdürlüğü',
          'Düğün, nişan, taziye ve cenaze',
          'Liman, sahil ve çay bahçesi',
        ],
      },
      {
        heading: 'Fiyatlandırma',
        paragraphs: [
          'Şehir içi kısa yolculuklarda resmî taksimetre tarifesi geçerlidir; gündüz ve gece aynı tarifedir. Bagaj, poşet veya bebek arabası için ek ücret almıyoruz. Taksimetre açıktır, istediğiniz an bakabilirsiniz.',
          'Uzun mesafe ve havalimanı transferlerinde ise taksimetre yerine baştan konuşulan sabit fiyat uygularız — böylece ne ödeyeceğinizi bilerek yola çıkarsınız.',
        ],
      },
    ],
    faq: [
      {
        q: 'Ne kadar sürede geliyorsunuz?',
        a: 'İlçe merkezinde genellikle kısa sürede kapınızdayız. Yoğun saatlerde veya başka bir yolculukta isek bunu telefonda açıkça söyler, tahminî süreyi veririz; sizi boşuna bekletmeyiz.',
      },
      {
        q: 'Konumumu nasıl göndereyim?',
        a: 'WhatsApp’tan canlı konum göndermeniz en pratik yol. Adres tarif etmekle uğraşmadan sizi buluruz.',
      },
      {
        q: 'Gece de çalışıyor musunuz?',
        a: 'Evet, 7/24. Gece için ek ücret uygulamıyoruz.',
      },
      {
        q: 'Taksimetre açılmadan anlaşma yapabilir miyiz?',
        a: 'Şehir içinde taksimetre tarifesi uygulanır. Şehir dışı ve havalimanı yolculuklarında ise sabit fiyat anlaşması yapıyoruz.',
      },
    ],
  },

  {
    slug: 'paket-evrak-tasima',
    title: 'Paket ve Evrak Taşıma',
    navTitle: 'Paket Taşıma',
    h1: 'Ayancık Paket, Evrak ve Alışveriş Taşıma',
    short:
      'Yola çıkmanıza gerek yok. Evrakınızı, ilacınızı, alışverişinizi veya anahtarınızı biz götürelim.',
    metaTitle: 'Ayancık Paket ve Evrak Taşıma Taksi | Kurye Hizmeti',
    metaDescription:
      'Ayancık’ta taksiyle paket, evrak, ilaç ve alışveriş taşıma. Köye market getirme, Sinop’a evrak ulaştırma, anahtar teslimi. Aynı gün, 7/24.',
    icon: 'package',
    wa: 'cargo',
    highlights: [
      'Aynı gün teslim',
      'Köye market ve eczane alışverişi',
      'Sinop’a acil evrak ve numune',
      'Teslimde fotoğraflı bilgilendirme',
    ],
    body: [
      {
        heading: 'Küçük yerlerde büyük kolaylık',
        paragraphs: [
          'Bazı işler için insanın kendisinin gitmesi gerekmiyor. Köydeki annenizin ilacı, Sinop’taki muhasebeciye ulaşması gereken evrak, yaz evinin anahtarı, laboratuvara götürülecek numune, misafire yetişmesi gereken bir alışveriş… Bunları biz taşıyoruz.',
          'Kargo şirketlerinin bir günde yapamadığı şeyi aynı gün içinde yapıyoruz, çünkü yolu zaten biliyoruz ve köylerin kapısına kadar gidiyoruz.',
        ],
        list: [
          'Eczaneden ilaç alıp köye götürme',
          'Market ve pazar alışverişi (liste WhatsApp’tan, fişiyle teslim)',
          'Noter, muhasebeci, tapu evrakı',
          'Hastane ve laboratuvar numunesi',
          'Yazlık ev anahtarı ve misafir karşılama',
          'Küçük yedek parça, tamir edilen eşya',
        ],
      },
      {
        heading: 'Nasıl çalışıyor?',
        paragraphs: [
          'WhatsApp’tan nereden alınacağını, nereye gideceğini ve kime teslim edileceğini yazın. Fiyatı mesafeye göre söyleyelim. Teslim ettiğimizde size fotoğraf veya kısa bir mesajla haber veririz.',
          'Para gerektiren alışverişlerde tutarı önce biz öder, teslimde fişle birlikte tahsil ederiz. Güven esaslı çalışıyoruz; ilçede yıllardır aynı numarayla aynı işi yapıyoruz.',
        ],
      },
      {
        heading: 'Taşımadığımız şeyler',
        paragraphs: [
          'Yasa dışı, tehlikeli veya yanıcı maddeler, canlı hayvan ve içeriğini bilmediğimiz kapalı paketler taşımıyoruz. Yüksek değerli eşyalarda ise sorumluluk sınırlarını baştan konuşmamız gerekir.',
        ],
      },
    ],
    faq: [
      {
        q: 'Paket taşıma ücreti nasıl hesaplanıyor?',
        a: 'Gideceği mesafeye göre hesaplanır; kargo gibi kilo üzerinden değil. Nereden nereye olduğunu söyleyin, net fiyat verelim.',
      },
      {
        q: 'Alışverişin parasını siz mi ödüyorsunuz?',
        a: 'Evet, makul tutarlarda alışverişin bedelini önce biz öder, teslimde fişle birlikte tahsil ederiz.',
      },
      {
        q: 'Aynı gün içinde Sinop’a evrak ulaştırabilir misiniz?',
        a: 'Evet. Yolculuk programımız uygunsa aynı gün, değilse size en yakın saati söyleriz.',
      },
      {
        q: 'Teslim edildiğini nasıl anlayacağım?',
        a: 'Teslim anında WhatsApp’tan fotoğraf veya kısa bir mesajla haber veriyoruz.',
      },
    ],
  },
];

export const featuredServices = services.filter((s) => s.featured);
export const getService = (slug: string) => services.find((s) => s.slug === slug);
