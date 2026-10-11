import { defineCollection } from 'astro:content';
import { z } from 'astro:schema';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    metaTitle: z.string().optional(),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    tag: z.string(),
    /** Öne çıkan sorular — yazı sonunda SSS olarak ve FAQPage şemasında kullanılır */
    faq: z.array(z.object({ q: z.string(), a: z.string() })).default([]),
    /** İlgili hizmet/güzergah slug'ları — iç bağlantı için */
    related: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
