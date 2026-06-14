import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { Check, ChevronDown, ChevronUp } from 'lucide-react';

const TierLogo = ({ id, color1, color2, isPlatinum }: { id: string, color1: string, color2: string, isPlatinum?: boolean }) => (
    <div className="w-full h-10 md:h-16 mb-2 md:mb-6 flex items-center justify-center relative">
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
    name: 'Bronze',
    price: '99',
    colors: ["url(#grad_bronze_bronze)", "url(#grad_bronze_bronze)"],
    features: [
      'Rejestracja i opłacanie domeny',
      'Hosting i certyfikat SSL',
      'Naprawianie usterek',
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
      'Podstawowe dbanie o SEO',
      '1 zmiana treści / miesiąc (np. aktualizacja tekstów, podmiana grafik lub zdjęć)',
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
      'Bezpośredni kontakt na wybranym komunikatorze (np. WhatsApp)',
      '2 kolejne zmiany treści / miesiąc (łącznie 3)',
      'Gwarancja obsługi zgłoszeń w 24h',
    ],
    highlight: false,
    popular: false,
  },
  {
    name: 'Platinum',
    price: '-',
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
    const [isCycleExpanded, setIsCycleExpanded] = useState(false);

    return (
        <section id="individual-pricing" className="section-padding bg-anthracite-dark bg-grain">
            <div className="max-w-7xl mx-auto text-center">
                <div className="flex flex-col gap-8 md:gap-12 items-center">
                <div className="max-w-4xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-brand-green font-bold uppercase tracking-wider mb-2 text-xs md:text-sm"
                    >
                        Indywidualna Wycena
                    </motion.h2>
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-2xl md:text-5xl font-bold text-white mb-4 md:mb-6"
                    >
                        Każdy projekt jest <span className="text-brand-green">wyjątkowy</span>
                    </motion.h3>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-sm md:text-lg text-gray-400 space-y-4 md:space-y-6"
                    >
                        <p>
                            Każdy projekt jest inny. Prosta strona wizytówka to koszt od <strong className="text-white">1000 zł netto</strong>, a złożone serwisy z wieloma podstronami mogą sięgać <strong className="text-white">10000 zł netto</strong>. Przeważnie jednak, koszt standardowej strony zamyka się w przedziale <strong className="text-brand-green">2000 - 4000 zł netto</strong>.
                        </p>
                        <p className="hidden md:block">
                            Za stworzenie strony pobieram <strong className="text-white">jednorazową opłatę</strong>. Po jej wdrożeniu masz pełną dowolność: możemy kontynuować współpracę w ramach jednego z <strong className="text-white">pakietów wsparcia</strong> (opieka, hosting, aktualizacje), lub mogę po prostu <strong className="text-white">przekazać Ci kompletny kod źródłowy</strong> strony do samodzielnego zarządzania.
                        </p>
                    </motion.div>

                    <motion.button 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        onClick={() => setIsCycleExpanded(!isCycleExpanded)}
                        className="mt-8 btn-primary !px-6 md:!px-10 flex items-center gap-2 group cursor-pointer text-xs md:text-sm mx-auto"
                    >
                        {isCycleExpanded ? 'Ukryj cykl współpracy' : 'Pokaż cykl współpracy'}
                        {isCycleExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </motion.button>
                </div>

                    <AnimatePresence>
                        {isCycleExpanded && (
                            <motion.div 
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.5, ease: "easeInOut" }}
                                className="w-full flex justify-center overflow-hidden"
                            >
                                <div className="pt-8">
                                    <motion.img 
                                        src="/cykl.png" 
                                        alt="Cykl współpracy" 
                                        className="block md:hidden w-full max-w-lg rounded-xl shadow-2xl transition-transform duration-500"
                                    />
                                    <motion.img 
                                        src="/cykl_desktop.png" 
                                        alt="Cykl współpracy" 
                                        className="hidden md:block w-full rounded-2xl shadow-2xl transition-transform duration-500 hover:scale-[1.02]"
                                    />
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export const SubscriptionPricing = () => {
    const [isDesktop, setIsDesktop] = useState(false);
    const [selectedTier, setSelectedTier] = useState<string | null>(null);
    const [isExpanded, setIsExpanded] = useState(false);
    const carouselRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (window.innerWidth >= 768) {
            setIsDesktop(true);
        }
    }, []);

    useEffect(() => {
        if (!isDesktop && isExpanded && carouselRef.current) {
            const container = carouselRef.current;
            const silverCard = container.children[1] as HTMLElement;
            if (silverCard) {
                const scrollPos = silverCard.offsetLeft - (window.innerWidth - silverCard.offsetWidth) / 2;
                container.scrollTo({ left: scrollPos, behavior: 'auto' });
            }
        }
    }, [isExpanded, isDesktop]);

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
            <div className="max-w-7xl mx-auto text-center">
                <div className="mb-8 md:mb-12 flex flex-col items-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-brand-green font-bold uppercase tracking-wider mb-2 text-xs md:text-sm"
                    >
                        Pakiety Wsparcia
                    </motion.h2>
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-2xl md:text-5xl font-bold text-white mb-4"
                    >
                        Stała <span className="text-brand-green">Współpraca</span> i Utrzymanie
                    </motion.h3>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-sm md:text-lg text-gray-400 max-w-3xl space-y-4 px-4"
                    >
                        <p>
                            Po zakończeniu projektu otrzymujesz <strong className="text-white">kompletną, gotową do działania stronę</strong> wraz z wszystkimi plikami źródłowymi. To Ty decydujesz, co dalej. Możesz samodzielnie zarządzać hostingiem i domeną lub <strong className="text-brand-green">przekazać te formalności w moje ręce</strong>.
                        </p>
                        <p>
                            Poniższe pakiety wsparcia to opcjonalne rozszerzenie naszej współpracy. Dzięki nim nie musisz martwić się o <strong className="text-white">odnawianie domeny, bezpieczeństwo serwera czy drobne zmiany w treściach</strong> – ja zajmuję się techniką, a Ty skupiasz się na swoim biznesie.
                        </p>
                    </motion.div>
                    
                    <motion.button 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="mt-6 md:mt-8 btn-primary !px-6 md:!px-10 flex items-center gap-2 group cursor-pointer text-xs md:text-sm"
                    >
                        {isExpanded ? 'Ukryj Pakiety Wsparcia' : 'Pokaż pakiety wsparcia'}
                        {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </motion.button>
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
                            <div 
                                ref={carouselRef}
                                className="flex items-stretch overflow-x-auto pb-8 md:pb-0 md:grid md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 pt-8 md:pt-12 no-scrollbar snap-x snap-mandatory px-4 md:px-0 scroll-smooth"
                            >
                                {packages.map((pkg, index) => {
                                    const isSelected = selectedTier === pkg.name;
                                    const showHighlight = isSelected || (selectedTier === null && pkg.highlight);
                                    const isPriceNumeric = !isNaN(Number(pkg.price));
                                    
                                    const card = (
                                        <div className={`card !p-4 md:!p-8 flex flex-col text-center items-center h-full w-full relative overflow-hidden transition-all duration-500 ${showHighlight ? '!border-brand-green/40 shadow-[0_0_30px_rgba(18,200,65,0.15)]' : ''} ${pkg.name === 'Platinum' && !showHighlight ? 'border-white/20 shadow-[0_0_40px_rgba(255,255,255,0.05)]' : ''} ${pkg.popular ? 'pt-10 md:pt-14' : ''}`}>
                                            {pkg.popular && (
                                                <div className="absolute top-0 left-0 w-full bg-brand-green text-anthracite-dark text-[8px] md:text-xs font-black uppercase tracking-widest py-1 md:py-1.5 px-2">
                                                    Popularny
                                                </div>
                                            )}
                                            <TierLogo id={pkg.name.toLowerCase()} color1={pkg.colors[0]} color2={pkg.colors[1]} isPlatinum={pkg.name === 'Platinum'} />
                                            <p className={`font-black text-white mb-0.5 ${isPriceNumeric || pkg.name === 'Platinum' ? 'text-2xl md:text-4xl' : 'text-lg'}`}>{pkg.price}</p>
                                            <div className="text-gray-500 font-medium mb-3 md:mb-6 min-h-[24px] md:min-h-[40px] flex flex-col justify-center text-[10px] md:text-sm">
                                                {pkg.name === 'Platinum' ? (
                                                    <p className="leading-tight">indywidualnie</p>
                                                ) : (isPriceNumeric ? <p>zł netto / msc</p> : '')}
                                            </div>
                                            <ul className="text-left space-y-1.5 md:space-y-3 flex-grow text-[10px] md:text-base">
                                                {pkg.features.map(feature => (
                                                    <li key={feature} className="flex items-start">
                                                        <Check className="text-brand-green w-3 h-3 md:w-5 md:h-5 mr-1.5 md:mr-3 mt-0.5 flex-shrink-0" />
                                                        <span className="leading-tight">{feature}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                            <button 
                                                onClick={() => handleSelect(pkg.name)}
                                                className={`mt-4 md:mt-8 w-full py-2 md:py-3 rounded-lg font-bold text-[10px] md:text-base transition-all duration-300 ${showHighlight ? 'bg-brand-green text-anthracite-dark hover:bg-brand-green-light shadow-[0_0_20px_rgba(18,200,65,0.3)]' : 'bg-white/5 text-white hover:bg-white/10'}`}
                                            >
                                                {isSelected ? 'Wybrano' : 'Wybieram'}
                                            </button>
                                        </div>
                                    );

                                    return (
                                        <div 
                                            key={pkg.name} 
                                            className="min-w-[45vw] md:min-w-0 flex snap-center"
                                        >
                                            {isDesktop ? (
                                                <motion.div
                                                    initial={{ opacity: 0, y: 20 }}
                                                    whileInView={{ opacity: 1, y: 0 }}
                                                    viewport={{ once: true }}
                                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                                    className="w-full flex"
                                                >
                                                    {card}
                                                </motion.div>
                                            ) : (
                                                <div className="w-full flex">
                                                    {card}
                                                </div>
                                            )}
                                        </div>
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
