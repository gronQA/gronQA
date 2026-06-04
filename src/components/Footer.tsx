import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="bg-anthracite-dark text-gray-500 py-12 border-t border-white/5 overflow-hidden px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="relative h-8 w-32">
              <Logo className="h-full w-auto" />
            </div>
            <div className="text-xs text-gray-500 text-center md:text-left leading-relaxed">
              <p className="font-bold text-gray-400">Michał Gronka</p>
              <p>NIP: 6263050441</p>
              <p>REGON: 523102738</p>
              <p>ul. Powstańców Śląskich 4a/15</p>
              <p>41-800 Zabrze</p>
            </div>
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
            © {new Date().getFullYear()} gronka.pl. Wszystkie prawa zastrzeżone.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
