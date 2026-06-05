import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from './Logo';

const Navbar = ({ isTransparent = true }: { isTransparent?: boolean }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    if (isTransparent) {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    } else {
        setScrolled(true);
    }
  }, [isTransparent]);

  const navLinks = [
    { name: 'Start', to: 'hero', isScrollLink: true },
    { name: 'O mnie', to: 'about', isScrollLink: true },
    { name: 'Usługi', to: 'services', isScrollLink: true },
    { name: 'Portfolio', to: 'portfolio', isScrollLink: true },
    { name: 'Współpraca', to: 'individual-pricing', isScrollLink: true },
    { name: 'Kontakt', to: 'contact', isScrollLink: true },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled || !isTransparent ? 'bg-anthracite-dark/95 md:bg-anthracite-dark/90 md:backdrop-blur-md shadow-lg py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="/" className="cursor-pointer">
          <Logo className="h-12 w-48" />
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            link.isScrollLink ? (
              <Link
                key={link.to}
                to={link.to}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="nav-link font-medium"
              >
                {link.name}
              </Link>
            ) : (
              <a key={link.to} href={link.to} className="nav-link font-medium">
                {link.name}
              </a>
            )
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-anthracite-dark border-t border-white/5 overflow-hidden"
          >
            <div className="flex flex-col space-y-4 px-6 py-6">
              {navLinks.map((link) => (
                 link.isScrollLink ? (
                    <Link
                    key={link.to}
                    to={link.to}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    onClick={() => setIsOpen(false)}
                    className="text-lg font-medium text-white/80 hover:text-brand-green transition-colors"
                    >
                    {link.name}
                    </Link>
                ) : (
                    <a key={link.to} href={link.to} className="text-lg font-medium text-white/80 hover:text-brand-green transition-colors">
                        {link.name}
                    </a>
                )
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
