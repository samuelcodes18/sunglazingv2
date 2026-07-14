'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, ChevronLeft, ChevronRight, Coins, ShieldCheck, HeartHandshake, Sparkles, Building, Hammer, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '@/lib/data/projects';
import { companyOverview } from '@/lib/data/partners';
import { facadeSystems } from '@/lib/data/systems';

export default function Home() {
  const featuredProjects = projects.filter(p => 
    ['vasavi-sky-city-block-2', 'hicc', 'itc-kohinoor', 'hyderabad-airport'].includes(p.slug)
  );

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredProjects.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [featuredProjects.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredProjects.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + featuredProjects.length) % featuredProjects.length);
  };

  // Partners list
  const partnerLogos = [
    "Saint-Gobain Glass",
    "Reynaers, Belgium",
    "IIT Chennai",
    "Kinlong Architectural",
    "Alucopanel Korea",
    "Alpolic Japan",
    "Alcopla Taiwan"
  ];

  return (
    <div className="relative w-full overflow-hidden min-h-screen mullion-grid pb-24">
      
      {/* 1. Hero Parallax Slider */}
      <section className="relative h-[85vh] min-h-[600px] w-full bg-slate-950 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 w-full h-full"
          >
            {/* Background image overlay */}
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ 
                backgroundImage: `linear-gradient(to bottom, rgba(3, 7, 18, 0.4) 0%, rgba(3, 7, 18, 0.85) 100%), url(${featuredProjects[currentSlide].imageUrl})` 
              }}
            />
          </motion.div>
        </AnimatePresence>

        {/* Content Overlay */}
        <div className="absolute inset-0 flex items-center z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-3xl">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-400/20 text-sky-400 text-xs font-semibold mb-6 uppercase tracking-wider"
              >
                <Sparkles className="w-3 h-3 text-amber-400 animate-pulse" />
                <span>Premier Facade Engineering</span>
              </motion.div>

              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-6 font-display"
              >
                We Transform <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-400 via-sky-200 to-amber-400">
                  Architectural Visions
                </span> <br />
                Into structural Reality.
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-slate-300 text-sm sm:text-base md:text-lg mb-8 leading-relaxed max-w-xl"
              >
                Turnkey curtain wall and structural glazing specialists. Collaborating with developers, PMCs, and architects to engineer high-performance building skins.
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-wrap gap-4"
              >
                <Link
                  href="/projects"
                  className="px-6 py-3 rounded-full text-xs font-bold bg-white text-slate-950 hover:bg-slate-200 shadow-xl transition-all flex items-center space-x-2"
                >
                  <span>Explore Portfolio</span>
                  <ArrowRight className="w-4 h-4 text-slate-950" />
                </Link>
                <Link
                  href="/systems"
                  className="px-6 py-3 rounded-full text-xs font-bold glass-panel border-slate-700/50 text-white hover:border-sky-500/40 hover:bg-slate-900/60 transition-all flex items-center space-x-2"
                >
                  <span>Our Facade Systems</span>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Dynamic Project Spec Card (Bottom Right) */}
        <div className="absolute bottom-10 right-4 sm:right-10 lg:right-24 z-20 max-w-xs hidden sm:block">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="glass-panel p-4 rounded-xl shadow-2xl border-white/5"
          >
            <span className="text-[10px] uppercase font-semibold text-sky-400 tracking-wider">Featured Project</span>
            <h3 className="text-white text-sm font-bold mt-1 font-display leading-tight">{featuredProjects[currentSlide].name}</h3>
            <p className="text-slate-400 text-xs mt-1">{featuredProjects[currentSlide].location}</p>
            <div className="border-t border-slate-800/80 pt-2 mt-2 flex items-center justify-between text-[11px] text-slate-500">
              <span>{featuredProjects[currentSlide].systemUsed}</span>
            </div>
          </motion.div>
        </div>

        {/* Controls */}
        <div className="absolute bottom-10 left-4 sm:left-10 lg:left-24 z-20 flex space-x-3">
          <button 
            onClick={prevSlide}
            className="w-10 h-10 rounded-full glass-panel border-slate-800/60 flex items-center justify-center text-white hover:border-sky-500/30 hover:bg-slate-900/40 transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button 
            onClick={nextSlide}
            className="w-10 h-10 rounded-full glass-panel border-slate-800/60 flex items-center justify-center text-white hover:border-sky-500/30 hover:bg-slate-900/40 transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* 2. Welcome & Brief Corporate Profile */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute top-10 left-10 w-72 h-72 bg-sky-500/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-xs uppercase font-bold text-sky-400 tracking-widest block">Corporate Profile</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display leading-tight">
              A Legacy of Engineering Precision and Reliability.
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Founded by mechanical engineer Mr. Madhusudhan with roots in aluminum profile extrusion, Sun Glazing has grown to become one of South India's premier turnkey facade contractors.
            </p>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              We operate out of Hyderabad, housing in-house extrusion die design capability and a major manufacturing plant in Chandenvalle. Our company caters to IT Parks, high-rise luxury residential spaces, hotels, and aviation infrastructure.
            </p>
            <div className="grid grid-cols-2 gap-6 pt-4 border-t border-slate-900">
              <div>
                <span className="text-2xl sm:text-3xl font-extrabold text-amber-500 font-display">20+ Years</span>
                <p className="text-slate-500 text-xs uppercase font-medium mt-1 tracking-wider">Industry Footprint</p>
              </div>
              <div>
                <span className="text-2xl sm:text-3xl font-extrabold text-sky-400 font-display">30+ Major</span>
                <p className="text-slate-500 text-xs uppercase font-medium mt-1 tracking-wider">Landmark Envelopes</p>
              </div>
            </div>
          </div>

          {/* Quick-Stats Grid Card */}
          <div className="glass-panel p-6 sm:p-8 rounded-2xl border-white/5 relative overflow-hidden flex flex-col justify-between min-h-[350px]">
            <div className="absolute right-0 top-0 w-32 h-32 bg-amber-500/5 blur-3xl pointer-events-none" />
            <div>
              <Building className="w-10 h-10 text-sky-400 mb-4" />
              <h3 className="text-white text-lg font-bold font-display">SGF India Operations</h3>
              <p className="text-slate-400 text-xs mt-1">Our turnkey scope covers end-to-end facades:</p>
              <ul className="mt-4 space-y-2 text-xs text-slate-300">
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                  <span>In-House Architectural Die Designs</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                  <span>Turnkey Fabrication & Onsite Installation</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                  <span>IIT Chennai Tested Structural Integrity</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                  <span>Reynaers Belgium Aluminum System Standards</span>
                </li>
              </ul>
            </div>
            <Link
              href="/about"
              className="mt-6 inline-flex items-center space-x-2 text-xs font-semibold text-sky-400 hover:text-sky-300 group"
            >
              <span>Learn about our organization</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* 3. Core Facade Systems Overview */}
      <section className="py-20 bg-slate-950/40 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs uppercase font-bold text-sky-400 tracking-widest">Engineering Systems</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display">
              Advanced Envelopes & Structural Facades
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm">
              We design and construct high-performance building skins that provide thermal optimization, acoustic shielding, and structural security.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {facadeSystems.slice(0, 4).map((sys) => (
              <div 
                key={sys.id}
                className="glass-panel glass-panel-hover p-6 rounded-xl flex flex-col justify-between min-h-[250px]"
              >
                <div>
                  <div className="w-8 h-8 rounded-lg bg-sky-500/10 border border-sky-400/20 flex items-center justify-center mb-4 text-sky-400">
                    <Building className="w-4 h-4" />
                  </div>
                  <h3 className="text-white text-base font-bold font-display leading-snug">{sys.name}</h3>
                  <p className="text-slate-400 text-xs mt-2 leading-relaxed line-clamp-3">
                    {sys.shortDescription}
                  </p>
                </div>
                <Link
                  href={`/systems#${sys.id}`}
                  className="mt-6 inline-flex items-center space-x-1.5 text-xs font-semibold text-sky-400 group hover:underline"
                >
                  <span>Technical details</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/systems"
              className="inline-flex items-center space-x-2 px-6 py-3 rounded-full text-xs font-semibold glass-panel border-slate-800 text-white hover:border-sky-500/30 transition-all hover:bg-slate-900/20"
            >
              <span>View All Systems (Including Bullet-Proof & Kinetic)</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Core Values (Cost, Quality, Customer Delight) */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-amber-500/5 blur-[150px] rounded-full pointer-events-none" />
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs uppercase font-bold text-sky-400 tracking-widest">Our Guiding Pillars</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display">
            A Commitment to Turnkey Excellence
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Cost */}
          <div className="glass-panel p-6 sm:p-8 rounded-xl border-white/5 space-y-4">
            <div className="w-12 h-12 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-400 mb-2">
              <Coins className="w-6 h-6" />
            </div>
            <h3 className="text-white text-lg font-bold font-display">Process & Cost Optimization</h3>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              We continuously optimize operational efficiency in facade construction using custom aluminum profiles, offsite modular pre-assembly, and advanced planning techniques.
            </p>
          </div>

          {/* Quality */}
          <div className="glass-panel p-6 sm:p-8 rounded-xl border-white/5 space-y-4">
            <div className="w-12 h-12 rounded-full bg-sky-500/10 flex items-center justify-center text-sky-400 mb-2">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-white text-lg font-bold font-display">Uncompromising Quality</h3>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              We engineer facades that strictly comply with international building codes. All structural calculations and reports are vetted by institutions like IIT Chennai and tested at the Reynaers Institute.
            </p>
          </div>

          {/* Customer Delight */}
          <div className="glass-panel p-6 sm:p-8 rounded-xl border-white/5 space-y-4">
            <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-2">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <h3 className="text-white text-lg font-bold font-display">Collaborative Delight</h3>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              We work in close coordination with property developers, architects, project management consultants (PMCs), and facade consultants, building long-term institutional trust.
            </p>
          </div>
        </div>
      </section>

      {/* 5. Infinite Brand Partners Marquee */}
      <section className="py-16 border-t border-b border-slate-900 bg-slate-950/20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
          <p className="text-center text-xs text-slate-500 uppercase tracking-widest font-semibold">
            Global Collaborations & Material Integrity
          </p>
        </div>
        <div className="relative w-full flex items-center">
          <div className="flex space-x-12 animate-marquee whitespace-nowrap text-slate-400 font-display font-medium text-sm sm:text-base">
            {/* First Set */}
            {partnerLogos.map((p, idx) => (
              <span key={`p1-${idx}`} className="flex items-center space-x-3">
                <span className="w-2 h-2 rounded-full bg-sky-500" />
                <span>{p}</span>
              </span>
            ))}
            {/* Duplicate Set for smooth looping */}
            {partnerLogos.map((p, idx) => (
              <span key={`p2-${idx}`} className="flex items-center space-x-3">
                <span className="w-2 h-2 rounded-full bg-sky-500" />
                <span>{p}</span>
              </span>
            ))}
          </div>
        </div>
        <style jsx>{`
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            display: flex;
            animation: marquee 25s linear infinite;
          }
        `}</style>
      </section>

      {/* 6. Lead Capture CTA Block */}
      <section className="py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel p-8 sm:p-12 rounded-3xl border-white/5 relative overflow-hidden text-center bg-gradient-to-br from-slate-900/60 to-slate-950/80">
          <div className="absolute -top-24 -left-24 w-48 h-48 bg-sky-500/10 blur-[80px] rounded-full pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-amber-500/10 blur-[80px] rounded-full pointer-events-none" />
          
          <div className="max-w-2xl mx-auto space-y-6">
            <span className="text-xs uppercase font-bold text-sky-400 tracking-widest">Connect with our team</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display">
              Ready to Design Your Next Elevation?
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              Contact our corporate project estimation desk. We review architectural drawings, model wind-loads, and supply dynamic estimates for corporate and commercial developers.
            </p>
            <div className="pt-4 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="px-6 py-3 rounded-full text-xs font-bold bg-sky-500 text-white hover:bg-sky-400 shadow-lg shadow-sky-500/20 hover:shadow-sky-400/30 transition-all"
              >
                Request Corporate Quote
              </Link>
              <Link
                href="/facilities"
                className="px-6 py-3 rounded-full text-xs font-bold glass-panel border-slate-700 text-white hover:border-slate-500 transition-all"
              >
                Inspect Factory Capacity
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
