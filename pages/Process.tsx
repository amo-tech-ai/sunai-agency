import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Rocket, Search, Pencil, Code2, Zap, Layout, 
  Clock, CheckCircle2, ArrowRight, BarChart3, 
  Users, Calendar, Sparkles
} from 'lucide-react';

interface ProcessProps {
  onOpenBrief: () => void;
}

const PROCESS_STEPS = [
  { id: 1, title: 'Discovery', icon: Search, weeks: 'Week 1', desc: 'Requirements gathering, data audit, and strategic roadmap definition.' },
  { id: 2, title: 'Design Sprint', icon: Pencil, weeks: 'Week 2', desc: 'UX/UI prototyping, user flow mapping, and architectural design.' },
  { id: 3, title: 'Rapid Build', icon: Code2, weeks: 'Weeks 3-6', desc: 'Core AI model development, frontend construction, and API integration.' },
  { id: 4, title: 'Integration', icon: Zap, weeks: 'Week 7', desc: 'Connecting AI modules to your existing infrastructure and rigorous testing.' },
  { id: 5, title: 'Launch', icon: Rocket, weeks: 'Week 8', desc: 'Production deployment, knowledge transfer, and go-live support.' },
];

const METRICS = [
  { value: "47", label: "Projects Delivered", icon: CheckCircle2 },
  { value: "93%", label: "Client Satisfaction", icon: Users },
  { value: "8w", label: "Average Delivery", icon: Clock },
];

