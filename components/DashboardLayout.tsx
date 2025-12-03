import React, { useState } from 'react';
import { 
  LayoutDashboard, Users, GitCommit, Target, Zap, 
  Calendar, Settings, Search, Bell, 
  Menu, Briefcase, TrendingUp, Sparkles, X, LogOut
} from 'lucide-react';
import { PageName } from '../types';

interface DashboardLayoutProps {
  children: React.ReactNode;
  activePage: PageName;
  onNavigate: (page: PageName, hash?: string) => void;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children, activePage, onNavigate }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const NavItem = ({ page, icon: Icon, label, hash }: { page: PageName; icon: React.ElementType; label: string, hash?: string }) => {
    const isActive = activePage === page;
    return (
      <button 
        onClick={() => onNavigate(page, hash)}
        className={`flex items-center gap-3 w-full px-3 py-2 text-sm font-medium rounded-md transition-colors ${
          isActive 
            ? 'bg-primary/10 text-primary' 
            : 'text-gray-600 hover:bg-gray-50 hover:text-navy-900'
        }`}
      >
        <Icon size={18} /> {label}
      </button>
    );
  };

  return (
    <div className="flex h-screen bg-gray-50 font-sans overflow-hidden">
      
      {/* Sidebar Navigation */}
      <aside 
        className={`
          fixed inset-y-0 left-0 z-30 w-64 bg-white border-r border-gray-200 transform transition-transform duration-300 ease-in-out
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
          lg:relative lg:translate-x-0 flex flex-col
        `}
      >
        {/* Sidebar Header */}
        <div className="h-16 flex items-center justify-between px-6 border-b border-gray-100">
           <div 
             onClick={() => onNavigate('home')}
             className="flex items-center gap-2 font-display font-bold text-xl text-navy-900 cursor-pointer"
           >
             <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center text-white">
               <Zap size={18} />
             </div>
             Sunai <span className="text-gray-400 font-normal text-xs ml-1">Workspace</span>
           </div>
           <button onClick={() => setSidebarOpen(false)} className="lg:hidden text-gray-400">
             <X size={20} />
           </button>
        </div>

        {/* Navigation Links */}
        <div className="flex-1 overflow-y-auto py-6 px-4 space-y-8 custom-scrollbar">
          
          {/* Section: Overview */}
          <div>
            <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3 px-2">Overview</div>
            <nav className="space-y-1">
              <NavItem page="dashboard" icon={LayoutDashboard} label="Dashboard" />
              {/* Placeholders for future pages */}
              <button className="flex items-center gap-3 w-full px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-50 hover:text-navy-900 transition-colors">
                <TrendingUp size={18} /> Financial Overview
              </button>
              <button className="flex items-center gap-3 w-full px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-50 hover:text-navy-900 transition-colors">
                <Users size={18} /> User Growth
              </button>
            </nav>
          </div>

          {/* Section: Sales & CRM */}
          <div>
            <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3 px-2">Sales & CRM</div>
            <nav className="space-y-1">
              <NavItem page="dashboard-leads" icon={Users} label="Leads" />
              <NavItem page="dashboard-pipeline" icon={GitCommit} label="Pipeline" />
              <NavItem page="dashboard-outreach" icon={Sparkles} label="Outreach" />
              <NavItem page="dashboard-scoring" icon={Target} label="Prospect Scoring" />
              <NavItem page="dashboard-prospecting" icon={Briefcase} label="AI Prospecting" />
            </nav>
          </div>

          {/* Section: System */}
          <div>
             <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3 px-2">System</div>
             <nav className="space-y-1">
               <button className="flex items-center gap-3 w-full px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-50 hover:text-navy-900 transition-colors">
                 <Calendar size={18} /> Calendar & Tasks
               </button>
               <button className="flex items-center gap-3 w-full px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-50 hover:text-navy-900 transition-colors">
                 <Settings size={18} /> Settings
               </button>
             </nav>
          </div>
        </div>

        {/* User Profile Snippet */}
        <div className="p-4 border-t border-gray-100">
          <div className="flex items-center gap-3">
             <div className="w-10 h-10 rounded-full bg-navy-800 text-white flex items-center justify-center font-bold">JD</div>
             <div className="flex-1 min-w-0">
                <p className="text-sm font-bold text-navy-900 truncate">John Doe</p>
                <p className="text-xs text-gray-500 truncate">Pro Workspace</p>
             </div>
             <LogOut size={16} className="text-gray-400 cursor-pointer hover:text-navy-900" />
          </div>
        </div>
      </aside>

      {/* Main Content Wrapper */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        
        {/* Top Header */}
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6 lg:px-8">
          <div className="flex items-center gap-4">
             <button onClick={() => setSidebarOpen(!sidebarOpen)} className="lg:hidden text-gray-500">
                <Menu size={24} />
             </button>
             <h1 className="text-xl font-display font-bold text-navy-900 hidden sm:block">
                {activePage === 'dashboard' && 'Dashboard Overview'}
                {activePage === 'dashboard-pipeline' && 'Sales Pipeline'}
                {activePage === 'dashboard-leads' && 'Leads Management'}
                {activePage === 'dashboard-outreach' && 'Outreach Tracking'}
                {activePage === 'dashboard-scoring' && 'Prospect Scoring'}
                {activePage === 'dashboard-prospecting' && 'AI Prospecting'}
             </h1>
          </div>

          <div className="flex items-center gap-6">
             <div className="hidden md:flex items-center bg-gray-50 border border-gray-200 rounded-md px-3 py-2 w-64 focus-within:ring-2 focus-within:ring-primary/20 transition-all">
                <Search size={16} className="text-gray-400 mr-2" />
                <input 
                  type="text" 
                  placeholder="Global Search..." 
                  className="bg-transparent border-none outline-none text-sm text-navy-900 w-full placeholder-gray-400"
                />
             </div>
             <button className="relative text-gray-400 hover:text-navy-900 transition-colors">
                <Bell size={20} />
                <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
             </button>
             <button 
                onClick={() => onNavigate('home')}
                className="hidden md:block px-4 py-2 text-sm font-bold text-primary border border-primary/20 rounded-md hover:bg-primary/5 transition-all"
             >
                View Live Site
             </button>
          </div>
        </header>

        {/* Scrollable Content Area */}
        <main className="flex-1 overflow-y-auto p-6 lg:p-8 custom-scrollbar">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;