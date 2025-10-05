'use client';

import { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import { getNewArrivals } from '@/lib/cars';
import { CarCard } from './CarCard';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';


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
    <div className="pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 md:pb-24" style={{backgroundColor: '#0A0E14'}} data-section="cars">
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