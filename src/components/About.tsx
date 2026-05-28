import { useState } from 'react';
import { motion } from 'motion/react';
import { Download, Target, Users, BookOpen, GraduationCap, Award } from 'lucide-react';

export function About() {
  const [activeTab, setActiveTab] = useState('Main Skills');

  const tabs = ['Main Skills', 'Education'];

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/Khattak_Dev.pdf';
    link.download = 'khattak.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="about" className="py-24 px-6 sm:px-12 lg:px-24 bg-white relative z-10 w-full">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
        
        {/* Left Image Area */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:w-5/12"
        >
          <div className="w-full aspect-[4/5] bg-gray-100 rounded-xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] relative flex items-center justify-center">
             <svg className="w-24 h-24 text-gray-300 absolute" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
             <img 
               src="/self.jpeg" 
               alt="Mujeeb Khattak Developer"
               className="w-full h-full object-cover object-top relative z-10"
             />
          </div>
        </motion.div>

        {/* Right Content Area */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:w-7/12"
        >
          <h3 className="text-brand-pink font-semibold text-lg mb-2">About Mujeeb</h3>
          <h2 className="text-4xl md:text-5xl font-bold text-brand-dark mb-6 leading-tight">
            4+ Year's Experience of <br />
            Mobile App <span className="text-brand-pink">Development</span>.
          </h2>
          <p className="text-[#475569] mb-10 text-base leading-relaxed max-w-2xl font-medium">
            Skilled in delivering impactful mobile applications that enhance user experience and support brand success using cutting edge technologies.
          </p>

          {/* Tabs */}
          <div className="flex gap-4 mb-8">
            {tabs.map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2.5 rounded shadow-sm font-medium transition-all ${
                  activeTab === tab 
                  ? 'bg-brand-pink text-white' 
                  : 'bg-white text-brand-dark border border-gray-100 hover:shadow-md'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="space-y-6 mb-10 h-[300px]">
            {activeTab === 'Main Skills' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
                <div className="flex gap-4">
                  <Target className="w-6 h-6 text-brand-pink shrink-0 mt-1" />
                  <div>
                    <h4 className="text-brand-dark font-semibold text-lg mb-1">Flutter & Dart</h4>
                    <p className="text-[#475569] text-sm">Designing mobile apps that feel native, fast, and easy to use across iOS and Android.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Users className="w-6 h-6 text-brand-pink shrink-0 mt-1" />
                  <div>
                    <h4 className="text-brand-dark font-semibold text-lg mb-1">Firebase & Backend</h4>
                    <p className="text-[#475569] text-sm">Building scalable architectures with authentication, real-time databases, and cloud functions.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <BookOpen className="w-6 h-6 text-brand-pink shrink-0 mt-1" />
                  <div>
                    <h4 className="text-brand-dark font-semibold text-lg mb-1">AI / NLP Integration</h4>
                    <p className="text-[#475569] text-sm">Integrating intelligent voice assistants and NLP models to create smarter experiences.</p>
                  </div>
                </div>
                <div className="pt-2">
                  <a href="#skills" onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' });
                  }} className="text-brand-pink font-semibold hover:underline flex items-center gap-1">
                    Show More Skills <span>→</span>
                  </a>
                </div>
              </motion.div>
            )}
            {activeTab === 'Education' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
                <div className="flex gap-4">
                  <GraduationCap className="w-6 h-6 text-brand-pink shrink-0 mt-1" />
                  <div>
                    <h4 className="text-brand-dark font-semibold text-lg mb-1">Bachelor of Science in Computer Science</h4>
                    <p className="text-brand-pink text-sm font-semibold mb-2">2020 – 2024</p>
                    <p className="text-[#475569] text-sm leading-relaxed mb-1">
                      <span className="font-semibold">Kohat University of Science & Technology (KUST)</span> — CGPA: 3.60 / 4.00
                    </p>
                    <p className="text-[#475569] text-sm leading-relaxed">
                      Final year project: Web portal serving 200+ users (Graded with distinction).
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Award className="w-6 h-6 text-brand-pink shrink-0 mt-1" />
                  <div>
                    <h4 className="text-brand-dark font-semibold text-lg mb-1">Merit Scholarship</h4>
                    <p className="text-[#475569] text-sm">Awarded for 6th, 7th, and 8th semesters based on academic performance.</p>
                  </div>
                </div>
              </motion.div>
            )}
          </div>

          <button onClick={handleDownloadCV} className="bg-white text-brand-dark px-8 py-3 rounded shadow-card font-semibold flex items-center gap-2 hover:-translate-y-1 transition-transform border border-gray-100 cursor-pointer">
            Download CV <Download className="w-4 h-4" />
          </button>

        </motion.div>
      </div>
    </section>
  );
}
