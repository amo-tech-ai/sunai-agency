import React from 'react';
import { FileText } from 'lucide-react';

const TermsOfService = () => {
  return (
    <div className="pt-32 pb-20 px-6 container mx-auto max-w-4xl">
      <div className="flex items-center gap-4 mb-8">
        <FileText className="text-primary" size={40} />
        <h1 className="text-4xl font-display font-bold text-navy-900">Terms of Service</h1>
      </div>
      <div className="prose prose-lg text-gray-600">
        <p>Last updated: {new Date().toLocaleDateString()}</p>
        <p>This page is currently under construction. It will outline the terms and conditions for using our services.</p>
      </div>
    </div>
  );
};

export default TermsOfService;