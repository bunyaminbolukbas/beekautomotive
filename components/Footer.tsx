import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Linkedin } from 'lucide-react';
import Image from 'next/image';

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-12">
          {/* Company Logo and RDW */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <Image
                src="/Scherm­afbeelding 2025-09-15 om 20.17.23.png"
                alt="Beek Automotive"
                width={200}
                height={100}
                className="h-12 w-auto"
              />
            </div>
            <div className="flex items-center space-x-2">
              <div className="bg-orange-500 text-white px-3 py-1 rounded text-sm font-semibold">
                RDW
              </div>
              <span className="text-sm text-gray-600">erkend</span>
            </div>
          </div>

          {/* Contact */}
          <div className="lg:col-span-1">
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-gray-400" />
                <span className="text-sm text-gray-600">info@beekautomotive.nl</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-gray-400" />
                <span className="text-sm text-gray-600">+31 38 458 09 56</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-gray-400" />
                <span className="text-sm text-gray-600">+31 038 458 09 56</span>
              </div>
            </div>
            
            <div className="mt-6">
              <p className="text-sm font-medium text-gray-900 mb-2">Beek Automotive B.V.</p>
              <p className="text-sm text-gray-600">Westeinde 106</p>
              <p className="text-sm text-gray-600">3844 DR Harderwijk</p>
            </div>
          </div>

          {/* Beekautomotive.com */}
          <div className="lg:col-span-1">
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Beekautomotive.com</h4>
            <ul className="space-y-2">
              <li><a href="/" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">home</a></li>
              <li><a href="/aanbod" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">aanbod</a></li>
              <li><a href="/reviews" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">reviews</a></li>
              <li><a href="/over-ons" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">over ons</a></li>
              <li><a href="/contact" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">hoe staat het thuis?</a></li>
              <li><a href="/contact" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">contact</a></li>
            </ul>
          </div>

          {/* Showroom */}
          <div className="lg:col-span-1">
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Showroom</h4>
            <div className="space-y-2 mb-4">
              <p className="text-sm font-medium text-gray-900">Beek Automotive B.V.</p>
              <p className="text-sm text-gray-600">Westeinde 106</p>
              <p className="text-sm text-gray-600">3844 DR Harderwijk</p>
            </div>
            <div className="space-y-2">
              <p className="text-sm text-gray-600">Enkel op afspraak</p>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-gray-400" />
                <span className="text-sm text-gray-600">bekijk op kaart</span>
              </div>
            </div>
          </div>

          {/* Volg ons */}
          <div className="lg:col-span-1">
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Volg ons</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Instagram className="w-4 h-4 text-gray-400" />
                <span className="text-sm text-gray-600">Instagram</span>
              </div>
              <div className="flex items-center space-x-2">
                <Facebook className="w-4 h-4 text-gray-400" />
                <span className="text-sm text-gray-600">Facebook</span>
              </div>
              <div className="flex items-center space-x-2">
                <Linkedin className="w-4 h-4 text-gray-400" />
                <span className="text-sm text-gray-600">LinkedIn</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}