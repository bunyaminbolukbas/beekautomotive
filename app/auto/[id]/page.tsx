import { notFound } from 'next/navigation';
import Image from 'next/image';
import { getCarById } from '@/lib/cars';
import { TopBar } from '@/components/TopBar';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ArrowLeft, Calendar, Gauge, Fuel, Settings, Zap } from 'lucide-react';
import Link from 'next/link';

interface Props {
  params: { id: string }
}

// REMOVE generateStaticParams completely - no static generation

// Make it an async server component for future Supabase integration
export default async function CarDetailPage({ params }: Props) {
  // This will work with Supabase later when you make getCarById async
  const car = getCarById(params.id);
  
  if (!car) {
    notFound();
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('nl-NL', {
      style: 'currency',
      currency: 'EUR',
      maximumFractionDigits: 0,
    }).format(price);
  };

  const specifications = [
    { icon: Calendar, label: 'Bouwjaar', value: car.year.toString() },
    { icon: Gauge, label: 'Kilometerstand', value: `${car.mileage.toLocaleString('nl-NL')} km` },
    { icon: Fuel, label: 'Brandstof', value: car.fuel },
    { icon: Settings, label: 'Transmissie', value: car.transmission },
    { icon: Zap, label: 'Vermogen', value: `${car.horsepower} pk` },
  ];

  // Rest of your component stays exactly the same
  return (
    <div className="min-h-screen">
      <TopBar />
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link 
          href="/"
          className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-6 sm:mb-8 group"
        >
          <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
          Terug naar overzicht
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <div>
            <div className="relative aspect-[4/3] sm:aspect-video mb-4 overflow-hidden rounded-lg">
              <Image
                src={car.images[0] || '/placeholder-car.jpg'}
                alt={car.title}
                width={800}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
            
            {car.images.length > 1 && (
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {car.images.slice(1, 4).map((image, index) => (
                  <div key={index} className="relative aspect-[4/3] sm:aspect-video overflow-hidden rounded-lg">
                    <Image
                      src={image}
                      alt={`${car.title} - ${index + 2}`}
                      width={200}
                      height={150}
                      className="w-full h-full object-cover hover:scale-105 transition-transform cursor-pointer"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          <div>
            <div className="mb-4 sm:mb-6">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">{car.title}</h1>
              <p className="text-lg sm:text-xl text-gray-600">{car.brand} {car.model}</p>
            </div>

            <div className="mb-6 sm:mb-8">
              <span className="text-3xl sm:text-4xl font-bold text-gray-900">{formatPrice(car.price)}</span>
            </div>

            <div className="bg-gray-50 rounded-lg p-4 sm:p-6 mb-6 sm:mb-8">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">Specificaties</h3>
              <div className="grid grid-cols-1 gap-3 sm:gap-4">
                {specifications.map((spec, index) => {
                  const IconComponent = spec.icon;
                  return (
                    <div key={index} className="flex items-center space-x-3">
                      <IconComponent className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500 flex-shrink-0" />
                      <div>
                        <div className="text-xs sm:text-sm text-gray-500">{spec.label}</div>
                        <div className="font-medium text-gray-900 text-sm sm:text-base">{spec.value}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="mb-6 sm:mb-8">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">Omschrijving</h3>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">{car.description}</p>
            </div>

            <div className="flex flex-col gap-3 sm:gap-4">
              <button className="w-full bg-black text-white py-3 px-6 font-semibold hover:bg-gray-800 transition-colors text-sm sm:text-base">
                Interesse? Neem contact op
              </button>
              <button className="w-full border border-black text-black py-3 px-6 font-semibold hover:bg-black hover:text-white transition-colors text-sm sm:text-base">
                Plan proefrit
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}