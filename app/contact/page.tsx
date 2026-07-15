'use client';

import React, { useState } from 'react';
import { companyOverview } from '@/lib/data/partners';

export default function Contact() {
  const { offices } = companyOverview;

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    location: '',
    projectType: 'Commercial',
    facadeSystem: 'unitized-curtain-walling',
    area: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.company) {
      setError('Please fill in the required fields (Name, Email, and Company).');
      return;
    }
    setError('');
    setIsSubmitted(true);
    setFormData({
      name: '',
      email: '',
      company: '',
      location: '',
      projectType: 'Commercial',
      facadeSystem: 'unitized-curtain-walling',
      area: '',
      message: ''
    });
  };

  return (
    <div className="relative w-full overflow-hidden min-h-screen mullion-grid pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pt-10">
      
      {/* Header */}
      <section className="text-center max-w-3xl mx-auto mb-20 space-y-6 mt-10">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#2563EB] text-xs font-semibold uppercase tracking-wider">
          <span>Inquire Now</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0F172A] font-display tracking-tight">
          Contact SGF India
        </h1>
        <p className="text-slate-600 text-xs sm:text-sm max-w-xl mx-auto">
          Contact our corporate project estimation desk. Submit structural drawings, facade parameters, or coordinate requests.
        </p>
      </section>

      {/* Grid of details & B2B form */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-24">
        
        {/* Contact Info (LHS) */}
        <div className="lg:col-span-5 space-y-8">
          <div className="space-y-4">
            <h2 className="text-[#0F172A] text-xl sm:text-2xl font-extrabold font-display">Corporate Channels</h2>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              We respond to official RFPs and project inquiries within 24 business hours. Connect with our engineering directors.
            </p>
          </div>

          <div className="space-y-6">
            {/* Corporate Office */}
            <div className="glass-panel p-6 rounded-xl border-[#E2E8F0] space-y-3 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 blur-2xl pointer-events-none" />
              <div className="flex items-center space-x-2 text-[#2563EB]">
                <h3 className="text-[#0F172A] text-sm font-bold font-display">{offices.corporate.title}</h3>
              </div>
              <p className="text-slate-600 text-xs leading-relaxed">{offices.corporate.address}</p>
              <div className="divide-y divide-[#E2E8F0] pt-2 text-[11px]">
                <div className="py-2.5 flex justify-between">
                  <span className="text-slate-500">Boardline Phone:</span>
                  <a href={`tel:${offices.corporate.phone}`} className="text-slate-700 font-semibold hover:text-[#0F172A]">
                    {offices.corporate.phone}
                  </a>
                </div>
                <div className="py-2.5 flex justify-between">
                  <span className="text-slate-500">Director Mobile:</span>
                  <a href={`tel:${offices.corporate.mobile}`} className="text-slate-700 font-semibold hover:text-[#0F172A]">
                    {offices.corporate.mobile}
                  </a>
                </div>
                <div className="py-2.5 flex justify-between">
                  <span className="text-slate-500">Direct Director Email:</span>
                  <a href="mailto:madhu@sunglazing.com" className="text-slate-700 font-semibold hover:text-[#0F172A]">
                    madhu@sunglazing.com
                  </a>
                </div>
              </div>
            </div>

            {/* Manufacturing Factory */}
            <div className="glass-panel p-6 rounded-xl border-[#E2E8F0] space-y-3 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-amber-50 blur-2xl pointer-events-none" />
              <div className="flex items-center space-x-2 text-amber-500">
                <h3 className="text-[#0F172A] text-sm font-bold font-display">{offices.factory.title}</h3>
              </div>
              <p className="text-slate-600 text-xs leading-relaxed">{offices.factory.address}</p>
              <div className="divide-y divide-[#E2E8F0] pt-2 text-[11px]">
                <div className="py-2.5 flex justify-between">
                  <span className="text-slate-500">Estimations Desk Email:</span>
                  <a href="mailto:sales@sunglazing.com" className="text-slate-700 font-semibold hover:text-[#0F172A]">
                    sales@sunglazing.com
                  </a>
                </div>
                <div className="py-2.5 flex justify-between">
                  <span className="text-slate-500">Project Operations Email:</span>
                  <a href="mailto:projects@sunglazing.com" className="text-slate-700 font-semibold hover:text-[#0F172A]">
                    projects@sunglazing.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Lead Form (RHS) */}
        <div className="lg:col-span-7 glass-panel p-6 sm:p-8 rounded-2xl border-[#E2E8F0] relative bg-gradient-to-br from-blue-50/50 to-white">
          <h2 className="text-[#0F172A] text-lg font-bold font-display mb-2">Request Structural Estimate</h2>
          <p className="text-slate-500 text-xs mb-6">Fill in the technical scope details below. SGF India engineering desk will follow up.</p>
          
          {isSubmitted ? (
            <div className="text-center py-10 space-y-4">
              <h3 className="text-[#0F172A] text-base font-bold font-display">Estimate Request Received</h3>
              <p className="text-slate-500 text-xs max-w-sm mx-auto leading-relaxed">
                Thank you for contacting Sun Glazing. Your specification metrics have been routed to our project managers.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="mt-4 px-5 py-2 rounded-full text-xs font-semibold bg-slate-100 border border-slate-200 text-slate-600 hover:text-[#0F172A] hover:bg-slate-200 transition-colors"
              >
                Submit another inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              {error && (
                <div className="p-3 bg-red-50 border border-red-200 text-red-600 rounded-lg">
                  {error}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name */}
                <div className="space-y-1.5">
                  <label className="text-slate-500 font-semibold uppercase tracking-wider block">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="E.g. Mr. Rajesh Kumar"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-[#E2E8F0] text-[#0F172A] placeholder-slate-400 focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB]/20"
                  />
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <label className="text-slate-500 font-semibold uppercase tracking-wider block">Corporate Email *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="E.g. rkumar@company.com"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-[#E2E8F0] text-[#0F172A] placeholder-slate-400 focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB]/20"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Company Name */}
                <div className="space-y-1.5">
                  <label className="text-slate-500 font-semibold uppercase tracking-wider block">PMC / Developer Company *</label>
                  <input
                    type="text"
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="E.g. Vasavi Group"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-[#E2E8F0] text-[#0F172A] placeholder-slate-400 focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB]/20"
                  />
                </div>

                {/* Project Location */}
                <div className="space-y-1.5">
                  <label className="text-slate-500 font-semibold uppercase tracking-wider block">Project Location (City)</label>
                  <input
                    type="text"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    placeholder="E.g. Hyderabad Gachibowli"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-[#E2E8F0] text-[#0F172A] placeholder-slate-400 focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB]/20"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {/* Project Type */}
                <div className="space-y-1.5">
                  <label className="text-slate-500 font-semibold uppercase tracking-wider block">Sector Type</label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-[#E2E8F0] text-[#0F172A] focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB]/20"
                  >
                    <option value="Commercial">Commercial/IT Park</option>
                    <option value="Hospitality">Hospitality/Hotel</option>
                    <option value="Infrastructure">Infrastructure/Aero</option>
                    <option value="Residential">Residential High-Rise</option>
                  </select>
                </div>

                {/* Facade System Interest */}
                <div className="space-y-1.5">
                  <label className="text-slate-500 font-semibold uppercase tracking-wider block">System Profile</label>
                  <select
                    value={formData.facadeSystem}
                    onChange={(e) => setFormData({ ...formData, facadeSystem: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-[#E2E8F0] text-[#0F172A] focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB]/20"
                  >
                    <option value="unitized-curtain-walling">Unitized System</option>
                    <option value="semi-unitized-curtain-wall">Semi-Unitized</option>
                    <option value="stick-curtain-walling">Stick Curtain wall</option>
                    <option value="tension-cable-facade">Tension Cable Net</option>
                    <option value="bullet-proof-glazing">Bullet Proof Glazing</option>
                    <option value="kinetic-facade">Kinetic Facade</option>
                  </select>
                </div>

                {/* Glazing Area */}
                <div className="space-y-1.5">
                  <label className="text-slate-500 font-semibold uppercase tracking-wider block">Glazing Area (Sq.Ft/M²)</label>
                  <input
                    type="text"
                    value={formData.area}
                    onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                    placeholder="E.g. 50,000 Sq.Ft"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-[#E2E8F0] text-[#0F172A] placeholder-slate-400 focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB]/20"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label className="text-slate-500 font-semibold uppercase tracking-wider block">Specifications & Special Demands</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Detail any specific glass performance requirements, acoustic margins, wind-load ratings..."
                  rows={4}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-[#E2E8F0] text-[#0F172A] placeholder-slate-400 focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB]/20"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full px-6 py-3 rounded-lg font-bold bg-[#2563EB] text-white hover:bg-[#1d4ed8] shadow-lg shadow-blue-200 hover:shadow-blue-300 transition-all flex items-center justify-center space-x-2"
                >
                  <span>Submit Estimate Request</span>
                </button>
              </div>
            </form>
          )}
        </div>

      </section>

      {/* Interactive Maps Section */}
      <section>
        <div className="text-center mb-12 space-y-3">
          <span className="text-xs uppercase font-bold text-[#2563EB] tracking-widest">Office & Factory Coordinates</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] font-display">Interactive Locations</h2>
          <p className="text-slate-500 text-xs">Access digital maps and direction guides to coordinate project visits.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Corporate Office Location Map */}
          <div className="glass-panel p-4 rounded-2xl border-[#E2E8F0] space-y-4">
            <span className="text-[10px] text-[#2563EB] font-bold uppercase tracking-widest block">Corporate Office, Begumpet</span>
            <div className="relative rounded-xl overflow-hidden h-72 w-full bg-slate-100 border border-[#E2E8F0]">
              <iframe
                title="Begumpet Office Map"
                src="https://maps.google.com/maps?q=Aditya%20West%20End,%20Uma%20Nagar,%20Begumpet,%20Hyderabad&t=&z=14&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                className="border-0"
                allowFullScreen
                loading="lazy"
              />
            </div>
            <a
              href="https://maps.google.com/?cid=1062142827503232660"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center space-x-1.5 text-xs text-[#2563EB] font-semibold hover:underline"
            >
              <span>Open in Google Maps</span>
            </a>
          </div>

          {/* Factory Location Map */}
          <div className="glass-panel p-4 rounded-2xl border-[#E2E8F0] space-y-4">
            <span className="text-[10px] text-amber-500 font-bold uppercase tracking-widest block">Chandenvalle Manufacturing Facility</span>
            <div className="relative rounded-xl overflow-hidden h-72 w-full bg-slate-100 border border-[#E2E8F0]">
              <iframe
                title="Chandenvalle Factory Map"
                src="https://maps.google.com/maps?q=Chandenvalle,%20Telangana&t=&z=13&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                className="border-0"
                allowFullScreen
                loading="lazy"
              />
            </div>
            <a
              href="https://www.google.com/maps/dir//Chandenvalle,+Telangana"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center space-x-1.5 text-xs text-amber-500 font-semibold hover:underline"
            >
              <span>Get Directions to Plant</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
