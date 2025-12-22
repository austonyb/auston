# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is **Sylph**, a Next.js 16.1.0 portfolio and blog template built with React 19, TypeScript, and Tailwind CSS. It's designed as a minimal, performant platform for developers and creatives to showcase work and write MDX-based blog posts.

## Development Commands

**Package Manager:** This project uses `pnpm`. Do not use npm or yarn.

```bash
# Development
pnpm dev                    # Start Next.js dev server
pnpm build                  # Production build (runs lint + timestamp updates + build + sitemap)
pnpm start                  # Start production server

# Linting & Formatting
pnpm run lint               # Run all linting (stylelint + prettier)
pnpm run lint:style         # Run stylelint on CSS files with auto-fix
pnpm run lint:biome         # Run Biome linter/formatter
pnpm run lint:prettier      # Format all files with Prettier

# MDX Utilities
pnpm run mdx:timestamps     # Update post creation/updated timestamps in frontmatter
```

**Important:** The build process automatically runs linting and MDX timestamp updates before compilation. The `postbuild` hook generates the sitemap via next-sitemap.

## Architecture

### Next.js App Router Structure

```
app/
├── (posts)/              # Route group for post-related pages
│   ├── work/            # Work/portfolio section
│   │   ├── posts/       # MDX post files (*.mdx)
│   │   ├── page.tsx     # Posts listing page
│   │   └── [slug]/      # Dynamic post detail pages
│   └── layout.tsx       # Posts layout wrapper
├── api/og/              # OpenGraph image generation
├── resume/              # Resume page
├── layout.tsx           # Root layout (includes Providers, Analytics)
└── page.tsx             # Home page
```

### MDX Content System

Posts are stored as MDX files in `app/(posts)/work/posts/`. The content system:

1. **Post Loading:** `lib/mdx/index.ts` exports `getPosts(directory)` which:
   - Reads all `.mdx` files from `app/(posts)/{directory}/posts/`
   - Uses `gray-matter` to parse frontmatter
   - Returns array of Post objects with slug, content, and metadata

2. **Post Type:** Defined in `types/post/index.tsx` with extensive frontmatter support:
   - `title`, `slug`, `content`, `tags`, `summary`
   - `time.created` and `time.updated` (ISO timestamps)
   - `author`, `media`, `seo`, `social`, `related`, `audience`, `categorization`

3. **Timestamp Automation:** `scripts/update-mdx-timestamps.js`:
   - Automatically updates `time.created` and `time.updated` in frontmatter
   - Runs during build via `mdx:timestamps` script
   - Uses file system timestamps (birthtime for created, mtime for updated)
   - Optional `--override-created` flag to force update creation dates

4. **MDX Rendering:** `mdx-components.tsx` customizes MDX output:
   - Custom components: `<Preview>`, `<Image>`, `<Link>`
   - Enhanced tables, blockquotes, lists with Tailwind styling
   - Footnote support with custom forward/back reference components
   - rehype-pretty-code for syntax highlighting (GitHub light/dark themes)
   - remarkGfm for GitHub Flavored Markdown features

### Styling & Theme System

**Tailwind Configuration:**
- Uses Radix UI color scales (gray, pink, yellow, black-alpha, white-alpha) via CSS variables
- CSS variables defined in `styles/main.css` and switch based on `.dark` class
- Custom utilities: `.text-small` (12px) and `.text-default` (14px)
- Custom border radius: small/base/large via CSS variables
- Font families: Inter and SF Pro (Apple) via CSS variables

**Theme Variables:**
- Semantic tokens: `--bg`, `--fg`, `--muted`, `--hover`, `--border`
- Special tokens: `--scrollbar-thumb/track`, `--selection-background/foreground`, `--kbd-*`
- All colors use Radix scales (1-12 and a1-a12 for alpha variants)

**Theme Switching:**
- Managed by `next-themes` package
- Provider in `components/providers/index.tsx`
- Toggle UI in `components/theme/index.tsx`
- Dark mode: `class` strategy (adds `.dark` to html element)

### TypeScript Configuration

**Path Aliases:**
```typescript
"@/*" → project root
```
Examples:
- `@/components/link` → `/components/link`
- `@/lib/mdx` → `/lib/mdx`
- `@/types/post` → `/types/post`

**Settings:**
- Strict mode enabled
- Module resolution: bundler
- Target: ES2017 with React JSX

## Key Patterns & Conventions

### Route Groups
The `(posts)` directory is a route group that doesn't affect the URL structure. Posts are accessed at `/work/{slug}`, not `/(posts)/work/{slug}`.

### Dynamic Routes
Post detail pages use `[slug]/page.tsx` with dynamic params. The slug is derived from the MDX filename (without extension).

### OpenGraph Images
Dynamic OG image generation via `app/api/og/route.tsx`. This API route renders social media preview images on-demand.

### Component Organization
- `components/screens/` - Full page components (home, posts)
- `components/motion/` - Animation utilities using Framer Motion
- `components/providers/` - Context providers (theme + view transitions)
- `lib/` - Pure utility functions organized by purpose

### MDX Frontmatter Structure
When creating or editing posts, follow the Post type in `types/post/index.tsx`:

```yaml
---
title: "Post Title"
summary: "Brief description"
tags: ["tag1", "tag2"]
time:
  created: "2024-01-01T00:00:00.000Z"  # Auto-managed
  updated: "2024-01-02T00:00:00.000Z"  # Auto-managed
seo:
  title: "SEO Title"
  description: "SEO description"
  keywords: ["keyword1", "keyword2"]
---
```

### Prettier Import Ordering
Imports are automatically sorted via `@ianvs/prettier-plugin-sort-imports`:
1. Node built-ins and types
2. Type imports
3. Local modules (using path aliases)
4. External dependencies

### Custom Tailwind Classes
- Use `cn()` utility from `lib/cn` to merge Tailwind classes (combines clsx + tailwind-merge)
- Custom utilities available: `.text-small`, `.text-default`
- Color scales: `gray-1` through `gray-12`, `pink-1` through `pink-12`, etc.
- Alpha variants: `gray-a1` through `gray-a12`, etc.

## Build Output

The build process:
1. Runs stylelint and prettier (via `lint`)
2. Updates MDX timestamps (via `mdx:timestamps`)
3. Builds Next.js application
4. Generates sitemap (via `postbuild` with next-sitemap)

Build artifacts in `.next/` directory (gitignored).

## External References

- Original template: [Sylph by raphaelsalaja](https://github.com/raphaelsalaja/sylph)
- Deployed at: Vercel (uses `vercel.json` config)
- Analytics: Vercel Analytics integrated in root layout
- MCP: next-devtools server configured in `.mcp.json`
