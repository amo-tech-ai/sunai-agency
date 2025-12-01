import React from 'react';
import { motion } from 'framer-motion';
import { 
  Bot, Database, Workflow, TrendingUp, Cpu, Layers, 
  ArrowRight, CheckCircle2, Zap, Clock, Users, ShieldCheck,
  ShoppingBag, MessageSquare, BarChart3, Search, Code2, Rocket
} from 'lucide-react';

interface AIFeaturesProps {
  onOpenConsultation: () => void;
}

const FEATURES = [
  {
    icon: Bot,
    title: "AI Agents & Assistants",
    desc: "Automate support, sales, or user interactions with intelligent virtual agents that understand context.",
    color: "text-primary"
  },
  {
    icon: Database,
    title: "Data-Grounded Content",
    desc: "Generate reports, content, or summaries based specifically on your proprietary documents and data. For example, generate monthly performance reports from your sales data or summarize complex legal documents.",
    color: "text-primary"
  },
  {
    icon: Workflow,
    title: "Automated Workflows",
    desc: "Connect systems (CRM, ERP), trigger actions, and automate complex processes end-to-end.",
    color: "text-primary"
  },
  {
    icon: TrendingUp,
    title: "Predictive Analytics",
    desc: "Leverage AI to analyze historical data trends and accurately forecast performance or outcomes.",
    color: "text-primary"
  },
  {
    icon: Code2,
    title: "Custom AI Models",
    desc: "Tailor fine-tuned AI models and logic to fit your specific business requirements and domain.",
    color: "text-primary"
  },
  {
    icon: Layers,
    title: "Scalable Pipeline",
    desc: "From small tasks to large-scale data processing workflows — scale your automation with confidence.",
    color: "text-primary"
  }
];

const BENEFITS = [
  { icon: Clock, title: "Reduced Manual Workload", desc: "Free your team from repetitive tasks." },
  { icon: Zap, title: "Faster Decisions", desc: "Get data-driven insights instantly." },
  { icon: TrendingUp, title: "Higher Productivity", desc: "Scale operations without multiplying overhead." },
  { icon: Users, title: "Better CX", desc: "Instant responses & smarter interactions." },
  { icon:  BarChart3, title: "Cost Savings", desc: "Automate logic to reduce op costs." },
  { icon: Layers, title: "Flexibility", desc: "Use AI across marketing, ops, and support." }
];

const USE_CASES = [
  {
    title: "E-commerce Engine",
    desc: "AI personalizes product suggestions based on user behavior, leading to higher conversion rates and AOV.",
    benefit: "Increase Sales",
    icon: ShoppingBag
  },
  {
    title: "24/7 Support Bot",
    desc: "AI handles basic queries and FAQs around the clock, freeing your support team for complex issues.",
    benefit: "Reduce Wait Times",
    icon: MessageSquare
  },
  {
    title: "Lead Generation",
    desc: "AI captures leads from various channels, qualifies them instantly, and schedules follow-up actions.",
    benefit: "Automate Sales",
    icon: Users
  },
  {
    title: "Data Decision Reports",
    desc: "AI analyzes raw sales and usage data to output clear, actionable executive summaries and reports.",
    benefit: "Clear Insights",
    icon: BarChart3
  }
];

const PROCESS = [
  { step: "01", title: "Discovery", desc: "Analyze business needs & data sources." },
  { step: "02", title: "Integration", desc: "Connect & prepare your data/APIs." },
  { step: "03", title: "Setup", desc: "Configure AI agents & automation logic." },
  { step: "04", title: "Testing", desc: "Verify results & ensure reliability." },
  { step: "05", title: "Deploy", desc: "Launch live & monitor usage." },
];

const DIFFERENTIATORS = [
  { title: "Custom-Built for Data", desc: "AI grounded in your real files." },
  { title: "Scalable & Secure", desc: "Built with enterprise security." },
  { title: "Cross-Industry", desc: "Experience in Retail, SaaS, & Ops." },
  { title: "Full-Stack Automation", desc: "From chatbots to backend pipelines." },
];

