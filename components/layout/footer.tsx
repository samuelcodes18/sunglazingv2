'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin } from 'lucide-react';
import { companyOverview } from '@/lib/data/partners';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { offices } = companyOverview;

  return (
    <footer className="bg-white border-t border-[#E2E8F0] pt-16 pb-8 relative overflow-hidden">
      {/* Subtle background tint */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[200px] bg-[#2563EB]/3 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Company Brief */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/images/logo.png"
                alt="Sun Glazing Logo"
                width={32}
                height={18}
                className="shrink-0"
              />
              <span className="font-display font-bold text-base tracking-wider text-[#0F172A]">
                SUN GLAZING
              </span>
            </Link>
            <p className="text-xs text-slate-500 leading-relaxed">
              Leading curtain wall glazing contractor in South India. Turnkey engineering solutions from concept-to-creation, specializing in high-rise envelopes, unitized structures, and tensile cable nets.
            </p>
            <div className="flex space-x-3 pt-2">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-[#EFF6FF] border border-[#E2E8F0] flex items-center justify-center text-slate-400 hover:text-[#2563EB] hover:border-[#2563EB]/30 transition-all"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-slate-700 uppercase tracking-wider mb-4 font-display">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-xs text-slate-500">
              <li>
                <Link href="/" className="hover:text-[#2563EB] transition-colors">Home Page</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#2563EB] transition-colors">Company Profile</Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#2563EB] transition-colors">Facade Systems</Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-[#2563EB] transition-colors">Projects Portfolio</Link>
              </li>
              <li>
                <Link href="/facilities" className="hover:text-[#2563EB] transition-colors">Manufacturing Plant</Link>
              </li>
              <li>
                <Link href="/awards" className="hover:text-[#2563EB] transition-colors">Accreditations</Link>
              </li>
              <li>
                <Link href="/clients" className="hover:text-[#2563EB] transition-colors">Our Clients</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#2563EB] transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Corporate Office Address */}
          <div>
            <h3 className="text-sm font-semibold text-slate-700 uppercase tracking-wider mb-4 font-display">
              {offices.corporate.title}
            </h3>
            <ul className="space-y-3 text-xs text-slate-500">
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" />
                <span>{offices.corporate.address}</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-[#2563EB] shrink-0" />
                <a href={`tel:${offices.corporate.phone}`} className="hover:text-[#0F172A] transition-colors">
                  {offices.corporate.phone}
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-[#2563EB] shrink-0" />
                <a href={`tel:${offices.corporate.mobile}`} className="hover:text-[#0F172A] transition-colors">
                  {offices.corporate.mobile}
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <Mail className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" />
                <div className="flex flex-col space-y-1">
                  <a href="mailto:vishnu@sunglazing.com" className="hover:text-[#0F172A] transition-colors">
                    vishnu@sunglazing.com
                  </a>
                  <a href="mailto:madhu@sunglazing.com" className="hover:text-[#0F172A] transition-colors">
                    madhu@sunglazing.com
                  </a>
                </div>
              </li>
            </ul>
          </div>

          {/* Factory Address */}
          <div>
            <h3 className="text-sm font-semibold text-slate-700 uppercase tracking-wider mb-4 font-display">
              {offices.factory.title}
            </h3>
            <ul className="space-y-3 text-xs text-slate-500">
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" />
                <span>{offices.factory.address}</span>
              </li>
              <li className="flex items-start space-x-2">
                <Mail className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" />
                <div className="flex flex-col space-y-1">
                  <a href="mailto:sales@sunglazing.com" className="hover:text-[#0F172A] transition-colors">
                    sales@sunglazing.com
                  </a>
                  <a href="mailto:projects@sunglazing.com" className="hover:text-[#0F172A] transition-colors">
                    projects@sunglazing.com
                  </a>
                </div>
              </li>
              <li className="pt-2 flex items-center space-x-1.5 text-[#2563EB] hover:text-[#1d4ed8] cursor-pointer">
                <Link href="/contact" className="flex items-center space-x-1">
                  <span>View interactive maps</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#E2E8F0] pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-400 space-y-4 md:space-y-0">
          <div className="text-center md:text-left leading-relaxed">
            <p className="font-semibold text-slate-600 font-display">
              Sun Glazing &amp; Fabrication Pvt Ltd (SGF India)
            </p>
            <p className="text-[11px] text-slate-400 mt-0.5">
              &copy; {currentYear} Sun Glazing. All rights reserved. Architectural Facade Systems and Extrusions.
            </p>
          </div>
          <div className="flex space-x-6 text-[11px]">
            <Link href="/contact" className="hover:text-slate-600 transition-colors">Inquire</Link>
            <Link href="/services" className="hover:text-slate-600 transition-colors">Engineering</Link>
            <Link href="/facilities" className="hover:text-slate-600 transition-colors">Production Capacity</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
