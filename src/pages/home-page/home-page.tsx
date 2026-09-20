import {
  useEffect,
  useState,
} from "react";
import { Link } from "react-router-dom";

import { getLandingPageContent } from "../../cms/builder.service";
import type { LandingPageData } from "../../cms/builder.types";

import styles from "./home-page.module.scss";
import { useLanguageStore } from "../../stores/language.store";

export default function HomePage() {
  const [content, setContent] =
    useState<LandingPageData | null>(null);
  const language = useLanguageStore(
    (state) => state.language
  );

  useEffect(() => {
    let isMounted = true;


    const loadContent = async () => {
      const nextContent =
        await getLandingPageContent(language);

      setContent(null);

      if (isMounted) {
        setContent(nextContent);
      }
    };

    void loadContent();

    return () => {
      isMounted = false;
    };
  }, [language]);

  useEffect(() => {
    if (!content) {
      return;
    }

    document.title = content.seoTitle;

    let description =
      document.querySelector<HTMLMetaElement>(
        'meta[name="description"]'
      );

    if (!description) {
      description =
        document.createElement("meta");

      description.name = "description";
      document.head.append(description);
    }

    description.content =
      content.seoDescription;
  }, [content]);

  if (!content) {
    return (
      <div
        className={styles.loading}
        role="status"
      >
        <span
          className={styles.loadingIndicator}
          aria-hidden="true"
        />

        Loading AgroDesk content...
      </div>
    );
  }

  return (
    <div className={styles.home}>
      <section className={styles.hero}>
        <div
          className={`${styles.container} ${styles.heroGrid}`}
        >
          <div className={styles.heroContent}>
            <p className={styles.eyebrow}>
              {content.eyebrow}
            </p>

            <h1 className={styles.heroTitle}>
              {content.title}
            </h1>

            <p
              className={
                styles.heroDescription
              }
            >
              {content.description}
            </p>

            <div className={styles.heroActions}>
              <Link
                className={
                  styles.primaryAction
                }
                to={
                  content.primaryAction.href
                }
              >
                {
                  content.primaryAction
                    .label
                }
              </Link>

              <Link
                className={
                  styles.secondaryAction
                }
                to={
                  content.secondaryAction.href
                }
              >
                {
                  content.secondaryAction
                    .label
                }
              </Link>
            </div>
          </div>

          <div
            className={styles.heroVisual}
            role="img"
            aria-label={
              content.heroImage.alt
            }
          >
            <div
              className={styles.visualContent}
            >
              <span className={styles.visualEyebrow}>
                {content.visual.eyebrow}
              </span>

              <strong className={styles.visualTitle}>
                {content.visual.titleLines.map(
                  (line) => (
                    <span key={line}>{line}</span>
                  )
                )}
              </strong>

              <div className={styles.visualTags}>
                {content.visual.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.features}>
        <div className={styles.container}>
          <div
            className={styles.sectionHeading}
          >
            <p className={styles.sectionLabel}>
              {content.capabilitiesLabel}
            </p>

            <h2 className={styles.sectionTitle}>
              {content.featuresTitle}
            </h2>
          </div>

          <div className={styles.featureGrid}>
            {content.features.map(
              (feature, index) => (
                <article
                  className={
                    styles.featureCard
                  }
                  key={feature.title}
                >
                  <span
                    className={
                      styles.featureNumber
                    }
                  >
                    {String(index + 1).padStart(
                      2,
                      "0"
                    )}
                  </span>

                  <h3
                    className={
                      styles.featureTitle
                    }
                  >
                    {feature.title}
                  </h3>

                  <p
                    className={
                      styles.featureDescription
                    }
                  >
                    {feature.description}
                  </p>
                </article>
              )
            )}
          </div>
        </div>
      </section>

      <section className={styles.metrics}>
        <div
          className={`${styles.container} ${styles.metricsGrid}`}
        >
          {content.metrics.map((metric) => (
            <div
              className={styles.metric}
              key={metric.label}
            >
              <strong
                className={styles.metricValue}
              >
                {metric.value}
              </strong>

              <span
                className={styles.metricLabel}
              >
                {metric.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.cta}>
        <div
          className={`${styles.container} ${styles.ctaInner}`}
        >
          <div>
            <p className={styles.sectionLabel}>
              {content.demo.eyebrow}
            </p>

            <h2 className={styles.ctaTitle}>
              {content.demo.title}
            </h2>

            <p className={styles.ctaDescription}>
              {content.demo.description}
            </p>
          </div>

          <Link
            className={styles.primaryAction}
            to={content.demo.action.href}
          >
            {content.demo.action.label}
          </Link>
        </div>
      </section>
    </div>
  );
}