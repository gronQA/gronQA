import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const AnimatedContent = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const columnLeftVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };
  
  const columnRightVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const overlayVariants = {
    hidden: { opacity: 0.25 },
    visible: { opacity: 0, transition: { duration: 0.8, ease: 'easeOut', delay: 0.1 } }
  };

  return (
    <motion.div 
        className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div
        variants={columnLeftVariants}
        className="relative"
      >
        <div className="w-full aspect-[4/5] bg-anthracite rounded-3xl overflow-hidden relative border border-white/10 shadow-2xl">
           <img 
             src={`${import.meta.env.BASE_URL}author.jpg`} 
             alt="Grzegorz - gronQA" 
             className="w-full h-full object-cover"
           />
           <div className="absolute inset-0 bg-gradient-to-t from-anthracite-dark/80 via-transparent to-transparent"></div>
           <motion.div 
            className="absolute inset-0 bg-brand-green pointer-events-none"
            variants={overlayVariants}
           ></motion.div>
        </div>
        <div className="absolute -bottom-6 -right-6 bg-brand-green p-8 rounded-2xl shadow-xl text-anthracite hidden md:block z-10">
          <p className="text-4xl font-bold">5+</p>
          <p className="text-sm font-semibold">Lat doświadczenia</p>
        </div>
      </motion.div>

      <motion.div
        variants={columnRightVariants}
      >
        <h2 className="text-brand-green font-bold uppercase tracking-wider mb-4">O mnie</h2>
        <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
          Inżynierska Precyzja i <span className="text-brand-green">Kreatywny</span> Design
        </h3>
        <p className="text-lg text-gray-300 mb-6 leading-relaxed">
          Jestem magistrem inżynierem, absolwentem <strong className="text-white">Automatyki i Robotyki na Politechnice Śląskiej</strong>. To właśnie tam nauczyłem się technicznego myślenia i dbałości o każdy detal, które dziś przekładam na kod Twojej strony.
        </p>
        <p className="text-lg text-gray-300 mb-6 leading-relaxed">
          Moje doświadczenie zawodowe, zdobywane m.in. w renomowanej agencji e-commerce <strong className="text-white">Tom&Co.</strong>, pozwoliło mi zrozumieć, że nowoczesna strona internetowa to nie tylko design, ale przede wszystkim wydajność, responsywność i realizacja celów biznesowych. 
        </p>
        <p className="text-lg text-gray-300 mb-8 leading-relaxed">
          Jako certyfikowany <strong className="text-white">Adobe Commerce Business Practitioner</strong>, dbam o to, by każda realizacja spełniała najwyższe standardy techniczne i sprzedażowe obowiązujące na światowym rynku.
        </p>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <p className="text-3xl font-bold text-white mb-1">50+</p>
            <p className="text-gray-500 font-medium">Ukończonych projektów</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-white mb-1">100%</p>
            <p className="text-gray-500 font-medium">Zadowolonych klientów</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const StaticContent = () => (
  <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
    <div className="relative">
      <div className="w-full aspect-[4/5] bg-anthracite rounded-3xl overflow-hidden relative border border-white/10 shadow-2xl">
        <img 
          src={`${import.meta.env.BASE_URL}author.jpg`} 
          alt="Grzegorz - gronQA" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-anthracite-dark/80 via-transparent to-transparent"></div>
      </div>
      <div className="absolute -bottom-6 -right-6 bg-brand-green p-8 rounded-2xl shadow-xl text-anthracite hidden md:block z-10">
        <p className="text-4xl font-bold">5+</p>
        <p className="text-sm font-semibold">Lat doświadczenia</p>
      </div>
    </div>
    <div>
      <h2 className="text-brand-green font-bold uppercase tracking-wider mb-4">O mnie</h2>
      <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
        Inżynierska Precyzja i <span className="text-brand-green">Kreatywny</span> Design
      </h3>
      <p className="text-lg text-gray-300 mb-6 leading-relaxed">
        Jestem magistrem inżynierem, absolwentem <strong className="text-white">Automatyki i Robotyki na Politechnice Śląskiej</strong>. To właśnie tam nauczyłem się technicznego myślenia i dbałości o każdy detal, które dziś przekładam na kod Twojej strony.
      </p>
      <p className="text-lg text-gray-300 mb-6 leading-relaxed">
        Moje doświadczenie zawodowe, zdobywane m.in. w renomowanej agencji e-commerce <strong className="text-white">Tom&Co.</strong>, pozwoliło mi zrozumieć, że nowoczesna strona internetowa to nie tylko design, ale przede wszystkim wydajność, responsywność i realizacja celów biznesowych. 
      </p>
      <p className="text-lg text-gray-300 mb-8 leading-relaxed">
        Jako certyfikowany <strong className="text-white">Adobe Commerce Business Practitioner</strong>, dbam o to, by każda realizacja spełniała najwyższe standardy techniczne i sprzedażowe obowiązujące na światowym rynku.
      </p>
      <div className="grid grid-cols-2 gap-6">
        <div>
          <p className="text-3xl font-bold text-white mb-1">50+</p>
          <p className="text-gray-500 font-medium">Ukończonych projektów</p>
        </div>
        <div>
          <p className="text-3xl font-bold text-white mb-1">100%</p>
          <p className="text-gray-500 font-medium">Zadowolonych klientów</p>
        </div>
      </div>
    </div>
  </div>
);

const About = () => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    if (window.innerWidth >= 768) {
      setIsDesktop(true);
    }
  }, []);

  return (
    <section id="about" className="section-padding bg-anthracite-dark overflow-hidden bg-grain">
      {isDesktop ? <AnimatedContent /> : <StaticContent />}
    </section>
  );
};

export default About;
