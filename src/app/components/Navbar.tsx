// components/FullscreenMenu.tsx
'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';

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
    image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80',
    color: '#3d5a5a'
  },
  {
    name: 'About',
    route: '/about',
    image: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=800&q=80',
    color: '#2d4a4a'
  },
  {
    name: 'Bikes',
    route: '/bikes',
    image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80',
    color: '#1d3a3a'
  },
  {
    name: 'Contact',
    route: '/contact',
    image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800&q=80',
    color: '#0d2a2a'
  }
];

interface FullscreenMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function FullscreenMenu({ isOpen, onClose }: FullscreenMenuProps) {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  const handleNavigation = (route: string) => {
    onClose();
    router.push(route);
  };

  return (
    <div
      ref={menuRef}
      className={`fixed inset-0 z-50 transition-transform duration-700 ease-in-out ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      <div className="h-full flex flex-col">
        {/* Close Button */}
        <div className="flex justify-start p-8 bg-[#f8f8f3]">
          <button
            onClick={onClose}
            className="flex items-center justify-center w-12 h-12 bg-[#2c5f5f] hover:bg-[#234a4a] transition-colors text-white"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        {/* Menu Items with Different Background Colors and Hover Effect */}
        <div className="flex-1 flex flex-col">
          {menuItems.map((item, index) => (
            <button
              key={index}
              onClick={() => handleNavigation(item.route)}
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
                <div className="flex items-center gap-4">
                  <span 
                    className={`text-6xl md:text-7xl lg:text-8xl transition-colors duration-700 ${
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
                      width="40" 
                      height="40" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="white" 
                      strokeWidth="1.5"
                      className="animate-[slideRight_0.7s_ease-out]"
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
        <div className="flex justify-center gap-8 py-8 bg-[#d3d7cd] text-[#4a5f5f] text-xs tracking-[0.2em] uppercase font-medium">
          <button onClick={() => handleNavigation('/about')} className="hover:opacity-70 transition-opacity">ABOUT</button>
          <button onClick={() => handleNavigation('/faqs')} className="hover:opacity-70 transition-opacity">FAQS</button>
          <button onClick={() => handleNavigation('/favorites')} className="hover:opacity-70 transition-opacity">FAVORITES</button>
          <button onClick={() => handleNavigation('/contact')} className="hover:opacity-70 transition-opacity">CONTACT</button>
        </div>
      </div>

      {/* Vertical Sidebar Icons */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 flex flex-col items-center gap-6 bg-white/50 py-6 px-3">
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
  );
}