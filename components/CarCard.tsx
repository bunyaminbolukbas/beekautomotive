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
      <div className="bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden mx-auto w-72 sm:w-80">
        {/* Car Image */}
        <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-orange-200 to-orange-400">
          <Image
            src={car.images[0] || '/placeholder-car.jpg'}
            alt={car.title}
            width={400}
            height={300}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Car Info */}
        <div className="p-3">
          {/* Title */}
          <h3 className="text-base font-normal text-white mb-1 group-hover:text-blue-300 transition-colors">
            {car.title}
          </h3>

          {/* Subtitle */}
          <p className="text-xs text-gray-400 mb-2 uppercase tracking-wide">
            {car.horsepower}PK-PANO-MERIDIAN-MASSAGE
          </p>

          {/* Divider */}
          <div className="border-t border-gray-600 mb-2"></div>

          {/* Three Column Specs */}
          <div className="grid grid-cols-3 gap-1 mb-3">
            <div className="text-center">
              <div className="text-xs text-gray-400 mb-1">1e reg.</div>
              <div className="text-sm text-white font-medium">{car.year}</div>
            </div>
            <div className="text-center border-l border-r border-gray-600">
              <div className="text-xs text-gray-400 mb-1">KM-stand</div>
              <div className="text-sm text-white font-medium">{car.mileage.toLocaleString('nl-NL')}</div>
            </div>
            <div className="text-center">
              <div className="text-xs text-gray-400 mb-1">Brandstof</div>
              <div className="text-sm text-white font-medium capitalize">{car.fuel}</div>
            </div>
          </div>

          {/* Price and ID */}
          <div className="flex justify-between items-end">
            <div className="text-xs text-gray-400">
              ID: #{car.id}
            </div>
            <div className="text-right">
              <div className="text-lg font-normal text-white">
                {formatPrice(car.price)}
              </div>
              <div className="text-xs text-gray-400">(BTW)</div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}