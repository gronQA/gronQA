import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-scroll';

const projects = [
  { id: 1, title: 'Przejrzystości', category: 'Strona Wizytówka', image: '/realizacje/macbook.jpg' },
  { id: 2, title: 'Niezawodności', category: 'Sklep Internetowy', image: '/realizacje/laptop.jpg' },
  { id: 3, title: 'Eleganckiego wykończenia', category: 'Portfolio Artysty', image: '/realizacje/desk.jpg' },
  { id: 4, title: 'Szybkości działania', category: 'Aplikacja Webowa', image: '/realizacje/code.jpg' },
];

const Hero = () => {
  const [currentProject, setCurrentProject] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentProject((prev) => (prev + 1) % projects.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section id="hero" className="min-h-screen flex items-center pt-20 bg-gradient-to-br from-anthracite to-anthracite-dark bg-grain">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] mb-8 max-w-2xl">
            Nowoczesna <br />
            <span className="text-brand-green">strona internetowa</span> <br />
            skrojona na miarę Twoich potrzeb
          </h1>
          <p className="text-xl text-gray-300 mb-10 max-w-lg leading-relaxed">
            Stworzę dla Ciebie profesjonalny wizerunek w sieci, który przyciąga klientów i wyróżnia Cię na tle konkurencji.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link 
              to="contact" 
              smooth={true} 
              duration={800} 
              offset={-70}
              className="btn-primary flex items-center gap-2 group cursor-pointer"
            >
              Rozpocznij Projekt
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </Link>
            <Link 
              to="portfolio" 
              smooth={true} 
              duration={800} 
              offset={-70}
              className="px-8 py-3 rounded-full font-semibold border-2 border-white/20 text-white hover:bg-white hover:text-anthracite transition-all duration-300 cursor-pointer"
            >
              Moje Realizacje
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative hidden md:block h-[500px]"
        >
          {/* Project Slider Main Card */}
          <div className="w-full h-full bg-anthracite-dark rounded-[40px] shadow-2xl relative overflow-hidden group border border-white/5">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentProject}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 flex flex-col items-center justify-center text-center p-12"
              >
                <div className="absolute inset-0">
                  <img 
                    src={projects[currentProject].image} 
                    alt={projects[currentProject].title}
                    className="w-full h-full object-cover opacity-50"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-anthracite-dark via-transparent to-transparent"></div>
                </div>
                <div className="relative z-10 w-full h-full flex items-center justify-center text-center p-12">
                   <div className="bg-brand-green/20 backdrop-blur-md px-6 py-2 rounded-full text-brand-green text-sm font-bold uppercase tracking-widest mb-4">
                     {projects[currentProject].category}
                   </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Slider Controls */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-6 z-20">
              <button onClick={prevProject} className="w-10 h-10 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-white hover:bg-brand-green hover:text-anthracite transition-all">
                <ChevronLeft size={20} />
              </button>
              <div className="flex gap-2">
                {projects.map((_, i) => (
                  <div key={i} className={`w-2 h-2 rounded-full transition-all ${i === currentProject ? 'w-6 bg-brand-green' : 'bg-white/20'}`} />
                ))}
              </div>
              <button onClick={nextProject} className="w-10 h-10 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-white hover:bg-brand-green hover:text-anthracite transition-all">
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          {/* Floating Element 1: 100% Responsywność */}
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-10 -right-10 bg-anthracite-dark p-6 rounded-2xl shadow-xl border border-white/10 z-30"
          >
            <div className="w-12 h-12 bg-brand-green rounded-full flex items-center justify-center text-anthracite mb-2">
              <span className="font-bold">100%</span>
            </div>
            <p className="text-sm font-bold text-white">Responsywność</p>
          </motion.div>

          {/* Floating Element 2: Project Names */}
          <motion.div
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -bottom-10 -left-10 bg-anthracite-dark p-6 rounded-2xl shadow-xl border border-white/10 z-30 min-w-[220px]"
          >
            <p className="text-xs font-bold text-brand-green mb-1 uppercase tracking-widest">Gwarancja</p>
            <AnimatePresence mode="wait">
              <motion.p
                key={currentProject}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="text-sm font-bold text-white"
              >
                {projects[currentProject].title}
              </motion.p>
            </AnimatePresence>
            <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden mt-3">
              <motion.div 
                key={currentProject}
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 5, ease: "linear" }}
                className="h-full bg-brand-green"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
