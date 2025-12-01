import React, { useState, useEffect } from 'react';
import BriefGenerator from './components/BriefGenerator';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Process from './pages/Process';
import Projects from './pages/Projects';
import { PageName } from './types';

const App = () => {
  const [briefOpen, setBriefOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState<PageName>('home');

  // Handle Hash Navigation on load
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash === 'services') {
        setCurrentPage('services');
      } else if (hash === 'process') {
        setCurrentPage('process');
      } else if (hash === 'projects') {
        setCurrentPage('projects');
      } else {
        // If hash is a section on home (e.g., #results), stay on home but scroll
        if (!['results', 'pricing'].includes(hash)) {
             // Default to home if no known hash
        }
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page: PageName, hash?: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100); // Small delay to allow page render
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen text-navy-900 font-sans selection:bg-primary/30 selection:text-navy-900">
      <Navbar 
        onNavigate={handleNavigate} 
        onOpenBrief={() => setBriefOpen(true)}
        currentPage={currentPage}
      />
      
      <main>
        {currentPage === 'home' && <Home onOpenBrief={() => setBriefOpen(true)} onNavigate={handleNavigate} />}
        {currentPage === 'services' && <Services onOpenConsultation={() => setBriefOpen(true)} />}
        {currentPage === 'projects' && <Projects onOpenConsultation={() => setBriefOpen(true)} />}
        {currentPage === 'process' && <Process onOpenBrief={() => setBriefOpen(true)} />}
      </main>

      <Footer onNavigate={handleNavigate} />
      <BriefGenerator isOpen={briefOpen} onClose={() => setBriefOpen(false)} />
    </div>
  );
};

export default App;