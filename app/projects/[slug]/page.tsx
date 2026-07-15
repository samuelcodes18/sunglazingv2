import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { projects } from '@/lib/data/projects';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectDetail({ params }: PageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  // Find index and next/prev project links
  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];
  const prevProject = projects[(currentIndex - 1 + projects.length) % projects.length];

  return (
    <div className="relative w-full overflow-hidden min-h-screen mullion-grid pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pt-10">
      
      {/* Back Button */}
      <div className="mb-8 mt-10">
        <Link
          href="/projects"
          className="inline-flex items-center space-x-2 text-xs font-semibold text-[#2563EB] hover:text-[#1d4ed8] group"
        >
          <span>Back to Landmarks</span>
        </Link>
      </div>

      {/* Main Structural Detail Block */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* Gallery Image (LHS) */}
        <div className="lg:col-span-7 space-y-6">
          <div className="glass-panel rounded-2xl overflow-hidden bg-slate-100 border-[#E2E8F0] shadow-lg relative">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={project.imageUrl}
              alt={project.name}
              className="w-full h-auto object-cover object-center max-h-[500px]"
            />
          </div>

          {/* Highlights */}
          {project.highlights && project.highlights.length > 0 && (
            <div className="glass-panel p-6 sm:p-8 rounded-2xl border-[#E2E8F0] space-y-4">
              <h3 className="text-[#0F172A] text-base font-bold font-display">Structural Highlights</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-600">
                {project.highlights.map((h, hIdx) => (
                  <div key={hIdx} className="flex items-center space-x-2">
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Specs Table (RHS) */}
        <div className="lg:col-span-5 space-y-8">
          <div className="space-y-4">
            <span className="px-2.5 py-1 rounded bg-blue-50 border border-blue-200 text-[10px] text-[#2563EB] font-bold uppercase tracking-wider inline-block">
              {project.sector}
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] font-display tracking-tight leading-tight">
              {project.name}
            </h1>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Specs Sheet */}
          <div className="glass-panel p-6 rounded-2xl border-[#E2E8F0] space-y-4">
            <h3 className="text-[#0F172A] text-sm font-bold font-display uppercase tracking-widest pb-3 border-b border-[#E2E8F0]">
              Technical Envelope Specs
            </h3>
            
            <div className="divide-y divide-[#E2E8F0] text-xs">
              <div className="py-3.5 flex justify-between">
                <span className="text-slate-500 font-medium">Location</span>
                <span className="text-slate-700 font-semibold">{project.location}</span>
              </div>

              {project.client && (
                <div className="py-3.5 flex justify-between">
                  <span className="text-slate-500 font-medium">Client</span>
                  <span className="text-slate-700 font-semibold">{project.client}</span>
                </div>
              )}

              <div className="py-3.5 flex justify-between">
                <span className="text-slate-500 font-medium">Facade System</span>
                <span className="text-slate-700 font-semibold text-right max-w-[200px]">
                  {project.systemUsed}
                </span>
              </div>

              <div className="py-3.5 flex justify-between">
                <span className="text-slate-500 font-medium">Glass Quality</span>
                <span className="text-slate-700 font-semibold">Saint-Gobain Performance</span>
              </div>
            </div>
          </div>

          {/* Quick Contact Link */}
          <div className="bg-gradient-to-r from-blue-50 to-amber-50/50 border border-[#E2E8F0] rounded-xl p-4 flex items-center justify-between">
            <div className="space-y-0.5">
              <span className="text-[#0F172A] text-xs font-bold font-display">Inquire about similar envelopes</span>
              <span className="text-[10px] text-slate-500 block">We offer customized aluminum die extrusions.</span>
            </div>
              <Link
                href="/contact?type=estimate"
                className="p-2 bg-[#2563EB] text-white rounded-full hover:bg-[#1d4ed8] transition-colors"
                aria-label="Request quote"
              >
              </Link>
          </div>
        </div>

      </div>

      {/* Navigation Between Projects */}
      <section className="mt-20 border-t border-[#E2E8F0] pt-10 flex items-center justify-between">
        <Link
          href={`/projects/${prevProject.slug}`}
          className="flex flex-col space-y-1 text-left max-w-[45%]"
        >
          <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Previous Landmark</span>
          <span className="text-[#0F172A] font-bold text-xs sm:text-sm font-display truncate hover:text-[#2563EB] transition-colors">
            {prevProject.name}
          </span>
        </Link>

        <Link
          href={`/projects/${nextProject.slug}`}
          className="flex flex-col space-y-1 text-right max-w-[45%]"
        >
          <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Next Landmark</span>
          <span className="text-[#0F172A] font-bold text-xs sm:text-sm font-display truncate hover:text-[#2563EB] transition-colors">
            {nextProject.name}
          </span>
        </Link>
      </section>

    </div>
  );
}
