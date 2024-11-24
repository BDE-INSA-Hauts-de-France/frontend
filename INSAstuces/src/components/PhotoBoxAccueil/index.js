// src/components/MyComponent.js
import React from 'react';
// import Link from '@docusaurus/Link';
import Style from './PhotoBoxAccueil.module.css'; // Import the CSS file

const PhotoBoxAccueil = ({imagePath = "defaultPath", titre = "Titre", description = "Desription brève de l'élément mis en valeur dans la photo"}) => {
  return (
    <div className={Style.PhotoBoxAccueil} style={{ backgroundImage: `url('${imagePath}')` }}>
        <div className={Style.PhotoBoxAccueilContent}>
            <h3>{titre}</h3>
            <p>{description}</p>
            <div className={Style.PhotoBoxAccueilBottomBox}>
                {/* <p>?</p> */}
                <p id={Style.PhotoBoxAccueilBouton}>Montre-moi en d'autres</p>
            </div>
        
        </div>

    </div>
  );
};

export default PhotoBoxAccueil;
