import { NewNavigation } from '@/components/NewNavigation';
import { FixedContactButtons } from '@/components/FixedContactButtons';
import { Footer } from '@/components/Footer';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <NewNavigation />
      <FixedContactButtons />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        {/* Header */}
        <div className="text-center mb-16 sm:mb-20">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 sm:mb-8">
            Contact
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Heeft u vragen of wilt u een afspraak maken? 
            Neem gerust contact met ons op. We helpen u graag verder.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 sm:mb-12">
              Contactgegevens
            </h2>
            
            <div className="space-y-8 sm:space-y-10">
              {/* Address */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Adres</h3>
                  <p className="text-gray-600">
                    Beek Automotive B.V.<br />
                    Het Laar 6<br />
                    6733 BZ Wekerom<br />
                    Gelderland<br />
                    Nederland
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Telefoon</h3>
                  <div className="space-y-1">
                    <p className="text-gray-600">
                      <a href="tel:+31857926363" className="hover:text-gray-900 transition-colors">
                        085 792 6363
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
                  <p className="text-gray-600">
                    <a href="mailto:info@beekautomotive.nl" className="hover:text-gray-900 transition-colors">
                      info@beekautomotive.nl
                    </a>
                  </p>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">WhatsApp</h3>
                  <p className="text-gray-600 mb-3">
                    Stuur ons een bericht via WhatsApp voor snelle vragen
                  </p>
                  <a
                    href="https://wa.me/31857926363"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>Chat via WhatsApp</span>
                  </a>
                </div>
              </div>

              {/* Opening Hours */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Openingstijden</h3>
                  <div className="text-gray-600 space-y-1">
                    <p><strong>Showroom:</strong> Enkel op afspraak</p>
                    <p><strong>Telefonisch bereikbaar:</strong></p>
                    <p>Maandag - Vrijdag: 09:00 - 18:00</p>
                    <p>Zaterdag: 10:00 - 16:00</p>
                    <p>Zondag: Gesloten</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Google Maps */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 sm:mb-12">
              Locatie
            </h2>
            
            <div className="bg-gray-100 rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2428.123456789!2d5.5555555!3d52.1666666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sHet%20Laar%206%2C%206733%20BZ%20Wekerom!5e0!3m2!1snl!2snl!4v1234567890123"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-96 sm:h-[400px]"
              ></iframe>
            </div>
            
            <div className="mt-6 p-6 bg-gray-50 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Routebeschrijving</h3>
              <p className="text-gray-600 mb-4">
                Beek Automotive is gevestigd aan Het Laar 6 in Wekerom, Gelderland.
                Parkeren is gratis mogelijk voor de deur.
              </p>
              <a
                href="https://www.google.com/maps/dir//Het+Laar+6,+6733+BZ+Wekerom"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-black hover:text-gray-700 transition-colors"
              >
                <MapPin className="w-5 h-5" />
                <span>Bekijk route in Google Maps</span>
              </a>
            </div>
          </div>
        </div>

      </div>

      <Footer />
    </div>
  );
}