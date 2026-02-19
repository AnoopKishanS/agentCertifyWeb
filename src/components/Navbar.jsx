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
          <Link to="/#about" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Explore Solvik</Link>
          {/* <Link to="/#why-solvik" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Why</Link>
          <Link to="/#how-it-works" className="nav-link" onClick={() => setMobileMenuOpen(false)}>How</Link>
          <Link to="/#modern-dev" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Platform</Link> */}
          <Link to="/#roi" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Smart ROI</Link>
          <Link to="/#industry" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Industries</Link>
          <Link to="/product" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Product</Link>
          <Link to="/#pricing" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Pricing</Link>
          <Link to="/about" className="nav-link" onClick={() => setMobileMenuOpen(false)}>About</Link>
          <Link to="/blog" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Resources</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

