import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, BarChart3, Clock, CheckCircle2, 
  TrendingUp, Users, ShoppingBag, Zap, ShieldCheck,
  Calendar, Layers, Star, Quote
} from 'lucide-react';

interface ProjectsProps {
  onOpenConsultation: () => void;
}

const SUCCESS_STORIES = [
  {
    id: 1,
    title: "FashionOS",
    industry: "E-Commerce",
    challenge: "High return rates due to sizing inconsistencies.",
    solution: "AI-powered virtual sizing assistant and fit prediction engine.",
    metrics: [
      { label: "Return Rate", value: "-22%" },
      { label: "Conversion", value: "+18%" }
    ],
    image: "bg-white",
    icon: ShoppingBag
  },
  {
    id: 2,
    title: "AutoMax AI",
    industry: "Automotive",
    challenge: "Inefficient customer support during peak hours.",
    solution: "Generative AI chatbot with inventory integration.",
    metrics: [
      { label: "Response Time", value: "<2s" },
      { label: "Sales Leads", value: "+35%" }
    ],
    image: "bg-white",
    icon: Zap
  },
  {
    id: 3,
    title: "MediSecure",
    industry: "Healthcare",
    challenge: "Manual data entry leading to compliance risks.",
    solution: "Automated document processing with NLP.",
    metrics: [
      { label: "Accuracy", value: "99.9%" },
      { label: "Hours Saved", value: "400/mo" }
    ],
    image: "bg-white",
    icon: ShieldCheck
  }
];

const TESTIMONIALS = [
  {
    quote: "The speed and quality of delivery were unmatched. Sunai didn't just build an app; they built a growth engine for us.",
    name: "James Carter",
    company: "CEO, FashionOS",
    image: "https://randomuser.me/api/portraits/men/45.jpg"
  },
  {
    quote: "We were able to launch our MVP in record time. The AI features give us a massive competitive advantage.",
    name: "Amanda Liu",
    company: "Founder, MediSecure",
    image: "https://randomuser.me/api/portraits/women/63.jpg"
  },
  {
    quote: "Professional, knowledgeable, and efficient. The 8-week timeline was accurate to the day.",
    name: "Robert Fox",
    company: "CTO, AutoMax AI",
    image: "https://randomuser.me/api/portraits/men/22.jpg"
  }
];

