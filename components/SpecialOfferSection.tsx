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
      <div className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-medium text-white mb-2">
        {count}{suffix}
      </div>
      <div className="text-sm sm:text-base lg:text-lg font-medium tracking-wide text-gray-300 leading-tight">
        {title}
      </div>
    </div>
  );
}

export function SpecialOfferSection() {
  return (
    <div className="pt-16 sm:pt-20 md:pt-24 lg:pt-28 pb-16 sm:pb-20 md:pb-24 lg:pb-28" style={{backgroundColor: '#f2f4f6'}}>
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

          {/* Content Overlay */}
          <div className="absolute inset-0 flex items-center justify-center py-12 sm:py-16 md:py-20">
            <div className="text-center px-6 sm:px-8 md:px-12 max-w-6xl mx-auto">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-white mb-8 sm:mb-10 md:mb-12">
                Maatwerk waarbij onze klanten centraal staan
              </h2>
              <div className="max-w-3xl mx-auto mb-12 sm:mb-16 lg:mb-20">
                <p className="text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed">
                  Het kopen van een auto is voor ons altijd maatwerk waarbij onze klanten centraal staan.
                </p>
                <p className="text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed mt-4">
                  Ben je op zoek naar een bepaald merk, model of type maar staat je droomauto er niet tussen? Geen paniek, we gaan graag voor je op zoek binnen ons internationale netwerk om te kijken wat er mogelijk is.
                </p>
              </div>

              {/* Statistics Section */}
              <div className="grid grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-lg sm:max-w-2xl mx-auto">
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