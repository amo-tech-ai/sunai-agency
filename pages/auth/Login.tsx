import React from 'react';
import { Lock } from 'lucide-react';

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-beige px-6">
      <div className="bg-white p-8 rounded-xl shadow-card border border-gray-200 w-full max-w-md text-center">
        <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white mx-auto mb-6">
          <Lock size={20} />
        </div>
        <h2 className="text-2xl font-bold text-navy-900 mb-2">Welcome Back</h2>
        <p className="text-gray-500 mb-6">Please sign in to your dashboard.</p>
        <div className="p-4 bg-gray-50 rounded border border-gray-100 text-sm text-gray-500 mb-6">
            Authentication module coming soon.
        </div>
        <button className="w-full py-3 bg-primary text-white font-bold rounded-md hover:bg-primary-hover transition-all">
          Sign In
        </button>
      </div>
    </div>
  );
};

export default Login;