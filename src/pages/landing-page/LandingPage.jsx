import React from 'react';
import { Container } from 'react-bootstrap';
import Header from '../../components/header/pre-login/Header';
import Showcase from './showcase/Showcase';
import FeatureHighlights from './feature-highlights/FeatureHighlights';
import UserOpinions from './user-opinions/UserOpinions';
import Footer from './footer/Footer';

const LandingPage = () => {
  return (
    <div>
      <Header />
      <Container>
        <Showcase />
        <FeatureHighlights />
        <UserOpinions />
      </Container>
      <Footer />
    </div>
  );
}

export default LandingPage;
