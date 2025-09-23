import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function SpecialOfferSection() {
  return (
    <div className="bg-black py-12 sm:py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Large Image with Overlay Text */}
        <div className="relative">
          <div
            className="aspect-[16/9] rounded-3xl overflow-hidden shadow-lg"
            style={{
              backgroundImage: 'url(https://images.pexels.com/photos/1335077/pexels-photo-1335077.jpeg?auto=compress&cs=tinysrgb&w=1600)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          >
            {/* Dark overlay for better text contrast */}
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>

            {/* Text Content Overlay */}
            <div className="absolute inset-0 flex items-center justify-center sm:justify-end p-4 sm:p-8 sm:pr-16">
              <div className="bg-white/95 backdrop-blur-sm p-6 sm:p-8 md:p-12 rounded-3xl shadow-xl max-w-md sm:max-w-lg md:max-w-2xl text-center border border-gray-200">
                <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-4 sm:mb-6">
                  Als je op zoek bent naar iets nog specialer
                </h3>

                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed">
                  Ben je op zoek naar een bepaald merk, model of type maar staat je droomauto op dit moment niet op voorraad? Geen paniek, we gaan graag voor je op zoek binnen ons internationale netwerk.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}