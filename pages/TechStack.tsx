import React from 'react';
import { Layers } from 'lucide-react';

const TechStack = () => {
  return (
    <div className="pt-32 pb-20 px-6 container mx-auto text-center">
      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
        <Layers size={32} />
      </div>
      <h1 className="text-4xl font-display font-bold text-navy-900 mb-4">Our Tech Stack</h1>
      <p className="text-gray-600 max-w-2xl mx-auto">
        We use the latest technologies including React, Node.js, Python, and Gemini models.
        This page is currently under construction.
      </p>
    </div>
  );
};

export default TechStack;