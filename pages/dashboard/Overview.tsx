import React from 'react';
import { 
  Users, Target, TrendingUp, CheckSquare, 
  Settings, Filter, Plus, Sparkles, Mail, Phone
} from 'lucide-react';
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, 
  Tooltip, ResponsiveContainer, PieChart as RePieChart, Pie, Cell
} from 'recharts';
import { NavigationProps } from '../../types';
import DashboardLayout from '../../components/DashboardLayout';

// Mock Data
const PIPELINE_DATA = [
  { name: 'Mon', value: 2400 },
  { name: 'Tue', value: 1398 },
  { name: 'Wed', value: 9800 },
  { name: 'Thu', value: 3908 },
  { name: 'Fri', value: 4800 },
  { name: 'Sat', value: 3800 },
  { name: 'Sun', value: 4300 },
];

const LEAD_SOURCE_DATA = [
  { name: 'Organic', value: 400, color: '#F27D24' },
  { name: 'Social', value: 300, color: '#4F6D7A' },
  { name: 'Referral', value: 300, color: '#555555' },
  { name: 'Ads', value: 200, color: '#E0E0E0' },
];

const INSIGHTS = [
  { id: 1, text: '5 Enterprise accounts show declining activity this week.', type: 'risk' },
  { id: 2, text: 'Your SMB segment is growing 15% Faster than Mid-Market.', type: 'opportunity' },
  { id: 3, text: 'Upsell opportunity detected for Design Studio based on feature usage.', type: 'opportunity' },
];

const RECENT_ACTIVITY = [
  { id: 1, company: 'Acme Corp', action: 'Discussed Q4 expansion plans', type: 'email', time: '2h ago', sentiment: 'positive' },
  { id: 2, company: 'TechStart', action: 'Onboarding follow-up call', type: 'call', time: '5h ago', sentiment: 'neutral' },
  { id: 3, company: 'Global Logistics', action: 'Quarterly Business Review', type: 'meeting', time: '1d ago', sentiment: 'negative' },
];

