'use client';

import React from 'react';
import Image from 'next/image';

const logos = [
  { src: '/clients/client-1.png', alt: 'Client 1' },
  { src: '/clients/client-2.png', alt: 'Client 2' },
  { src: '/clients/client-3.png', alt: 'Client 3' },
  { src: '/clients/client-4.png', alt: 'Client 4' },
  { src: '/clients/client-5.png', alt: 'Client 5' },
  { src: '/clients/client-7.png', alt: 'Client 7' },
  { src: '/clients/client-8.png', alt: 'Client 8' },
  { src: '/clients/client-9.png', alt: 'Client 9' },
  { src: '/clients/client-10.png', alt: 'Client 10' },
  { src: '/clients/client-11.png', alt: 'Client 11' },
  { src: '/clients/client-12.png', alt: 'Client 12' },
  { src: '/clients/client-13.png', alt: 'Client 13' },
  { src: '/clients/client-14.png', alt: 'Client 14' },
  { src: '/clients/client-15.png', alt: 'Client 15' },
  { src: '/clients/client-16.png', alt: 'Client 16' },
  { src: '/clients/client-17.png', alt: 'Client 17' },
  { src: '/clients/client-18.png', alt: 'Client 18' },
  { src: '/clients/client-19.png', alt: 'Client 19' },
  { src: '/clients/client-20.png', alt: 'Client 20' },
  { src: '/clients/client-21.png', alt: 'Client 21' },
  { src: '/clients/client-22.png', alt: 'Client 22' },
  { src: '/clients/client-23.png', alt: 'Client 23' },
  { src: '/clients/client-24.png', alt: 'Client 24' },
  { src: '/clients/client-25.png', alt: 'Client 25' },
  { src: '/clients/client-26.png', alt: 'Client 26' },
  { src: '/clients/client-27.png', alt: 'Client 27' },
  { src: '/clients/client-28.png', alt: 'Client 28' },
  { src: '/clients/AUREAN-LOGO.png', alt: 'Aurean' },
  { src: '/clients/ESKAR-LOGO.png', alt: 'Eskar' },
  { src: '/clients/Terminus-Logo.png', alt: 'Terminus' },
];

export default function ClientMarquee() {
  return (
    <section className="py-16 border-t border-b border-[#CBD5E1] bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 mb-10">
        <p className="text-slate-500 text-[11px] font-semibold tracking-[0.22em] uppercase text-center">
          Trusted by Industry Leaders
        </p>
      </div>

      <div className="relative w-full">
        <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

        <div className="marquee-row">
          <div className="marquee-track animate-marquee-left">
            {[...logos, ...logos, ...logos].map((logo, i) => (
              <div
                key={i}
                className="flex items-center justify-center shrink-0 mx-4 sm:mx-6 md:mx-8 h-16 sm:h-20 md:h-24 w-32 sm:w-40 md:w-48"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={192}
                  height={96}
                  className="max-h-full w-auto object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
