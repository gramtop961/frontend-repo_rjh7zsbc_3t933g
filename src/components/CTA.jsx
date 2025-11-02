import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Calendar, ArrowRight } from 'lucide-react';

const CTA = () => {
  return (
    <section id="contact" className="relative w-full bg-gradient-to-b from-zinc-950 to-black py-24 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-zinc-900/60 p-8 md:p-12">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center"
          >
            <div>
              <h3 className="text-3xl font-bold md:text-4xl">Build with Hexagone</h3>
              <p className="mt-3 max-w-2xl text-white/70">Tell us about your idea — we’ll turn it into a product people love. Short timelines, measurable outcomes.</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="mailto:hello@hexagone.studio?subject=Project%20Inquiry"
                className="inline-flex items-center gap-2 rounded-full bg-indigo-500 px-6 py-3 font-semibold text-white shadow-lg shadow-indigo-500/30 transition hover:bg-indigo-400"
              >
                <Mail className="h-5 w-5" />
                hello@hexagone.studio
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 font-semibold text-white/90 backdrop-blur transition hover:bg-white/10"
              >
                <Calendar className="h-5 w-5" />
                Book a call
                <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
