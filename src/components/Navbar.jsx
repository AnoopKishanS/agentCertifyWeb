import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../index.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle hash scrolling
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else if (location.pathname === '/') {
      // Scroll to top if on home and no hash
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Scroll to top on other page navigations
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-content">
        <Link to="/" className="logo">
          Sol<span style={{ color: 'var(--color-primary)' }}>vik</span>
        </Link>
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
          <Link to="/" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Home</Link>
          <Link to="/#features" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Features</Link>
          <Link to="/#how-it-works" className="nav-link" onClick={() => setMobileMenuOpen(false)}>How it Works</Link>
          <Link to="/#industry" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Industry</Link>
          <Link to="/#pricing" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Pricing</Link>
          <Link to="/blog" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Blog</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

