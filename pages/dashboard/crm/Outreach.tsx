import React from 'react';
import DashboardLayout from '../../../components/DashboardLayout';
import { NavigationProps } from '../../../types';
import { Send, Phone, Mail, Calendar, CheckCircle2, XCircle, Clock } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';

const OUTREACH_HISTORY = [
  { id: 1, lead: 'Alice Smith', type: 'Call', outcome: 'Scheduled Follow-up', date: 'Oct 24, 10:00 AM', status: 'success' },
  { id: 2, lead: 'Bob Jones', type: 'Email', outcome: 'No Response', date: 'Oct 24, 09:15 AM', status: 'neutral' },
  { id: 3, lead: 'Charlie Day', type: 'Email', outcome: 'Interested', date: 'Oct 23, 02:30 PM', status: 'success' },
  { id: 4, lead: 'Diana Prince', type: 'Meeting', outcome: 'Proposal Sent', date: 'Oct 23, 11:00 AM', status: 'success' },
  { id: 5, lead: 'Evan Wright', type: 'Call', outcome: 'Left Voicemail', date: 'Oct 22, 04:45 PM', status: 'neutral' },
];

const ACTIVITY_DATA = [
  { name: 'Mon', calls: 12, emails: 45 },
  { name: 'Tue', calls: 18, emails: 52 },
  { name: 'Wed', calls: 15, emails: 38 },
  { name: 'Thu', calls: 22, emails: 60 },
  { name: 'Fri', calls: 20, emails: 48 },
];

const Outreach: React.FC<NavigationProps> = ({ onNavigate }) => {
  return (
    <DashboardLayout activePage="dashboard-outreach" onNavigate={onNavigate}>
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold text-navy-900">Track Outreach Efforts</h2>
            <p className="text-gray-500 text-sm">Manage all outreach efforts including calls, emails, and meetings.</p>
          </div>
          <div className="flex gap-3">
             <button className="px-4 py-2 bg-white border border-gray-200 text-navy-900 text-sm font-bold rounded-md hover:bg-gray-50 transition-all flex items-center gap-2">
                <Calendar size={16} /> Schedule Follow-Up
             </button>
             <button className="px-4 py-2 bg-primary text-white text-sm font-bold rounded-md hover:bg-primary-hover shadow-lg transition-all flex items-center gap-2">
                <Send size={18} /> Log New Outreach
             </button>
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
           <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
              <div className="flex items-center gap-3 mb-2">
                 <div className="p-2 bg-blue-50 text-blue-600 rounded-md"><Phone size={20} /></div>
                 <span className="text-sm font-bold text-gray-500 uppercase tracking-wider">Calls Made</span>
              </div>
              <div className="text-3xl font-bold text-navy-900">87</div>
              <div className="text-xs text-green-600 font-bold mt-1">This Week</div>
           </div>
           <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
              <div className="flex items-center gap-3 mb-2">
                 <div className="p-2 bg-orange-50 text-orange-600 rounded-md"><Mail size={20} /></div>
                 <span className="text-sm font-bold text-gray-500 uppercase tracking-wider">Emails Sent</span>
              </div>
              <div className="text-3xl font-bold text-navy-900">243</div>
              <div className="text-xs text-green-600 font-bold mt-1">This Week</div>
           </div>
           <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
              <div className="flex items-center gap-3 mb-2">
                 <div className="p-2 bg-green-50 text-green-600 rounded-md"><CheckCircle2 size={20} /></div>
                 <span className="text-sm font-bold text-gray-500 uppercase tracking-wider">Success Rate</span>
              </div>
              <div className="text-3xl font-bold text-navy-900">18.5%</div>
              <div className="text-xs text-gray-400 font-medium mt-1">Conversion to Meeting</div>
           </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* Activity Chart */}
            <div className="lg:col-span-2 bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
               <h3 className="font-bold text-navy-900 mb-6">Weekly Activity Volume</h3>
               <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                     <BarChart data={ACTIVITY_DATA}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                        <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#888', fontSize: 12}} />
                        <YAxis axisLine={false} tickLine={false} tick={{fill: '#888', fontSize: 12}} />
                        <Tooltip cursor={{fill: 'transparent'}} contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }} />
                        <Bar dataKey="calls" name="Calls" fill="#3B82F6" radius={[4, 4, 0, 0]} />
                        <Bar dataKey="emails" name="Emails" fill="#F27D24" radius={[4, 4, 0, 0]} />
                     </BarChart>
                  </ResponsiveContainer>
               </div>
            </div>

            {/* Recent History List */}
            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm flex flex-col">
               <h3 className="font-bold text-navy-900 mb-4">Recent Outreach</h3>
               <div className="flex-1 overflow-y-auto space-y-4 custom-scrollbar pr-2 max-h-[300px]">
                  {OUTREACH_HISTORY.map((item) => (
                     <div key={item.id} className="p-3 border border-gray-100 rounded-md bg-gray-50/50 hover:bg-white hover:shadow-sm transition-all">
                        <div className="flex justify-between items-start mb-1">
                           <span className="font-bold text-navy-900 text-sm">{item.lead}</span>
                           <span className="text-[10px] text-gray-400">{item.date.split(',')[1]}</span>
                        </div>
                        <div className="flex items-center gap-2 mb-2">
                           <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded text-white ${item.type === 'Call' ? 'bg-blue-500' : item.type === 'Email' ? 'bg-orange-500' : 'bg-purple-500'}`}>
                              {item.type}
                           </span>
                           <span className="text-xs text-gray-600">{item.outcome}</span>
                        </div>
                        <div className={`text-xs flex items-center gap-1 ${item.status === 'success' ? 'text-green-600' : 'text-gray-400'}`}>
                           {item.status === 'success' ? <CheckCircle2 size={12} /> : <Clock size={12} />}
                           {item.status === 'success' ? 'Positive Outcome' : 'Pending'}
                        </div>
                     </div>
                  ))}
               </div>
               <button className="w-full mt-4 py-2 text-sm font-bold text-navy-900 border border-gray-200 rounded-md hover:bg-gray-50">
                  View Full History
               </button>
            </div>
        </div>

      </div>
    </DashboardLayout>
  );
};

export default Outreach;