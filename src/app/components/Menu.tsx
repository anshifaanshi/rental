// components/FullscreenMenu.tsx
// components/Navbar.tsx
'use client';

import React from 'react';

const MenuIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="3" y1="12" x2="21" y2="12"></line>
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <line x1="3" y1="18" x2="21" y2="18"></line>
  </svg>
);

interface NavbarProps {
  onMenuClick: () => void;
  transparent?: boolean;
}

export default function Navbar({ onMenuClick, transparent = false }: NavbarProps) {
  return (
    <nav className={`flex items-center justify-between px-8 py-6 ${transparent ? '' : 'bg-white shadow-md'}`}>
      <button 
        onClick={onMenuClick}
        className={`flex items-center gap-3 ${transparent ? 'text-white' : 'text-gray-800'} hover:opacity-80 transition-opacity`}
      >
        <div className="flex items-center justify-center w-12 h-12 bg-[#2c5f5f] hover:bg-[#234a4a] transition-colors">
          <MenuIcon />
        </div>
        <span className="text-sm font-medium tracking-wider uppercase">MENU</span>
      </button>

      <div className={`text-3xl font-light tracking-[0.4em] ${transparent ? 'text-white' : 'text-gray-800'}`}>
        ROOOF
      </div>

      <div className="w-24"></div> {/* Spacer for centering logo */}
    </nav>
  );
}