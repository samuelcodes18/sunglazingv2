'use client';

import React from 'react';
import Link from 'next/link';
import { Building, Users, Clock, Award, Globe, ArrowRight, ChevronRight, Factory, Briefcase, GraduationCap, Shield } from 'lucide-react';
import { motion } from 'framer-motion';
import { leadership, collaborators } from '@/lib/data/partners';

const EASE_OUT: [number, number, number, number] = [0.16, 1, 0.3, 1];

const milestones = [
  {
    year: "1996",
    title: "Aluminium Extrusion Origins",
    description: "Mr. Madhusudhan establishes an Aluminium Extrusion Manufacturing industry with a capacity of 3000 tons of profiles per annum, catering to Tata BP Solar, Siemens, Alsthom, and other multinational corporations.",
    color: "amber",
  },
  {
    year: "2005",
    title: "Facade Glazing Launch",
    description: "Identifying the expansion in commercial structural glazing, Sun Glazing diversifies into turnkey facade envelopes. The company begins manufacturing complete Unitized Glazing Panels for landmark projects.",
    color: "blue",
  },
  {
    year: "2008",
    title: "Forward Turnkey Integration",
    description: "Sun Glazing integrates forward to execute Tension Cable Nets, Bullet-Proof facades, canopies, and Kinetic installations across South India.",
    color: "emerald",
  },
  {
    year: "2012",
    title: "Airport & Hospitality Landmarks",
    description: "Supplying high-specification unitized structural glazing panels for Rajiv Gandhi International Airport and ITC Kohinoor under global quality standards.",
    color: "blue",
  },
  {
    year: "2018",
    title: "Chandenvalle Manufacturing Plant",
    description: "Commissioning of the state-of-the-art Chandenvalle production facility with CNC machining lines, silicon curing zones, and automated pre-assembly stations.",
    color: "amber",
  },
  {
    year: "2022",
    title: "Modernization & Expansion",
    description: "Strategic leadership expansion with Mr. Vishnu joining as Director of Operations, introducing modernized scheduling software and expanding the high-rise commercial client pipeline.",
    color: "blue",
  },
];

const orgStructure = [
  {
    icon: Briefcase,
    title: "Corporate Office",
    subtitle: "Begumpet, Hyderabad",
    description: "Houses the executive leadership, estimation desk, design engineering, and project management teams.",
    color: "blue",
  },
  {
    icon: Factory,
    title: "Manufacturing Facility",
    subtitle: "Chandenvalle, Hyderabad",
    description: "State-of-the-art production plant with CNC machining, EPDM pressing, silicon curing, and automated assembly lines.",
    color: "amber",
  },
  {
    icon: Users,
    title: "Project Execution",
    subtitle: "Pan-South India",
    description: "Dedicated site teams managing facade installation, quality assurance, and on-site coordination across all active projects.",
    color: "emerald",
  },
  {
    icon: Globe,
    title: "Global Partnerships",
    subtitle: "Belgium, Dubai, China, Korea",
    description: "Strategic alliances with Reynaers, Saint-Gobain, Kinlong, and other international technology partners.",
    color: "blue",
  },
];

