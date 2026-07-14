'use client';

import React, { useState } from 'react';
import { ArrowRight, HelpCircle, Check, ShieldCheck, Ruler, Scale, Eye, Thermometer, Volume2, Calculator, Settings } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { facadeSystems, FacadeSystem } from '@/lib/data/systems';

// Predefined glass specs for visualizer
interface GlassSpec {
  id: string;
  name: string;
  category: string;
  thickness: string;
  weight: string;
  transmission: string;
  uValue: string;
  gValue: string;
  acoustic: string;
  layers: { name: string; thick: string; type: 'glass' | 'pvb' | 'air' }[];
  description: string;
}

const glassSpecs: GlassSpec[] = [
  {
    id: "bulletproof-br6",
    name: "Bullet-Proof BR6-S Splintering",
    category: "High-Security",
    thickness: "50mm",
    weight: "117 kg/m²",
    transmission: "72% - 82%",
    uValue: "4.5 W/m²K",
    gValue: "0.51 - 0.65",
    acoustic: "45 dB",
    layers: [
      { name: "Extra Clear Planilux Glass", thick: "12mm", type: "glass" },
      { name: "PVB Security Interlayer", thick: "2.28mm", type: "pvb" },
      { name: "Extra Clear Planilux Glass", thick: "15mm", type: "glass" },
      { name: "PVB Security Interlayer", thick: "1.52mm", type: "pvb" },
      { name: "Extra Clear Planilux Glass", thick: "19mm", type: "glass" }
    ],
    description: "Ballistic grade laminate designed to absorb high-impact ammunition (e.g. 7.62x51mm NATO caliber) with splinter containment."
  },
  {
    id: "double-glazed-high",
    name: "Double Glazed Unit (DGU) Low-E",
    category: "Energy-Efficient",
    thickness: "24mm",
    weight: "30 kg/m²",
    transmission: "62%",
    uValue: "1.6 W/m²K",
    gValue: "0.38 - 0.45",
    acoustic: "38 dB",
    layers: [
      { name: "Low-E Coating Outer Glass", thick: "6mm", type: "glass" },
      { name: "Argon Gas Air Gap (Spacer)", thick: "12mm", type: "air" },
      { name: "Clear Float Inner Glass", thick: "6mm", type: "glass" }
    ],
    description: "Standard corporate facade assembly that drastically reduces solar heat gains and thermal transmission while harvesting natural light."
  },
  {
    id: "structural-sentry",
    name: "SentryGlas Laminated Safety",
    category: "Structural Strength",
    thickness: "22mm",
    weight: "55 kg/m²",
    transmission: "80%",
    uValue: "5.2 W/m²K",
    gValue: "0.72",
    acoustic: "41 dB",
    layers: [
      { name: "Toughened Safety Glass", thick: "10mm", type: "glass" },
      { name: "SentryGlas Ionoplast Interlayer", thick: "1.52mm", type: "pvb" },
      { name: "Toughened Safety Glass", thick: "10mm", type: "glass" }
    ],
    description: "Highly stable structural safety configuration. SentryGlas interlayers are 5x stronger and up to 100x stiffer than standard PVB."
  },
  {
    id: "single-toughened",
    name: "Single Toughened Structural Glass",
    category: "High-Transparency",
    thickness: "12mm",
    weight: "30 kg/m²",
    transmission: "88%",
    uValue: "5.7 W/m²K",
    gValue: "0.82",
    acoustic: "32 dB",
    layers: [
      { name: "Toughened Clear Glass", thick: "12mm", type: "glass" }
    ],
    description: "Ideal for structural glass walls and point-fixed spider glazing entries where optical transparency is the primary architectural driver."
  }
];

