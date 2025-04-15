import useBaseUrl from '@docusaurus/useBaseUrl';
import React from 'react';
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
const AssociationPreview = ({ 
    asso_name, asso_logo, asso_type, asso_description_short, asso_page_lien, asso_lien_instagram, asso_lien_site, asso_lien_discord, asso_lien_linkedin, asso_lien_spotify
}) => {
    const pageLink = useBaseUrl(`/vie-etudiante/assos-et-clubs/${asso_page_lien}`);
    return (
  <a
      class="div-link"
      style={{
          backgroundColor: "#AAAAAA20",
          borderRadius: '8px',
          padding: '12px',
          textAlign: 'center',
          minWidth: '200px',
          flex:1,
      }}
      href = {pageLink}
      >
      <img
          src={useBaseUrl(asso_logo)}
          alt={asso_name}
          style={{
              width: 'auto',
              height: '100px',
              borderRadius: '100px',
          }}
      />
      <>
          <h3 style={{
              fontSize: '1.2em',
              margin: '0',
              padding: '0',
          }}>{asso_name}</h3>

          <p style={{
              color: '#888',
              fontSize: '0.8em',
              fontWeight: 'bold',
              textTransform: 'uppercase',
              padding: '0',
              marginBottom: '0',
          }}>{asso_type}</p>
          <div style={{
              margin: '0.5em 0',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              gap: '1em',
              alignItems: "center",

          }}>
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
          <p style={{
              fontSize: '1em',
              padding: '0',
              margin: '0',

          
          }}>{asso_description_short}</p>
      </>



  </a>
    );
};
// Je ne sais pas comment créer et importer des composants depuis des fichiers md. 
// Pour le moment, ils seront créés directement dans les fichiers mdx

export default AssociationPreview;



