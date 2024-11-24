// mise à jour des photos au clic sur le bouton

// regarder dans les fichiers json combien il y a de photos

// générer un nombre aléatoire entre 1 et le nombre de photos

// ajouter une classe de transition

// changer la photo affichée en conséquence en récupérant son url

// récupérer le titre et la description grâce à l'id du texte récupéré

// changer le titre et la description affichés

// delay très faible

// retirer la classe de transition css

// NOTE: NE PAS PRENDRE LA MEME PHOTO QUE CELLE DEJA PRESENTE




// récupérer le nombre d'images en comptant le nombre d'éléments du fichier data/photosAccueil/photos.json
import photosData from '/src/data/photosAccueil/photos.json';
import textesData from '/src/data/photosAccueil/textes.json';

function countPhotos() {
  return photosData.length; // return the number of photos
}





// générer un nombre aléatoire entre 0 et n
function randomInt(n) {
  return Math.floor(Math.random() * n);
}

// changer la photo affichée
function changePhoto(component) {
    // get the button id

    const photos = photosData;
    const textes = textesData;
    const n = countPhotos();
    let i = randomInt(n);
    while (component.style.backgroundImage.includes(photos[i].src)) {
        i = randomInt(n);
    }
    const photo = photos[i];
    const texte = textes[photos[i]["idTexte"] - 1];
    console.log(photo) ;
    console.log(texte) ;
    // récupérer les blocs
    const photoBox = component;
    const photoBoxTitle = photoBox.getElementsByTagName('h3')[0];
    const photoBoxDescription = photoBox.getElementsByTagName('p')[0];
console.log(photoBoxTitle, photoBoxDescription); ;

    photoBox.style.backgroundImage = `url('${photo.src}')`;
    photoBoxTitle.textContent = texte["titre"];
    photoBoxDescription.textContent = texte["description"];
}


// export the function
export { changePhoto };