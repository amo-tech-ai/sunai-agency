import React from 'react';
import { Share2 } from 'lucide-react';

const SocialMedia = () => {
  return (
    <div className="pt-32 pb-20 px-6 container mx-auto text-center">
      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
        <Share2 size={32} />
      </div>
      <h1 className="text-4xl font-display font-bold text-navy-900 mb-4">Social Media Automation</h1>
      <p className="text-gray-600 max-w-2xl mx-auto">
        AI-driven content generation and scheduling tools.
        This page is currently under construction.
      </p>
    </div>
  );
};

export default SocialMedia;