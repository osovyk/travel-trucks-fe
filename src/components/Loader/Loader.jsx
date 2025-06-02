import styles from './Loader.module.css';

export default function Loader() {
  return (
    <div className={styles.loaderContainer}>
      <span className={styles.loader}>
        <span className={styles.loaderDualRing}></span>
      </span>
    </div>
  );
}
