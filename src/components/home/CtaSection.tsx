import Link from "@docusaurus/Link";
import styles from "./CtaSection.module.css";

interface CtaSectionProps {
  docsLink: string;
}

export default function CtaSection({ docsLink }: CtaSectionProps) {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.heading}>Ready to build?</h2>
        <p className={styles.subtitle}>
          Start integrating Klleon Chat SDK into your application today.
        </p>
        <Link to={docsLink} className={styles.ctaButton}>
          Get Started
        </Link>
      </div>
    </section>
  );
}
