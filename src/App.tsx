import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen relative">
      {/* Decorative Background Blobs */}
      <div className="glow-blob w-[500px] h-[500px] bg-brand-green top-[-100px] left-[-100px]"></div>
      <div className="glow-blob w-[600px] h-[600px] bg-brand-green/30 bottom-[20%] right-[-200px]"></div>
      <div className="glow-blob w-[400px] h-[400px] bg-white/5 top-[40%] left-[20%]"></div>
      
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
