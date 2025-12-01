import React from 'react';
import { AlertTriangle } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-beige px-6 text-center">
      <AlertTriangle className="text-primary mb-6" size={64} />
      <h1 className="text-4xl font-bold text-navy-900 mb-4">404 - Page Not Found</h1>
      <p className="text-gray-600 mb-8">The page you are looking for does not exist.</p>
      <a href="/" className="px-6 py-3 bg-navy-900 text-white font-bold rounded-md hover:bg-navy-700 transition-all">
        Return Home
      </a>
    </div>
  );
};

export default NotFound;