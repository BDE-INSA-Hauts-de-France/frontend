import './BetterContactCard.css';

export default function BetterContactCard({
    first_name,
    last_name,
    role,
    photo_link = "",
    email,
    phone_number,
    instagram,
    linkedin,
    siteperso,
    github
}) {
    // Sélectionner l'image de profil : si photo_link existe, on l'utilise, sinon on revient à l'image par défaut
    const defaultPhoto = "/img/profile_pictures/pp_barry.png";

    return (
        <div className="better-contact-card">
            <img
                src={photo_link || defaultPhoto}
                alt="Photo de profil"
                onError={(e) => {
                    e.target.onerror = null; // Empêche une boucle infinie si l'image par défaut est également inaccessible
                    e.target.src = defaultPhoto;
                }}
            />
            <div className="better-contact-card-info">
                <h3>
                    {first_name} {last_name}
                </h3>
                <p className="role">{role}</p>
                <div className="better-contact-card-links">
                    {email ? (
                        <a href={`mailto:${email}`}>{email}</a>
                    ) : null}
                    {phone_number ? (
                        <a href={`tel:${phone_number}`}>{phone_number}</a>
                    ) : null}
                    {instagram ? (
                        <a href={instagram} target="_blank" rel="noreferrer">
                            <ion-icon name="logo-instagram"></ion-icon>
                        </a>
                    ) : null}
                    {linkedin ? (
                        <a href={linkedin} target="_blank" rel="noreferrer">
                            <ion-icon name="logo-linkedin"></ion-icon>
                        </a>
                    ) : null}
                    {github ? (
                        <a href={github} target="_blank" rel="noreferrer">
                            <ion-icon name="logo-github"></ion-icon>
                        </a>
                    ) : null}
                    {siteperso ? (
                        <a href={siteperso} target="_blank" rel="noreferrer">
                            <ion-icon name="globe-outline"></ion-icon>
                        </a>
                    ) : null}
                    {phone_number ? (
                        <a href={`tel:${phone_number}`}>
                            <ion-icon name="call-outline"></ion-icon>
                        </a>
                    ) : null}
                    {email ? (
                        <a href={`mailto:${email}`}>
                            <ion-icon name="mail-outline"></ion-icon>
                        </a>
                    ) : null}
                </div>
            </div>
        </div>
    );
}
