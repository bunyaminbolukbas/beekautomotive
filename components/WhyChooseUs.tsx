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
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                Eigenaar Rutger van Beek en Ilias hebben jarenlange ervaring in de auto industrie. We zijn pas tevreden als jij dat ook bent. Daarom doen we er alles aan om je een zorgeloze en plezierige ervaring te bieden bij het kopen van jouw droomauto. Met onze persoonlijke aanpak, transparantie en expertise zorgen we ervoor dat je met een gerust hart de weg op kunt.
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