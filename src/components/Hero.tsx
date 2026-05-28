import { motion } from 'motion/react';
import { Download, MonitorSmartphone, Smartphone, Code, Linkedin, Github, MessageCircle, Mail } from 'lucide-react';

export function Hero() {
  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/Khattak_Dev.pdf';
    link.download = 'khattak.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="min-h-screen relative flex items-center pt-24 pb-16 px-6 sm:px-12 lg:px-24">
      {/* Background Orbs */}
      <div className="sphere w-32 h-32 top-[20%] left-[-5%] blur-[1px] opacity-70"></div>
      <div className="sphere w-48 h-48 bottom-[10%] right-[10%] blur-[2px] opacity-60"></div>
      <div className="sphere w-12 h-12 top-[30%] right-[40%] blur-[1px] opacity-80"></div>

      <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
        
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:w-1/2 flex flex-col items-start"
        >
          <span className="text-brand-dark font-bold text-lg mb-4">Welcome to My World</span>
          
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-brand-dark leading-[1.1] mb-2">
            Hi I'm <span className="text-brand-pink">Mujeeb</span>
          </h1>
          
          <h2 className="text-3xl sm:text-4xl md:text-[2.5rem] font-bold text-brand-dark mb-6">
            Mobile App Developer
          </h2>
          
          <p className="text-base text-[#475569] leading-relaxed max-w-xl mb-10 font-medium">
            Passionate Mobile Application Developer with experience creating user-friendly interfaces, robust logic, and seamless mobile applications in Flutter. Skilled in delivering impactful apps with Firebase, AI integrations, and responsive designs that enhance user experience.
          </p>

          <div className="flex items-center gap-6 mb-8">
            <a href="#contact" className="bg-gradient-btn text-white px-8 py-3.5 rounded shadow-lg shadow-pink-500/30 font-semibold hover:-translate-y-1 transition-transform inline-block">
              Hire Me
            </a>
            <button onClick={handleDownloadCV} className="bg-white text-brand-dark px-8 py-3.5 rounded shadow-card font-semibold flex items-center gap-2 hover:-translate-y-1 transition-transform cursor-pointer">
              Download CV <Download className="w-4 h-4" />
            </button>
          </div>
        </motion.div>

        {/* Right Image area */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="lg:w-1/2 relative flex justify-center items-center"
        >
          <div className="relative w-[350px] h-[350px] md:w-[450px] md:h-[450px] lg:w-[500px] lg:h-[500px]">
            {/* White Ring */}
            <div className="absolute inset-0 rounded-full border-[15px] border-white shadow-[0_20px_50px_rgba(0,0,0,0.1)] z-10 box-border"></div>
            
            {/* Floating Icons */}
            <motion.div animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }} className="absolute -left-4 top-20 w-12 h-12 bg-white rounded-lg shadow-lg flex items-center justify-center z-20 text-brand-pink">
              <Smartphone className="w-6 h-6" />
            </motion.div>

            <motion.div animate={{ y: [0, 15, 0] }} transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }} className="absolute right-8 top-10 w-12 h-12 bg-white rounded-lg shadow-lg flex items-center justify-center z-20 text-blue-500">
              <MonitorSmartphone className="w-6 h-6" />
            </motion.div>

            <motion.div animate={{ y: [0, -12, 0] }} transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut' }} className="absolute right-4 bottom-20 w-12 h-12 bg-white rounded-lg shadow-lg flex items-center justify-center z-20 text-[#8b00a5]">
              <Code className="w-6 h-6" />
            </motion.div>

            {/* Inner Image Mask */}
            <div className="absolute inset-[10px] rounded-full overflow-hidden bg-gray-100 flex items-center justify-center z-0">
              <svg className="w-24 h-24 text-gray-300 absolute" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
              <img 
                src="/self.jpeg" 
                alt="Mujeeb Khattak"
                className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700 relative z-10"
              />
            </div>
          </div>
        </motion.div>

      </div>
      
      {/* Background TEXT watermark */}
      <div className="absolute left-[-20px] top-1/2 -translate-y-1/2 -rotate-90 origin-center text-[10rem] font-bold text-black/[0.02] select-none pointer-events-none whitespace-nowrap hidden lg:block tracking-widest z-0">
        MUJEEB
      </div>
    </section>
  );
}
