/* Gezilecek yerler — /gezilecek-yerler/ sayfasında listelenir */

export type Place = {
  name: string;
  slug: string;
  kmFromAyancik: number;
  category: 'Doğa' | 'Plaj' | 'Tarih' | 'Mağara' | 'Göl';
  summary: string;
  detail: string[];
  tips: string[];
};

export const places: Place[] = [
  {
    name: 'Akgöl',
    slug: 'akgol',
    kmFromAyancik: 30,
    category: 'Göl',
    summary:
      'Çangal Ormanları’nın içinde, ilçenin en bilinen doğal güzelliği. Sabah sisi ve göl yansımasıyla fotoğrafçıların favorisi.',
    detail: [
      'Akgöl, Ayancık’ın güneyindeki Çangal ormanlık alanı içinde yer alır. Vikipedi’nin de belirttiği gibi ilçenin en önemli güzelliklerinden biridir ve çevresi yoğun orman dokusuyla kaplıdır.',
      'Göle giden yol orman yoludur; mesafe kısa görünse de süre mesafeden uzun sürer. Yol boyunca çam, köknar, kayın ve gürgen ağaçlarının oluşturduğu kapalı bir orman tüneli boyunca gidilir.',
    ],
    tips: [
      'En güzel saatler sabah erken; göl üzerinde sis oluşuyor.',
      'Yağışlı havalarda orman yolu zorlaşır, yola çıkmadan bizi arayıp yol durumunu sorun.',
      'Çevrede işletme az; su ve yiyeceğinizi merkezden alın.',
    ],
  },
  {
    name: 'Çangal Ormanları',
    slug: 'cangal-ormanlari',
    kmFromAyancik: 35,
    category: 'Doğa',
    summary:
      'Biyolojik çeşitliliğiyle öne çıkan, Ayancık’ın kereste tarihine adını vermiş geniş orman alanı.',
    detail: [
      'Ayancık’ın güneyinde yer alan Çangal Ormanları, bölgenin biyolojik açıdan en zengin alanı olarak kabul edilir. İlçe genelinde yaklaşık 62 bin hektarlık ormanlık saha bulunur; çam, köknar, meşe, gürgen, kayın, dişbudak, ıhlamur, kestane ve kavak türleri birlikte görülür.',
      'Çangal adı, ilçenin sanayi tarihine de geçmiştir: 1926’da kurulan ve kuruluş yıllarında Avrupa’nın en büyük kereste fabrikalarından biri sayılan Zingal şirketinin adı, Zindan ve Çangal ormanlarının hecelerinden oluşur.',
    ],
    tips: [
      'Sonbaharda yaprak renkleri için en iyi dönem ekim–kasım.',
      'Orman içinde telefon çekmeyen noktalar var; dönüş saatini baştan belirleyin.',
      'Mantar ve kestane toplama mevsiminde yerel kurallara uyun.',
    ],
  },
  {
    name: 'İnaltı Mağarası',
    slug: 'inalti-magarasi',
    kmFromAyancik: 28,
    category: 'Mağara',
    summary:
      'Ayancık’ın İnaltı köyü yakınlarındaki, sarkıt ve dikitleriyle bilinen mağara. Akgöl turuyla aynı güne sığar.',
    detail: [
      'İnaltı Mağarası, adını aldığı İnaltı köyü çevresinde, Çangal orman alanı içinde yer alır. Mağaranın içi serin ve nemlidir; sarkıt, dikit ve travertenli yapılarıyla bilinir.',
      'Mağara, Akgöl ile aynı yön üzerinde olduğu için ikisini tek bir günübirlik turda birleştirmek mümkün. Biz genellikle sabah Akgöl, öğleden sonra mağara şeklinde planlıyoruz.',
    ],
    tips: [
      'İçi serin — yazın bile ince bir üst alın.',
      'Zemin ıslak ve kaygan olabilir, kaymaz tabanlı ayakkabı şart.',
      'Işık kaynağı (telefon feneri yeterli değil) ve gerekiyorsa rehber için önceden sorun.',
    ],
  },
  {
    name: 'Ayancık Sahili ve Kuğu Yalısı',
    slug: 'ayancik-sahili-kugu-yalisi',
    kmFromAyancik: 1,
    category: 'Plaj',
    summary:
      'İlçe merkezindeki sahil şeridi ve Kuğu Yalısı. Açık denize bakar, akşamüstü yürüyüşü için ideal.',
    detail: [
      'Ayancık, Ayancık Çayı’nın denize döküldüğü yerde, açık denize bakacak şekilde kurulmuş bir liman ilçesidir. Merkez sahili ve Kuğu Yalısı ilçenin günlük yaşamının merkezinde.',
      'Deniz suyu sıcaklığı haziran ve temmuz aylarında ortalama 23–24 °C civarında. Liman açık denize baktığı için fırtınalı günlerde dalga yükselebilir; rüzgârlı havada denize girmeden önce mutlaka yerel uyarıları dikkate alın.',
    ],
    tips: [
      'En çok esen rüzgâr güney; en kuvvetli rüzgârlar kuzey ve kuzeybatıdan geliyor.',
      'Yılda ortalama 9 fırtınalı gün var — dalgalı havada denize girmeyin.',
      'Akşamüstü sahil yürüyüşü ve balık restoranları için en güzel saatler.',
    ],
  },
  {
    name: 'Erfelek Tatlıca Şelaleleri',
    slug: 'erfelek-tatlica-selaleleri',
    kmFromAyancik: 50,
    category: 'Doğa',
    summary:
      'Ahşap patika boyunca uzanan onlarca şelale. Sinop’un en bilinen doğa durağı ve yazın en serin yeri.',
    detail: [
      'Erfelek ilçesindeki Tatlıca Şelaleleri, art arda sıralanmış çok sayıda şelaleden oluşur ve ahşap bir yürüyüş patikasıyla gezilir. Ayancık’tan yaklaşık 50 kilometre uzaklıkta.',
      'Yaz aylarında ilçe merkezinin nemli sıcağından kaçmak için en çok tercih edilen nokta. Patika boyunca su sesi eşliğinde yürüyüş yaklaşık yarım saat sürer.',
    ],
    tips: [
      'Taşlar sürekli ıslak; kaymaz tabanlı ayakkabı giyin.',
      'Hafta sonu kalabalık olur, sabah erken gidin.',
      'Girişte kafe ve yöresel ürün satışı var.',
    ],
  },
  {
    name: 'Hamsilos Koyu ve Akliman',
    slug: 'hamsilos-akliman',
    kmFromAyancik: 60,
    category: 'Plaj',
    summary:
      'Sinop’un fiyort benzeri ünlü koyu ve yanındaki geniş kumsal. Tabiat parkı içinde, çam ormanıyla çevrili.',
    detail: [
      'Hamsilos Koyu, Sinop şehir merkezinin kuzeybatısında, çam ormanıyla çevrili derin ve korunaklı bir koy. Yanındaki Akliman ise geniş kumsalıyla aile yolculukları için uygun.',
      'Ayancık’tan yaklaşık 60 kilometre; Sinop merkeze uğrayarak gidilir. Günübirlik turda sabah çıkıp akşam dönülebilir, isterseniz Sinop Kalesi ve tarihi cezaevi de aynı güne sığar.',
    ],
    tips: [
      'Koy korunaklı olduğu için dalgalı havalarda bile sakin kalabiliyor.',
      'Piknik alanları var; aracımız büyük bagajlıdır.',
      'Aynı güne Sinop Kalesi ve Tarihi Sinop Cezaevi de eklenebilir.',
    ],
  },
  {
    name: 'Sinop Kalesi ve Tarihi Cezaevi',
    slug: 'sinop-kalesi-tarihi-cezaevi',
    kmFromAyancik: 57,
    category: 'Tarih',
    summary:
      'Antik kale surları ve içindeki, uzun yıllar cezaevi olarak kullanılan tarihi yapı. Sinop gezisinin merkezi.',
    detail: [
      'Sinop Kalesi’nin surları şehir merkezinin içinden geçer. Kale içindeki tarihi cezaevi, uzun yıllar hizmet verdikten sonra müzeye dönüştürülmüş ve edebiyat tarihinde adı sıkça geçen bir yapı.',
      'Ayancık’tan yaklaşık 57 kilometre. Hastane veya resmî daire için Sinop’a giden yolcularımız, işleri bittikten sonra sıklıkla bir–iki saatlik bu gezi için duruyor.',
    ],
    tips: [
      'Kale ve cezaevi şehir merkezinde, yan yana; yürüyerek gezilir.',
      'Sinop’a gelmişken Arkeoloji Müzesi de yakın.',
      'Hastane yolculuğunuza ek olarak planlayalım, ekstra yol gerekmiyor.',
    ],
  },
  {
    name: 'Ayancık Kilisesi',
    slug: 'ayancik-kilisesi',
    kmFromAyancik: 1,
    category: 'Tarih',
    summary:
      'İlçe merkezindeki tarihi yapı. Ayancık’ın Osmanlı öncesi ve Cumhuriyet dönemi geçmişine dair en görünür iz.',
    detail: [
      'Ayancık Kilisesi, ilçedeki tarihi bir merkez olarak öne çıkar. İlçenin eski adı İstefan’dır ve bugünkü Çaylıoğlu köyü bu eski yerleşimin yerini tutar.',
      'Ayancık ve çevresinin tarihi ilk çağlara, Paflagonyalılar dönemine kadar uzanır; bölge sırasıyla Danişmentoğulları, Anadolu Selçukluları, Pervaneoğulları ve Candaroğulları egemenliğinde kalmış, 1460’ta Osmanlı topraklarına katılmıştır.',
    ],
    tips: [
      'Merkezde, yürüme mesafesinde.',
      'Aynı gezide Zingal kereste fabrikası ve Dekovil hattının tarihi kalıntıları anlatılabilir.',
      'Fotoğraf için öğleden sonra ışığı daha uygun.',
    ],
  },
];

export const getPlace = (slug: string) => places.find((p) => p.slug === slug);
