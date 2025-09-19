import { getCars } from '@/lib/cars';
import { TopBar } from '@/components/TopBar';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { CarCard } from '@/components/CarCard';

export default function AanbodPage() {
  const cars = getCars();

  return (
    <div className="min-h-screen">
      <TopBar />
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            Ons Aanbod
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            Ontdek onze collectie van exclusieve sportauto's en luxe voertuigen. 
            Elk voertuig is zorgvuldig geselecteerd en in topconditie.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {cars.map((car) => (
            <CarCard key={car.id} car={car} showNewBadge={false} />
          ))}
        </div>

        {cars.length === 0 && (
          <div className="text-center py-8 sm:py-12">
            <p className="text-gray-500 text-lg">Momenteel geen auto's beschikbaar.</p>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}