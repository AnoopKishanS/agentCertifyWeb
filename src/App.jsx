import React from 'react';
import './animations.css'; // Global animations
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemStatement from './components/ProblemStatement';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import TargetAudience from './components/TargetAudience';
import UseCases from './components/UseCases';
import Pricing from './components/Pricing';
import SecurityEnterprise from './components/SecurityEnterprise';
import AboutUs from './components/AboutUs';
import BlogInsights from './components/BlogInsights';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTopButton from './components/ScrollToTopButton';

function App() {
  return (
    <div className="App">
      <div id="home"></div>
      <Navbar />
      <Hero />
      <ProblemStatement />
      <HowItWorks />
      <Features />
      <UseCases />
      <TargetAudience />
      <Pricing />
      <SecurityEnterprise />
      <AboutUs />
      <BlogInsights />
      <Contact />
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}

export default App;
