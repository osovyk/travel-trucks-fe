import { useNavigate } from 'react-router-dom';
import styles from './Hero.module.css';
import Button from '../Button/Button.jsx';
import Container from '../Container/Container.jsx';

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section className={styles.hero}>
      <Container>
        <h1>Campers of your dreams</h1>
        <p>You can find everything you want in our catalog</p>
        <Button onClick={() => navigate('/catalog')}>View Now</Button>
      </Container>
    </section>
  );
}
