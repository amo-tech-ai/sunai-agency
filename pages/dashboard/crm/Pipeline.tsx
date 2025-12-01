import React from 'react';
import DashboardLayout from '../../../components/DashboardLayout';
import { NavigationProps } from '../../../types';
import { MoreHorizontal, Plus, ArrowUpRight, DollarSign, Briefcase, Calendar } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const PIPELINE_STAGES = [
  { id: 'new', name: 'New Lead', color: 'bg-blue-500', count: 12, value: '$120k' },
  { id: 'contacted', name: 'Contacted', color: 'bg-indigo-500', count: 8, value: '$85k' },
  { id: 'qualified', name: 'Qualified', color: 'bg-purple-500', count: 5, value: '$210k' },
  { id: 'proposal', name: 'Proposal', color: 'bg-orange-500', count: 3, value: '$150k' },
  { id: 'negotiation', name: 'Negotiation', color: 'bg-pink-500', count: 2, value: '$90k' },
  { id: 'closed', name: 'Closed', color: 'bg-green-500', count: 4, value: '$320k' },
];

const DEALS = [
  { id: 1, company: 'Acme Corp', value: '$45,000', owner: 'Sarah K.', stage: 'new', activity: '2h ago' },
  { id: 2, company: 'TechStart', value: '$12,500', owner: 'Mike R.', stage: 'new', activity: '5h ago' },
  { id: 3, company: 'Global Logistics', value: '$85,000', owner: 'Sarah K.', stage: 'contacted', activity: '1d ago' },
  { id: 4, company: 'Design Studio', value: '$15,000', owner: 'Jenny L.', stage: 'qualified', activity: '2d ago' },
  { id: 5, company: 'FinServe', value: '$120,000', owner: 'David B.', stage: 'proposal', activity: '1d ago' },
  { id: 6, company: 'RetailGiant', value: '$250,000', owner: 'Mike R.', stage: 'closed', activity: '1w ago' },
];

const FUNNEL_DATA = [
  { name: 'Leads', value: 100 },
  { name: 'Contacted', value: 80 },
  { name: 'Qualified', value: 50 },
  { name: 'Proposal', value: 30 },
  { name: 'Closed', value: 20 },
];

const Pipeline: React.FC<NavigationProps> = ({ onNavigate }) => {
  return (
    <DashboardLayout activePage="dashboard-pipeline" onNavigate={onNavigate}>
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold text-navy-900">Sales Pipeline Overview</h2>
            <p className="text-gray-500 text-sm">Track the progress of your leads from initial contact to closed deals.</p>
          </div>
          <div className="flex gap-3">
             <button onClick={() => onNavigate('dashboard-scoring')} className="px-4 py-2 bg-white border border-gray-200 text-navy-900 text-sm font-bold rounded-md hover:bg-gray-50 transition-all">
                Analyze Prospect
             </button>
             <button className="px-4 py-2 bg-primary text-white text-sm font-bold rounded-md hover:bg-primary-hover shadow-lg transition-all flex items-center gap-2">
                <Plus size={18} /> Add New Prospect
             </button>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
           <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
              <div className="flex items-center gap-3 mb-2">
                 <div className="p-2 bg-green-50 text-green-600 rounded-md">
                    <DollarSign size={20} />
                 </div>
                 <span className="text-sm font-bold text-gray-500 uppercase tracking-wider">Total Pipeline Value</span>
              </div>
              <div className="text-3xl font-bold text-navy-900">$975,000</div>
              <div className="text-xs text-green-600 font-bold mt-1 flex items-center gap-1">
                 <ArrowUpRight size={14} /> +12% vs last month
              </div>
           </div>

           <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
              <div className="flex items-center gap-3 mb-2">
                 <div className="p-2 bg-blue-50 text-blue-600 rounded-md">
                    <Briefcase size={20} />
                 </div>
                 <span className="text-sm font-bold text-gray-500 uppercase tracking-wider">Active Deals</span>
              </div>
              <div className="text-3xl font-bold text-navy-900">34</div>
              <div className="text-xs text-gray-400 font-medium mt-1">Across 6 stages</div>
           </div>

           <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm flex items-center justify-between">
              <div>
                 <div className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">Conversion Rate</div>
                 <div className="text-3xl font-bold text-navy-900">24%</div>
                 <div className="text-xs text-green-600 font-bold mt-1">Lead to Closed</div>
              </div>
              <div className="h-16 w-24">
                 <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={FUNNEL_DATA}>
                       <Bar dataKey="value" fill="#F27D24" radius={[2, 2, 0, 0]}>
                         {FUNNEL_DATA.map((entry, index) => (
                           <Cell key={`cell-${index}`} fillOpacity={1 - index * 0.15} />
                         ))}
                       </Bar>
                    </BarChart>
                 </ResponsiveContainer>
              </div>
           </div>
        </div>

        {/* Kanban Board */}
        <div className="overflow-x-auto pb-6">
           <div className="flex gap-6 min-w-[1200px]">
              {PIPELINE_STAGES.map((stage) => (
                 <div key={stage.id} className="flex-1 min-w-[280px]">
                    <div className="flex items-center justify-between mb-4 pb-2 border-b-2 border-gray-100">
                       <div>
                          <h4 className="font-bold text-navy-900 text-sm">{stage.name}</h4>
                          <span className="text-xs text-gray-500">{stage.value}</span>
                       </div>
                       <span className="bg-gray-100 text-gray-600 text-xs font-bold px-2 py-1 rounded-full">
                          {stage.count}
                       </span>
                    </div>

                    <div className="space-y-3">
                       {DEALS.filter(deal => deal.stage === stage.id).map((deal) => (
                          <div key={deal.id} className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm hover:shadow-md cursor-grab active:cursor-grabbing transition-all group relative">
                             <div className="flex justify-between items-start mb-2">
                                <h5 className="font-bold text-navy-900">{deal.company}</h5>
                                <button className="text-gray-400 hover:text-navy-900">
                                   <MoreHorizontal size={16} />
                                </button>
                             </div>
                             <div className="text-lg font-bold text-primary mb-3">{deal.value}</div>
                             <div className="flex items-center justify-between text-xs text-gray-500">
                                <div className="flex items-center gap-1">
                                   <div className="w-5 h-5 bg-navy-800 rounded-full text-white flex items-center justify-center text-[9px]">
                                      {deal.owner.split(' ')[0][0]}{deal.owner.split(' ')[1][0]}
                                   </div>
                                   <span>{deal.owner}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                   <Calendar size={12} /> {deal.activity}
                                </div>
                             </div>
                             
                             {/* Hover Actions */}
                             <div className="absolute inset-x-0 bottom-0 p-2 bg-gray-50 rounded-b-lg border-t border-gray-100 opacity-0 group-hover:opacity-100 transition-opacity flex justify-between">
                                <button className="text-xs font-bold text-navy-900 hover:text-primary">View Deal</button>
                                <button className="text-xs font-bold text-navy-900 hover:text-primary">Follow Up</button>
                             </div>
                          </div>
                       ))}
                       {/* Drop Area Placeholder */}
                       <div className="h-24 rounded-lg border-2 border-dashed border-gray-200 flex items-center justify-center text-gray-400 text-sm font-medium hover:bg-gray-50 hover:border-gray-300 transition-all cursor-pointer">
                          + Add Deal
                       </div>
                    </div>
                 </div>
              ))}
           </div>
        </div>

      </div>
    </DashboardLayout>
  );
};

export default Pipeline;