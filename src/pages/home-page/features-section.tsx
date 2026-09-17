import { getTranslation } from "../../i18n";
import { useLanguageStore } from "../../stores/language.store";
import { getHomeFeatures } from "./home-page-data";
import styles from "./home-page.module.scss";
export default function FeaturesSection() {
  const language = useLanguageStore(
    (state) => state.language
  );

  const t = (key: string) =>
    getTranslation(language, key);

  const features = getHomeFeatures(t);
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.sectionHeading}>
          <p className={styles.eyebrow}>
            01 / FEATURES
          </p>

          <h2 className={styles.sectionTitle}>
            {t("home.featuresTitle")}
          </h2>
        </div>

        <div className={styles.featureGrid}>
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <article
                className={styles.featureCard}
                key={feature.title}
              >
                <div className={styles.featureIcon}>
                  <Icon size={20} />
                </div>

                <h3 className={styles.featureTitle}>
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
            );
          })}
        </div>
      </div>
    </section>
  )
}