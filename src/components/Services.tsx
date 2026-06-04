import { motion, type Variants } from 'framer-motion';
import { Monitor, Zap, Smartphone, ShieldCheck } from 'lucide-react';
import { useState, useEffect } from 'react';

const services = [
  {
    icon: <Monitor size={32} />,
    title: 'Strony Wizytówki',
    description: 'Nowoczesne i estetyczne strony internetowe, które w przejrzysty sposób prezentują Twoją ofertę.'
  },
  {
    icon: <Zap size={32} />,
    title: 'Szybkość i Wydajność',
    description: 'Optymalizujemy każdą stronę pod kątem czasu ładowania, co przekłada się na lepsze pozycjonowanie.'
  },
  {
    icon: <Smartphone size={32} />,
    title: 'Pełna Responsywność',
    description: 'Twoja strona będzie wyglądać świetnie na każdym urządzeniu – od smartfona po komputer stacjonarny.'
  },
  {
    icon: <ShieldCheck size={32} />,
    title: 'Bezpieczeństwo i SEO',
    description: 'Dbamy o certyfikaty SSL oraz podstawową optymalizację pod wyszukiwarki (Google).'
  }
];

const AnimatedServices = () => {
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-24">
         <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut"}}
            className="text-brand-green font-bold uppercase tracking-[0.2em] text-sm mb-6"
          >
            Moja Oferta
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1}}
            className="text-5xl md:text-6xl font-black text-white"
          >
            W czym mogę Ci pomóc?
          </motion.h3>
      </div>
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="card group hover:border-brand-green/30 hover:shadow-[0_0_30px_rgba(18,200,65,0.1)] transition-all duration-500 cursor-default"
          >
            <div className="w-16 h-16 bg-brand-green/10 rounded-2xl flex items-center justify-center text-brand-green mb-8 group-hover:scale-110 transition-all duration-500">
              {service.icon}
            </div>
            <h4 className="text-2xl font-bold text-white mb-6 group-hover:text-brand-green transition-colors duration-500">
              {service.title}
            </h4>
            <p className="text-gray-400 leading-relaxed group-hover:text-white transition-colors duration-500 text-lg font-medium">
              {service.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

const StaticServices = () => (
  <div className="max-w-7xl mx-auto">
    <div className="text-center mb-24">
      <h2 className="text-brand-green font-bold uppercase tracking-[0.2em] text-sm mb-6">Moja Oferta</h2>
      <h3 className="text-5xl md:text-6xl font-black text-white">W czym mogę Ci pomóc?</h3>
    </div>
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      {services.map((service, index) => (
        <div key={index} className="card">
           <div className="w-16 h-16 bg-brand-green/10 rounded-2xl flex items-center justify-center text-brand-green mb-8">
             {service.icon}
           </div>
           <h4 className="text-2xl font-bold text-white mb-6">
             {service.title}
           </h4>
           <p className="text-gray-400 leading-relaxed text-lg font-medium">
             {service.description}
           </p>
        </div>
      ))}
    </div>
  </div>
);

const Services = () => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    if (window.innerWidth >= 768) {
      setIsDesktop(true);
    }
  }, []);

  return (
    <section id="services" className="section-padding bg-anthracite bg-grain">
      {isDesktop ? <AnimatedServices /> : <StaticServices />}
    </section>
  );
};

export default Services;
