import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import Heading from '@theme/Heading';
import styles from './index.module.css';

import Button from '@site/src/components/Button';
import PhotoBoxAccueil from '@site/src/components/PhotoBoxAccueil';

// importer un script pour les photos
// import { changePhoto } from './utils.js';


function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header id={styles.homePageHeader}>
      <div id={styles.bdeTitle}>
        <h1 id={styles.bdeTitleText}>Bureau Des Etudiants</h1>
        <p id={styles.bdeTitleSubtext}>de l'INSA Hauts-de-France</p>
        <div className={styles.buttonBox}>
          <Button style="bordered" textContent="Futur étudiant ? Prépare ta rentrée!"
            to="/futur-etudiant"
          />
          <Button textContent="Découvre la vie étudiante!"
            to="/vie-etudiante"
          />

        </div>
      </div>
      <div id={styles.bdePhotoBox}>
        <PhotoBoxAccueil
          imagePath="img/insa/photos_accueil/pageaccueil-2.webp"
          titre="Vie étudiante"
          description="Le BDE est l'association qui anime la vie étudiante à l'INSA. Il organise de nombreux évènements tout au long de l'année comme des voyages, le WEI, le Gala..."
        />
        
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`BDE de l'INSA Hauts-de-France`}
      description="Le site pour les étudiants ingénieurs de l'INSA Hauts-de-France

      ">
      <HomepageHeader />
      <main>
      </main>
    </Layout>
  );
}
