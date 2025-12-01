import React from 'react';
import { DollarSign } from 'lucide-react';

const Financials = () => {
  return (
    <div className="p-8">
      <div className="flex items-center gap-4 mb-8">
        <DollarSign className="text-primary" size={32} />
        <h1 className="text-3xl font-display font-bold text-navy-900">Financials</h1>
      </div>
      <p className="text-gray-600">Invoicing, revenue tracking, and expenses.</p>
    </div>
  );
};

export default Financials;