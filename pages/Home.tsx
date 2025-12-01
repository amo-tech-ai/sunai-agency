import React, { useState, useEffect } from 'react';
import { 
  Code2, Smartphone, Share2, MessageCircle, 
  ArrowRight, CheckCircle2, BarChart3, Rocket,
  Quote, Star, Shield, Lock, Server, Activity, Filter, 
  Layout, Globe, TrendingUp, Users, CreditCard, ShoppingCart,
  ChevronLeft, ChevronRight, Sliders, Brain, Workflow, PieChart
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';
import { PageName } from '../types';

interface HomeProps {
  onOpenBrief: () => void;
  onNavigate: (page: PageName) => void;
}

// --- Data Constants ---

const SOLUTIONS = [
  { 
    title: "Custom AI Applications", 
    description: "Tailor-made AI software built to solve your specific business challenges.", 
    icon: Code2, 
    color: "text-blue-600" 
  },
  { 
    title: "AI Automation", 
    description: "Streamline workflows by automating repetitive tasks with intelligent agents.", 
    icon: Workflow, 
    color: "text-primary" 
  },
  { 
    title: "Machine Learning Integration", 
    description: "Embed predictive models into your existing software ecosystem.", 
    icon: Brain, 
    color: "text-purple-600" 
  },
  { 
    title: "Predictive Analytics", 
    description: "Turn historical data into future insights with advanced forecasting.", 
    icon: PieChart, 
    color: "text-green-600" 
  }
];

const PROCESS = [
  { id: 1, title: "Discovery & Analysis", step: "Step 1", description: "We analyze your business needs, data infrastructure, and AI readiness." },
  { id: 2, title: "Custom Dev & Training", step: "Step 2", description: "Building models and training them on your proprietary data sets." },
  { id: 3, title: "Integration & Testing", step: "Step 3", description: "Seamlessly connecting AI modules with your existing ERP/CRM systems." },
  { id: 4, title: "Deployment & Optimization", step: "Step 4", description: "Live launch with continuous monitoring and performance tuning." }
];

const INDUSTRIES = [
  { name: "Retail", icon: ShoppingCart, desc: "Personalized shopping & inventory prediction." },
  { name: "Healthcare", icon: Activity, desc: "Diagnostic support & patient data analysis." },
  { name: "Finance", icon: CreditCard, desc: "Fraud detection & automated trading." },
  { name: "E-commerce", icon: Globe, desc: "Recommendation engines & dynamic pricing." },
];

const CASE_STUDIES = [
  { 
    id: 1, 
    title: "Smart Inventory System", 
    category: "Retail", 
    image: "bg-blue-100", 
    desc: "Reduced stockouts by 45% using predictive AI models." 
  },
  { 
    id: 2, 
    title: "FinTech Fraud Guard", 
    category: "Finance", 
    image: "bg-green-100", 
    desc: "Real-time anomaly detection saving $2M annually." 
  },
  { 
    id: 3, 
    title: "Patient Triage Bot", 
    category: "Healthcare", 
    image: "bg-purple-100", 
    desc: "Automated symptom analysis reducing wait times by 30%." 
  },
  { 
    id: 4, 
    title: "Dynamic Pricing Engine", 
    category: "E-commerce", 
    image: "bg-orange-100", 
    desc: "AI-driven pricing adjustments increasing margin by 12%." 
  },
];

const TESTIMONIALS = [
  {
    quote: "Sunai transformed our manual data processes into a slick, automated AI workflow. The ROI was visible in weeks.",
    name: "Sarah Jenkins",
    role: "CTO",
    company: "TechFlow Inc.",
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    quote: "Their team doesn't just build code; they understand business strategy. The predictive model they built is now our core asset.",
    name: "Michael Chen",
    role: "Director of Operations",
    company: "LogiStream",
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    quote: "We were skeptical about AI, but Sunai's MVP approach proved the value instantly. Highly recommended.",
    name: "Elena Rodriguez",
    role: "Founder",
    company: "Novus Retail",
    image: "https://randomuser.me/api/portraits/women/68.jpg"
  }
];

const TECH_STACK = ["CopilotKit", "LangChain", "Supabase", "OpenAI", "Vercel", "Tailwind", "React", "Gemini", "Pinecone"];

// --- Helper Components ---

const SparklesIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary">
    <path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" fill="currentColor"/>
  </svg>
);

