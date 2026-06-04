import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { Check } from 'lucide-react';

const TierLogo = ({ id, color1, color2, isPlatinum }: { id: string, color1: string, color2: string, isPlatinum?: boolean }) => (
    <div className="w-48 h-16 mb-6 flex items-center justify-center relative">
        {isPlatinum && (
            <div className="absolute inset-0 bg-white/10 blur-[30px] rounded-full pointer-events-none" />
        )}
        <svg viewBox="0 0 520 160.17" className="h-full w-auto relative z-10">
            <defs>
                <linearGradient id={`grad_bronze_${id}`} x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: '#E6A868' }} />
                    <stop offset="100%" style={{ stopColor: '#8C5A2D' }} />
                </linearGradient>
                <linearGradient id={`grad_silver_${id}`} x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: '#E0E0E0' }} />
                    <stop offset="100%" style={{ stopColor: '#A0A0A0' }} />
                </linearGradient>
                <linearGradient id={`grad_gold_${id}`} x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: '#FFED87' }} />
                    <stop offset="100%" style={{ stopColor: '#D4AF37' }} />
                </linearGradient>
                 <linearGradient id={`grad_platinum_${id}`} x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: '#FFFFFF' }} />
                    <stop offset="50%" style={{ stopColor: '#B4B4B4' }} />
                    <stop offset="100%" style={{ stopColor: '#E5E4E2' }} />
                </linearGradient>
                {isPlatinum && (
                    <linearGradient id="grad_platinum_shimmer" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" style={{ stopColor: '#E5E4E2' }}>
                            <animate attributeName="offset" values="-1; 1" dur="3s" repeatCount="indefinite" />
                        </stop>
                        <stop offset="0.5" style={{ stopColor: '#FFFFFF' }}>
                            <animate attributeName="offset" values="-0.5; 1.5" dur="3s" repeatCount="indefinite" />
                        </stop>
                        <stop offset="1" style={{ stopColor: '#E5E4E2' }}>
                            <animate attributeName="offset" values="0; 2" dur="3s" repeatCount="indefinite" />
                        </stop>
                    </linearGradient>
                )}
            </defs>
            <path
                fill={isPlatinum ? "url(#grad_platinum_shimmer)" : color1}
                d="m 142.23505,95.03 c 0.71,33.05 -26.6,62.57 -61.820004,64.42 -17.26,0.9 -32.62,-5 -43.68,-15.19 -4.76,-4.38 -8.72,-9.56 -11.7,-15.34 l 0.8,-0.54 c 3.63,5.37 8.67,9.95 14.98,13.25 4.06,2.13 8.64,3.73 13.7,4.67 34.2,6.34 77.370004,-15.98 80.530004,-55.97 0.93,-11.77 -0.6,-23.21 -6.11,-30.32 11.04,6.96 13,21.56 13.3,35.02 z"
            />
            <polygon
                fill={isPlatinum ? "url(#grad_platinum_shimmer)" : color2}
                points="600,298.78 464.68,380.75 404.61,331.53 458.25,428.64 "
                transform="translate(-392.31495,-298.78)"
            />
            <path
                fill={isPlatinum ? "url(#grad_platinum_shimmer)" : color2}
                d="m 28.325046,70.4 c 0,0 -17.79,28.93 2.57,56.25 0,0 -6.41,-17.49 6.43,-40.18 z"
            />
            <path
                fill={isPlatinum ? "url(#grad_platinum_shimmer)" : color2}
                d="m 37.325046,58.18 c 0,0 40.5,-40.18 86.790004,-3.54 l -8.04,5.36 c 0,0 -29.570004,-22.4 -72.320004,13.6 z"
            />
            <text
                className="logo-text"
                style={{ 
                    fill: isPlatinum ? "url(#grad_platinum_shimmer)" : color1,
                    fontFamily: 'Roboto Condensed, sans-serif',
                    fontSize: '124px',
                    letterSpacing: '-7px',
                    fontWeight: 400
                }}
                x="146"
                y="133.4749"
            >gron</text>
            <text
                className="logo-text"
                style={{ 
                    fill: isPlatinum ? "url(#grad_platinum_shimmer)" : color2,
                    fontFamily: 'Roboto Condensed, sans-serif',
                    fontSize: '119px',
                    letterSpacing: '-5px',
                    fontWeight: 400
                }}
                x="339"
                y="133.4749"
            >QA</text>
        </svg>
    </div>
);

