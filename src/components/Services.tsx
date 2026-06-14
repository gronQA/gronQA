import { Monitor, Zap, Smartphone, ShieldCheck } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

const services = [
  {
    icon: <Monitor className="w-5 h-5 md:w-8 md:h-8" />,
    title: 'Strony www',
    description: 'Nowoczesne i estetyczne strony internetowe.'
  },
  {
    icon: <Zap className="w-5 h-5 md:w-8 md:h-8" />,
    title: 'Szybkość',
    description: 'Zoptymalizuję stronę pod kątem czasu ładowania.'
  },
  {
    icon: <Smartphone className="w-5 h-5 md:w-8 md:h-8" />,
    title: 'Responsywność',
    description: 'Twoja strona będzie wyglądać świetnie wszędzie.'
  },
  {
    icon: <ShieldCheck className="w-5 h-5 md:w-8 md:h-8" />,
    title: 'SEO i Bezp.',
    description: 'Dbam o certyfikaty SSL oraz pozycje w Google.'
  }
];

const AnimatedServices = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
        observer.observe(sectionRef.current);
    }
    
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef} className="max-w-7xl mx-auto">
      <div className="text-left mb-12 md:mb-24">
         <h2
            className={`text-brand-green font-bold uppercase tracking-[0.2em] text-[10px] md:text-sm mb-4 md:mb-6 transition-all duration-700 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            Moja Oferta
          </h2>
          <h3
            className={`text-3xl md:text-5xl lg:text-6xl font-black text-white transition-all duration-700 delay-100 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            W czym mogę Ci pomóc?
          </h3>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            style={{ transitionDelay: `${index * 150 + 200}ms` }}
            className={`card !p-3 md:!p-10 group hover:border-brand-green/30 hover:shadow-[0_0_30px_rgba(18,200,65,0.15)] transition-all duration-700 ease-out transform cursor-default flex flex-col items-center md:items-start text-center md:text-left ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <div className="w-10 h-10 md:w-16 md:h-16 bg-brand-green/10 rounded-lg md:rounded-2xl flex items-center justify-center text-brand-green mb-3 md:mb-8 group-hover:scale-110 transition-transform duration-500 flex-shrink-0">
              {service.icon}
            </div>
            <h4 className="text-xs md:text-2xl font-bold text-white mb-2 md:mb-6 group-hover:text-brand-green transition-colors duration-500 uppercase tracking-wider md:normal-case">
              {service.title}
            </h4>
            <p className="text-gray-400 leading-tight md:leading-relaxed group-hover:text-white transition-colors duration-500 text-[10px] md:text-lg font-medium">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <section id="services" className="section-padding bg-anthracite bg-grain">
      <AnimatedServices />
    </section>
  );
};

export default Services;
