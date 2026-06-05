import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { Check, ChevronDown, ChevronUp } from 'lucide-react';

const TierLogo = ({ id, color1, color2, isPlatinum }: { id: string, color1: string, color2: string, isPlatinum?: boolean }) => (
    <div className="w-full h-16 mb-6 flex items-center justify-center relative">
        <svg viewBox="0 0 600 160.17" className="h-full w-auto relative z-10">
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
            <text
                className="logo-text"
                textAnchor="middle"
                style={{ 
                    fill: isPlatinum ? "url(#grad_platinum_shimmer)" : color1,
                    fontFamily: 'Roboto Condensed, sans-serif',
                    fontSize: '124px',
                    letterSpacing: '-7px',
                    fontWeight: 400
                }}
                x="50%"
                y="133.4749"
            >&lt;{id}<tspan fill={id === 'basic' ? "#12C841" : (isPlatinum ? "url(#grad_platinum_shimmer)" : color1)}>/</tspan>&gt;</text>
        </svg>
    </div>
);

const packages = [
  {
    name: 'Basic',
    price: '0',
    colors: ["#FFFFFF", "#12C841"],
    features: [
      'Jednorazowe stworzenie strony',
      'Przekazanie wszystkich plików źródłowych',
      'Samodzielny wybór hostingu i domeny',
      'Brak późniejszej opieki i aktualizacji',
    ],
    highlight: false,
    popular: false,
  },
  {
    name: 'Bronze',
    price: '49',
    colors: ["url(#grad_bronze_bronze)", "url(#grad_bronze_bronze)"],
    features: [
      'Rejestracja i opłacanie domeny',
      'Zarządzanie domeną',
      'Hosting i certyfikat SSL',
      'Bieżąca opieka nad stroną',
    ],
    highlight: false,
    popular: false,
  },
  {
    name: 'Silver',
    price: '99',
    colors: ["url(#grad_silver_silver)", "url(#grad_silver_silver)"],
    features: [
      'Wszystko z pakietu Bronze',
      'Podstawowe dbanie o SEO',
      '1 zmiana treści / miesiąc (np. aktualizacja tekstów, podmiana grafik lub zdjęć)',
    ],
    highlight: true,
    popular: true,
  },
  {
    name: 'Gold',
    price: '199',
    colors: ["url(#grad_gold_gold)", "url(#grad_gold_gold)"],
    features: [
      'Wszystko z pakietu Silver',
      '3 dodatkowe zmiany treści / miesiąc (łącznie 4)',
      'Gwarancja obsługi zgłoszeń w 24h',
      'Email na własnej domenie (np. kontakt@twoja-domena.pl)',
    ],
    highlight: false,
    popular: false,
  },
  {
    name: 'Platinum',
    price: '?',
    colors: ["#FFFFFF", "url(#grad_platinum_platinum)"],
    features: [
      'Wszystko z pakietu Gold',
      'Indywidualne dostosowanie pod Twoje potrzeby',
      'Dalszy rozwój strony (np. prowadzenie bloga, zarządzanie treścią)',
      'Priorytetowa obsługa',
    ],
    highlight: false,
    popular: false,
  },
];

