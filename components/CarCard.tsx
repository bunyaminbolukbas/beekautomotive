import Link from 'next/link';
import Image from 'next/image';
import { Car } from '@/lib/cars';

interface CarCardProps {
  car: Car;
  showNewBadge?: boolean;
}

export function CarCard({ car, showNewBadge = true }: CarCardProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('nl-NL', {
      style: 'currency',
      currency: 'EUR',
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <Link href={`/auto/${car.id}`} className="group block">
      <div className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden border border-gray-100 mx-auto max-w-sm sm:max-w-none">
        <div className="relative aspect-[4/3] sm:aspect-video overflow-hidden">
          <Image
            src={car.images[0] || '/placeholder-car.jpg'}
            alt={car.title}
            width={400}
            height={300}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {showNewBadge && car.isNewArrival && (
            <div className="absolute top-4 right-4">
              <span className="bg-black text-white px-2 sm:px-3 py-1 text-xs sm:text-sm font-medium">
                VERSE VANGST
              </span>
            </div>
          )}
        </div>
        
        <div className="p-4 sm:p-6">
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors line-clamp-2">
            {car.title}
          </h3>
          
          <div className="flex items-center justify-between text-xs sm:text-sm text-gray-600 mb-3">
            <span>{car.year}</span>
            <span>{car.mileage.toLocaleString('nl-NL')} km</span>
            <span>{car.horsepower} pk</span>
          </div>
          
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <span className="text-xl sm:text-2xl font-bold text-gray-900">
              {formatPrice(car.price)}
            </span>
            <span className="text-xs sm:text-sm text-gray-500 capitalize">
              {car.fuel} • {car.transmission}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}