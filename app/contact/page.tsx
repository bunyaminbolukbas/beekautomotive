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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2436.8234567890123!2d5.6234567890123456!3d52.34567890123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sWesteinde%20106%2C%203844%20DR%20Harderwijk!5e0!3m2!1snl!2snl!4v1234567890123"
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
                Beek Automotive is gevestigd aan de Westeinde 106 in Harderwijk. 
                Parkeren is gratis mogelijk voor de deur.
              </p>
              <a
                href="https://www.google.com/maps/dir//Westeinde+106,+3844+DR+Harderwijk"
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

        {/* Contact Form */}
        <div className="mt-20 sm:mt-32">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 sm:p-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center">
              Stuur ons een bericht
            </h2>
            
            <form className="max-w-2xl mx-auto space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Naam *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Telefoon
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Onderwerp *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Bericht *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent resize-vertical"
                ></textarea>
              </div>
              
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-black text-white px-8 py-4 font-semibold hover:bg-gray-800 transition-colors rounded-lg"
                >
                  Verstuur bericht
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}