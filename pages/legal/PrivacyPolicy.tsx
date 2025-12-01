import React from 'react';
import { Shield } from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <div className="pt-32 pb-20 px-6 container mx-auto max-w-4xl">
      <div className="flex items-center gap-4 mb-8">
        <Shield className="text-primary" size={40} />
        <h1 className="text-4xl font-display font-bold text-navy-900">Privacy Policy</h1>
      </div>
      <div className="prose prose-lg text-gray-600">
        <p>Last updated: {new Date().toLocaleDateString()}</p>
        <p>This page is currently under construction. It will contain details about how we collect, use, and protect your data.</p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;