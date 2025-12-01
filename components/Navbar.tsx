import React, { useState, useEffect } from 'react';
import { Cpu, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavigationProps, PageName } from '../types';

interface NavbarProps extends NavigationProps {
  onOpenBrief: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, onOpenBrief, currentPage }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (page: PageName, hash?: string) => {
    onNavigate(page, hash);
    setMobileMenuOpen(false);
  };

  const navLinkClass = (page: PageName) => 
    `hover:text-primary transition-colors ${currentPage === page && !window.location.hash ? 'text-primary font-bold' : ''}`;

  return (
    <nav className={`fixed top-0 w-full z-40 transition-all duration-300 ${scrolled ? 'bg-beige/95 border-b border-gray-200 py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div 
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-2 font-display font-bold text-2xl tracking-tight text-navy-900 cursor-pointer"
        >
          <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center text-white">
            <Cpu size={20} />
          </div>
          Sunai
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
          <button onClick={() => handleNavClick('home')} className={navLinkClass('home')}>Home</button>
          <button onClick={() => handleNavClick('about')} className={navLinkClass('about')}>About</button>
          <button onClick={() => handleNavClick('services')} className={navLinkClass('services')}>Services</button>
          <button onClick={() => handleNavClick('ai-features')} className={navLinkClass('ai-features')}>AI Features</button>
          <button onClick={() => handleNavClick('projects')} className={navLinkClass('projects')}>Projects</button>
          <button onClick={() => handleNavClick('process')} className={navLinkClass('process')}>Process</button>
          <button onClick={() => handleNavClick('whatsapp')} className={navLinkClass('whatsapp')}>WhatsApp AI</button>
          <button onClick={() => handleNavClick('contact')} className={navLinkClass('contact')}>Contact</button>
        </div>

        <div className="hidden md:block">
          <button 
            onClick={onOpenBrief}
            className="px-5 py-2.5 bg-primary text-white text-sm font-bold rounded-md hover:bg-primary-hover transition-all"
          >
            Start Your AI Brief
          </button>
        </div>

        <button className="md:hidden text-navy-900" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-beige border-b border-gray-200 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4 text-gray-600">
              <button onClick={() => handleNavClick('home')} className="text-left hover:text-primary">Home</button>
              <button onClick={() => handleNavClick('about')} className="text-left hover:text-primary">About</button>
              <button onClick={() => handleNavClick('services')} className="text-left hover:text-primary">Services</button>
              <button onClick={() => handleNavClick('ai-features')} className="text-left hover:text-primary">AI Features</button>
              <button onClick={() => handleNavClick('projects')} className="text-left hover:text-primary">Projects</button>
              <button onClick={() => handleNavClick('process')} className="text-left hover:text-primary">Process</button>
              <button onClick={() => handleNavClick('whatsapp')} className="text-left hover:text-primary">WhatsApp AI</button>
              <button onClick={() => handleNavClick('contact')} className="text-left hover:text-primary">Contact</button>
              <button 
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBrief();
                }}
                className="px-5 py-3 bg-primary text-white font-bold rounded-md text-center mt-2"
              >
                Start Your AI Brief
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;