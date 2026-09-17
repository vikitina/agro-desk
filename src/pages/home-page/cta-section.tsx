import { Link } from "react-router-dom";
import { getTranslation } from "../../i18n";
import { useLanguageStore } from "../../stores/language.store";
import styles from "./home-page.module.scss";
import Button from "../../components/ui/button";
import { ArrowRight } from "lucide-react";

export default function CtaSection() {
  const language = useLanguageStore(
    (state) => state.language
  );

  const t = (key: string) => getTranslation(language, key);
  return (
    <section className={styles.cta}>
      <div className={styles.container}>
        <div className={styles.ctaInner}>
          <div>
            <p className={styles.eyebrow}>
              04 / GET STARTED
            </p>

            <h2 className={styles.ctaTitle}>
              {t("home.invitationTitle")}
            </h2>

            <p className={styles.ctaDescription}>
              {t(
                "home.invitationDescription"
              )}
            </p>
          </div>

          <Link to="/login">
            <Button>
              {t("common.login")}
              <ArrowRight size={18} />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}