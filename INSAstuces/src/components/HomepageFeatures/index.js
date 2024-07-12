import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Facile à utiliser',
    Svg: require('@site/static/img/logos/logo2.svg').default,
    description: (
      <>
        Faciliter la vie et l'intégration des nouveaux étudiants de l'INSA HdF
      </>
    ),
  },
  {
    title: 'Maintenu par le Club Info',
    Svg: require('@site/static/img/assos/logo-insash-2.svg').default,
    description: (
      <>
        Maintenu et développé par ./insa.sh
      </>
    ),
  },
  {
    title: 'Collaboration inter-associations',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Chaque page de ce site a été rédigée par une association spécialisée dans ce domaine. Vous avez donc du contenu travaillé !
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
