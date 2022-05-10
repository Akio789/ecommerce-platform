import React, { useState } from 'react';
import { TextField } from '@mui/material';
import { Button } from 'react-bootstrap';
import Header from '../../components/header/pre-login/Header';
import styles from './Login.module.scss';
import { validateForm } from './login-helpers';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const onEmailChange = ({ target: { value } }) => {
    setEmail(value);
  }

  const onPasswordChange = ({ target: { value } }) => {
    setPassword(value);
  }

  const onButtonClicked = () => {
    const formErrors = validateForm(email, password);
    setErrors(formErrors);
    if (Object.keys(formErrors).length > 0) {
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
          error={!!errors.email}
          helperText={errors.email}
        />
        <TextField
          variant="standard"
          label="Contraseña"
          type="password"
          className={styles.input}
          onChange={onPasswordChange}
          value={password}
          error={!!errors.password}
          helperText={errors.password}
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