const AIFeatures: React.FC<AIFeaturesProps> = ({ onOpenConsultation }) => {
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
                <Cpu size={16} /> Intelligent Automation
             </div>
             <h1 className="text-4xl md:text-6xl font-display font-extrabold text-navy-900 mb-6 leading-tight">
                AI-Powered Automation & <br />
                <span className="text-primary">Intelligence For Your Business</span>
             </h1>
             <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed">
                From smart agents to data-grounded automation — scale faster, reduce manual work, and boost performance with our custom AI solutions.
             </p>
             <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button 
                   onClick={onOpenConsultation}
                   className="px-8 py-4 bg-primary text-white text-lg font-bold rounded-md hover:bg-primary-hover shadow-lg transition-all"
                >
                   Get Started with AI
                </button>
                <button className="px-8 py-4 bg-white text-navy-900 border border-gray-200 text-lg font-bold rounded-md hover:bg-gray-50 transition-all">
                   Explore Features
                </button>
             </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Core AI Features */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
           <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-navy-900 mb-4">What Our AI System Can Do</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">Features designed to automate tasks, interpret data, and deliver intelligent results.</p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {FEATURES.map((feature, i) => (
                 <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="p-8 rounded-lg border border-gray-200 bg-white hover:shadow-card-hover hover:-translate-y-1 transition-all group"
                 >
                    <div className={`w-14 h-14 rounded-md bg-beige flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300`}>
                       <feature.icon size={28} className="text-primary group-hover:text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-navy-900 mb-3">{feature.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-6">{feature.desc}</p>
                 </motion.div>
              ))}
           </div>
           
           <div className="text-center mt-12">
              <button onClick={onOpenConsultation} className="text-primary font-bold flex items-center gap-2 mx-auto hover:gap-3 transition-all">
                 Schedule a Demo <ArrowRight size={18} />
              </button>
           </div>
        </div>
      </section>

      {/* 3. Business Benefits */}
      <section className="py-24 bg-beige border-y border-gray-200">
         <div className="container mx-auto px-6">
            <div className="text-center mb-16">
               <h2 className="text-3xl md:text-4xl font-display font-bold text-navy-900 mb-4">How Businesses Benefit</h2>
               <p className="text-gray-600">Boost efficiency, reduce costs, and unlock new growth with AI.</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
               {BENEFITS.map((b, i) => (
                  <div key={i} className="bg-white p-6 rounded-lg border border-gray-200 text-center hover:border-primary transition-colors">
                     <div className="w-10 h-10 mx-auto bg-beige rounded-full flex items-center justify-center text-primary mb-4">
                        <b.icon size={20} />
                     </div>
                     <h4 className="font-bold text-navy-900 text-sm mb-2">{b.title}</h4>
                     <p className="text-xs text-gray-500">{b.desc}</p>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* 4. Use Case Showcases */}
      <section className="py-24 bg-white">
         <div className="container mx-auto px-6">
            <div className="text-center mb-16">
               <h2 className="text-3xl md:text-4xl font-display font-bold text-navy-900 mb-4">Real-World Use Cases</h2>
               <p className="text-gray-600">See how businesses like yours are using AI today.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               {USE_CASES.map((uc, i) => (
                  <div key={i} className="flex flex-col md:flex-row gap-6 p-8 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-all">
                     <div className="shrink-0">
                        <div className="w-16 h-16 bg-beige rounded-md flex items-center justify-center text-primary">
                           <uc.icon size={32} />
                        </div>
                     </div>
                     <div>
                        <h3 className="text-xl font-bold text-navy-900 mb-2">{uc.title}</h3>
                        <p className="text-gray-600 text-sm mb-4 leading-relaxed">{uc.desc}</p>
                        <div className="inline-block bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                           Benefit: {uc.benefit}
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* 5. Process Flow */}
      <section className="py-24 bg-beige border-y border-gray-200">
         <div className="container mx-auto px-6">
            <div className="text-center mb-20">
               <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-navy-900">Our AI Implementation Process</h2>
               <p className="text-gray-600">From concept to deployment — a clear, step-by-step approach.</p>
            </div>
            
            <div className="relative">
               {/* Connector Line */}
               <div className="hidden md:block absolute top-[28px] left-0 w-full h-0.5 bg-gray-200 z-0"></div>
               
               <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative z-10">
                  {PROCESS.map((step, i) => (
                     <div key={i} className="flex flex-col items-center text-center group">
                        <div className="w-14 h-14 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center font-bold text-lg mb-6 group-hover:border-primary group-hover:text-primary transition-all shadow-sm text-navy-900">
                           {step.step}
                        </div>
                        <h3 className="font-bold text-lg text-navy-900 mb-2">{step.title}</h3>
                        <p className="text-sm text-gray-500">{step.desc}</p>
                     </div>
                  ))}
               </div>
            </div>
            
            <div className="text-center mt-16">
               <button onClick={onOpenConsultation} className="px-8 py-3 bg-navy-900 text-white font-bold rounded-md hover:bg-navy-700 transition-all">
                  Start Your AI Project
               </button>
            </div>
         </div>
      </section>

      {/* 6. Why Choose Us */}
      <section className="py-24 bg-white">
         <div className="container mx-auto px-6">
            <div className="text-center mb-16">
               <h2 className="text-3xl font-display font-bold text-navy-900 mb-12">Why Choose Our AI Solutions</h2>
               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                  {DIFFERENTIATORS.map((diff, i) => (
                     <div key={i} className="p-6 rounded-lg bg-beige border border-transparent hover:border-gray-200 hover:bg-white hover:shadow-card transition-all">
                        <CheckCircle2 className="text-primary mx-auto mb-4" size={32} />
                        <h4 className="font-bold text-navy-900 mb-2">{diff.title}</h4>
                        <p className="text-sm text-gray-500">{diff.desc}</p>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </section>

      {/* 7. CTA Section */}
      <section className="py-24 bg-beige text-center border-t border-gray-200">
         <div className="container mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-display font-extrabold mb-6 text-navy-900">Ready to Transform Your Business?</h2>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
               Let’s build a custom AI solution tailored to your needs. Fast, scalable, and secure.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
               <button 
                  onClick={onOpenConsultation}
                  className="px-10 py-5 bg-primary text-white text-xl font-bold rounded-md shadow-lg hover:bg-primary-hover transition-all"
               >
                  Start Your Project
               </button>
               <button className="px-10 py-5 bg-white border border-gray-200 text-navy-900 text-xl font-bold rounded-md hover:bg-gray-50 transition-all">
                  Book a Consultation
               </button>
            </div>
         </div>
      </section>
    </div>
  );
};

export default AIFeatures;