const Process: React.FC<ProcessProps> = ({ onOpenBrief }) => {
  const [calcStep, setCalcStep] = useState(1);
  const [calcData, setCalcData] = useState({ type: '', industry: '' });
  const [timelineResult, setTimelineResult] = useState<string | null>(null);

  const handleCalcSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCalcStep(2);
    // Simulate calculation delay
    setTimeout(() => {
        let weeks = "8 Weeks";
        if (calcData.type === "Custom Large Language Model") weeks = "10-12 Weeks";
        setTimelineResult(weeks);
    }, 1500);
  };

  return (
    <div className="bg-white">
      {/* 1. Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-gray-200 shadow-sm text-primary text-sm font-bold mb-6">
                <Clock size={16} /> Speed to Market Matters
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-extrabold text-navy-900 mb-6 tracking-tight">
              8 Weeks. Not 8 Months.
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
              Turn your ideas into AI-powered platforms in just 8 weeks—faster than the industry standard without compromising quality.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button 
                onClick={onOpenBrief}
                className="px-8 py-4 bg-primary text-white text-lg font-bold rounded-full shadow-lg hover:bg-primary-hover hover:scale-105 transition-all"
              >
                Get Started Now
              </button>
              <button className="px-8 py-4 bg-white text-navy-900 border border-gray-200 text-lg font-bold rounded-full hover:bg-gray-50 transition-all">
                See Live Projects
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Process Breakdown Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-navy-900 mb-4">Our 8-Week Process</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">A proven methodology that accelerates AI development from planning to launch.</p>
          </div>

          <div className="relative max-w-5xl mx-auto">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-12 left-0 w-full h-1 bg-gray-100">
               <motion.div 
                 initial={{ width: 0 }}
                 whileInView={{ width: "100%" }}
                 transition={{ duration: 1.5 }}
                 viewport={{ once: true }}
                 className="h-full bg-primary/30"
               />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {PROCESS_STEPS.map((step, index) => (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="relative z-10 flex flex-col items-center text-center group"
                >
                  <div className="w-24 h-24 bg-white rounded-full border-4 border-gray-50 flex items-center justify-center text-navy-900 shadow-md group-hover:border-primary group-hover:text-primary transition-all duration-300 mb-6">
                    <step.icon size={32} />
                  </div>
                  <div className="text-xs font-bold text-primary uppercase tracking-wider mb-2">{step.weeks}</div>
                  <h3 className="text-lg font-bold text-navy-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-500 group-hover:text-gray-800 transition-colors">
                    {step.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Why 8 Weeks Beats 6 Months */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-navy-900 mb-4">Why 8 Weeks Beats 6 Months</h2>
            <p className="text-gray-600">Accelerating your AI platform delivery without compromising quality.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto items-center">
             {/* Traditional Way */}
             <div className="bg-white p-8 rounded-2xl border border-gray-200 opacity-70 hover:opacity-100 transition-opacity">
                <h3 className="text-xl font-bold text-gray-500 mb-6">Traditional Agency</h3>
                <div className="space-y-6">
                   <div>
                      <div className="flex justify-between text-sm font-medium text-gray-500 mb-2">
                         <span>Time to Market</span>
                         <span>6-9 Months</span>
                      </div>
                      <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden">
                         <div className="w-full h-full bg-gray-300"></div>
                      </div>
                   </div>
                   <div>
                      <div className="flex justify-between text-sm font-medium text-gray-500 mb-2">
                         <span>Cost Efficiency</span>
                         <span>Low</span>
                      </div>
                      <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden">
                         <div className="w-[40%] h-full bg-gray-300"></div>
                      </div>
                   </div>
                   <div>
                      <div className="flex justify-between text-sm font-medium text-gray-500 mb-2">
                         <span>Iteration Speed</span>
                         <span>Monthly</span>
                      </div>
                      <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden">
                         <div className="w-[20%] h-full bg-gray-300"></div>
                      </div>
                   </div>
                </div>
             </div>

             {/* Sunai Way */}
             <motion.div 
               whileHover={{ scale: 1.02 }}
               className="bg-white p-10 rounded-2xl border-2 border-primary/20 shadow-xl relative overflow-hidden"
             >
                <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-3 py-1 rounded-bl-lg">RECOMMENDED</div>
                <h3 className="text-2xl font-bold text-navy-900 mb-6 flex items-center gap-2">
                   <Zap className="text-primary fill-primary" size={24} /> Sunai Approach
                </h3>
                <div className="space-y-6">
                   <div>
                      <div className="flex justify-between text-sm font-bold text-navy-900 mb-2">
                         <span>Time to Market</span>
                         <span className="text-primary">8 Weeks</span>
                      </div>
                      <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden">
                         <motion.div 
                           initial={{ width: 0 }}
                           whileInView={{ width: "20%" }} 
                           transition={{ duration: 1, delay: 0.2 }}
                           className="h-full bg-primary"
                         />
                      </div>
                      <p className="text-xs text-green-600 mt-1 font-medium">4x Faster Launch</p>
                   </div>
                   <div>
                      <div className="flex justify-between text-sm font-bold text-navy-900 mb-2">
                         <span>Cost Efficiency</span>
                         <span className="text-primary">High</span>
                      </div>
                      <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden">
                         <motion.div 
                           initial={{ width: 0 }}
                           whileInView={{ width: "95%" }} 
                           transition={{ duration: 1, delay: 0.4 }}
                           className="h-full bg-primary"
                         />
                      </div>
                   </div>
                   <div>
                      <div className="flex justify-between text-sm font-bold text-navy-900 mb-2">
                         <span>Iteration Speed</span>
                         <span className="text-primary">Weekly</span>
                      </div>
                      <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden">
                         <motion.div 
                           initial={{ width: 0 }}
                           whileInView={{ width: "90%" }} 
                           transition={{ duration: 1, delay: 0.6 }}
                           className="h-full bg-primary"
                         />
                      </div>
                   </div>
                </div>
                <button onClick={onOpenBrief} className="w-full mt-8 py-4 bg-navy-900 text-white font-bold rounded-xl hover:bg-navy-800 transition-all flex items-center justify-center gap-2">
                   Get Your AI Solution <ArrowRight size={18} />
                </button>
             </motion.div>
          </div>
        </div>
      </section>

      {/* 4. Phase Breakdown Cards */}
      <section className="py-24 bg-white">
         <div className="container mx-auto px-6">
            <div className="text-center mb-16">
               <h2 className="text-3xl font-display font-bold text-navy-900 mb-4">Phase-by-Phase Breakdown</h2>
               <p className="text-gray-600">Understand the specific steps we take to deliver exceptional results.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
               {[
                  { title: "1. Discovery", desc: "We validate your idea, audit data, and define the MVP scope.", items: ["Stakeholder Interviews", "Data Feasibility Check", "Tech Stack Selection"] },
                  { title: "2. Design", desc: "Creating intuitive UI/UX that makes complex AI feel simple.", items: ["User Flow Mapping", "High-Fidelity Wireframes", "Clickable Prototypes"] },
                  { title: "3. Development", desc: "Agile sprints to build models and frontend simultaneously.", items: ["Model Training", "API Development", "Frontend Implementation"] },
                  { title: "4. Deployment", desc: "Launching to production with monitoring and support.", items: ["Cloud Setup", "Load Testing", "Post-Launch Tuning"] },
               ].map((phase, i) => (
                  <div key={i} className="p-8 border border-gray-100 rounded-2xl bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                     <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary font-bold text-xl mb-6">
                        {i + 1}
                     </div>
                     <h3 className="text-xl font-bold text-navy-900 mb-3">{phase.title}</h3>
                     <p className="text-sm text-gray-600 mb-6 min-h-[40px]">{phase.desc}</p>
                     <ul className="space-y-3 mb-8">
                        {phase.items.map((item, idx) => (
                           <li key={idx} className="flex items-center gap-2 text-xs font-medium text-gray-500">
                              <CheckCircle2 size={12} className="text-green-500" /> {item}
                           </li>
                        ))}
                     </ul>
                     <button className="text-sm font-bold text-navy-900 hover:text-primary transition-colors flex items-center gap-1">
                        Learn More <ArrowRight size={14} />
                     </button>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* 5. Proven Track Record */}
      <section className="py-20 bg-navy-900 text-white">
         <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
               <div>
                  <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Proven Track Record</h2>
                  <p className="text-gray-400 mb-10 text-lg">
                     We don't just promise results; we have the data to back it up. 
                     Our agile methodology has helped startups and enterprises alike launch faster.
                  </p>
                  <div className="flex gap-8">
                     <button className="text-primary font-bold flex items-center gap-2 hover:gap-3 transition-all">
                        See Case Studies <ArrowRight size={18} />
                     </button>
                  </div>
               </div>
               <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                  {METRICS.map((metric, i) => (
                     <div key={i} className="text-center p-6 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm">
                        <div className="w-10 h-10 mx-auto bg-primary/20 rounded-full flex items-center justify-center text-primary mb-4">
                           <metric.icon size={20} />
                        </div>
                        <div className="text-3xl font-bold mb-1">{metric.value}</div>
                        <div className="text-xs text-gray-400 uppercase tracking-wider">{metric.label}</div>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </section>

      {/* 6. Timeline Calculator */}
      <section className="py-24 bg-white">
         <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
               <div className="bg-navy-900 p-8 text-white text-center">
                  <h2 className="text-2xl font-bold mb-2">Calculate Your Project Timeline</h2>
                  <p className="text-gray-400 text-sm">Get a clear idea of your project’s delivery date.</p>
               </div>
               
               <div className="p-8 md:p-12">
                  {calcStep === 1 ? (
                     <motion.form 
                       initial={{ opacity: 0 }} 
                       animate={{ opacity: 1 }}
                       onSubmit={handleCalcSubmit} 
                       className="space-y-6"
                     >
                        <div>
                           <label className="block text-sm font-bold text-navy-900 mb-2">Project Type</label>
                           <select 
                             required
                             className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary outline-none"
                             onChange={(e) => setCalcData({...calcData, type: e.target.value})}
                           >
                              <option value="">Select a project type...</option>
                              <option value="AI Web Application">AI Web Application</option>
                              <option value="Custom Large Language Model">Custom Large Language Model</option>
                              <option value="E-commerce AI Integration">E-commerce AI Integration</option>
                              <option value="Internal Automation Tool">Internal Automation Tool</option>
                           </select>
                        </div>
                        <div>
                           <label className="block text-sm font-bold text-navy-900 mb-2">Industry</label>
                           <select 
                             required
                             className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary outline-none"
                             onChange={(e) => setCalcData({...calcData, industry: e.target.value})}
                           >
                              <option value="">Select your industry...</option>
                              <option value="Retail">Retail</option>
                              <option value="Finance">Finance</option>
                              <option value="Healthcare">Healthcare</option>
                              <option value="Technology">Technology</option>
                           </select>
                        </div>
                        <button type="submit" className="w-full py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary-hover shadow-lg transition-all mt-4">
                           Calculate Timeline
                        </button>
                     </motion.form>
                  ) : (
                     <motion.div 
                       initial={{ opacity: 0 }} 
                       animate={{ opacity: 1 }}
                       className="text-center"
                     >
                        {!timelineResult ? (
                           <div className="py-12 flex flex-col items-center">
                              <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mb-4"></div>
                              <p className="text-gray-500 font-medium">Analyzing scope...</p>
                           </div>
                        ) : (
                           <div className="py-6">
                              <div className="inline-block p-4 bg-green-50 rounded-full mb-6">
                                 <CheckCircle2 size={48} className="text-green-500" />
                              </div>
                              <h3 className="text-gray-500 mb-2">Estimated Delivery</h3>
                              <div className="text-5xl font-extrabold text-navy-900 mb-6">{timelineResult}</div>
                              <p className="text-gray-600 mb-8 max-w-md mx-auto">
                                 Based on your selection of a <strong>{calcData.type}</strong> for <strong>{calcData.industry}</strong>, we can deliver an MVP in this timeframe.
                              </p>
                              <button onClick={() => setCalcStep(1)} className="text-sm text-gray-400 hover:text-navy-900 underline">
                                 Calculate Again
                              </button>
                              <div className="mt-8 pt-8 border-t border-gray-100">
                                 <button onClick={onOpenBrief} className="px-8 py-3 bg-navy-900 text-white font-bold rounded-full hover:bg-navy-800 transition-all">
                                    Book Consultation
                                 </button>
                              </div>
                           </div>
                        )}
                     </motion.div>
                  )}
               </div>
            </div>
         </div>
      </section>

      {/* 7. Ready to Launch */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <motion.div
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
          >
             <h2 className="text-4xl md:text-5xl font-display font-extrabold text-navy-900 mb-6">Ready to Launch in 8 Weeks?</h2>
             <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
               Join companies that accelerate their growth with AI-powered solutions.
             </p>
             <button 
               onClick={onOpenBrief}
               className="px-10 py-5 bg-primary text-white text-xl font-bold rounded-full shadow-xl hover:bg-primary-hover hover:scale-105 transition-all flex items-center gap-3 mx-auto"
             >
               <Rocket size={24} /> Start Your Project Brief
             </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Process;