// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// math modules
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';


/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'INS\'Astuces HdF',
  tagline: 'Le site pour les étudiants ingénieurs de l\'INSA Hauts-de-France',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://astuces.insahdf.fr',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: './insa.sh', // Usually your GitHub org/user name.
  projectName: 'INS\'Astuces', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath:'/', // change the root url of the docs folder
          sidebarPath: './sidebars.js',
          remarkPlugins: [remarkMath], // ajout des modules pour le latex aux fichiers docs
          rehypePlugins: [rehypeKatex], // ajout des modules pour le latex aux fichiers docs

          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: false, // disable the blog -> to turn it back on, just delete this line and uncomment the next block
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        // },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/logos/logo2.svg',
      navbar: {
        title: 'INS\'Astuces HdF',
        logo: {
          alt: 'Logo du site INS\'Astuces',
          src: 'img/logos/logo2.svg',
        },
        items: [

          {
            type:"dropdown",
            sidebarId: 'newStudentSidebar',
            position: 'left',
            label: 'Futur étudiant',
            to: 'futur-etudiant',
            items: [
              {
                label: '🗺️ Plan du campus & Repères',
                to: 'futur-etudiant/plan-du-campus' // 'to' for an internal link, 'href' for an external link with an 'open in a new tab' icon
              },
              {
                label: '🏠 Logement',
                to: 'futur-etudiant/logement'
              },
              {
                label: '🚍 Transports',
                to: 'futur-etudiant/transports'
              },
              {
                label: '😎 Ton Futur camarade de promo',
                to: 'futur-etudiant/trouve-un-camarade'
              },
              {
                label: '📚 Starter Packs',
                to: 'futur-etudiant/starter-packs'
              },
              {
                label: '📝 Admissions',
                to: 'futur-etudiant/admissions'
              },
            ]

          },
          {
            type:"dropdown",
            sidebarId: 'vieEtudianteSidebar',
            position: 'left',
            label: 'Vie étudiante',
            to: '/vie-etudiante/',
            items: [
              {
                label: '🎏 Vie étudiante',
                to: 'vie-etudiante' // 'to' for an internal link, 'href' for an external link with an 'open in a new tab' icon
              },
              {
                label: '🔔 Le BDE',
                to: 'vie-etudiante/bde' // 'to' for an internal link, 'href' for an external link with an 'open in a new tab' icon
              },
              {
                label: '🌳 Assos et Clubs',
                to: 'vie-etudiante/assos-et-clubs'
              },
              {
                label: '🗓️ Les évènements',
                to: 'vie-etudiante/evenements'
              },
              {
                label: '🧠 Le Point Culture',
                to: 'vie-etudiante/le-point-culture'
              },


            ]

          },
          {
            type:"dropdown",
            sidebarId: 'informatiqueSidebar',
            position: 'left',
            label: 'Ressources et astuces',
            to: '/informatique/',
            items: [
              {
                label: '🧑‍💻 ENT et services informatiques',
                to: 'informatique/ent' // 'to' for an internal link, 'href' for an external link with an 'open in a new tab' icon
              },
              {
                label: '💰 Remises étudiantes',
                to: 'informatique/reductions-logiciels'
              },
            ]

          },

          // {
          //   type: 'docSidebar',
          //   sidebarId: 'tutorialSidebar',
          //   position: 'left',
          //   label: 'Tutorial',
          // },
          // {to: '/blog', label: 'Blog', position: 'left'},
          {
            to: 'https://insash.org',
            label: './insa.sh',
            position: 'right',
          },
          {
            to: 'https://bde-insa-hdf.fr',
            label: 'BDE',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Liens rapides',
            items: [
              {
                label: 'Futur étudiant',
                to: 'futur-etudiant',
              },
              {
                label: 'Vie étudiante',
                to: 'vie-etudiante',
              },
              {
                label: 'Ressources informatiques',
                to: 'informatique',
              },
              {
                label: 'Administratif',
                to: 'administratif/administration',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: 'A propos de ce site',
            items: [
              {
                label: 'CLUB INFO - ./insa.sh',
                href: 'https://insash.org',
              },
              {
                label: 'BDE INSA HdF',
                href: 'https://sites.google.com/view/bde-insahdf',
              },
              
              {
                label: 'GitHub',
                href: 'https://github.com/billyTheSecond/INSAstuces',
              },
              {
                label: 'Suggérer une modification',
                href: 'https://github.com/billyTheSecond/INSAstuces/issues/new',
              },

              {
                label: 'A propos de ce site',
                to: '/',
              },
              {
                label: 'Plan du site',
                to: '/plan-du-site',
              }
            ],
          },
          {
            title: 'L\'école',
            items: [
              {
                label: 'INSA Hauts-de-France',
                href: 'https://www.insa-hautsdefrance.fr/',
              },
              {
                label: 'INS\'Alumnis HdF',
                href: 'http://insalumni.insash.org',
              },
              {
                label: 'Groupe INSA',
                href: 'https://www.groupe-insa.fr/',
              },
              {
                label: 'Fondation INSA',
                href: 'https://fondation.groupe-insa.fr/',
              },
            ],
          },
        ],
        copyright: `Développé et maintenu avec amour par <b><a href='https://insash.org'>./insa.sh</a></b> – INS'Astuces Hauts-de-France © ${new Date().getFullYear()} ` ,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },


    }),
    stylesheets: [
      // feuilles de styles pour latex -> supprime le doublon en version texte des equations latex (katex)
      {
        href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
        type: 'text/css',
        integrity:
          'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
        crossorigin: 'anonymous',
      },
    ],
};

export default config;
