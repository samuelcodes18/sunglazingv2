'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ShieldCheck, Target, Compass, Sparkles, Building, Landmark, Mail, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { leadership, collaborators, companyOverview } from '@/lib/data/partners';

export default function About() {
  const { vision, mission, values } = companyOverview;

  return (
    <div className="relative w-full overflow-hidden min-h-screen mullion-grid pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pt-10">
      
      {/* 1. Header & Vision Statement */}
      <section className="text-center max-w-3xl mx-auto mb-20 space-y-6 mt-10">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-400/20 text-sky-400 text-xs font-semibold uppercase tracking-wider"
        >
          <Landmark className="w-3.5 h-3.5 text-sky-400" />
          <span>Our Legacy</span>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl sm:text-5xl font-extrabold text-white font-display tracking-tight leading-tight"
        >
          About Sun Glazing
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-slate-300 text-sm sm:text-base leading-relaxed"
        >
          A premier curtain wall facade specialist in South India, translating engineering precision into landmarks since 2005.
        </motion.p>
      </section>

      {/* 2. Chronological Milestones / History */}
      <section className="mb-24 relative">
        <div className="absolute top-1/2 left-0 w-80 h-80 bg-sky-500/5 blur-[150px] pointer-events-none rounded-full" />
        <div className="text-center mb-16 space-y-3">
          <span className="text-xs uppercase font-bold text-sky-400 tracking-widest">Our Journey</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-display">Corporate Timeline</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="glass-panel p-6 rounded-xl border-white/5 space-y-4">
            <div className="text-amber-500 font-display text-4xl font-extrabold">1996</div>
            <h3 className="text-white text-base font-bold font-display">Aluminium Extrusion Origins</h3>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              Mr. Madhusudhan sets up an Aluminium Extrusion Manufacturing industry, achieving a production capacity of 3000 tons of profiles per annum. Catering to key accounts like Tata BP Solar, Siemens, and Alsthom.
            </p>
          </div>

          <div className="glass-panel p-6 rounded-xl border-white/5 space-y-4">
            <div className="text-sky-400 font-display text-4xl font-extrabold">2005</div>
            <h3 className="text-white text-base font-bold font-display">Facade Glazing Launch</h3>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              Identifying structural glazing potential, the company diversifies. It starts manufacturing complete Unitized Glazing Panels, serving as a specialized supplier for MNC projects like Rajiv Gandhi Intl Airport and Novotel.
            </p>
          </div>

          <div className="glass-panel p-6 rounded-xl border-white/5 space-y-4">
            <div className="text-emerald-400 font-display text-4xl font-extrabold">2008+</div>
            <h3 className="text-white text-base font-bold font-display">Forward Turnkey Integration</h3>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              Sun Glazing integrates forward to take up turnkey facade contracts. We expand operations into advanced systems, executing Tension Cable Nets, Bullet-Proof facades, canopies, and Kinetic installations.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Leadership Profiles */}
      <section className="mb-24">
        <div className="text-center mb-16 space-y-3">
          <span className="text-xs uppercase font-bold text-sky-400 tracking-widest">Leadership</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-display">Board of Directors</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {leadership.map((leader, index) => (
            <div 
              key={index} 
              className="glass-panel p-6 sm:p-8 rounded-2xl border-white/5 flex flex-col md:flex-row gap-6 items-start"
            >
              {/* Leader Image */}
              <div className="relative w-24 h-24 sm:w-32 sm:h-32 rounded-xl overflow-hidden shrink-0 border border-slate-800 bg-slate-900">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={leader.image} 
                  alt={leader.name} 
                  className="object-cover w-full h-full object-center" 
                />
              </div>

              {/* Leader Bio */}
              <div className="space-y-3">
                <h3 className="text-white text-lg font-bold font-display leading-tight">{leader.name}</h3>
                <span className="text-xs text-sky-400 font-semibold block uppercase tracking-wider">{leader.title}</span>
                <span className="text-[10px] text-slate-500 font-medium block leading-normal">{leader.credentials}</span>
                <p className="text-slate-350 text-xs leading-relaxed pt-2">
                  {leader.bio}
                </p>
                <div className="pt-3">
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block">Focus Projects</span>
                  <div className="flex flex-wrap gap-2 mt-1.5">
                    {leader.keyProjects?.map((proj, pIdx) => (
                      <span key={pIdx} className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-[10px] text-slate-300">
                        {proj}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Strategic Vision & Mission */}
      <section className="mb-24 grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="glass-panel p-8 rounded-2xl border-white/5 relative overflow-hidden space-y-4 bg-gradient-to-br from-slate-900/60 to-slate-950/80">
          <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/5 blur-3xl pointer-events-none" />
          <div className="w-10 h-10 rounded-lg bg-sky-500/10 flex items-center justify-center text-sky-400">
            <Compass className="w-5 h-5" />
          </div>
          <h3 className="text-white text-xl font-bold font-display">Our Vision</h3>
          <p className="text-slate-350 text-xs sm:text-sm leading-relaxed">
            {vision}
          </p>
        </div>

        <div className="glass-panel p-8 rounded-2xl border-white/5 relative overflow-hidden space-y-4 bg-gradient-to-br from-slate-900/60 to-slate-950/80">
          <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 blur-3xl pointer-events-none" />
          <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-400">
            <Target className="w-5 h-5" />
          </div>
          <h3 className="text-white text-xl font-bold font-display">Our Mission</h3>
          <p className="text-slate-350 text-xs sm:text-sm leading-relaxed">
            {mission}
          </p>
        </div>
      </section>

      {/* 5. Global Collaborations & Partners */}
      <section className="mb-10">
        <div className="text-center mb-16 space-y-3">
          <span className="text-xs uppercase font-bold text-sky-400 tracking-widest">Global Ecosystem</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-display">Consultants & Collaborators</h2>
          <p className="text-slate-400 text-xs max-w-xl mx-auto">
            We partner with industry-leading manufacturers, testing labs, and glass consultancies to ensure world-class performance certifications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {collaborators.map((partner, index) => (
            <div 
              key={index}
              className="glass-panel p-6 rounded-xl border-white/5 flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] text-sky-400 font-bold uppercase tracking-widest block">{partner.role}</span>
                <h3 className="text-white text-base font-bold font-display mt-1">{partner.name}</h3>
                <p className="text-slate-400 text-xs mt-3 leading-relaxed">
                  {partner.description}
                </p>
              </div>
              <div className="border-t border-slate-900/60 pt-3 mt-4 text-[10px] text-slate-500 flex items-center space-x-1">
                <span>Location:</span>
                <span className="text-slate-400">{partner.location}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
