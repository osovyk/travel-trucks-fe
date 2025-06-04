import styles from './Container.module.css';

export default function Container({ children, className }) {
  return <div className={`${className} ${styles.container}`}>{children}</div>;
}
