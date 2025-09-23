'use client';

import { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className={`fixed bottom-8 right-8 z-40 transition-opacity duration-1000 ${
      isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
    }`}>
      <button
        onClick={scrollToTop}
        className="group flex items-center justify-center text-black hover:text-gray-700 transition-all duration-300"
        aria-label="Scroll to top"
      >
        <div className="bg-white/80 backdrop-blur-sm rounded-full p-2 group-hover:bg-white/90 transition-all duration-300">
          <ChevronUp className="w-6 h-6" />
        </div>
      </button>
    </div>
  );
}