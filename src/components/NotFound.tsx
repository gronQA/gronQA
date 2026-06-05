import { motion } from 'framer-motion';

const NotFound = () => {
  return (
    <motion.div
      className="text-center"
      initial={{ opacity: 1, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <h1 className="text-8xl md:text-9xl font-black text-brand-green leading-none">404</h1>
      <h2 className="text-3xl md:text-4xl font-bold text-white mt-4 mb-6">Strony nie znaleziono</h2>
      <p className="text-lg text-gray-400 mb-8 max-w-md mx-auto">
        Przepraszamy, ale strona, której szukasz, nie istnieje lub została przeniesiona.
      </p>
      <a href="/" className="btn-primary inline-block">
        Wróć na stronę główną
      </a>
    </motion.div>
  );
};

export default NotFound;
