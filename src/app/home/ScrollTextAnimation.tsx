'use client';

import React, { useState, useEffect, useRef } from 'react';

export default function ScrollTextAnimation(): JSX.Element {
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [words, setWords] = useState<
    Array<{ word: string; isColored: boolean }>
  >([]);

  const text =
    'Welcome to our spaces for creative wellbeing and artistic exchange, on Taribelang Bunda, Gooreng Gooreng, Gurang and Bailai lands.';

  useEffect(() => {
    setWords(text.split(' ').map(word => ({ word, isColored: false })));
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const startPoint = windowHeight * 0.65;

      if (rect.top < startPoint && rect.bottom > 0) {
        const progress = Math.min(
          Math.max((startPoint - rect.top) / (windowHeight * 0.6), 0),
          1
        );

        setScrollProgress(progress);
        if (progress >= 0.98) setHasScrolled(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const finalProgress = hasScrolled ? 1 : scrollProgress;
    const coloredCount = Math.floor(finalProgress * words.length);

    setWords(prev =>
      prev.map((w, i) => ({
        ...w,
        isColored: i < coloredCount || hasScrolled
      }))
    );
  }, [scrollProgress, hasScrolled]);

  return (
    <section className="bg-white py-20">
      <div
        ref={containerRef}
        className="flex justify-center px-8 md:px-16 lg:px-24"
      >
        <div className="max-w-7xl">
          <p className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight font-bold">
            {words.map((wordObj, index) => (
              <span
                key={index}
                className={`transition-colors duration-300 ${
                  wordObj.isColored ? 'text-black' : 'text-gray-400'
                }`}
              >
                {wordObj.word}{' '}
              </span>
            ))}
          </p>
        </div>
      </div>
    </section>
  );
}
