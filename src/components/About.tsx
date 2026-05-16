import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="section-padding bg-anthracite-dark overflow-hidden bg-grain">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="w-full aspect-[4/5] bg-anthracite rounded-3xl overflow-hidden relative border border-white/10 shadow-2xl">
             <motion.img 
               src="/author.jpg" 
               alt="Grzegorz - gronQA" 
               initial={{ filter: 'grayscale(100%)' }}
               whileInView={{ filter: 'grayscale(0%)' }}
               viewport={{ amount: 0.8 }}
               transition={{ duration: 1.2, ease: "easeOut" }}
               className="w-full h-full object-cover"
             />
             <motion.div 
               initial={{ opacity: 0.3 }}
               whileInView={{ opacity: 0 }}
               viewport={{ amount: 0.8 }}
               transition={{ duration: 1.2, ease: "easeOut" }}
               className="absolute inset-0 bg-brand-green/20 pointer-events-none"
             ></motion.div>
          </div>
          <div className="absolute -bottom-6 -right-6 bg-brand-green p-8 rounded-2xl shadow-xl text-anthracite hidden md:block z-10">
            <p className="text-4xl font-bold">5+</p>
            <p className="text-sm font-semibold">Lat doświadczenia</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
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
      </div>
    </section>
  );
};

export default About;
