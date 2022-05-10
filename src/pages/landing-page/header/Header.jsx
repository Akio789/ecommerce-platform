import React from 'react';
import { Nav, Navbar, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import styles from './Header.module.scss';

const Header = () => {
  const navigate = useNavigate();

  const onBrandClicked = () => {
    navigate('/');
  }

  const onLoginButtonClicked = () => {
    navigate('/login');
  }

  return (
    <Navbar
      sticky="top"
      bg="primary"
      variant="dark"
      expand="lg"
      className={styles.header}
    >
      <Navbar.Brand
        className={styles.brand}
        onClick={onBrandClicked}
      >
        Ecommerce Platform
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Nav
          className={`justify-content-end flex-grow-1 ${styles['header-actions']}`}
        >
          <Nav.Link as="a">
            <p
              className="btn btn-outline-light"
              onClick={onLoginButtonClicked}
            >
              Ingresa
            </p>
          </Nav.Link>
          <Nav.Link as="a">
            <p className="btn btn-outline-light">
              Regístrate
            </p>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar >
  );
}

export default Header;
