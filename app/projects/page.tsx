'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Filter, Building, Compass, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '@/lib/data/projects';

type SectorFilter = 'All' | 'Commercial' | 'Hospitality' | 'Infrastructure' | 'Residential';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<SectorFilter>('All');

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.sector === activeFilter);

  const filters: SectorFilter[] = ['All', 'Commercial', 'Hospitality', 'Infrastructure', 'Residential'];

  return (
    <div className="relative w-full overflow-hidden min-h-screen mullion-grid pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pt-10">
      
      {/* Page Header */}
      <section className="text-center max-w-3xl mx-auto mb-16 space-y-6 mt-10">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-400/20 text-sky-400 text-xs font-semibold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>Our Envelopes</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white font-display tracking-tight">
          Completed Landmarks
        </h1>
        <p className="text-slate-350 text-xs sm:text-sm max-w-xl mx-auto">
          Explore our portfolio of 30 landmark structural facades, curtain walls, and specialized glass engineering projects executed across South India.
        </p>
      </section>

      {/* Filter Tabs */}
      <section className="mb-12 flex flex-wrap gap-2 justify-center items-center">
        <div className="flex items-center space-x-2 text-slate-400 mr-4 text-xs font-semibold uppercase tracking-wider">
          <Filter className="w-4 h-4 text-sky-400" />
          <span>Sector Filter:</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                activeFilter === f
                  ? 'bg-sky-500 text-white shadow-lg shadow-sky-500/10'
                  : 'glass-panel border-slate-800 text-slate-400 hover:text-slate-200 hover:bg-slate-900/60'
              }`}
            >
              {f === 'All' ? 'All Projects' : f}
            </button>
          ))}
        </div>
      </section>

      {/* Projects Grid */}
      <motion.section 
        layout 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              key={project.slug}
              className="glass-panel glass-panel-hover rounded-2xl overflow-hidden flex flex-col group"
            >
              {/* Card Image */}
              <div className="relative h-60 w-full overflow-hidden bg-slate-900 border-b border-slate-900">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={project.imageUrl}
                  alt={project.name}
                  className="object-cover w-full h-full object-center group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Sector tag overlay */}
                <div className="absolute top-4 left-4">
                  <span className="px-2.5 py-1 rounded bg-slate-950/80 border border-slate-800 backdrop-blur-md text-[10px] text-sky-400 font-bold uppercase tracking-wider">
                    {project.sector}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center space-x-1.5 text-slate-500 text-[10px] uppercase font-bold tracking-wider">
                    <Compass className="w-3.5 h-3.5" />
                    <span>{project.location}</span>
                  </div>
                  <h3 className="text-white text-base sm:text-lg font-bold font-display leading-tight">
                    {project.name}
                  </h3>
                  <p className="text-slate-400 text-xs leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </div>

                <div className="border-t border-slate-900/60 pt-4 flex items-center justify-between">
                  <span className="text-[10px] text-slate-500 font-medium">
                    {project.systemUsed}
                  </span>
                  
                  <Link
                    href={`/projects/${project.slug}`}
                    className="w-8 h-8 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-sky-400 group-hover:bg-sky-500 group-hover:text-white group-hover:border-sky-400 transition-all shrink-0"
                    aria-label="View project case study"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.section>

      {/* Empty State */}
      {filteredProjects.length === 0 && (
        <div className="text-center py-20 glass-panel rounded-2xl border-white/5">
          <Building className="w-12 h-12 text-slate-500 mx-auto mb-4" />
          <h3 className="text-white font-bold font-display text-lg">No Projects Found</h3>
          <p className="text-slate-400 text-xs mt-1">Check back later or contact our desk for estimations.</p>
        </div>
      )}

    </div>
  );
}
