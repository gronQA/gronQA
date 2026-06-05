import { motion } from 'framer-motion';
import { ExternalLink, ChevronRight } from 'lucide-react';

import { projects } from '../data/projects';

const Portfolio = () => {
  return (
    <section id="portfolio" className="section-padding bg-anthracite-dark bg-grain">
      <div className="max-w-7xl mx-auto">
        <div className="text-left mb-12 md:mb-24">
          <motion.h2
            initial={{ opacity: 1, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-green font-bold uppercase tracking-wider mb-2 md:mb-4 text-xs md:text-sm"
          >
            Portfolio
          </motion.h2>
          <motion.h3
            initial={{ opacity: 1, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl md:text-6xl font-black text-white"
          >
            Wybrane Projekty
          </motion.h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <motion.a
              key={index}
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 1, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group block relative bg-anthracite/50 rounded-2xl md:rounded-[32px] overflow-hidden border border-white/5 hover:border-brand-green/30 transition-all duration-500"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={`/${project.image}`}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              <div className="p-6 md:p-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-white/5 text-gray-400 rounded-full text-[10px] md:text-xs font-medium uppercase tracking-wider"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h4 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-brand-green transition-colors">
                  {project.title}
                </h4>
                <p className="text-gray-400 text-sm md:text-base mb-6 line-clamp-2">
                  {project.description}
                </p>

                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-2 text-brand-green font-bold text-xs md:text-sm group-hover:text-brand-green-light transition-colors">
                    Zobacz stronę <ExternalLink size={16} />
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        <div className="mt-12 md:mt-20 text-center">
            <a 
                href="#contact" 
                className="inline-flex items-center gap-2 text-white font-bold hover:text-brand-green transition-colors group"
            >
                Chcesz zobaczyć więcej? <span className="text-brand-green">Napisz do mnie</span>
                <ChevronRight className="group-hover:translate-x-1 transition-transform" />
            </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
