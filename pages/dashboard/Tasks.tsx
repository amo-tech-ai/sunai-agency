import React from 'react';
import { CheckSquare } from 'lucide-react';

const Tasks = () => {
  return (
    <div className="p-8">
      <div className="flex items-center gap-4 mb-8">
        <CheckSquare className="text-primary" size={32} />
        <h1 className="text-3xl font-display font-bold text-navy-900">Tasks & Todos</h1>
      </div>
      <p className="text-gray-600">Personal and team task management.</p>
    </div>
  );
};

export default Tasks;