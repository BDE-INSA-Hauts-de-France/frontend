import PlaceCard from '../PlaceCard';
import './PlaceCardGrid.css';

export default function PlaceCardGrid({ places, columns = "auto-fill" }) {
    if (!places || places.length === 0) {
        return (
            <div className="place-card-grid-empty">
                <p>Aucun lieu à afficher</p>
            </div>
        );
    }    return (
        <div className="place-card-grid">
            {places.map((place, index) => (
                <PlaceCard
                    key={place.id || index}
                    place_name={place.place_name}
                    place_city={place.place_city}
                    place_description={place.place_description}
                    place_photo_link={place.place_photo_link}
                    place_maps_link={place.place_maps_link}
                    place_website_link={place.place_website_link}
                    place_price_range={place.place_price_range}
                />
            ))}
        </div>
    );
}