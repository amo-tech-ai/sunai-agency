import React from 'react';
import { 
  Code2, Brain, MessageSquare, PieChart, Workflow, 
  ShoppingBag, Stethoscope, LineChart, Store, Factory,
  CheckCircle2, ArrowRight, Zap, Users, ShieldCheck, Scale,
  Rocket
} from 'lucide-react';
import { motion } from 'framer-motion';

interface ServicesProps {
  onOpenConsultation: () => void;
}

const Services: React.FC<ServicesProps> = ({ onOpenConsultation }) => {
  return (
    <div className="bg-white">
      {/* 1. Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gray-50">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-blue-100/50 rounded-full blur-[120px] mix-blend-multiply opacity-70" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-primary/10 rounded-full blur-[100px] mix-blend-multiply opacity-60" />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-display font-extrabold text-navy-900 mb-6 leading-tight"
          >
            Transform Your Business with <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-600">
              AI-Powered Web Applications
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto mb-10"
          >
            Harness the power of artificial intelligence to drive growth, streamline processes, and deliver smarter solutions.
          </motion.p>
          
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ scale: 1.05, boxShadow: "0 10px 30px -10px rgba(255, 122, 26, 0.5)" }}
            onClick={onOpenConsultation}
            className="px-8 py-4 bg-primary text-white text-lg font-bold rounded-full shadow-lg hover:bg-primary-hover transition-all"
          >
            Get Started with AI
          </motion.button>
        </div>
      </section>

      {/* 2. Service Features Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-primary uppercase tracking-wider mb-2">Our AI Development Services</h2>
            <h3 className="text-3xl md:text-4xl font-display font-bold text-navy-900">Tailored Solutions for Unique Needs</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Code2, title: "AI Web Applications", desc: "Scalable, intelligent apps that adapt to user behavior." },
              { icon: Brain, title: "Machine Learning Solutions", desc: "Predictive models that turn data into decision-making power." },
              { icon: MessageSquare, title: "Chatbots & Assistants", desc: "24/7 customer support with natural language understanding." },
              { icon: PieChart, title: "Data Analytics", desc: "Extract actionable insights from complex datasets visually." },
              { icon: Workflow, title: "AI Integration", desc: "Seamlessly embed AI into your existing workflows & tools." },
              { icon: Zap, title: "Automation", desc: "Eliminate repetitive tasks and boost operational efficiency." }
            ].map((service, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="p-8 rounded-2xl bg-white border border-gray-100 shadow-md hover:shadow-xl transition-all group"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                  <service.icon size={24} />
                </div>
                <h4 className="text-xl font-bold text-navy-900 mb-3">{service.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Use Cases Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-navy-900 mb-4">AI Use Cases for Your Business</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">From personalized user experiences to intelligent automation, AI transforms industries.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: ShoppingBag, title: "E-commerce", items: ["Product Recommendations", "Inventory Management"] },
              { icon: Stethoscope, title: "Healthcare", items: ["Medical Data Analysis", "Predictive Diagnostics"] },
              { icon: LineChart, title: "Finance", items: ["Fraud Detection", "Automated Trading"] },
              { icon: Store, title: "Retail", items: ["Smart Customer Service", "Personalized Marketing"] },
              { icon: Factory, title: "Manufacturing", items: ["Process Automation", "Predictive Maintenance"] },
              { icon: ShieldCheck, title: "Cybersecurity", items: ["Threat Detection", "Automated Response"] }
            ].map((useCase, i) => (
              <div key={i} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:border-primary/30 transition-all cursor-default">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-gray-100 rounded-lg text-navy-900">
                    <useCase.icon size={24} />
                  </div>
                  <h4 className="text-lg font-bold text-navy-900">{useCase.title}</h4>
                </div>
                <ul className="space-y-3">
                  {useCase.items.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Process Flow Diagram Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
             <h2 className="text-3xl md:text-4xl font-display font-bold text-navy-900">Our AI Development Process</h2>
             <p className="text-gray-600 mt-4">A streamlined approach to delivering cutting-edge AI solutions.</p>
          </div>

          <div className="relative">
            {/* Flow Line (Desktop) */}
            <div className="hidden md:block absolute top-[72px] left-0 w-full h-1 bg-gray-100">
               <motion.div 
                 initial={{ width: 0 }}
                 whileInView={{ width: "100%" }}
                 transition={{ duration: 2, ease: "easeOut" }}
                 viewport={{ once: true }}
                 className="h-full bg-gradient-to-r from-primary to-orange-500"
               />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
               {[
                 { 
                   step: "01", 
                   title: "Discovery", 
                   desc: "Understanding business needs & data.",
                   details: "We align AI goals with your KPIs through deep-dive workshops."
                 },
                 { 
                   step: "02", 
                   title: "Development", 
                   desc: "Data collection, training & coding.",
                   details: "Agile sprints focused on model training and frontend integration."
                 },
                 { 
                   step: "03", 
                   title: "Integration", 
                   desc: "System merging & rigorous testing.",
                   details: "Seamless connections ensuring your stack works in harmony."
                 },
                 { 
                   step: "04", 
                   title: "Deployment", 
                   desc: "Launch & ongoing optimization.",
                   details: "Cloud deployment with real-time monitoring and scaling."
                 },
               ].map((item, i) => (
                 <motion.div 
                   key={i}
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: i * 0.2 }}
                   whileHover={{ y: -8 }}
                   className="group flex flex-col items-center text-center bg-white p-6 rounded-2xl border border-transparent hover:border-primary/20 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] transition-all duration-300 relative overflow-hidden"
                 >
                    {/* Active Indicator Line */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <div className="w-24 h-24 rounded-full bg-white border-4 border-gray-50 shadow-lg flex items-center justify-center mb-6 z-10 relative transition-all duration-500 group-hover:border-primary group-hover:scale-110 group-hover:rotate-6">
                       <span className="text-2xl font-bold text-primary group-hover:scale-110 transition-transform duration-300">{item.step}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-navy-900 mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
                    <p className="text-sm text-gray-500 mb-2">{item.desc}</p>
                    
                    {/* Interactive Detail Reveal */}
                    <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-out w-full">
                      <div className="overflow-hidden">
                        <div className="pt-3 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-75 ease-out">
                           <div className="text-xs text-gray-600 bg-gray-50/80 p-4 rounded-xl border border-primary/10 font-medium leading-relaxed flex items-start gap-2 text-left shadow-inner">
                             <div className="mt-0.5 min-w-[14px] text-primary">
                               <CheckCircle2 size={14} />
                             </div>
                             {item.details}
                           </div>
                        </div>
                      </div>
                    </div>
                 </motion.div>
               ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Benefits Section */}
      <section className="py-24 bg-navy-900 text-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-8">How AI Benefits Your Business</h2>
              <div className="space-y-8">
                {[
                  { title: "Enhanced Decision-Making", desc: "Leverage predictive models for smarter choices." },
                  { title: "Increased Efficiency", desc: "Automate repetitive tasks and boost productivity." },
                  { title: "Personalized Experiences", desc: "Deliver tailored user experiences through AI insights." },
                  { title: "Scalability", desc: "AI solutions that grow with your business." }
                ].map((benefit, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="mt-1 text-primary">
                      <CheckCircle2 size={24} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">{benefit.title}</h4>
                      <p className="text-gray-400 text-sm">{benefit.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <button onClick={onOpenConsultation} className="mt-10 px-8 py-3 border border-white/20 rounded-full hover:bg-white hover:text-navy-900 transition-all font-semibold">
                Discover How AI Can Help
              </button>
            </div>
            <div className="relative">
               <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-blue-500/20 backdrop-blur-sm border border-white/10 p-8 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl font-bold text-white mb-2">300%</div>
                    <div className="text-gray-400 uppercase tracking-widest text-sm">ROI Average</div>
                  </div>
               </div>
               {/* Decorative elements */}
               <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/30 rounded-full blur-3xl" />
               <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-500/30 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/* 6. Success Stories */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-navy-900">Success Stories</h2>
            <p className="text-gray-600 mt-4">See how our AI solutions have helped businesses scale.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
               <div className="flex items-center gap-4 mb-6">
                 <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                    <Store size={24} />
                 </div>
                 <div>
                    <h4 className="font-bold text-navy-900">Retail Giant</h4>
                    <p className="text-xs text-gray-500">E-Commerce Automation</p>
                 </div>
               </div>
               <p className="text-gray-600 mb-6 italic">"The AI chatbot implementation increased our customer engagement by 40% in the first month alone."</p>
               <div className="flex items-center gap-2 text-primary font-bold text-sm cursor-pointer hover:underline">
                  Read Case Study <ArrowRight size={16} />
               </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
               <div className="flex items-center gap-4 mb-6">
                 <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                    <ShieldCheck size={24} />
                 </div>
                 <div>
                    <h4 className="font-bold text-navy-900">FinTech Corp</h4>
                    <p className="text-xs text-gray-500">Fraud Detection System</p>
                 </div>
               </div>
               <p className="text-gray-600 mb-6 italic">"Machine learning models helped us reduce fraudulent transactions by 30%, saving millions."</p>
               <div className="flex items-center gap-2 text-primary font-bold text-sm cursor-pointer hover:underline">
                  Read Case Study <ArrowRight size={16} />
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 text-center">
           <h2 className="text-3xl font-display font-bold text-navy-900 mb-12">Why Choose Our AI Services?</h2>
           <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { icon: Scale, title: "Tailored Solutions", desc: "Custom AI models designed to fit your needs." },
                { icon: Zap, title: "Cutting-edge Tech", desc: "Leverage the latest AI tools and frameworks." },
                { icon: Users, title: "Expert Team", desc: "Work with seasoned AI experts." },
                { icon: ShieldCheck, title: "Scalable & Secure", desc: "High security standards that grow with you." }
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center">
                   <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center text-navy-900 mb-4">
                      <item.icon size={28} />
                   </div>
                   <h4 className="font-bold text-navy-900 mb-2">{item.title}</h4>
                   <p className="text-sm text-gray-500">{item.desc}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* 8. CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-orange-500/10">
         <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-display font-bold text-navy-900 mb-4">Ready to Unlock the Power of AI?</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">Contact us today for a free consultation and AI-driven insights tailored to your business.</p>
            <button 
              onClick={onOpenConsultation}
              className="px-10 py-4 bg-primary text-white font-bold rounded-full shadow-lg hover:bg-primary-hover hover:scale-105 transition-all flex items-center gap-2 mx-auto"
            >
              <Rocket size={20} />
              Get Started
            </button>
         </div>
      </section>
    </div>
  );
};

export default Services;