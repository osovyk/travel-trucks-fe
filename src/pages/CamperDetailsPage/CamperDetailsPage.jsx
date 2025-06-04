import styles from './CamperDetailsPage.module.css';
import Container from '../../components/Container/Container.jsx';

export default function CamperDetailsPage() {
  return (
    <Container>
      <h1 className={styles.title}>Mavericks</h1>
      <div className={styles.infoRow}>
        <a className={styles.infoRowItem}>
          <svg width={16} height={16} className={styles.iconStar}>
            <use href="/sprite.svg#icon-star" />
          </svg>
          4.4 (2 Reviews)
        </a>
        <div className={styles.infoRowItem}>
          <svg width={16} height={16} className={styles.iconLocation}>
            <use href="/sprite.svg#icon-location" />
          </svg>
          Kyiv, Ukraine
        </div>
      </div>
      <div className={styles.price}>€8000.00</div>
      <div className={styles.gallery}></div>
      <p className={styles.description}>
        Embrace simplicity and freedom with the Mavericks panel truck, an ideal choice for solo
        travelers or couples seeking a compact and efficient way to explore the open roads. This
        no-frills yet reliable panel truck offers the essentials for a comfortable journey, making
        it the perfect companion for those who value simplicity and functionality.
      </p>
    </Container>
  );
}
