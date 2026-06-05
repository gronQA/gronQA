import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { ExternalLink, Award } from 'lucide-react';

const CertificateIcon = ({ label, url }: { label: string, url: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="group flex flex-col items-center gap-2 transition-all duration-300 cursor-pointer"
      >
        <div className={`w-12 h-12 md:w-16 md:h-16 rounded-xl flex items-center justify-center border-2 transition-all duration-300 ${isOpen ? 'bg-brand-green border-brand-green text-anthracite shadow-[0_0_20px_rgba(18,200,65,0.4)]' : 'bg-white/5 border-white/10 text-brand-green hover:border-brand-green/50'}`}>
          <Award className="w-6 h-6 md:w-8 md:h-8" />
        </div>
        <span className="text-[10px] md:text-xs font-bold text-gray-400 uppercase tracking-widest group-hover:text-white transition-colors">{label}</span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 z-50 min-w-[160px]"
          >
            <div className="bg-anthracite-dark border border-brand-green/30 p-2 rounded-xl shadow-2xl backdrop-blur-md">
              <a 
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between gap-3 px-4 py-2 hover:bg-brand-green/10 rounded-lg text-white text-sm font-bold transition-colors whitespace-nowrap"
              >
                Pokaż certyfikat
                <ExternalLink size={14} className="text-brand-green" />
              </a>
              <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1">
                <div className="border-8 border-transparent border-t-anthracite-dark"></div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const About = () => {
  const [isDesktop, setIsDesktop] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (window.innerWidth >= 768) {
      setIsDesktop(true);
    }
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const filter = useTransform(scrollYProgress, [0.2, 0.5, 0.8], ['grayscale(100%)', 'grayscale(0%)', 'grayscale(100%)']);
  const overlayOpacity = useTransform(scrollYProgress, [0.2, 0.5, 0.8], [0.2, 0, 0.2]);

  const certsList = (
    <>
      <CertificateIcon label="Adobe" url="https://certification.adobe.com/credential/verify/49cf0acc-38de-11f0-9b2a-42010a400fc3/linkedin" />
      <CertificateIcon label="ISTQB" url="https://drive.google.com/file/d/1MqEdcsv-CDcY-Bqvm3C7D8KIksJkEUhW/view" />
    </>
  );

  const desktopContent = (
    <>
        <h2 className="text-brand-green font-bold uppercase tracking-wider mb-4 text-left">O mnie</h2>
        <h3 className="text-5xl font-bold text-white mb-6 leading-tight text-left">
          Inżynierska Precyzja i <span className="text-brand-green">Kreatywny</span> Design
        </h3>
        <div className="text-lg text-gray-300 space-y-6 leading-relaxed text-left">
          <p>
            Jestem magistrem inżynierem, absolwentem <strong className="text-white">Automatyki i Robotyki na Politechnice Śląskiej</strong>. To właśnie tam nauczyłem się technicznego myślenia i dbałości o każdy detal.
          </p>
          <p>
            Moja ścieżka zawodowa w IT rozpoczęła się od roli <strong className="text-white">testera oprogramowania</strong>, a następnie <strong className="text-white">analityka technicznego</strong>. Dzięki temu jakość i niezawodność kodu są dla mnie priorytetem.
          </p>
          <p>
            Jestem certyfikowanym ekspertem <strong className="text-white">ISTQB® Foundation Level</strong> oraz <strong className="text-white">Adobe Commerce Business Practitioner</strong>. Każda moja realizacja to połączenie wydajności z najwyższymi standardami biznesowymi.
          </p>
        </div>
        <div className="flex gap-8 mt-10">
          {certsList}
        </div>
    </>
  );

  const desktopImage = (
    <div 
        className="w-full aspect-[4/5] bg-anthracite rounded-3xl overflow-hidden relative border border-white/10 shadow-2xl"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
    >
        {/* Base image with scroll animation */}
        <motion.img 
            src="/author.jpg" 
            alt="Grzegorz - gronka.pl" 
            className="w-full h-full object-cover"
            style={{ filter }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-anthracite-dark/80 via-transparent to-transparent z-10"></div>
        {/* Green overlay with scroll animation */}
        <motion.div 
        className="absolute inset-0 bg-brand-green pointer-events-none z-20"
        style={{ opacity: overlayOpacity }}
        ></motion.div>
        {/* Full color image for hover effect */}
        <motion.img
            src="/author.jpg"
            alt="Grzegorz - gronka.pl"
            className="absolute inset-0 w-full h-full object-cover z-30"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
        />
    </div>
  );

  return (
    <section id="about" className="section-padding bg-anthracite bg-grain">
      <div ref={containerRef} className="max-w-7xl mx-auto">
        {/* Mobile View: Wrapped layout */}
        <div className="md:hidden">
            <h2 className="text-brand-green font-bold uppercase tracking-wider mb-2 text-xs text-left">O mnie</h2>
            <h3 className="text-2xl font-bold text-white mb-4 leading-tight text-left">
                Inżynierska Precyzja i <span className="text-brand-green">Kreatywny</span> Design
            </h3>
            
            <div className="block mb-6">
                <div className="float-left w-2/5 aspect-[4/5] mr-4 mb-2 bg-anthracite rounded-xl relative border border-white/10 shadow-xl">
                    <div className="absolute inset-0 rounded-xl overflow-hidden">
                        <img
                            src="/author.jpg"
                            alt="Grzegorz - gronka.pl"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-anthracite-dark/60 via-transparent to-transparent"></div>
                    </div>
                    {/* Floating icons on image - Mobile */}
                    <div className="absolute bottom-2 inset-x-0 flex justify-evenly items-center z-30">
                        {certsList}
                    </div>
                </div>
                <div className="text-sm text-gray-300 leading-relaxed text-left">
                    <p className="mb-4">
                        Jestem magistrem inżynierem, absolwentem <strong className="text-white">Automatyki i Robotyki na Politechnice Śląskiej</strong>. To tam nauczyłem się technicznego myślenia.
                    </p>
                    <p className="mb-4">
                        Jako certyfikowany tester <strong className="text-white">ISTQB®</strong> oraz <strong className="text-white">analityk techniczny</strong>, kładę ogromny nacisk na bezbłędne działanie i jakość kodu Twojej strony.
                    </p>
                    <p>
                        Moje doświadczenie jako <strong className="text-white">Adobe Commerce Business Practitioner</strong> pozwala mi tworzyć rozwiązania realizujące konkretne cele biznesowe.
                    </p>
                </div>
            </div>
        </div>

        {/* Desktop View: original animated layout */}
        <div className="hidden md:grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 1, x: 0 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative order-2 md:order-1"
          >
            {desktopImage}
            <div className="absolute -bottom-6 -right-6 bg-brand-green p-8 rounded-2xl shadow-xl text-anthracite hidden md:block z-40">
                <p className="text-4xl font-bold">5+</p>
                <p className="text-sm font-semibold">Lat doświadczenia</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 1, x: 0 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="order-1 md:order-2"
          >
            {desktopContent}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
