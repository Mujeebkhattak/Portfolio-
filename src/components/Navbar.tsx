import { motion } from 'motion/react';
import { Linkedin, Github, MessageCircle, Mail } from 'lucide-react';

export function Navbar() {
  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="w-full py-6 px-8 md:px-16 flex items-center justify-between absolute top-0 left-0 z-50">
      <div className="font-bold text-2xl tracking-tight text-brand-dark flex items-center">
        Mujeeb
      </div>

      <div className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="text-sm font-semibold text-brand-dark hover:text-brand-pink transition-colors"
          >
            {link.name}
          </a>
        ))}
      </div>

      <div className="flex items-center gap-4">
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
              className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-brand-dark shadow-sm hover:shadow-md hover:text-brand-pink transition-all"
            >
              <Icon className="w-4 h-4" />
            </a>
          );
        })}
      </div>
    </nav>
  );
}
