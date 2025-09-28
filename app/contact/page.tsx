import { NewNavigation } from '@/components/NewNavigation';
import { FixedContactButtons } from '@/components/FixedContactButtons';
import { Footer } from '@/components/Footer';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="min-h-screen" style={{backgroundColor: '#0A0E14'}}>
      <NewNavigation />
      <FixedContactButtons />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24 pb-16 sm:pb-20 ml-24 sm:ml-40 lg:ml-48">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left side - Text Content & Google Maps */}
          <div className="space-y-8">
            {/* Text Content */}
            <div className="space-y-10">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-white leading-tight">
                Heeft u vragen of wilt<br />
                u meer informatie?
              </h2>

              <p className="text-lg text-gray-300 leading-relaxed max-w-lg">
                Bij Beek Automotive begrijpen we dat elke klant uniek is, en dat verdient
                een persoonlijke benadering. Daarom hechten we veel waarde aan
                persoonlijk contact en een op maat gemaakte service. Heeft u
                vragen of wilt u meer informatie? Ons team staat altijd klaar om u te
                helpen.
              </p>
            </div>

            {/* Google Maps */}
            <div className="h-[300px] bg-gray-800">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2428.123456789!2d5.5555555!3d52.1666666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sHet%20Laar%206%2C%206733%20BZ%20Wekerom!5e0!3m2!1snl!2snl!4v1234567890123"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              ></iframe>
            </div>
          </div>

          {/* Right side - Contact Information */}
          <div className="space-y-8">
            {/* Contact Information */}
            <div className="space-y-6">
              {/* Address */}
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-slate-600 hover:bg-slate-700 transition-all duration-300 flex items-center justify-center flex-shrink-0 border border-gray-500/20">
                  <MapPin className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="text-base font-medium text-slate-400 mb-1">Adres</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Het Laar 6<br />
                    6733 BZ Wekerom
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-slate-600 hover:bg-slate-700 transition-all duration-300 flex items-center justify-center flex-shrink-0 border border-gray-500/20">
                  <Phone className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-slate-400 text-sm">
                    <a href="tel:+31857926363" className="hover:text-white transition-colors">
                      +31 (0)85 792 6363
                    </a>
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-slate-600 hover:bg-slate-700 transition-all duration-300 flex items-center justify-center flex-shrink-0 border border-gray-500/20">
                  <Mail className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-slate-400 text-sm">
                    <a href="mailto:info@beekautomotive.nl" className="hover:text-white transition-colors">
                      INFO@BEEKAUTOMOTIVE.NL
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Opening Hours Sections */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-light text-slate-400 mb-3">Showroom</h3>
                <p className="text-slate-400 text-sm">MA-VR: 9.00 - 18.00</p>
                <p className="text-slate-400 text-sm">ZA: 10.00 - 16.00</p>
              </div>

              <div>
                <h3 className="text-2xl font-light text-slate-400 mb-3">Service</h3>
                <p className="text-slate-400 text-sm">MA-VR: 8.00 - 17.00</p>
              </div>
            </div>
          </div>
        </div>

      </div>

      <Footer />
    </div>
  );
}