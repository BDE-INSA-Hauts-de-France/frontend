import Button from '../Button';
import './PlaceCard.css';

export default function PlaceCard({
    place_name,
    place_city,
    place_description,
    place_photo_link,
    place_maps_link,
    place_website_link,
    place_price_range,

}) {
    // Sélectionner l'image de profil : si photo_link existe, on l'utilise, sinon on revient à l'image par défaut
    const defaultPhoto = "/img/profile_pictures/pp_barry.png";

    return (
        <div className="place-card">
            <div className="place-card-photo-container">
                <img
                    className="place-card-photo"
                    src={place_photo_link || defaultPhoto}
                    alt={place_name}
                    onError={(e) => {
                        e.target.onerror = null; // Empêche une boucle infinie si l'image par défaut est également inaccessible
                        e.target.src = defaultPhoto;
                    }}
                />
            </div>
            <div className="place-card-content">
                <h3 className="place-card-title">{place_name}</h3>
                <p className="place-card-address">
                    {place_city ? ` ${place_city}` : ''}
                </p>
                {place_description && (
                    <p className="place-card-description">
                        {place_description}
                    </p>
                )}
                <div className="place-card-buttons">
                    {place_price_range && (
                        <Button
                            textContent={place_price_range}
                            size="regular"
                            style="bordered"
                        />
                    )}

                    {place_website_link && (
                        <Button
                            textContent="Plus d'infos"
                            to={place_website_link}
                            size="regular"
                            style="bordered"
                        />
                    )}
                    {place_maps_link && (
                        <Button
                            textContent="Ouvrir dans Maps"
                            to={place_maps_link}
                            size="regular"
                            className="place-card-maps-button"
                        />
                    )}
                </div>
            </div>
        </div>
    );
}
