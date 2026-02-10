import React, { useState, useEffect } from 'react';
import '../index.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-content">
        <div className="logo">
          Solvik
        </div>
        <button
          className="mobile-menu-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div className={`nav-links ${mobileMenuOpen ? 'mobile-open' : ''}`}>
          <a href="#home" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Home</a>
          <a href="#product" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Product</a>
          <a href="#features" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Features</a>
          <a href="#industries" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Industries</a>
          <a href="#use-cases" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Use Cases</a>
          <a href="#pricing" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Pricing</a>
          <a href="#security" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Security & Enterprise</a>
          <a href="#about" className="nav-link" onClick={() => setMobileMenuOpen(false)}>About Us</a>
          <a href="#contact" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Contact / Demo Request</a>
          <a href="#contact" className="btn btn-primary nav-cta" onClick={() => setMobileMenuOpen(false)}>Book Demo</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
