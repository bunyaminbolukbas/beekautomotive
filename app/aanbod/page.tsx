import { getCars } from '@/lib/cars';
import { NewNavigation } from '@/components/NewNavigation';
import { FixedContactButtons } from '@/components/FixedContactButtons';
import { Footer } from '@/components/Footer';
import { CarCard } from '@/components/CarCard';
import { ChevronDown, Search, Grid3X3 } from 'lucide-react';

export default function AanbodPage() {
  const cars = getCars();

  return (
    <div className="min-h-screen" style={{backgroundColor: '#0A0E14'}}>
      <NewNavigation />
      <FixedContactButtons />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-light text-white mb-4">
            Aanbod <span className="text-gray-400">({cars.length})</span>
          </h1>
          <p className="text-lg text-gray-400 mb-12">
            Bekijk onze nieuwste modellen
          </p>
        </div>

        {/* Filter Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between mb-8 gap-4">
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Merk Filter */}
            <div className="relative">
              <button className="flex items-center justify-between w-48 px-4 py-3 bg-transparent border-b border-gray-600 text-gray-300 hover:border-gray-400 transition-colors">
                <span>Merk</span>
                <ChevronDown className="w-5 h-5 text-gray-400" />
              </button>
            </div>

            {/* Brandstof Filter */}
            <div className="relative">
              <button className="flex items-center justify-between w-48 px-4 py-3 bg-transparent border-b border-gray-600 text-gray-300 hover:border-gray-400 transition-colors">
                <span>Brandstof</span>
                <ChevronDown className="w-5 h-5 text-gray-400" />
              </button>
            </div>
          </div>

          {/* Right Side Icons */}
          <div className="flex items-center gap-4">
            <button className="p-2 text-gray-400 hover:text-white transition-colors">
              <Search className="w-6 h-6" />
            </button>
            <button className="p-2 text-blue-400 hover:text-blue-300 transition-colors">
              <Grid3X3 className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-6 lg:gap-6">
          {cars.map((car) => (
            <CarCard key={car.id} car={car} showNewBadge={false} />
          ))}
        </div>

        {cars.length === 0 && (
          <div className="text-center py-8 sm:py-12">
            <p className="text-gray-300 text-lg">Momenteel geen auto's beschikbaar.</p>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}