export const IndividualPricing = () => {
    return (
        <section id="individual-pricing" className="section-padding bg-anthracite bg-grain">
            <div className="max-w-7xl mx-auto">
                <div className="text-left mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Wycena indywidualna</h2>
                    <div className="text-lg text-gray-400 max-w-4xl space-y-6">
                        <p className="text-left">
                            Każdy projekt jest inny. Prosta strona wizytówka to koszt od <strong className="text-white">1500 zł netto</strong>, a złożone serwisy z wieloma podstronami mogą sięgać <strong className="text-white">10000 zł netto</strong>. Przeważnie jednak, koszt standardowej strony zamyka się w przedziale <strong className="text-brand-green">2000 - 4000 zł netto</strong>.
                        </p>
                        <p className="text-left">
                            Za stworzenie strony pobieram <strong className="text-white">jednorazową opłatę</strong>. Po jej wdrożeniu masz pełną dowolność: możemy kontynuować współpracę w ramach jednego z <strong className="text-white">pakietów wsparcia</strong> (opieka, hosting, aktualizacje), lub mogę po prostu <strong className="text-white">przekazać Ci kompletny kod źródłowy</strong> strony do samodzielnego zarządzania.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export const SubscriptionPricing = () => {
    const [isDesktop, setIsDesktop] = useState(false);
    const [selectedTier, setSelectedTier] = useState<string | null>(null);
    const [isExpanded, setIsExpanded] = useState(false);

    useEffect(() => {
        if (window.innerWidth >= 768) {
            setIsDesktop(true);
        }
    }, []);

    const handleSelect = (name: string) => {
        setSelectedTier(name);
        window.dispatchEvent(new CustomEvent('tier-selected', { detail: name }));
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="pricing" className="section-padding bg-anthracite-dark bg-grain">
            <div className="max-w-7xl mx-auto">
                <div className="text-left mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Stała współpraca i utrzymanie</h2>
                    <p className="text-lg text-gray-400">Pakiety wsparcia dla Twojego spokoju i ciągłego rozwoju strony.</p>
                    
                    <button 
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="mt-8 btn-primary flex items-center gap-2 group cursor-pointer"
                    >
                        {isExpanded ? 'Ukryj Pakiety Wsparcia' : 'Odkryj Pakiety Wsparcia'}
                        {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </button>
                </div>

                <AnimatePresence>
                    {isExpanded && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                            className="overflow-hidden"
                        >
                            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-6 items-stretch pt-12">
                                {packages.map((pkg, index) => {
                                    const isSelected = selectedTier === pkg.name;
                                    const showHighlight = isSelected || (selectedTier === null && pkg.highlight);
                                    const isPriceNumeric = !isNaN(Number(pkg.price));
                                    
                                    const content = (
                                        <div className={`card !p-6 xl:!p-8 flex flex-col text-center items-center h-full relative overflow-hidden transition-all duration-500 ${showHighlight ? '!border-brand-green/40 shadow-[0_0_30px_rgba(18,200,65,0.15)]' : ''} ${pkg.name === 'Platinum' && !showHighlight ? 'border-white/20 shadow-[0_0_40px_rgba(255,255,255,0.05)]' : ''} ${pkg.popular ? 'pt-12 xl:pt-14' : ''}`}>
                                            {pkg.popular && (
                                                <div className="absolute top-0 left-0 w-full bg-brand-green text-anthracite-dark text-[10px] xl:text-xs font-black uppercase tracking-widest py-1.5 px-2">
                                                    Najczęściej wybierany
                                                </div>
                                            )}
                                            <TierLogo id={pkg.name.toLowerCase()} color1={pkg.colors[0]} color2={pkg.colors[1]} isPlatinum={pkg.name === 'Platinum'} />
                                            <p className={`font-black text-white mb-1 ${isPriceNumeric ? 'text-4xl' : 'text-xl'}`}>{pkg.price}</p>
                                            <div className="text-gray-500 font-medium mb-6 min-h-[40px] flex flex-col justify-center">
                                                {pkg.name === 'Basic' ? (
                                                    <>
                                                        <p>zł netto / miesiąc</p>
                                                        <p className="text-[10px] leading-tight mt-1">(brak abonamentu - występuje jedynie pojedyncza opłata za wykonanie strony)</p>
                                                    </>
                                                ) : (pkg.name === 'Platinum' ? (
                                                    <p className="text-base leading-tight">cena do ustalenia indywidualnie</p>
                                                ) : (isPriceNumeric ? <p>zł netto / miesiąc</p> : ''))}
                                            </div>
                                            <ul className="text-left space-y-3 flex-grow text-sm xl:text-base">
                                                {pkg.features.map(feature => (
                                                    <li key={feature} className="flex items-start">
                                                        <Check className="text-brand-green w-5 h-5 mr-3 mt-1 flex-shrink-0" />
                                                        <span>{feature}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                            <button 
                                                onClick={() => handleSelect(pkg.name)}
                                                className={`mt-8 w-full py-3 rounded-lg font-bold transition-all duration-300 ${showHighlight ? 'bg-brand-green text-anthracite-dark hover:bg-brand-green-light shadow-[0_0_20px_rgba(18,200,65,0.3)]' : 'bg-white/5 text-white hover:bg-white/10'}`}
                                            >
                                                {isSelected ? 'Wybrano' : 'Wybieram'}
                                            </button>
                                        </div>
                                    );

                                    return isDesktop ? (
                                        <motion.div
                                            key={pkg.name}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.5, delay: index * 0.1 }}
                                            className="h-full"
                                        >
                                            {content}
                                        </motion.div>
                                    ) : (
                                        <div key={pkg.name} className="h-full">{content}</div>
                                    );
                                })}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};
