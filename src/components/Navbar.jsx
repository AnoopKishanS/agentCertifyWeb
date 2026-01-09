import React, { useState, useEffect } from 'react';
import '../index.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-content">
        <div className="logo">
          Madame<span style={{ color: 'var(--color-primary)' }}>QA</span>
        </div>
        <div className="nav-links">
          <a href="#login" className="nav-link">Login</a>
          <a href="#signup" className="nav-link">Sign up</a>
          <a href="#start" className="btn btn-primary nav-cta">Get Started</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
