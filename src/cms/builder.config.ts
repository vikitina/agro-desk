const apiKey =
  import.meta.env.VITE_BUILDER_API_KEY?.trim() ??
  "";

export const builderConfig = {
  apiKey,
  isConfigured: Boolean(apiKey),

  models: {
    landingPage: "landing-page",
    blogPost: "blog-post",
  },
} as const;