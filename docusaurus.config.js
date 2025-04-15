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
  title: 'BDE INSA HdF',
  tagline: 'Le site pour les étudiants ingénieurs de l\'INSA Hauts-de-France',
  favicon: 'img/favicon.svg',

  // Set the production url of your site here
  url: 'https://bde.insahdf.fr',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  // organizationName: '', // Usually your GitHub org/user name.
  // projectName: '', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr','en'],
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
          customCss: ['./src/css/custom.css',
            './src/css/components/contactCard.css',
            './src/css/components/fileDownloadBox.css',
            './src/css/components/boutonReseauHeader.css',
          ],

        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/favicon.svg',
      navbar: {
        title: 'BDE INSA HdF',
        logo: {
          alt: 'Logo du site du BDE de l\'INSA HdF',
          src: 'img/favicon.svg',
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
          {
            type:"dropdown",
            sidebarId: 'vieEtudianteSidebar',
            position: 'left',
            label: 'International',
            to: '/international',
            items: [
              {
                label: '🌐 La Section Internationale',
                to: 'international/section-internationale' // 'to' for an internal link, 'href' for an external link with an 'open in a new tab' icon
              },
              {
                label: '💱 Stages à l\'international',
                to: 'international/stages-a-l-international' // 'to' for an internal link, 'href' for an external link with an 'open in a new tab' icon
              },
              {
                label: '🧳 Césure & ERASMUS',
                to: 'international/cesure-erasmus-eunice' // 'to' for an internal link, 'href' for an external link with an 'open in a new tab' icon
              },
              {
                label: '🗺️ Réseau de l\'INSA HdF et ses alumni',
                to: 'international/reseau-international'
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
            to: 'vie-etudiante/evenements',
            label: 'Calendrier',
            position: 'right',
          },
          {
            type: 'localeDropdown',
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
            title: 'Le BDE',
            items: [
              {
                label: 'Actus',
                to: '/',
              },
              {
                label: 'La Newsletter',
                to: '/',
              },
              {
                label: 'Le Calendrier',
                to: '/vie-etudiante/evenements',
              },
              {
                label: 'Nous rejoindre',
                to: '/',
              },
              {
                label: 'Partenariats',
                to: '/',
              },
              {
                label: 'AG & documents officiels',
                to: '/',
              },

            ],
          },

          // {
          //   title: 'Community',
          //   items: [
          //     {
          //       label: 'Stack Overflow',
          //       href: 'https://stackoverflow.com/questions/tagged/docusaurus',
          //     },
          //     {
          //       label: 'Discord',
          //       href: 'https://discordapp.com/invite/docusaurus',
          //     },
          //     {
          //       label: 'Twitter',
          //       href: 'https://twitter.com/docusaurus',
          //     },
          //   ],
          // },
          {
            title: 'A propos de ce site',
            items: [
              {
                label: 'CLUB INFO - ./insa.sh',
                href: 'https://insash.org',
              },
              {
                label: 'Suggérer une fonctionnalité ou modification',
                href: 'https://github.com/BDE-INSA-Hauts-de-France/frontend/issues/new',
              },
              {
                label: 'Repo GitHub',
                href: 'https://github.com/BDE-INSA-Hauts-de-France/frontend',
              },


              {
                label: 'Crédits & Remerciements',
                to: '/credits',
              },
              {
                label: 'Mentions Légales',
                to: '/mentions-legales',
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
              {
                label: 'La Coopérative du Groupe INSA',
                href: 'https://lacooperative.groupe-insa.fr/',
              },
            ],
          },
        ],
        copyright: `Développé et maintenu avec ❤️ par <b><a href='https://insash.org' target='_blank'>./insa.sh</a></b> – BDE INSA Hauts-de-France © ${new Date().getFullYear()} ` ,
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
    scripts: [
      {
        src: 'https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js',
        type: 'module',
      },
      {
        src: 'https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js',
        nomodule: true,
      },
    ],
};

export default config;
