import React from 'react';
import { Cpu, Linkedin, Twitter, Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { NavigationProps } from '../types';

const Footer: React.FC<NavigationProps> = ({ onNavigate }) => (
  <footer className="bg-beige pt-20 pb-10 border-t border-gray-200 text-navy-900">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        
        {/* Brand & Socials */}
        <div className="space-y-6">
          <div className="flex items-center gap-2 font-display font-bold text-xl">
             <div className="w-6 h-6 bg-primary rounded-md flex items-center justify-center text-white">
                <Cpu size={14} />
             </div>
             Sunai
          </div>
          <p className="text-gray-500 text-sm leading-relaxed">
            Built by Intelligence, Measured by Results. We help forward-thinking companies deploy AI solutions that matter.
          </p>
          <div className="flex gap-4 text-gray-400">
            <a href="#" className="hover:text-primary transition-colors"><Linkedin size={20} /></a>
            <a href="#" className="hover:text-primary transition-colors"><Twitter size={20} /></a>
            <a href="#" className="hover:text-primary transition-colors"><Facebook size={20} /></a>
            <a href="#" className="hover:text-primary transition-colors"><Instagram size={20} /></a>
          </div>
        </div>
        
        {/* Navigation */}
        <div>
          <h4 className="font-bold mb-6 text-sm uppercase tracking-wider text-gray-400">Company</h4>
          <ul className="space-y-3 text-sm text-gray-600">
            <li><button onClick={() => onNavigate('home')} className="hover:text-primary transition-colors">Home</button></li>
            <li><button onClick={() => onNavigate('about')} className="hover:text-primary transition-colors">About Us</button></li>
            <li><button onClick={() => onNavigate('services')} className="hover:text-primary transition-colors">Services</button></li>
            <li><button onClick={() => onNavigate('ai-features')} className="hover:text-primary transition-colors">AI Features</button></li>
            <li><button onClick={() => onNavigate('whatsapp')} className="hover:text-primary transition-colors">WhatsApp Automation</button></li>
            <li><button onClick={() => onNavigate('projects')} className="hover:text-primary transition-colors">Projects</button></li>
            <li><button onClick={() => onNavigate('contact')} className="hover:text-primary transition-colors">Contact</button></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-bold mb-6 text-sm uppercase tracking-wider text-gray-400">Contact</h4>
          <ul className="space-y-4 text-sm text-gray-600">
            <li className="flex items-start gap-3">
              <Mail size={16} className="text-primary mt-1" />
              <span>hello@sunai.ai</span>
            </li>
            <li className="flex items-start gap-3">
              <Phone size={16} className="text-primary mt-1" />
              <span>+1 (555) 123-4567</span>
            </li>
            <li className="flex items-start gap-3">
              <MapPin size={16} className="text-primary mt-1" />
              <span>101 Tech Blvd, Suite 200<br />San Francisco, CA 94107</span>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="font-bold mb-6 text-sm uppercase tracking-wider text-gray-400">Stay Updated</h4>
          <p className="text-sm text-gray-500 mb-4">Get the latest AI trends and company news.</p>
          <div className="flex flex-col gap-3">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="bg-white border border-gray-200 rounded-md px-4 py-2.5 text-sm text-navy-900 focus:outline-none focus:border-primary transition-colors"
            />
            <button className="bg-primary hover:bg-primary-hover text-white font-bold py-2.5 rounded-md text-sm transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
        <div>&copy; 2025 Sunai — All Rights Reserved</div>
        <div className="flex gap-6 mt-4 md:mt-0">
          <button className="hover:text-primary transition-colors">Privacy Policy</button>
          <button className="hover:text-primary transition-colors">Terms of Service</button>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;