'use client';

import React from 'react';
import { Award, ShieldCheck, FileText, CheckCircle2, Star } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Awards() {
  const awardImages = [
    { url: "https://www.sunglazing.com/wp-content/uploads/2024/12/IMG_1585.jpg", title: "Corporate Excellence Award" },
    { url: "https://www.sunglazing.com/wp-content/uploads/2024/12/IMG_1586.jpg", title: "Best Facade Subcontractor" },
    { url: "https://www.sunglazing.com/wp-content/uploads/2025/09/1234.jpg", title: "ISO Quality Standard Certificate" },
    { url: "https://www.sunglazing.com/wp-content/uploads/2025/09/123.jpg", title: "Safety Protocol Compliance Recognition" },
    { url: "https://www.sunglazing.com/wp-content/uploads/2014/08/Awards-1.jpg", title: "Reynaers System Partner Certificate" },
    { url: "https://www.sunglazing.com/wp-content/uploads/2024/10/Awards-2.jpg", title: "IIT Chennai Design Audit Compliance" },
    { url: "https://www.sunglazing.com/wp-content/uploads/2024/10/Awards-3.jpg", title: "Saint-Gobain Elite Partner Award" },
    { url: "https://www.sunglazing.com/wp-content/uploads/2024/10/Awards-4.jpg", title: "SGF Safety Compliance Accreditation" }
  ];

  return (
    <div className="relative w-full overflow-hidden min-h-screen mullion-grid pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pt-10">
      
      {/* Header */}
      <section className="text-center max-w-3xl mx-auto mb-20 space-y-6 mt-10">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-400/20 text-sky-400 text-xs font-semibold uppercase tracking-wider">
          <Award className="w-3.5 h-3.5 text-sky-400" />
          <span>Accreditation & Quality</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white font-display tracking-tight">
          Awards & Certifications
        </h1>
        <p className="text-slate-350 text-xs sm:text-sm max-w-xl mx-auto">
          Sun Glazing maintains a rigorous focus on quality compliance, structural calculations validation, and site safety management.
        </p>
      </section>

      {/* Highlights Grid */}
      <section className="mb-24 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        <div className="glass-panel p-6 sm:p-8 rounded-2xl border-white/5 space-y-4">
          <div className="w-10 h-10 rounded-lg bg-sky-500/10 flex items-center justify-center text-sky-400">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <h3 className="text-white text-lg font-bold font-display">System Integrity</h3>
          <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
            Our systems conform strictly to European and ASTM standards for curtain wall installations, backed by collaborations with system developers like Reynaers Belgium.
          </p>
        </div>

        <div className="glass-panel p-6 sm:p-8 rounded-2xl border-white/5 space-y-4">
          <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-400">
            <FileText className="w-5 h-5" />
          </div>
          <h3 className="text-white text-lg font-bold font-display">Audit & Calculation Certs</h3>
          <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
            We provide third-party validated calculations and loading charts for every project in South India, with engineering audit clearance from IIT Chennai.
          </p>
        </div>

        <div className="glass-panel p-6 sm:p-8 rounded-2xl border-white/5 space-y-4">
          <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400">
            <CheckCircle2 className="w-5 h-5" />
          </div>
          <h3 className="text-white text-lg font-bold font-display">Safety Accreditations</h3>
          <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
            100% adherence to corporate safety codes for high-rise works, crane/hoisting procedures, and panel handling systems.
          </p>
        </div>

      </section>

      {/* Visual Wall of Certificates */}
      <section className="mb-10">
        <div className="text-center mb-12 space-y-3">
          <span className="text-xs uppercase font-bold text-sky-400 tracking-widest">Verification Documents</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-display">Certificates Gallery</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {awardImages.map((img, idx) => (
            <div 
              key={idx}
              className="glass-panel rounded-xl overflow-hidden border-white/5 flex flex-col justify-between group hover:border-sky-500/35 transition-all"
            >
              <div className="relative h-64 w-full overflow-hidden bg-slate-900 flex items-center justify-center p-2">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={img.url}
                  alt={img.title}
                  className="object-contain w-full h-full group-hover:scale-[1.02] transition-transform duration-500 max-h-60"
                />
              </div>
              <div className="p-4 border-t border-slate-900 bg-slate-950/40">
                <span className="text-white text-xs font-bold font-display block leading-snug">
                  {img.title}
                </span>
                <span className="text-[9px] text-slate-500 block uppercase tracking-wider mt-1">
                  Validated Certification, SGF
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
