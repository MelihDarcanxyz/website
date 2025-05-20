import { defineCollection, reference, z } from "astro:content";

import { file, glob } from "astro/loaders";

const zString = z.string().trim();

/**
 * Entries
 */

// first lowercase and remove duplicates with set, given an array of strings
// convert back to array of strings
// order by alphabetical order
function uniqueKeywordsInOrder(keywords: string[]): string[] {
    const uniqueKeywords = [...new Set(keywords.map((keyword) => keyword.toLowerCase()))];
    return uniqueKeywords.sort();
}

const entries = defineCollection({
    loader: glob({ base: "./src/content/entries", pattern: "**/*.{md,mdx}" }),
    schema: z.object({
        title: zString,
        description: zString.max(150).optional(),
        keywords: z.array(zString).default([]).transform(uniqueKeywordsInOrder),
        date: zString.or(z.date()).transform((val) => new Date(val)),

        draft: z.boolean().optional().default(false),
    })
});

/**
 * Expeditions
 */

const expeditions = defineCollection({
    loader: glob({ base: "./src/content/expeditions", pattern: "**/*.{md,mdx}" }),
    schema: ({ image }) => z.object({
        title: zString,
        description: zString.max(150).optional(),
        keywords: z.array(zString).default([]).transform(uniqueKeywordsInOrder),

        relatedEntries: z.array(reference('entries')).default([]),
    })
})


/**
 * Publications
 */
const author = z.object({
    name: zString,
    firstAuthor: z.boolean().optional().default(false),
    correspondingAuthor: z.boolean().optional().default(false),
})

const publications = defineCollection({
    loader: file("./src/data/publications.yaml"),
    schema: z.object({
        title: zString,
        url: zString.url(),
        date: zString.or(z.date()).transform((val) => new Date(val)),
        authors: author.array(),
    })
})

export interface Author extends z.infer<typeof author> { }

// Final export of all collections
export const collections = { entries, expeditions, publications };