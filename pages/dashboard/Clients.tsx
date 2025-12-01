import React from 'react';
import { Briefcase } from 'lucide-react';

const Clients = () => {
  return (
    <div className="p-8">
      <div className="flex items-center gap-4 mb-8">
        <Briefcase className="text-primary" size={32} />
        <h1 className="text-3xl font-display font-bold text-navy-900">Client Directory</h1>
      </div>
      <p className="text-gray-600">Manage client profiles and contracts.</p>
    </div>
  );
};

export default Clients;