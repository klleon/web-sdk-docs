import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import HeroInfo from "./HeroInfo";
import SdkDemo from "./SdkDemo";
import styles from "./HeroSection.module.css";

interface HeroSectionProps {
  docsLink: string;
}

export default function HeroSection({ docsLink }: HeroSectionProps) {
  const { i18n, siteConfig } = useDocusaurusContext();

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <HeroInfo docsLink={docsLink} />
        <SdkDemo
          sdkKey={siteConfig.customFields.sdkKey as string}
          avatarId={siteConfig.customFields.avatarId as string}
          locale={i18n.currentLocale}
        />
      </div>
    </section>
  );
}