const packages = [
  {
    name: 'Basic',
    price: '0',
    colors: ["#FFFFFF", "#12C841"],
    features: [
      'Przekazanie plików źródłowych strony www',
    ],
    highlight: false,
    popular: false,
  },
  {
    name: 'Bronze',
    price: '99',
    colors: ["url(#grad_bronze_bronze)", "url(#grad_bronze_bronze)"],
    features: [
      'Rejestracja i opłacanie domeny',
      'Zarządzanie domeną',
      'Hosting i certyfikat SSL',
    ],
    highlight: false,
    popular: false,
  },
  {
    name: 'Silver',
    price: '199',
    colors: ["url(#grad_silver_silver)", "url(#grad_silver_silver)"],
    features: [
      'Wszystko z pakietu Bronze',
      'Regularne testowanie strony',
      'Podstawowe dbanie o SEO',
      '1 drobna poprawka/miesiąc',
    ],
    highlight: true,
    popular: true,
  },
  {
    name: 'Gold',
    price: '299',
    colors: ["url(#grad_gold_gold)", "url(#grad_gold_gold)"],
    features: [
      'Wszystko z pakietu Silver',
      '4 zmiany treści / miesiąc (aktualizacja tekstów, wymiana grafik i zdjęć)',
      'Gwarancja obsługi w 24h',
    ],
    highlight: false,
    popular: false,
  },
  {
    name: 'Platinum',
    price: '499+',
    colors: ["#FFFFFF", "url(#grad_platinum_platinum)"],
    features: [
      'Wszystko z pakietu Gold',
      'Indywidualne dostosowanie',
      'Dalszy rozwój strony (np. prowadzenie bloga, zarządzanie treścią)',
      'Priorytetowa obsługa',
    ],
    highlight: false,
    popular: false,
  },
];


