import React from 'react';
import DashboardLayout from '../../../components/DashboardLayout';
import { NavigationProps } from '../../../types';
import { Search, Filter, MoreVertical, Phone, Mail, Calendar, Plus } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const LEADS = [
  { id: 1, name: 'Alice Smith', company: 'Nexus Tech', email: 'alice@nexus.com', status: 'New', priority: 'High', date: 'Oct 24' },
  { id: 2, name: 'Bob Jones', company: 'Summit Corp', email: 'bob@summit.com', status: 'Contacted', priority: 'Medium', date: 'Oct 23' },
  { id: 3, name: 'Charlie Day', company: 'Day Logistics', email: 'c.day@daylog.com', status: 'New', priority: 'Low', date: 'Oct 22' },
  { id: 4, name: 'Diana Prince', company: 'Amazonia', email: 'diana@amazonia.com', status: 'Qualified', priority: 'High', date: 'Oct 21' },
  { id: 5, name: 'Evan Wright', company: 'Wright Media', email: 'evan@wright.com', status: 'Contacted', priority: 'Medium', date: 'Oct 20' },
  { id: 6, name: 'Fiona Gallagher', company: 'Shameless Inc', email: 'fiona@shameless.com', status: 'Qualified', priority: 'High', date: 'Oct 19' },
];

const STATUS_DATA = [
  { name: 'New', value: 35, color: '#3B82F6' },
  { name: 'Contacted', value: 45, color: '#F27D24' },
  { name: 'Qualified', value: 20, color: '#10B981' },
];

