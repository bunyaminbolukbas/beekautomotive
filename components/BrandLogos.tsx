import Image from 'next/image';

export function BrandLogos() {
  const brands = [
    {
      name: 'Mercedes-Benz',
      logo: 'https://logos-world.net/wp-content/uploads/2020/04/Mercedes-Logo.png'
    },
    {
      name: 'BMW',
      logo: 'https://logos-world.net/wp-content/uploads/2020/03/BMW-Logo.png'
    },
    {
      name: 'Audi',
      logo: 'https://logos-world.net/wp-content/uploads/2020/04/Audi-Logo.png'
    },
    {
      name: 'Porsche',
      logo: 'https://logos-world.net/wp-content/uploads/2021/03/Porsche-Logo.png'
    }
  ];

  return (
    <div className="bg-gray-50 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8">
            Op zoek naar iets speciaals?
          </h2>
          <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6">
            Als je op zoek bent naar iets nog specialer
          </p>
          <p className="text-sm sm:text-base text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            Ben je op zoek naar een bepaald merk, model of type maar staat je droomauto op dit moment niet op voorraad? 
            Geen paniek, we gaan graag voor je op zoek binnen ons internationale netwerk.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 mb-12 sm:mb-16">
          {brands.map((brand) => (
            <div key={brand.name} className="flex items-center justify-center p-6 sm:p-8 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="relative w-24 h-12 sm:w-32 sm:h-16">
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  width={128}
                  height={64}
                  className="object-contain w-full h-full grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="bg-black text-white px-8 sm:px-12 py-4 font-semibold hover:bg-gray-800 transition-colors text-sm sm:text-base">
            Vertel ons meer
          </button>
        </div>
      </div>
    </div>
  );
}