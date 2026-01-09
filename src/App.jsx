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

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <ProblemStatement />
      <Features />
      <HowItWorks />
      <TargetAudience />
      <Pricing />
      <Footer />
    </div>
  );
}

export default App;
