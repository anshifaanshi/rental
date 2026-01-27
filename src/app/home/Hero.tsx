'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';

interface Slide {
  image: string;
  title: string;
  subtitle: string;
}

interface MenuItem {
  name: string;
  route: string;
  image: string;
  color: string;
}

const menuItems: MenuItem[] = [
  {
    name: 'Home',
    route: '/',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    color: '#3d5a5a'
  },
  {
    name: 'About',
    route: '/about',
    image: 'https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=800&q=80',
    color: '#2d4a4a'
  },
  {
    name: 'Bikes',
    route: '/bikes',
    image: 'https://wallpaperaccess.com/full/4441.jpg',
    color: '#1d3a3a'
  },
  {
    name: 'Contact',
    route: '/contact',
    image: 'http://getwallpapers.com/wallpaper/full/2/a/e/1099643-vintage-motorcycle-wallpaper-3840x2160-phone.jpg',
    color: '#0d2a2a'
  }
];

const slides: Slide[] = [
  {
    image: 'https://wallpaperaccess.com/full/4441.jpg',
    title: 'Premium scooters for rent',
    subtitle: 'DISCOVER THE FREEDOM OF THE RIDE—RENT YOUR PERFECT SCOOTER TODAY.'
  },
  {
    image: 'https://static.vecteezy.com/system/resources/previews/033/692/799/non_2x/motorcycle-rider-on-sport-bike-driving-fast-on-race-track-at-sunset-motorcycle-rider-on-sport-bike-rides-fast-on-race-track-at-sunset-extreme-athlete-sport-motorcycles-racing-ai-generated-free-photo.jpg',
    title: 'Adventure awaits you',
    subtitle: 'EXPLORE THE CITY IN STYLE—QUALITY SCOOTER RENTALS FOR EVERY JOURNEY.'
  },
  {
    image: 'http://getwallpapers.com/wallpaper/full/2/a/e/1099643-vintage-motorcycle-wallpaper-3840x2160-phone.jpg',
    title: 'Ride in comfort and style',
    subtitle: 'FROM ELECTRIC TO CLASSIC SCOOTERS—FIND YOUR IDEAL RENTAL EXPERIENCE.'
  }
];

const MenuIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="3" y1="12" x2="21" y2="12"></line>
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <line x1="3" y1="18" x2="21" y2="18"></line>
  </svg>
);

