import React from 'react';
import styles from './ClickableCardList.module.css';

export function ClickableCard({ title, description, image, to }) {
  return (
    <a className={styles.card} href={to}>
      <img src={image} alt={title} className={styles.cardImage} />
      <div className={styles.cardContent}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </a>
  );
}

export default function ClickableCardList({ cards }) {
  return (
    <div className={styles.cardList}>
      {cards.map((card, idx) => (
        <ClickableCard key={idx} {...card} />
      ))}
    </div>
  );
}
