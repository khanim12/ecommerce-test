// src/components/ExploreProducts.jsx
import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import productsData from '../data/products.json';

const SameCard = ({ category }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (productsData[category]) {
      setProducts(productsData[category]);
    }
  }, [category]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {products.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
  );
};

export default SameCard;
