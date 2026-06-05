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
    <motion.a
      href={projects[currentProject].liveUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 1, scale: 1 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
      className="relative block w-full h-[300px] md:h-[500px] mt-4 md:mt-0"
    >
      {/* Project Slider Main Card */}
      <div 
        className="w-full h-full bg-anthracite-dark rounded-3xl md:rounded-[40px] shadow-2xl relative overflow-hidden group border border-white/5 cursor-pointer"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentProject}
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
          >
            <img 
              src={`/${projects[currentProject].image}`} 
              alt={projects[currentProject].title}
              className="w-full h-full object-cover object-center opacity-40 group-hover:scale-105 transition-transform duration-1000"
              loading="eager"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                if (!target.src.endsWith('placeholder.jpg')) {
                  target.src = '/realizacje/placeholder.jpg';
                }
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-anthracite-dark via-anthracite-dark/50 to-transparent"></div>
          </motion.div>
        </AnimatePresence>

        {/* Slider Controls */}
        <div className="absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 z-20">
          {projects.map((_, i) => (
            <div key={i} className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full transition-all ${i === currentProject ? 'w-4 md:w-5 bg-brand-green' : 'bg-white/20'}`} />
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

      {/* Floating Element 2: Project Names */}
      <div
        className="absolute -bottom-4 left-4 right-4 md:left-[-3rem] md:right-auto md:-bottom-12 bg-anthracite-dark p-3 md:p-6 rounded-xl md:rounded-2xl shadow-xl border border-white/10 z-30 min-w-0 md:min-w-[220px]"
      >
        <p className="text-[10px] font-bold text-brand-green mb-0.5 md:mb-1 uppercase tracking-widest text-center md:text-left">Wybrany projekt</p>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentProject}
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="text-center md:text-left"
          >
            <p className="text-[8px] md:text-xs text-gray-400 font-bold uppercase tracking-wider mb-0.5 md:mb-1">{projects[currentProject].category}</p>
            <p className="text-sm md:text-lg font-bold text-white line-clamp-1">
              {projects[currentProject].title}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.a>
  );
}


const Hero = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const isMobile = isClient && window.innerWidth < 768;

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-24 pb-12 md:pt-20 bg-gradient-to-br from-anthracite to-anthracite-dark bg-grain overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:grid md:grid-cols-[1fr_1.3fr] gap-8 md:gap-16 items-center">
        {/* Text content container */}
        <div className="flex flex-col w-full">
            <motion.div
            initial={{ opacity: 1, x: 0 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] mb-6 md:mb-8 text-center md:text-left">
                Nowoczesne <span className="text-brand-green">Strony www</span>
            </h1>
            </motion.div>

            {/* Image Slider for Mobile */}
            <div className="md:hidden mb-12">
                <ImageSlider isMobile={isMobile} />
            </div>

            <div className="flex flex-col sm:flex-row md:flex-col gap-6 md:gap-0">
                <motion.div
                    className="flex-1 md:w-full"
                    initial={{ opacity: 1, x: 0 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
                >
                    <p className="text-base md:text-xl text-gray-300 mb-0 md:mb-10 leading-relaxed text-center md:text-left max-w-xs mx-auto md:max-w-lg">
                        Stworzę dla Ciebie profesjonalny wizerunek w sieci, który przyciągnie klientów i wyróżni Cię na tle konkurencji.
                    </p>
                </motion.div>

                <div className="flex-1 flex flex-col gap-3 md:gap-4 w-full">
                    <Link 
                    to="contact" 
                    smooth={true} 
                    duration={800} 
                    offset={-70}
                    className="btn-primary !py-3 md:!py-4 flex items-center justify-center gap-2 group cursor-pointer w-full text-center text-xs md:text-base"
                    >
                    Rozpocznij Projekt
                    <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
                    </Link>
                    <div className="flex flex-row gap-2 md:gap-4">
                        <Link 
                        to="portfolio" 
                        smooth={true} 
                        duration={800} 
                        offset={-70}
                        className="px-3 py-3 md:px-8 md:py-4 rounded-full font-semibold border-2 border-white/10 text-white hover:bg-white/10 transition-all duration-300 cursor-pointer flex-1 text-center flex items-center justify-center whitespace-nowrap text-base sm:text-lg md:text-xl"
                        >
                        Portfolio
                        </Link>
                        <Link 
                        to="individual-pricing" 
                        smooth={true} 
                        duration={800} 
                        offset={-70}
                        className="px-3 py-3 md:px-8 md:py-4 rounded-full font-semibold border-2 border-white/10 text-white hover:bg-white/10 transition-all duration-300 cursor-pointer flex-1 text-center flex items-center justify-center whitespace-nowrap text-base sm:text-lg md:text-xl"
                        >
                        Oferta
                        </Link>
                    </div>
                </div>
            </div>
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
