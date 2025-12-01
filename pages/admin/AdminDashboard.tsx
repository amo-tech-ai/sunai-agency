import React from 'react';
import { ShieldAlert } from 'lucide-react';

const AdminDashboard = () => {
  return (
    <div className="p-8 bg-gray-900 min-h-screen text-white">
      <div className="flex items-center gap-4 mb-8">
        <ShieldAlert className="text-red-500" size={32} />
        <h1 className="text-3xl font-display font-bold">Admin Control Panel</h1>
      </div>
      <p className="text-gray-400">System-wide administration and user management.</p>
    </div>
  );
};

export default AdminDashboard;