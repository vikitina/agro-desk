import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { getBlogPosts } from "../../cms/builder.service";
import type { BlogPostData } from "../../cms/builder.types";
import { useLanguageStore } from "../../stores/language.store";
import type { Language } from "../../types/common";

import styles from "./blog-page.module.scss";

interface BlogPageCopy {
  eyebrow: string;
  title: string;
  description: string;
  featured: string;
  readArticle: string;
  loading: string;
  empty: string;
  metaTitle: string;
  metaDescription: string;
}

const pageCopy: Record<Language, BlogPageCopy> = {
  en: {
    eyebrow: "AgroDesk Journal",
    title: "Practical insights for modern agriculture teams",
    description:
      "Explore ideas for managing field data, coordinating teams and building clearer agricultural workflows.",
    featured: "Featured article",
    readArticle: "Read article",
    loading: "Loading articles…",
    empty: "No articles are available yet.",
    metaTitle: "Agriculture Insights | AgroDesk",
    metaDescription:
      "Practical articles about agricultural data, field planning and team collaboration.",
  },

  uk: {
    eyebrow: "Журнал AgroDesk",
    title: "Практичні матеріали для сучасних агрокоманд",
    description:
      "Дізнавайтеся більше про управління польовими даними, координацію команди та організацію зрозумілих робочих процесів.",
    featured: "Обрана стаття",
    readArticle: "Читати статтю",
    loading: "Завантажуємо статті…",
    empty: "Статей поки немає.",
    metaTitle: "Матеріали про агротехнології | AgroDesk",
    metaDescription:
      "Практичні статті про польові дані, планування робіт і взаємодію агрокоманд.",
  },
};

export default function BlogPage() {
  const language = useLanguageStore(
    (state) => state.language
  );

  const [posts, setPosts] = useState<
    BlogPostData[]
  >([]);

  const [isLoading, setIsLoading] =
    useState(true);

  const copy = pageCopy[language];

  useEffect(() => {
    let isActive = true;

    setIsLoading(true);
    setPosts([]);

    void getBlogPosts(language)
      .then((loadedPosts) => {
        if (isActive) {
          setPosts(loadedPosts);
        }
      })
      .catch((error) => {
        console.error(
          "Failed to load blog posts:",
          error
        );

        if (isActive) {
          setPosts([]);
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
  }, [language]);

  useEffect(() => {
    document.title = copy.metaTitle;

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

    metaDescription.content =
      copy.metaDescription;
  }, [copy]);

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

  return (
    <main className={styles.blogPage}>
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <p className={styles.eyebrow}>
              {copy.eyebrow}
            </p>

            <h1 className={styles.title}>
              {copy.title}
            </h1>

            <p className={styles.description}>
              {copy.description}
            </p>
          </div>
        </div>
      </section>

      <section className={styles.content}>
        <div className={styles.container}>
          {isLoading && (
            <p
              className={styles.status}
              role="status"
            >
              {copy.loading}
            </p>
          )}

          {!isLoading &&
            posts.length === 0 && (
              <p className={styles.status}>
                {copy.empty}
              </p>
            )}

          {!isLoading &&
            posts.length > 0 && (
              <div className={styles.grid}>
                {posts.map((post, index) => (
                  <article
                    className={`${styles.card} ${post.featured
                      ? styles.featuredCard
                      : ""
                      }`}
                    key={`${post.locale}-${post.slug}`}
                  >
                    <Link
                      className={styles.cardLink}
                      to={`/blog/${post.slug}`}
                    >
                      <div className={styles.cardVisual}>
                        <img
                          className={styles.cardImage}
                          src={post.coverImage.url}
                          alt={post.coverImage.alt}
                          loading={
                            post.featured ? "eager" : "lazy"
                          }
                        />

                        <span
                          className={styles.cardNumber}
                          aria-hidden="true"
                        >
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>

                      <div
                        className={
                          styles.cardContent
                        }
                      >
                        <div
                          className={
                            styles.cardMeta
                          }
                        >
                          <span
                            className={
                              styles.category
                            }
                          >
                            {post.category}
                          </span>

                          <time
                            dateTime={
                              post.publishedAt
                            }
                          >
                            {formatDate(
                              post.publishedAt
                            )}
                          </time>
                        </div>

                        {post.featured && (
                          <p
                            className={
                              styles.featuredLabel
                            }
                          >
                            {copy.featured}
                          </p>
                        )}

                        <h2
                          className={
                            styles.cardTitle
                          }
                        >
                          {post.title}
                        </h2>

                        <p
                          className={
                            styles.cardExcerpt
                          }
                        >
                          {post.excerpt}
                        </p>

                        <span
                          className={
                            styles.readMore
                          }
                        >
                          {copy.readArticle}
                          <span
                            aria-hidden="true"
                          >
                            →
                          </span>
                        </span>
                      </div>
                    </Link>
                  </article>
                ))}
              </div>
            )}
        </div>
      </section>
    </main>
  );
}