export default function Systems() {
  const [activeTab, setActiveTab] = useState<string>("unitized-curtain-walling");
  const [selectedGlass, setSelectedGlass] = useState<string>("bulletproof-br6");

  // Wind Load Calculator State
  const [windSpeed, setWindSpeed] = useState<number>(39); // m/s
  const [height, setHeight] = useState<number>(30); // meters
  const [terrain, setTerrain] = useState<string>("Category-3"); // category
  const [calcResult, setCalcResult] = useState<{
    pressure: number;
    requiredGlass: string;
    description: string;
  }>({
    pressure: 1.15,
    requiredGlass: "12mm Heat Strengthened (Single)",
    description: "Suitable for standard office buildings in suburban terrain settings."
  });

  const handleCalculate = () => {
    // Basic engineering wind pressure estimation:
    // P = 0.6 * V^2 * Kz (where Kz is height coefficient)
    // Category 3 (Suburban) factors: 10m=0.88, 30m=1.00, 50m=1.07, 100m=1.18
    let terrainFactor = 1.0;
    if (terrain === "Category-1") terrainFactor = 1.25; // Open field
    if (terrain === "Category-2") terrainFactor = 1.12; // Flat terrain with small obstacles
    if (terrain === "Category-3") terrainFactor = 1.0;  // Suburban / industrial
    if (terrain === "Category-4") terrainFactor = 0.8;  // Highly built-up city center

    const Kz = 0.7 + (height / 150) * 0.5; // simple interpolation
    const velocityPressure = 0.6 * Math.pow(windSpeed, 2) * Kz * terrainFactor / 1000; // in kN/m²
    const pressureVal = parseFloat(velocityPressure.toFixed(2));

    let recommended = "12mm Toughened Single Glazing";
    let desc = "Standard load levels. Single glass is acceptable for low-impact storefronts, but DGU is recommended for workspace comfort.";

    if (pressureVal > 0.8 && pressureVal <= 1.4) {
      recommended = "24mm Double Glazed Unit (6mm + 12 Air + 6mm)";
      desc = "Moderate wind loads. High-performance double glazing provides thermal control and structural safety.";
    } else if (pressureVal > 1.4 && pressureVal <= 2.2) {
      recommended = "26mm Laminated Double Glazed (8mm + 12 Air + 6mm Laminated)";
      desc = "Elevated wind loads. Laminated double glazing is required to resist deflection and ensure safety at heights.";
    } else if (pressureVal > 2.2) {
      recommended = "32mm Triple Laminated Structural Glazing or SentryGlas custom system";
      desc = "Severe wind conditions. SentryGlas or reinforced structural mullion profiles must be designed in collaboration with Reynaers.";
    }

    setCalcResult({
      pressure: pressureVal,
      requiredGlass: recommended,
      description: desc
    });
  };

  const selectedGlassData = glassSpecs.find(g => g.id === selectedGlass) || glassSpecs[0];
  const activeSystem = facadeSystems.find(s => s.id === activeTab) || facadeSystems[0];

  return (
    <div className="relative w-full overflow-hidden min-h-screen mullion-grid pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pt-10">
      
      {/* Header */}
      <section className="text-center max-w-3xl mx-auto mb-20 space-y-6 mt-10">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-400/20 text-sky-400 text-xs font-semibold uppercase tracking-wider">
          <Settings className="w-3.5 h-3.5 text-sky-400" />
          <span>Facade Engineering</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white font-display tracking-tight">
          Systems & Technical Specs
        </h1>
        <p className="text-slate-350 text-xs sm:text-sm max-w-xl mx-auto">
          Sun Glazing designs, manufactures, and installs high-specification structural glass systems. Review our standard systems and run load simulations.
        </p>
      </section>

      {/* 1. Comparison & Systems Tabs */}
      <section className="mb-24">
        <div className="text-center mb-10 space-y-3">
          <span className="text-xs uppercase font-bold text-sky-400 tracking-widest">Compare Envelopes</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-display">Systems Portfolio</h2>
        </div>

        {/* Tab Controls */}
        <div className="flex flex-wrap gap-2 justify-center mb-10 border-b border-slate-900 pb-6">
          {facadeSystems.map((sys) => (
            <button
              key={sys.id}
              onClick={() => setActiveTab(sys.id)}
              className={`px-4 py-2.5 rounded-full text-xs font-semibold transition-all ${
                activeTab === sys.id
                  ? 'bg-sky-500 text-white shadow-lg'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/60'
              }`}
            >
              {sys.name}
            </button>
          ))}
        </div>

        {/* System Details Display Card */}
        <div className="glass-panel p-6 sm:p-10 rounded-2xl border-white/5 grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="space-y-6">
            <h3 className="text-white text-2xl font-extrabold font-display leading-tight">{activeSystem.name}</h3>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">{activeSystem.description}</p>
            
            {activeSystem.engineeringDetail && (
              <div className="border-l-2 border-sky-500 pl-4 space-y-2">
                <span className="text-[10px] text-sky-400 font-bold uppercase tracking-wider block">Engineering Detail</span>
                <p className="text-slate-400 text-xs leading-relaxed">{activeSystem.engineeringDetail}</p>
              </div>
            )}

            <div>
              <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest block mb-3">Key Benefits</span>
              <ul className="grid grid-cols-1 gap-2.5">
                {activeSystem.benefits.map((b, idx) => (
                  <li key={idx} className="flex items-start space-x-2.5 text-xs text-slate-300">
                    <Check className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-6 bg-slate-950/50 p-6 rounded-xl border border-slate-900/80">
            <h4 className="text-white text-sm font-bold font-display">Technical Parameters</h4>
            
            {activeSystem.specs ? (
              <div className="divide-y divide-slate-900 text-xs">
                {Object.entries(activeSystem.specs).map(([key, value]) => (
                  <div key={key} className="py-3 flex justify-between gap-4">
                    <span className="text-slate-500 font-medium">{key}</span>
                    <span className="text-slate-300 text-right">{value}</span>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-slate-500 text-xs">Technical specs compiled per project specifications.</p>
            )}

            {activeSystem.suitability && (
              <div className="pt-4 border-t border-slate-900">
                <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest block mb-2">Ideal Applications</span>
                <div className="flex flex-wrap gap-2">
                  {activeSystem.suitability.map((s, idx) => (
                    <span key={idx} className="px-2.5 py-1 rounded bg-slate-900 text-[10px] text-slate-400">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 2. Interactive Glass Layer Visualizer */}
      <section className="mb-24">
        <div className="text-center mb-10 space-y-3">
          <span className="text-xs uppercase font-bold text-sky-400 tracking-widest">Glass Physics</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-display">Glass Specification Visualizer</h2>
          <p className="text-slate-400 text-xs max-w-xl mx-auto">
            Toggle between premium glazing types to view cross-sections, weight distributions, and optical transmission indices.
          </p>
        </div>

        {/* Visualizer Frame */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Controls list */}
          <div className="lg:col-span-4 flex flex-col gap-2.5">
            {glassSpecs.map((spec) => (
              <button
                key={spec.id}
                onClick={() => setSelectedGlass(spec.id)}
                className={`p-4 rounded-xl text-left border transition-all ${
                  selectedGlass === spec.id
                    ? 'bg-slate-900/60 border-sky-500/50 shadow-lg shadow-sky-500/5'
                    : 'glass-panel border-white/5 hover:border-slate-800 hover:bg-slate-900/30'
                }`}
              >
                <div className="flex justify-between items-center">
                  <span className="text-[10px] text-sky-400 font-bold uppercase tracking-wider">{spec.category}</span>
                  <span className="text-[10px] text-slate-500">{spec.thickness}</span>
                </div>
                <h3 className="text-white text-sm font-bold mt-1 font-display">{spec.name}</h3>
              </button>
            ))}
          </div>

          {/* Graphical Display Panel */}
          <div className="lg:col-span-8 glass-panel p-6 sm:p-8 rounded-2xl border-white/5 flex flex-col justify-between">
            
            {/* Visual Glass cross-section mockup */}
            <div className="py-6 flex flex-col items-center justify-center bg-slate-950/45 rounded-xl border border-slate-900/80 mb-6 p-4">
              <span className="text-[10px] text-slate-500 uppercase tracking-widest mb-6 font-bold">Cross-Sectional Layers</span>
              
              <div className="flex flex-row justify-center items-stretch h-36 w-full max-w-lg space-x-1.5 px-6">
                {selectedGlassData.layers.map((layer, idx) => {
                  let bgStyle = "bg-sky-400/20 border-sky-400/40"; // glass
                  if (layer.type === "pvb") bgStyle = "bg-amber-500/35 border-amber-500/40"; // pvb
                  if (layer.type === "air") bgStyle = "bg-slate-800/10 border-slate-800/40 border-dashed"; // air
                  
                  return (
                    <div
                      key={idx}
                      className={`flex-grow border rounded flex flex-col items-center justify-between py-4 text-center transition-all ${bgStyle}`}
                      title={`${layer.name} (${layer.thick})`}
                    >
                      <span className="text-[9px] text-slate-500 font-bold font-display uppercase writing-mode-vertical">
                        {layer.thick}
                      </span>
                      <span className="text-[10px] text-white font-bold transform -rotate-90 origin-center whitespace-nowrap hidden sm:inline-block">
                        {layer.type === 'glass' ? 'Glass' : layer.type === 'pvb' ? 'PVB' : 'Air Gap'}
                      </span>
                    </div>
                  );
                })}
              </div>
              
              <p className="text-[10px] text-slate-500 mt-6 text-center italic max-w-sm">
                *Diagram shows laminated assemblies. Hover layers to view specs. Yellow indicates PVB, blue indicates glass structural units.
              </p>
            </div>

            {/* Properties and specs */}
            <div className="space-y-6">
              <div>
                <h4 className="text-white text-sm font-bold font-display">Envelope Performance Properties</h4>
                <p className="text-slate-400 text-xs mt-1">{selectedGlassData.description}</p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 pt-4 border-t border-slate-900">
                <div className="space-y-1">
                  <div className="flex items-center space-x-1 text-slate-500">
                    <Scale className="w-3.5 h-3.5" />
                    <span className="text-[10px] font-semibold uppercase tracking-wider">Weight</span>
                  </div>
                  <span className="text-white text-xs font-bold block">{selectedGlassData.weight}</span>
                </div>
                
                <div className="space-y-1">
                  <div className="flex items-center space-x-1 text-slate-500">
                    <Eye className="w-3.5 h-3.5" />
                    <span className="text-[10px] font-semibold uppercase tracking-wider">VLT (Light)</span>
                  </div>
                  <span className="text-white text-xs font-bold block">{selectedGlassData.transmission}</span>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center space-x-1 text-slate-500">
                    <Thermometer className="w-3.5 h-3.5" />
                    <span className="text-[10px] font-semibold uppercase tracking-wider">U-Value</span>
                  </div>
                  <span className="text-white text-xs font-bold block">{selectedGlassData.uValue}</span>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center space-x-1 text-slate-500">
                    <Settings className="w-3.5 h-3.5" />
                    <span className="text-[10px] font-semibold uppercase tracking-wider">g-Value</span>
                  </div>
                  <span className="text-white text-xs font-bold block">{selectedGlassData.gValue}</span>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center space-x-1 text-slate-500">
                    <Volume2 className="w-3.5 h-3.5" />
                    <span className="text-[10px] font-semibold uppercase tracking-wider">Acoustics</span>
                  </div>
                  <span className="text-white text-xs font-bold block">{selectedGlassData.acoustic}</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Wind Load Calculator */}
      <section className="mb-10">
        <div className="glass-panel p-8 sm:p-12 rounded-3xl border-white/5 relative overflow-hidden bg-gradient-to-br from-slate-900/60 to-slate-950/80">
          <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/5 blur-[120px] pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Form */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center space-x-2 text-sky-400">
                <Calculator className="w-5 h-5" />
                <span className="text-xs uppercase font-bold tracking-widest">Engineering Estimations</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-display">Wind Load & Glazing Calculator</h2>
              <p className="text-slate-400 text-xs leading-relaxed">
                Estimate velocity wind pressures ($kN/m^2$) acting on the structural facade based on wind speed, building height, and regional terrain categories.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
                {/* Wind Speed */}
                <div className="space-y-2">
                  <label className="text-[11px] text-slate-400 font-semibold uppercase tracking-wider block">Wind Speed (m/s)</label>
                  <input
                    type="range"
                    min="33"
                    max="55"
                    step="1"
                    value={windSpeed}
                    onChange={(e) => setWindSpeed(Number(e.target.value))}
                    className="w-full h-1 bg-slate-950 rounded-lg appearance-none cursor-pointer accent-sky-400"
                  />
                  <div className="flex justify-between text-xs font-bold text-white mt-1">
                    <span>33 m/s</span>
                    <span className="text-sky-400">{windSpeed} m/s</span>
                    <span>55 m/s</span>
                  </div>
                </div>

                {/* Building Height */}
                <div className="space-y-2">
                  <label className="text-[11px] text-slate-400 font-semibold uppercase tracking-wider block">Building Height (m)</label>
                  <input
                    type="range"
                    min="5"
                    max="150"
                    step="5"
                    value={height}
                    onChange={(e) => setHeight(Number(e.target.value))}
                    className="w-full h-1 bg-slate-950 rounded-lg appearance-none cursor-pointer accent-sky-400"
                  />
                  <div className="flex justify-between text-xs font-bold text-white mt-1">
                    <span>5m</span>
                    <span className="text-sky-400">{height}m</span>
                    <span>150m</span>
                  </div>
                </div>

                {/* Terrain Category */}
                <div className="space-y-2">
                  <label className="text-[11px] text-slate-400 font-semibold uppercase tracking-wider block">Terrain Exposure</label>
                  <select
                    value={terrain}
                    onChange={(e) => setTerrain(e.target.value)}
                    className="w-full px-3 py-2 rounded bg-slate-950 border border-slate-800 text-xs text-slate-200 focus:outline-none focus:border-sky-500"
                  >
                    <option value="Category-1">Category 1 (Open coast/lake)</option>
                    <option value="Category-2">Category 2 (Open flat land)</option>
                    <option value="Category-3">Category 3 (Suburban/Industrial)</option>
                    <option value="Category-4">Category 4 (City Center / High-Rise)</option>
                  </select>
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={handleCalculate}
                  className="px-6 py-2.5 rounded-full text-xs font-bold bg-sky-500 text-white hover:bg-sky-400 transition-all flex items-center space-x-1.5"
                >
                  <span>Simulate Calculations</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Result Board */}
            <div className="lg:col-span-5 bg-slate-950/65 border border-slate-900 rounded-2xl p-6 sm:p-8 space-y-6 flex flex-col justify-between min-h-[300px]">
              <div>
                <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest block">Estimated Wind Pressure</span>
                <div className="flex items-baseline space-x-2 mt-2">
                  <span className="text-4xl sm:text-5xl font-extrabold text-amber-500 font-display">{calcResult.pressure}</span>
                  <span className="text-slate-400 text-sm font-semibold">kN/m²</span>
                </div>
              </div>

              <div className="space-y-2 border-t border-slate-900 pt-4">
                <span className="text-[10px] text-sky-400 font-bold uppercase tracking-widest block">Recommended Glazing Assembly</span>
                <span className="text-white text-sm font-bold block">{calcResult.requiredGlass}</span>
                <p className="text-slate-400 text-[11px] leading-relaxed mt-1">
                  {calcResult.description}
                </p>
              </div>

              <div className="text-[10px] text-slate-500 italic mt-4 pt-2 border-t border-slate-900/60">
                *Calculations based on standard structural formulas. Final facade elevations must undergo comprehensive wind-tunnel verification.
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
