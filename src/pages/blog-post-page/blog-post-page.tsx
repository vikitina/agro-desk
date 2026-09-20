import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { getBlogPostBySlug } from "../../cms/builder.service";
import type { BlogPostData } from "../../cms/builder.types";
import { useLanguageStore } from "../../stores/language.store";
import type { Language } from "../../types/common";

import styles from "./blog-post-page.module.scss";

interface BlogPostPageCopy {
  backToBlog: string;
  writtenBy: string;
  loading: string;
  notFoundTitle: string;
  notFoundDescription: string;
  viewAllArticles: string;
}

const pageCopy: Record<
  Language,
  BlogPostPageCopy
> = {
  en: {
    backToBlog: "Back to all articles",
    writtenBy: "Written by",
    loading: "Loading article…",
    notFoundTitle: "Article not found",
    notFoundDescription:
      "The article may have been removed or is not available in the selected language.",
    viewAllArticles: "View all articles",
  },

  uk: {
    backToBlog: "До всіх статей",
    writtenBy: "Автор",
    loading: "Завантажуємо статтю…",
    notFoundTitle: "Статтю не знайдено",
    notFoundDescription:
      "Можливо, статтю було видалено або вона недоступна вибраною мовою.",
    viewAllArticles: "Переглянути всі статті",
  },
};

export default function BlogPostPage() {
  const { slug } = useParams<{
    slug: string;
  }>();

  const language = useLanguageStore(
    (state) => state.language
  );

  const [post, setPost] =
    useState<BlogPostData | null>(null);

  const [isLoading, setIsLoading] =
    useState(true);

  const copy = pageCopy[language];

  useEffect(() => {
    let isActive = true;

    if (!slug) {
      setPost(null);
      setIsLoading(false);

      return () => {
        isActive = false;
      };
    }

    setIsLoading(true);
    setPost(null);

    void getBlogPostBySlug(slug, language)
      .then((loadedPost) => {
        if (isActive) {
          setPost(loadedPost);
        }
      })
      .catch((error) => {
        console.error(
          "Failed to load blog post:",
          error
        );

        if (isActive) {
          setPost(null);
        }
      })
      .finally(() => {
        if (isActive) {
          setIsLoading(false);
        }
      });

    return () => {
      isActive = false;
    };
  }, [language, slug]);

  useEffect(() => {
    const title = post
      ? `${post.title} | AgroDesk`
      : copy.notFoundTitle;

    const description = post
      ? post.excerpt
      : copy.notFoundDescription;

    document.title = title;

    let metaDescription =
      document.querySelector<HTMLMetaElement>(
        'meta[name="description"]'
      );

    if (!metaDescription) {
      metaDescription =
        document.createElement("meta");

      metaDescription.name = "description";
      document.head.append(metaDescription);
    }

    metaDescription.content = description;
  }, [copy, post]);

  const formatDate = (
    publishedAt: string
  ): string => {
    const locale =
      language === "uk" ? "uk-UA" : "en-US";

    return new Intl.DateTimeFormat(locale, {
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(new Date(publishedAt));
  };

  if (isLoading) {
    return (
      <main className={styles.statusPage}>
        <div className={styles.container}>
          <p role="status">
            {copy.loading}
          </p>
        </div>
      </main>
    );
  }

  if (!post) {
    return (
      <main className={styles.statusPage}>
        <div className={styles.container}>
          <div className={styles.notFound}>
            <p className={styles.notFoundCode}>
              404
            </p>

            <h1 className={styles.notFoundTitle}>
              {copy.notFoundTitle}
            </h1>

            <p
              className={
                styles.notFoundDescription
              }
            >
              {copy.notFoundDescription}
            </p>

            <Link
              className={styles.backButton}
              to="/blog"
            >
              {copy.viewAllArticles}
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className={styles.articlePage}>
      <header className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <Link
              className={styles.backLink}
              to="/blog"
            >
              <span aria-hidden="true">←</span>
              {copy.backToBlog}
            </Link>

            <div className={styles.meta}>
              <span className={styles.category}>
                {post.category}
              </span>

              <time dateTime={post.publishedAt}>
                {formatDate(post.publishedAt)}
              </time>
            </div>

            <h1 className={styles.title}>
              {post.title}
            </h1>

            <p className={styles.excerpt}>
              {post.excerpt}
            </p>

            <p className={styles.author}>
              {copy.writtenBy}{" "}
              <strong>{post.author}</strong>
            </p>
          </div>
          <div className={styles.cover}>
            <img
              className={styles.coverImage}
              src={post.coverImage.url}
              alt={post.coverImage.alt}
            />
          </div>
        </div>
      </header>

      <div className={styles.articleBody}>
        <div className={styles.container}>
          <article
            className={styles.articleContent}
          >
            {post.sections.map(
              (section, sectionIndex) => (
                <section
                  className={
                    styles.articleSection
                  }
                  key={`${section.title ?? "intro"}-${sectionIndex}`}
                >
                  {section.title && (
                    <h2
                      className={
                        styles.sectionTitle
                      }
                    >
                      {section.title}
                    </h2>
                  )}

                  {section.paragraphs.map(
                    (
                      paragraph,
                      paragraphIndex
                    ) => (
                      <p
                        className={
                          styles.paragraph
                        }
                        key={paragraphIndex}
                      >
                        {paragraph}
                      </p>
                    )
                  )}
                </section>
              )
            )}

            <footer
              className={styles.articleFooter}
            >
              <Link
                className={styles.backLink}
                to="/blog"
              >
                <span aria-hidden="true">
                  ←
                </span>

                {copy.backToBlog}
              </Link>
            </footer>
          </article>
        </div>
      </div>
    </main>
  );
}