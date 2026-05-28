import { motion } from 'motion/react';

const skillCategories = [
  {
    title: 'LANGUAGES & FRAMEWORKS',
    skills: ['Dart', 'Flutter']
  },
  {
    title: 'STATE MANAGEMENT',
    skills: ['Provider', 'BLoC', 'MVVM']
  },
  {
    title: 'BACKEND & APIS',
    skills: ['Firebase', 'Supabase', 'REST APIs', 'JSON']
  },
  {
    title: 'DATABASES',
    skills: ['Firestore', 'MySQL', 'SQLite', 'Hive']
  },
  {
    title: 'TESTING',
    skills: ['Widget Testing', 'Integration Testing']
  },
  {
    title: 'TOOLS & INTEGRATIONS',
    skills: ['Git', 'GitHub', 'Android Studio', 'VS Code', 'Google Maps SDK', 'Figma']
  }
];

export function Skills() {
  return (
    <section id="skills" className="relative py-24 px-6 sm:px-12 lg:px-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center">
        <h3 className="text-brand-pink font-semibold text-lg mb-2">Expertise</h3>
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-16 text-brand-dark tracking-tight"
        >
          My <span className="text-brand-pink">Skills</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white border border-gray-100 rounded-2xl p-8 hover:-translate-y-1 transition-transform shadow-card"
            >
              <h3 className="text-brand-pink text-sm font-bold tracking-wider uppercase mb-6">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span 
                    key={skill}
                    className="px-4 py-2 bg-gray-50 border border-gray-100 rounded text-brand-dark text-sm font-semibold hover:bg-gray-100 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
