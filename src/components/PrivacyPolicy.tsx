import { motion } from 'framer-motion';
import { Shield, ArrowLeft } from 'lucide-react';
const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-anthracite text-white bg-grain pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <a 
          href="/"
          className="flex items-center gap-2 text-brand-green hover:text-brand-green-light mb-12 transition-colors group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          Powrót do strony głównej
        </a>

        <motion.div
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="flex items-center gap-4 mb-8">
            <Shield className="text-brand-green" size={40} />
            <h1 className="text-4xl md:text-5xl font-black">Polityka Prywatności</h1>
          </div>

          <div className="prose prose-invert max-w-none space-y-8 text-gray-300">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">1. Informacje ogólne</h2>
              <p>
                Właścicielem serwisu oraz Administratorem danych osobowych jest <strong>gronQA Michał Gronka</strong> z siedzibą w Zabrzu (41-800), ul. Powstańców Śląskich 4a/15, NIP: 6263050441.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">2. Jakie dane zbieramy?</h2>
              <p>
                Serwis zbiera informacje podane dobrowolnie przez użytkownika w formularzu kontaktowym (Imię / Nazwa firmy, preferowany model współpracy oraz treść wiadomości). Dane te są niezbędne do udzielenia odpowiedzi na zapytanie.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">3. Cel przetwarzania danych</h2>
              <p>
                Dane osobowe są przetwarzane wyłącznie w celu obsługi zapytania przesłanego przez formularz kontaktowy oraz nawiązania kontaktu biznesowego. Twoje dane nie są wykorzystywane do celów marketingowych ani udostępniane podmiotom trzecim bez Twojej wyraźnej zgody.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">4. Pliki Cookies</h2>
              <p>
                Serwis korzysta z plików cookies w celu zapewnienia prawidłowego działania strony oraz analizy ruchu. Możesz w każdej chwili zmienić ustawienia cookies w swojej przeglądarce.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">5. Twoje prawa</h2>
              <p>
                Masz prawo do wglądu w swoje dane, ich poprawiania, żądania ograniczenia przetwarzania lub całkowitego usunięcia Twoich danych z naszej bazy. W tym celu skontaktuj się z nami pod adresem: <strong>kontakt@gronka.pl</strong>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">6. Zmiany w polityce prywatności</h2>
              <p>
                Zastrzegamy sobie prawo do wprowadzania zmian w niniejszej Polityce Prywatności. Aktualna wersja będzie zawsze dostępna na tej stronie.
              </p>
            </section>
          </div>

          <p className="mt-20 text-sm text-gray-500 uppercase tracking-widest">
            Ostatnia aktualizacja: {new Date().toLocaleDateString('pl-PL')}
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;

