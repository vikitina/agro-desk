import { getTranslation } from "../../i18n";
import { useLanguageStore } from "../../stores/language.store";
import { getHomeRoles } from "./home-page-data";
import styles from "./home-page.module.scss";
export default function RolesSection() {

  const language = useLanguageStore(
    (state) => state.language
  );
  const t = (key: string) => getTranslation(language, key);
  const roles = getHomeRoles(t);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.sectionHeading}>
          <p className={styles.eyebrow}>
            02 / ACCESS
          </p>

          <h2 className={styles.sectionTitle}>
            {t("home.rolesTitle")}
          </h2>

          <p
            className={
              styles.sectionDescription
            }
          >
            {t("home.rolesDescription")}
          </p>
        </div>

        <div className={styles.rolesGrid}>
          {roles.map((role, index) => (
            <article
              className={styles.roleCard}
              key={role.name}
            >
              <span
                className={styles.roleNumber}
              >
                {String(index + 1).padStart(2, "0")}
              </span>

              <h3 className={styles.roleTitle}>
                {role.name}
              </h3>

              <p
                className={
                  styles.roleDescription
                }
              >
                {role.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}