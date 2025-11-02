import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Globe, Cube, Boxes, Shield, Zap } from 'lucide-react';

const services = [
  {
    icon: Smartphone,
    title: 'Mobile Apps',
    desc: 'Native-quality iOS and Android experiences with smooth performance and delightful UX.'
  },
  {
    icon: Globe,
    title: 'Web Applications',
    desc: 'Fast, SEO-friendly, and accessible apps that scale with your audience.'
  },
  {
    icon: Cube,
    title: '3D & AI Models',
    desc: 'Interactive 3D, generative AI workflows, and spatial interfaces for modern products.'
  },
  {
    icon: Boxes,
    title: 'SaaS Platforms',
    desc: 'Subscription-ready, multi-tenant platforms with solid auth, billing, and analytics.'
  },
  {
    icon: Shield,
    title: 'Security & Compliance',
    desc: 'Best practices for auth, data protection, and compliance baked into your product.'
  },
  {
    icon: Zap,
    title: 'Performance Tuning',
    desc: 'From first byte to last frame — we optimize for speed, stability, and joy.'
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { delay: 0.05 * i, duration: 0.5 } })
};

const Services = () => {
  return (
    <section id="services" className="relative w-full bg-gradient-to-b from-black to-zinc-900 py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <h2 className="text-3xl font-bold md:text-4xl">What we do</h2>
            <p className="mt-2 max-w-2xl text-white/70">Strategy, design, and engineering — delivered as one high‑performing team.</p>
          </div>
          <a href="#contact" className="rounded-full border border-white/20 bg-white/5 px-5 py-2 text-sm font-semibold text-white/90 backdrop-blur transition hover:bg-white/10">Get in touch</a>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, idx) => (
            <motion.div
              key={s.title}
              custom={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/60 p-6 transition hover:border-white/20 hover:bg-zinc-900/80"
            >
              <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-indigo-500/10 blur-2xl transition group-hover:bg-indigo-500/20" />
              <div className="relative z-10">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/5">
                  <s.icon className="h-6 w-6 text-indigo-400" />
                </div>
                <h3 className="text-xl font-semibold">{s.title}</h3>
                <p className="mt-2 text-white/70">{s.desc}</p>
                <div className="mt-4 text-sm text-indigo-300 opacity-0 transition group-hover:opacity-100">Learn more →</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
