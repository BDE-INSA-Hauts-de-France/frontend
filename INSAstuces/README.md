# Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.


# Développement

Ce site utilise le modèle [Docusaurus](https://docusaurus.io), un projet Open Source de Facebook. Docusaurus peut être utilisé pour faire un blog et des documentations de produits en utilisant presque uniquement la syntaxe markdown. (+JS pour les pages). 

Pour développer le site, il est nécessaire d'installer nodeJS. Pour la publication, pas besoin de langages particuliers. Le site est transformé en fichiers statiques dans `/build` à coller directement sur l'hébergement.

## Prérequis pour développer le site

- Node.js (avec npm)

## Initialiser un site docusaurus


```bash 
    npm init docusaurus
```

## Lancer le site
    
### Lancer le site en local sur une machine
```bash
    npm run start
```
Le site sera accessible à l'adresse [http://localhost:3000](http://localhost:3000)

### Lancer le site sur un réseau local

```bash
    npm run start -- --port 80 --host 0.0.0.0
    # En remplaçant 0.0.0.0 par l'adresse IP de la machine
```

## Pour déployer le projet

-> Lancer la commande `npm run build`

-> Copier le contenu du dossier `build` dans le dossier source du site web et le site static sera ok