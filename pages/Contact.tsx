import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, Phone, MapPin, Calendar, MessageCircle, 
  ArrowRight, CheckCircle2, Clock, Linkedin, Twitter, 
  Send
} from 'lucide-react';

const Contact: React.FC = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'submitted'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    setTimeout(() => {
      setFormStatus('submitted');
    }, 1500);
  };

  return (
    <div className="bg-white">
      {/* 1. Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-beige">
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-gray-200 shadow-sm text-primary text-sm font-bold mb-6">
               <MessageCircle size={16} /> Let's Talk AI
            </div>
            <h1 className="text-4xl md:text-6xl font-display font-extrabold text-navy-900 mb-6 leading-tight">
               Let’s Start a <span className="text-primary">Conversation!</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
               We’re here to help you turn your ideas into AI-powered solutions. 
               Reach out to our team for a consultation or inquiry.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
               <button onClick={() => document.getElementById('calendar')?.scrollIntoView({ behavior: 'smooth' })} className="px-8 py-4 bg-primary text-white text-lg font-bold rounded-md hover:bg-primary-hover shadow-lg transition-all">
                  Book a Consultation Call
               </button>
               <button onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })} className="px-8 py-4 bg-white text-navy-900 border border-gray-200 text-lg font-bold rounded-md hover:bg-white/80 transition-all">
                  Send Us an Inquiry
               </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Main Content Grid */}
      <section className="py-24 bg-white" id="contact-form">
        <div className="container mx-auto px-6">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              
              {/* Left Column: Form */}
              <div>
                 <h2 className="text-3xl font-display font-bold text-navy-900 mb-2">Get in Touch with Us</h2>
                 <p className="text-gray-600 mb-8">Fill out the form below, and we’ll get back to you within 24 hours.</p>

                 {formStatus === 'submitted' ? (
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="bg-green-50 border border-green-200 rounded-lg p-8 text-center"
                    >
                       <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-600 mx-auto mb-4">
                          <CheckCircle2 size={32} />
                       </div>
                       <h3 className="text-xl font-bold text-navy-900 mb-2">Thank you for contacting us!</h3>
                       <p className="text-gray-600 mb-6">We have received your inquiry and will be in touch shortly.</p>
                       <button onClick={() => setFormStatus('idle')} className="text-primary font-bold hover:underline">
                          Send another message
                       </button>
                    </motion.div>
                 ) : (
                    <form onSubmit={handleSubmit} className="space-y-6 bg-beige p-8 rounded-lg border border-gray-200">
                       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                             <label className="block text-sm font-bold text-navy-900 mb-2">Name *</label>
                             <input required type="text" className="w-full p-3 bg-white border border-gray-200 rounded-md focus:ring-2 focus:ring-primary outline-none" placeholder="John Doe" />
                          </div>
                          <div>
                             <label className="block text-sm font-bold text-navy-900 mb-2">Email *</label>
                             <input required type="email" className="w-full p-3 bg-white border border-gray-200 rounded-md focus:ring-2 focus:ring-primary outline-none" placeholder="john@company.com" />
                          </div>
                       </div>
                       
                       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                             <label className="block text-sm font-bold text-navy-900 mb-2">Project Type</label>
                             <select className="w-full p-3 bg-white border border-gray-200 rounded-md focus:ring-2 focus:ring-primary outline-none">
                                <option>AI Web Application</option>
                                <option>WhatsApp Automation</option>
                                <option>Custom AI Model</option>
                                <option>Consultation</option>
                             </select>
                          </div>
                          <div>
                             <label className="block text-sm font-bold text-navy-900 mb-2">Budget</label>
                             <select className="w-full p-3 bg-white border border-gray-200 rounded-md focus:ring-2 focus:ring-primary outline-none">
                                <option>Below $10k</option>
                                <option>$10k - $50k</option>
                                <option>$50k +</option>
                                <option>Undecided</option>
                             </select>
                          </div>
                       </div>

                       <div>
                          <label className="block text-sm font-bold text-navy-900 mb-2">Message</label>
                          <textarea rows={4} className="w-full p-3 bg-white border border-gray-200 rounded-md focus:ring-2 focus:ring-primary outline-none" placeholder="Tell us about your project..."></textarea>
                       </div>

                       <div>
                          <label className="block text-sm font-bold text-navy-900 mb-3">Preferred Contact Method</label>
                          <div className="flex gap-4">
                             {['Email', 'Phone', 'WhatsApp'].map(method => (
                                <label key={method} className="flex items-center gap-2 cursor-pointer">
                                   <input type="checkbox" className="text-primary focus:ring-primary rounded" />
                                   <span className="text-sm text-gray-600">{method}</span>
                                </label>
                             ))}
                          </div>
                       </div>

                       <div className="pt-2">
                          <button type="submit" disabled={formStatus === 'submitting'} className="w-full py-4 bg-primary text-white font-bold rounded-md hover:bg-primary-hover shadow-lg transition-all flex items-center justify-center gap-2 disabled:opacity-70">
                             {formStatus === 'submitting' ? 'Sending...' : 'Submit Inquiry'} <Send size={18} />
                          </button>
                       </div>
                    </form>
                 )}
              </div>

              {/* Right Column: Contact Info & Map */}
              <div className="space-y-12">
                 {/* Contact Info */}
                 <div>
                    <h2 className="text-2xl font-display font-bold text-navy-900 mb-6">Our Office & Contact Info</h2>
                    <div className="space-y-6">
                       <div className="flex items-start gap-4">
                          <div className="p-3 bg-beige rounded-md text-navy-900 border border-gray-200">
                             <MapPin size={24} />
                          </div>
                          <div>
                             <h4 className="font-bold text-navy-900">Visit Us</h4>
                             <p className="text-gray-600 text-sm">101 Tech Blvd, Suite 200<br />San Francisco, CA 94107</p>
                             <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="text-primary text-sm font-bold hover:underline mt-1 inline-block">Get Directions</a>
                          </div>
                       </div>
                       
                       <div className="flex items-start gap-4">
                          <div className="p-3 bg-beige rounded-md text-navy-900 border border-gray-200">
                             <Phone size={24} />
                          </div>
                          <div>
                             <h4 className="font-bold text-navy-900">Call Us</h4>
                             <p className="text-gray-600 text-sm">+1 (555) 123-4567</p>
                             <p className="text-xs text-gray-500 mt-1">Mon-Fri, 9am - 5pm GMT</p>
                          </div>
                       </div>

                       <div className="flex items-start gap-4">
                          <div className="p-3 bg-beige rounded-md text-navy-900 border border-gray-200">
                             <Mail size={24} />
                          </div>
                          <div>
                             <h4 className="font-bold text-navy-900">Email Us</h4>
                             <a href="mailto:hello@sunai.ai" className="text-gray-600 text-sm hover:text-primary transition-colors">hello@sunai.ai</a>
                          </div>
                       </div>
                    </div>

                    <div className="mt-8 pt-8 border-t border-gray-200">
                       <h4 className="font-bold text-navy-900 mb-4">Follow Us</h4>
                       <div className="flex gap-4">
                          <a href="#" className="p-3 bg-beige rounded-full text-gray-500 hover:bg-primary hover:text-white transition-colors border border-gray-200"><Linkedin size={20} /></a>
                          <a href="#" className="p-3 bg-beige rounded-full text-gray-500 hover:bg-primary hover:text-white transition-colors border border-gray-200"><Twitter size={20} /></a>
                       </div>
                    </div>
                 </div>

                 {/* Map */}
                 <div className="h-64 bg-gray-100 rounded-lg overflow-hidden border border-gray-200 relative">
                    <iframe 
                       src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.063684175396!2d-122.39985558468165!3d37.78768097975704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858063e9f4a0a7%3A0x629c6c307a51088a!2sSalesforce%20Tower!5e0!3m2!1sen!2sus!4v1647416345678!5m2!1sen!2sus" 
                       width="100%" 
                       height="100%" 
                       style={{border:0}} 
                       allowFullScreen 
                       loading="lazy"
                       title="Office Map"
                    ></iframe>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* 3. Booking & Chat Section */}
      <section className="py-24 bg-beige border-t border-gray-200" id="calendar">
         <div className="container mx-auto px-6">
            <div className="text-center mb-16">
               <h2 className="text-3xl md:text-4xl font-display font-bold text-navy-900 mb-4">Need Immediate Assistance?</h2>
               <p className="text-gray-600">Chat with us directly or book a time on our calendar.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
               {/* WhatsApp */}
               <div className="bg-white p-10 rounded-lg shadow-sm border border-gray-200 flex flex-col items-center justify-center text-center hover:shadow-md transition-all">
                  <div className="w-20 h-20 bg-beige rounded-full flex items-center justify-center text-green-600 mb-6 border border-gray-100">
                     <MessageCircle size={40} />
                  </div>
                  <h3 className="text-2xl font-bold text-navy-900 mb-4">Chat on WhatsApp</h3>
                  <p className="text-gray-600 mb-8 max-w-sm">
                     Get quick answers. Direct line to our sales team for fast inquiries.
                  </p>
                  <button className="px-8 py-3 bg-[#25D366] text-white font-bold rounded-full hover:bg-[#128C7E] transition-colors shadow-lg shadow-green-200 flex items-center gap-2">
                     Chat with us now <ArrowRight size={18} />
                  </button>
               </div>

               {/* Calendar Placeholder */}
               <div className="bg-white p-10 rounded-lg shadow-sm border border-gray-200 flex flex-col items-center justify-center text-center hover:shadow-md transition-all">
                  <div className="w-20 h-20 bg-beige rounded-full flex items-center justify-center text-primary mb-6 border border-gray-100">
                     <Calendar size={40} />
                  </div>
                  <h3 className="text-2xl font-bold text-navy-900 mb-4">Book a Consultation</h3>
                  <p className="text-gray-600 mb-8 max-w-sm">
                     Select a time that works for you, and we'll confirm the appointment instantly.
                  </p>
                  <button className="px-8 py-3 bg-primary text-white font-bold rounded-full hover:bg-primary-hover transition-colors shadow-lg flex items-center gap-2">
                     View Available Times <ArrowRight size={18} />
                  </button>
               </div>
            </div>
         </div>
      </section>

      {/* 4. Final CTA */}
      <section className="py-24 bg-white text-center border-t border-gray-200">
         <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-navy-900">Ready to Take the Next Step?</h2>
            <p className="text-gray-500 mb-10 max-w-2xl mx-auto text-lg">
               Let’s talk about how AI can elevate your business. Whether you're just getting started or need advanced solutions.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
               <button onClick={() => document.getElementById('calendar')?.scrollIntoView({ behavior: 'smooth' })} className="px-10 py-4 bg-primary text-white font-bold rounded-md hover:bg-primary-hover shadow-lg transition-all hover:scale-105">
                  Book a Free Consultation
               </button>
               <button onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })} className="px-10 py-4 bg-transparent border border-gray-200 text-navy-900 font-bold rounded-md hover:bg-beige transition-all">
                  Send Us a Message
               </button>
            </div>
         </div>
      </section>

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-8 right-8 z-50">
         <button className="w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center text-white shadow-2xl hover:scale-110 transition-transform cursor-pointer">
            <MessageCircle size={32} />
         </button>
      </div>
    </div>
  );
};

export default Contact;