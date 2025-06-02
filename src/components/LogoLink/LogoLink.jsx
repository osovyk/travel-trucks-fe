import { NavLink } from 'react-router-dom';
import Logo from '../../assets/logo.svg?react';
import styles from './LogoLink.module.css';

export default function LogoLink() {
  return (
    <NavLink to="/" className={styles.logoLink} aria-label="Home">
      <Logo className={styles.logo} />
    </NavLink>
  );
}
