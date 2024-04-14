// Bouton qui point vers les réseaux sociaux
export const BoutonReseauHeader = ({ titre, lien, nom_icon, }) => (

    <a class="assos-bouton-lien-reseaux header" href={lien}>
        <img
            src={`/img/icons/${nom_icon}.svg`}
            alt={`Lien vers ${titre}`}
        />
    </a>




);






const styles = {
    avecFond: {
      backgroundColor: "#AAAAAA20",
      // borderRadius: '8px',
      overflow: 'hidden',
      padding: '12px',
      textAlign: 'left',
      minWidth: '200px',
      flex: 1,
      backdropFilter: 'blur(4px)',
      WebkitBackdropFilter: 'blur(4px)',
      background: 'var(--gradient_over_image_left_text)',
      // Ajoutez d'autres styles si nécessaire
    },
    sansFond: {
      backgroundColor: "#AAAAAA20",
      // borderRadius: '8px',
      padding: '12px',
      textAlign: 'left',
      minWidth: '200px',
      flex: 1,
      backdropFilter: 'blur(4px)',
      WebkitBackdropFilter: 'blur(4px)',
      // Autres styles sans dégradé
    }
  };
  

{/* Boite d'association */ }
const AssociationHeader = ({ asso_name, asso_logo, asso_type, asso_description_long, asso_page_lien, asso_image_fond, asso_lien_instagram, asso_lien_site, asso_lien_discord, asso_lien_linkedin, asso_lien_spotify }) => (
    <div
    style ={{
        backgroundImage: `url(${asso_image_fond})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        borderRadius: '8px',
        overflow: 'hidden',
        

    }}>
        <div
            class="div-link"
            style = {asso_image_fond !== "" ? styles.avecFond : styles.sansFond}
        >
            <img
                src={asso_logo}
                alt={asso_name}
                style={{
                    width: 'auto',
                    height: '150px',
                    borderRadius: '16px',
                }}
            />
            <>
                <h1 style={{
                    fontSize: '3em',
                    margin: '0',
                    padding: '0',
                }}
                    class={"markdown"}
                >{asso_name}</h1>

                <p style={{
                    fontSize: '1em',

                    padding: '0',
                    margin: '0',

                }}>{asso_description_long}</p>

                <div style={{
                    margin: '0.5em 0',
                    display: 'flex',
                    flexDirection: 'row',
                    gap: '1em',
                    alignItems: "center",

                }}>
                    {asso_lien_instagram && (
                        <BoutonReseauHeader titre="Lien vers le compte Instagram" nom_icon="instagram" lien={asso_lien_instagram} />
                    )}

                    {asso_lien_site && (
                        <BoutonReseauHeader titre="Lien vers le site internet" nom_icon="globe-solid" lien={asso_lien_site} />
                    )}

                    {asso_lien_discord && (
                        <BoutonReseauHeader titre="Lien d'invitation au serveur Discord" nom_icon="discord" lien={asso_lien_discord} />
                    )}
                    {asso_lien_linkedin && (
                        <BoutonReseauHeader titre="Lien vers LinkedIn" nom_icon="linkedin-in" lien={asso_lien_linkedin} />
                    )}
                    {asso_lien_spotify && (
                        <BoutonReseauHeader titre="Lien vers Spotify" nom_icon="spotify" lien={asso_lien_spotify} />
                    )}

                </div>

            </>



        </div>
    </div>
);
// Je ne sais pas comment créer et importer des composants depuis des fichiers md. 
// Pour le moment, ils seront créés directement dans les fichiers mdx

export default AssociationHeader;



