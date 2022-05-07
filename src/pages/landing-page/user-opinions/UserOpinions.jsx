import React from 'react';
import { Carousel } from 'react-bootstrap';
import userOpinions from './userOpinionsData.json';
import styles from './UserOpinions.module.scss'

const UserOpinions = () => {
  const carouselItems = userOpinions.map(({ user, userType, opinion }, i) => {
    return (
      <Carousel.Item key={i}>
        <h5>{user}</h5>
        <h6>{userType}</h6>
        <p className={styles['carousel-item-opinion']}>{opinion}</p>
      </Carousel.Item>
    )
  });

  return (
    <Carousel
      variant="dark"
      className={styles.carousel}
    >
      {carouselItems}
    </Carousel>
  );
}

export default UserOpinions;
