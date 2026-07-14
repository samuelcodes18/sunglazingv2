'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowRight, Sun } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Systems', path: '/systems' },
    { name: 'Projects', path: '/projects' },
    { name: 'Facilities', path: '/facilities' },
    { name: 'Awards', path: '/awards' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-950/75 backdrop-blur-md border-b border-slate-800/60 shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-amber-500 to-sky-500 p-[1px]">
              <div className="w-full h-full bg-slate-950 rounded-[7px] flex items-center justify-center">
                <Sun className="w-5 h-5 text-amber-400 group-hover:rotate-45 transition-transform duration-500" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-lg tracking-wider text-white">
                SUN GLAZING
              </span>
              <span className="text-[10px] tracking-[0.2em] text-sky-400 font-medium leading-none">
                FACADE ENGINEERING
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.path;
              return (
                <Link
                  key={link.path}
                  href={link.path}
                  className={`px-4 py-2 rounded-full font-medium text-sm transition-all relative ${
                    isActive
                      ? 'text-sky-400'
                      : 'text-slate-300 hover:text-white hover:bg-slate-900/40'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-4 right-4 h-[2px] bg-gradient-to-r from-sky-400 to-amber-500 rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Call to Action */}
          <div className="hidden md:block">
            <Link
              href="/contact?type=estimate"
              className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full text-xs font-semibold bg-gradient-to-r from-sky-500 to-sky-600 text-white shadow-lg shadow-sky-500/15 hover:shadow-sky-500/25 hover:from-sky-400 hover:to-sky-500 transition-all group"
            >
              <span>Get Estimate</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-400 hover:text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-slate-950 border-b border-slate-800/80 overflow-hidden"
          >
            <div className="px-2 pt-2 pb-6 space-y-1 sm:px-3">
              {navLinks.map((link) => {
                const isActive = pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    href={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-3 rounded-xl text-base font-medium transition-all ${
                      isActive
                        ? 'bg-slate-900 text-sky-400 font-semibold'
                        : 'text-slate-300 hover:bg-slate-900/50 hover:text-white'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
              <div className="pt-4 px-4">
                <Link
                  href="/contact?type=estimate"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center space-x-2 w-full py-3.5 rounded-xl font-semibold bg-gradient-to-r from-sky-500 to-sky-600 text-white text-sm"
                >
                  <span>Get Estimate</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
