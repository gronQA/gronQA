import { motion, type Variants } from 'framer-motion';
import { projects } from '../data/projects';

const Portfolio = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.8, ease: [0.23, 1, 0.32, 1] }
    }
  };

  return (
    <section id="portfolio" className="section-padding bg-anthracite-dark bg-grain overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-6">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-brand-green font-bold uppercase tracking-[0.2em] text-sm mb-6"
            >
              Moje Realizacje
            </motion.h2>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-6xl font-black text-white"
            >
              Wybrane Projekty
            </motion.h3>
          </div>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="group relative h-[500px] bg-anthracite rounded-[40px] overflow-hidden cursor-pointer border border-white/5 shadow-2xl"
              onClick={() => project.link && window.open(project.link, '_blank')}
            >
              <div className="absolute inset-0 bg-anthracite/40 group-hover:bg-brand-green/90 transition-all duration-700 z-10"></div>
              
              <div className="absolute inset-0 z-20 flex flex-col justify-end p-12 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-8 group-hover:translate-y-0">
                <p className="text-anthracite text-xs font-black uppercase tracking-[0.3em] mb-4">
                  {project.category}
                </p>
                <h4 className="text-anthracite text-4xl font-black mb-8 leading-none">
                  {project.title}
                </h4>
                <div className="w-12 h-12 rounded-full border-2 border-anthracite flex items-center justify-center text-anthracite group-hover:scale-110 transition-transform duration-500">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                </div>
              </div>
              
              <div className="w-full h-full">
                <motion.img 
                  src={`${import.meta.env.BASE_URL}${project.image}`} 
                  alt={project.title} 
                  initial={{ filter: 'grayscale(100%)' }}
                  whileInView={{ filter: 'grayscale(0%)' }}
                  viewport={{ amount: 0.4, once: true }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    if (!target.src.endsWith('placeholder.jpg')) {
                      target.src = `${import.meta.env.BASE_URL}realizacje/placeholder.jpg`;
                    }
                  }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
