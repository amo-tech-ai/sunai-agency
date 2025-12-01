import React from 'react';
import { Settings as SettingsIcon } from 'lucide-react';

const Settings = () => {
  return (
    <div className="p-8">
      <div className="flex items-center gap-4 mb-8">
        <SettingsIcon className="text-primary" size={32} />
        <h1 className="text-3xl font-display font-bold text-navy-900">System Settings</h1>
      </div>
      <p className="text-gray-600">Configure platform preferences and integrations.</p>
    </div>
  );
};

export default Settings;