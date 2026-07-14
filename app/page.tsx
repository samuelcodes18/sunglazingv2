'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight, Coins, ShieldCheck, HeartHandshake } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { projects } from '@/lib/data/projects';
import { facadeSystems } from '@/lib/data/systems';

// ─── Data ────────────────────────────────────────────────────────
const featuredSlugs = [
  'vasavi-sky-city-block-2',
  'hicc',
  'itc-kohinoor',
  'hyderabad-airport',
  'deloitte',
  'leela-hotel',
  'one-golden-mile',
  'honeywell-technology',
  'gvk-hq',
  'sas-i-tower-c-block',
];

const partnerLogos = [
  "Saint-Gobain Glass",
  "Reynaers, Belgium",
  "IIT Chennai",
  "Kinlong Architectural",
  "Alucopanel Korea",
  "Alpolic Japan",
  "Alcopla Taiwan"
];

const clientLogos = [
  ...new Set(projects.map(p => p.client).filter(Boolean)),
];

const values = [
  {
    icon: Coins,
    label: "Cost Optimization",
    body: "Continuously improving operational efficiency in facade construction using process optimization, innovation and automation.",
    color: "from-amber-500/10 to-transparent",
    accent: "text-amber-500",
    border: "border-amber-200",
  },
  {
    icon: ShieldCheck,
    label: "Uncompromising Quality",
    body: "We engineer facades that strictly comply with international building codes, vetted by IIT Chennai and the Reynaers Institute.",
    color: "from-blue-500/10 to-transparent",
    accent: "text-[#2563EB]",
    border: "border-blue-200",
  },
  {
    icon: HeartHandshake,
    label: "Collaborative Delight",
    body: "Working harmoniously with owners, architects, PMCs and facade consultants to deliver excellence on every project.",
    color: "from-emerald-500/10 to-transparent",
    accent: "text-emerald-500",
    border: "border-emerald-200",
  },
];

// ─── Easing ──────────────────────────────────────────────────────
const EASE_OUT: [number, number, number, number] = [0.16, 1, 0.3, 1];
const EASE_IN_OUT: [number, number, number, number] = [0.76, 0, 0.24, 1];

