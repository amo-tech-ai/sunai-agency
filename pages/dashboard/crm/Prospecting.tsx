import React, { useState } from 'react';
import DashboardLayout from '../../../components/DashboardLayout';
import { NavigationProps } from '../../../types';
import { Briefcase, Sparkles, Filter, Save, Plus, BarChart3 } from 'lucide-react';

const GENERATED_LEADS = [
  { id: 1, name: 'Sarah Connor', company: 'Skynet Cyber', score: 98, industry: 'Tech', match: 'High' },
  { id: 2, name: 'John Matrix', company: 'Commando Logistics', score: 95, industry: 'Logistics', match: 'High' },
  { id: 3, name: 'Dutch Schaefer', company: 'Predator Hunting', score: 88, industry: 'Services', match: 'Medium' },
  { id: 4, name: 'Ellen Ripley', company: 'Nostromo Mining', score: 92, industry: 'Industrial', match: 'High' },
];

const Prospecting: React.FC<NavigationProps> = ({ onNavigate }) => {
  const [loading, setLoading] = useState(false);

  return (
    <DashboardLayout activePage="dashboard-prospecting" onNavigate={onNavigate}>
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
               <Sparkles className="text-primary" size={20} />
               <h2 className="text-2xl font-bold text-navy-900">AI-Powered Prospecting</h2>
            </div>
            <p className="text-gray-500 text-sm">Find the best leads matching your Ideal Customer Profile (ICP) instantly.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Left: ICP Form */}
            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm h-fit">
               <h3 className="font-bold text-navy-900 mb-6 flex items-center gap-2">
                  <Filter size={18} /> Define Target Profile
               </h3>
               <form className="space-y-4">
                  <div>
                     <label className="block text-sm font-bold text-gray-700 mb-1">Industry</label>
                     <select className="w-full p-2 bg-gray-50 border border-gray-200 rounded-md text-sm outline-none focus:border-primary">
                        <option>SaaS / Technology</option>
                        <option>Healthcare</option>
                        <option>Finance</option>
                        <option>E-commerce</option>
                     </select>
                  </div>
                  <div>
                     <label className="block text-sm font-bold text-gray-700 mb-1">Company Size</label>
                     <select className="w-full p-2 bg-gray-50 border border-gray-200 rounded-md text-sm outline-none focus:border-primary">
                        <option>11 - 50 Employees</option>
                        <option>51 - 200 Employees</option>
                        <option>201 - 500 Employees</option>
                        <option>Enterprise (500+)</option>
                     </select>
                  </div>
                  <div>
                     <label className="block text-sm font-bold text-gray-700 mb-1">Region</label>
                     <input type="text" placeholder="e.g. North America, EMEA" className="w-full p-2 bg-gray-50 border border-gray-200 rounded-md text-sm outline-none focus:border-primary" />
                  </div>
                  <div>
                     <label className="block text-sm font-bold text-gray-700 mb-1">Job Title Keywords</label>
                     <input type="text" placeholder="e.g. CTO, VP of Sales" className="w-full p-2 bg-gray-50 border border-gray-200 rounded-md text-sm outline-none focus:border-primary" />
                  </div>
                  <button type="button" className="w-full py-3 bg-primary text-white font-bold rounded-md hover:bg-primary-hover shadow-lg transition-all flex items-center justify-center gap-2 mt-4">
                     <Sparkles size={16} /> Generate Leads
                  </button>
               </form>
            </div>

            {/* Right: Results */}
            <div className="lg:col-span-2 space-y-6">
               
               {/* Stats Row */}
               <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm flex items-center justify-between">
                     <div>
                        <div className="text-xs font-bold text-gray-500 uppercase">Matches Found</div>
                        <div className="text-2xl font-bold text-navy-900">42</div>
                     </div>
                     <BarChart3 className="text-primary" size={24} />
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm flex items-center justify-between">
                     <div>
                        <div className="text-xs font-bold text-gray-500 uppercase">Avg Match Score</div>
                        <div className="text-2xl font-bold text-navy-900">93%</div>
                     </div>
                     <Target className="text-green-600" size={24} />
                  </div>
               </div>

               {/* Results List */}
               <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
                  <div className="p-4 border-b border-gray-200 bg-gray-50 flex justify-between items-center">
                     <h3 className="font-bold text-navy-900">AI Generated Leads</h3>
                     <span className="text-xs text-gray-500">Based on your criteria</span>
                  </div>
                  <div className="divide-y divide-gray-100">
                     {GENERATED_LEADS.map((lead) => (
                        <div key={lead.id} className="p-4 hover:bg-gray-50 transition-colors flex flex-col sm:flex-row items-center justify-between gap-4">
                           <div className="flex-1">
                              <div className="flex items-center gap-2">
                                 <h4 className="font-bold text-navy-900">{lead.name}</h4>
                                 <span className="px-2 py-0.5 bg-green-100 text-green-700 text-[10px] font-bold rounded-full uppercase">
                                    {lead.score} Match
                                 </span>
                              </div>
                              <p className="text-sm text-gray-600">{lead.company} • {lead.industry}</p>
                              <p className="text-xs text-gray-400 mt-1">AI Insight: High intent signals detected from recent funding news.</p>
                           </div>
                           <div className="flex gap-2">
                              <button className="px-3 py-1.5 border border-gray-200 text-gray-600 text-sm font-medium rounded hover:bg-white hover:border-primary hover:text-primary transition-colors flex items-center gap-1">
                                 <Save size={14} /> Save
                              </button>
                              <button className="px-3 py-1.5 bg-navy-900 text-white text-sm font-medium rounded hover:bg-navy-800 transition-colors flex items-center gap-1">
                                 <Plus size={14} /> Pipeline
                              </button>
                           </div>
                        </div>
                     ))}
                  </div>
                  <div className="p-4 border-t border-gray-200 text-center">
                     <button className="text-sm font-bold text-primary hover:underline">Load More Results</button>
                  </div>
               </div>

            </div>
        </div>

      </div>
    </DashboardLayout>
  );
};

// Quick helper icon for the metric
function Target({ className, size }: { className?: string, size?: number }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
            <circle cx="12" cy="12" r="10"></circle>
            <circle cx="12" cy="12" r="6"></circle>
            <circle cx="12" cy="12" r="2"></circle>
        </svg>
    )
}

export default Prospecting;