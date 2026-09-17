import { Link } from "react-router-dom";
import styles from "./home-page.module.scss";
import Button from "../../components/ui/button";
import { useLanguageStore } from "../../stores/language.store";
import { getTranslation } from "../../i18n";
import { ArrowRight } from "lucide-react";
export default function HeroSection() {
  const language = useLanguageStore(
    (state) => state.language
  );

  const t = (key: string) =>
    getTranslation(language, key);
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.heroContent}>
          <p className={styles.eyebrow}>{t("home.eyebrow")} </p>

          <h1 className={styles.heroTitle}>
            {t("home.title")}
          </h1>

          <p className={styles.heroDescription}>
            {t("home.description")}
          </p>

          <div className={styles.heroActions}>
            <Link to="/login">
              <Button>
                {t("home.primaryAction")}
                <ArrowRight size={18} />
              </Button>
            </Link>

            <Link to="/register">
              <Button variant="secondary">
                {t("common.register")}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}