const DashboardOverview: React.FC<NavigationProps> = ({ onNavigate }) => {
  return (
    <DashboardLayout activePage="dashboard" onNavigate={onNavigate}>
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Header Area */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold text-navy-900">Sales Command Center</h2>
              <p className="text-gray-500 text-sm">Track customers, deals, interactions, and retention.</p>
            </div>
            <div className="flex gap-3">
              <button className="px-4 py-2 bg-white border border-gray-200 text-navy-900 text-sm font-bold rounded-md hover:bg-gray-50 transition-all flex items-center gap-2">
                  <Filter size={16} /> Filter View
              </button>
              <button className="px-4 py-2 bg-primary text-white text-sm font-bold rounded-md hover:bg-primary-hover shadow-lg transition-all flex items-center gap-2">
                  <Plus size={18} /> New Deal
              </button>
            </div>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: "Total Customers", value: "1,240", trend: "+8% vs last mo", trendColor: "text-green-600", bg: "bg-green-50", icon: Users },
              { label: "Active Accounts", value: "982", trend: "+12%", trendColor: "text-green-600", bg: "bg-green-50", icon: CheckSquare },
              { label: "Renewal Rate", value: "94.2%", trend: "+1.5%", trendColor: "text-green-600", bg: "bg-green-50", icon: TrendingUp },
              { label: "At-Risk Accounts", value: "14", trend: "+2 accounts", trendColor: "text-red-500", bg: "bg-red-50", icon: Target },
            ].map((kpi, i) => (
              <div key={i} className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-card transition-all">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-2 rounded-md ${kpi.bg} text-navy-900/70`}>
                        <kpi.icon size={20} />
                    </div>
                  </div>
                  <div className="mb-1 text-sm text-gray-500 font-medium">{kpi.label}</div>
                  <div className="flex items-end justify-between">
                    <div className="text-3xl font-bold text-navy-900">{kpi.value}</div>
                    <div className={`text-xs font-bold px-2 py-1 rounded-full ${kpi.bg} ${kpi.trendColor}`}>
                        {kpi.trend}
                    </div>
                  </div>
              </div>
            ))}
        </div>

        {/* Main Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Deal Pipeline Chart */}
            <div className="lg:col-span-2 bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                  <h3 className="font-bold text-navy-900">Deal Pipeline Velocity</h3>
                  <select className="text-xs border-gray-200 border rounded-md px-2 py-1 text-gray-500 outline-none">
                    <option>Last 30 Days</option>
                    <option>Last Quarter</option>
                  </select>
              </div>
              <div className="h-[300px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={PIPELINE_DATA} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                        <defs>
                          <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="5%" stopColor="#F27D24" stopOpacity={0.2}/>
                              <stop offset="95%" stopColor="#F27D24" stopOpacity={0}/>
                          </linearGradient>
                        </defs>
                        <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#888', fontSize: 12}} />
                        <YAxis axisLine={false} tickLine={false} tick={{fill: '#888', fontSize: 12}} />
                        <CartesianGrid vertical={false} strokeDasharray="3 3" stroke="#f0f0f0" />
                        <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }} />
                        <Area type="monotone" dataKey="value" stroke="#F27D24" strokeWidth={3} fillOpacity={1} fill="url(#colorValue)" />
                    </AreaChart>
                  </ResponsiveContainer>
              </div>
              <div className="mt-4 flex justify-between text-sm text-gray-500 border-t border-gray-100 pt-4">
                  <div>
                    <span className="block text-xs font-bold uppercase tracking-wider text-gray-400">Total Value</span>
                    <span className="font-bold text-navy-900 text-lg">$485k</span>
                  </div>
                  <div className="text-right">
                    <span className="block text-xs font-bold uppercase tracking-wider text-gray-400">Conversion</span>
                    <span className="font-bold text-green-600 text-lg">24%</span>
                  </div>
              </div>
            </div>

            {/* Lead Source Segments */}
            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm flex flex-col">
              <h3 className="font-bold text-navy-900 mb-6">Lead Segments</h3>
              <div className="flex-1 min-h-[200px] relative">
                  <ResponsiveContainer width="100%" height="100%">
                    <RePieChart>
                        <Pie
                          data={LEAD_SOURCE_DATA}
                          innerRadius={60}
                          outerRadius={80}
                          paddingAngle={5}
                          dataKey="value"
                        >
                          {LEAD_SOURCE_DATA.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                    </RePieChart>
                  </ResponsiveContainer>
                  {/* Center Text */}
                  <div className="absolute inset-0 flex items-center justify-center flex-col pointer-events-none">
                    <span className="text-2xl font-bold text-navy-900">1,200</span>
                    <span className="text-xs text-gray-500">Leads</span>
                  </div>
              </div>
              <div className="space-y-3 mt-4">
                  {LEAD_SOURCE_DATA.map((item, i) => (
                    <div key={i} className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                          <span className="text-gray-600">{item.name}</span>
                        </div>
                        <span className="font-bold text-navy-900">{((item.value / 1200) * 100).toFixed(0)}%</span>
                    </div>
                  ))}
              </div>
            </div>
        </div>

        {/* Bottom Row: AI Insights & Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* AI Insights Panel */}
            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm border-t-4 border-t-primary">
              <div className="flex items-center gap-2 mb-6">
                  <Sparkles size={20} className="text-primary" />
                  <h3 className="font-bold text-navy-900">AI Customer Insights</h3>
              </div>
              <div className="space-y-4">
                  {INSIGHTS.map((insight) => (
                    <div key={insight.id} className="flex gap-3 items-start p-3 bg-gray-50 rounded-md">
                        <div className={`mt-1 w-2 h-2 rounded-full shrink-0 ${insight.type === 'risk' ? 'bg-red-500' : 'bg-blue-500'}`}></div>
                        <p className="text-sm text-gray-600 leading-relaxed">{insight.text}</p>
                    </div>
                  ))}
              </div>
              <button className="w-full mt-6 py-2 text-sm font-bold text-primary border border-primary/20 rounded-md hover:bg-primary/5 transition-all">
                  View All Insights
              </button>
            </div>

            {/* Recent Activity Feed */}
            <div className="lg:col-span-2 bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                  <h3 className="font-bold text-navy-900">Recent Interactions</h3>
                  <span className="px-2 py-1 bg-green-50 text-green-700 text-xs font-bold rounded-full flex items-center gap-1">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span> Live
                  </span>
              </div>
              <div className="space-y-6">
                  {RECENT_ACTIVITY.map((activity) => (
                    <div key={activity.id} className="flex gap-4 items-start">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 
                          ${activity.type === 'email' ? 'bg-blue-50 text-blue-600' : 
                            activity.type === 'call' ? 'bg-purple-50 text-purple-600' : 'bg-orange-50 text-orange-600'}`}>
                          {activity.type === 'email' && <Mail size={18} />}
                          {activity.type === 'call' && <Phone size={18} />}
                          {activity.type === 'meeting' && <Users size={18} />}
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between items-start mb-1">
                              <h4 className="font-bold text-navy-900 text-sm">{activity.company}</h4>
                              <span className="text-xs text-gray-400">{activity.time}</span>
                          </div>
                          <p className="text-sm text-gray-600 mb-2">{activity.action}</p>
                          <div className="flex gap-2">
                              <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider
                                ${activity.sentiment === 'positive' ? 'bg-green-100 text-green-700' :
                                  activity.sentiment === 'negative' ? 'bg-red-100 text-red-700' : 'bg-gray-100 text-gray-600'}`}>
                                {activity.sentiment}
                              </span>
                              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-gray-100 text-gray-500 uppercase tracking-wider">
                                {activity.type}
                              </span>
                          </div>
                        </div>
                    </div>
                  ))}
              </div>
              <button className="w-full mt-6 py-2 text-sm text-gray-500 font-medium hover:text-navy-900 transition-colors">
                  View Full History
              </button>
            </div>

        </div>

        {/* Bottom Actions */}
        <div className="flex justify-end pt-4">
            <button className="flex items-center gap-2 text-sm text-gray-400 hover:text-navy-900 transition-colors">
              <Settings size={14} /> Customize Dashboard
            </button>
        </div>
        
      </div>
    </DashboardLayout>
  );
};

export default DashboardOverview;