// ─── Component ───────────────────────────────────────────────────
export default function Home() {
  const featuredProjects = projects.filter(p => featuredSlugs.includes(p.slug));
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroImageY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  function advance(dir: 1 | -1) {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrent(c => (c + dir + featuredProjects.length) % featuredProjects.length);
    setTimeout(() => setIsTransitioning(false), 900);
  }

  // Auto-advance slides
  useEffect(() => {
    const t = setInterval(() => advance(1), 5000);
    return () => clearInterval(t);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [current]);

  const project = featuredProjects[current];

  return (
    <div className="relative w-full bg-[#F8FAFC] overflow-x-hidden">

      {/* ════════════════════════════════════════════════════
          1. HERO — Full-bleed cinematic project slider
      ═══════════════════════════════════════════════════ */}
      <section
        ref={heroRef}
        className="relative h-screen min-h-[700px] overflow-hidden"
        id="hero"
      >
        {/* ── Parallax image layer ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, scale: 1.06 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.0, ease: EASE_IN_OUT }}
            className="absolute inset-0 w-full h-full"
          >
            <motion.div
              style={{ y: heroImageY }}
              className="absolute inset-0 w-full h-[115%]"
            >
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${project.imageUrl})` }}
              />
              {/* Multi-layer gradient for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/60 to-[#0F172A]/20" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A]/80 via-transparent to-transparent" />
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* ── Fine glass-pane grid overlay ── */}
        <div
          className="absolute inset-0 pointer-events-none opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
            `,
            backgroundSize: '120px 120px',
          }}
        />

        {/* ── Content ── */}
        <motion.div
          style={{ opacity: heroOpacity }}
          className="absolute inset-0 flex flex-col justify-end pb-16 md:pb-20 z-10"
        >
          <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-10 items-end">

              {/* Left — Headline + CTAs */}
              <div className="space-y-8 max-w-3xl">
                {/* Eyebrow */}
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15, duration: 0.7, ease: EASE_OUT }}
                  className="flex items-center gap-3"
                >
                  <span className="block w-8 h-[1px] bg-[#0EA5E9]/70" />
                  <span className="text-[#0EA5E9]/90 text-[11px] font-semibold tracking-[0.22em] uppercase">
                    Premier Facade Glazing
                  </span>
                </motion.div>

                {/* Headline */}
                <motion.h1
                  initial={{ opacity: 0, y: 28 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25, duration: 0.9, ease: EASE_OUT }}
                  className="font-display font-bold leading-[1.04] tracking-[-0.04em]"
                  style={{ fontSize: 'clamp(2.6rem, 6vw, 5.5rem)' }}
                >
                  <span className="text-white/95">Structural Glass</span>
                  <br />
                  <span className="text-white/30">Facades That</span>
                  <br />
                  <span className="text-shimmer">Define Skylines.</span>
                </motion.h1>

                {/* Sub-copy */}
                <motion.p
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.8, ease: EASE_OUT }}
                  className="text-slate-400 text-[15px] leading-relaxed max-w-lg"
                >
                  Turnkey curtain wall and glazing specialists. Collaborating with
                  developers, PMCs, and architects to engineer world-class building
                  envelopes since 2005.
                </motion.p>

                {/* CTAs */}
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.52, duration: 0.7, ease: EASE_OUT }}
                  className="flex flex-wrap items-center gap-4"
                >
                  <Link
                    href="/projects"
                    className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-white text-[#0F172A] text-[13px] font-semibold tracking-wide hover:bg-slate-100 transition-colors shadow-lg"
                  >
                    Explore Portfolio
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                  </Link>
                  <Link
                    href="/services"
                    className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full border border-white/30 text-white/90 text-[13px] font-medium tracking-wide hover:border-white/50 hover:text-white hover:bg-white/10 transition-all"
                  >
                    Our Services
                    <ArrowUpRight className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </motion.div>
              </div>

              {/* Right — Floating project card */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`card-${current}`}
                  initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, y: -8, filter: 'blur(4px)' }}
                  transition={{ duration: 0.6, ease: EASE_OUT }}
                  className="hidden lg:block w-72 rounded-2xl p-6 shrink-0"
                  style={{
                    background: 'rgba(15, 23, 42, 0.45)',
                    backdropFilter: 'blur(24px) saturate(200%)',
                    WebkitBackdropFilter: 'blur(24px) saturate(200%)',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                  }}
                >
                  <div className="text-[10px] text-[#0EA5E9] font-semibold tracking-[0.2em] uppercase mb-3">
                    Featured Project
                  </div>
                  <h3 className="text-white font-display font-semibold text-base leading-snug mb-2">
                    {project.name}
                  </h3>
                  <p className="text-white/60 text-[12px] mb-4">{project.location}</p>
                  <hr className="glass-rule mb-4" />
                  <div className="text-[11px] text-white/50 leading-relaxed">
                    {project.systemUsed}
                  </div>
                  <Link
                    href={`/projects/${project.slug}`}
                    className="mt-4 inline-flex items-center gap-1.5 text-[12px] text-[#38bdf8] font-medium group hover:gap-2.5 transition-all"
                  >
                    View case study
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* ── Slide Controls ── */}
            <div className="mt-10 flex items-center gap-6">
              {/* Numbered indicators */}
              <div className="flex items-center gap-4">
                {featuredProjects.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => { if (!isTransitioning) { setIsTransitioning(true); setCurrent(i); setTimeout(() => setIsTransitioning(false), 900); }}}
                    className="relative group flex flex-col items-start gap-1.5"
                    aria-label={`Go to slide ${i + 1}`}
                  >
                    <span className={`text-[11px] font-semibold tabular-nums transition-colors ${i === current ? 'text-white' : 'text-white/40 group-hover:text-white/60'}`}>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div className="w-10 h-[1.5px] bg-white/15 rounded-full overflow-hidden">
                      {i === current && (
                        <div
                          key={`progress-${current}`}
                          className="h-full bg-[#0EA5E9] slide-progress rounded-full"
                        />
                      )}
                    </div>
                  </button>
                ))}
              </div>

              {/* Arrow controls */}
              <div className="ml-auto flex items-center gap-2">
                <button
                  onClick={() => advance(-1)}
                  aria-label="Previous slide"
                  className="w-10 h-10 rounded-full border border-white/15 text-white/50 flex items-center justify-center hover:border-white/30 hover:text-white/80 hover:bg-white/5 transition-all"
                >
                  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                <button
                  onClick={() => advance(1)}
                  aria-label="Next slide"
                  className="w-10 h-10 rounded-full border border-white/15 text-white/50 flex items-center justify-center hover:border-white/30 hover:text-white/80 hover:bg-white/5 transition-all"
                >
                  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ════════════════════════════════════════════════════
          2. STATS BAR — Floating above next section
      ═══════════════════════════════════════════════════ */}
      <section className="relative z-20 max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 -mt-0">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: EASE_OUT }}
          className="glass-surface rounded-2xl grid grid-cols-2 md:grid-cols-4 divide-x divide-[#E2E8F0]"
        >
          {[
            { value: "20+", label: "Years of Industry Heritage" },
            { value: "30+", label: "Landmark Envelopes Delivered" },
            { value: "3000T", label: "Annual Aluminium Capacity" },
            { value: "100%", label: "Turnkey Design to Installation" },
          ].map((stat, i) => (
            <div key={i} className="py-8 px-8 flex flex-col gap-1">
              <span className="font-display font-bold text-3xl text-[#0F172A] tracking-tight">
                {stat.value}
              </span>
              <span className="text-slate-500 text-[12px] leading-snug">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </section>

      {/* ════════════════════════════════════════════════════
          3. CORPORATE INTRO — Split editorial layout
      ═══════════════════════════════════════════════════ */}
      <section className="py-32 max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-16 items-center">

          {/* Left — text */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: EASE_OUT }}
            className="space-y-8"
          >
            <div className="flex items-center gap-3">
              <span className="block w-8 h-[1px] bg-slate-300" />
              <span className="text-slate-500 text-[11px] font-semibold tracking-[0.22em] uppercase">
                Corporate Profile
              </span>
            </div>

            <h2
              className="font-display font-bold text-[#0F172A] leading-[1.08] tracking-[-0.035em]"
              style={{ fontSize: 'clamp(2rem, 3.5vw, 3.2rem)' }}
            >
              A legacy of engineering precision and reliability.
            </h2>

            <div className="space-y-4 text-slate-600 text-[15px] leading-[1.75]">
              <p>
                Founded by mechanical engineer Mr. Madhusudhan with roots in aluminium
                profile extrusion, Sun Glazing has grown to become one of South India&apos;s
                premier turnkey facade contractors.
              </p>
              <p>
                We operate from Hyderabad, housing in-house extrusion die design
                capability and a major manufacturing plant in Chandenvalle—serving
                IT Parks, luxury hotels, high-rise residential, and aviation
                infrastructure.
              </p>
            </div>

            <Link
              href="/about"
              className="group inline-flex items-center gap-2.5 text-[13px] font-medium text-[#2563EB] hover:text-[#1d4ed8] transition-colors"
            >
              Learn about the organization
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>

          {/* Right — glass capability card */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: EASE_OUT, delay: 0.1 }}
            className="relative"
          >
            {/* Glow */}
            <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-blue-500/10 via-transparent to-amber-500/5 pointer-events-none" />
            <div className="glass-surface rounded-2xl p-10 relative space-y-8">
              <div className="text-[11px] text-slate-500 font-semibold tracking-[0.18em] uppercase">
                SGF India Operations
              </div>

              {[
                "In-House Architectural Die Designs",
                "Turnkey Fabrication & Onsite Installation",
                "IIT Chennai Verified Structural Integrity",
                "Reynaers Belgium Aluminium System Standards",
                "Saint-Gobain Glass Specification & Supply",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 group">
                  <div className="w-px h-5 bg-gradient-to-b from-[#2563EB]/60 to-transparent shrink-0" />
                  <span className="text-slate-700 text-[14px] group-hover:text-[#0F172A] transition-colors">
                    {item}
                  </span>
                </div>
              ))}

              <hr className="glass-rule" />

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-2xl font-display font-bold text-amber-500 tracking-tight">20+</div>
                  <div className="text-slate-500 text-[11px] uppercase tracking-wider mt-0.5">Industry Footprint</div>
                </div>
                <div>
                  <div className="text-2xl font-display font-bold text-[#2563EB] tracking-tight">30+</div>
                  <div className="text-slate-500 text-[11px] uppercase tracking-wider mt-0.5">Landmark Envelopes</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          4. SYSTEMS — Horizontal scroll cards
      ═══════════════════════════════════════════════════ */}
      <section className="py-24 relative overflow-hidden">
        {/* subtle background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-50 to-transparent pointer-events-none" />

        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
          {/* Header row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: EASE_OUT }}
            className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12"
          >
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="block w-8 h-[1px] bg-slate-300" />
                <span className="text-slate-500 text-[11px] font-semibold tracking-[0.22em] uppercase">
                  Engineering Systems
                </span>
              </div>
              <h2
                className="font-display font-bold text-[#0F172A] tracking-[-0.03em]"
                style={{ fontSize: 'clamp(1.7rem, 3vw, 2.8rem)' }}
              >
                Advanced Facade<br className="hidden sm:block" /> Envelopes
              </h2>
            </div>
            <Link
              href="/services"
              className="group shrink-0 inline-flex items-center gap-2 text-[12px] text-slate-500 hover:text-[#0F172A] border border-[#E2E8F0] hover:border-[#2563EB]/30 px-5 py-2.5 rounded-full transition-all hover:bg-blue-50"
            >
              View all systems
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </motion.div>

          {/* Cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {facadeSystems.slice(0, 4).map((sys, i) => (
              <motion.div
                key={sys.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.65, ease: EASE_OUT, delay: i * 0.08 }}
              >
                <Link
                  href={`/services#${sys.id}`}
                  className="group block glass-panel glass-panel-hover h-full rounded-xl p-6 relative overflow-hidden"
                >
                  {/* Number badge */}
                  <div className="text-[10px] font-semibold text-slate-400 tracking-[0.18em] mb-4">
                    {String(i + 1).padStart(2, '0')}
                  </div>

                  {/* Title */}
                  <h3 className="font-display font-semibold text-[#0F172A] text-[15px] leading-snug mb-3 group-hover:text-[#2563EB] transition-colors">
                    {sys.name}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-500 text-[13px] leading-relaxed line-clamp-3">
                    {sys.shortDescription}
                  </p>

                  {/* Bottom link */}
                  <div className="mt-6 flex items-center gap-1.5 text-[12px] text-slate-400 group-hover:text-[#2563EB] transition-colors">
                    <span>Technical details</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                  </div>

                  {/* Hover shimmer border */}
                  <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                    style={{
                      background: 'linear-gradient(135deg, rgba(37,99,235,0.04) 0%, transparent 60%)',
                    }}
                  />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          5. FEATURED PROJECTS — Large image mosaic
      ═══════════════════════════════════════════════════ */}
      <section className="py-24 max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: EASE_OUT }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12"
        >
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="block w-8 h-[1px] bg-slate-300" />
              <span className="text-slate-500 text-[11px] font-semibold tracking-[0.22em] uppercase">
                Landmark Projects
              </span>
            </div>
            <h2
              className="font-display font-bold text-[#0F172A] tracking-[-0.03em]"
              style={{ fontSize: 'clamp(1.7rem, 3vw, 2.8rem)' }}
            >
              30+ Completed<br className="hidden sm:block" /> Envelopes
            </h2>
          </div>
          <Link
            href="/projects"
            className="group shrink-0 inline-flex items-center gap-2 text-[12px] text-slate-500 hover:text-[#0F172A] border border-[#E2E8F0] hover:border-[#2563EB]/30 px-5 py-2.5 rounded-full transition-all hover:bg-blue-50"
          >
            Full portfolio
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </motion.div>

        {/* Asymmetric image mosaic */}
        <div className="grid grid-cols-12 grid-rows-2 gap-3 h-[600px]">
          {/* Large left card */}
          {projects.slice(0, 1).map((p, i) => (
            <motion.div
              key={p.slug}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, ease: EASE_OUT }}
              className="col-span-12 md:col-span-7 row-span-2 relative rounded-2xl overflow-hidden group cursor-pointer"
            >
              <Link href={`/projects/${p.slug}`} className="block h-full">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url(${p.imageUrl})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/90 via-[#0F172A]/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <span className="text-[10px] text-[#0EA5E9] font-semibold tracking-[0.2em] uppercase">{p.sector}</span>
                  <h3 className="font-display font-bold text-white text-xl mt-1.5 leading-snug">{p.name}</h3>
                  <p className="text-slate-400 text-[13px] mt-1">{p.systemUsed}</p>
                </div>
              </Link>
            </motion.div>
          ))}

          {/* Right column — 2 stacked cards */}
          {projects.slice(1, 3).map((p, i) => (
            <motion.div
              key={p.slug}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, ease: EASE_OUT, delay: 0.1 + i * 0.08 }}
              className="col-span-12 md:col-span-5 row-span-1 relative rounded-2xl overflow-hidden group cursor-pointer"
            >
              <Link href={`/projects/${p.slug}`} className="block h-full">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url(${p.imageUrl})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/80 via-[#0F172A]/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="text-[10px] text-[#0EA5E9] font-semibold tracking-[0.2em] uppercase">{p.sector}</span>
                  <h3 className="font-display font-semibold text-white text-[15px] mt-1 leading-snug">{p.name}</h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          6. VALUES — Horizontal trio, editorial
      ═══════════════════════════════════════════════════ */}
      <section className="py-24 border-t border-[#E2E8F0] max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: EASE_OUT }}
          className="mb-14 space-y-3"
        >
          <div className="flex items-center gap-3">
            <span className="block w-8 h-[1px] bg-slate-300" />
            <span className="text-slate-500 text-[11px] font-semibold tracking-[0.22em] uppercase">
              Our Guiding Pillars
            </span>
          </div>
          <h2
            className="font-display font-bold text-[#0F172A] tracking-[-0.03em]"
            style={{ fontSize: 'clamp(1.7rem, 3vw, 2.8rem)' }}
          >
            A commitment to<br className="hidden sm:block" /> turnkey excellence.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#E2E8F0] rounded-2xl overflow-hidden">
          {values.map((v, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.65, ease: EASE_OUT, delay: i * 0.1 }}
              className={`relative bg-white p-10 group hover:bg-blue-50/50 transition-colors duration-500`}
            >
              {/* Gradient top edge */}
              <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${v.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-6 bg-gradient-to-br ${v.color} border ${v.border}`}>
                <v.icon className={`w-5 h-5 ${v.accent}`} />
              </div>

              <h3 className="font-display font-semibold text-[#0F172A] text-[17px] leading-snug mb-3 group-hover:text-[#2563EB] transition-colors">
                {v.label}
              </h3>
              <p className="text-slate-500 text-[14px] leading-relaxed">
                {v.body}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          7. CLIENT LOGOS MARQUEE
      ═══════════════════════════════════════════════════ */}
      <section className="py-16 border-t border-b border-[#E2E8F0] bg-white overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 mb-10">
          <p className="text-slate-500 text-[11px] font-semibold tracking-[0.22em] uppercase text-center">
            Trusted by Industry Leaders
          </p>
        </div>

        <div className="relative w-full">
          {/* Left edge fade */}
          <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          {/* Right edge fade */}
          <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          {/* Row 1 — scrolls left */}
          <div className="flex mb-4">
            <div className="animate-marquee flex items-center shrink-0">
              {[...clientLogos, ...clientLogos].map((client, i) => (
                <div
                  key={`r1-${i}`}
                  className="flex items-center gap-3 mx-4 sm:mx-6 px-5 sm:px-6 py-3 rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] hover:border-[#2563EB]/30 hover:bg-blue-50/50 transition-all shrink-0"
                >
                  <span className="w-2 h-2 rounded-full bg-[#2563EB]/20 shrink-0" />
                  <span className="text-slate-600 hover:text-[#0F172A] text-[13px] sm:text-[14px] font-semibold whitespace-nowrap transition-colors">
                    {client}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Row 2 — scrolls right (reverse) */}
          <div className="flex">
            <div className="animate-marquee flex items-center shrink-0" style={{ animationDirection: 'reverse' }}>
              {[...partnerLogos, ...partnerLogos].map((partner, i) => (
                <div
                  key={`r2-${i}`}
                  className="flex items-center gap-3 mx-4 sm:mx-6 px-5 sm:px-6 py-3 rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] hover:border-[#2563EB]/30 hover:bg-blue-50/50 transition-all shrink-0"
                >
                  <span className="w-2 h-2 rounded-full bg-amber-400/40 shrink-0" />
                  <span className="text-slate-600 hover:text-[#0F172A] text-[13px] sm:text-[14px] font-semibold whitespace-nowrap transition-colors">
                    {partner}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          8. CTA — Full-width architectural closing block
      ═══════════════════════════════════════════════════ */}
      <section className="py-32 max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.9, ease: EASE_OUT }}
          className="relative rounded-3xl glass-surface overflow-hidden grain p-12 sm:p-16 lg:p-20"
        >
          {/* Background accent glows */}
          <div className="absolute -top-32 -left-32 w-80 h-80 bg-[#2563EB]/5 blur-[100px] rounded-full pointer-events-none" />
          <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-amber-400/5 blur-[100px] rounded-full pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 items-center">
            <div className="space-y-6 max-w-2xl">
              <div className="flex items-center gap-3">
                <span className="block w-8 h-[1px] bg-slate-300" />
                <span className="text-slate-500 text-[11px] font-semibold tracking-[0.22em] uppercase">
                  Connect with our team
                </span>
              </div>

              <h2
                className="font-display font-bold text-[#0F172A] leading-[1.08] tracking-[-0.035em]"
                style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
              >
                Ready to design your<br /> next glass elevation?
              </h2>

              <p className="text-slate-500 text-[15px] leading-relaxed max-w-lg">
                Contact our corporate estimation desk. We review architectural drawings,
                model wind-loads, and supply dynamic estimates for developers and PMCs.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#2563EB] text-white text-[13px] font-semibold tracking-wide hover:bg-[#1d4ed8] transition-colors whitespace-nowrap shadow-lg shadow-blue-200"
              >
                Request Corporate Quote
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                href="/facilities"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-[#E2E8F0] text-slate-600 text-[13px] font-medium hover:border-[#2563EB]/30 hover:text-[#2563EB] hover:bg-blue-50 transition-all whitespace-nowrap"
              >
                Inspect Factory Capacity
                <ArrowUpRight className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity" />
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

    </div>
  );
}
