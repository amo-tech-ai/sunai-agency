import React from 'react';
import { FileText } from 'lucide-react';

const Briefs = () => {
  return (
    <div className="p-8">
      <div className="flex items-center gap-4 mb-8">
        <FileText className="text-primary" size={32} />
        <h1 className="text-3xl font-display font-bold text-navy-900">Project Briefs</h1>
      </div>
      <p className="text-gray-600">Manage and view generated AI briefs here.</p>
      <div className="mt-8 border border-dashed border-gray-300 rounded-lg h-64 flex items-center justify-center text-gray-400">
        Briefs list placeholder
      </div>
    </div>
  );
};

export default Briefs;