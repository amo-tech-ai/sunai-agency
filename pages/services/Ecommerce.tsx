import React from 'react';
import { ShoppingCart } from 'lucide-react';

const Ecommerce = () => {
  return (
    <div className="pt-32 pb-20 px-6 container mx-auto text-center">
      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
        <ShoppingCart size={32} />
      </div>
      <h1 className="text-4xl font-display font-bold text-navy-900 mb-4">E-commerce Solutions</h1>
      <p className="text-gray-600 max-w-2xl mx-auto">
        Intelligent shopping experiences and inventory management.
        This page is currently under construction.
      </p>
    </div>
  );
};

export default Ecommerce;