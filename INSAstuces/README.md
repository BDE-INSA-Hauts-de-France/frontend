# Website
Ce site web est construit en utilisant [Docusaurus](https://docusaurus.io/), un générateur de site web statique moderne.

### Installation

```
$ yarn
```

### Développement local

```
$ yarn start
```

Cette commande lance un serveur de développement local et ouvre une fenêtre de navigateur. La plupart des modifications sont reflétées en direct sans avoir à redémarrer le serveur.

### Construction

```
$ yarn build
```

Cette commande génère le contenu statique dans le répertoire `build` et peut être servi en utilisant n'importe quel service d'hébergement de contenu statique.

### Déploiement

Utilisation de SSH :

```
$ USE_SSH=true yarn deploy
```

Sans utiliser SSH :

```
$ GIT_USER=<Votre nom d'utilisateur GitHub> yarn deploy
```

Si vous utilisez GitHub Pages pour l'hébergement, cette commande est un moyen pratique de construire le site web et de le pousser vers la branche `gh-pages`.


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
    npm install # Pour installer les dépendances seulement la première fois
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