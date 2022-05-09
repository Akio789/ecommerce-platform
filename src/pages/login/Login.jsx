import React, { useState } from 'react';
import { TextField } from '@mui/material';
import { Button } from 'react-bootstrap';
import Header from '../landing-page/header/Header';
import { validateEmail } from '../../util/email';
import styles from './Login.module.scss';

const Login = () => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState();
  const [password, setPassword] = useState('');

  const onEmailChange = ({ target: { value } }) => {
    setEmail(value);
  }

  const onPasswordChange = ({ target: { value } }) => {
    setPassword(value);
  }

  const onButtonClicked = () => {
    setEmailError();
    if (!validateEmail(email)) {
      setEmailError('Por favor ingresa un email valido.');
      return;
    }
    console.log(`Email: ${email}, Password: ${password}`);
  }

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
          onChange={onEmailChange}
          value={email}
          error={!!emailError}
          helperText={emailError}
        />
        <TextField
          variant="standard"
          label="Contraseña"
          type="password"
          className={styles.input}
          onChange={onPasswordChange}
          value={password}
        />
        <Button onClick={onButtonClicked}>
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
