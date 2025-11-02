import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Workflow, Code, Rocket } from 'lucide-react';

const steps = [
  {
    icon: Lightbulb,
    title: 'Discover',
    desc: 'We map your goals, users, and constraints to shape a focused plan.'
  },
  {
    icon: Workflow,
    title: 'Design',
    desc: 'Rapid prototyping with motion and 3D to validate the experience early.'
  },
  {
    icon: Code,
    title: 'Build',
    desc: 'Full‑stack implementation with clean code, testing, and observability.'
  },
  {
    icon: Rocket,
    title: 'Launch & Grow',
    desc: 'Ship confidently and iterate with analytics, experiments, and AI insights.'
  }
];

const Process = () => {
  return (
    <section className="relative w-full bg-zinc-950 py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">How we deliver</h2>
          <p className="mx-auto mt-2 max-w-2xl text-white/70">A clear path from idea to impact — collaborative, transparent, and fast.</p>
        </div>

        <ol className="relative mx-auto grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-2">
          {steps.map((s, i) => (
            <motion.li
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="relative rounded-2xl border border-white/10 bg-gradient-to-b from-zinc-900/60 to-zinc-900/30 p-6"
            >
              <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500/10">
                <s.icon className="h-6 w-6 text-indigo-400" />
              </div>
              <h3 className="text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-white/70">{s.desc}</p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Process;
