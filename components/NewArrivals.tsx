import { getNewArrivals } from '@/lib/cars';
import { CarCard } from './CarCard';

export function NewArrivals() {
  const cars = getNewArrivals();

  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
            Nieuw binnen
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 font-light px-4">
            Snel bij zijn, ze zijn namelijk zo verkocht.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {cars.map((car) => (
            <CarCard key={car.id} car={car} showNewBadge={true} />
          ))}
        </div>
      </div>
    </div>
  );
}