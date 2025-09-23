import { Star } from 'lucide-react';

export function WhyChooseUs() {
  return (
    <div className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/5490778/pexels-photo-5490778.jpeg?auto=compress&cs=tinysrgb&w=1600)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        {/* Gradient fade from black at top */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-transparent"></div>
        {/* Gradient fade to black at bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left side - Text content */}
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-8 sm:mb-10">
              Waarom kiezen voor Beek Automotive
            </h2>
            
            <div className="mb-10 sm:mb-12">
              <p className="text-lg sm:text-xl text-gray-200 font-medium mb-6 sm:mb-8">
                Elke autoliefhebber verdient het om in zijn of haar droomauto te rijden
              </p>

              <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-6">
                Ongeacht prijsklasse of type merk. Landsgrenzen horen geen beperkingen te vormen voor het kopen van je favoriete auto. Met die gedachte is Beek Automotive opgericht.
              </p>

              <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                Eigenaar Rutger van Beek is zijn hele leven al een autofanaat. Op jonge leeftijd wist hij dat zijn toekomst in de autowereld lag. Rutger studeerde aan de bekende IVA Business School. Tijdens zijn opleiding deed hij werkervaring op bij meerdere grote autodealers. Na jaren auto's te hebben verkocht, was de tijd rijp om zijn eigen bedrijf te beginnen.
              </p>
            </div>
          </div>

          {/* Right side - Rating */}
          <div className="flex justify-center lg:justify-end">
            <div className="bg-black/95 backdrop-blur-sm rounded-xl shadow-2xl p-10 sm:p-12 text-center max-w-sm border border-gray-800">
              <div className="text-6xl sm:text-7xl lg:text-8xl font-bold text-white mb-6 sm:mb-8">
                9.9
              </div>

              <div className="flex justify-center mb-6 sm:mb-8">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 sm:w-6 sm:h-6 fill-yellow-400 text-yellow-400 mx-0.5" />
                ))}
              </div>

              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                263 klanten waarderen ons gemiddeld met een 9.9/10.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}