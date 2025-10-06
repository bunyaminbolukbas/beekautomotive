'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

export function NewNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navigation = [
    { name: 'Aanbod', href: '/aanbod' },
    { name: 'Financiering', href: '/financiering' },
    { name: 'Reviews', href: '/reviews' },
    { name: 'Over ons', href: '/over-ons' },
    { name: 'Contact', href: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    // Check initial scroll position
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Fixed Navigation Bar */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-lg py-2' : 'bg-transparent py-4'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo - Left Side */}
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center">
                <Image
                  src="/beek-automotive-zwart-logo.png"
                  alt="Beek Automotive"
                  width={200}
                  height={100}
                  className={`w-auto transition-all duration-300 ${
                    scrolled ? 'h-8' : 'h-12'
                  }`}
                />
              </Link>
            </div>

            {/* Hamburger Menu */}
            <div className="mr-0">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`inline-flex items-center space-x-3 p-3 focus:outline-none transition-colors ${
                  scrolled
                    ? 'text-gray-800 hover:text-blue-600'
                    : 'text-white hover:text-blue-300'
                }`}
              >
                <span className="text-base font-medium">MENU</span>
                {isOpen ? (
                  <X className="block h-8 w-8" />
                ) : (
                  <Menu className="block h-8 w-8" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>


      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Slide-out Menu */}
      <div className={`fixed top-0 right-0 h-full w-80 bg-gray-800 shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="p-6">
          {/* Close button */}
          <div className="flex justify-end mb-8">
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 text-blue-400 hover:text-blue-300"
            >
              <X className="h-8 w-8" />
            </button>
          </div>


          {/* Navigation Links */}
          <nav className="space-y-0">
            {navigation.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                className="group flex items-center justify-between text-white hover:text-blue-300 py-6 border-b border-blue-400/30 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <span className="text-lg font-normal">{item.name.toUpperCase()}</span>
                <svg className="w-6 h-6 text-blue-400 group-hover:text-blue-300 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            ))}
          </nav>

        </div>
      </div>
    </>
  );
}