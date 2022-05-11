import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history'
import LandingPage from './LandingPage';

const history = createMemoryHistory();

const renderComponent = () => {
  return render(
    <Router
      location={history.location}
      navigator={history}
    >
      <LandingPage />
    </Router >
  );
}

describe('Landing Page', () => {
  it('sends to login form', () => {
    renderComponent();
    const loginButton = screen.getByText('Ingresa');
    userEvent.click(loginButton);
    expect(history.location.pathname).toBe('/login');
  });

  it('sends to sign up form', () => {
    renderComponent();
    const signupButton = screen.getByText('Regístrate');
    userEvent.click(signupButton);
    expect(history.location.pathname).toBe('/sign-up');
  });
});
