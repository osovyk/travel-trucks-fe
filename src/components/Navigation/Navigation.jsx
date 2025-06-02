import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';
import LogoLink from '../LogoLink/LogoLink.jsx';
import Container from '../Container/Container.jsx';

export default function Navigation() {
  return (
    <header className={styles.header}>
      <Container>
        <LogoLink />
        <nav className={styles.menu}>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? styles.activeLink : styles.link)}
          >
            Home
          </NavLink>
          <NavLink
            to="/catalog"
            className={({ isActive }) => (isActive ? styles.activeLink : styles.link)}
          >
            Catalog
          </NavLink>
        </nav>
      </Container>
    </header>
  );
}
