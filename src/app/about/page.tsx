'use client';

import React, { useState } from 'react';
import FullscreenMenu from '../components/Navbar';
import VisionSection from '../home/VisionSection';
import Navbar from '../components/Menu';
import MissionSection from '../aboutcomponents/MissionSection';
import Footer from '../components/Footer';

function About() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  return (
    <>
      {/* Fullscreen Menu Overlay */}
      <FullscreenMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      
      <div className="min-h-screen">
        {/* Navbar */}
        <Navbar onMenuClick={() => setIsMenuOpen(true)} transparent={false} />
        
        {/* About Page Content */}
        <MissionSection/>
        <VisionSection />
        <Footer/>
      </div>
    </>
  );
}

export default About;