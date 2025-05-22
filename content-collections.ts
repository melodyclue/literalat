import { defineCollection, defineConfig } from '@content-collections/core';
import { compileMarkdown } from '@content-collections/markdown';

const posts = defineCollection({
  name: 'posts',
  directory: 'src/posts',
  include: '**/*.md',
  schema: (z) => ({
    title: z.string(),
    date: z.string(),
    summary: z.string().optional(),
    description: z.string().optional(),
    category: z.array(z.string()).optional(),
  }),
  transform: async (document, context) => {
    const html = await compileMarkdown(context, document);
    return {
      ...document,
      html,
    };
  },
});

export default defineConfig({
  collections: [posts],
});
