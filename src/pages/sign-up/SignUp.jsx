import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField } from '@mui/material';
import { Button } from 'react-bootstrap';
import Header from '../../components/header/pre-login/Header';
import styles from './SignUp.module.scss';
import { validateForm } from './sign-up-helpers';

const SignUp = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});

  const onChangeEmail = ({ target: { value } }) => {
    setEmail(value);
  }

  const onChangePassword = ({ target: { value } }) => {
    setPassword(value);
  }

  const onChangeConfirmPassword = ({ target: { value } }) => {
    setConfirmPassword(value);
  }

  const onRegisterButtonClicked = () => {
    const formErrors = validateForm(email, password, confirmPassword);
    setErrors(formErrors);
    if (Object.keys(formErrors).length > 0) {
      return;
    }
    // TODO: Call Sign up API endpoint
    console.log(`Email: ${email}, Password: ${password}, confirmPassword: ${confirmPassword}`);
  }

  const onAlreadyHaveAnAccountClicked = () => {
    navigate('/login');
  }

  return (
    <div>
      <Header />
      <div className={styles['signup-container']}>
        <p className={styles.title}>Regístrate</p>
        <TextField
          label="Email"
          type="email"
          variant="standard"
          value={email}
          onChange={onChangeEmail}
          error={!!errors.email}
          helperText={errors.email}
        />
        <TextField
          label="Contraseña"
          type="password"
          variant="standard"
          value={password}
          onChange={onChangePassword}
          error={!!errors.password}
          helperText={errors.password}
        />
        <TextField
          label="Confirmar contraseña"
          type="password"
          variant="standard"
          value={confirmPassword}
          onChange={onChangeConfirmPassword}
          error={!!errors.confirmPassword}
          helperText={errors.confirmPassword}
        />
        <Button onClick={onRegisterButtonClicked}>
          Regístrate
        </Button>
        <p className={styles.login}>
          Ya tienes una cuenta?&nbsp;
          <span onClick={onAlreadyHaveAnAccountClicked}>
            Ingresa!
          </span>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
