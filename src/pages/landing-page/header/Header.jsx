import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import React from 'react';
import styles from './Header.module.css';

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar className={styles.header}>
        <Typography variant="h6">
          Ecommerce Platform
        </Typography>
        <div className={styles['header-actions']}>
          <Button
            color="inherit"
            variant="outlined"
          >
            Login
          </Button>
          <Button
            color="inherit"
            variant="outlined"
          >
            Sign up
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
