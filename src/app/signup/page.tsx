'use client'
import React, { useState } from 'react';

export default function Signup() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });

  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Image */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80"
          alt="Scooter"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#2c5f5f]/90 to-transparent"></div>
        
        {/* Overlay Content */}
        <div className="absolute inset-0 flex flex-col justify-between p-12">
          <div className="text-white text-3xl font-light tracking-[0.4em]">
            ROOOF
          </div>
          
          <div className="text-white">
            <h2 
              className="text-5xl font-extralight mb-6 leading-tight"
              style={{ 
                fontFamily: 'serif',
                fontWeight: 200,
                letterSpacing: '-0.02em'
              }}
            >
              Start your journey<br />with us today
            </h2>
            <p 
              className="text-sm tracking-[0.15em] uppercase font-light max-w-md"
              style={{ 
                fontFamily: 'sans-serif',
                fontWeight: 300
              }}
            >
              Experience the freedom of the ride—premium scooter rentals at your fingertips
            </p>
          </div>
        </div>
      </div>

      {/* Right Side - Signup Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center bg-[#f8f8f3] px-8 py-12">
        <div className="w-full max-w-md">
          {/* Logo for mobile */}
          <div className="lg:hidden text-center mb-8">
            <div className="text-[#2c5f5f] text-3xl font-light tracking-[0.4em]">
              ROOOF
            </div>
          </div>

          {/* Form Header */}
          <div className="mb-12">
            <h1 
              className="text-[#2c5f5f] text-4xl md:text-5xl font-extralight mb-4"
              style={{ 
                fontFamily: 'serif',
                fontWeight: 200,
                letterSpacing: '-0.01em'
              }}
            >
              Create Account
            </h1>
            <p className="text-[#4a5f5f] text-sm tracking-wide">
              Join us and start your adventure
            </p>
          </div>

          {/* Signup Form */}
          <div className="space-y-6">
            {/* First Name & Last Name */}
            <div className="grid grid-cols-2 gap-4">
              <div className="relative">
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('firstName')}
                  onBlur={() => setFocusedField(null)}
                  className="w-full px-0 py-3 bg-transparent border-b-2 border-[#d3d7cd] focus:border-[#2c5f5f] outline-none transition-colors text-[#2c5f5f]"
                  placeholder="First Name"
                />
                <div 
                  className={`absolute bottom-0 left-0 h-0.5 bg-[#2c5f5f] transition-all duration-300 ${
                    focusedField === 'firstName' ? 'w-full' : 'w-0'
                  }`}
                />
              </div>

              <div className="relative">
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('lastName')}
                  onBlur={() => setFocusedField(null)}
                  className="w-full px-0 py-3 bg-transparent border-b-2 border-[#d3d7cd] focus:border-[#2c5f5f] outline-none transition-colors text-[#2c5f5f]"
                  placeholder="Last Name"
                />
                <div 
                  className={`absolute bottom-0 left-0 h-0.5 bg-[#2c5f5f] transition-all duration-300 ${
                    focusedField === 'lastName' ? 'w-full' : 'w-0'
                  }`}
                />
              </div>
            </div>

            {/* Email */}
            <div className="relative">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onFocus={() => setFocusedField('email')}
                onBlur={() => setFocusedField(null)}
                className="w-full px-0 py-3 bg-transparent border-b-2 border-[#d3d7cd] focus:border-[#2c5f5f] outline-none transition-colors text-[#2c5f5f]"
                placeholder="Email Address"
              />
              <div 
                className={`absolute bottom-0 left-0 h-0.5 bg-[#2c5f5f] transition-all duration-300 ${
                  focusedField === 'email' ? 'w-full' : 'w-0'
                }`}
              />
            </div>

            {/* Phone */}
            <div className="relative">
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                onFocus={() => setFocusedField('phone')}
                onBlur={() => setFocusedField(null)}
                className="w-full px-0 py-3 bg-transparent border-b-2 border-[#d3d7cd] focus:border-[#2c5f5f] outline-none transition-colors text-[#2c5f5f]"
                placeholder="Phone Number"
              />
              <div 
                className={`absolute bottom-0 left-0 h-0.5 bg-[#2c5f5f] transition-all duration-300 ${
                  focusedField === 'phone' ? 'w-full' : 'w-0'
                }`}
              />
            </div>

            {/* Password */}
            <div className="relative">
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                onFocus={() => setFocusedField('password')}
                onBlur={() => setFocusedField(null)}
                className="w-full px-0 py-3 bg-transparent border-b-2 border-[#d3d7cd] focus:border-[#2c5f5f] outline-none transition-colors text-[#2c5f5f]"
                placeholder="Password"
              />
              <div 
                className={`absolute bottom-0 left-0 h-0.5 bg-[#2c5f5f] transition-all duration-300 ${
                  focusedField === 'password' ? 'w-full' : 'w-0'
                }`}
              />
            </div>

            {/* Confirm Password */}
            <div className="relative">
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                onFocus={() => setFocusedField('confirmPassword')}
                onBlur={() => setFocusedField(null)}
                className="w-full px-0 py-3 bg-transparent border-b-2 border-[#d3d7cd] focus:border-[#2c5f5f] outline-none transition-colors text-[#2c5f5f]"
                placeholder="Confirm Password"
              />
              <div 
                className={`absolute bottom-0 left-0 h-0.5 bg-[#2c5f5f] transition-all duration-300 ${
                  focusedField === 'confirmPassword' ? 'w-full' : 'w-0'
                }`}
              />
            </div>

            {/* Terms & Conditions */}
            <div className="flex items-start gap-3 pt-2">
              <input
                type="checkbox"
                id="terms"
                className="mt-1 w-4 h-4 accent-[#2c5f5f]"
              />
              <label htmlFor="terms" className="text-sm text-[#4a5f5f] leading-relaxed">
                I agree to the{' '}
                <span className="text-[#2c5f5f] cursor-pointer hover:underline">
                  Terms & Conditions
                </span>{' '}
                and{' '}
                <span className="text-[#2c5f5f] cursor-pointer hover:underline">
                  Privacy Policy
                </span>
              </label>
            </div>

            {/* Submit Button */}
            <button
              onClick={handleSubmit}
              className="w-full px-10 py-4 bg-[#2c5f5f] text-white text-xs tracking-[0.2em] uppercase font-medium hover:bg-[#234a4a] transition-all duration-300 mt-8"
              style={{ 
                fontFamily: 'sans-serif',
                letterSpacing: '0.15em'
              }}
            >
              Create Account
            </button>

            {/* Divider */}
            <div className="relative py-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-[#d3d7cd]"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-[#f8f8f3] text-[#4a5f5f]">OR</span>
              </div>
            </div>

            {/* Social Signup */}
            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={() => console.log('Google signup')}
                className="flex items-center justify-center gap-2 px-4 py-3 border-2 border-[#d3d7cd] hover:border-[#2c5f5f] transition-colors text-[#4a5f5f] hover:text-[#2c5f5f]"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                <span className="text-xs tracking-wide">Google</span>
              </button>

              <button
                onClick={() => console.log('Facebook signup')}
                className="flex items-center justify-center gap-2 px-4 py-3 border-2 border-[#d3d7cd] hover:border-[#2c5f5f] transition-colors text-[#4a5f5f] hover:text-[#2c5f5f]"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                <span className="text-xs tracking-wide">Facebook</span>
              </button>
            </div>

            {/* Sign In Link */}
            <div className="text-center pt-6">
              <p className="text-sm text-[#4a5f5f]">
                Already have an account?{' '}
                <span className="text-[#2c5f5f] cursor-pointer hover:underline font-medium">
                  Sign In
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}