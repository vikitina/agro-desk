import {
  fetchEntries,
  type BuilderContent,
} from "@builder.io/sdk-react";

import type { Language } from "../types/common";
import { builderConfig } from "./builder.config";
import {
  fallbackBlogPosts,
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
  return [...posts].sort((first, second) =>
    second.publishedAt.localeCompare(
      first.publishedAt
    )
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

export const getBlogPosts =
  async (): Promise<BlogPostData[]> => {
    if (!builderConfig.isConfigured) {
      return sortPostsByDate(
        fallbackBlogPosts
      );
    }

    try {
      const entries = await fetchEntries({
        apiKey: builderConfig.apiKey,
        model: builderConfig.models.blogPost,
      });

      const posts = (entries ?? [])
        .map((entry) =>
          extractData<BlogPostData>(entry)
        )
        .filter(
          (
            post
          ): post is BlogPostData =>
            post !== null
        );

      if (posts.length === 0) {
        return sortPostsByDate(
          fallbackBlogPosts
        );
      }

      return sortPostsByDate(posts);
    } catch (error) {
      console.error(
        "Failed to load blog posts from Builder:",
        error
      );

      return sortPostsByDate(
        fallbackBlogPosts
      );
    }
  };

export const getBlogPostBySlug = async (
  slug: string
): Promise<BlogPostData | null> => {
  const posts = await getBlogPosts();

  return (
    posts.find(
      (post) => post.slug === slug
    ) ?? null
  );
};