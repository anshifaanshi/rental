'use client';

import React, { useState } from 'react';
import FullscreenMenu from '../components/Navbar';
import Navbar from '../components/Menu';
import Footer from '../components/Footer';

function Contact() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  return (
    <>
      {/* Fullscreen Menu Overlay */}
      <FullscreenMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      
      <div className="min-h-screen bg-[#f8f8f3]">
        {/* Navbar */}
        <Navbar onMenuClick={() => setIsMenuOpen(true)} transparent={false} />
        
        {/* Hero Section */}
        <div className="relative h-[50vh] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?w=1920&q=80"
            alt="Contact us"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <h1 
              className="text-white text-6xl md:text-7xl lg:text-8xl font-light"
              style={{ 
                fontFamily: 'Georgia, serif',
                fontWeight: 300,
                letterSpacing: '-0.01em'
              }}
            >
              Get in Touch
            </h1>
          </div>
        </div>

        {/* Contact Content */}
        <div className="max-w-7xl mx-auto px-8 md:px-16 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Information */}
            <div>
              <h2 
                className="text-4xl md:text-5xl text-[#2c5f5f] mb-8"
                style={{ 
                  fontFamily: 'Georgia, serif',
                  fontWeight: 300
                }}
              >
                Let's start your journey
              </h2>
              
              <p className="text-lg text-[#5a6868] mb-12 leading-relaxed">
                Whether you're planning your next adventure or have questions about our bikes, we're here to help. Reach out and let's make your ride unforgettable.
              </p>

              {/* Contact Details */}
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#2c5f5f] flex items-center justify-center flex-shrink-0">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-[#2c5f5f] mb-2">Visit Us</h3>
                    <p className="text-[#5a6868]">
                      123 Rider Street<br />
                      Doha, Qatar 00000
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#2c5f5f] flex items-center justify-center flex-shrink-0">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-[#2c5f5f] mb-2">Call Us</h3>
                    <p className="text-[#5a6868]">
                      +974 1234 5678<br />
                      Mon-Sat: 8am - 8pm
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#2c5f5f] flex items-center justify-center flex-shrink-0">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-[#2c5f5f] mb-2">Email Us</h3>
                    <p className="text-[#5a6868]">
                      info@rooof.com<br />
                      support@rooof.com
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-12 pt-12 border-t border-gray-300">
                <h3 className="text-xl font-medium text-[#2c5f5f] mb-4">Follow Our Journey</h3>
                <div className="flex gap-4">
                  <button className="w-12 h-12 bg-[#2c5f5f] hover:bg-[#234a4a] transition-colors flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </button>
                  <button className="w-12 h-12 bg-[#2c5f5f] hover:bg-[#234a4a] transition-colors flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </button>
                  <button className="w-12 h-12 bg-[#2c5f5f] hover:bg-[#234a4a] transition-colors flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-10 md:p-12 shadow-lg">
              <h2 
                className="text-3xl md:text-4xl text-[#2c5f5f] mb-8"
                style={{ 
                  fontFamily: 'Georgia, serif',
                  fontWeight: 300
                }}
              >
                Send us a message
              </h2>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-[#2c5f5f] mb-2 uppercase tracking-wider">
                    Your Name
                  </label>
                  <input 
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 focus:border-[#2c5f5f] focus:outline-none transition-colors"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#2c5f5f] mb-2 uppercase tracking-wider">
                    Email Address
                  </label>
                  <input 
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 focus:border-[#2c5f5f] focus:outline-none transition-colors"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#2c5f5f] mb-2 uppercase tracking-wider">
                    Phone Number
                  </label>
                  <input 
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 focus:border-[#2c5f5f] focus:outline-none transition-colors"
                    placeholder="+974 1234 5678"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#2c5f5f] mb-2 uppercase tracking-wider">
                    Your Message
                  </label>
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 border-2 border-gray-200 focus:border-[#2c5f5f] focus:outline-none transition-colors resize-none"
                    placeholder="Tell us about your rental needs or ask us anything..."
                  ></textarea>
                </div>

                <button 
                  onClick={handleSubmit}
                  className="w-full px-8 py-4 bg-[#2c5f5f] text-white text-sm font-medium uppercase tracking-wider hover:bg-[#234a4a] transition-colors"
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="w-full h-96 bg-gray-200">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.698158457262!2d51.52177831501754!3d25.286106383856442!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e45c534ffdce87f%3A0x1cfa88cf812b4032!2sDoha%2C%20Qatar!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <Footer/>
      </div>
    </>
  );
}

export default Contact;