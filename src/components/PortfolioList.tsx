import { motion } from 'framer-motion';
import { ExternalLink, ArrowLeft } from 'lucide-react';
import { projects } from '../data/projects';

const PortfolioList = () => {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-left mb-12 md:mb-20">
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-8"
        >
            <a 
                href="/" 
                className="inline-flex items-center gap-2 text-gray-400 hover:text-brand-green transition-colors font-medium group"
            >
                <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                Powrót do strony głównej
            </a>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-black text-white mb-6"
        >
          Moje <span className="text-brand-green">Realizacje</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-gray-400 text-lg md:text-xl max-w-2xl"
        >
          Przegląd wybranych projektów, które miałem przyjemność realizować. Każda strona to unikalna historia i techniczna precyzja.
        </motion.p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
        {projects.map((project, index) => (
          <motion.a
            key={index}
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index }}
            className="group block relative bg-anthracite/50 rounded-[32px] overflow-hidden border border-white/5 hover:border-brand-green/30 transition-all duration-500"
          >
            <div className="aspect-video overflow-hidden">
              <img
                src={`/${project.image}`}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>

            <div className="p-8">
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-white/5 text-gray-400 rounded-full text-xs font-medium uppercase tracking-wider"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-brand-green transition-colors">
                {project.title}
              </h2>
              <p className="text-gray-400 mb-6 line-clamp-3">
                {project.description}
              </p>

              <div className="flex items-center gap-2 text-brand-green font-bold text-sm group-hover:text-brand-green-light transition-colors">
                Zobacz stronę <ExternalLink size={16} />
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  );
};

export default PortfolioList;
