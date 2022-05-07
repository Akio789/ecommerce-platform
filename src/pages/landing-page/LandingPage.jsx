import React from 'react';
import { Container } from 'react-bootstrap';
import Header from './header/Header';
import Showcase from './showcase/Showcase';
import FeatureHighlights from './feature-highlights/FeatureHighlights';
import UserOpinions from './user-opinions/UserOpinions';

const LandingPage = () => {
  return (
    <div>
      <Header />
      <Container>
        <Showcase />
        <FeatureHighlights />
        <UserOpinions />
      </Container>
    </div>
  );
}

export default LandingPage;