export default function About() {
  return (
    <div className="relative w-full overflow-hidden min-h-screen mullion-grid pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pt-10">
      
      {/* 1. Header */}
      <section className="text-center max-w-3xl mx-auto mb-20 space-y-6 mt-10">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#2563EB] text-xs font-semibold uppercase tracking-wider"
        >
          <Building className="w-3.5 h-3.5 text-[#2563EB]" />
          <span>About Us</span>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl sm:text-5xl font-extrabold text-[#0F172A] font-display tracking-tight leading-tight"
        >
          About Us
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-slate-600 text-sm sm:text-base leading-relaxed"
        >
          From aluminium extrusion pioneers to South India&apos;s premier turnkey facade contractors — a legacy of engineering precision built over two decades.
        </motion.p>
      </section>

      {/* 2. Company History */}
      <section className="mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — Story */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: EASE_OUT }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3">
              <span className="block w-8 h-[1px] bg-slate-300" />
              <span className="text-slate-500 text-[11px] font-semibold tracking-[0.22em] uppercase">
                Our Story
              </span>
            </div>
            <h2
              className="font-display font-bold text-[#0F172A] leading-[1.08] tracking-[-0.035em]"
              style={{ fontSize: 'clamp(1.8rem, 3vw, 2.8rem)' }}
            >
              Founded by an engineer. Driven by precision.
            </h2>
            <div className="space-y-4 text-slate-600 text-[15px] leading-[1.75]">
              <p>
                <strong className="text-[#0F172A]">Sun Glazing</strong> was founded by <strong className="text-[#0F172A]">Mr. Madhusudhan</strong>, a Mechanical Engineer with over 22 years of experience in the aluminium industry. A second-generation entrepreneur, he began by establishing an Aluminium Extrusion Manufacturing industry in 1996.
              </p>
              <p>
                The company achieved a production capacity of 3000 tons of aluminium profiles per annum, catering to industries spanning solar panels, automobiles, architecture, electronics, and manufacturing — serving key accounts such as Tata BP Solar, Siemens, and Alsthom.
              </p>
              <p>
                In 2005, identifying the massive expansion in commercial structural glazing, the organization diversified into turnkey facade envelopes under the <strong className="text-[#0F172A]">Sun Glazing</strong> brand. Today, the company is one of South India&apos;s most reputable facade contractors, specializing in Curtain Wall Glazing, Unitized Glazing Systems, Tension Cable Systems, and Metal Cladding.
              </p>
            </div>
          </motion.div>

          {/* Right — Images grid */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: EASE_OUT, delay: 0.1 }}
            className="grid grid-cols-2 gap-3"
          >
            <div className="col-span-2 rounded-2xl overflow-hidden border border-[#E2E8F0] bg-slate-100">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/org2.jpg"
                alt="Sun Glazing Facility"
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="rounded-xl overflow-hidden border border-[#E2E8F0] bg-slate-100">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/org3.jpg"
                alt="Manufacturing Operations"
                className="w-full h-36 object-cover"
              />
            </div>
            <div className="rounded-xl overflow-hidden border border-[#E2E8F0] bg-slate-100">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/org4.jpg"
                alt="Sun Glazing Team"
                className="w-full h-36 object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. Company Milestones Timeline */}
      <section className="mb-24 relative">
        <div className="absolute top-0 left-1/2 w-96 h-96 bg-blue-50 blur-[150px] pointer-events-none rounded-full -translate-x-1/2" />
        
        <div className="text-center mb-16 space-y-3">
          <span className="text-xs uppercase font-bold text-[#2563EB] tracking-widest">Our Journey</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] font-display">Company Milestones</h2>
        </div>

        <div className="relative">
          {/* Center line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-[#E2E8F0] -translate-x-1/2 hidden md:block" />

          <div className="space-y-12">
            {milestones.map((milestone, index) => {
              const isLeft = index % 2 === 0;
              const colorMap: Record<string, { dot: string; year: string; bg: string }> = {
                amber: { dot: 'bg-amber-400', year: 'text-amber-500', bg: 'from-amber-50' },
                blue: { dot: 'bg-[#2563EB]', year: 'text-[#2563EB]', bg: 'from-blue-50' },
                emerald: { dot: 'bg-emerald-400', year: 'text-emerald-500', bg: 'from-emerald-50' },
              };
              const colorClasses = colorMap[milestone.color] ?? colorMap.blue;

              return (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.65, ease: EASE_OUT, delay: index * 0.08 }}
                  className={`relative flex flex-col md:flex-row items-center gap-8 ${
                    isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Content card */}
                  <div className={`md:w-[calc(50%-2rem)] glass-panel p-6 rounded-2xl border-[#E2E8F0] bg-gradient-to-br ${colorClasses.bg} to-white`}>
                    <div className={`font-display text-3xl font-extrabold ${colorClasses.year} mb-2`}>
                      {milestone.year}
                    </div>
                    <h3 className="text-[#0F172A] text-base font-bold font-display mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>

                  {/* Center dot */}
                  <div className={`hidden md:flex w-4 h-4 rounded-full ${colorClasses.dot} ring-4 ring-white shrink-0 z-10`} />

                  {/* Spacer for opposite side */}
                  <div className="hidden md:block md:w-[calc(50%-2rem)]" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Leadership & Management Profiles */}
      <section className="mb-24">
        <div className="text-center mb-16 space-y-3">
          <span className="text-xs uppercase font-bold text-[#2563EB] tracking-widest">Management Team</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] font-display">Leadership Profiles</h2>
          <p className="text-slate-500 text-xs max-w-xl mx-auto">
            Guided by experienced engineers and business leaders with deep expertise in aluminium, structural glazing, and facade systems.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {leadership.map((leader, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.65, ease: EASE_OUT, delay: index * 0.1 }}
              className="glass-panel p-6 sm:p-8 rounded-2xl border-[#E2E8F0] flex flex-col md:flex-row gap-6 items-start"
            >
              <div className="relative w-24 h-24 sm:w-32 sm:h-32 rounded-xl overflow-hidden shrink-0 border border-slate-200 bg-slate-100">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="object-cover w-full h-full object-center"
                />
              </div>

              <div className="space-y-3 flex-grow">
                <h3 className="text-[#0F172A] text-lg font-bold font-display leading-tight">{leader.name}</h3>
                <span className="text-xs text-[#2563EB] font-semibold block uppercase tracking-wider">{leader.title}</span>
                <span className="text-[10px] text-slate-500 font-medium block leading-normal">{leader.credentials}</span>
                <p className="text-slate-600 text-xs leading-relaxed pt-2">
                  {leader.bio}
                </p>
                {leader.keyProjects && leader.keyProjects.length > 0 && (
                  <div className="pt-3">
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block">Key Projects</span>
                    <div className="flex flex-wrap gap-2 mt-1.5">
                      {leader.keyProjects.map((proj, pIdx) => (
                        <span key={pIdx} className="px-2.5 py-1 rounded bg-slate-100 border border-slate-200 text-[10px] text-slate-600">
                          {proj}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 5. Organizational Structure */}
      <section className="mb-24">
        <div className="text-center mb-16 space-y-3">
          <span className="text-xs uppercase font-bold text-[#2563EB] tracking-widest">Structure</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] font-display">Organizational Structure</h2>
          <p className="text-slate-500 text-xs max-w-xl mx-auto">
            Integrated operations spanning corporate management, manufacturing, project execution, and global partnerships.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {orgStructure.map((unit, index) => {
            const colorMap: Record<string, { icon: string; border: string; bg: string }> = {
              blue: { icon: 'text-[#2563EB]', border: 'border-blue-200', bg: 'bg-blue-50' },
              amber: { icon: 'text-amber-500', border: 'border-amber-200', bg: 'bg-amber-50' },
              emerald: { icon: 'text-emerald-500', border: 'border-emerald-200', bg: 'bg-emerald-50' },
            };
            const colors = colorMap[unit.color];

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.65, ease: EASE_OUT, delay: index * 0.08 }}
                className="glass-panel p-6 rounded-2xl border-[#E2E8F0] space-y-4"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${colors.bg} border ${colors.border}`}>
                  <unit.icon className={`w-6 h-6 ${colors.icon}`} />
                </div>
                <div>
                  <h3 className="text-[#0F172A] text-base font-bold font-display">{unit.title}</h3>
                  <span className="text-[10px] text-[#2563EB] font-semibold uppercase tracking-wider">{unit.subtitle}</span>
                </div>
                <p className="text-slate-500 text-xs leading-relaxed">
                  {unit.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* 6. Our Vision */}
      <section className="mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left — Vision statement */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: EASE_OUT }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3">
              <span className="block w-8 h-[1px] bg-slate-300" />
              <span className="text-slate-500 text-[11px] font-semibold tracking-[0.22em] uppercase">
                Our Vision
              </span>
            </div>
            <h2
              className="font-display font-bold text-[#0F172A] leading-[1.08] tracking-[-0.035em]"
              style={{ fontSize: 'clamp(1.8rem, 3vw, 2.8rem)' }}
            >
              Driven by passion. Recognized for reliability.
            </h2>
            <div className="space-y-4 text-slate-600 text-[15px] leading-[1.75]">
              <p>
                Our company, driven by passion, consists of a highly experienced team &amp; skilled manpower. We have been acknowledged by our clients &amp; earned a reputation as a reliable facade contractor. The company over the period consistently maintains as a profitable &amp; healthy organization, with a good track record.
              </p>
              <p>
                The management is having an overall experience of <strong className="text-[#0F172A]">25 years in the aluminium industry</strong> — 7 years in the manufacture of Aluminium Extrusions &amp; 18 years in the Facade industry.
              </p>
              <p>
                We are committed to be a reliable partner for our clients in building world class facade elevation infrastructure. We strive to be recognized as the <strong className="text-[#0F172A]">most preferred total solution glazing brand</strong> as a &ldquo;symbol of quality &amp; reliability&rdquo;.
              </p>
            </div>
          </motion.div>

          {/* Right — Vision card */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: EASE_OUT, delay: 0.1 }}
          >
            <div className="glass-panel p-8 sm:p-10 rounded-2xl border-[#E2E8F0] relative overflow-hidden bg-gradient-to-br from-blue-50 to-white space-y-6">
              <div className="absolute top-0 right-0 w-40 h-40 bg-blue-100/50 blur-3xl pointer-events-none" />
              <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-[#2563EB]">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-[#0F172A] text-xl font-bold font-display">Our Vision</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                To be a reliable partner for our clients in building world-class facade elevations, recognized as the most preferred total solution glazing brand — a symbol of quality and reliability.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[#E2E8F0]">
                <div>
                  <div className="text-2xl font-display font-bold text-[#2563EB] tracking-tight">25+</div>
                  <div className="text-slate-500 text-[11px] uppercase tracking-wider mt-0.5">Years Industry Experience</div>
                </div>
                <div>
                  <div className="text-2xl font-display font-bold text-amber-500 tracking-tight">7+18</div>
                  <div className="text-slate-500 text-[11px] uppercase tracking-wider mt-0.5">Extrusion + Facade Years</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 7. Our Mission */}
      <section className="mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Right — Mission card (appears first on desktop) */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: EASE_OUT }}
            className="order-2 lg:order-1"
          >
            <div className="glass-panel p-8 sm:p-10 rounded-2xl border-[#E2E8F0] relative overflow-hidden bg-gradient-to-br from-amber-50/50 to-white space-y-6">
              <div className="absolute top-0 right-0 w-40 h-40 bg-amber-100/40 blur-3xl pointer-events-none" />
              <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center text-amber-500">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="text-[#0F172A] text-xl font-bold font-display">Our Mission</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                To build outstanding facade elevations that transform city skylines, growing steadily and profitably by delivering high-quality products and efficient turnkey services within the shortest possible timelines.
              </p>
              <div className="pt-4 border-t border-[#E2E8F0]">
                <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest block mb-3">Core Pillars</span>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1.5 rounded-full bg-white border border-[#E2E8F0] text-[11px] text-slate-600 font-medium">Client Satisfaction</span>
                  <span className="px-3 py-1.5 rounded-full bg-white border border-[#E2E8F0] text-[11px] text-slate-600 font-medium">Stakeholder Satisfaction</span>
                  <span className="px-3 py-1.5 rounded-full bg-white border border-[#E2E8F0] text-[11px] text-slate-600 font-medium">Consultant Satisfaction</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Left — Mission statement */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: EASE_OUT, delay: 0.1 }}
            className="space-y-6 order-1 lg:order-2"
          >
            <div className="flex items-center gap-3">
              <span className="block w-8 h-[1px] bg-slate-300" />
              <span className="text-slate-500 text-[11px] font-semibold tracking-[0.22em] uppercase">
                Our Mission
              </span>
            </div>
            <h2
              className="font-display font-bold text-[#0F172A] leading-[1.08] tracking-[-0.035em]"
              style={{ fontSize: 'clamp(1.8rem, 3vw, 2.8rem)' }}
            >
              Transforming skylines with quality and efficiency.
            </h2>
            <div className="space-y-4 text-slate-600 text-[15px] leading-[1.75]">
              <p>
                We aspire to build outstanding facade elevations &amp; in transforming the city skyline. We plan to grow steadily, to be a profitable company by consistently delivering <strong className="text-[#0F172A]">high quality products and efficient services</strong> to our customers.
              </p>
              <p>
                We envisage completion of projects within the <strong className="text-[#0F172A]">shortest possible timelines &amp; schedules</strong>, thus providing maximum benefits for our clients.
              </p>
              <p>
                The core strength of the company is to build a strong &amp; reliable brand in the facade industry by having a <strong className="text-[#0F172A]">competent, efficient &amp; motivated team</strong>. Our planning and implementation of latest design technologies provides us with sustainable development &amp; growth.
              </p>
              <p>
                <strong className="text-[#0F172A]">Client Satisfaction, Stakeholders Satisfaction &amp; Consultants Satisfaction</strong> is our motto &amp; our top most priority.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 7. Consultants & Collaborators */}
      <section className="mb-10">
        <div className="text-center mb-16 space-y-3">
          <span className="text-xs uppercase font-bold text-[#2563EB] tracking-widest">Global Ecosystem</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] font-display">Consultants & Collaborators</h2>
          <p className="text-slate-500 text-xs max-w-xl mx-auto">
            Strategic alliances with international system developers, testing institutes, and material suppliers ensuring world-class performance certifications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {collaborators.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.65, ease: EASE_OUT, delay: index * 0.06 }}
              className="glass-panel p-6 rounded-xl border-[#E2E8F0] flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] text-[#2563EB] font-bold uppercase tracking-widest block">{partner.role}</span>
                <h3 className="text-[#0F172A] text-base font-bold font-display mt-1">{partner.name}</h3>
                <p className="text-slate-500 text-xs mt-3 leading-relaxed">
                  {partner.description}
                </p>
              </div>
              <div className="border-t border-[#E2E8F0] pt-3 mt-4 text-[10px] text-slate-500 flex items-center space-x-1">
                <Globe className="w-3 h-3 shrink-0" />
                <span className="text-slate-600">{partner.location}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

    </div>
  );
}
