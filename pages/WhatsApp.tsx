import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MessageCircle, Bot, Zap, BarChart, Users, ShoppingCart, 
  Calendar, ArrowRight, CheckCircle2, ChevronDown, ChevronUp,
  MessageSquare, ShieldCheck, DollarSign, Database
} from 'lucide-react';

interface WhatsAppProps {
  onOpenConsultation: () => void;
}

const FAQS = [
  { question: "Do you use the official WhatsApp Business API?", answer: "Yes, we build exclusively on the official WhatsApp Business API (via MetaBSP) to ensure compliance, security, and scalability. This avoids banning risks associated with unofficial tools." },
  { question: "Can I integrate WhatsApp with my CRM or database?", answer: "Absolutely. We specialize in connecting WhatsApp to CRMs like HubSpot, Salesforce, Zoho, and databases like Supabase or Airtable for real-time data syncing." },
  { question: "Is this AI or just a bot?", answer: "We deploy advanced AI agents powered by LLMs (like GPT-4o) that understand context, nuance, and intent. It's not just a button-clicking bot; it's a conversational agent." },
  { question: "How long does setup take?", answer: "A typical AI WhatsApp automation project takes 2-4 weeks from discovery to go-live, depending on the complexity of the integrations required." },
];

const WhatsApp: React.FC<WhatsAppProps> = ({ onOpenConsultation }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="bg-white">
      {/* 1. Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden bg-beige">
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
               <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-gray-200 text-green-600 text-sm font-bold mb-6">
                  <MessageCircle size={16} /> 24/7 Sales & Support
               </div>
               <h1 className="text-5xl md:text-6xl font-display font-extrabold text-navy-900 mb-6 leading-tight">
                  Automate, Sell & Support — <span className="text-green-600">All on WhatsApp</span>
               </h1>
               <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Turn WhatsApp into a 24/7 sales channel powered by AI agents. No missed messages, just seamless conversations that convert.
               </p>
               <div className="flex flex-col sm:flex-row gap-4">
                  <button 
                     onClick={onOpenConsultation}
                     className="px-8 py-4 bg-[#25D366] text-white text-lg font-bold rounded-md hover:bg-[#128C7E] shadow-lg transition-all flex items-center justify-center gap-2"
                  >
                     Start Your WhatsApp Project <ArrowRight size={20} />
                  </button>
                  <button className="px-8 py-4 bg-white text-navy-900 border border-gray-200 text-lg font-bold rounded-md hover:bg-white/80 transition-all">
                     Read More
                  </button>
               </div>
            </div>
            
            <div className="lg:w-1/2 relative">
               <motion.div 
                 initial={{ opacity: 0, y: 30 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.8 }}
                 className="bg-white rounded-xl shadow-card border border-gray-200 p-6 max-w-sm mx-auto relative z-10"
               >
                  <div className="flex items-center gap-3 border-b border-gray-100 pb-4 mb-4">
                     <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center text-green-600">
                        <Bot size={24} />
                     </div>
                     <div>
                        <h4 className="font-bold text-navy-900">AMO AI Assistant</h4>
                        <div className="text-xs text-green-600 flex items-center gap-1">
                           <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"/> Always Active
                        </div>
                     </div>
                  </div>
                  <div className="space-y-4">
                     <div className="bg-gray-100 rounded-lg rounded-tl-none p-3 text-sm text-gray-700 max-w-[85%]">
                        Hi! How can I help you today? 👋
                     </div>
                     <div className="bg-green-50 text-green-800 rounded-lg rounded-tr-none p-3 text-sm max-w-[85%] ml-auto text-right">
                        Check my order status
                     </div>
                     <div className="bg-gray-100 rounded-lg rounded-tl-none p-3 text-sm text-gray-700 max-w-[85%]">
                        Your order #4821 is out for delivery! 📦
                     </div>
                  </div>
               </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Why WhatsApp Automation Matters */}
      <section className="py-24 bg-white text-navy-900">
         <div className="container mx-auto px-6">
            <div className="text-center mb-16 max-w-3xl mx-auto">
               <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Why WhatsApp Automation Matters</h2>
               <p className="text-gray-600">
                  Your customers are already on WhatsApp — we make it work harder for you. 
                  More messages, faster replies, and no missed sales opportunities.
               </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {[
                  { value: "98%", label: "Open Rate", desc: "vs 20% for email - your messages actually get seen.", icon: MessageCircle },
                  { value: "70%", label: "Response Rate", desc: "Customers engage instantly with automated conversations.", icon: Zap },
                  { value: "5-10x", label: "ROI Potential", desc: "From automated sales, support, and customer retention.", icon: DollarSign },
               ].map((metric, i) => (
                  <div key={i} className="bg-beige border border-gray-200 p-8 rounded-lg hover:shadow-md transition-all">
                     <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 bg-white rounded-md flex items-center justify-center text-green-600 border border-gray-100">
                           <metric.icon size={24} />
                        </div>
                        <div className="text-4xl font-bold text-navy-900">{metric.value}</div>
                     </div>
                     <h3 className="text-lg font-bold mb-2 text-navy-900">{metric.label}</h3>
                     <p className="text-sm text-gray-500">{metric.desc}</p>
                  </div>
               ))}
            </div>
            
            <div className="text-center mt-12">
               <button onClick={onOpenConsultation} className="text-green-600 font-bold hover:text-green-500 flex items-center gap-2 mx-auto">
                  Get Started with WhatsApp Automation <ArrowRight size={18} />
               </button>
            </div>
         </div>
      </section>

      {/* 3. Core Services */}
      <section className="py-24 bg-beige border-y border-gray-200">
         <div className="container mx-auto px-6">
            <div className="text-center mb-16">
               <h2 className="text-3xl md:text-4xl font-display font-bold text-navy-900 mb-4">Our Core Services</h2>
               <p className="text-gray-600">Everything you need to transform WhatsApp into your most powerful channel.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
               {[
                  { title: "WhatsApp Automation Setup", desc: "Verified Business API setup & flow configuration.", icon: Zap },
                  { title: "AI Chat Agents & Copilots", desc: "Train AI to handle real conversations & support.", icon: Bot },
                  { title: "CRM & Pipeline Integration", desc: "Sync leads directly to HubSpot, Salesforce, etc.", icon: Database },
                  { title: "WhatsApp Marketing Campaigns", desc: "Broadcast targeted messages that convert.", icon: MessageSquare },
                  { title: "E-commerce & Payment Flows", desc: "Sell products directly in chat with catalog integration.", icon: ShoppingCart },
                  { title: "Industry Solutions", desc: "Tailored flows for Real Estate, Travel, & more.", icon: BarChart },
               ].map((service, i) => (
                  <div key={i} className="p-8 bg-white border border-gray-200 rounded-lg hover:shadow-lg transition-all group">
                     <div className="w-12 h-12 bg-beige rounded-md flex items-center justify-center text-green-600 mb-6 group-hover:bg-green-600 group-hover:text-white transition-colors">
                        <service.icon size={24} />
                     </div>
                     <h3 className="text-xl font-bold text-navy-900 mb-3">{service.title}</h3>
                     <p className="text-gray-600 text-sm mb-6">{service.desc}</p>
                     <button className="text-sm font-bold text-navy-900 group-hover:text-green-600 transition-colors flex items-center gap-1">
                        Learn More <ArrowRight size={14} />
                     </button>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* 4. Real-World Use Cases */}
      <section className="py-24 bg-white">
         <div className="container mx-auto px-6">
            <div className="text-center mb-16">
               <h2 className="text-3xl md:text-4xl font-display font-bold text-navy-900 mb-4">Real-World Use Cases</h2>
               <p className="text-gray-600">Explore how our AI-powered WhatsApp automation helps businesses.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
               {[
                  { title: "Lead Generation Flow", desc: "Ad → WhatsApp chat → AI qualifies lead → CRM sync.", icon: Users },
                  { title: "E-commerce Flow", desc: "Customer chats → Browses catalog → Adds to cart → Pays in-chat.", icon: ShoppingCart },
                  { title: "Service Booking Flow", desc: "Client messages → AI confirms slot → Invoice sent → Booking recorded.", icon: Calendar },
               ].map((useCase, i) => (
                  <div key={i} className="bg-beige p-8 rounded-lg border border-gray-200 hover:border-green-500 transition-colors">
                     <div className="mb-6 text-green-600">
                        <useCase.icon size={32} />
                     </div>
                     <h3 className="text-xl font-bold mb-3 text-navy-900">{useCase.title}</h3>
                     <p className="text-sm text-gray-500 mb-6">{useCase.desc}</p>
                     <button className="text-xs font-bold uppercase tracking-wider text-green-600 flex items-center gap-1">
                        See Full Flow <ArrowRight size={14} />
                     </button>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* 5. Results That Speak */}
      <section className="py-24 bg-beige border-t border-gray-200">
         <div className="container mx-auto px-6">
            <div className="text-center mb-16">
               <h2 className="text-3xl md:text-4xl font-display font-bold text-navy-900 mb-4">Results That Speak</h2>
               <p className="text-gray-600">Measurable outcomes from our AI WhatsApp implementations.</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
               {[
                  { label: "Response Time", value: "< 2 mins", color: "text-navy-900" },
                  { label: "Missed Leads", value: "< 5%", color: "text-navy-900" },
                  { label: "Conversion Rate", value: "12%", color: "text-green-600" },
                  { label: "Customer Sat.", value: "9.4/10", color: "text-navy-900" },
               ].map((res, i) => (
                  <div key={i} className="p-6 bg-white rounded-lg border border-gray-200 text-center">
                     <div className="text-xs text-gray-500 uppercase tracking-wider mb-2">{res.label}</div>
                     <div className={`text-3xl font-bold ${res.color} mb-2`}>{res.value}</div>
                     <ArrowRight size={16} className={`mx-auto text-gray-400 rotate-[-45deg]`} />
                  </div>
               ))}
            </div>
            
            <div className="text-center mt-12">
               <button onClick={onOpenConsultation} className="px-8 py-3 bg-navy-900 text-white font-bold rounded-md hover:bg-navy-800 transition-all">
                  Request a Demo
               </button>
            </div>
         </div>
      </section>

      {/* 6. The Process */}
      <section className="py-24 bg-white text-navy-900">
         <div className="container mx-auto px-6">
            <div className="text-center mb-20">
               <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">The AMO AI WhatsApp Process</h2>
               <p className="text-gray-600">From discovery to launch in 5 steps.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
               {[
                  { step: "1", title: "Discovery Call", desc: "Understand Your Goals" },
                  { step: "2", title: "Workflow Blueprint", desc: "Design Your Automation" },
                  { step: "3", title: "Development", desc: "Build & Connect Everything" },
                  { step: "4", title: "AI Training", desc: "Train Your Chat Agents" },
                  { step: "5", title: "Launch", desc: "Go Live & Measure Results" },
               ].map((item, i) => (
                  <div key={i} className="flex flex-col items-center text-center relative group">
                     <div className="w-16 h-16 rounded-full bg-white border border-gray-200 flex items-center justify-center text-2xl font-bold mb-6 group-hover:border-green-500 group-hover:text-green-500 transition-colors shadow-sm text-navy-900">
                        {item.step}
                     </div>
                     <h3 className="font-bold mb-2 text-lg">{item.title}</h3>
                     <p className="text-sm text-gray-500">{item.desc}</p>
                  </div>
               ))}
            </div>

            <div className="text-center mt-20">
               <button onClick={onOpenConsultation} className="px-10 py-4 bg-green-600 text-white font-bold rounded-md hover:bg-green-700 shadow-lg transition-all">
                  Start Your WhatsApp Project
               </button>
               <p className="text-xs text-gray-500 mt-4">Launch in as little as 2 weeks</p>
            </div>
         </div>
      </section>

      {/* 7. Built On */}
      <section className="py-20 bg-beige border-y border-gray-200">
         <div className="container mx-auto px-6 text-center">
            <h2 className="text-2xl font-display font-bold text-navy-900 mb-10">Built on Proven Technology</h2>
            <div className="flex flex-wrap justify-center gap-4 md:gap-8">
               {["Supabase", "n8n", "CopilotKit", "OpenAI", "LangChain", "Stripe", "WhatsApp Business API"].map((tech, i) => (
                  <span key={i} className="px-6 py-3 bg-white border border-gray-200 rounded-full text-gray-600 font-medium text-sm">
                     {tech}
                  </span>
               ))}
            </div>
         </div>
      </section>

      {/* 8. FAQ */}
      <section className="py-24 bg-white">
         <div className="container mx-auto px-6 max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-12 text-navy-900">Frequently Asked Questions</h2>
            <div className="space-y-4">
               {FAQS.map((faq, i) => (
                  <div key={i} className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                     <button 
                        onClick={() => toggleFaq(i)}
                        className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                     >
                        <span className="font-bold text-navy-900">{faq.question}</span>
                        {openFaq === i ? <ChevronUp className="text-green-600" /> : <ChevronDown className="text-gray-400" />}
                     </button>
                     <AnimatePresence>
                        {openFaq === i && (
                           <motion.div 
                              initial={{ height: 0 }}
                              animate={{ height: "auto" }}
                              exit={{ height: 0 }}
                              className="overflow-hidden"
                           >
                              <div className="px-6 pb-6 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4 bg-beige">
                                 {faq.answer}
                              </div>
                           </motion.div>
                        )}
                     </AnimatePresence>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* 9. Final CTA */}
      <section className="py-24 bg-green-600 text-white relative overflow-hidden text-center">
         <div className="container mx-auto px-6 relative z-10">
            <h2 className="text-4xl md:text-5xl font-display font-extrabold mb-6">Let’s Automate Your Business on WhatsApp.</h2>
            <p className="text-xl text-green-50 mb-10 max-w-2xl mx-auto">
               Faster sales, automated bookings, and AI-driven support. Start today.
            </p>
            <button 
               onClick={onOpenConsultation}
               className="px-10 py-5 bg-white text-green-700 text-xl font-bold rounded-md shadow-lg hover:bg-gray-50 transition-all"
            >
               Book a Demo Call
            </button>
         </div>
      </section>
    </div>
  );
};

export default WhatsApp;