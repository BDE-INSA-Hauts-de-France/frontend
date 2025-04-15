import useBaseUrl from "@docusaurus/useBaseUrl";
import "./BDEListPreview.css"

{/* Boite d'association */ }
const BDEListPreview = ({ nom, annee, logo_rel_url, instagram_url, lien_film, lien_musique }) => (
    <div className="bde-list-preview">
        <img src={useBaseUrl(logo_rel_url)} alt={nom} />
        <div className="bde-list-preview-content">
            <h3>{nom}</h3>
            <p>{annee}</p>
            <div className="bde-list-preview-links">
                {instagram_url && (
                    <a href={instagram_url} target="_blank" rel="noopener noreferrer">
                        <ion-icon name="logo-instagram" class="bde-list-preview-icon"></ion-icon>
                    </a>
                )}
                {lien_film && (
                    <a href={lien_film} target="_blank" rel="noopener noreferrer">
                        <ion-icon name="logo-youtube" class="bde-list-preview-icon"></ion-icon>
                    </a>
                )}
                {lien_musique && (
                    <a href={lien_musique} target="_blank" rel="noopener noreferrer">
                        <ion-icon name="musical-notes" class="bde-list-preview-icon"></ion-icon>
                    </a>
                )}
            </div>
        </div>
    </div>

);
export default BDEListPreview;