const Leads: React.FC<NavigationProps> = ({ onNavigate }) => {
  return (
    <DashboardLayout activePage="dashboard-leads" onNavigate={onNavigate}>
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold text-navy-900">Manage Your Leads</h2>
            <p className="text-gray-500 text-sm">View and filter all your leads with their contact information and engagement history.</p>
          </div>
          <button className="px-4 py-2 bg-primary text-white text-sm font-bold rounded-md hover:bg-primary-hover shadow-lg transition-all flex items-center gap-2">
              <Plus size={18} /> Add New Lead
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            
            {/* Filters & Stats Sidebar */}
            <div className="space-y-6">
               {/* Search & Filter */}
               <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                  <div className="relative mb-4">
                     <Search className="absolute left-3 top-2.5 text-gray-400" size={16} />
                     <input type="text" placeholder="Search leads..." className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-md text-sm outline-none focus:border-primary" />
                  </div>
                  <div className="space-y-2">
                     <div className="flex items-center justify-between text-sm text-gray-600 p-2 hover:bg-gray-50 rounded cursor-pointer font-bold">
                        <span>All Leads</span>
                        <span className="bg-gray-200 text-xs px-2 py-0.5 rounded-full">142</span>
                     </div>
                     <div className="flex items-center justify-between text-sm text-gray-600 p-2 hover:bg-gray-50 rounded cursor-pointer">
                        <span>New</span>
                        <span className="bg-blue-100 text-blue-600 text-xs px-2 py-0.5 rounded-full">35</span>
                     </div>
                     <div className="flex items-center justify-between text-sm text-gray-600 p-2 hover:bg-gray-50 rounded cursor-pointer">
                        <span>Qualified</span>
                        <span className="bg-green-100 text-green-600 text-xs px-2 py-0.5 rounded-full">20</span>
                     </div>
                  </div>
                  <button className="w-full mt-4 flex items-center justify-center gap-2 text-sm font-bold text-navy-900 border border-gray-200 py-2 rounded-md hover:bg-gray-50">
                     <Filter size={16} /> Advanced Filters
                  </button>
               </div>

               {/* Chart */}
               <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                  <h3 className="font-bold text-navy-900 mb-4 text-sm">Lead Status Distribution</h3>
                  <div className="h-48">
                     <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                           <Pie 
                              data={STATUS_DATA} 
                              innerRadius={40} 
                              outerRadius={60} 
                              paddingAngle={5} 
                              dataKey="value"
                           >
                              {STATUS_DATA.map((entry, index) => (
                                 <Cell key={`cell-${index}`} fill={entry.color} />
                              ))}
                           </Pie>
                           <Tooltip />
                        </PieChart>
                     </ResponsiveContainer>
                  </div>
                  <div className="flex justify-center gap-4 text-xs mt-2">
                     {STATUS_DATA.map((item, i) => (
                        <div key={i} className="flex items-center gap-1">
                           <div className="w-2 h-2 rounded-full" style={{backgroundColor: item.color}}></div>
                           <span>{item.name}</span>
                        </div>
                     ))}
                  </div>
               </div>
            </div>

            {/* Leads Table */}
            <div className="lg:col-span-3 bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
               <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                     <thead>
                        <tr className="bg-gray-50 border-b border-gray-200 text-xs font-bold text-gray-500 uppercase tracking-wider">
                           <th className="p-4">Name</th>
                           <th className="p-4">Company</th>
                           <th className="p-4">Status</th>
                           <th className="p-4">Priority</th>
                           <th className="p-4">Added</th>
                           <th className="p-4 text-right">Actions</th>
                        </tr>
                     </thead>
                     <tbody className="text-sm divide-y divide-gray-100">
                        {LEADS.map((lead) => (
                           <tr key={lead.id} className="hover:bg-gray-50 transition-colors group">
                              <td className="p-4">
                                 <div className="font-bold text-navy-900">{lead.name}</div>
                                 <div className="text-gray-500 text-xs">{lead.email}</div>
                              </td>
                              <td className="p-4 text-gray-600">{lead.company}</td>
                              <td className="p-4">
                                 <span className={`px-2 py-1 rounded-full text-xs font-bold 
                                    ${lead.status === 'New' ? 'bg-blue-50 text-blue-600' : 
                                      lead.status === 'Contacted' ? 'bg-orange-50 text-orange-600' : 'bg-green-50 text-green-600'}`}>
                                    {lead.status}
                                 </span>
                              </td>
                              <td className="p-4">
                                 <div className="flex items-center gap-2">
                                    <div className={`w-2 h-2 rounded-full 
                                       ${lead.priority === 'High' ? 'bg-red-500' : 
                                         lead.priority === 'Medium' ? 'bg-yellow-500' : 'bg-gray-400'}`}>
                                    </div>
                                    <span className="text-gray-600">{lead.priority}</span>
                                 </div>
                              </td>
                              <td className="p-4 text-gray-500">{lead.date}</td>
                              <td className="p-4 text-right">
                                 <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <button className="p-2 text-gray-400 hover:text-primary hover:bg-primary/10 rounded-full">
                                       <Phone size={16} />
                                    </button>
                                    <button className="p-2 text-gray-400 hover:text-primary hover:bg-primary/10 rounded-full">
                                       <Mail size={16} />
                                    </button>
                                    <button className="p-2 text-gray-400 hover:text-primary hover:bg-primary/10 rounded-full">
                                       <Calendar size={16} />
                                    </button>
                                    <button className="p-2 text-gray-400 hover:text-navy-900">
                                       <MoreVertical size={16} />
                                    </button>
                                 </div>
                              </td>
                           </tr>
                        ))}
                     </tbody>
                  </table>
               </div>
               
               {/* Pagination */}
               <div className="p-4 border-t border-gray-200 flex justify-between items-center text-sm text-gray-500">
                  <span>Showing 1-6 of 142 leads</span>
                  <div className="flex gap-2">
                     <button className="px-3 py-1 border border-gray-200 rounded hover:bg-gray-50">Previous</button>
                     <button className="px-3 py-1 border border-gray-200 rounded hover:bg-gray-50">Next</button>
                  </div>
               </div>
            </div>

        </div>

      </div>
    </DashboardLayout>
  );
};

export default Leads;