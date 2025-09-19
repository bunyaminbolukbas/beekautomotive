'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, MapPin, Phone, Mail } from 'lucide-react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { name: 'Aanbod', href: '/aanbod' },
    { name: 'Reviews', href: '/reviews' },
    { name: 'Over ons', href: '/over-ons' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/Scherm­afbeelding 2025-09-15 om 20.17.23.png"
                alt="Beek Automotive"
                width={200}
                height={100}
                className="h-8 sm:h-10 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-6 lg:ml-10 flex items-center space-x-4 lg:space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-gray-900 px-2 lg:px-3 py-2 text-sm font-medium transition-colors duration-200"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Desktop Contact Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <MapPin className="w-4 h-4 lg:w-5 lg:h-5 text-gray-600 hover:text-gray-900 cursor-pointer transition-colors" />
            <Phone className="w-4 h-4 lg:w-5 lg:h-5 text-gray-600 hover:text-gray-900 cursor-pointer transition-colors" />
            <Mail className="w-4 h-4 lg:w-5 lg:h-5 text-gray-600 hover:text-gray-900 cursor-pointer transition-colors" />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500"
            >
              {isOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-4 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-gray-900 block px-3 py-3 text-base font-medium border-b border-gray-100 last:border-b-0"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex items-center justify-center space-x-6 px-3 py-4 border-t border-gray-200 mt-2">
                <MapPin className="w-5 h-5 text-gray-600" />
                <Phone className="w-5 h-5 text-gray-600" />
                <Mail className="w-5 h-5 text-gray-600" />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}