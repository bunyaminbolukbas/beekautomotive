import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function SpecialOfferSection() {
  return (
    <div className="bg-black py-12 sm:py-16 md:py-24">
      <div className="relative">
        <div
          className="aspect-[4/3] sm:aspect-[16/9] overflow-hidden"
          style={{
            backgroundImage: 'url(/audirs6.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          {/* Dark overlay for better text contrast */}
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          {/* Gradient fade from black at top */}
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-transparent"></div>
          {/* Gradient fade to black at bottom */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>

          {/* Text Content Overlay */}
          <div className="absolute inset-0 flex items-center justify-center sm:justify-end p-4 sm:p-6 lg:p-8">
            <div className="max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl text-left">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 sm:mb-8 lg:mb-10">
                Als je op zoek bent naar iets nog specialer
              </h2>

              <div className="mb-6 sm:mb-8 lg:mb-12">
                <p className="text-base sm:text-lg md:text-xl text-gray-200 font-medium mb-4 sm:mb-6 lg:mb-8">
                  We gaan graag voor je op zoek binnen ons internationale netwerk
                </p>

                <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed">
                  Ben je op zoek naar een bepaald merk, model of type maar staat je droomauto op dit moment niet op voorraad? Geen paniek, met ons uitgebreide netwerk vinden we jouw droomauto.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}