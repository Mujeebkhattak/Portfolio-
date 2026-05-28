import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Skills } from './components/Skills';

export default function App() {
  return (
    <div className="min-h-screen relative overflow-hidden font-sans bg-[#f0f4f9] text-[#64748b]">
      <Navbar />
      <main className="w-full">
        <Hero />
        <About />
        <Skills />
        <Services />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
