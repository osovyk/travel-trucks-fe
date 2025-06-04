import React from 'react';
import { useNavigate } from 'react-router-dom';
import Container from '../Container/Container.jsx';
import Button from '../Button/Button.jsx';
import hero1x from '../../assets/Hero/hero.png';
import hero2x from '../../assets/Hero/hero@2x.png';
import styles from './Hero.module.css';
import { Suspense } from 'react';
import Loader from '../Loader/Loader.jsx';

export default function Hero() {
  const navigate = useNavigate();

  return (
    <Suspense fallback={<Loader />}>
      <section className={styles.hero}>
        <img
          src={hero1x}
          srcSet={`${hero1x} 1x, ${hero2x} 2x`}
          alt="Beautiful camper landscape"
          width={1440}
          height={600}
          className={styles.heroImage}
        />

        <Container className={styles.heroContent}>
          <h1>Campers of your dreams</h1>
          <h2>You can find everything you want in our catalog</h2>
          <Button onClick={() => navigate('/catalog')}>View Now</Button>
        </Container>
      </section>
    </Suspense>
  );
}
