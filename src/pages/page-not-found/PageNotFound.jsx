import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Header from '../../components/header/pre-login/Header';
import styles from './PageNotFound.module.scss';

const PageNotFound = () => {
  const navigate = useNavigate();

  const goBackToHome = () => {
    navigate('/');
  }

  return (
    <div>
      <Header />
      <div className={styles.container}>
        <p className={styles.title}>404</p>
        <p className={styles.text}>Lo sentimos,<br />La página que buscas no existe.</p>
        <Button
          className={styles.button}
          onClick={goBackToHome}
        >
          Regresa al Inicio
        </Button>
      </div>
    </div>
  );
}

export default PageNotFound;
