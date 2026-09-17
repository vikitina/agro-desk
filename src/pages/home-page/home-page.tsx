import styles from "./home-page.module.scss";
import HeroSection from "./hero-section";
import FeaturesSection from "./features-section";
import RolesSection from "./roles-section";
import TrySection from "./try-section";
import CtaSection from "./cta-section";

export default function HomePage() {

  return (
    <div className={styles.home}>
      <HeroSection />
      <FeaturesSection />
      <RolesSection />
      <TrySection />
      <CtaSection />
    </div>
  );
}
