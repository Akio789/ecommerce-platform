import React from 'react';
import Header from './header/Header';
import Showcase from './showcase/Showcase';
import FeatureHighlights from './feature-highlights/FeatureHighlights';
import { Container } from 'react-bootstrap';

const LandingPage = () => {
  return (
    <div>
      <Header />
      <Container>
        <Showcase />
        <FeatureHighlights />
      </Container>
    </div>
  );
}

export default LandingPage;
