'use client'
import React, { useState, useEffect } from 'react';

export default function ScooterRentalHero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative w-full min-h-screen bg-[#f8f8f3] overflow-hidden flex items-center justify-center">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-96 h-96 bg-[#2c5f5f]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-[#d3d7cd]/30 rounded-full blur-3xl" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 sm:px-8 lg:px-16 py-12 pb-32">
        <div className="flex flex-col items-center justify-center text-center">
          
          {/* Text Content - Centered */}
          <div 
            className="w-full space-y-8 lg:space-y-10 flex flex-col justify-center items-center"
            style={{ 
              transform: `translateY(${scrollY * 0.1}px)`,
              transition: 'transform 0.1s ease-out'
            }}
          >
            <div className="space-y-6 w-full flex flex-col items-center">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-px bg-[#2c5f5f]"></div>
                <span className="text-xs tracking-[0.3em] uppercase text-[#4a5f5f] font-medium">
                  Premium Rentals
                </span>
                <div className="w-12 h-px bg-[#2c5f5f]"></div>
              </div>
              
              <h1 
                className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-extralight text-[#2c5f5f] leading-[0.9]"
                style={{ 
                  fontFamily: 'serif',
                  fontWeight: 200,
                  letterSpacing: '-0.03em'
                }}
              >
                Ride in Freedom
              </h1>
            </div>
            
            <div className="space-y-4 w-full flex flex-col items-center pb-52">
              <p 
                className="text-xl sm:text-2xl md:text-3xl text-[#4a5f5f]/80 font-light"
                style={{ fontFamily: 'sans-serif' }}
              >
                that takes you anywhere
              </p>
            </div>

            <p className="text-sm md:text-base text-[#4a5f5f]/70 max-w-2xl leading-relaxed">
              Experience the ultimate riding freedom with our premium scooter collection. 
              From city streets to coastal roads, discover your perfect ride today.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <button 
                className="group px-8 py-4 bg-[#2c5f5f] text-white text-xs tracking-[0.2em] uppercase font-medium hover:bg-[#234a4a] transition-all duration-300 flex items-center gap-3"
                style={{ letterSpacing: '0.15em' }}
              >
                Book Your Ride
                <svg 
                  width="16" 
                  height="16" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2"
                  className="group-hover:translate-x-1 transition-transform"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>

              <button 
                className="px-8 py-4 border-2 border-[#2c5f5f] text-[#2c5f5f] text-xs tracking-[0.2em] uppercase font-medium hover:bg-[#2c5f5f] hover:text-white transition-all duration-300"
                style={{ letterSpacing: '0.15em' }}
              >
                View Collection
              </button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-12 pt-8 border-t border-[#d3d7cd] w-full max-w-2xl">
              <div>
                <div className="text-3xl font-light text-[#2c5f5f]">500+</div>
                <div className="text-xs tracking-wider uppercase text-[#4a5f5f]/60">Scooters</div>
              </div>
              <div>
                <div className="text-3xl font-light text-[#2c5f5f]">50+</div>
                <div className="text-xs tracking-wider uppercase text-[#4a5f5f]/60">Locations</div>
              </div>
              <div>
                <div className="text-3xl font-light text-[#2c5f5f]">24/7</div>
                <div className="text-xs tracking-wider uppercase text-[#4a5f5f]/60">Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-xs tracking-[0.2em] uppercase text-[#4a5f5f]/60">Scroll</span>
        <div className="w-6 h-10 border-2 border-[#2c5f5f]/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-[#2c5f5f] rounded-full"></div>
        </div>
      </div>
    </div>
  );
}