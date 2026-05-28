import { motion } from 'motion/react';
import { ExternalLink, Image as ImageIcon } from 'lucide-react';
import { useState } from 'react';

const projects = [
  {
    title: 'Developer Community',
    description: 'Tech education mobile application — featuring AI-powered courses, gamified learning, and local payment integrations.',
    tags: ['Flutter', 'AI', 'Payments'],
    image: '/devcomm.jpg',
    link: 'https://github.com/Mujeebkhattak/',
    category: 'Mobile Apps'
  },
  {
    title: 'Medicine Reminder App',
    description: 'Scheduled local push notifications, cloud sync via Firestore, and offline support with local SQLite/Hive cache.',
    tags: ['Flutter', 'Firestore', 'SQLite'],
  image: '/medicine.jpg',
    link: 'https://github.com/Mujeebkhattak/',
    category: 'Mobile Apps'
  },
  {
    title: 'AI Healthcare App',
    description: 'AI-powered healthcare app featuring voice assistants, symptom analysis, appointment booking, and a medical-grade UI.',
    tags: ['Flutter', 'Firebase', 'NLP'],
    image: '/healthcare.jpg',
    
    link: 'https://github.com/Mujeebkhattak/',
    category: 'Mobile Apps'
  },
  {
    title: 'FYP Management System',
    description: 'Modern web platform streamlining project submissions, supervisor allocation, and academic collaboration.',
    tags: ['React', 'Web System'],
    image: '/fyp.jpg',
    link: 'https://lnkd.in/e8bV79aV',
    category: 'Web Apps'
  }
];

export function Projects() {
  const [filter, setFilter] = useState('All');
  const filters = ['All', 'Mobile Apps', 'Web Apps'];

  const filteredProjects = filter === 'All' ? projects : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-24 px-6 sm:px-12 lg:px-24 relative z-10 w-full bg-[#e2e8f0]/40">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        <h3 className="text-brand-pink font-semibold text-lg mb-2">Portfolio</h3>
        <h2 className="text-4xl md:text-5xl font-bold text-brand-dark mb-10 text-center tracking-tight">
          My Creative Works
        </h2>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-6 py-3 rounded text-sm font-semibold transition-all ${
                filter === f 
                ? 'bg-brand-dark text-white' 
                : 'bg-white text-gray-500 border border-gray-200 hover:text-brand-dark'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
          {filteredProjects.map((project, idx) => (
            <motion.div
              layout
              key={project.title}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white p-4 rounded-2xl shadow-card group"
            >
              <div className="relative font-sans overflow-hidden rounded-xl mb-4 bg-gray-100 flex items-center justify-center group-hover:-translate-y-1 transition-transform h-64">
                <ImageIcon className="absolute w-12 h-12 text-gray-300" />
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover relative z-10"
                />
              </div>
              
              <div className="px-2 pb-4">
                <h3 className="text-xl font-bold text-brand-dark mb-2">
                  {project.title}
                </h3>
                <p className="text-[#475569] text-sm leading-relaxed mb-4 font-medium line-clamp-2">
                  {project.description}
                </p>
                
                <div className="flex items-center justify-between mt-auto">
                  <div className="flex gap-2">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="text-xs font-semibold bg-gray-100 text-brand-dark px-2 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full bg-brand-dark flex items-center justify-center text-white hover:bg-brand-pink transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
