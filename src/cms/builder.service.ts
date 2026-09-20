import {
  fetchEntries,
  type BuilderContent,
} from "@builder.io/sdk-react";

import type { Language } from "../types/common";
import { builderConfig } from "./builder.config";
import {
  fallbackBlogPostsByLanguage,
  fallbackLandingPages,
} from "./fallback-content";
import type {
  BlogPostData,
  LandingPageData,
} from "./builder.types";

const extractData = <T>(
  entry: BuilderContent | null | undefined
): T | null => {
  if (!entry?.data) {
    return null;
  }

  return entry.data as T;
};

const sortPostsByDate = (
  posts: BlogPostData[]
): BlogPostData[] => {
  return [...posts].sort(
    (firstPost, secondPost) =>
      new Date(secondPost.publishedAt).getTime() -
      new Date(firstPost.publishedAt).getTime()
  );
};

export const getLandingPageContent =
  async (
    language: Language
  ): Promise<LandingPageData> => {
    const fallback =
      fallbackLandingPages[language];

    if (!builderConfig.isConfigured) {
      return fallback;
    }

    try {
      const entries = await fetchEntries({
        apiKey: builderConfig.apiKey,
        model:
          builderConfig.models.landingPage,
      });

      const entry = (entries ?? []).find(
        (item) => {
          const data = item.data as
            | Partial<LandingPageData>
            | undefined;

          return (
            data?.locale === language &&
            data.slug === "home"
          );
        }
      );

      return (
        extractData<LandingPageData>(
          entry
        ) ?? fallback
      );
    } catch (error) {
      console.error(
        "Failed to load the landing page from Builder:",
        error
      );

      return fallback;
    }
  };

export async function getBlogPosts(
  language: Language
): Promise<BlogPostData[]> {
  const fallbackPosts = sortPostsByDate(
    fallbackBlogPostsByLanguage[language]
  );

  if (!builderConfig.isConfigured) {
    return fallbackPosts;
  }

  try {
    const entries = await fetchEntries({
      model: builderConfig.models.blogPost,
      apiKey: builderConfig.apiKey,
    });

    const posts = entries
      .map((entry) => entry.data as BlogPostData)
      .filter((post) => post.locale === language);

    return posts.length > 0
      ? posts
      : fallbackPosts;
  } catch (error) {
    console.error(
      "Failed to load blog posts from Builder.io:",
      error
    );

    return fallbackPosts;
  }
};

export async function getBlogPostBySlug(
  slug: string,
  language: Language
): Promise<BlogPostData | null> {
  const posts = await getBlogPosts(language);

  return (
    posts.find((post) => post.slug === slug) ??
    null
  );
};