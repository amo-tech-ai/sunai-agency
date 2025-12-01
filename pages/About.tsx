import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, Target, ShieldCheck, Zap, 
  ArrowRight, Brain, Cpu, MessageSquare, 
  BarChart, Sparkles, Workflow, CheckCircle2,
  Globe, Lightbulb, Lock
} from 'lucide-react';

interface AboutProps {
  onOpenConsultation: () => void;
}

// Helper for icon
const SearchIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"></circle>
        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
    </svg>
);

const VALUES = [
  { title: 'Innovation First', desc: 'Pushing boundaries to build the future.', icon: Lightbulb },
  { title: 'Transparency', desc: 'Clear communication, no hidden costs.', icon: SearchIcon },
  { title: 'Collaboration', desc: 'We work with you, not just for you.', icon: Users },
  { title: 'Security', desc: 'Enterprise-grade data protection.', icon: Lock },
];

const FEATURES = [
  { title: 'AI Chat Agents', desc: 'Automate customer support with intelligent agents that understand and respond in real time.', icon: MessageSquare, color: 'text-primary' },
  { title: 'Custom Automation', desc: 'Automate tasks, processes, and workflows across your business.', icon: Workflow, color: 'text-primary' },
  { title: 'AI for Analytics', desc: 'Transform your data into actionable insights with AI-powered analytics.', icon: BarChart, color: 'text-primary' },
  { title: 'Predictive Solutions', desc: 'Leverage AI to predict trends, outcomes, and business insights.', icon: Brain, color: 'text-primary' },
];

const PROCESS = [
  { step: '01', title: 'Discovery & Consultation', desc: 'We align on goals and audit your data readiness.' },
  { step: '02', title: 'Data Integration', desc: 'Connecting your systems securely to our AI models.' },
  { step: '03', title: 'Model Development', desc: 'Training and fine-tuning custom AI solutions.' },
  { step: '04', title: 'Testing & Optimization', desc: 'Rigorous validation to ensure accuracy and speed.' },
  { step: '05', title: 'Deployment', desc: 'Launching live with ongoing monitoring and support.' },
];

const BENEFITS = [
  { title: 'Efficiency Gains', desc: 'Automate repetitive tasks and increase productivity.', icon: Zap },
  { title: 'Scalability', desc: 'AI grows with your business, handling more data.', icon: Globe },
  { title: 'Personalization', desc: 'Provide customized customer experiences at scale.', icon: Users },
  { title: 'Decision Support', desc: 'Make smarter decisions with predictive analytics.', icon: Target },
];

const USE_CASES = [
  { title: 'E-commerce Personalization', desc: 'Boosted sales by 20% with AI-powered recommendations.', result: '+20% Revenue' },
  { title: 'Automated Customer Support', desc: 'Reduced ticket volume by 60% using intelligent chatbots.', result: '-60% Tickets' },
  { title: 'Predictive Maintenance', desc: 'Saved $500k/year by predicting equipment failures early.', result: '$500k Savings' },
  { title: 'Legal Doc Analysis', desc: 'Cut document review time by 80% with NLP processing.', result: '80% Faster' },
];

