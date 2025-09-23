import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Linkedin } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="border-t border-gray-800"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">

          {/* Company Logo & Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <Image
                src="/beek-automotive-logo.png"
                alt="Beek Automotive"
                width={200}
                height={100}
                className="h-10 w-auto"
              />
            </div>
            <div className="space-y-1">
              <p className="text-sm font-medium text-white mb-3">Beek Automotive B.V.</p>
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                <div className="text-sm text-gray-300">
                  <p>Het Laar 6</p>
                  <p>6733 BZ Wekerom</p>
                  <p>Gelderland</p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Navigatie</h4>
            <ul className="space-y-2">
              <li><Link href="/aanbod" className="text-sm text-gray-300 hover:text-white transition-colors">Aanbod</Link></li>
              <li><Link href="/financiering" className="text-sm text-gray-300 hover:text-white transition-colors">Financiering</Link></li>
              <li><Link href="/reviews" className="text-sm text-gray-300 hover:text-white transition-colors">Reviews</Link></li>
              <li><Link href="/over-ons" className="text-sm text-gray-300 hover:text-white transition-colors">Over ons</Link></li>
              <li><Link href="/contact" className="text-sm text-gray-300 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2">
              <li><span className="text-sm text-gray-300">Verkoop auto's</span></li>
              <li><span className="text-sm text-gray-300">Financiering</span></li>
              <li><span className="text-sm text-gray-300">Inruil</span></li>
              <li><span className="text-sm text-gray-300">Onderhoud</span></li>
              <li><span className="text-sm text-gray-300">Schadeherstel</span></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-gray-400" />
                <a href="tel:+31857926363" className="text-sm text-gray-300 hover:text-white transition-colors">085 792 6363</a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-gray-400" />
                <a href="mailto:info@beekautomotive.nl" className="text-sm text-gray-300 hover:text-white transition-colors">info@beekautomotive.nl</a>
              </div>
              <div className="flex items-start space-x-2">
                <Clock className="w-4 h-4 text-gray-400 mt-0.5" />
                <div className="text-sm text-gray-300">
                  <p>Ma-Vr: 09:00 - 18:00</p>
                  <p>Za: Op afspraak</p>
                  <p>Zo: Gesloten</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-gray-400 mb-4 md:mb-0">
            © 2024 Beek Automotive B.V. Alle rechten voorbehouden.
          </div>

          {/* Social Media Links */}
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}