import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import SignUp from './SignUp';
import { INVALID_EMAIL_ERROR_STR, REQUIRED_FIELD_ERROR_STR } from '../../constants';
import { PASSWORDS_DONT_MATCH_ERROR_STR } from './sign-up-helpers';

const history = createMemoryHistory();

const renderComponent = () => {
  render(
    <Router
      location={history.location}
      navigator={history}
    >
      <SignUp />
    </Router>
  )
}

describe('Sign up page', () => {
  it('renders base page', () => {
    renderComponent();
    const email = screen.getByLabelText('Email');
    const password = screen.getByLabelText('Contraseña');
    const confirmPassword = screen.getByLabelText('Confirmar contraseña');
    const signUpButton = screen.getByRole('button', { name: 'Regístrate' });
    expect(email).toBeInTheDocument();
    expect(password).toBeInTheDocument();
    expect(confirmPassword).toBeInTheDocument();
    expect(signUpButton).toBeInTheDocument();
  });

  it('goes back to landing page', () => {
    renderComponent();
    const brand = screen.getByText('Ecommerce Platform');
    userEvent.click(brand);
    expect(history.location.pathname).toBe('/');
  });

  it('validates form - empty', () => {
    renderComponent();
    const signUpButton = screen.getByRole('button', { name: 'Regístrate' });
    userEvent.click(signUpButton);
    const validationErrorMessages = screen.getAllByText(REQUIRED_FIELD_ERROR_STR);
    expect(validationErrorMessages.length).toBe(3);
    // TODO: Validate function triggered by clicking button was not called
  });

  it('validates form - invalid email', () => {
    renderComponent();
    const emailInput = screen.getByLabelText('Email');
    userEvent.type(emailInput, 'an_email');
    const signUpButton = screen.getByRole('button', { name: 'Regístrate' });
    userEvent.click(signUpButton);
    const validationErrorMessage = screen.getByText(INVALID_EMAIL_ERROR_STR);
    expect(validationErrorMessage).toBeInTheDocument();
    // TODO: Validate function triggered by clicking button was not called
  });

  it('validates form - non matching passwords', () => {
    renderComponent();
    const passwordInput = screen.getByLabelText('Contraseña');
    const confirmPasswordInput = screen.getByLabelText('Confirmar contraseña');
    const signUpButton = screen.getByRole('button', { name: 'Regístrate' });
    userEvent.type(passwordInput, 'abcdef');
    userEvent.type(confirmPasswordInput, '123456');
    userEvent.click(signUpButton);
    const validationErrorMessage = screen.getByText(PASSWORDS_DONT_MATCH_ERROR_STR);
    expect(validationErrorMessage).toBeInTheDocument();
    // TODO: Validate function triggered by clicking button was not called
  });

  it('validated form - correct inputs', () => {
    renderComponent();
    const email = screen.getByLabelText('Email');
    const passwordInput = screen.getByLabelText('Contraseña');
    const confirmPasswordInput = screen.getByLabelText('Confirmar contraseña');
    const signUpButton = screen.getByRole('button', { name: 'Regístrate' });
    userEvent.type(email, 'email@gmail.com');
    userEvent.type(passwordInput, 'abcdef');
    userEvent.type(confirmPasswordInput, 'abcdef');
    userEvent.click(signUpButton);
    expect(screen.queryByText(REQUIRED_FIELD_ERROR_STR)).not.toBeInTheDocument();
    expect(screen.queryByText(INVALID_EMAIL_ERROR_STR)).not.toBeInTheDocument();
    expect(screen.queryByText(PASSWORDS_DONT_MATCH_ERROR_STR)).not.toBeInTheDocument();
    // TODO: Validate function triggered by clicking button was called
  });
});