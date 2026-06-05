import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
  const [state, handleSubmit] = useForm("mrevbrqw");
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    tier: 'Wykonanie strony www'
  });

  useEffect(() => {
    const handleTierSelect = (e: Event) => {
        const customEvent = e as CustomEvent<string>;
        const tierName = customEvent.detail === 'Basic' ? 'Wykonanie strony www' : `Wykonanie strony www + Pakiet ${customEvent.detail}`;
        setFormData(prev => ({ ...prev, tier: tierName }));
    };
    window.addEventListener('tier-selected', handleTierSelect);
    return () => window.removeEventListener('tier-selected', handleTierSelect);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  if (state.succeeded) {
    return (
      <section id="contact" className="section-padding bg-anthracite text-white bg-grain overflow-hidden">
        <div className="max-w-7xl mx-auto flex justify-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white/5 p-12 rounded-3xl border border-brand-green/30 shadow-2xl text-center max-w-xl w-full"
          >
            <div className="w-20 h-20 bg-brand-green/20 rounded-full flex items-center justify-center text-brand-green mx-auto mb-8">
              <CheckCircle2 size={48} />
            </div>
            <h3 className="text-3xl font-bold mb-4">Wiadomość wysłana!</h3>
            <p className="text-gray-400 text-lg mb-8">
              Dziękuję za kontakt. Odpowiem na Twoje zapytanie w ciągu 24 godzin.
            </p>
            <button 
              onClick={() => window.location.reload()}
              className="btn-primary"
            >
              Wyślij kolejną wiadomość
            </button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="section-padding bg-anthracite text-white bg-grain overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 1, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-brand-green font-bold uppercase tracking-wider mb-4">Kontakt</h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              Porozmawiajmy o <span className="text-brand-green">Twoim Projekcie</span>
            </h3>
            <p className="text-gray-400 text-lg mb-10 leading-relaxed text-left">
              Masz pytania? Chcesz otrzymać niezobowiązującą wycenę?<br />
              Napisz do mnie lub zadzwoń. Odpowiem w ciągu 24h.
            </p>

            <div className="space-y-6">
              <a href="mailto:kontakt@gronka.pl" className="flex items-center gap-4 group/link w-fit">
                <div className="w-12 h-12 bg-brand-green/20 rounded-xl flex items-center justify-center text-brand-green group-hover/link:bg-brand-green group-hover/link:text-anthracite transition-all duration-300">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <p className="font-bold group-hover/link:text-brand-green transition-colors">kontakt@gronka.pl</p>
                </div>
              </a>
              <a href="tel:+48534663361" className="flex items-center gap-4 group/link w-fit">
                <div className="w-12 h-12 bg-brand-green/20 rounded-xl flex items-center justify-center text-brand-green group-hover/link:bg-brand-green group-hover/link:text-anthracite transition-all duration-300">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Telefon</p>
                  <p className="font-bold group-hover/link:text-brand-green transition-colors">+48 534 663 361</p>
                </div>
              </a>
              <div className="flex items-center gap-4 group/link w-fit">
                <div className="w-12 h-12 bg-brand-green/20 rounded-xl flex items-center justify-center text-brand-green transition-all duration-300">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Lokalizacja</p>
                  <p className="font-bold">Zdalnie (cała Polska)</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 1, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/10 md:bg-white/5 p-8 md:p-10 rounded-3xl md:backdrop-blur-sm border border-white/10 shadow-2xl"
          >
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Imię / Firma</label>
                  <input
                    required
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full bg-anthracite/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-green transition-colors"
                    placeholder="Twoje imię"
                  />
                  <ValidationError prefix="Name" field="name" errors={state.errors} />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Adres Email</label>
                  <input
                    required
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full bg-anthracite/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-green transition-colors"
                    placeholder="kontakt@twoja-firma.pl"
                  />
                  <ValidationError prefix="Email" field="email" errors={state.errors} />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-400 mb-2">Numer Telefonu</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full bg-anthracite/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-green transition-colors"
                    placeholder="+48 000 000 000"
                  />
                  <ValidationError prefix="Phone" field="phone" errors={state.errors} />
                </div>
                <div>
                  <label htmlFor="tier" className="block text-sm font-medium text-gray-400 mb-2">Preferowana współpraca</label>
                  <select
                    id="tier"
                    name="tier"
                    value={formData.tier}
                    onChange={handleInputChange}
                    className="w-full bg-anthracite/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-green transition-colors"
                  >
                    <option value="Wykonanie strony www">Wykonanie strony www</option>
                    <option value="Wykonanie strony www + Pakiet Bronze">Wykonanie strony www + Pakiet Bronze</option>
                    <option value="Wykonanie strony www + Pakiet Silver">Wykonanie strony www + Pakiet Silver</option>
                    <option value="Wykonanie strony www + Pakiet Gold">Wykonanie strony www + Pakiet Gold</option>
                    <option value="Wykonanie strony www + Pakiet Platinum">Wykonanie strony www + Pakiet Platinum</option>
                  </select>
                  <ValidationError prefix="Model" field="tier" errors={state.errors} />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Wiadomość</label>
                <textarea
                  required
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full bg-anthracite/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-green transition-colors resize-none"
                  placeholder="W czym mogę Ci pomóc? Opisz krótko swój projekt."
                ></textarea>
                <ValidationError prefix="Message" field="message" errors={state.errors} />
              </div>

              <button 
                type="submit"
                disabled={state.submitting}
                className="w-full bg-brand-green text-anthracite font-bold py-4 rounded-xl hover:bg-brand-green-light transition-all duration-300 shadow-lg shadow-brand-green/20 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {state.submitting ? 'Wysyłanie...' : 'Wyślij Wiadomość'}
                <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
