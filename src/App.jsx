import React from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import Process from './components/Process';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen bg-black font-inter text-white">
      {/* Simple sticky header */}
      <header className="fixed inset-x-0 top-0 z-50 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#" className="flex items-center gap-2 text-white">
            <div className="h-6 w-6 rounded-md bg-gradient-to-tr from-indigo-500 to-pink-500" />
            <span className="text-lg font-semibold">Hexagone</span>
          </a>
          <nav className="hidden items-center gap-6 text-sm text-white/80 md:flex">
            <a href="#services" className="transition hover:text-white">Services</a>
            <a href="#process" className="transition hover:text-white">Process</a>
            <a href="#contact" className="rounded-full border border-white/20 bg-white/5 px-4 py-2 transition hover:bg-white/10">Contact</a>
          </nav>
        </div>
      </header>

      <main className="relative">
        <Hero />
        <div id="process">
          <Services />
          <Process />
        </div>
        <CTA />
      </main>

      <footer className="border-t border-white/10 bg-black/60 py-8 text-center text-white/60">
        <div className="mx-auto max-w-7xl px-6">
          <p>© {new Date().getFullYear()} Hexagone — All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
