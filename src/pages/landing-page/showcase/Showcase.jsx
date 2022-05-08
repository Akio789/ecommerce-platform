import React from 'react';
import styles from './Showcase.module.scss';

const Showcase = () => {
  return (
    <div className={styles.container}>
      <div className={styles.description}>
        <h2>
          Lorem ipsum dolor sit amet, consectetur adipisicing.
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Repellat beatae tempore necessitatibus eos ad unde veniam
          consequatur debitis ratione provident maxime, ab aliquid
          similique excepturi, voluptates non dolores voluptatem eligendi.
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos, eum.
        </p>
      </div>
      <img
        src="assets/showcase-img.jpg"
        alt="Showcase"
        className={styles.image}
      />
    </div>);
}

export default Showcase;
