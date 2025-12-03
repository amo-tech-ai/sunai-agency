import React from 'react';
import DashboardLayout from '../../../components/DashboardLayout';
import { NavigationProps } from '../../../types';
import { Target, TrendingUp, Save, Eye, AlertTriangle } from 'lucide-react';
import { ScatterChart, Scatter, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';

const PROSPECTS = [
  { id: 1, name: 'Acme Corp', fit: 92, intent: 88, risk: 10, total: 90, status: 'Hot' },
  { id: 2, name: 'TechStart', fit: 65, intent: 70, risk: 30, total: 68, status: 'Warm' },
  { id: 3, name: 'Global Logistics', fit: 85, intent: 40, risk: 15, total: 62, status: 'Warm' },
  { id: 4, name: 'Design Studio', fit: 95, intent: 92, risk: 5, total: 94, status: 'Hot' },
  { id: 5, name: 'FinServe', fit: 40, intent: 30, risk: 60, total: 35, status: 'Cold' },
];

const SCATTER_DATA = [
  { x: 92, y: 88, z: 100, name: 'Acme' },
  { x: 65, y: 70, z: 200, name: 'TechStart' },
  { x: 85, y: 40, z: 150, name: 'Global' },
  { x: 95, y: 92, z: 120, name: 'Design' },
  { x: 40, y: 30, z: 80, name: 'FinServe' },
];

const Scoring: React.FC<NavigationProps> = ({ onNavigate }) => {
  return (
    <DashboardLayout activePage="dashboard-scoring" onNavigate={onNavigate}>
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold text-navy-900">Prospect Scoring</h2>
            <p className="text-gray-500 text-sm">Rank and prioritize prospects based on their fit and likelihood to convert.</p>
          </div>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
           <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm flex items-center justify-between">
              <div>
                 <div className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">Avg Lead Score</div>
                 <div className="text-3xl font-bold text-navy-900">72/100</div>
              </div>
              <div className="p-3 bg-blue-50 text-blue-600 rounded-full"><Target size={24} /></div>
           </div>
           <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm flex items-center justify-between">
              <div>
                 <div className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">High Priority</div>
                 <div className="text-3xl font-bold text-navy-900">12 Leads</div>
              </div>
              <div className="p-3 bg-green-50 text-green-600 rounded-full"><TrendingUp size={24} /></div>
           </div>
           <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm flex items-center justify-between">
              <div>
                 <div className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">At Risk</div>
                 <div className="text-3xl font-bold text-navy-900">5 Leads</div>
              </div>
              <div className="p-3 bg-red-50 text-red-600 rounded-full"><AlertTriangle size={24} /></div>
           </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Scorecard Table */}
            <div className="lg:col-span-2 bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
               <div className="p-6 border-b border-gray-200">
                  <h3 className="font-bold text-navy-900">Prospect Scorecard</h3>
               </div>
               <div className="overflow-x-auto">
                  <table className="w-full text-left">
                     <thead className="bg-gray-50 text-xs font-bold text-gray-500 uppercase tracking-wider">
                        <tr>
                           <th className="p-4">Company</th>
                           <th className="p-4">Fit Score</th>
                           <th className="p-4">Intent Score</th>
                           <th className="p-4">Total Score</th>
                           <th className="p-4">Actions</th>
                        </tr>
                     </thead>
                     <tbody className="divide-y divide-gray-100 text-sm">
                        {PROSPECTS.map((p) => (
                           <tr key={p.id} className="hover:bg-gray-50">
                              <td className="p-4 font-bold text-navy-900">{p.name}</td>
                              <td className="p-4">
                                 <div className="w-full bg-gray-100 rounded-full h-2 w-24 mb-1">
                                    <div className="bg-blue-500 h-2 rounded-full" style={{width: `${p.fit}%`}}></div>
                                 </div>
                                 <span className="text-xs text-gray-500">{p.fit}/100</span>
                              </td>
                              <td className="p-4">
                                 <div className="w-full bg-gray-100 rounded-full h-2 w-24 mb-1">
                                    <div className="bg-purple-500 h-2 rounded-full" style={{width: `${p.intent}%`}}></div>
                                 </div>
                                 <span className="text-xs text-gray-500">{p.intent}/100</span>
                              </td>
                              <td className="p-4">
                                 <span className={`font-bold px-2 py-1 rounded-full text-xs
                                    ${p.total >= 90 ? 'bg-green-100 text-green-700' : 
                                      p.total >= 60 ? 'bg-yellow-100 text-yellow-700' : 'bg-red-100 text-red-700'}`}>
                                    {p.total} ({p.status})
                                 </span>
                              </td>
                              <td className="p-4">
                                 <div className="flex gap-2">
                                    <button className="p-1.5 hover:bg-gray-200 rounded text-gray-500"><Eye size={16} /></button>
                                    <button className="p-1.5 hover:bg-gray-200 rounded text-gray-500"><Save size={16} /></button>
                                 </div>
                              </td>
                           </tr>
                        ))}
                     </tbody>
                  </table>
               </div>
            </div>

            {/* Scatter Plot */}
            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
               <h3 className="font-bold text-navy-900 mb-6">Fit vs. Intent Analysis</h3>
               <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                     <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 0 }}>
                        <CartesianGrid />
                        <XAxis type="number" dataKey="x" name="Fit" unit="%" domain={[0, 100]} label={{ value: 'Fit Score', position: 'insideBottom', offset: -10 }} />
                        <YAxis type="number" dataKey="y" name="Intent" unit="%" domain={[0, 100]} label={{ value: 'Intent Score', angle: -90, position: 'insideLeft' }} />
                        <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                        <Scatter name="Prospects" data={SCATTER_DATA} fill="#F27D24" />
                     </ScatterChart>
                  </ResponsiveContainer>
               </div>
               <p className="text-xs text-gray-500 text-center mt-4">
                  Identify high-value targets in the top-right quadrant (High Fit, High Intent).
               </p>
            </div>
        </div>

      </div>
    </DashboardLayout>
  );
};

export default Scoring;