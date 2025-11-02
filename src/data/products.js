export const API_BASE_URL = 'https://fakestoreapi.com';

export const API_ENDPOINTS = {
  getAllProducts: `${API_BASE_URL}/products`,
  getProduct: (id) => `${API_BASE_URL}/products/${id}`,
  getCategories: `${API_BASE_URL}/products/categories`,
  getProductsByCategory: (category) => `${API_BASE_URL}/products/category/${category}`,
  getLimitedProducts: (limit) => `${API_BASE_URL}/products?limit=${limit}`,
  getSortedProducts: (sort) => `${API_BASE_URL}/products?sort=${sort}`, // 'asc' or 'desc'
};


export const fetchAllProducts = async () => {
  try {
    const response = await fetch(API_ENDPOINTS.getAllProducts);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};


export const fetchProductById = async (id) => {
  try {
    const response = await fetch(API_ENDPOINTS.getProduct(id));
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error(`Error fetching product ${id}:`, error);
    throw error;
  }
};


export const fetchCategories = async () => {
  try {
    const response = await fetch(API_ENDPOINTS.getCategories);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching categories:', error);
    throw error;
  }
};


export const fetchProductsByCategory = async (category) => {
  try {
    const response = await fetch(API_ENDPOINTS.getProductsByCategory(category));
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error(`Error fetching products for category ${category}:`, error);
    throw error;
  }
};


export const fetchLimitedProducts = async (limit = 10) => {
  try {
    const response = await fetch(API_ENDPOINTS.getLimitedProducts(limit));
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error(`Error fetching limited products:`, error);
    throw error;
  }
};


export const sortProducts = (products, sortBy) => {
  const sorted = [...products];
  switch (sortBy) {
    case 'price-low':
      return sorted.sort((a, b) => a.price - b.price);
    case 'price-high':
      return sorted.sort((a, b) => b.price - a.price);
    case 'name-asc':
      return sorted.sort((a, b) => a.title.localeCompare(b.title));
    case 'name-desc':
      return sorted.sort((a, b) => b.title.localeCompare(a.title));
    case 'rating-high':
      return sorted.sort((a, b) => (b.rating?.rate || 0) - (a.rating?.rate || 0));
    case 'rating-low':
      return sorted.sort((a, b) => (a.rating?.rate || 0) - (b.rating?.rate || 0));
    case 'popular':
      return sorted.sort((a, b) => (b.rating?.count || 0) - (a.rating?.count || 0));
    default:
      return sorted;
  }
};


export const filterProductsByCategory = (products, category) => {
  if (!category || category === 'all') return products;
  return products.filter((p) => p.category === category);
};

export const filterProductsByPrice = (products, min, max) =>
  products.filter((p) => p.price >= min && p.price <= max);

export const filterProductsByRating = (products, min) =>
  products.filter((p) => (p.rating?.rate || 0) >= min);

export const searchProducts = (products, term) => {
  if (!term) return products;
  const lower = term.toLowerCase();
  return products.filter(
    (p) =>
      p.title.toLowerCase().includes(lower) ||
      p.description.toLowerCase().includes(lower) ||
      p.category.toLowerCase().includes(lower)
  );
};


export const getUniqueCategories = (products) => ['all', ...new Set(products.map((p) => p.category))];

export const getPriceRange = (products) => {
  if (!products.length) return { min: 0, max: 0 };
  const prices = products.map((p) => p.price);
  return { min: Math.floor(Math.min(...prices)), max: Math.ceil(Math.max(...prices)) };
};

export const formatProduct = (p) => ({
  ...p,
  formattedPrice: `$${p.price.toFixed(2)}`,
  shortTitle: p.title.length > 50 ? `${p.title.substring(0, 50)}...` : p.title,
  shortDescription: p.description.length > 100 ? `${p.description.substring(0, 100)}...` : p.description,
  rating: {
    rate: p.rating?.rate || 0,
    count: p.rating?.count || 0,
    stars: Math.round(p.rating?.rate || 0),
  },
});


export const mockProducts = [
  {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack",
    price: 109.95,
    description: "Your perfect pack for everyday use",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    rating: { rate: 3.9, count: 120 },
  },
  {
    id: 2,
    title: "Mens Casual Premium Slim Fit T-Shirts",
    price: 22.3,
    description: "Slim-fitting style, contrast raglan long sleeve",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    rating: { rate: 4.1, count: 259 },
  },
  {
    id: 3,
    title: "Mens Cotton Jacket",
    price: 55.99,
    description: "Great outerwear jackets for Spring/Autumn/Winter",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    rating: { rate: 4.7, count: 500 },
  },
];


const productsUtils = {
  API_ENDPOINTS,
  fetchAllProducts,
  fetchProductById,
  fetchCategories,
  fetchProductsByCategory,
  fetchLimitedProducts,
  sortProducts,
  filterProductsByCategory,
  filterProductsByPrice,
  filterProductsByRating,
  searchProducts,
  getUniqueCategories,
  getPriceRange,
  formatProduct,
  mockProducts,
};


export default productsUtils;
