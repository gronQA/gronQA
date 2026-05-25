import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="bg-anthracite-dark text-gray-500 py-12 border-t border-white/5 overflow-hidden px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="relative h-8 w-32">
            <Logo className="h-full w-auto" />
          </div>

          <div className="flex flex-wrap justify-center gap-8 text-sm uppercase tracking-widest">
            {/* Hiding social links for now
            <a href="#" className="hover:text-brand-green transition-colors">Facebook</a>
            <a href="#" className="hover:text-brand-green transition-colors">Instagram</a>
            <a href="https://www.linkedin.com/in/gronqa/" target="_blank" rel="noopener noreferrer" className="hover:text-brand-green transition-colors">LinkedIn</a>
            */}
            <a href="/polityka-prywatnosci" className="hover:text-brand-green transition-colors">
              Polityka Prywatności
            </a>
          </div>

          <p className="text-sm">
            © {new Date().getFullYear()} gronQA. Wszystkie prawa zastrzeżone.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
