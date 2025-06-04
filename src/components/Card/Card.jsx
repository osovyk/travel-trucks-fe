import React from 'react';
import styles from '../Card/Card.module.css';

export default function Card() {
  const isFavorited = false;

  return (
    <div className={styles.card}>
      <img
        src="https://ftp.goit.study/img/campers-test-task/1-1.webp"
        alt="Beautiful camper landscape"
        className={styles.cardImage}
        width={292}
        height={320}
      />
      <div className={styles.cardContent}>
        <div className={styles.cardHeader}>
          <h2 className={styles.cardTitle}>Mavericks</h2>
          <p className={styles.cardPrice}>€8000.00</p>
          <button className={styles.cardFav}>
            <svg
              className={isFavorited ? styles.heartFilled : styles.heartOutline}
              width={26}
              height={24}
            >
              <use href="/sprite.svg#icon-heart" />
            </svg>
          </button>
        </div>
        <div className={styles.cardSubinfo}>
          <a className={styles.rating}>
            <svg width={16} height={16} className={styles.starIcon}>
              <use href="/sprite.svg#icon-star" />
            </svg>
            4.4 (2 Reviews)
          </a>
          <span className={styles.location}>
            <svg width={16} height={16} className={styles.locationIcon}>
              <use href="/sprite.svg#icon-location" />
            </svg>
            Kyiv, Ukraine
          </span>
        </div>
        <p className={styles.cardDescription}>
          Embrace siasd aasd asd sdasd asd asdmplicity and with asdas the panel truck...
        </p>
        <ul className={styles.cardFeatures}>
          <li className={styles.feature}>
            <svg width={20} height={20} className={styles.featureIcon}>
              <use href="/sprite.svg#icon-diagram" />
            </svg>
            Automatic
          </li>
        </ul>
        <button className={styles.cardButton}>Show more</button>
      </div>
    </div>
  );
}
