'use client';

import { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface StatCardProps {
  number: number;
  suffix: string;
  title: string;
}

function StatCard({ number, suffix, title }: StatCardProps) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          // Start counting animation
          const duration = 2000; // 2 seconds
          const steps = 50;
          const increment = number / steps;
          let current = 0;

          const timer = setInterval(() => {
            current += increment;
            if (current >= number) {
              setCount(number);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [number, isVisible]);

  return (
    <div
      ref={ref}
      className={`transform transition-all duration-1000 text-center ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      }`}
    >
      <div className="text-lg sm:text-xl lg:text-2xl font-medium text-white mb-1">
        {count}{suffix}
      </div>
      <div className="text-sm sm:text-base font-medium tracking-wide text-gray-300">
        {title}
      </div>
    </div>
  );
}

export function SpecialOfferSection() {
  return (
    <div style={{backgroundColor: '#0A0E14'}}>
      <div className="relative">
        <div
          className="aspect-[4/3] sm:aspect-[16/9] overflow-hidden relative"
          style={{
            backgroundImage: 'url(/audirs6.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          {/* Dark overlay for better contrast */}
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          {/* Gradient fade from custom background at top */}
          <div className="absolute inset-0" style={{background: 'linear-gradient(to bottom, #0A0E14, transparent, transparent)'}}></div>
          {/* Gradient fade to custom background at bottom */}
          <div className="absolute inset-0" style={{background: 'linear-gradient(to top, #0A0E14, transparent, transparent)'}}></div>

          {/* Content Overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center px-4 max-w-6xl mx-auto">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal text-white mb-6 sm:mb-8">
                Maatwerk waarbij onze klanten centraal staan
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed mb-12 sm:mb-16">
                Het kopen van een auto is voor ons altijd maatwerk waarbij onze klanten centraal staan.<br />
                Ben je op zoek naar een bepaald merk, model of type maar staat je droomauto er niet tussen?<br />
                Geen paniek, we gaan graag voor je op zoek binnen ons internationale netwerk<br />
                om te kijken wat er mogelijk is.
              </p>

              {/* Statistics Section */}
              <div className="grid grid-cols-3 gap-4 lg:gap-8 max-w-2xl mx-auto">
                <StatCard number={10} suffix="+" title="Jaren ervaring" />
                <StatCard number={500} suffix="+" title="Tevreden klanten" />
                <StatCard number={20} suffix="+" title="Auto's op voorraad" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}