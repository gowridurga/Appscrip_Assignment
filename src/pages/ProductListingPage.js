'use client';

import React, { useState, useEffect } from 'react';
import Header from '../components/Header/Header';
import Filters from '../components/Filters/Filters';
import ProductCard from '../components/ProductCard/ProductCard';
import Footer from '../components/Footer/Footer';
import './ProductListingPage.css';

const ProductListingPage = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showFilters, setShowFilters] = useState(true);
  const [sortBy, setSortBy] = useState('recommended');
  const [error, setError] = useState(null);

  // ✅ Fetch products from API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://fakestoreapi.com/products');

        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }

        const data = await response.json();
        setProducts(data);
        setFilteredProducts(data);
        setError(null);
      } catch (err) {
        console.error('Error fetching products:', err);
        setError('Failed to load products. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // ✅ Handle sorting
  const handleSort = (value) => {
    setSortBy(value);
    let sorted = [...filteredProducts];

    switch (value) {
      case 'price-low':
        sorted.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        sorted.sort((a, b) => b.price - a.price);
        break;
      case 'name':
        sorted.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case 'popular':
        sorted.sort((a, b) => b.rating.count - a.rating.count);
        break;
      default:
        break; // recommended — no change
    }

    setFilteredProducts(sorted);
  };

  // ✅ Handle filters (customize later)
  const handleFilterChange = (filterType, value, checked) => {
    console.log('Filter changed:', filterType, value, checked);
    // Add filtering logic here
  };

  return (
    <div className="product-listing-page">
      <Header />

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">DISCOVER OUR PRODUCTS</h1>
          <p className="hero-description">
            Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
            scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="main-content">
        <div className="content-container">
          {/* Filter Bar */}
          <div className="filter-bar">
            <div className="filter-bar-left">
              <span className="item-count">{filteredProducts.length} ITEMS</span>
              <button
                className="filter-toggle-btn"
                onClick={() => setShowFilters(!showFilters)}
              >
                <span className="toggle-icon">
                  {showFilters ? '←' : '→'}
                </span>
                {showFilters ? 'HIDE FILTER' : 'SHOW FILTER'}
              </button>
            </div>

            <div className="filter-bar-right">
              <select
                className="sort-select"
                value={sortBy}
                onChange={(e) => handleSort(e.target.value)}
              >
                <option value="recommended">RECOMMENDED</option>
                <option value="name">NEWEST FIRST</option>
                <option value="popular">POPULAR</option>
                <option value="price-high">PRICE: HIGH TO LOW</option>
                <option value="price-low">PRICE: LOW TO HIGH</option>
              </select>
            </div>
          </div>

          {/* Content Grid */}
          <div className={`content-grid ${!showFilters ? 'full-width' : ''}`}>
            {/* Filters Sidebar */}
            {showFilters && <Filters onFilterChange={handleFilterChange} />}

            {/* Products Section */}
            <section className="products-section">
              {loading ? (
                <div className="loading-state">
                  <div className="spinner"></div>
                  <p>Loading products...</p>
                </div>
              ) : error ? (
                <div className="error-state">
                  <p>{error}</p>
                  <button
                    className="retry-btn"
                    onClick={() => window.location.reload()}
                  >
                    Retry
                  </button>
                </div>
              ) : (
                <div className="products-grid">
                  {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              )}
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProductListingPage;