const Home: React.FC<HomeProps> = ({ onOpenBrief, onNavigate }) => {
  // State for Dashboard Demo
  const [sliderValue, setSliderValue] = useState(50);
  const [dashboardData, setDashboardData] = useState<any[]>([]);

  // State for Case Studies
  const [activeCategory, setActiveCategory] = useState("All");

  // State for Testimonials
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Generate Dashboard Data on Slider Change
  useEffect(() => {
    const newData = Array.from({ length: 7 }, (_, i) => ({
      name: `Day ${i + 1}`,
      efficiency: 40 + (sliderValue * 0.4) + Math.random() * 10,
      cost: 100 - (sliderValue * 0.6) - Math.random() * 5,
    }));
    setDashboardData(newData);
  }, [sliderValue]);

  const filteredCaseStudies = activeCategory === "All" 
    ? CASE_STUDIES 
    : CASE_STUDIES.filter(cs => cs.category === activeCategory);

  const nextTestimonial = () => setCurrentTestimonial((prev) => (prev + 1) % TESTIMONIALS.length);
  const prevTestimonial = () => setCurrentTestimonial((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-gray-50">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] animate-blob mix-blend-multiply" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-blue-200/20 rounded-full blur-[100px] animate-blob animation-delay-2000 mix-blend-multiply" />
          <div className="absolute top-[20%] right-[20%] w-[300px] h-[300px] bg-yellow-200/20 rounded-full blur-[80px] animate-blob animation-delay-4000 mix-blend-multiply" />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 text-primary text-sm font-semibold mb-8 shadow-sm"
          >
            <SparklesIcon />
            <span>The Future of Development is Here</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-display font-extrabold tracking-tight leading-[1.1] mb-6 text-navy-900"
          >
            Transform Your Business with <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-yellow-500 to-primary bg-[200%_auto] animate-shine">
              AI-Powered Web Applications
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Harness the power of artificial intelligence to drive growth, streamline processes, and deliver smarter solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button 
              onClick={onOpenBrief}
              className="group relative px-8 py-4 bg-primary text-white text-lg font-bold rounded-full overflow-hidden shadow-[0_4px_20px_rgba(255,122,26,0.3)] hover:shadow-[0_4px_30px_rgba(255,122,26,0.5)] transition-all"
            >
              <span className="relative z-10 flex items-center gap-2">
                Get Started with AI <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Tech Stack Marquee */}
      <section className="py-12 border-y border-gray-100 bg-white overflow-hidden">
        <div className="relative flex overflow-x-hidden group">
          <div className="animate-scroll whitespace-nowrap flex gap-16 px-8">
            {[...TECH_STACK, ...TECH_STACK].map((tech, i) => (
              <span key={i} className="text-2xl font-display font-bold text-navy-900/30 hover:text-navy-900/80 transition-colors cursor-default">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* AI Solutions in Detail */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-navy-900 mb-4">Explore Our AI Solutions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">From custom applications to powerful automation, discover our suite of services.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SOLUTIONS.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="p-8 rounded-2xl bg-white border border-gray-100 shadow-lg shadow-gray-200/50 hover:shadow-xl hover:shadow-gray-200/80 transition-all group cursor-default"
              >
                <div className={`w-14 h-14 rounded-xl bg-gray-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 ${service.color}`}>
                  <service.icon size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-navy-900">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">{service.description}</p>
                <button 
                  onClick={() => onNavigate('services')}
                  className="text-sm font-bold text-navy-900 group-hover:text-primary transition-colors flex items-center gap-1"
                >
                  Learn More <ArrowRight size={14} />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive AI Dashboard Demo */}
      <section className="py-24 bg-navy-900 text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:30px_30px]" />
        <div className="container mx-auto px-6 relative z-10">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                 <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">See the Power of AI at Work</h2>
                 <p className="text-gray-400 text-lg mb-8">
                   Visualize how AI can optimize your business operations with our real-time demo. 
                   Adjust the parameters to see how AI implementation impacts efficiency and cost.
                 </p>
                 
                 <div className="space-y-8 bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-sm">
                    <div>
                       <div className="flex justify-between text-sm font-semibold mb-2">
                          <span className="flex items-center gap-2"><Sliders size={16} className="text-primary"/> AI Optimization Level</span>
                          <span className="text-primary">{sliderValue}%</span>
                       </div>
                       <input 
                         type="range" 
                         min="0" 
                         max="100" 
                         value={sliderValue} 
                         onChange={(e) => setSliderValue(Number(e.target.value))}
                         className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-primary"
                       />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                       <div className="p-4 bg-navy-800 rounded-lg">
                          <div className="text-gray-400 text-xs uppercase tracking-wider mb-1">Projected Efficiency</div>
                          <div className="text-2xl font-bold text-green-400">+{Math.round(sliderValue * 0.8)}%</div>
                       </div>
                       <div className="p-4 bg-navy-800 rounded-lg">
                          <div className="text-gray-400 text-xs uppercase tracking-wider mb-1">Cost Reduction</div>
                          <div className="text-2xl font-bold text-primary">-{Math.round(sliderValue * 0.5)}%</div>
                       </div>
                    </div>
                    <button onClick={onOpenBrief} className="w-full py-3 bg-white text-navy-900 font-bold rounded-lg hover:bg-gray-100 transition-colors">
                      Request Live Demo
                    </button>
                 </div>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 shadow-2xl backdrop-blur-md h-[400px]">
                 <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-2">
                       <Activity size={18} className="text-green-400" />
                       <span className="font-bold">Real-Time Performance</span>
                    </div>
                    <div className="flex gap-2">
                       <span className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500" />
                       <span className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500" />
                       <span className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500" />
                    </div>
                 </div>
                 <ResponsiveContainer width="100%" height="85%">
                    <AreaChart data={dashboardData}>
                       <defs>
                          <linearGradient id="colorEff" x1="0" y1="0" x2="0" y2="1">
                             <stop offset="5%" stopColor="#4ade80" stopOpacity={0.3}/>
                             <stop offset="95%" stopColor="#4ade80" stopOpacity={0}/>
                          </linearGradient>
                          <linearGradient id="colorCost" x1="0" y1="0" x2="0" y2="1">
                             <stop offset="5%" stopColor="#FF7A1A" stopOpacity={0.3}/>
                             <stop offset="95%" stopColor="#FF7A1A" stopOpacity={0}/>
                          </linearGradient>
                       </defs>
                       <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" vertical={false} />
                       <XAxis dataKey="name" stroke="#ffffff50" fontSize={12} tickLine={false} axisLine={false} />
                       <YAxis stroke="#ffffff50" fontSize={12} tickLine={false} axisLine={false} />
                       <Tooltip 
                          contentStyle={{ backgroundColor: '#1E2742', borderColor: '#ffffff20', color: '#fff' }}
                       />
                       <Area type="monotone" dataKey="efficiency" stroke="#4ade80" strokeWidth={2} fillOpacity={1} fill="url(#colorEff)" name="Efficiency" />
                       <Area type="monotone" dataKey="cost" stroke="#FF7A1A" strokeWidth={2} fillOpacity={1} fill="url(#colorCost)" name="Op Costs" />
                    </AreaChart>
                 </ResponsiveContainer>
              </div>
           </div>
        </div>
      </section>

      {/* Industry Specific Solutions */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
           <div className="text-center mb-16">
              <h2 className="text-4xl font-display font-bold text-navy-900 mb-4">AI for Every Industry</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">Whether you're in retail, healthcare, or finance, we have the AI solutions for you.</p>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {INDUSTRIES.map((ind, i) => (
                 <motion.div 
                   key={i}
                   whileHover={{ y: -5 }}
                   className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 group hover:border-primary/50 transition-all"
                 >
                    <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center text-navy-900 mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                       <ind.icon size={24} />
                    </div>
                    <h4 className="text-xl font-bold text-navy-900 mb-2">{ind.name}</h4>
                    <p className="text-gray-600 text-sm mb-4">{ind.desc}</p>
                    <a href="#" onClick={(e) => {e.preventDefault(); onNavigate('services')}} className="text-primary text-sm font-bold flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                       Explore Solutions <ArrowRight size={14} />
                    </a>
                 </motion.div>
              ))}
           </div>
        </div>
      </section>

      {/* AI Development Process */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-display font-bold mb-6 text-navy-900">
              Our AI Development & Integration Process
            </h2>
            <p className="text-gray-600">We make AI implementation easy, from conceptualization to integration.</p>
          </div>

          <div className="relative">
            <div className="hidden md:block absolute top-[40px] left-0 w-full h-1 bg-gray-100">
                 <motion.div 
                   initial={{ width: "0%" }}
                   whileInView={{ width: "100%" }}
                   transition={{ duration: 1.5, ease: "easeInOut" }}
                   viewport={{ once: true }}
                   className="h-full bg-gradient-to-r from-white via-primary to-white opacity-50"
                 />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
              {PROCESS.map((step, index) => (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="relative flex flex-col items-center text-center group"
                >
                  <div className="w-20 h-20 rounded-full bg-white border-4 border-gray-50 flex items-center justify-center text-xl font-bold mb-6 group-hover:border-primary group-hover:text-primary transition-colors shadow-lg shadow-gray-200 z-20 text-navy-900">
                    <span className="text-sm text-gray-400 block -mb-1 mr-1">{step.step}</span>
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-navy-900">{step.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="text-center mt-16">
             <button onClick={onOpenBrief} className="px-8 py-3 bg-navy-900 text-white font-bold rounded-full hover:bg-navy-800 transition-all shadow-lg">
                Start Your Project Today
             </button>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-24 bg-gray-50">
         <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-center mb-12">
               <div>
                  <h2 className="text-3xl md:text-4xl font-display font-bold text-navy-900 mb-2">AI in Action</h2>
                  <p className="text-gray-600">Real-world impact across industries.</p>
               </div>
               <div className="flex gap-2 mt-4 md:mt-0 overflow-x-auto pb-2 md:pb-0">
                  {["All", "Retail", "Finance", "Healthcare", "E-commerce"].map(cat => (
                     <button 
                       key={cat}
                       onClick={() => setActiveCategory(cat)}
                       className={`px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-colors ${activeCategory === cat ? 'bg-primary text-white' : 'bg-white text-gray-600 hover:bg-gray-200'}`}
                     >
                       {cat}
                     </button>
                  ))}
               </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
               <AnimatePresence mode="popLayout">
                  {filteredCaseStudies.map((cs) => (
                     <motion.div
                       key={cs.id}
                       layout
                       initial={{ opacity: 0, scale: 0.9 }}
                       animate={{ opacity: 1, scale: 1 }}
                       exit={{ opacity: 0, scale: 0.9 }}
                       className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-all group"
                     >
                        <div className={`h-40 ${cs.image} flex items-center justify-center`}>
                           {/* Placeholder for real image */}
                           <BarChart3 className="text-navy-900/20" size={48} />
                        </div>
                        <div className="p-6">
                           <div className="text-xs font-bold text-primary uppercase tracking-wider mb-2">{cs.category}</div>
                           <h3 className="font-bold text-navy-900 mb-2 group-hover:text-primary transition-colors">{cs.title}</h3>
                           <p className="text-sm text-gray-600 mb-4">{cs.desc}</p>
                           <button className="text-sm font-semibold text-navy-900 flex items-center gap-1 hover:gap-2 transition-all">
                              Read Study <ArrowRight size={14} />
                           </button>
                        </div>
                     </motion.div>
                  ))}
               </AnimatePresence>
            </div>
         </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
           <div className="text-center mb-16">
              <h2 className="text-4xl font-display font-bold text-navy-900 mb-4">What Our Clients Are Saying</h2>
              <p className="text-gray-600">Hear from those who have successfully leveraged AI to transform their business.</p>
           </div>

           <div className="max-w-4xl mx-auto">
              <div className="relative bg-gray-50 rounded-3xl p-8 md:p-12 border border-gray-100">
                 <Quote className="absolute top-8 left-8 text-primary/20" size={64} />
                 
                 <div className="relative z-10 text-center">
                    <AnimatePresence mode="wait">
                       <motion.div
                         key={currentTestimonial}
                         initial={{ opacity: 0, y: 20 }}
                         animate={{ opacity: 1, y: 0 }}
                         exit={{ opacity: 0, y: -20 }}
                         transition={{ duration: 0.4 }}
                       >
                          <p className="text-xl md:text-2xl font-medium text-navy-900 mb-8 leading-relaxed">
                            "{TESTIMONIALS[currentTestimonial].quote}"
                          </p>
                          
                          <div className="flex flex-col items-center">
                             <img 
                               src={TESTIMONIALS[currentTestimonial].image} 
                               alt={TESTIMONIALS[currentTestimonial].name}
                               className="w-16 h-16 rounded-full border-4 border-white shadow-md mb-4"
                             />
                             <h4 className="font-bold text-navy-900">{TESTIMONIALS[currentTestimonial].name}</h4>
                             <p className="text-sm text-gray-500">{TESTIMONIALS[currentTestimonial].role}, {TESTIMONIALS[currentTestimonial].company}</p>
                          </div>
                       </motion.div>
                    </AnimatePresence>
                 </div>

                 {/* Navigation Buttons */}
                 <button onClick={prevTestimonial} className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white rounded-full shadow-md text-navy-900 hover:text-primary transition-colors hidden md:block">
                    <ChevronLeft size={24} />
                 </button>
                 <button onClick={nextTestimonial} className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white rounded-full shadow-md text-navy-900 hover:text-primary transition-colors hidden md:block">
                    <ChevronRight size={24} />
                 </button>
              </div>

              {/* Logo Wall Placeholder */}
              <div className="mt-12 flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                 {/* Reusing text for logo placeholders for simplicity */}
                 {["LogiStream", "TechFlow", "Novus Retail", "FinCorp", "MediCare"].map((logo, i) => (
                    <span key={i} className="text-xl font-display font-bold text-navy-900">{logo}</span>
                 ))}
              </div>
           </div>
        </div>
      </section>

      {/* Data Security */}
      <section className="py-20 bg-navy-900 text-white border-b border-white/5">
         <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-12">
               <div className="md:w-1/2">
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 text-blue-400 text-xs font-bold uppercase tracking-wider mb-6 border border-blue-500/20">
                     <Shield size={14} /> Enterprise Grade Security
                  </div>
                  <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Data Security is Our Priority</h2>
                  <p className="text-gray-400 mb-8 leading-relaxed">
                     We follow industry-leading standards to ensure your data remains secure and private. 
                     From SOC2 compliance to end-to-end encryption, your intellectual property is safe with us.
                  </p>
                  <button className="flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all">
                     Learn About Security <ArrowRight size={18} />
                  </button>
               </div>
               <div className="md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                     <Lock className="text-primary mb-4" size={28} />
                     <h4 className="font-bold mb-2">End-to-End Encryption</h4>
                     <p className="text-sm text-gray-400">AES-256 bit encryption for all data at rest and in transit.</p>
                  </div>
                  <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                     <Server className="text-blue-400 mb-4" size={28} />
                     <h4 className="font-bold mb-2">On-Premise Options</h4>
                     <p className="text-sm text-gray-400">Deploy models on your own infrastructure for total control.</p>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative overflow-hidden bg-white">
          <div className="absolute inset-0 bg-gradient-to-b from-white to-primary/5"></div>
          <div className="container mx-auto px-6 relative z-10 text-center">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 text-navy-900">Ready to Unlock the Power of AI?</h2>
            <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
              Use our AI Brief Generator to scope your project in minutes. It's fast, free, and the first step to production.
            </p>
            <button 
              onClick={onOpenBrief}
              className="px-8 py-4 bg-primary text-white text-lg font-bold rounded-full hover:bg-primary-hover shadow-[0_10px_30px_rgba(255,122,26,0.3)] transition-all flex items-center gap-2 mx-auto"
            >
              <Rocket size={20} />
              Start Your AI Brief
            </button>
          </div>
      </section>
    </>
  );
};

export default Home;
