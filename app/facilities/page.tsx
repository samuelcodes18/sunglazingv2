'use client';

import React from 'react';
import { Hammer, Scale, ShieldCheck, Cpu, HardHat, Landmark, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Facilities() {
  const facilityImages = [
    { url: "https://www.sunglazing.com/wp-content/uploads/2025/09/fac1.jpg", title: "Facade Erection Lines" },
    { url: "https://www.sunglazing.com/wp-content/uploads/2024/10/factory-img2.jpg", title: "Assembly Stations" },
    { url: "https://www.sunglazing.com/wp-content/uploads/2024/10/factory-img3.jpg", title: "Aluminium Profile Storage" },
    { url: "https://www.sunglazing.com/wp-content/uploads/2024/10/factory-img4.jpg", title: "CNC Machining Center" },
    { url: "https://www.sunglazing.com/wp-content/uploads/2025/09/factory-1.png", title: "Pneumatic EPDM Press" },
    { url: "https://www.sunglazing.com/wp-content/uploads/2025/09/factory-2.png", title: "Silicon Curing Zones" },
    { url: "https://www.sunglazing.com/wp-content/uploads/2024/10/machinary-1.jpg", title: "Automatic Mitre Saw" },
    { url: "https://www.sunglazing.com/wp-content/uploads/2024/10/machinary-2.jpg", title: "Corner Crimping Stations" },
    { url: "https://www.sunglazing.com/wp-content/uploads/2024/10/machinary-3.jpg", title: "CNC End Milling Machine" },
    { url: "https://www.sunglazing.com/wp-content/uploads/2024/10/machinary-4.jpg", title: "Under-head Copy Routing" },
    { url: "https://www.sunglazing.com/wp-content/uploads/2025/09/mission-img.jpg", title: "Glazing Test Rigs" }
  ];

  return (
    <div className="relative w-full overflow-hidden min-h-screen mullion-grid pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pt-10">
      
      {/* Header */}
      <section className="text-center max-w-3xl mx-auto mb-20 space-y-6 mt-10">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-400/20 text-sky-400 text-xs font-semibold uppercase tracking-wider">
          <Cpu className="w-3.5 h-3.5 text-sky-400" />
          <span>Industrial Capacity</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white font-display tracking-tight">
          Manufacturing Facilities
        </h1>
        <p className="text-slate-350 text-xs sm:text-sm max-w-xl mx-auto">
          Our specialized plant in Chandenvalle houses heavy-duty CNC machining lines, clean-room silicon curing zones, and automated pre-assembly stations.
        </p>
      </section>

      {/* 1. Facility Stats Card */}
      <section className="mb-24 grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        <div className="glass-panel p-6 sm:p-8 rounded-2xl border-white/5 space-y-4">
          <div className="w-10 h-10 rounded-lg bg-sky-500/10 flex items-center justify-center text-sky-400">
            <Scale className="w-5 h-5" />
          </div>
          <h3 className="text-white text-lg font-bold font-display">Extrusion Heritage</h3>
          <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
            Our historical roots in profile extrusion enable us to maintain a capacity of 3000 tons/annum, ensuring a steady supply of structural sections.
          </p>
        </div>

        <div className="glass-panel p-6 sm:p-8 rounded-2xl border-white/5 space-y-4">
          <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-400">
            <Hammer className="w-5 h-5" />
          </div>
          <h3 className="text-white text-lg font-bold font-display">Turnkey Pre-Assembly</h3>
          <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
            Off-site modular assembly reduces site workloads by 70%. We deliver pre-glazed, weather-sealed panels directly to the build coordinates.
          </p>
        </div>

        <div className="glass-panel p-6 sm:p-8 rounded-2xl border-white/5 space-y-4">
          <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <h3 className="text-white text-lg font-bold font-display">Testing & QA Rigor</h3>
          <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
            We partner with the Reynaers Institute, Belgium, to perform air infiltration, water leakage, and structural loading tests on custom facade units.
          </p>
        </div>

      </section>

      {/* 2. Visual Plant Tour Gallery */}
      <section className="mb-10">
        <div className="text-center mb-12 space-y-3">
          <span className="text-xs uppercase font-bold text-sky-400 tracking-widest">Visual Inspection</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-display">Inside the Chandenvalle Plant</h2>
          <p className="text-slate-400 text-xs max-w-xl mx-auto">
            Review the automated machineries and assembly stations operating at our industrial park facility.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {facilityImages.map((img, idx) => (
            <div 
              key={idx}
              className="glass-panel rounded-xl overflow-hidden group border-white/5 flex flex-col"
            >
              <div className="relative h-56 w-full overflow-hidden bg-slate-900">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={img.url}
                  alt={img.title}
                  className="object-cover w-full h-full object-center group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4 border-t border-slate-900 bg-slate-950/40">
                <span className="text-white text-xs font-bold font-display block">
                  {img.title}
                </span>
                <span className="text-[10px] text-slate-500 block uppercase tracking-wider mt-0.5">
                  Chandenvalle operations, SGF India
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