export default function ScooterRentalPage() {
  const router = useRouter();
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setIsTransitioning(false);
      }, 1000);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  const goToSlide = (index: number) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide(index);
      setIsTransitioning(false);
    }, 1000);
  };

  const handleMenuClick = (itemName: string, route: string) => {
    setIsMenuOpen(false);
    router.push(route);
    console.log(`Navigating to: ${itemName}`);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Full Screen Menu Overlay */}
      <div
        ref={menuRef}
        className={`fixed inset-0 z-50 transition-transform duration-700 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="h-full flex flex-col">
          {/* Close Button */}
          <div className="flex justify-start p-4 sm:p-6 md:p-8 bg-[#f8f8f3]">
            <button
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-[#2c5f5f] hover:bg-[#234a4a] transition-colors text-white"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>

          {/* Menu Items */}
          <div className="flex-1 flex flex-col">
            {menuItems.map((item, index) => (
              <button
                key={index}
                onClick={() => handleMenuClick(item.name, item.route)}
                className="flex-1 flex relative overflow-hidden group border-b border-white/30 last:border-b-0 cursor-pointer"
                onMouseEnter={() => setHoveredItem(index)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                {/* Background Image (1/3 left) */}
                <div 
                  className={`absolute left-0 top-0 h-full transition-all duration-700 ease-out ${
                    hoveredItem === index ? 'w-1/3 opacity-100' : 'w-0 opacity-0'
                  }`}
                >
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Colored Background (2/3 right) */}
                <div 
                  className={`absolute right-0 top-0 h-full transition-all duration-700 ease-out ${
                    hoveredItem === index ? 'w-2/3' : 'w-0'
                  }`}
                  style={{ backgroundColor: item.color }}
                />

                {/* Default Background */}
                <div 
                  className={`absolute inset-0 transition-opacity duration-700 ${
                    hoveredItem === index ? 'opacity-0' : 'opacity-100'
                  }`}
                  style={{ 
                    backgroundColor: index === 0 ? '#f8f8f3' : 
                                    index === 1 ? '#ebe9e4' : 
                                    index === 2 ? '#dfe0d9' : '#d3d7cd'
                  }}
                />

                {/* Text Content */}
                <div className="relative z-10 flex-1 flex items-center justify-center">
                  <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
                    <span 
                      className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl transition-colors duration-700 ${
                        hoveredItem === index ? 'text-white' : 'text-[#4a5f5f]'
                      }`}
                      style={{ 
                        fontFamily: 'serif',
                        fontWeight: 200,
                        letterSpacing: '0.02em'
                      }}
                    >
                      {item.name}
                    </span>
                    {hoveredItem === index && (
                      <svg 
                        width="32" 
                        height="32" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="white" 
                        strokeWidth="1.5"
                        className="animate-[slideRight_0.7s_ease-out] w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    )}
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Footer Links */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 py-4 sm:py-6 md:py-8 px-4 bg-[#d3d7cd] text-[#4a5f5f] text-[10px] sm:text-xs tracking-[0.15em] sm:tracking-[0.2em] uppercase font-medium">
            <button onClick={() => handleMenuClick('About', '/about')} className="hover:opacity-70 transition-opacity">ABOUT</button>
            <button onClick={() => handleMenuClick('FAQs', '/faqs')} className="hover:opacity-70 transition-opacity">FAQS</button>
            <button onClick={() => handleMenuClick('Favorites', '/favorites')} className="hover:opacity-70 transition-opacity">FAVORITES</button>
            <button onClick={() => handleMenuClick('Contact', '/contact')} className="hover:opacity-70 transition-opacity">CONTACT</button>
          </div>
        </div>

        {/* Vertical Sidebar Icons - Hidden on mobile */}
        <div className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 flex-col items-center gap-6 bg-white/50 py-6 px-3">
          <button className="text-[#2c5f5f] hover:opacity-70 transition-opacity" aria-label="Shopping Cart">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
          </button>
          <button className="text-[#2c5f5f] hover:opacity-70 transition-opacity" aria-label="Search">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.35-4.35"></path>
            </svg>
          </button>
          <div className="w-px h-20 bg-[#2c5f5f]/30"></div>
          <span 
            className="text-[#2c5f5f] text-xs tracking-[0.3em]"
            style={{ writingMode: 'vertical-rl' }}
          >
            ROOOF
          </span>
          <div className="w-px h-20 bg-[#2c5f5f]/30"></div>
          <button className="text-[#2c5f5f] hover:opacity-70 transition-opacity" aria-label="Favorites">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          </button>
          <button className="text-[#2c5f5f] hover:opacity-70 transition-opacity" aria-label="Scroll to Top">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 19V5M5 12l7-7 7 7"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Background Images */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-[2000ms] ease-in-out ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col">
        {/* Navigation - FULLY RESPONSIVE */}
        <nav className="flex items-center justify-between px-4 sm:px-6 md:px-8 py-4 md:py-6">
          <button 
            onClick={() => setIsMenuOpen(true)}
            className="flex items-center gap-2 md:gap-3 text-white hover:opacity-80 transition-opacity"
          >
            <div className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-[#2c5f5f] hover:bg-[#234a4a] transition-colors">
              <MenuIcon />
            </div>
            <span className="hidden sm:inline text-xs md:text-sm font-medium tracking-wider uppercase">MENU</span>
          </button>

          <div className="text-white text-xl sm:text-2xl md:text-3xl font-light tracking-[0.2em] sm:tracking-[0.3em] md:tracking-[0.4em]">
            ROOOF
          </div>

          <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
            <button 
              onClick={() => router.push('/login')}
              className="px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 text-white text-[10px] sm:text-xs tracking-[0.15em] sm:tracking-[0.2em] uppercase font-medium hover:bg-white/10 transition-all duration-300 border border-white/50"
              style={{ 
                fontFamily: 'sans-serif'
              }}
            >
              <span className="hidden sm:inline">LOGIN</span>
              <span className="sm:hidden">LOG IN</span>
            </button>
            <button 
              onClick={() => router.push('/signup')}
              className="px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 bg-[#2c5f5f] text-white text-[10px] sm:text-xs tracking-[0.15em] sm:tracking-[0.2em] uppercase font-medium hover:bg-[#234a4a] transition-all duration-300"
              style={{ 
                fontFamily: 'sans-serif'
              }}
            >
              <span className="hidden sm:inline">SIGN UP</span>
              <span className="sm:hidden">JOIN</span>
            </button>
          </div>
        </nav>

        {/* Hero Content - FULLY RESPONSIVE */}
        <div className="flex-1 flex items-center px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24">
          <div className="max-w-4xl">
            <h1 
              className={`text-white text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-extralight mb-4 sm:mb-6 md:mb-8 leading-[1.1] transition-all duration-1000 ${
                isTransitioning ? 'opacity-0 translate-y-8' : 'opacity-100 translate-y-0'
              }`}
              style={{ 
                fontFamily: 'serif',
                fontWeight: 200,
                letterSpacing: '-0.02em'
              }}
            >
              {slides[currentSlide].title}
            </h1>

            <p 
              className={`text-white text-[10px] sm:text-xs md:text-sm tracking-[0.1em] sm:tracking-[0.15em] mb-6 sm:mb-8 md:mb-12 max-w-xl uppercase font-light transition-all duration-1000 delay-200 ${
                isTransitioning ? 'opacity-0 translate-y-8' : 'opacity-100 translate-y-0'
              }`}
              style={{ 
                fontFamily: 'sans-serif',
                fontWeight: 300
              }}
            >
              {slides[currentSlide].subtitle}
            </p>

            <button 
              className={`px-6 sm:px-8 md:px-10 py-2.5 sm:py-3 md:py-4 bg-[#2c5f5f] text-white text-[10px] sm:text-xs tracking-[0.15em] sm:tracking-[0.2em] uppercase font-medium hover:bg-[#234a4a] transition-all duration-300 rounded ${
                isTransitioning ? 'opacity-0 translate-y-8' : 'opacity-100 translate-y-0'
              }`}
              style={{ 
                transitionDelay: '400ms',
                fontFamily: 'sans-serif'
              }}
            >
              RENT A SCOOTER NOW
            </button>
          </div>
        </div>

        {/* Slide Indicators - FULLY RESPONSIVE */}
        <div className="absolute bottom-8 sm:bottom-10 md:bottom-12 left-4 sm:left-6 md:left-12 lg:left-16 xl:left-24 flex gap-2 sm:gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-8 sm:w-10 md:w-12 h-0.5 sm:h-1 transition-all duration-500 ${
                index === currentSlide 
                  ? 'bg-white' 
                  : 'bg-white/30 hover:bg-white/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Slide Counter - FULLY RESPONSIVE */}
        <div className="absolute bottom-8 sm:bottom-10 md:bottom-12 right-4 sm:right-6 md:right-12 lg:right-16 xl:right-24 text-white text-xs sm:text-sm">
          <span className="text-lg sm:text-xl md:text-2xl font-light">{String(currentSlide + 1).padStart(2, '0')}</span>
          <span className="text-white/50 mx-1 sm:mx-2">/</span>
          <span className="text-white/50">{String(slides.length).padStart(2, '0')}</span>
        </div>
      </div>
    </div>
  );
}