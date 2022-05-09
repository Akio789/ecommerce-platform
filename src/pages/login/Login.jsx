import React from 'react';
import { TextField } from '@mui/material';
import { Button } from 'react-bootstrap';
import Header from '../landing-page/header/Header';
import styles from './Login.module.scss';

const Login = () => {
  return (
    <div>
      <Header />
      <div className={styles['login-container']}>
        <p className={styles.title}>Ingresa</p>
        <TextField
          variant="standard"
          label="Email"
          type="email"
          className={styles.input}
        />
        <TextField
          variant="standard"
          label="Contraseña"
          type="password"
          className={styles.input}
        />
        <Button>
          Ingresa
        </Button>
        <p className={styles['sign-up']}>
          No tienes cuenta? <span>Regístrate!</span>
        </p>
      </div>
    </div>
  );
}

export default Login;
