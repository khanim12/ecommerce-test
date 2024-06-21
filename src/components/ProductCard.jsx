// src/components/ProductCard.jsx
import React from "react";

const ProductCard = ({ product }) => {
  const imageSrc = require(`../../assets/images/${product.icon}.png`).default;

  return (
    <div className="border p-4 rounded shadow hover:shadow-lg transition">
      <div className="relative">
        <img src={imageSrc} alt={product.name} className="w-full h-40 object-cover rounded" />
        {product.discount && (
          <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
            -{product.discount}
          </span>
        )}
        {product.new && (
          <span className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded">
            NEW
          </span>
        )}
        <div className="absolute top-2 right-2 flex space-x-2">
          <button className="bg-white rounded-full p-1 shadow">
            <i className="far fa-heart text-gray-600"></i>
          </button>
          <button className="bg-white rounded-full p-1 shadow">
            <i className="far fa-eye text-gray-600"></i>
          </button>
        </div>
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-bold">{product.name}</h3>
        <div className="flex items-center space-x-2 mt-2">
          <span className="text-xl font-semibold text-red-500">{product.price}</span>
          {product.originalPrice && (
            <span className="text-sm text-gray-500 line-through">{product.originalPrice}</span>
          )}
        </div>
        <div className="flex items-center mt-2">
          <div className="flex items-center">
            {Array(Math.floor(product.rating))
              .fill()
              .map((_, i) => (
                <i key={i} className="fas fa-star text-yellow-500"></i>
              ))}
            {product.rating % 1 !== 0 && <i className="fas fa-star-half-alt text-yellow-500"></i>}
          </div>
          <span className="ml-2 text-gray-600">{product.reviews}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
