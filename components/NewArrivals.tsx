'use client';

import { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import { getNewArrivals } from '@/lib/cars';
import { CarCard } from './CarCard';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

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

export function NewArrivals() {
  const cars = getNewArrivals();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      // On mobile, scroll exactly one full car width, on larger screens use fixed amount
      const isMobile = window.innerWidth < 640;
      const scrollAmount = isMobile ? scrollRef.current.clientWidth : 400;

      if (direction === 'left') {
        scrollRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setShowLeftArrow(scrollLeft > 10);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll);
      return () => scrollContainer.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <div className="bg-black py-12 sm:py-16 md:py-24" data-section="cars">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Horizontal Scrolling Car Grid with Overlay Arrows */}
        <div className="relative">
          <div
            ref={scrollRef}
            className="flex overflow-x-auto space-x-1 sm:space-x-1.5 md:space-x-2 pb-4 scrollbar-hide pr-0 sm:pr-20 md:pr-24"
            style={{
              scrollSnapType: 'x mandatory',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
            onScroll={handleScroll}
          >
            {cars.map((car) => (
              <div
                key={car.id}
                className="flex-none w-full sm:w-80 md:w-96 px-4 sm:px-0"
                style={{ scrollSnapAlign: 'start' }}
              >
                <CarCard car={car} showNewBadge={true} />
              </div>
            ))}
          </div>

          {/* Left Arrow - Always visible on mobile when there are previous cars */}
          {showLeftArrow && (
            <button
              onClick={() => scroll('left')}
              className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/10 backdrop-blur-sm p-2 rounded-full hover:bg-white/20 transition-all duration-300"
              aria-label="Previous cars"
            >
              <ChevronLeft className="w-5 h-5 text-white hover:text-blue-300 transition-colors" />
            </button>
          )}

          {/* Right Arrow - Always visible on mobile when there are more cars */}
          {showRightArrow && (
            <button
              onClick={() => scroll('right')}
              className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/10 backdrop-blur-sm p-2 rounded-full hover:bg-white/20 transition-all duration-300"
              aria-label="Next cars"
            >
              <ChevronRight className="w-5 h-5 text-white hover:text-blue-300 transition-colors" />
            </button>
          )}
        </div>

        {/* Mobile Navigation Dots */}
        <div className="flex justify-center mt-4 sm:mt-6 md:hidden">
          <div className="flex space-x-2">
            {Array.from({ length: Math.ceil(cars.length / 3) }).map((_, index) => (
              <div
                key={index}
                className="w-2 h-2 rounded-full bg-gray-400"
              />
            ))}
          </div>
        </div>

        {/* View All Cars Button */}
        <div className="text-center mt-8 sm:mt-12 md:mt-16 px-4">
          <Link
            href="/aanbod"
            className="inline-block bg-gray-800 hover:bg-gray-700 text-white px-8 py-3 transition-colors font-medium text-base"
          >
            VOLLEDIG AANBOD (54)
          </Link>
        </div>

        {/* Custom Work Section */}
        <div className="text-center mt-12 sm:mt-16 md:mt-20 px-4">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-normal text-white mb-6 sm:mb-8">
            Maatwerk waarbij onze klanten centraal staan
          </h2>
          <p className="text-base sm:text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12 sm:mb-16">
            Het kopen van een auto is voor ons altijd maatwerk waarbij onze klanten centraal staan.<br />
            Ben je op zoek naar een bepaald merk, model of type maar staat je droomauto er niet tussen?<br />
            Geen paniek, we gaan graag voor je op zoek binnen ons internationale netwerk<br />
            om te kijken wat er mogelijk is.
          </p>

          {/* Statistics Section */}
          <div className="grid grid-cols-3 gap-4 lg:gap-6 max-w-2xl mx-auto">
            <StatCard number={10} suffix="+" title="Jaren ervaring" />
            <StatCard number={500} suffix="+" title="Tevreden klanten" />
            <StatCard number={20} suffix="+" title="Auto's op voorraad" />
          </div>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}