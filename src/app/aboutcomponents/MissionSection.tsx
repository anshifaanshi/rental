'use client';

import React from 'react';

export default function MissionSection() {
  return (
    <section className="relative w-full h-screen flex items-center overflow-hidden bg-white">
      {/* Content Container */}
      <div className="relative z-10 w-full h-full flex items-center">
        <div className="w-full max-w-7xl mx-auto px-8 md:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-end">
            {/* Text Content Box - Bottom Left */}
            <div className="bg-white p-10 md:p-14 lg:p-16 max-w-xl">
              <h2 
                className="text-4xl md:text-5xl lg:text-6xl mb-6 text-[#4a5858] leading-tight"
                style={{ 
                  fontFamily: 'Georgia, serif',
                  fontWeight: 300,
                  letterSpacing: '-0.01em'
                }}
              >
                Rent a Rooof.
                <br />
                ride freedom.
              </h2>

              <p 
                className="text-base md:text-lg text-[#5a6868] leading-relaxed"
                style={{ 
                  fontFamily: 'system-ui, -apple-system, sans-serif',
                  fontWeight: 400,
                  lineHeight: '1.7'
                }}
              >
                Rooted in our deep passion for motorcycles and a sense of adventure, a portion of every Rooof rental is dedicated to supporting sustainable travel—because exploring the open road goes beyond the ride, it's a commitment we live every day.
              </p>
            </div>

            {/* Empty space for second column */}
            <div className="hidden lg:block"></div>
          </div>
        </div>
      </div>

      {/* Background Image - Bike on white background */}
      <div className="absolute inset-0 z-0 bg-white">
        <img
          src="https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=1920&q=80"
          alt="Premium motorcycle on white background"
          className="w-full h-full object-cover object-center"
        />
      </div>
    </section>
  );
}