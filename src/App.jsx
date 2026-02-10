import React from 'react';
import './animations.css'; // Global animations
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemStatement from './components/ProblemStatement';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import TargetAudience from './components/TargetAudience';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import ScrollToTopButton from './components/ScrollToTopButton';

import AboutSolvik from './components/AboutSolvik';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <AboutSolvik />
      <Features />
      <HowItWorks />
      <TargetAudience />
      <Pricing />
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}

export default App;
