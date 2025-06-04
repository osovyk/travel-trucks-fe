import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button.jsx';
import styles from './NotFoundPage.module.css';

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className={styles.notFound}>
      <h1>404 – Page Not Found</h1>
      <p>Sorry, we can’t find the page you’re looking for.</p>
      <Button onClick={() => navigate('/')}>Go back to Home</Button>
    </div>
  );
}
