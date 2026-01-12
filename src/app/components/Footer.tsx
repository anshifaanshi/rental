'use client';

import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#1a3a4a] text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <h3 
              className="text-3xl font-light mb-6 text-[#FFD700]" 
              style={{ fontFamily: 'serif', letterSpacing: '0.05em' }}
            >
              RIDE+DRIVE
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed mb-6 font-light">
              Premium car and bike rental services for unforgettable journeys. 
              Experience the freedom of the open road with our exceptional fleet.
            </p>
            {/* Social Media Icons */}
            <div className="flex gap-4">
              <a 
                href="#facebook" 
                className="w-10 h-10 rounded-full border border-[#4a7a8a] flex items-center justify-center hover:bg-[#4a7a8a] transition-all"
                aria-label="Facebook"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
              <a 
                href="#instagram" 
                className="w-10 h-10 rounded-full border border-[#4a7a8a] flex items-center justify-center hover:bg-[#4a7a8a] transition-all"
                aria-label="Instagram"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
              <a 
                href="#twitter" 
                className="w-10 h-10 rounded-full border border-[#4a7a8a] flex items-center justify-center hover:bg-[#4a7a8a] transition-all"
                aria-label="Twitter"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>
                </svg>
              </a>
              <a 
                href="#linkedin" 
                className="w-10 h-10 rounded-full border border-[#4a7a8a] flex items-center justify-center hover:bg-[#4a7a8a] transition-all"
                aria-label="LinkedIn"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect x="2" y="9" width="4" height="12"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[#FFD700] text-lg font-semibold mb-6 tracking-wider uppercase">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-gray-300 hover:text-[#FFD700] transition-colors text-sm font-light">
                  About Us
                </a>
              </li>
              <li>
                <a href="#vehicles" className="text-gray-300 hover:text-[#FFD700] transition-colors text-sm font-light">
                  Our Fleet
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-[#FFD700] transition-colors text-sm font-light">
                  Services
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-gray-300 hover:text-[#FFD700] transition-colors text-sm font-light">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-300 hover:text-[#FFD700] transition-colors text-sm font-light">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-[#FFD700] transition-colors text-sm font-light">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[#FFD700] text-lg font-semibold mb-6 tracking-wider uppercase">
              Services
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#luxury-cars" className="text-gray-300 hover:text-[#FFD700] transition-colors text-sm font-light">
                  Luxury Cars
                </a>
              </li>
              <li>
                <a href="#sports-bikes" className="text-gray-300 hover:text-[#FFD700] transition-colors text-sm font-light">
                  Sports Bikes
                </a>
              </li>
              <li>
                <a href="#suv-rental" className="text-gray-300 hover:text-[#FFD700] transition-colors text-sm font-light">
                  SUV Rental
                </a>
              </li>
              <li>
                <a href="#long-term" className="text-gray-300 hover:text-[#FFD700] transition-colors text-sm font-light">
                  Long Term Rental
                </a>
              </li>
              <li>
                <a href="#chauffeur" className="text-gray-300 hover:text-[#FFD700] transition-colors text-sm font-light">
                  Chauffeur Service
                </a>
              </li>
              <li>
                <a href="#corporate" className="text-gray-300 hover:text-[#FFD700] transition-colors text-sm font-light">
                  Corporate Packages
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-[#FFD700] text-lg font-semibold mb-6 tracking-wider uppercase">
              Contact Info
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFD700" strokeWidth="2" className="mt-1 flex-shrink-0">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                <span className="text-gray-300 text-sm font-light">
                  123 Main Street, City Center<br/>Downtown, State 12345
                </span>
              </li>
              <li className="flex items-center gap-3">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFD700" strokeWidth="2" className="flex-shrink-0">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                <span className="text-gray-300 text-sm font-light">
                  +1 (555) 123-4567
                </span>
              </li>
              <li className="flex items-center gap-3">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFD700" strokeWidth="2" className="flex-shrink-0">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                <span className="text-gray-300 text-sm font-light">
                  info@ridedrive.com
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-[#4a7a8a]/30 pt-8 mb-8">
          <div className="max-w-2xl mx-auto text-center">
            <h4 className="text-2xl font-light text-white mb-4" style={{ fontFamily: 'serif' }}>
              Subscribe to Our Newsletter
            </h4>
            <p className="text-gray-300 text-sm mb-6 font-light">
              Get exclusive offers and updates on our latest vehicles
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-[#152e3e] border border-[#4a7a8a]/30 text-white placeholder-gray-400 focus:outline-none focus:border-[#FFD700] rounded"
              />
              <button 
                className="px-8 py-3 bg-[#2c5f5f] hover:bg-[#234a4a] text-white font-medium transition-all rounded"
                style={{
                  clipPath: `polygon(
                    1% 3%, 3% 1.5%, 6% 2%, 9% 1%, 12% 1.8%, 15% 1.2%, 18% 1.5%, 85% 1%, 88% 1.8%, 91% 1.2%, 94% 1.5%, 97% 1%, 98.5% 2.5%,
                    99% 4%, 99.2% 7%, 99% 90%, 99.3% 93%, 98.5% 96.5%,
                    96% 98.5%, 93% 99.2%, 90% 99%, 15% 99.5%, 12% 99.2%, 9% 99.6%, 6% 99%, 3% 99.5%, 1.5% 98%,
                    0.8% 96%, 0.5% 93%, 0.8% 10%, 0.5% 6%, 0.8% 4%
                  )`
                }}
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#4a7a8a]/30 bg-[#152e3e]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm font-light">
              © 2025 Ride+Drive. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#privacy" className="text-gray-400 hover:text-[#FFD700] text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#terms" className="text-gray-400 hover:text-[#FFD700] text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#cookies" className="text-gray-400 hover:text-[#FFD700] text-sm transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}