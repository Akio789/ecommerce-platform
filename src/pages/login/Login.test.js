import { render, screen } from "@testing-library/react"
import userEvent from '@testing-library/user-event'
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history'
import Login from "./Login";
import { INVALID_EMAIL_ERROR_STR, REQUIRED_FIELD_ERROR_STR } from "../../constants";

const history = createMemoryHistory();

const renderComponent = () => {
  return render(
    <Router
      location={history.location}
      navigator={history}
    >
      <Login />
    </Router >
  );
}

describe('Login Page', () => {
  it('renders base page', () => {
    renderComponent();
    const emailInput = screen.getByText('Email');
    const passwordInput = screen.getByText('Contraseña');
    const loginButton = screen.getByRole('button', { name: 'Ingresa' });
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(loginButton).toBeInTheDocument();
  });

  it('goes back to landing page', () => {
    renderComponent();
    const brand = screen.getByText('Ecommerce Platform');
    userEvent.click(brand);
    expect(history.location.pathname).toBe('/');
  });

  it('validates form - empty', () => {
    renderComponent();
    const loginButton = screen.getByRole('button', { name: 'Ingresa' });
    userEvent.click(loginButton);
    const validationErrorMessages = screen.getAllByText(REQUIRED_FIELD_ERROR_STR);
    expect(validationErrorMessages.length).toBe(2);
    // TODO: Validate function triggered by clicking button was not called
  });

  it('valdiates form - wrong email', () => {
    renderComponent();
    const emailInput = screen.getByLabelText('Email');
    userEvent.type(emailInput, 'the_text');
    const loginButton = screen.getByRole('button', { name: 'Ingresa' });
    userEvent.click(loginButton);
    const validationErrorMessage = screen.getByText(INVALID_EMAIL_ERROR_STR);
    expect(validationErrorMessage).toBeInTheDocument();
    // TODO: Validate function triggered by clicking button was not called
  });

  it('validates form - correct inputs', () => {
    renderComponent();
    const emailInput = screen.getByLabelText('Email');
    userEvent.type(emailInput, 'email@gmail.com');
    const passwordInput = screen.getByLabelText('Contraseña');
    userEvent.type(passwordInput, 'the_password');
    const loginButton = screen.getByRole('button', { name: 'Ingresa' });
    userEvent.click(loginButton);
    // TODO: Validate function triggered by clicking button was called
  });
});
