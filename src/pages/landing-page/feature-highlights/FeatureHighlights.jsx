import React from 'react';
import { Card } from 'react-bootstrap';
import highlights from './highlightsData.json';
import styles from './FeatureHighlights.module.scss';

const FeatureHighlights = () => {
  const highlightCards = highlights.map(({ title, description }, i) => {
    return (
      <Card key={i} className={styles.card}>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card>
    );
  });

  return (
    <div className={styles['card-container']}>
      {highlightCards}
    </div>
  )
}

export default FeatureHighlights;