const Projects: React.FC<ProjectsProps> = ({ onOpenConsultation }) => {
  const [calcStep, setCalcStep] = useState(1);
  const [calcResult, setCalcResult] = useState(0);

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    setCalcStep(2);
    // Simulate calculation
    setTimeout(() => {
      setCalcResult(6); // 6 weeks example
    }, 1000);
  };

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
              <Star size={16} className="fill-current" /> Real Projects. Real Results.
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-extrabold text-navy-900 mb-6 tracking-tight">
              Real Results. <span className="text-primary">Real Impact.</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
              Discover how we’ve transformed businesses with AI applications delivered in just 8 weeks.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button 
                onClick={onOpenConsultation}
                className="px-8 py-4 bg-primary text-white text-lg font-bold rounded-md shadow-lg hover:bg-primary-hover transition-all"
              >
                Start Your Project
              </button>
              <button className="px-8 py-4 bg-white text-navy-900 border border-gray-200 text-lg font-bold rounded-md hover:bg-white/80 transition-all">
                See Success Stories
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Featured Success Stories */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-navy-900 mb-4">Featured Success Stories</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Real AI applications transforming businesses across industries.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SUCCESS_STORIES.map((story, i) => (
              <motion.div
                key={story.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group bg-white rounded-lg border border-gray-200 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all overflow-hidden"
              >
                <div className={`h-48 bg-beige flex items-center justify-center relative overflow-hidden`}>
                  <story.icon size={64} className="text-primary/20 group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full text-xs font-bold text-navy-900 uppercase tracking-wide border border-gray-100">
                    {story.industry}
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-navy-900 mb-4">{story.title}</h3>
                  <div className="space-y-4 mb-8">
                    <div>
                      <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Challenge</h4>
                      <p className="text-sm text-gray-600 leading-relaxed">{story.challenge}</p>
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">AI Solution</h4>
                      <p className="text-sm text-navy-900 font-medium">{story.solution}</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4 mb-8 pt-6 border-t border-gray-100">
                    {story.metrics.map((m, idx) => (
                      <div key={idx} className="flex-1">
                        <div className="text-xl font-bold text-primary">{m.value}</div>
                        <div className="text-xs text-gray-500">{m.label}</div>
                      </div>
                    ))}
                  </div>

                  <button className="w-full py-3 border border-gray-200 text-navy-900 font-bold rounded-md hover:bg-navy-900 hover:text-white transition-all flex items-center justify-center gap-2">
                    View Case Study <ArrowRight size={16} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Project Timeline Calculator */}
      <section className="py-24 bg-beige">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-card overflow-hidden flex flex-col md:flex-row border border-gray-200">
            <div className="bg-beige p-10 text-navy-900 md:w-1/3 flex flex-col justify-center">
              <Calendar className="text-primary mb-6" size={48} />
              <h2 className="text-2xl font-bold mb-4">Calculate Your Project Timeline</h2>
              <p className="text-gray-500 text-sm leading-relaxed">
                Get a customized project timeline based on your specific needs and industry requirements.
              </p>
            </div>
            
            <div className="p-10 md:w-2/3">
              {calcStep === 1 ? (
                <form onSubmit={handleCalculate} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-navy-900 mb-2">Industry</label>
                      <select className="w-full p-3 bg-gray-50 border border-gray-200 rounded-md focus:ring-2 focus:ring-primary outline-none text-sm">
                        <option>E-commerce</option>
                        <option>Healthcare</option>
                        <option>Finance</option>
                        <option>SaaS</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-navy-900 mb-2">Project Size</label>
                      <select className="w-full p-3 bg-gray-50 border border-gray-200 rounded-md focus:ring-2 focus:ring-primary outline-none text-sm">
                        <option>MVP (Core Features)</option>
                        <option>Scale-Up</option>
                        <option>Enterprise</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-navy-900 mb-2">Primary Goal</label>
                    <div className="grid grid-cols-2 gap-3">
                      {['Automation', 'Customer Experience', 'Data Insights', 'New Product'].map((goal) => (
                        <label key={goal} className="flex items-center gap-2 p-3 border border-gray-200 rounded-md cursor-pointer hover:border-primary transition-colors">
                          <input type="radio" name="goal" className="text-primary focus:ring-primary" />
                          <span className="text-sm text-gray-600">{goal}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  <button type="submit" className="w-full py-4 bg-primary text-white font-bold rounded-md hover:bg-primary-hover shadow-lg transition-all mt-4">
                    Calculate Timeline
                  </button>
                </form>
              ) : (
                <div className="text-center py-8">
                  {calcResult === 0 ? (
                    <div className="animate-pulse flex flex-col items-center">
                      <div className="h-4 w-3/4 bg-gray-200 rounded mb-4"></div>
                      <div className="h-8 w-1/2 bg-gray-200 rounded mb-8"></div>
                      <div className="h-2 w-full bg-gray-200 rounded"></div>
                    </div>
                  ) : (
                    <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}>
                      <h3 className="text-gray-500 font-medium mb-2">Estimated Time to Launch</h3>
                      <div className="text-6xl font-extrabold text-navy-900 mb-6 flex items-center justify-center gap-2">
                         4-6 <span className="text-2xl text-primary self-end mb-2">Weeks</span>
                      </div>
                      
                      <div className="w-full bg-gray-100 rounded-full h-4 mb-8 overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }} 
                          animate={{ width: "60%" }} 
                          transition={{ duration: 1 }}
                          className="bg-primary h-full rounded-full"
                        />
                      </div>

                      <button onClick={() => setCalcStep(1)} className="text-sm text-gray-400 hover:text-navy-900 underline mb-6 block mx-auto">
                        Recalculate
                      </button>
                      
                      <button onClick={onOpenConsultation} className="px-8 py-3 bg-navy-900 text-white font-bold rounded-md hover:bg-navy-800 transition-all">
                        Start Your Project
                      </button>
                    </motion.div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Comparison Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-navy-900 mb-6">Why 8 Weeks Beats 6 Months</h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Our streamlined AI development process cuts out the fluff. We focus on high-impact features and rapid iteration to save you time and money.
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  "Rapid Prototyping & Testing",
                  "Pre-built AI Modules",
                  "Agile Sprint Methodology",
                  "Focus on Core Value (MVP)"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-beige flex items-center justify-center text-primary">
                      <CheckCircle2 size={14} />
                    </div>
                    <span className="font-medium text-navy-900">{item}</span>
                  </li>
                ))}
              </ul>
              <button className="text-primary font-bold flex items-center gap-2 hover:gap-3 transition-all">
                Learn More About Our Process <ArrowRight size={18} />
              </button>
            </div>

            <div className="bg-beige rounded-lg p-8 border border-gray-200">
              <div className="space-y-8">
                {/* Comparison Bar 1 */}
                <div>
                  <div className="flex justify-between text-sm font-bold mb-2">
                    <span className="text-navy-900">Time to Market</span>
                    <span className="text-green-600">4x Faster</span>
                  </div>
                  <div className="h-12 bg-white rounded-md flex overflow-hidden border border-gray-200">
                    <div className="w-[25%] bg-primary flex items-center justify-center text-white text-xs font-bold">8 Wks</div>
                    <div className="w-[75%] bg-gray-100 flex items-center justify-center text-gray-500 text-xs font-bold">Industry Avg (32 Wks)</div>
                  </div>
                </div>

                {/* Comparison Bar 2 */}
                <div>
                  <div className="flex justify-between text-sm font-bold mb-2">
                    <span className="text-navy-900">Development Cost</span>
                    <span className="text-green-600">60% Savings</span>
                  </div>
                  <div className="h-12 bg-white rounded-md flex overflow-hidden border border-gray-200">
                     <div className="w-[40%] bg-navy-900 flex items-center justify-center text-white text-xs font-bold">Sunai</div>
                     <div className="w-[60%] bg-gray-100 flex items-center justify-center text-gray-500 text-xs font-bold">Traditional Agency</div>
                  </div>
                </div>

                {/* Comparison Bar 3 */}
                <div>
                  <div className="flex justify-between text-sm font-bold mb-2">
                    <span className="text-navy-900">On-Time Delivery</span>
                    <span className="text-green-600">98% Success</span>
                  </div>
                  <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden">
                    <div className="w-[98%] h-full bg-green-500"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Proven Track Record */}
      <section className="py-24 bg-beige border-t border-gray-200">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-navy-900">Proven Track Record</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-16">
            Our AI solutions deliver measurable results for companies of all sizes.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
            {[
              { label: "Projects Delivered", value: "47+", icon: Layers },
              { label: "Average ROI", value: "300%", icon: TrendingUp },
              { label: "Client Satisfaction", value: "4.9/5", icon: Star },
            ].map((metric, i) => (
              <div key={i} className="flex flex-col items-center">
                 <div className="relative w-32 h-32 flex items-center justify-center mb-6">
                    {/* SVG Circular Progress */}
                    <svg className="w-full h-full transform -rotate-90">
                       <circle cx="64" cy="64" r="58" stroke="currentColor" strokeWidth="8" fill="transparent" className="text-gray-200" />
                       <circle cx="64" cy="64" r="58" stroke="currentColor" strokeWidth="8" fill="transparent" strokeDasharray="360" strokeDashoffset="40" className="text-primary" />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center flex-col">
                       <metric.icon size={24} className="text-gray-400 mb-1" />
                    </div>
                 </div>
                 <h3 className="text-4xl font-bold mb-2 text-navy-900">{metric.value}</h3>
                 <p className="text-gray-500 text-sm uppercase tracking-widest">{metric.label}</p>
              </div>
            ))}
          </div>

          <div className="pt-12 border-t border-gray-200">
             <p className="text-gray-500 text-sm mb-8">TRUSTED BY INNOVATIVE TEAMS</p>
             <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                {["FashionOS", "AutoMax", "MediSecure", "TechFlow", "LogiStream"].map((logo, i) => (
                   <span key={i} className="text-xl font-display font-bold text-navy-900 hover:text-primary transition-colors cursor-default">{logo}</span>
                ))}
             </div>
             <div className="mt-12">
               <button onClick={() => {}} className="text-navy-900 border-b border-primary pb-1 hover:text-primary transition-colors font-medium">
                  See Full Portfolio
               </button>
             </div>
          </div>
        </div>
      </section>

      {/* 6. Testimonials */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
             <h2 className="text-3xl md:text-4xl font-display font-bold text-navy-900 mb-4">What Our Clients Say</h2>
             <p className="text-gray-600">Hear from businesses who have benefited from our AI solutions.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {TESTIMONIALS.map((t, i) => (
                <div key={i} className="bg-beige p-8 rounded-lg relative border border-gray-200">
                   <Quote className="text-primary/20 absolute top-6 right-6" size={40} />
                   <p className="text-navy-900 font-medium leading-relaxed mb-8 relative z-10">"{t.quote}"</p>
                   <div className="flex items-center gap-4">
                      <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
                      <div>
                         <h4 className="font-bold text-navy-900 text-sm">{t.name}</h4>
                         <p className="text-xs text-gray-500">{t.company}</p>
                      </div>
                   </div>
                   <div className="mt-4 flex gap-1 text-yellow-400">
                      {[1,2,3,4,5].map(s => <Star key={s} size={14} fill="currentColor" />)}
                   </div>
                </div>
             ))}
          </div>
          
          <div className="text-center mt-12">
             <button className="px-6 py-3 border border-gray-200 rounded-md text-navy-900 font-bold hover:bg-beige transition-all">
                Read More Testimonials
             </button>
          </div>
        </div>
      </section>

      {/* 7. CTA Section */}
      <section className="py-24 bg-beige text-center">
         <div className="container mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-display font-extrabold text-navy-900 mb-6">Ready to Launch Your AI Solution?</h2>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
               Transform your business in just 8 weeks. Let's turn your vision into reality.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
               <button 
                 onClick={onOpenConsultation}
                 className="px-10 py-5 bg-primary text-white text-xl font-bold rounded-md shadow-lg hover:bg-primary-hover transition-all"
               >
                 Start Your 8-Week Journey
               </button>
               <button className="px-10 py-5 bg-white text-navy-900 border border-gray-200 text-xl font-bold rounded-md hover:bg-white/80 transition-all">
                 Contact Us
               </button>
            </div>
         </div>
      </section>
    </div>
  );
};

export default Projects;