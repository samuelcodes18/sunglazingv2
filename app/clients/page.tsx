'use client';

import React from 'react';
import Link from 'next/link';
import { Users, Building, MapPin, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { projects } from '@/lib/data/projects';

const EASE_OUT: [number, number, number, number] = [0.16, 1, 0.3, 1];

// Unique clients with their project count and sectors
const clientsMap = new Map<string, { count: number; sectors: Set<string>; projects: string[] }>();
projects.forEach((p) => {
  if (!p.client) return;
  const existing = clientsMap.get(p.client);
  if (existing) {
    existing.count++;
    existing.sectors.add(p.sector);
    existing.projects.push(p.name);
  } else {
    clientsMap.set(p.client, {
      count: 1,
      sectors: new Set([p.sector]),
      projects: [p.name],
    });
  }
});

const clients = Array.from(clientsMap.entries())
  .map(([name, data]) => ({
    name,
    count: data.count,
    sectors: Array.from(data.sectors),
    projects: data.projects,
  }))
  .sort((a, b) => b.count - a.count);

const sectorColors: Record<string, string> = {
  Commercial: 'bg-blue-50 text-[#2563EB] border-blue-200',
  Hospitality: 'bg-amber-50 text-amber-600 border-amber-200',
  Infrastructure: 'bg-emerald-50 text-emerald-600 border-emerald-200',
  Residential: 'bg-purple-50 text-purple-600 border-purple-200',
};

export default function Clients() {
  return (
    <div className="relative w-full overflow-hidden min-h-screen mullion-grid pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pt-10">
      
      {/* Hero Image */}
      <section className="mt-10 mb-20 rounded-3xl overflow-hidden border border-[#E2E8F0] bg-slate-100 relative">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://www.sunglazing.com/wp-content/uploads/2024/10/clients.jpg"
          alt="Sun Glazing Clients"
          className="w-full h-64 sm:h-80 lg:h-96 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/70 via-[#0F172A]/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/15 border border-white/20 text-white text-xs font-semibold uppercase tracking-wider backdrop-blur-sm mb-4"
          >
            <Users className="w-3.5 h-3.5" />
            <span>Our Clients</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-extrabold text-white font-display tracking-tight leading-tight"
          >
            Our Clients
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/80 text-sm sm:text-base mt-3 max-w-xl"
          >
            Trusted by leading developers, corporations, and hospitality brands across South India.
          </motion.p>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="mb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: EASE_OUT }}
          className="glass-surface rounded-2xl grid grid-cols-2 md:grid-cols-4 divide-x divide-[#E2E8F0]"
        >
          {[
            { value: `${clients.length}+`, label: "Unique Clients" },
            { value: `${projects.length}+`, label: "Projects Delivered" },
            { value: "4", label: "Industry Sectors" },
            { value: "20+", label: "Years of Trust" },
          ].map((stat, i) => (
            <div key={i} className="py-8 px-6 sm:px-8 flex flex-col gap-1 text-center">
              <span className="font-display font-bold text-2xl sm:text-3xl text-[#0F172A] tracking-tight">
                {stat.value}
              </span>
              <span className="text-slate-500 text-[11px] sm:text-[12px] leading-snug">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </section>

      {/* Clients Grid */}
      <section className="mb-20">
        <div className="text-center mb-12 space-y-3">
          <span className="text-xs uppercase font-bold text-[#2563EB] tracking-widest">Portfolio</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] font-display">Client Directory</h2>
          <p className="text-slate-500 text-xs max-w-xl mx-auto">
            A comprehensive list of organizations that have trusted Sun Glazing for their facade engineering requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, ease: EASE_OUT, delay: index * 0.03 }}
              className="glass-panel glass-panel-hover p-5 rounded-xl border-[#E2E8F0] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-3">
                  <h3 className="text-[#0F172A] text-sm font-bold font-display leading-tight">{client.name}</h3>
                  <span className="shrink-0 px-2 py-0.5 rounded-full bg-[#EFF6FF] text-[#2563EB] text-[10px] font-bold">
                    {client.count} {client.count === 1 ? 'project' : 'projects'}
                  </span>
                </div>
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {client.sectors.map((sector) => (
                    <span
                      key={sector}
                      className={`px-2 py-0.5 rounded text-[9px] font-semibold uppercase tracking-wider border ${sectorColors[sector] || 'bg-slate-50 text-slate-600 border-slate-200'}`}
                    >
                      {sector}
                    </span>
                  ))}
                </div>
                <div className="border-t border-[#E2E8F0] pt-3">
                  <span className="text-[9px] text-slate-400 font-bold uppercase tracking-widest block mb-1.5">Projects</span>
                  <div className="flex flex-wrap gap-1.5">
                    {client.projects.map((proj) => (
                      <span key={proj} className="text-[10px] text-slate-500">
                        {proj}{client.projects.indexOf(proj) < client.projects.length - 1 ? ',' : ''}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7, ease: EASE_OUT }}
          className="glass-panel p-8 sm:p-12 rounded-2xl border-[#E2E8F0] bg-gradient-to-br from-blue-50/50 to-white text-center space-y-4"
        >
          <h2 className="text-xl sm:text-2xl font-extrabold text-[#0F172A] font-display">
            Ready to join our client portfolio?
          </h2>
          <p className="text-slate-500 text-sm max-w-lg mx-auto">
            Contact our estimation desk for facade engineering solutions tailored to your project requirements.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#2563EB] text-white text-[13px] font-semibold hover:bg-[#1d4ed8] transition-colors shadow-lg shadow-blue-200"
          >
            Get in Touch
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </section>

    </div>
  );
}
