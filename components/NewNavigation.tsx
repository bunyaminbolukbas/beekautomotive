'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

export function NewNavigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { name: 'Aanbod', href: '/aanbod' },
    { name: 'Reviews', href: '/reviews' },
    { name: 'Over ons', href: '/over-ons' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <>
      {/* Header with logo and hamburger */}
      <header className="bg-white shadow-sm relative z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Spacer for balance */}
            <div className="w-10"></div>

            {/* Logo - Centered */}
            <div className="absolute left-1/2 transform -translate-x-1/2">
              <Link href="/" className="flex items-center">
                <Image
                  src="/beek-automotive-logo.png"
                  alt="Beek Automotive"
                  width={200}
                  height={100}
                  className="h-10 w-auto"
                />
              </Link>
            </div>

            {/* Hamburger Menu */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 transition-colors"
            >
              {isOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
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
      <div className={`fixed top-0 left-0 h-full w-80 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="p-6">
          {/* Close button */}
          <div className="flex justify-end mb-8">
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="space-y-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block text-lg font-medium text-gray-700 hover:text-gray-900 py-3 border-b border-gray-100 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Contact Info in Menu */}
          <div className="mt-8 pt-8 border-t border-gray-200">
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Contact</h3>
            <div className="space-y-3 text-sm text-gray-600">
              <div>085 792 6363</div>
              <div>info@beekautomotive.nl</div>
              <div>Het Laar 6, 6733 BZ Wekerom</div>
              <div className="flex items-center">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  ))}
                </div>
                <span className="ml-2">9.9/10 rating</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}