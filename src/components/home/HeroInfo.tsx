import Link from "@docusaurus/Link";
import styles from "./HeroInfo.module.css";

interface HeroInfoProps {
  docsLink: string;
}

export default function HeroInfo({ docsLink }: HeroInfoProps) {
  return (
    <div className={styles.container}>
      <span className={styles.badge}>Klleon Chat SDK</span>
      <h1 className={styles.heading}>
        Create your digital human chat experience with our SDK.
      </h1>
      <p className={styles.subtitle}>
        Craft next-level chat experiences, from code to character.
      </p>
      <Link to={docsLink} className={styles.ctaButton}>
        Get Started
      </Link>
    </div>
  );
}
