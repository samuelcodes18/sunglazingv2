'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Projects', path: '/projects' },
  { name: 'Facilities', path: '/facilities' },
  { name: 'Awards', path: '/awards' },
  { name: 'Our Clients', path: '/clients' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white border-b border-[#E2E8F0] ${
        scrolled ? 'shadow-sm' : ''
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="flex items-center justify-between h-[72px]">

          {/* ── Logo ── */}
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src="/images/logo.png"
              alt="Sun Glazing Logo"
              width={36}
              height={21}
              className="shrink-0"
              priority
            />
            <div>
              <div className="font-display font-bold text-[15px] tracking-[0.06em] leading-none text-[#0F172A]">
                SUN GLAZING
              </div>
              <div className="text-[9px] tracking-[0.25em] font-medium leading-none mt-[3px] text-slate-500">
                FACADE GLAZING
              </div>
            </div>
          </Link>

          {/* ── Desktop nav ── */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const active = pathname === link.path;
              return (
                <Link
                  key={link.path}
                  href={link.path}
                  className={`relative px-4 py-2 text-[13px] font-medium tracking-wide transition-colors ${
                    active
                      ? 'text-[#2563EB]'
                      : 'text-slate-600 hover:text-[#0F172A]'
                  }`}
                >
                  {link.name}
                  {active && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute bottom-0 left-3 right-3 h-[2px] bg-[#2563EB] rounded-full"
                      transition={{ type: 'spring', stiffness: 420, damping: 36 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* ── Right side ── */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/contact?type=estimate"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#2563EB] text-white text-[12px] font-semibold tracking-wide hover:bg-[#1d4ed8] transition-all shadow-sm shadow-blue-200"
            >
              Get Estimate
            </Link>
          </div>

          {/* ── Mobile toggle ── */}
          <button
            onClick={() => setIsOpen(v => !v)}
            className="md:hidden p-2 text-slate-600 hover:text-[#0F172A] transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* ── Mobile drawer ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
            className="md:hidden bg-white border-b border-[#E2E8F0] overflow-hidden shadow-lg"
          >
            <nav className="px-6 py-6 flex flex-col gap-1">
              <Link
                href="/"
                onClick={() => setIsOpen(false)}
                className={`px-4 py-3 rounded-xl text-[14px] font-medium transition-colors ${
                  pathname === '/' ? 'text-[#2563EB] bg-[#EFF6FF]' : 'text-slate-600 hover:text-[#0F172A] hover:bg-slate-50'
                }`}
              >
                Home
              </Link>
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-3 rounded-xl text-[14px] font-medium transition-colors ${
                    pathname === link.path ? 'text-[#2563EB] bg-[#EFF6FF]' : 'text-slate-600 hover:text-[#0F172A] hover:bg-slate-50'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-[#E2E8F0] mt-2">
                <Link
                  href="/contact?type=estimate"
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center px-6 py-3 rounded-full bg-[#2563EB] text-white text-[13px] font-semibold hover:bg-[#1d4ed8] transition-all shadow-sm"
                >
                  Get Estimate
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
