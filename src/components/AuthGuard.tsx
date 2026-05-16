import { useState, useEffect, type FC, type ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from './Logo';
import { Lock } from 'lucide-react';

interface AuthGuardProps {
  children: ReactNode;
}

const AuthGuard: FC<AuthGuardProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Use simple Base64 for very basic "visual" obfuscation in source code
  // gronek -> Z3JvbmVr, ziomek -> emlvbWVr
  const VALID_LOGIN_B64 = 'Z3JvbmVr';
  const VALID_PASS_B64 = 'emlvbWVr';

  useEffect(() => {
    const sessionAuth = sessionStorage.getItem('gronqa_auth');
    if (sessionAuth === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (btoa(login) === VALID_LOGIN_B64 && btoa(password) === VALID_PASS_B64) {
      setIsAuthenticated(true);
      sessionStorage.setItem('gronqa_auth', 'true');
      setError('');
    } else {
      setError('Nieprawidłowe dane logowania');
      setPassword('');
    }
  };

  if (isAuthenticated) {
    return <>{children}</>;
  }

  return (
    <div className="fixed inset-0 z-[10000] bg-anthracite flex items-center justify-center bg-grain">
      {/* Background Decor */}
      <div className="glow-blob w-[400px] h-[400px] bg-brand-green/20 top-[-100px] left-[-100px]"></div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md px-6"
      >
        <div className="bg-anthracite-dark/60 backdrop-blur-xl p-10 rounded-[40px] border border-white/5 shadow-2xl text-center relative overflow-hidden">
          <div className="mb-10 flex justify-center">
            <Logo className="h-10 w-auto" />
          </div>
          
          <div className="flex items-center justify-center gap-2 mb-8 text-brand-green">
            <Lock size={18} />
            <span className="text-sm font-bold uppercase tracking-widest">Dostęp Autoryzowany</span>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <input
                type="text"
                value={login}
                onChange={(e) => setLogin(e.target.value)}
                placeholder="Użytkownik"
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-brand-green/50 transition-colors text-center"
                required
              />
            </div>
            <div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Hasło"
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-brand-green/50 transition-colors text-center"
                required
              />
            </div>
            
            <AnimatePresence>
              {error && (
                <motion.p 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="text-red-400 text-sm font-medium"
                >
                  {error}
                </motion.p>
              )}
            </AnimatePresence>

            <button 
              type="submit"
              className="btn-primary w-full py-4 mt-4"
            >
              Wejdź na stronę
            </button>
          </form>
          
          <p className="mt-8 text-xs text-gray-500 uppercase tracking-tighter">
            © {new Date().getFullYear()} gronQA Private Access
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default AuthGuard;
