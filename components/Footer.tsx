import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Linkedin } from 'lucide-react';
import Image from 'next/image';

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Company Logo & Info */}
          <div>
            <div className="mb-6">
              <Image
                src="/beek-automotive-logo.png"
                alt="Beek Automotive"
                width={200}
                height={100}
                className="h-12 w-auto"
              />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900 mb-2">Beek Automotive B.V.</p>
              <p className="text-sm text-gray-600">Het Laar 6</p>
              <p className="text-sm text-gray-600">6733 BZ Wekerom</p>
              <p className="text-sm text-gray-600">Gelderland</p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-gray-400" />
                <span className="text-sm text-gray-600">085 792 6363</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-gray-400" />
                <span className="text-sm text-gray-600">info@beekautomotive.nl</span>
              </div>
              <p className="text-sm text-gray-600 mt-3">Showroom: Enkel op afspraak</p>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Navigatie</h4>
            <ul className="space-y-2">
              <li><a href="/" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Home</a></li>
              <li><a href="/aanbod" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Aanbod</a></li>
              <li><a href="/financiering" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Financiering</a></li>
              <li><a href="/reviews" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Reviews</a></li>
              <li><a href="/over-ons" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Over ons</a></li>
              <li><a href="/contact" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}