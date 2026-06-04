import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import { Link } from 'react-scroll';
import { projects } from '../data/projects';

const ImageSlider = ({ isMobile }: { isMobile: boolean }) => {
  const [currentProject, setCurrentProject] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentProject((prev) => (prev + 1) % projects.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      initial={isMobile ? {opacity: 1, scale: 1} : { opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
      className="relative w-full h-[450px] md:h-[500px] mt-8 md:mt-0"
    >
      {/* Project Slider Main Card */}
      <div 
        onClick={() => projects[currentProject].link && window.open(projects[currentProject].link, '_blank')}
        className="w-full h-full bg-anthracite-dark rounded-[40px] shadow-2xl relative overflow-hidden group border border-white/5 cursor-pointer"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentProject}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
          >
            <img 
              src={`${import.meta.env.BASE_URL}${projects[currentProject].image}`} 
              alt={projects[currentProject].title}
              className="w-full h-full object-cover object-center opacity-40 group-hover:scale-105 transition-transform duration-1000"
              loading="eager"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                if (!target.src.endsWith('placeholder.jpg')) {
                  target.src = `${import.meta.env.BASE_URL}realizacje/placeholder.jpg`;
                }
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-anthracite-dark via-anthracite-dark/50 to-transparent"></div>
          </motion.div>
        </AnimatePresence>

        {/* Content over image */}
        <div className="absolute inset-0 z-10 flex flex-col justify-end p-8 text-left">
          <p className="text-sm font-bold text-brand-green uppercase tracking-widest">{projects[currentProject].category}</p>
          <h3 className="text-2xl font-bold text-white mt-1">{projects[currentProject].title}</h3>
        </div>

        {/* Slider Controls */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 z-20">
          {projects.map((_, i) => (
            <div key={i} className={`w-2 h-2 rounded-full transition-all ${i === currentProject ? 'w-5 bg-brand-green' : 'bg-white/20'}`} />
          ))}
        </div>
      </div>

      {/* Floating Element 1: Certyfikat Jakości - HIDDEN ON MOBILE */}
      <div
        className="hidden md:block absolute -top-10 -right-10 bg-anthracite-dark p-6 rounded-2xl shadow-xl border border-white/10 z-30"
      >
        <div className="w-12 h-12 bg-brand-green rounded-full flex items-center justify-center text-anthracite mb-2">
          <ShieldCheck size={28} strokeWidth={2.5} />
        </div>
        <p className="text-sm font-bold text-white uppercase tracking-tighter">Certyfikat Jakości</p>
        <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest text-center">100% responsive</p>
      </div>

      {/* Floating Element 2: Project Names - HIDDEN ON MOBILE */}
      <div
        className="hidden md:block absolute -bottom-12 -left-12 bg-anthracite-dark p-6 rounded-2xl shadow-xl border border-white/10 z-30 min-w-[220px]"
      >
        <p className="text-xs font-bold text-brand-green mb-1 uppercase tracking-widest">Wybrany projekt</p>
        <p className="text-lg font-bold text-white">
          {projects[0].title}
        </p>
        <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden mt-3">
          <div className="h-full w-full bg-brand-green/30" />
        </div>
      </div>
    </motion.div>
  );
}


const Hero = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const isMobile = isClient && window.innerWidth < 768;

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-28 pb-16 md:pt-20 bg-gradient-to-br from-anthracite to-anthracite-dark bg-grain overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-[1fr_1.3fr] gap-16 items-center">
        {/* Text content column */}
        <div className="flex flex-col">
            <motion.div
            initial={isMobile ? {opacity: 1, x: 0} : { opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] mb-8 max-w-2xl text-balance">
                Nowoczesne <span className="text-brand-green">strony wizytówki</span>
            </h1>
            </motion.div>

            {/* Image Slider for Mobile */}
            <div className="md:hidden my-8">
                <ImageSlider isMobile={isMobile} />
            </div>

            <motion.div
            initial={isMobile ? {opacity: 1, x: 0} : { opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            >
            <p className="text-xl text-gray-300 mb-10 max-w-lg leading-relaxed">
                Stworzę dla Ciebie profesjonalny wizerunek w sieci, który przyciągnie klientów i wyróżni Cię na tle konkurencji.
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
                  className="px-8 py-3 rounded-full font-semibold border-2 border-white/10 text-white hover:bg-white/10 transition-all duration-300 cursor-pointer"
                >
                  Moje Realizacje
                </Link>
                <Link 
                  to="pricing" 
                  smooth={true} 
                  duration={800} 
                  offset={-70}
                  className="px-8 py-3 rounded-full font-semibold border-2 border-white/20 text-white hover:bg-white hover:text-anthracite transition-all duration-300 cursor-pointer"
                >
                  Zobacz modele współpracy
                </Link>
            </div>
            </motion.div>
        </div>

        {/* Image Slider for Desktop */}
        <div className="hidden md:block">
            <ImageSlider isMobile={isMobile} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
