import React from 'react';
import { TextField } from '@mui/material';
import { Button } from 'react-bootstrap';
import Header from '../../components/header/pre-login/Header';
import styles from './SignUp.module.scss';

const SignUp = () => {
  return (
    <div>
      <Header />
      <div className={styles['signup-container']}>
        <p className={styles.title}>Regístrate</p>
        <TextField
          label="Email"
          type="email"
          variant="standard"
        />
        <TextField
          label="Contraseña"
          type="password"
          variant="standard"
        />
        <TextField
          label="Confirmar contraseña"
          type="password"
          variant="standard"
        />
        <Button>
          Regístrate
        </Button>
        <p className={styles.login}>
          Ya tienes una cuenta? <span>Ingresa!</span>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
