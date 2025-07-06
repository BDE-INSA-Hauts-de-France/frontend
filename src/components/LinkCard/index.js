import "./linkcard.css";
import React from "react";

function isSvgPath(image) {
  return image.endsWith(".svg");
}

function SvgIcon({ src, alt }) {
  // On importe dynamiquement le SVG comme composant React
  // eslint-disable-next-line import/no-webpack-loader-syntax, import/no-unresolved
  // return <img src={src} alt={alt} className="link-card-image" />;
  // On utilise <img> fallback si import dynamique non supporté
  return <img src={src} alt={alt} className="link-card-image social-icon" />;
}

export default function LinkCard({ title, image, link }) {
  return (
    <div className="link-card">
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "flex",
          alignItems: "center",
          textDecoration: "none",
          width: "100%",
        }}
      >
        {image && isSvgPath(image) ? (
          <SvgIcon src={image} alt={title} />
        ) : (
          image && <img src={image} alt={title} className="link-card-image" />
        )}
        <h3 className="link-card-title">{title}</h3>
      </a>
    </div>
  );
}
