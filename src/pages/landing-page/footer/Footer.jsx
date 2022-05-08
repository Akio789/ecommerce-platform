import React from 'react';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <p className={styles.copyright}>No Copyright yet</p>
      <p className={styles.brand}>Ecommerce Platform</p>
      <div className={styles.terms}>
        <p>
          <span>Términos de Uso</span>
          <span>Privacidad</span>
        </p>
      </div>
    </div>
  );
}

export default Footer;
