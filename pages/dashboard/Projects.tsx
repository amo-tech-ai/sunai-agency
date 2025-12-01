import React from 'react';
import { FolderKanban } from 'lucide-react';

const DashboardProjects = () => {
  return (
    <div className="p-8">
      <div className="flex items-center gap-4 mb-8">
        <FolderKanban className="text-primary" size={32} />
        <h1 className="text-3xl font-display font-bold text-navy-900">Active Projects</h1>
      </div>
      <p className="text-gray-600">Track ongoing development projects.</p>
      <div className="mt-8 border border-dashed border-gray-300 rounded-lg h-64 flex items-center justify-center text-gray-400">
        Project kanban placeholder
      </div>
    </div>
  );
};

export default DashboardProjects;