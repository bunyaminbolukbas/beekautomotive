import { Phone, Mail } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="text-gray-800" style={{backgroundColor: '#f2f4f6'}}>
      <div className="border-t border-gray-300"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4">

          {/* Company Logo */}
          <div className="md:col-span-2">
            <div className="mb-6">
              <Image
                src="/beek-automotive-zwart-logo.png"
                alt="BEEK AUTOMOTIVE"
                width={400}
                height={200}
                className="h-32 w-auto"
              />
            </div>
          </div>

          {/* Merken */}
          <div>
            <h4 className="text-xl font-medium text-white mb-6">Merken</h4>
            <ul className="space-y-1">
              <li><span className="text-sm text-gray-400">AUDI</span></li>
              <li><span className="text-sm text-gray-400">BMW</span></li>
              <li><span className="text-sm text-gray-400">MERCEDES-BENZ</span></li>
              <li><span className="text-sm text-gray-400">VOLKSWAGEN</span></li>
              <li><Link href="/aanbod" className="text-sm text-gray-600 hover:text-gray-800 transition-colors">ALLE MERKEN</Link></li>
            </ul>
          </div>

          {/* Service */}
          <div>
            <h4 className="text-xl font-medium text-white mb-6">Service</h4>
            <ul className="space-y-1">
              <li><Link href="/financiering" className="text-sm text-gray-600 hover:text-gray-800 transition-colors">FINANCIERINGEN</Link></li>
              <li><span className="text-sm text-gray-400">IMPORT</span></li>
              <li><Link href="/contact" className="text-sm text-gray-600 hover:text-gray-800 transition-colors">CONTACT</Link></li>
            </ul>
          </div>

          {/* Gegevens */}
          <div>
            <h4 className="text-xl font-medium text-white mb-6">Gegevens</h4>
            <div className="space-y-1">
              <div>
                <Link href="tel:+31857926363" className="text-sm text-blue-400 hover:text-blue-300 transition-colors">+31 (0)85 792 6363</Link>
              </div>
              <div>
                <Link href="mailto:info@beekautomotive.nl" className="text-sm text-gray-600 hover:text-gray-800 transition-colors">INFO@BEEKAUTOMOTIVE.NL</Link>
              </div>
              <div className="text-sm text-gray-400">
                <p>HET LAAR 6</p>
                <p>6733 BZ, WEKEROM</p>
              </div>

              {/* Social Media Icons */}
              <div className="flex space-x-3 pt-2">
                <a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Showroom */}
          <div className="relative ml-8">
            {/* Vertical divider line */}
            <div className="hidden md:block absolute -left-4 top-0 w-px bg-gray-800 h-48"></div>
            <h4 className="text-xl font-medium text-white mb-6">Showroom</h4>
            <div className="space-y-1">
              <div className="text-sm text-gray-400">
                <p>MA-VR: 9.00 - 18.00</p>
                <p>ZA: Op afspraak</p>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-gray-400 mb-4 md:mb-0">
            © Beek Automotive 2025
          </div>
          <div className="flex space-x-6 text-sm">
            <Link href="#" className="text-gray-600 hover:text-gray-800 transition-colors">Algemene voorwaarden</Link>
            <Link href="#" className="text-gray-600 hover:text-gray-800 transition-colors">Privacyverklaring</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}