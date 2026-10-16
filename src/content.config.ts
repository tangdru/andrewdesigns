import { defineCollection } from 'astro:content';
import { glob, file } from 'astro/loaders';
import { z } from 'astro/zod';

const link = z.object({ label: z.string(), url: z.string() });
// Text column on the page grid (see .page-grid in global.css), e.g. "5/21".
const grid = z.object({ text: z.string(), mtext: z.string() }).optional();

const projects = defineCollection({
  loader: glob({ pattern: '[^_]*.md', base: './content/projects' }),
  schema: z.object({
    title: z.string(),
    eyebrow: z.string(),
    summary: z.string(),
    category: z.enum(['ux', 'dataviz', 'build', 'visual']),
    tags: z.array(z.string()).default([]),
    org: z.string().optional(),
    year: z.number().optional(),
    order: z.number().default(99),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
    description: z.string(),
    thumbnail: z.string(),
    cover: z.string().optional(),
    cover_video: z.string().optional(),
    cover_video_label: z.string().optional(),
    links: z.array(link).default([]),
    grid,
  }),
});

const pages = defineCollection({
  loader: glob({ pattern: '*.md', base: './content/pages' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    intro: z.string().optional(),
    cover: z.string().optional(),
    photo: z.string().optional(),
    photo_alt: z.string().optional(),
    grid,
  }),
});

const resume = defineCollection({
  loader: glob({ pattern: 'resume.md', base: './content' }),
  schema: z.object({
    name: z.string(),
    headline: z.string(),
    email: z.string(),
    linkedin: z.string(),
    location: z.string().optional(),
  }),
});

const publications = defineCollection({
  loader: file('./content/publications.json', {
    parser: (text) => JSON.parse(text).map((p: any, i: number) => ({ id: String(i), ...p })),
  }),
  schema: z.object({
    title: z.string(),
    venue: z.string(),
    year: z.number().nullable(),
    url: z.string().nullable(),
    abstract: z.string(),
    project: z.string().optional(),
  }),
});

export const collections = { projects, pages, resume, publications };
