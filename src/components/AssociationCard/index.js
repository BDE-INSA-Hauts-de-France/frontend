import useBaseUrl from '@docusaurus/useBaseUrl';
import Link from '@docusaurus/Link';
import React from 'react';
import './AssociationCard.css';
// Bouton qui point vers les réseaux sociaux
export const BoutonReseau = ({titre, lien, nom_icon, }) => (
    
    <a class="assos-bouton-lien-reseaux" href={lien} target="_blank" rel="noopener noreferrer">
        <img 
        src={useBaseUrl(`/img/icons/${nom_icon}.svg`)}
        alt={`Lien vers ${titre}`}
        />
    </a>




);


{/* Boite d'association */}
const AssociationCard = ({ 
    asso_name, asso_logo, asso_type, asso_description_short, asso_page_lien, asso_lien_instagram, asso_lien_site, asso_lien_discord, asso_lien_linkedin, asso_lien_spotify
}) => {
    const pageLink = useBaseUrl(`/vie-etudiante/assos-et-clubs/${asso_page_lien}`);
    return (
  <Link
      className="association-card"
      to={pageLink}
      >
      <img
          src={useBaseUrl(asso_logo)}
          alt={asso_name}
      />
      <>
          <h3>{asso_name}</h3>
          <p className="asso-type">{asso_type}</p>
          <div className="association-card-links">
              {asso_lien_instagram && (
                  <BoutonReseau titre="Lien vers le compte Instagram" nom_icon="instagram" lien={asso_lien_instagram}/>
              )}
              {asso_lien_site && (
                  <BoutonReseau titre="Lien vers le site internet" nom_icon="globe-solid" lien={asso_lien_site}/>
              )}
              {asso_lien_discord && (
                  <BoutonReseau titre="Lien d'invitation au serveur Discord" nom_icon="discord" lien={asso_lien_discord}/>
              )}
              {asso_lien_linkedin && (
                  <BoutonReseau titre="Lien vers LinkedIn" nom_icon="linkedin-in" lien={asso_lien_linkedin}/>
              )}
              {asso_lien_spotify && (
                  <BoutonReseau titre="Lien vers Spotify" nom_icon="spotify" lien={asso_lien_spotify}/>
              )}
          </div>
          <p className='association-card-description'>{asso_description_short}</p>
      </>
  </Link>
    );
};
// Je ne sais pas comment créer et importer des composants depuis des fichiers md. 
// Pour le moment, ils seront créés directement dans les fichiers mdx

export default AssociationCard;



