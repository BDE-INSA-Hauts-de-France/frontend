import React from 'react';
import PropTypes from 'prop-types';
import ClickableCardList from './ClickableCardList';

/**
 * FuturEtudiantCards: composant qui reçoit une prop `cards` (array d'objets)
 * Chaque objet doit contenir : title, href, icon (nom IonIcon), description
 */
export default function FuturEtudiantCards({ cards }) {
  return <ClickableCardList cards={cards} />;
}

FuturEtudiantCards.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
      description: PropTypes.string,
    })
  ).isRequired,
};
