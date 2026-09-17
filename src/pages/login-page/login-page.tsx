import { useState } from "react";
import type { FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";

import Button from "../../components/ui/button";
import { getTranslation } from "../../i18n";
import { loginUser } from "../../services/auth.service";
import { useLanguageStore } from "../../stores/language.store";

import {
  demoAccounts,
  demoPassword,
  type DemoRole,
} from "./login-page.data";

import styles from "./login-page.module.scss";

type TranslationParams = Record<
  string,
  string | number
>;

export default function LoginPage() {
  const language = useLanguageStore(
    (state) => state.language
  );

  const navigate = useNavigate();

  const t = (
  key: string,
  params?: TranslationParams
) => {
  const translation = getTranslation(
    language,
    key
  );

  if (!params) {
    return translation;
  }

  return Object.entries(params).reduce(
    (text, [name, parameterValue]) => {
      const value = String(parameterValue);

      return text
        .split(`{{${name}}}`)
        .join(value)
        .split(`{${name}}`)
        .join(value);
    },
    translation
  );
};

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(
    null
  );

  const [selectedDemoRole, setSelectedDemoRole] =
    useState<DemoRole | null>(null);

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();


    setError(null);
    setLoading(true);

    try {
      await loginUser({
        email,
        password,
      });

      navigate("/");
    } catch (error) {
      console.error("Login error:", error);

      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError(t("login.errors.failed"));
      }
    } finally {
      setLoading(false);
    }


  };

  const handleDemoSelect = (
    role: DemoRole,
    demoEmail: string
  ) => {
    setSelectedDemoRole(role);
    setEmail(demoEmail);
    setPassword(demoPassword);
    setError(null);
  };

  const getDemoRoleLabel = (
    role: DemoRole
  ) => {
    return t(`login.demo.roles.${role}`);
  };

  return (<section className={styles.authPage}> <div className={styles.authCard}> <p className={styles.eyebrow}>
    {t("login.eyebrow")} </p>


    <h1 className={styles.title}>
      {t("login.title")}
    </h1>

    <p className={styles.description}>
      {t("login.description")}
    </p>

    <form
      className={styles.form}
      onSubmit={handleSubmit}
    >
      <label className={styles.field}>
        <span className={styles.label}>
          {t("login.email")}
        </span>

        <input
          className={styles.input}
          type="email"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
            setSelectedDemoRole(null);
          }}
          placeholder="demo@example.com"
          required
        />
      </label>

      <label className={styles.field}>
        <span className={styles.label}>
          {t("login.password")}
        </span>

        <input
          className={styles.input}
          type="password"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
            setSelectedDemoRole(null);
          }}
          placeholder="••••••••"
          required
        />
      </label>

      {error && (
        <p
          className={styles.error}
          role="alert"
        >
          {error}
        </p>
      )}

      <Button
        type="submit"
        disabled={loading}
      >
        {loading
          ? t("login.signingIn")
          : selectedDemoRole
            ? t(
              "login.demo.signInAs",
              {
                role: getDemoRoleLabel(
                  selectedDemoRole
                ),
              }
            )
            : t("login.submit")}
      </Button>
    </form>

    <div className={styles.demo}>
      <div className={styles.demoDivider}>
        <span>
          {t("login.demo.divider")}
        </span>
      </div>

      <p className={styles.demoTitle}>
        {t("login.demo.title")}
      </p>

      <p className={styles.demoDescription}>
        {t("login.demo.description")}
      </p>

      <div className={styles.demoAccounts}>
        {demoAccounts.map((account) => {
          const isSelected =
            selectedDemoRole === account.role;

          return (
            <button
              className={`${styles.demoAccount} ${isSelected
                  ? styles.demoAccountSelected
                  : ""
                }`}
              type="button"
              key={account.role}
              onClick={() =>
                handleDemoSelect(
                  account.role,
                  account.email
                )
              }
              disabled={loading}
            >
              <span
                className={styles.demoRole}
              >
                {getDemoRoleLabel(
                  account.role
                )}
              </span>

              <span
                className={
                  styles.demoEmail
                }
              >
                {account.email}
              </span>
            </button>
          );
        })}
      </div>

      <p className={styles.demoHint}>
        {t("login.demo.passwordHint")}
      </p>
    </div>

    <p className={styles.footer}>
      {t("login.noAccount")}{" "}

      <Link
        className={styles.link}
        to="/register"
      >
        {t("login.createAccount")}
      </Link>
    </p>
  </div>
  </section>
  );
}
