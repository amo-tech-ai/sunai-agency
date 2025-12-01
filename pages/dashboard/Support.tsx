import React from 'react';
import { LifeBuoy } from 'lucide-react';

const Support = () => {
  return (
    <div className="p-8">
      <div className="flex items-center gap-4 mb-8">
        <LifeBuoy className="text-primary" size={32} />
        <h1 className="text-3xl font-display font-bold text-navy-900">Help & Support</h1>
      </div>
      <p className="text-gray-600">Documentation and support ticketing.</p>
    </div>
  );
};

export default Support;