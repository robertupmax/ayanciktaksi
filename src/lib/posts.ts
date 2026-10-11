import { getCollection, type CollectionEntry } from 'astro:content';

export type Post = CollectionEntry<'blog'>;

/** Yayınlanmış yazılar, en yeniden eskiye */
export async function getPosts(): Promise<Post[]> {
  const all = await getCollection('blog', ({ data }) => !data.draft);
  return all.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export const fmtDate = (d: Date) =>
  d.toLocaleDateString('tr-TR', { year: 'numeric', month: 'long', day: 'numeric' });

export const isoDate = (d: Date) => d.toISOString().slice(0, 10);