const About: React.FC<AboutProps> = ({ onOpenConsultation }) => {
  return (
    <div className="bg-white">
      {/* 1. Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden bg-beige">
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-gray-200 shadow-sm text-primary text-sm font-bold mb-6">
               <Cpu size={16} /> We Are Sunai
            </div>
            <h1 className="text-4xl md:text-6xl font-display font-extrabold text-navy-900 mb-6 leading-tight">
               We Are an <span className="text-primary">AI Development Agency</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed">
               Empowering businesses with cutting-edge AI solutions for smarter operations, better customer experiences, and measurable growth.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
               <button 
                  onClick={onOpenConsultation}
                  className="px-8 py-4 bg-primary text-white text-lg font-bold rounded-md shadow-lg hover:bg-primary-hover transition-all"
               >
                  Get Started with AI
               </button>
               <button className="px-8 py-4 bg-white text-navy-900 border border-gray-200 text-lg font-bold rounded-md hover:bg-white/80 transition-all">
                  Our Services
               </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. About Our Agency */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
           <div className="flex flex-col lg:flex-row gap-16 items-start">
              <div className="lg:w-1/2">
                 <h2 className="text-sm font-bold text-primary uppercase tracking-wider mb-2">Our Mission & Values</h2>
                 <h3 className="text-3xl md:text-4xl font-display font-bold text-navy-900 mb-6">
                    Building intelligent solutions that transform your business.
                 </h3>
                 <p className="text-gray-600 leading-relaxed mb-6">
                    At Sunai, we believe that Artificial Intelligence is not just a buzzword—it's a fundamental shift in how businesses operate. 
                    Founded by a team of engineers and strategists, our mission is to bridge the gap between complex AI technology and practical business value.
                 </p>
                 <p className="text-gray-600 leading-relaxed mb-8">
                    We don't just write code; we solve problems. From automating mundane tasks to predicting market trends, we build the digital infrastructure of tomorrow.
                 </p>
                 <button className="text-primary font-bold flex items-center gap-2 hover:gap-3 transition-all">
                    Learn More About Us <ArrowRight size={18} />
                 </button>
              </div>
              <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
                 {VALUES.map((val, i) => (
                    <div key={i} className="p-6 bg-beige rounded-lg border border-gray-200 hover:shadow-sm transition-shadow">
                       <div className="w-10 h-10 bg-white rounded-md flex items-center justify-center text-primary mb-4 border border-gray-100">
                          <val.icon size={20} />
                       </div>
                       <h4 className="font-bold text-navy-900 mb-2">{val.title}</h4>
                       <p className="text-sm text-gray-500">{val.desc}</p>
                    </div>
                 ))}
              </div>
           </div>
        </div>
      </section>

      {/* 3. AI Features & Services */}
      <section className="py-24 bg-beige border-y border-gray-200">
         <div className="container mx-auto px-6">
            <div className="text-center mb-16">
               <h2 className="text-3xl md:text-4xl font-display font-bold text-navy-900 mb-4">Our AI Solutions</h2>
               <p className="text-gray-600 max-w-2xl mx-auto">AI-driven automation, intelligent agents, and tailored solutions to elevate your business.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
               {FEATURES.map((feat, i) => (
                  <motion.div
                     key={i}
                     whileHover={{ y: -5 }}
                     className="bg-white p-8 rounded-lg shadow-card border border-gray-200 hover:shadow-card-hover transition-all"
                  >
                     <div className={`w-12 h-12 rounded-md bg-beige flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors`}>
                        <feat.icon size={24} className="text-primary" />
                     </div>
                     <h3 className="font-bold text-lg text-navy-900 mb-3">{feat.title}</h3>
                     <p className="text-sm text-gray-600 leading-relaxed mb-4">{feat.desc}</p>
                  </motion.div>
               ))}
            </div>
            
            <div className="text-center mt-12">
               <button onClick={onOpenConsultation} className="px-8 py-3 border border-gray-200 rounded-md text-navy-900 font-bold hover:bg-white transition-all bg-white shadow-sm">
                  Explore All Services
               </button>
            </div>
         </div>
      </section>

      {/* 4. AI Process Flow */}
      <section className="py-24 bg-white">
         <div className="container mx-auto px-6">
            <div className="text-center mb-20">
               <h2 className="text-3xl md:text-4xl font-display font-bold text-navy-900 mb-4">Our AI Development Process</h2>
               <p className="text-gray-600">From discovery to deployment, we follow a structured approach to deliver results.</p>
            </div>

            <div className="relative max-w-5xl mx-auto">
               {/* Desktop Horizontal Connector */}
               <div className="hidden md:block absolute top-[28px] left-0 w-full h-0.5 bg-gray-200"></div>

               {/* Mobile Vertical Connector */}
               <div className="md:hidden absolute top-0 bottom-10 left-[28px] w-0.5 bg-gray-200 -translate-x-1/2 z-0"></div>

               <div className="grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-8 relative z-10">
                  {PROCESS.map((p, i) => (
                     <div key={i} className="flex flex-row md:flex-col items-start md:items-center md:text-center group relative">
                        {/* Step Circle */}
                        <div className="shrink-0 w-14 h-14 bg-white rounded-full border-4 border-gray-200 flex items-center justify-center font-bold text-lg text-navy-900 mr-6 md:mr-0 md:mb-6 shadow-sm group-hover:border-primary group-hover:text-primary transition-all relative z-10">
                           {p.step}
                        </div>
                        
                        {/* Text Content */}
                        <div className="pt-2 md:pt-0">
                           <h3 className="font-bold text-lg text-navy-900 mb-2">{p.title}</h3>
                           <p className="text-sm text-gray-500 leading-relaxed">{p.desc}</p>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
            
            <div className="text-center mt-16">
               <button onClick={onOpenConsultation} className="px-8 py-4 bg-navy-900 text-white font-bold rounded-md hover:bg-navy-800 transition-all shadow-lg">
                  Start Your AI Journey
               </button>
            </div>
         </div>
      </section>

      {/* 5. Business Benefits */}
      <section className="py-24 bg-beige text-navy-900 border-y border-gray-200">
         <div className="container mx-auto px-6">
            <div className="text-center mb-16">
               <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Why AI Matters for Your Business</h2>
               <p className="text-gray-600">Unlock new efficiencies, reduce operational costs, and enhance customer experiences.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
               {BENEFITS.map((b, i) => (
                  <div key={i} className="bg-white border border-gray-200 p-8 rounded-lg hover:shadow-card transition-all">
                     <div className="w-12 h-12 bg-beige rounded-md flex items-center justify-center text-primary mb-6">
                        <b.icon size={24} />
                     </div>
                     <h3 className="text-xl font-bold mb-2">{b.title}</h3>
                     <p className="text-sm text-gray-500">{b.desc}</p>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* 6. Use-Cases & Real-World Impact */}
      <section className="py-24 bg-white">
         <div className="container mx-auto px-6">
            <div className="text-center mb-16">
               <h2 className="text-3xl md:text-4xl font-display font-bold text-navy-900 mb-4">Real-World AI Use Cases</h2>
               <p className="text-gray-600">See how we’ve transformed businesses with AI-powered solutions.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
               {USE_CASES.map((uc, i) => (
                  <div key={i} className="p-8 rounded-lg bg-beige border border-gray-200 hover:border-primary transition-all">
                     <div className="flex justify-between items-start mb-4">
                        <div className="p-3 bg-white rounded-md shadow-sm">
                           <Sparkles className="text-primary" size={24} />
                        </div>
                        <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full border border-green-200">
                           {uc.result}
                        </span>
                     </div>
                     <h3 className="text-xl font-bold text-navy-900 mb-2">{uc.title}</h3>
                     <p className="text-gray-600 text-sm mb-6">{uc.desc}</p>
                     <button className="text-sm font-bold text-navy-900 hover:text-primary flex items-center gap-1 transition-colors">
                        Read Full Case Study <ArrowRight size={14} />
                     </button>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* 7. Why Choose Us */}
      <section className="py-24 bg-beige border-t border-gray-200">
         <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
               <div className="lg:w-1/2">
                  <h2 className="text-3xl md:text-4xl font-display font-bold text-navy-900 mb-6">Why Choose Sunai?</h2>
                  <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                     We combine technical expertise with business strategy to deliver AI solutions that actually work. 
                     No hype, just results.
                  </p>
                  <div className="space-y-6">
                     {[
                        { title: 'Proven Expertise', desc: 'Years of AI development experience across multiple industries.' },
                        { title: 'Customized Solutions', desc: 'We tailor AI models and workflows to meet your specific needs.' },
                        { title: 'Data Security', desc: 'Your data is handled with the highest level of security and confidentiality.' },
                        { title: 'Ongoing Support', desc: 'Continuous optimization and support for deployed solutions.' }
                     ].map((item, i) => (
                        <div key={i} className="flex gap-4">
                           <div className="mt-1 min-w-[20px] text-primary">
                              <CheckCircle2 size={20} />
                           </div>
                           <div>
                              <h4 className="font-bold text-navy-900">{item.title}</h4>
                              <p className="text-sm text-gray-600">{item.desc}</p>
                           </div>
                        </div>
                     ))}
                  </div>
                  <button onClick={onOpenConsultation} className="mt-10 px-8 py-3 bg-primary text-white font-bold rounded-md hover:bg-primary-hover shadow-lg transition-all">
                     Get in Touch
                  </button>
               </div>
               <div className="lg:w-1/2">
                  <div className="bg-white p-8 rounded-lg shadow-card border border-gray-200 relative overflow-hidden text-center py-16">
                     <div className="text-6xl font-extrabold text-navy-900 mb-2">98%</div>
                     <div className="text-gray-500 uppercase tracking-wider font-bold mb-8">Client Satisfaction</div>
                     <div className="w-16 h-1 bg-primary mx-auto mb-8"></div>
                     <div className="text-6xl font-extrabold text-navy-900 mb-2">40+</div>
                     <div className="text-gray-500 uppercase tracking-wider font-bold">Projects Delivered</div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* 8. CTA Section */}
      <section className="py-24 bg-white relative overflow-hidden border-t border-gray-200">
         <div className="container mx-auto px-6 relative z-10 text-center">
            <h2 className="text-4xl md:text-5xl font-display font-extrabold text-navy-900 mb-6">Ready to Build Your AI Solution?</h2>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
               Let’s turn your ideas into AI-powered solutions that drive real results.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
               <button 
                  onClick={onOpenConsultation}
                  className="px-10 py-5 bg-primary text-white text-xl font-bold rounded-md shadow-lg hover:bg-primary-hover transition-all"
               >
                  Start Your Project
               </button>
               <button className="px-10 py-5 bg-white text-navy-900 border border-gray-200 text-xl font-bold rounded-md hover:bg-beige transition-all">
                  Book a Free Consultation
               </button>
            </div>
         </div>
      </section>
    </div>
  );
};

export default About;