const AnimatedContent = ({ selectedTier, onSelect }: { selectedTier: string | null, onSelect: (name: string) => void }) => (
    <div className="max-w-7xl mx-auto">
        <style dangerouslySetInnerHTML={{ __html: `
            @keyframes shine {
                0% { transform: translateX(-100%) translateY(-100%) rotate(45deg); }
                20%, 100% { transform: translateX(200%) translateY(200%) rotate(45deg); }
            }
        `}} />
        <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Wycena indywidualna</h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                Każdy projekt jest inny. Prosta strona wizytówka to koszt od <strong className="text-white">1500 zł netto</strong>, a złożone serwisy z wieloma podstronami mogą sięgać <strong className="text-white">10000 zł netto</strong>. Przeważnie jednak, koszt standardowej strony zamyka się w przedziale <strong className="text-brand-green">3000 - 5000 zł netto</strong>.
            </p>
        </div>
        <div className="text-center mt-24 mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Stała współpraca i utrzymanie</h2>
            <p className="text-lg text-gray-400">Pakiety subskrypcyjne dla Twojego spokoju i ciągłego rozwoju strony.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-6 items-end">
            {packages.map((pkg, index) => {
                const isSelected = selectedTier === pkg.name;
                const showHighlight = isSelected || (selectedTier === null && pkg.highlight);
                
                return (
                    <motion.div
                        key={pkg.name}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className={`card !p-6 xl:!p-8 flex flex-col text-center items-center h-full relative overflow-hidden transition-all duration-500 ${showHighlight ? '!border-brand-green/40 shadow-[0_0_30px_rgba(18,200,65,0.15)]' : ''} ${pkg.name === 'Platinum' && !showHighlight ? 'shadow-[0_0_40px_rgba(255,255,255,0.05)]' : ''} ${pkg.popular ? 'pt-12 xl:pt-14' : ''}`}
                    >
                        {pkg.popular && (
                            <div className="absolute top-0 left-0 w-full bg-brand-green text-anthracite-dark text-[10px] xl:text-xs font-black uppercase tracking-widest py-1.5 px-2">
                                Najczęściej wybierany
                            </div>
                        )}
                        {pkg.name === 'Platinum' && (
                            <div className="absolute inset-0 shadow-[inset_0_0_20px_rgba(255,255,255,0.02)] pointer-events-none" />
                        )}
                        <TierLogo id={pkg.name.toLowerCase()} color1={pkg.colors[0]} color2={pkg.colors[1]} isPlatinum={pkg.name === 'Platinum'} />
                        <h3 className="text-2xl font-bold text-white mb-4">{pkg.name}</h3>
                        <p className="text-4xl font-black text-white mb-1">{pkg.price}</p>
                        <p className="text-gray-500 font-medium mb-6">
                            {pkg.price === '0' ? (
                                <>
                                    zł netto / miesiąc<br />
                                    <span className="text-xs">(brak abonamentu)</span>
                                </>
                            ) : 'zł netto / miesiąc'}
                        </p>
                        <ul className="text-left space-y-3 flex-grow text-sm xl:text-base">
                            {pkg.features.map(feature => (
                                <li key={feature} className="flex items-start">
                                    <Check className="text-brand-green w-5 h-5 mr-3 mt-1 flex-shrink-0" />
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>
                        <button 
                            onClick={() => onSelect(pkg.name)}
                            className={`mt-8 w-full py-3 rounded-lg font-bold transition-all duration-300 ${showHighlight ? 'bg-brand-green text-anthracite-dark hover:bg-brand-green-light shadow-[0_0_20px_rgba(18,200,65,0.3)]' : 'bg-white/5 text-white hover:bg-white/10'}`}
                        >
                            {isSelected ? 'Wybrano' : 'Wybieram'}
                        </button>
                    </motion.div>
                );
            })}
        </div>
    </div>
);

const StaticContent = ({ selectedTier, onSelect }: { selectedTier: string | null, onSelect: (name: string) => void }) => (
     <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Wycena indywidualna</h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                Każdy projekt jest inny. Prosta strona wizytówka to koszt od <strong className="text-white">1500 zł netto</strong>, a złożone serwisy z wieloma podstronami mogą sięgać <strong className="text-white">10000 zł netto</strong>. Przeważnie jednak, koszt standardowej strony zamyka się w przedziale <strong className="text-brand-green">3000 - 5000 zł netto</strong>.
            </p>
        </div>
        <div className="text-center mt-24 mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Stała współpraca i utrzymanie</h2>
            <p className="text-lg text-gray-400">Pakiety subskrypcyjne dla Twojego spokoju i ciągłego rozwoju strony.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-6 items-end">
            {packages.map((pkg) => {
                const isSelected = selectedTier === pkg.name;
                const showHighlight = isSelected || (selectedTier === null && pkg.highlight);

                return (
                    <div 
                        key={pkg.name} 
                        className={`card !p-6 xl:!p-8 flex flex-col text-center items-center h-full relative overflow-hidden transition-all duration-500 ${showHighlight ? '!border-brand-green/40 shadow-[0_0_30px_rgba(18,200,65,0.15)]' : ''} ${pkg.name === 'Platinum' && !showHighlight ? 'shadow-[0_0_40px_rgba(255,255,255,0.05)]' : ''} ${pkg.popular ? 'pt-12 xl:pt-14' : ''}`}
                    >
                        {pkg.popular && (
                            <div className="absolute top-0 left-0 w-full bg-brand-green text-anthracite-dark text-[10px] xl:text-xs font-black uppercase tracking-widest py-1.5 px-2">
                                Najczęściej wybierany
                            </div>
                        )}
                        {pkg.name === 'Platinum' && (
                            <div className="absolute inset-0 shadow-[inset_0_0_20px_rgba(255,255,255,0.02)] pointer-events-none" />
                        )}
                        <TierLogo id={pkg.name.toLowerCase()} color1={pkg.colors[0]} color2={pkg.colors[1]} isPlatinum={pkg.name === 'Platinum'} />
                        <h3 className="text-2xl font-bold text-white mb-4">{pkg.name}</h3>
                        <p className="text-4xl font-black text-white mb-1">{pkg.price}</p>
                        <p className="text-gray-500 font-medium mb-6">
                            {pkg.price === '0' ? (
                                <>
                                    zł netto / miesiąc<br />
                                    <span className="text-xs">(brak abonamentu)</span>
                                </>
                            ) : 'zł netto / miesiąc'}
                        </p>
                        <ul className="text-left space-y-3 flex-grow text-sm xl:text-base">
                            {pkg.features.map(feature => (
                                <li key={feature} className="flex items-start">
                                    <Check className="text-brand-green w-5 h-5 mr-3 mt-1 flex-shrink-0" />
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>
                        <button 
                            onClick={() => onSelect(pkg.name)}
                            className={`mt-8 w-full py-3 rounded-lg font-bold transition-all duration-300 ${showHighlight ? 'bg-brand-green text-anthracite-dark hover:bg-brand-green-light shadow-[0_0_20px_rgba(18,200,65,0.3)]' : 'bg-white/5 text-white hover:bg-white/10'}`}
                        >
                            {isSelected ? 'Wybrano' : 'Wybieram'}
                        </button>
                    </div>
                );
            })}
        </div>
    </div>
);


const Pricing = () => {
  const [isDesktop, setIsDesktop] = useState(false);
  const [selectedTier, setSelectedTier] = useState<string | null>(null);

  useEffect(() => {
    if (window.innerWidth >= 768) {
      setIsDesktop(true);
    }
  }, []);

  const handleSelect = (name: string) => {
    setSelectedTier(name);
    // Dispatch custom event to update the contact form
    window.dispatchEvent(new CustomEvent('tier-selected', { detail: name }));
    const contactSection = document.getElementById('contact');
    if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="pricing" className="bg-anthracite-dark bg-grain section-padding">
      {isDesktop ? (
        <AnimatedContent selectedTier={selectedTier} onSelect={handleSelect} />
      ) : (
        <StaticContent selectedTier={selectedTier} onSelect={handleSelect} />
      )}
    </section>
  );
};

export default Pricing;
