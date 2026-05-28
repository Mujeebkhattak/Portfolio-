import { motion } from 'motion/react';
import { Mail, Phone, Github, Linkedin, MessageCircle } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-24 px-6 sm:px-12 lg:px-24 bg-[#f0f4f9] relative z-10 w-full">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-brand-pink font-semibold text-lg mb-2 text-center md:text-left">Contact Me</h3>
        
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-16 gap-4">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-dark leading-tight text-center md:text-left">
            Get in Touch With Me
          </h2>
          <p className="text-[#475569] max-w-md text-sm font-medium text-center md:text-left">
            Whether you have a concept ready or need guidance shaping your design, contact me anytime and let's work together to create something exceptional.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Form */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 rounded-2xl shadow-card lg:w-2/3"
          >
            <form className="space-y-6">
              <div className="flex flex-col md:flex-row gap-6">
                <input 
                  type="text" 
                  placeholder="First Name" 
                  className="w-full bg-[#f8fafc] border border-transparent focus:border-gray-200 outline-none rounded p-4 text-sm font-medium transition-colors"
                />
                <input 
                  type="text" 
                  placeholder="Last Name" 
                  className="w-full bg-[#f8fafc] border border-transparent focus:border-gray-200 outline-none rounded p-4 text-sm font-medium transition-colors"
                />
              </div>
              <input 
                type="email" 
                placeholder="Email" 
                className="w-full bg-[#f8fafc] border border-transparent focus:border-gray-200 outline-none rounded p-4 text-sm font-medium transition-colors"
              />
              <input 
                type="text" 
                placeholder="Subject" 
                className="w-full bg-[#f8fafc] border border-transparent focus:border-gray-200 outline-none rounded p-4 text-sm font-medium transition-colors"
              />
              <textarea 
                placeholder="Message" 
                rows={5}
                className="w-full bg-[#f8fafc] border border-transparent focus:border-gray-200 outline-none rounded p-4 text-sm font-medium transition-colors resize-none"
              ></textarea>
              <button 
                type="button"
                className="bg-brand-purple text-white px-8 py-4 rounded font-semibold text-sm hover:bg-opacity-90 transition-all shadow-md shadow-brand-purple/20"
              >
                Submit Now +
              </button>
            </form>
          </motion.div>

          {/* Contact Info Card */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-card overflow-hidden lg:w-1/3 flex flex-col"
          >
            <img 
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800&auto=format&fit=crop" 
              alt="Contact Support" 
              className="w-full h-64 object-cover"
            />
            <div className="p-8 bg-white flex flex-col gap-4 flex-grow justify-center border-l-4 border-l-brand-purple">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-purple-50 rounded flex items-center justify-center text-brand-purple shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-brand-dark font-bold">+92 344 525 9943</h4>
                  <p className="text-[#475569] text-sm font-medium select-all">mjbktk@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 mt-2">
                <a href="https://github.com/Mujeebkhattak/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-50 rounded flex items-center justify-center text-[#475569] hover:text-brand-dark hover:bg-gray-100 transition-colors shadow-sm">
                  <Github className="w-5 h-5" />
                </a>
                <a href="https://www.linkedin.com/in/mujeebkhattak/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-blue-50 rounded flex items-center justify-center text-blue-600 hover:bg-blue-100 transition-colors shadow-sm">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="https://wa.me/923445259943" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-green-50 rounded flex items-center justify-center text-green-600 hover:bg-green-100 transition-colors shadow-sm">
                  <MessageCircle className="w-5 h-5" />
                </a>
                <a href="mailto:mjbktk@gmail.com" className="w-10 h-10 bg-rose-50 rounded flex items-center justify-center text-rose-600 hover:bg-rose-100 transition-colors shadow-sm">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
