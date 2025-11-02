'use client'

import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="header">
      
      <div className="header-main">
        <div className="header-container">
        
          <button 
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            )}
          </button>

        
          <div className="logo">
            <div className="logo-icon"></div>
            <h1 className="logo-text">LOGO</h1>
          </div>

          
          <nav className="desktop-nav">
            <a href="#shop" className="nav-link">SHOP</a>
            <a href="#skills" className="nav-link">SKILLS</a>
            <a href="#stories" className="nav-link">STORIES</a>
            <a href="#about" className="nav-link">ABOUT</a>
            <a href="#contact" className="nav-link">CONTACT US</a>
          </nav>

         
          <div className="header-actions">
            <button className="icon-btn" aria-label="Search">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.35-4.35"></path>
              </svg>
            </button>
            <button className="icon-btn" aria-label="Wishlist">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
            </button>
            <button className="icon-btn" aria-label="Shopping bag">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <path d="M16 10a4 4 0 0 1-8 0"></path>
              </svg>
            </button>
            <button className="icon-btn" aria-label="User profile">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </button>
            <select className="language-select" aria-label="Select language">
              <option value="en">ENG</option>
              <option value="hi">हिन्दी</option>
            </select>
          </div>
        </div>

        
        {mobileMenuOpen && (
          <nav className="mobile-nav">
            <a href="#shop" className="mobile-nav-link">SHOP</a>
            <a href="#skills" className="mobile-nav-link">SKILLS</a>
            <a href="#stories" className="mobile-nav-link">STORIES</a>
            <a href="#about" className="mobile-nav-link">ABOUT</a>
            <a href="#contact" className="mobile-nav-link">CONTACT US</a>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;