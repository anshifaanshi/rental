'use client';

import React from 'react';

export default function TestimonialsSection() {
  const testimonials = [
    {
      quote: "Amazing service! The car was in perfect condition and the booking process was seamless. Will definitely rent again for my next road trip.",
      feedback: "Feedback on Premium Car Rental",
      author: "by Sarah Johnson",
      delay: "0ms"
    },
    {
      quote: "I loved the freedom and flexibility of renting a bike for my coastal tour.",
      feedback: "Feedback on Bike Adventure",
      author: "2025",
      delay: "200ms"
    },
    {
      quote: "We were both stunned by the quality of the vehicles, it took us by surprise. Professional service and great rates.",
      feedback: "Feedback on Luxury Fleet",
      author: "by Michael & Emma Rodriguez",
      delay: "400ms"
    }
  ];

  return (
    <section className="bg-[#1a3a4a] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#6b9fb8] text-xs md:text-sm uppercase tracking-[0.3em] mb-6 font-medium">
            KIND WORDS
          </p>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight max-w-5xl mx-auto">
            <span className="inline-block bg-[#4a7a8a] px-3 py-1 mr-2">E</span>
            xceptional service is transforming journeys across the region
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="relative bg-[#152e3e] p-8 transform hover:-translate-y-2 transition-all duration-500"
              style={{ 
                animationDelay: testimonial.delay,
                animation: 'fadeInUp 0.8s ease-out forwards',
                opacity: 0,
                clipPath: `polygon(
                  2% 1%, 5% 0.5%, 8% 1%, 12% 0.8%, 15% 1.2%, 18% 0.5%, 22% 1%, 25% 0.8%, 28% 1.2%, 32% 0.5%, 35% 1%, 38% 0.8%, 42% 1.2%, 45% 0.5%, 48% 1%, 52% 0.8%, 55% 1.2%, 58% 0.5%, 62% 1%, 65% 0.8%, 68% 1.2%, 72% 0.5%, 75% 1%, 78% 0.8%, 82% 1.2%, 85% 0.5%, 88% 1%, 92% 0.8%, 95% 1.2%, 98% 0.5%,
                  99% 2%, 99.5% 5%, 99% 8%, 99.2% 12%, 98.8% 15%, 99.5% 18%, 99% 22%, 99.2% 25%, 98.8% 28%, 99.5% 32%, 99% 35%, 99.2% 38%, 98.8% 42%, 99.5% 45%, 99% 48%, 99.2% 52%, 98.8% 55%, 99.5% 58%, 99% 62%, 99.2% 65%, 98.8% 68%, 99.5% 72%, 99% 75%, 99.2% 78%, 98.8% 82%, 99.5% 85%, 99% 88%, 99.2% 92%, 98.8% 95%, 99.5% 98%,
                  98% 99%, 95% 99.5%, 92% 99%, 88% 99.2%, 85% 98.8%, 82% 99.5%, 78% 99%, 75% 99.2%, 72% 98.8%, 68% 99.5%, 65% 99%, 62% 99.2%, 58% 98.8%, 55% 99.5%, 52% 99%, 48% 99.2%, 45% 98.8%, 42% 99.5%, 38% 99%, 35% 99.2%, 32% 98.8%, 28% 99.5%, 25% 99%, 22% 99.2%, 18% 98.8%, 15% 99.5%, 12% 99%, 8% 99.2%, 5% 98.8%, 2% 99.5%,
                  1% 98%, 0.5% 95%, 1% 92%, 0.8% 88%, 1.2% 85%, 0.5% 82%, 1% 78%, 0.8% 75%, 1.2% 72%, 0.5% 68%, 1% 65%, 0.8% 62%, 1.2% 58%, 0.5% 55%, 1% 52%, 0.8% 48%, 1.2% 45%, 0.5% 42%, 1% 38%, 0.8% 35%, 1.2% 32%, 0.5% 28%, 1% 25%, 0.8% 22%, 1.2% 18%, 0.5% 15%, 1% 12%, 0.8% 8%, 1.2% 5%, 0.5% 2%
                )`
              }}
            >
              {/* Quote Icon */}
              <div className="mb-6">
                <svg 
                  width="48" 
                  height="48" 
                  viewBox="0 0 24 24" 
                  fill="#4a7a8a"
                  className="opacity-80"
                >
                  <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/>
                </svg>
              </div>

              {/* Quote Text */}
              <p className="text-white text-base md:text-lg leading-relaxed mb-8 font-light">
                {testimonial.quote}
              </p>

              {/* Author */}
              <div className="border-t border-[#4a7a8a]/30 pt-4">
                <p className="text-[#6b9fb8] font-medium mb-1">
                  {testimonial.feedback}
                </p>
                <p className="text-white/60 text-sm italic">
                  {testimonial.author}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
