import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Smartphone, Database, Bot, MonitorPlay, X } from 'lucide-react';

export function Services() {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (activeModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [activeModal]);

  const services = [
    {
      title: 'Mobile App Development',
      description: 'I create modern, high-performance Flutter mobile applications that connect deeply with targeted audiences across iOS and Android.',
      icon: Smartphone,
      details: (
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-bold text-brand-dark mb-2">Building Scalable & High-Performance Mobile Applications</h3>
            <p className="text-[#475569]">I specialize in developing modern cross-platform mobile applications using Flutter, delivering smooth user experiences across Android and iOS devices.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-brand-dark mb-2">What I Do</h3>
            <ul className="list-disc pl-5 text-[#475569] space-y-1">
              <li>Flutter Mobile Application Development</li>
              <li>Android & iOS Deployment</li>
              <li>State Management (Provider, Bloc)</li>
              <li>REST API Integration</li>
              <li>Firebase Integration</li>
              <li>Real-Time Applications</li>
              <li>Push Notifications</li>
              <li>Performance Optimization</li>
              <li>App Maintenance & Support</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold text-brand-dark mb-2">Recent Projects</h3>
            <ul className="list-disc pl-5 text-[#475569] space-y-1">
              <li>AI Healthcare Mobile Application</li>
              <li>Developer Community Platform</li>
              <li>FYP Management System</li>
              <li>Educational Learning Platform</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      title: 'Firebase Integrations',
      description: 'I design clean and engaging scalable backend solutions that help power real-time data features and user authentication.',
      icon: Database,
      details: (
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-bold text-brand-dark mb-2">Secure & Scalable Backend Solutions</h3>
            <p className="text-[#475569]">I create powerful backend systems using Firebase to help businesses manage users, data, authentication, and real-time communication efficiently.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-brand-dark mb-2">Services</h3>
            <ul className="list-disc pl-5 text-[#475569] space-y-1">
              <li>Firebase Authentication</li>
              <li>Firestore Database</li>
              <li>Cloud Storage</li>
              <li>Push Notifications</li>
              <li>Role-Based Access Control</li>
              <li>Admin Dashboard Integration</li>
              <li>Analytics & Monitoring</li>
              <li>Real-Time Data Synchronization</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold text-brand-dark mb-2">Experience Level</h3>
            <p className="text-[#475569]">Successfully integrated Firebase services into multiple production-ready applications with secure authentication and scalable architecture.</p>
          </div>
        </div>
      )
    },
    {
      title: 'AI / NLP Solutions',
      description: 'I design experiences that guide the user with smart voice assistants and NLP analysis through every meaningful interaction.',
      icon: Bot,
      details: (
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-bold text-brand-dark mb-2">Intelligent Applications Powered by AI</h3>
            <p className="text-[#475569]">I develop AI-powered mobile solutions that improve user experiences through automation, voice interaction, and natural language processing.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-brand-dark mb-2">Expertise</h3>
            <ul className="list-disc pl-5 text-[#475569] space-y-1">
              <li>AI Chatbots</li>
              <li>Voice Assistant Integration</li>
              <li>NLP-Based User Interactions</li>
              <li>AI Recommendation Systems</li>
              <li>Smart Search Features</li>
              <li>Healthcare AI Solutions</li>
              <li>Multi-Language Support</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold text-brand-dark mb-2">Featured Project</h3>
            <h4 className="font-bold text-brand-dark mt-2 mb-1">AI Healthcare Application</h4>
            <ul className="list-disc pl-5 text-[#475569] space-y-1">
              <li>AI Voice Assistant (English, Urdu & Hindi)</li>
              <li>Symptom Analysis</li>
              <li>Smart Doctor Matching</li>
              <li>AI-Powered User Guidance</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      title: 'UI/UX Implementation',
      description: 'I build fluid, pixel-perfect interfaces that convert attention into lasting, measurable digital impact.',
      icon: MonitorPlay,
      details: (
        <div className="space-y-6">
           <div>
            <h3 className="text-xl font-bold text-brand-dark mb-2">Transforming Designs into Pixel-Perfect Applications</h3>
            <p className="text-[#475569]">I convert Figma and UI/UX designs into responsive, modern, and highly interactive mobile applications.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-brand-dark mb-2">Services</h3>
            <ul className="list-disc pl-5 text-[#475569] space-y-1">
              <li>Figma to Flutter Conversion</li>
              <li>Responsive UI Development</li>
              <li>Dark & Light Theme Support</li>
              <li>Animations & Micro Interactions</li>
              <li>Material Design Implementation</li>
              <li>User-Centered Interface Development</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold text-brand-dark mb-2">Portfolio Designs</h3>
            <div className="mb-4">
              <h4 className="font-bold text-brand-dark mb-1">Education App Design</h4>
              <p className="text-[#475569] text-sm">Design Preview: <br/>
              <a href="https://www.figma.com/design/CIY9IFRnDRNwDoMuSGl5xV/Education-App?node-id=0-1&t=Z1zem95sPYWUl2Ow-1" target="_blank" rel="noopener noreferrer" className="text-brand-pink hover:underline break-all">https://www.figma.com/design/CIY9IFRnDRNwDoMuSGl5xV/Education-App?node-id=0-1&t=Z1zem95sPYWUl2Ow-1</a></p>
            </div>
            <div>
              <h4 className="font-bold text-brand-dark mb-1">Modern Mobile App UI</h4>
              <p className="text-[#475569] text-sm">Design Preview: <br/>
              <a href="https://www.figma.com/design/86KYo06PjikiNPF2vZzi77/Untitled?node-id=0-1&t=hTX8oE8XPegtYFB6-1" target="_blank" rel="noopener noreferrer" className="text-brand-pink hover:underline break-all">https://www.figma.com/design/86KYo06PjikiNPF2vZzi77/Untitled?node-id=0-1&t=hTX8oE8XPegtYFB6-1</a></p>
            </div>
          </div>
          <div className="bg-orange-50 p-4 rounded-lg border border-orange-100">
            <h4 className="font-bold text-orange-800 mb-2">Important Note</h4>
            <p className="text-orange-700 text-sm mb-4">
              Many of the UI/UX projects I have worked on were <strong>paid client projects</strong> and cannot be publicly showcased due to client confidentiality and privacy agreements. The designs displayed in my portfolio represent only a small portion of my work and demonstrate my design implementation capabilities.
            </p>
            <div className="pl-4 border-l-4 border-orange-300">
              <h5 className="font-bold text-orange-800 text-sm mb-1">Client Privacy Statement</h5>
              <p className="text-orange-700 text-sm italic">
                Due to Non-Disclosure Agreements (NDAs) and client confidentiality requirements, several commercial projects are not publicly available. Project samples displayed in this portfolio are selected examples that showcase my development and UI implementation expertise while respecting client privacy.
              </p>
            </div>
          </div>
        </div>
      )
    }
  ];

  const activeService = services.find(s => s.title === activeModal);

  return (
    <section className="py-24 px-6 sm:px-12 lg:px-24 relative z-10 w-full bg-[#f0f4f9]">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        <h3 className="text-brand-pink font-semibold text-lg mb-2">What i Do</h3>
        <h2 className="text-3xl md:text-5xl font-bold text-brand-dark mb-16 text-center max-w-3xl leading-tight">
          I am an optimist who loves to work and create great <span className="text-brand-pink">Things</span>.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white rounded-xl p-8 shadow-card flex flex-col group hover:-translate-y-2 transition-transform duration-300"
              >
                <div className="w-14 h-14 bg-[#f0f4f9] rounded-lg flex items-center justify-center mb-6 group-hover:bg-brand-pink group-hover:text-white transition-colors duration-300">
                  <Icon className="w-7 h-7 text-brand-dark group-hover:text-white transition-colors duration-300" />
                </div>
                
                <h4 className="text-xl font-bold text-brand-dark mb-4">{service.title}</h4>
                <p className="text-[#475569] text-sm leading-relaxed mb-8 flex-grow font-medium">
                  {service.description}
                </p>
                
                <button 
                  onClick={() => setActiveModal(service.title)}
                  className="flex items-center gap-2 text-brand-dark font-semibold text-sm bg-gray-50 px-4 py-2 rounded self-start hover:text-brand-pink transition-colors cursor-pointer"
                >
                  Read More <span>+</span>
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Modal Overlay */}
      <AnimatePresence>
        {activeModal && activeService && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveModal(null)}
              className="fixed inset-0 bg-black/50 z-[100] backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, y: 100, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 100, scale: 0.95 }}
              className="fixed top-[5%] left-4 right-4 md:left-1/2 md:-translate-x-1/2 md:w-[800px] max-w-full max-h-[90vh] bg-white rounded-2xl shadow-2xl z-[101] flex flex-col overflow-hidden"
            >
              <div className="flex items-center justify-between p-6 border-b border-gray-100">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-pink-50 text-brand-pink rounded-xl flex items-center justify-center">
                    <activeService.icon className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-brand-dark">{activeService.title}</h2>
                </div>
                <button 
                  onClick={() => setActiveModal(null)}
                  className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center text-gray-500 hover:bg-gray-100 hover:text-brand-dark transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              <div className="p-6 md:p-8 overflow-y-auto">
                {activeService.details}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
