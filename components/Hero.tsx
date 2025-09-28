'use client';

import Link from 'next/link';
import { ArrowRight, ChevronDown } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative h-screen flex items-center justify-start">
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
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        {/* Gradient fade to custom background at bottom */}
        <div className="absolute inset-0" style={{background: 'linear-gradient(to bottom, transparent, transparent, #0A0E14)'}}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          {/* Title removed */}
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
              const targetPosition = scrollTop + rect.top - (window.innerHeight / 2) + (rect.height / 3);

              window.scrollTo({
                top: Math.max(0, targetPosition),
                behavior: 'smooth'
              });
            }
          }}
          className="group flex flex-col items-center space-y-3 text-white hover:text-blue-300 transition-all duration-300"
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-full p-2 group-hover:bg-white/20 transition-all duration-300">
            <ChevronDown className="w-6 h-6 animate-bounce-down" />
          </div>
          <span className="text-sm sm:text-base md:text-lg font-medium tracking-wide group-hover:scale-105 transition-transform duration-300">Ontdek meer</span>
        </button>
      </div>

      <style jsx>{`
        @keyframes bounce-down {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(8px);
          }
          60% {
            transform: translateY(4px);
          }
        }
        :global(.animate-bounce-down) {
          animation: bounce-down 3s infinite;
        }
      `}</style>
    </div>
  );
}