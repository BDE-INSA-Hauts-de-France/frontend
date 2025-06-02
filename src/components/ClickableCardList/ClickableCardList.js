import React from 'react';
import styles from './ClickableCardList.module.css';
import PropTypes from 'prop-types';

export default function ClickableCardList({ cards }) {
  // Fonction utilitaire pour générer un dégradé à partir d'une couleur de base
  function getGradient(color) {
    // Si la couleur est une variable CSS, on applique un fallback foncé à la main
    if (color.startsWith('var(')) {
      // On force un dégradé rouge foncé par défaut
      return 'linear-gradient(230deg, var(--rouge-bde, #c62828) 0%, #a31515 100%)';
    }
    // Sinon, on génère le dégradé dynamiquement
    return `linear-gradient(230deg, ${color} 0%, ${darkenColor(color, 0.18)} 100%)`;
  }

  // Fonction pour assombrir une couleur hex ou rgb
  function darkenColor(color, amount = 0.15) {
    // Supporte #rrggbb ou rgb(r,g,b)
    if (color.startsWith('#')) {
      let r = parseInt(color.slice(1, 3), 16);
      let g = parseInt(color.slice(3, 5), 16);
      let b = parseInt(color.slice(5, 7), 16);
      r = Math.floor(r * (1 - amount));
      g = Math.floor(g * (1 - amount));
      b = Math.floor(b * (1 - amount));
      return `rgb(${r},${g},${b})`;
    } else if (color.startsWith('rgb')) {
      const [r, g, b] = color.match(/\d+/g).map(Number);
      return `rgb(${Math.floor(r * (1 - amount))},${Math.floor(g * (1 - amount))},${Math.floor(b * (1 - amount))})`;
    }
    // fallback
    return color;
  }

  return (
    <div className={styles.cardList}>
      {cards.map((card) => (
        <a
          key={card.title}
          href={card.href}
          className={styles.card}
          style={{
            background: getGradient(card.color || 'var(--rouge-bde, #c62828)'),
            ...card.style,
          }}
        >
          <ion-icon
            name={card.icon}
            class={styles.cardIcon}
            style={{color: 'white' }}
          ></ion-icon>
          <div className={styles.cardContent}>
            <h3>{card.title}</h3>
            {card.description && <p>{card.description}</p>}
          </div>
        </a>
      ))}
    </div>
  );
}

ClickableCardList.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
      color: PropTypes.string, // couleur personnalisée optionnelle
      description: PropTypes.string,
      style: PropTypes.object,
    })
  ).isRequired,
};
