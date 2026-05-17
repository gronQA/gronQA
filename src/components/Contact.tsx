import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-anthracite text-white bg-grain overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
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
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-brand-green/20 rounded-xl flex items-center justify-center text-brand-green">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <p className="font-bold">gronqa@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-brand-green/20 rounded-xl flex items-center justify-center text-brand-green">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Telefon</p>
                  <p className="font-bold">+48 534 663 361</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-brand-green/20 rounded-xl flex items-center justify-center text-brand-green">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Lokalizacja</p>
                  <p className="font-bold">Zabrze, Polska</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 p-8 md:p-10 rounded-3xl backdrop-blur-sm border border-white/10 shadow-2xl"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Imię</label>
                  <input
                    type="text"
                    className="w-full bg-anthracite/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-green transition-colors"
                    placeholder="Twoje imię"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full bg-anthracite/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-green transition-colors"
                    placeholder="Twój email"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Wiadomość</label>
                <textarea
                  rows={4}
                  className="w-full bg-anthracite/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-green transition-colors"
                  placeholder="Jak możemy Ci pomóc?"
                ></textarea>
              </div>
              <button className="w-full bg-brand-green text-anthracite font-bold py-4 rounded-xl hover:bg-brand-green-light transition-all duration-300 shadow-lg shadow-brand-green/20">
                Wyślij Wiadomość
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
