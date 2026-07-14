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
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#2563EB] text-xs font-semibold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5 text-amber-500" />
          <span>Our Envelopes</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0F172A] font-display tracking-tight">
          Completed Landmarks
        </h1>
        <p className="text-slate-600 text-xs sm:text-sm max-w-xl mx-auto">
          Explore our portfolio of 30 landmark structural facades, curtain walls, and specialized glass engineering projects executed across South India.
        </p>
      </section>

      {/* Filter Tabs */}
      <section className="mb-12 flex flex-wrap gap-2 justify-center items-center">
        <div className="flex items-center space-x-2 text-slate-500 mr-4 text-xs font-semibold uppercase tracking-wider">
          <Filter className="w-4 h-4 text-[#2563EB]" />
          <span>Sector Filter:</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                activeFilter === f
                  ? 'bg-[#2563EB] text-white shadow-lg shadow-blue-200'
                  : 'glass-panel border-[#E2E8F0] text-slate-500 hover:text-[#0F172A] hover:bg-slate-50'
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
              <div className="relative h-60 w-full overflow-hidden bg-slate-100 border-b border-[#E2E8F0]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={project.imageUrl}
                  alt={project.name}
                  className="object-cover w-full h-full object-center group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Sector tag overlay */}
                <div className="absolute top-4 left-4">
                  <span className="px-2.5 py-1 rounded bg-white/90 border border-[#E2E8F0] backdrop-blur-md text-[10px] text-[#2563EB] font-bold uppercase tracking-wider">
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
                  <h3 className="text-[#0F172A] text-base sm:text-lg font-bold font-display leading-tight">
                    {project.name}
                  </h3>
                  <p className="text-slate-500 text-xs leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </div>

                <div className="border-t border-[#E2E8F0] pt-4 flex items-center justify-between">
                  <span className="text-[10px] text-slate-500 font-medium">
                    {project.systemUsed}
                  </span>
                  
                  <Link
                    href={`/projects/${project.slug}`}
                    className="w-8 h-8 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center text-[#2563EB] group-hover:bg-[#2563EB] group-hover:text-white group-hover:border-[#2563EB] transition-all shrink-0"
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
        <div className="text-center py-20 glass-panel rounded-2xl border-[#E2E8F0]">
          <Building className="w-12 h-12 text-slate-400 mx-auto mb-4" />
          <h3 className="text-[#0F172A] font-bold font-display text-lg">No Projects Found</h3>
          <p className="text-slate-500 text-xs mt-1">Check back later or contact our desk for estimations.</p>
        </div>
      )}

    </div>
  );
}
