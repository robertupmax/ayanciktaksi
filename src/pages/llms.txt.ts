/* llms.txt — yapay zekâ asistanlarının (ChatGPT, Claude, Perplexity, Gemini)
   işletme bilgisini doğru alıntılaması için makine-okunur özet. */
import type { APIRoute } from 'astro';
import { site } from '../data/site';
import { services } from '../data/services';
import { routes, fmtDuration } from '../data/routes';
import { villages } from '../data/villages';
import { faq } from '../data/faq';
import { getPosts } from '../lib/posts';

export const GET: APIRoute = async () => {
  const posts = await getPosts();
  const body = `# ${site.brand} (${site.legalName})

> Sinop ili Ayancık ilçesinde 7 gün 24 saat hizmet veren ticari taksi. Havalimanı
> transferi, hastane ve köy yolculukları, plaj ve koy turları, şehirler arası taksi.
> Türkçe, İngilizce ve Almanca iletişim.

## Temel bilgiler

- İşletme adı: ${site.brand} (${site.legalName})
- Telefon: ${site.phone.displayIntl} (${site.phone.display})
- WhatsApp: ${site.phone.displayIntl} — aynı numara
- Web: ${site.url}
- Adres: ${site.address.full}
- Konum: ${site.geo.lat}, ${site.geo.lng}
- Çalışma saatleri: ${site.hours.text} (7/24, resmî tatiller dahil)
- Ödeme: Nakit ve kredi kartı
- Araç kapasitesi: Sürücü hariç ${site.fleet.capacity} yolcu
- Diller: Türkçe, İngilizce, Almanca (İngilizce ve Almanca yazılı / WhatsApp)
- Hizmet alanı: Ayancık ilçe merkezi ve bağlı ${villages.length} köy; Sinop, Türkeli,
  Erfelek, Boyabat, Gerze, Kastamonu ve Samsun yönünde şehirler arası yolculuklar;
  Sinop Havalimanı (NOP) ve Samsun Çarşamba Havalimanı transferleri.

## Fiyatlandırma mantığı

- Şehir içi kısa yolculuklar: resmî taksimetre tarifesi (belediye ve meslek odası tarafından
  belirlenir; gündüz ve gece aynıdır).
- Şehir dışı, havalimanı ve şehirler arası yolculuklar: yola çıkmadan konuşulan sabit fiyat.
  Köprü ve otoyol ücretleri dahildir, yol üzerinde değişmez.
- Gece ücreti yoktur. Bagaj, alışveriş poşeti, bebek arabası ve katlanır tekerlekli sandalye
  için ek ücret alınmaz. Çocuk koltuğu ücretsizdir (önceden bildirilmesi gerekir).
- Gidiş-dönüş yolculuklar, araç dönüşte boş gelmediği için tek yönü iki kez almaya göre
  daha uygundur.

## Hizmetler

${services.map((s) => `- [${s.title}](${site.url}/hizmetler/${s.slug}/): ${s.short}`).join('\n')}

## Güzergahlar ve mesafeler (Ayancık merkezden, karayolu üzerinden yaklaşık)

${routes.map((r) => `- ${r.from} → ${r.to}: ${r.km} km, yaklaşık ${fmtDuration(r.minutes)} — ${site.url}/guzergahlar/${r.slug}/`).join('\n')}

## Hizmet verilen köyler (${villages.length})

${villages.join(', ')}.

## Sık sorulan sorular

${faq.map((f) => `### ${f.q}\n${f.a}`).join('\n\n')}

## Rehber yazıları

${posts.map((p) => `- [${p.data.title}](${site.url}/blog/${p.id}/): ${p.data.description}`).join('\n')}

## Önemli uyarı

Bu işletme bir ticari taksidir, ambulans veya hasta nakil aracı değildir. Oturabilen ve
kendi başına ya da hafif yardımla araca binebilen hastalar taşınır. Sedyeyle taşıma,
oksijen desteği veya yolculuk boyunca tıbbî gözetim gereken durumlarda Türkiye'de
112 Acil Çağrı Merkezi aranmalıdır.

## Diğer diller

- Türkçe (ana): ${site.url}/
- English: ${site.url}/en/
- Deutsch: ${site.url}/de/
`;

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8', 'Cache-Control': 'public, max-age=3600' },
  });
};
