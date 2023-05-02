
import { z, defineCollection } from 'astro:content';

const validTags = z.enum([""])

const defaultCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    author: z.enum(["John Doe", "Jane Doe"]),
    date: z.date(),
    tags: z.array(z.string()),
    draft: z.boolean(),
    image: z.string().optional(),
  }),
});

const pagesCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    draft: z.boolean()
  })
})

const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    tags: z.array(validTags).transform((arr) => new Set(arr)),
    image: z.string().url(),
    draft: z.boolean()
  })
})

// Projects
const projectsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    url: z.string().url(),
    actively_developed: z.boolean(),
    image: z.string().optional(),
    draft: z.boolean(),
  }),
});

// 3. Export a single `collections` object to register your collection(s)
export const collections = {
  'pages': pagesCollection,
  'blog': blogCollection,
  'projects': projectsCollection
};