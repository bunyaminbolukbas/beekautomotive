'use client';

import Link from 'next/link';
import { ArrowRight, ChevronDown } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative min-h-[70vh] sm:min-h-[80vh] flex items-center justify-start">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Voor kwaliteit, kom je naar Beek
          </h1>
        </div>
      </div>

      {/* Scroll Down Arrow */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <button
          onClick={() => {
            const carsSection = document.querySelector('[data-section="cars"]');
            if (carsSection) {
              const rect = carsSection.getBoundingClientRect();
              const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
              const targetPosition = scrollTop + rect.top - (window.innerHeight / 2) + (rect.height / 2);

              window.scrollTo({
                top: Math.max(0, targetPosition),
                behavior: 'smooth'
              });
            }
          }}
          className="group flex flex-col items-center space-y-2 text-white hover:text-gray-300 transition-colors duration-300"
        >
          <span className="text-sm font-medium opacity-80 group-hover:opacity-100">Scroll down</span>
          <div className="animate-bounce">
            <ChevronDown className="w-6 h-6" />
          </div>
        </button>
      </div>
    </div>
  );
}