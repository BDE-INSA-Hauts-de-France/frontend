import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header id={styles.homePageHeader}>
      <div id={styles.bdeTitle}>
        <h1 id={styles.bdeTitleText}>Bureau Des Etudiants</h1>
        <p id={styles.bdeTitleSubtext}>INSA Hauts-de-France</p>
        <div className={styles.buttonBox}>
        <Link
            className="button button--secondary button--rg"
            to="futur-etudiant">
            Futur étudiant?
            <br/>Prépare ta rentrée!
          </Link>
          <Link
            className="button button--secondary button--rg"
            to="vie-etudiante">
            Découvre la
            <br/>vie étudiante
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Guide de vie à l'INSA Hauts-de-France`}
      description="Le site pour les étudiants ingénieurs de l'INSA Hauts-de-France

      ">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
