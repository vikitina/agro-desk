# AgroDesk

AgroDesk is a responsive agriculture-focused web application built with React and TypeScript.

The project demonstrates a headless CMS integration prepared for Builder.io, localized marketing and blog content, Supabase authentication, and role-based access control.

## Live Demo

Add the deployed Vercel URL here.

## Features

- Responsive agriculture landing page
- Localized content in English and Ukrainian
- Blog listing and individual article pages
- Builder.io SDK integration
- Typed local CMS fallback
- Dynamic SEO title and description
- Supabase authentication
- Role-based access control
- Protected application routes
- Light and dark themes
- Responsive and accessible UI

## Technology Stack

- React
- TypeScript
- Vite
- React Router
- Zustand
- SCSS Modules
- Builder.io SDK
- Supabase
- Vercel

## Headless CMS Architecture

The application contains a dedicated CMS integration layer:

```text
Builder.io Content API
        ↓
builder.service.ts
        ↓
Typed content models
        ↓
Localized React pages
```

If a Builder.io API key is not configured, the API is unavailable, or no matching content is returned, the application uses typed local fallback content.

This allows the deployed demo to remain stable while preserving the same data structure that would be received from Builder.io.

## Builder.io Integration

The integration uses:

- `@builder.io/sdk-react`
- `fetchEntries`
- Environment-based API configuration
- Locale-based entry filtering
- Automatic fallback handling
- Shared TypeScript interfaces for CMS and local content

Add the following variable to connect a Builder.io space:

```env
VITE_BUILDER_API_KEY=your_public_api_key
```

The public demo currently uses local fallback content because Builder Content model access is not available in the selected Builder.io workspace plan. The integration layer is implemented and ready to use with corresponding Builder.io models.

## Content Models

### `landing-page`

| Field | Type | Description |
|---|---|---|
| `locale` | String | Content locale: `en` or `uk` |
| `slug` | String | Stable page identifier |
| `seoTitle` | String | Browser and SEO title |
| `seoDescription` | String | Meta description |
| `eyebrow` | String | Introductory label |
| `title` | String | Main heading |
| `description` | String | Hero description |
| `primaryAction` | Object | Primary CTA label and URL |
| `secondaryAction` | Object | Secondary CTA label and URL |
| `heroImage` | Object | Image URL and alternative text |
| `visual` | Object | Supporting hero visual content |
| `features` | List | Landing-page capabilities |
| `metrics` | List | Product metrics |
| `demo` | Object | Demo CTA content |

### `blog-post`

| Field | Type | Description |
|---|---|---|
| `locale` | String | Content locale: `en` or `uk` |
| `translationKey` | String | Connects translated entries |
| `slug` | String | Stable article URL |
| `title` | String | Article title |
| `excerpt` | String | Card and SEO description |
| `category` | String | Article category |
| `author` | String | Author name |
| `publishedAt` | Date | Publication date |
| `coverImage` | Object | Image URL and alternative text |
| `sections` | List | Structured article sections |
| `featured` | Boolean | Featured article flag |

## Localization Strategy

English and Ukrainian content are stored as separate entries.

Translated versions share the same:

- `translationKey`
- `slug`
- publication date
- featured status
- cover image

The selected Zustand language determines which content entry is requested and rendered. Because translated articles use the same slug, switching languages does not change the current URL.

## Local Development

Install dependencies:

```bash
npm install
```

Create a local environment file:

```bash
cp .env.example .env.local
```

Start the development server:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```

## Demo Purpose

This project was created to demonstrate:

- React and TypeScript development
- Headless CMS architecture
- Builder.io integration patterns
- Precise responsive UI implementation
- Localization
- Existing-codebase adaptation
- Authentication and role-based permissions