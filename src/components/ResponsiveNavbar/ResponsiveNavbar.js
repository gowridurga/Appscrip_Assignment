'use client'

import React, { useState, useEffect } from 'react';
import './ResponsiveNavbar.css';

const ResponsiveNavbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [cartCount, setCartCount] = useState(3);
  const [wishlistCount, setWishlistCount] = useState(5);

 
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    setSearchOpen(false);
  };

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
  };

  const navigationLinks = [
    { id: 'shop', label: 'SHOP', href: '#shop' },
    { id: 'skills', label: 'SKILLS', href: '#skills' },
    { id: 'stories', label: 'STORIES', href: '#stories' },
    { id: 'about', label: 'ABOUT', href: '#about' },
    { id: 'contact', label: 'CONTACT US', href: '#contact' }
  ];

  return (
    <>
      
      <div className="top-banner">
        <div className="banner-content">
          <span className="banner-text">Lorem ipsum dolor</span>
        </div>
      </div>

      
      <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
        <div className="navbar-container">
          
          <div className="navbar-left">
            <button 
              className="mobile-menu-toggle"
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
            >
              <span className={`hamburger ${mobileMenuOpen ? 'active' : ''}`}>
                <span></span>
                <span></span>
                <span></span>
              </span>
            </button>

            <a href="/" className="navbar-logo">
              <div className="logo-icon"></div>
              <h1 className="logo-text">LOGO</h1>
            </a>
          </div>

          
          <div className="navbar-center">
            <ul className="nav-links desktop-nav">
              {navigationLinks.map(link => (
                <li key={link.id}>
                  <a href={link.href} className="nav-link">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          
          <div className="navbar-right">
            <button 
              className="icon-btn search-btn"
              onClick={toggleSearch}
              aria-label="Search"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.35-4.35"></path>
              </svg>
            </button>

            <button 
              className="icon-btn wishlist-btn"
              aria-label="Wishlist"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
              {wishlistCount > 0 && (
                <span className="badge">{wishlistCount}</span>
              )}
            </button>

            <button 
              className="icon-btn cart-btn"
              aria-label="Shopping cart"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <path d="M16 10a4 4 0 0 1-8 0"></path>
              </svg>
              {cartCount > 0 && (
                <span className="badge">{cartCount}</span>
              )}
            </button>

            <button 
              className="icon-btn profile-btn"
              aria-label="User profile"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </button>

            <select 
              className="language-select"
              aria-label="Select language"
              defaultValue="en"
            >
              <option value="en">ENG</option>
              <option value="hi">हिन्दी</option>
              <option value="es">ESP</option>
              <option value="fr">FRA</option>
            </select>
          </div>
        </div>

       
        {searchOpen && (
          <div className="search-bar">
            <div className="search-container">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.35-4.35"></path>
              </svg>
              <input 
                type="text"
                placeholder="Search products..."
                className="search-input"
                autoFocus
              />
              <button 
                className="search-close"
                onClick={toggleSearch}
                aria-label="Close search"
              >
                ✕
              </button>
            </div>
          </div>
        )}
      </nav>

      
      {mobileMenuOpen && (
        <>
          <div 
            className="mobile-overlay"
            onClick={toggleMobileMenu}
          ></div>
          
          <div className="mobile-menu">
            <div className="mobile-menu-header">
              <h2>Menu</h2>
              <button 
                className="mobile-close-btn"
                onClick={toggleMobileMenu}
                aria-label="Close menu"
              >
                ✕
              </button>
            </div>

            <div className="mobile-menu-content">
              <ul className="mobile-nav-links">
                {navigationLinks.map(link => (
                  <li key={link.id}>
                    <a 
                      href={link.href} 
                      className="mobile-nav-link"
                      onClick={toggleMobileMenu}
                    >
                      {link.label}
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="9 18 15 12 9 6"></polyline>
                      </svg>
                    </a>
                  </li>
                ))}
              </ul>

              <div className="mobile-menu-footer">
                <button className="mobile-action-btn">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                  Sign In / Register
                </button>
                
                <div className="mobile-language-select">
                  <label htmlFor="mobile-lang">Language:</label>
                  <select id="mobile-lang" defaultValue="en">
                    <option value="en">English</option>
                    <option value="hi">हिन्दी</option>
                    <option value="es">Español</option>
                    <option value="fr">Français</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ResponsiveNavbar;