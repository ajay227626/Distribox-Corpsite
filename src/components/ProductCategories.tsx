import React, { useState } from 'react';
import { sampleProducts } from '../data/products';
import { Product } from '../types';

const ProductCategories: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'mens' | 'womens' | 'kids'>('mens');

  const categories = [
    { id: 'mens' as const, label: "Men's Collection", color: 'bg-blue-600' },
    { id: 'womens' as const, label: "Women's Collection", color: 'bg-pink-600' },
    { id: 'kids' as const, label: "Kids' Collection", color: 'bg-green-600' }
  ];

  const filteredProducts = sampleProducts.filter(product => product.category === activeCategory);

  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="text-amber-600 font-semibold text-lg">Our Product Range</div>
          <h2 className="text-4xl font-bold text-gray-900">
            Premium Fashion Collections
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our extensive range of wholesale fashion apparel designed for modern retailers. 
            Quality guaranteed, trends updated regularly.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 ${
                activeCategory === category.id
                  ? `${category.color} text-white shadow-lg`
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="w-full bg-amber-500 hover:bg-amber-600 py-2 px-4 rounded-lg font-semibold transition-colors duration-200">
                    View Details
                  </button>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{product.description}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-amber-600 font-semibold">Wholesale Available</span>
                  <div className="flex items-center space-x-1">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-xs text-gray-500">In Stock</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4">Need Custom Requirements?</h3>
            <p className="text-blue-100 mb-6">
              We offer customized solutions for bulk orders, private labeling, and specific design requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-amber-500 hover:bg-amber-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200">
                Request Catalog
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-blue-800 font-semibold py-3 px-8 rounded-lg transition-all duration-200">
                Get Bulk Pricing
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;