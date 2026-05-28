import { Linkedin, Github, MessageCircle, Mail } from 'lucide-react';

export function Footer() {
  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="py-20 bg-[#f0f4f9] relative z-10 overflow-hidden w-full border-t border-gray-200/50">
      <div className="sphere w-48 h-48 bottom-[-10%] left-[-5%] blur-[2px] opacity-60"></div>
      <div className="sphere w-64 h-64 bottom-[-20%] right-[-10%] blur-[3px] opacity-40"></div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10 flex flex-col items-center">
        <h2 className="text-3xl font-extrabold text-brand-dark tracking-tight mb-4">
          Mujeeb Khattak
        </h2>
        <p className="text-[#475569] text-sm font-medium mb-8 max-w-xl mx-auto leading-relaxed">
          Whether you have a concept ready or need guidance shaping your design, contact me anytime and let's work together to create something exceptional.
        </p>

        <div className="flex flex-wrap justify-center gap-6 mb-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-semibold text-[#475569] hover:text-brand-pink transition-colors uppercase tracking-wider"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="flex justify-center gap-4 mb-10">
          {[
            { icon: Linkedin, href: 'https://www.linkedin.com/in/mujeebkhattak/' },
            { icon: Github, href: 'https://github.com/Mujeebkhattak/' },
            { icon: MessageCircle, href: 'https://wa.me/923445259943' },
            { icon: Mail, href: 'mailto:mjbktk@gmail.com' }
          ].map((social, idx) => {
            const Icon = social.icon;
            return (
              <a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-brand-dark hover:border-brand-pink hover:text-brand-pink hover:bg-white transition-all bg-transparent"
              >
                <Icon className="w-4 h-4" />
              </a>
            );
          })}
        </div>
        
        <p className="text-xs text-gray-400 font-medium">
          Designed & Developed by Mujeeb Khattak
        </p>

        {/* WhatsApp floating button placeholder, assuming static positioning or bottom-right fixed */}
      </div>
      <a 
        href="https://wa.me/923445259943"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform z-50"
      >
        <MessageCircle className="w-8 h-8" />
      </a>
    </footer>
  );
}
