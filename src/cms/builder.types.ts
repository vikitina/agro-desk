import type { Language } from "../types/common";

export interface CmsLink {
  label: string;
  href: string;
}

export interface CmsImage {
  url: string;
  alt: string;
}

export interface LandingFeature {
  title: string;
  description: string;
}

export interface LandingMetric {
  value: string;
  label: string;
}

export interface LandingVisualContent {
  eyebrow: string;
  titleLines: string[];
  tags: string[];
}

export interface LandingDemoContent {
  eyebrow: string;
  title: string;
  description: string;
  action: CmsLink;
}

export interface LandingPageData {
  locale: Language;
  slug: string;

  seoTitle: string;
  seoDescription: string;

  eyebrow: string;
  title: string;
  description: string;

  primaryAction: CmsLink;
  secondaryAction: CmsLink;

  heroImage: CmsImage;
  visual: LandingVisualContent;

  capabilitiesLabel: string;
  featuresTitle: string;
  features: LandingFeature[];

  metrics: LandingMetric[];

  demo: LandingDemoContent;
}

export interface BlogPostSection {
  title?: string;
  paragraphs: string[];
}

export interface BlogPostData {
  locale: Language;
  translationKey: string;

  slug: string;
  title: string;
  excerpt: string;

  category: string;
  author: string;
  publishedAt: string;

  coverImage: CmsImage;
  sections: BlogPostSection[];

  featured: boolean;
}