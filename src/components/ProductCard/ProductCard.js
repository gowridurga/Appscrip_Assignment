'use client'

import React, { useState } from 'react';
import './ProductCard.css';


const ProductCard = ({ product }) => {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const toggleWishlist = (e) => {
    e.preventDefault();
    setIsWishlisted(!isWishlisted);
  };

  const truncateTitle = (title, maxLength = 50) => {
    if (title.length <= maxLength) return title;
    return title.substring(0, maxLength) + '...';
  };

  return (
    <article className="product-card">
      <div className="product-image-container">
        
        {!imageLoaded && (
          <div className="image-skeleton"></div>
        )}
        
        <img 
          src={product.image} 
          alt={`${product.title} - ${product.category}`}
          className={`product-image ${imageLoaded ? 'loaded' : ''}`}
          loading="lazy"
          onLoad={() => setImageLoaded(true)}
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/300x400?text=No+Image';
            setImageLoaded(true);
          }}
        />

       
        <button 
          className={`wishlist-btn ${isWishlisted ? 'active' : ''}`}
          onClick={toggleWishlist}
          aria-label={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
        >
          <svg 
            width="20" 
            height="20" 
            viewBox="0 0 24 24" 
            fill={isWishlisted ? 'currentColor' : 'none'}
            stroke="currentColor" 
            strokeWidth="2"
          >
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
          </svg>
        </button>

        
        {product.rating?.count > 200 && (
          <span className="new-badge">POPULAR</span>
        )}
      </div>

      <div className="product-info">
        
        <h3 className="product-title" title={product.title}>
          {truncateTitle(product.title)}
        </h3>

        
        <div className="product-meta-top">
          <p className="product-category">
            <a href="#signin" className="signin-link">Sign in</a> or Create an account to see pricing
          </p>
        </div>

        
        <div className="product-meta-bottom">
          <div className="price-section">
            <span className="product-price">${product.price}</span>
          </div>
          
          {product.rating && (
            <div className="rating-section">
              <span className="rating-star">★</span>
              <span className="rating-value">{product.rating.rate}</span>
              <span className="rating-count">({product.rating.count})</span>
            </div>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProductCard;