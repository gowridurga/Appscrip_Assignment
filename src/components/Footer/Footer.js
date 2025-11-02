'use client'

import React, { useState } from 'react';
import './Footer.css';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail('');
        setSubscribed(false);
      }, 3000);
    }
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        
        <div className="footer-newsletter">
          <div className="newsletter-content">
            <h3 className="footer-heading">BE THE FIRST TO KNOW</h3>
            <p className="newsletter-text">Sign up for updates from mettā muse.</p>
            <form className="subscribe-form" onSubmit={handleSubscribe}>
              <input 
                type="email" 
                placeholder="Enter your e-mail..." 
                className="email-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="subscribe-btn">
                {subscribed ? 'SUBSCRIBED!' : 'SUBSCRIBE'}
              </button>
            </form>
          </div>

          <div className="contact-currency">
            <div className="contact-section">
              <h4 className="footer-subheading">CONTACT US</h4>
              <p className="contact-text">+44 221 133 5360</p>
              <p className="contact-text">customercare@mettamuse.com</p>
            </div>
            
            <div className="currency-section">
              <h4 className="footer-subheading">CURRENCY</h4>
              <div className="currency-selector">
                <span className="currency-flag">🇺🇸</span>
                <span className="currency-code">• USD</span>
              </div>
              <p className="currency-note">Transactions will be completed in Euros and a currency reference is available on hover.</p>
            </div>
          </div>
        </div>

        
        <div className="footer-links">
          <div className="footer-column">
            <h4 className="footer-subheading">mettā muse</h4>
            <ul className="footer-list">
              <li><a href="#about" className="footer-link">About Us</a></li>
              <li><a href="#stories" className="footer-link">Stories</a></li>
              <li><a href="#artisans" className="footer-link">Artisans</a></li>
              <li><a href="#boutiques" className="footer-link">Boutiques</a></li>
              <li><a href="#contact" className="footer-link">Contact Us</a></li>
              <li><a href="#compliance" className="footer-link">EU Compliances Docs</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4 className="footer-subheading">QUICK LINKS</h4>
            <ul className="footer-list">
              <li><a href="#orders" className="footer-link">Orders & Shipping</a></li>
              <li><a href="#seller" className="footer-link">Join/Login as a Seller</a></li>
              <li><a href="#payment" className="footer-link">Payment & Pricing</a></li>
              <li><a href="#returns" className="footer-link">Return & Refunds</a></li>
              <li><a href="#faqs" className="footer-link">FAQs</a></li>
              <li><a href="#privacy" className="footer-link">Privacy Policy</a></li>
              <li><a href="#terms" className="footer-link">Terms & Conditions</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4 className="footer-subheading">FOLLOW US</h4>
            <div className="social-icons">
              <a href="https://instagram.com" className="social-icon" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="https://linkedin.com" className="social-icon" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </div>

            <h4 className="footer-subheading payment-heading">mettā muse ACCEPTS</h4>
            <div className="payment-icons">
              <div className="payment-icon" title="Google Pay">
                <img src="https://upload.wikimedia.org/wikipedia/commons/f/f2/Google_Pay_Logo.svg" alt="Google Pay" />
              </div>
              <div className="payment-icon" title="Mastercard">
                <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" />
              </div>
              <div className="payment-icon" title="PayPal">
                <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" />
              </div>
              <div className="payment-icon" title="American Express">
                <img src="https://upload.wikimedia.org/wikipedia/commons/3/30/American_Express_logo.svg" alt="Amex" />
              </div>
              <div className="payment-icon" title="Apple Pay">
                <img src="https://upload.wikimedia.org/wikipedia/commons/b/b0/Apple_Pay_logo.svg" alt="Apple Pay" />
              </div>
              <div className="payment-icon payment-text">O Pay</div>
            </div>
          </div>
        </div>

       
        <div className="footer-copyright">
          <p>Copyright © 2023 mettamuse. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;