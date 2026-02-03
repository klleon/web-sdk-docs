import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import HeroSection from "../components/home/HeroSection";
import FeatureSection from "../components/home/FeatureSection";
import CtaSection from "../components/home/CtaSection";
import { getDocsLink } from "../utils/locale";

const Home = () => {
  const { i18n } = useDocusaurusContext();
  const docsLink = getDocsLink(i18n.currentLocale);

  return (
    <Layout>
      <main>
        <HeroSection docsLink={docsLink} />
        <FeatureSection />
        <CtaSection docsLink={docsLink} />
      </main>
    </Layout>
  );
};

export default Home;
