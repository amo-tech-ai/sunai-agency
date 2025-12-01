import React, { useState, useEffect } from 'react';
import BriefGenerator from './components/BriefGenerator';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Process from './pages/Process';
import Projects from './pages/Projects';
import WhatsApp from './pages/WhatsApp';
import AIFeatures from './pages/AIFeatures';
import About from './pages/About';
import Contact from './pages/Contact';
import DashboardOverview from './pages/dashboard/Overview';
import Pipeline from './pages/dashboard/crm/Pipeline';
import Leads from './pages/dashboard/crm/Leads';
import Outreach from './pages/dashboard/crm/Outreach';
import Scoring from './pages/dashboard/crm/Scoring';
import Prospecting from './pages/dashboard/crm/Prospecting';
import { PageName } from './types';

const App = () => {
  const [briefOpen, setBriefOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState<PageName>('home');

  // Handle Hash Navigation on load
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      
      // Dashboard Routing
      if (hash === 'dashboard') {
        setCurrentPage('dashboard');
      } else if (hash === 'dashboard/pipeline') {
        setCurrentPage('dashboard-pipeline');
      } else if (hash === 'dashboard/leads') {
        setCurrentPage('dashboard-leads');
      } else if (hash === 'dashboard/outreach') {
        setCurrentPage('dashboard-outreach');
      } else if (hash === 'dashboard/scoring') {
        setCurrentPage('dashboard-scoring');
      } else if (hash === 'dashboard/prospecting') {
        setCurrentPage('dashboard-prospecting');
      } 
      // Public Site Routing
      else if (hash === 'services') {
        setCurrentPage('services');
      } else if (hash === 'process') {
        setCurrentPage('process');
      } else if (hash === 'projects') {
        setCurrentPage('projects');
      } else if (hash === 'whatsapp') {
        setCurrentPage('whatsapp');
      } else if (hash === 'ai-features') {
        setCurrentPage('ai-features');
      } else if (hash === 'about') {
        setCurrentPage('about');
      } else if (hash === 'contact') {
        setCurrentPage('contact');
      } else {
        // Default to home if no known hash
      }
    };

    // Initial check
    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page: PageName, hash?: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Construct the URL hash based on page
    let urlHash = '';
    switch(page) {
        case 'dashboard': urlHash = 'dashboard'; break;
        case 'dashboard-pipeline': urlHash = 'dashboard/pipeline'; break;
        case 'dashboard-leads': urlHash = 'dashboard/leads'; break;
        case 'dashboard-outreach': urlHash = 'dashboard/outreach'; break;
        case 'dashboard-scoring': urlHash = 'dashboard/scoring'; break;
        case 'dashboard-prospecting': urlHash = 'dashboard/prospecting'; break;
        case 'home': urlHash = ''; break; // or 'home'
        default: urlHash = page;
    }
    
    if (hash) {
      // If a specific section hash is provided (e.g. #contact on home page)
       // This logic might need adjustment depending on how you want to handle internal page jumps vs route changes
    } else {
       window.history.pushState(null, '', `#${urlHash}`);
    }

    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100); 
    }
  };

  const isDashboard = currentPage.startsWith('dashboard');

  return (
    <div className="bg-gray-50 min-h-screen text-navy-900 font-sans selection:bg-primary/30 selection:text-navy-900">
      {!isDashboard && (
        <Navbar 
          onNavigate={handleNavigate} 
          onOpenBrief={() => setBriefOpen(true)}
          currentPage={currentPage}
        />
      )}
      
      <main>
        {currentPage === 'home' && <Home onOpenBrief={() => setBriefOpen(true)} onNavigate={handleNavigate} />}
        {currentPage === 'services' && <Services onOpenConsultation={() => setBriefOpen(true)} />}
        {currentPage === 'projects' && <Projects onOpenConsultation={() => setBriefOpen(true)} />}
        {currentPage === 'process' && <Process onOpenBrief={() => setBriefOpen(true)} />}
        {currentPage === 'whatsapp' && <WhatsApp onOpenConsultation={() => setBriefOpen(true)} />}
        {currentPage === 'ai-features' && <AIFeatures onOpenConsultation={() => setBriefOpen(true)} />}
        {currentPage === 'about' && <About onOpenConsultation={() => setBriefOpen(true)} />}
        {currentPage === 'contact' && <Contact />}
        
        {/* Dashboard Routes */}
        {currentPage === 'dashboard' && <DashboardOverview onNavigate={handleNavigate} />}
        {currentPage === 'dashboard-pipeline' && <Pipeline onNavigate={handleNavigate} />}
        {currentPage === 'dashboard-leads' && <Leads onNavigate={handleNavigate} />}
        {currentPage === 'dashboard-outreach' && <Outreach onNavigate={handleNavigate} />}
        {currentPage === 'dashboard-scoring' && <Scoring onNavigate={handleNavigate} />}
        {currentPage === 'dashboard-prospecting' && <Prospecting onNavigate={handleNavigate} />}
      </main>

      {!isDashboard && <Footer onNavigate={handleNavigate} />}
      <BriefGenerator isOpen={briefOpen} onClose={() => setBriefOpen(false)} />
    </div>
  );
};

export default App;