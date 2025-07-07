# Développement

## Technologies

Ce site est basé sur [Docusaurus](https://docusaurus.io/), un générateur de sites web statique moderne et open-source basé sur React. Il est maintenu par Facebook


Cette commande génère le contenu statique dans le répertoire `build` et peut être servi en utilisant n'importe quel service d'hébergement de contenu statique.

## Développement

Ce site utilise le modèle [Docusaurus](https://docusaurus.io), un projet Open Source de Facebook. Docusaurus peut être utilisé pour faire un blog et des documentations de produits en utilisant presque uniquement la syntaxe markdown. (+JS pour les pages). 

Pour développer le site, il est nécessaire d'installer nodeJS. Pour la publication, pas besoin de langages particuliers. Le site est transformé en fichiers statiques dans `/build` à coller directement sur l'hébergement.

## Prérequis pour développer le site

- Node.js (avec npm)

## Initialiser un NOUVEAU site docusaurus


```bash 
    npm init docusaurus
```

## Lancer le site
    
### Lancer le site en local sur une machine
```bash
    npm install # Pour installer les dépendances seulement la première fois
    npm run start
```
Le site sera accessible à l'adresse [http://localhost:3000](http://localhost:3000)

### Lancer le site sur un réseau local

```bash
    npm run start -- --port 80 --host 0.0.0.0
    # En remplaçant 0.0.0.0 par l'adresse IP de la machine
```

### Gérer les différents langages du site

Le site est disponible en deux langues: le français (principale) et l'anglais. Il y a un menu de sélection de laa langue dans le header. Attention cependant à certains points:

- le contenu des pages **doit être traduit manuellement** 

- Les différentes traductions du site sont des applications web différentes. Il est donc nécessaire de lancer le site dans la langue souhaitée pour voir les modifications.

    Pour lancer le site en anglais, il suffit de lancer la commande suivante:

    ```bash
        npm run start -- --locale en
    ```
- Le contenu des traductions est stocké dans le dossier `i18n`. Chaque langue a son propre dossier. Les fichiers markdown (`.md` et `.mdx`) contenus dans le dossier `docs/` sont contenus dans les dossier `docusaurus-plugin-content-docs` de chaque langue.

    Pour copier les fichiers markdown d'une langue à l'autre, il suffit de copier les fichiers du dossier `docs` de la langue source vers le dossier `docs` de la langue cible.

    > Une modification effectuée sur le markdwown principal ou d'une langue particulière doit **impérativement** être reportée **manuellement** sur les autres langues.

- Attention aux liens des images et des liens inter-pages. Les liens des fichiers markdown sont automatiquement traduits en fonction de la langue du site. Les liens contenus dans les composants React doivent parfois être traduits manuellement en utilisant `useBaseUrl()`.

- Les traductions des **menus de navigation** (navbar et footer) sont gérées dans des fichiers json dans le dossier `i18n/<langue>/docusaurus-theme-classic/`. Il est possible de modifier les traductions directement dans ces fichiers. Lorsque des éléments sont rajoutés dans ces menus, il faut relancer la commande suivante poour les ajouter au fichier de traduction, **et les traduire manuellement**: `npm run write-translations -- --locale fr`.

## Pour déployer le projet

-> Lancer la commande `npm run build`

-> Copier le contenu du dossier `build` dans le dossier source du site web et le site static sera ok