'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { getCars, addCar, deleteCar, Car } from '@/lib/cars';
import { Plus, Trash2, Edit, LogOut } from 'lucide-react';
import { AddCarForm } from '@/components/AddCarForm';

export default function AdminDashboard() {
  const [cars, setCars] = useState<Car[]>([]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Check authentication
    const authStatus = localStorage.getItem('adminAuth');
    if (authStatus !== 'true') {
      router.push('/admin/login');
      return;
    }
    setIsAuthenticated(true);
    setCars(getCars());
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('adminAuth');
    router.push('/admin/login');
  };

  const handleAddCar = (carData: Omit<Car, 'id' | 'createdAt'>) => {
    const newCar = addCar(carData);
    setCars([newCar, ...cars]);
    setShowAddForm(false);
  };

  const handleDeleteCar = (id: string) => {
    if (confirm('Weet je zeker dat je deze auto wilt verwijderen?')) {
      deleteCar(id);
      setCars(cars.filter(car => car.id !== id));
    }
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('nl-NL', {
      style: 'currency',
      currency: 'EUR',
      maximumFractionDigits: 0,
    }).format(price);
  };

  if (!isAuthenticated) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl sm:text-2xl font-bold text-gray-900">Admin Dashboard</h1>
            <button
              onClick={handleLogout}
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 text-sm sm:text-base"
            >
              <LogOut className="w-4 h-4" />
              <span className="hidden sm:inline">Uitloggen</span>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6 sm:mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-900">Auto's beheren</h2>
          <button
            onClick={() => setShowAddForm(true)}
            className="flex items-center space-x-2 bg-gray-900 text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-colors text-sm sm:text-base"
          >
            <Plus className="w-4 h-4" />
            <span>Auto toevoegen</span>
          </button>
        </div>

        {/* Cars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {cars.map((car) => (
            <div key={car.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
              <div className="aspect-[4/3] sm:aspect-video bg-gray-200 relative">
                {car.images[0] ? (
                  <img
                    src={car.images[0]}
                    alt={car.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-400">
                    Geen foto
                  </div>
                )}
                {car.isNewArrival && (
                  <div className="absolute top-2 right-2 bg-black text-white px-2 py-1 text-xs sm:text-sm">
                    VERSE VANGST
                  </div>
                )}
              </div>
              
              <div className="p-3 sm:p-4">
                <h3 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base line-clamp-2">{car.title}</h3>
                <p className="text-sm text-gray-600 mb-2">{car.year} • {car.mileage.toLocaleString('nl-NL')} km</p>
                <p className="font-bold text-base sm:text-lg text-gray-900 mb-3">{formatPrice(car.price)}</p>
                
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-500 truncate">ID: {car.id}</span>
                  <div className="flex space-x-2">
                    <button className="p-1 text-gray-400 hover:text-gray-600">
                      <Edit className="w-4 h-4" />
                    </button>
                    <button 
                      onClick={() => handleDeleteCar(car.id)}
                      className="p-1 text-gray-400 hover:text-red-600"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {cars.length === 0 && (
          <div className="text-center py-8 sm:py-12">
            <p className="text-gray-500">Geen auto's gevonden.</p>
          </div>
        )}
      </div>

      {/* Add Car Modal */}
      {showAddForm && (
        <AddCarForm
          onClose={() => setShowAddForm(false)}
          onSubmit={handleAddCar}
        />
      )}
    </div>
  );
}