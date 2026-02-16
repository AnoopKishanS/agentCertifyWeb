import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useModal } from '../context/ModalContext';
import '../index.css';

const Navbar = () => {
  const { openModal } = useModal();
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
    } else {
      // For all other transitions (including back to home), jump to top
      window.scrollTo(0, 0);
    }
  }, [location]);

  const [dropdownOpen, setDropdownOpen] = useState(null);

  const toggleDropdown = (name) => {
    if (window.innerWidth <= 768) {
      setDropdownOpen(dropdownOpen === name ? null : name);
    }
  };

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
          <Link to="/product" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Product</Link>
          <a href="/#industry" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Industry</a>
          <a href="/#pricing" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Pricing</a>
          <Link to="/about" className="nav-link" onClick={() => setMobileMenuOpen(false)}>About Us</Link>
          <Link to="/blog" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Blog</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

