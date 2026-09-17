import { ArrowRight, LogIn, UserCog } from "lucide-react";
import { getTranslation } from "../../i18n";
import { useLanguageStore } from "../../stores/language.store";
import { getDemoSteps, getManagementSteps } from "./home-page-data";
import styles from "./home-page.module.scss";
import { Link } from "react-router-dom";
import Button from "../../components/ui/button";
export default function TrySection() {
  const language = useLanguageStore(
    (state) => state.language
  );

  const t = (key: string) => getTranslation(language, key);
  const demoSteps = getDemoSteps(t);
  const managementSteps = getManagementSteps(t);
  return (

    <section className={styles.demo}>
      <div className={styles.container}>
        <div className={styles.sectionHeading}>
          <p className={styles.eyebrow}>
            03 / TRY THE APP
          </p>

          <h2 className={styles.sectionTitle}>
            {t("home.demo.title")}
          </h2>

          <p
            className={
              styles.sectionDescription
            }
          >
            {t("home.demo.description")}
          </p>
        </div>

        <div className={styles.demoGrid}>
          {/* QUICK DEMO */}
          <article className={styles.demoCard}>
            <div className={styles.demoCardHeader}>
              <div className={styles.demoCardIcon}>
                <LogIn size={22} />
              </div>

              <div>
                <p className={styles.demoCardLabel}>
                  {t("home.demo.quick.label")}
                </p>

                <h3 className={styles.demoCardTitle}>
                  {t("home.demo.quick.title")}
                </h3>
              </div>
            </div>

            <p
              className={
                styles.demoCardDescription
              }
            >
              {t(
                "home.demo.quick.description"
              )}
            </p>

            <div className={styles.demoSteps}>
              {demoSteps.map(
                (step, index) => {
                  const Icon = step.icon;

                  return (
                    <div
                      className={
                        styles.demoStep
                      }
                      key={step.title}
                    >
                      <span
                        className={
                          styles.demoStepNumber
                        }
                      >
                        {String(
                          index + 1
                        ).padStart(2, "0")}
                      </span>

                      <div
                        className={
                          styles.demoStepIcon
                        }
                      >
                        <Icon size={18} />
                      </div>

                      <div>
                        <h4
                          className={
                            styles.demoStepTitle
                          }
                        >
                          {step.title}
                        </h4>

                        <p
                          className={
                            styles.demoStepDescription
                          }
                        >
                          {
                            step.description
                          }
                        </p>
                      </div>
                    </div>
                  );
                }
              )}
            </div>

            <Link to="/login">
              <Button>
                {t(
                  "home.demo.quick.action"
                )}
                <ArrowRight size={18} />
              </Button>
            </Link>
          </article>

          {/* ROLE MANAGEMENT */}
          <article className={styles.demoCard}>
            <div className={styles.demoCardHeader}>
              <div className={styles.demoCardIcon}>
                <UserCog size={22} />
              </div>

              <div>
                <p className={styles.demoCardLabel}>
                  {t(
                    "home.demo.management.label"
                  )}
                </p>

                <h3 className={styles.demoCardTitle}>
                  {t(
                    "home.demo.management.title"
                  )}
                </h3>
              </div>
            </div>

            <p
              className={
                styles.demoCardDescription
              }
            >
              {t(
                "home.demo.management.description"
              )}
            </p>

            <div className={styles.demoSteps}>
              {managementSteps.map(
                (step, index) => {
                  const Icon = step.icon;

                  return (
                    <div
                      className={
                        styles.demoStep
                      }
                      key={step.title}
                    >
                      <span
                        className={
                          styles.demoStepNumber
                        }
                      >
                        {String(
                          index + 1
                        ).padStart(2, "0")}
                      </span>

                      <div
                        className={
                          styles.demoStepIcon
                        }
                      >
                        <Icon size={18} />
                      </div>

                      <div>
                        <h4
                          className={
                            styles.demoStepTitle
                          }
                        >
                          {step.title}
                        </h4>

                        <p
                          className={
                            styles.demoStepDescription
                          }
                        >
                          {
                            step.description
                          }
                        </p>
                      </div>
                    </div>
                  );
                }
              )}
            </div>

            <Link to="/register">
              <Button variant="secondary">
                {t(
                  "home.demo.management.action"
                )}
                <ArrowRight size={18} />
              </Button>
            </Link>
          </article>
        </div>
      </div>
    </section>
  )
}