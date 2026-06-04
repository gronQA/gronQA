import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState, useEffect } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    message: '',
    tier: 'Pakiet Silver'
  });

  useEffect(() => {
    const handleTierSelect = (e: Event) => {
        const customEvent = e as CustomEvent<string>;
        setFormData(prev => ({ ...prev, tier: `Pakiet ${customEvent.detail}` }));
    };
    window.addEventListener('tier-selected', handleTierSelect);
    return () => window.removeEventListener('tier-selected', handleTierSelect);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const subject = encodeURIComponent(`Nowa wiadomość od ${formData.name} (<gronka/>)`);
    const body = encodeURIComponent(
      `Imię: ${formData.name}\n` +
      `Wybrany model: ${formData.tier}\n\n` +
      `Wiadomość:\n${formData.message}`
    );
    
    window.location.href = `mailto:kontakt@gronka.pl?subject=${subject}&body=${body}`;
  };

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
            <p className="text-gray-400 text-lg mb-10 leading-relaxed">
              Masz pytania? Chcesz otrzymać niezobowiązującą wycenę? Napisz do mnie lub zadzwoń. Odpowiem w ciągu 24h.
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
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 1, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/10 md:bg-white/5 p-8 md:p-10 rounded-3xl md:backdrop-blur-sm border border-white/10 shadow-2xl"
          >
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Imię / Firma</label>
                <input
                  required
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full bg-anthracite/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-green transition-colors"
                  placeholder="Jak się nazywasz?"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Preferowany model współpracy</label>
                <select
                  name="tier"
                  value={formData.tier}
                  onChange={handleInputChange}
                  className="w-full bg-anthracite/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-green transition-colors"
                >
                  <option value="Pakiet Basic">Pakiet Basic</option>
                  <option value="Pakiet Bronze">Pakiet Bronze</option>
                  <option value="Pakiet Silver">Pakiet Silver</option>
                  <option value="Pakiet Gold">Pakiet Gold</option>
                  <option value="Pakiet Platinum">Pakiet Platinum</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Wiadomość</label>
                <textarea
                  required
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full bg-anthracite/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-green transition-colors resize-none"
                  placeholder="W czym mogę Ci pomóc? Opisz krótko swój projekt."
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-brand-green text-anthracite font-bold py-4 rounded-xl hover:bg-brand-green-light transition-all duration-300 shadow-lg shadow-brand-green/20 flex items-center justify-center gap-2"
              >
                Wyślij Wiadomość
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
