export interface Car {
  id: string;
  title: string;
  brand: string;
  model: string;
  year: number;
  mileage: number;
  fuel: string;
  transmission: string;
  horsepower: number;
  description: string;
  price: number;
  images: string[];
  videos: string[];
  isNewArrival: boolean;
  createdAt: string;
}

// Dummy data for initial display
export const dummyCars: Car[] = [
  {
    id: '1',
    title: 'BMW M4 Competition',
    brand: 'BMW',
    model: 'M4 Competition',
    year: 2023,
    mileage: 2500,
    fuel: 'Benzine',
    transmission: 'Automaat',
    horsepower: 510,
    description: 'Een prachtige BMW M4 Competition in perfecte staat. Deze auto is nauwelijks gereden en verkeert in showroom conditie.',
    price: 125000,
    images: [
      'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/544542/pexels-photo-544542.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    videos: [],
    isNewArrival: true,
    createdAt: '2024-01-15'
  },
  {
    id: '2',
    title: 'Porsche 911 GT3',
    brand: 'Porsche',
    model: '911 GT3',
    year: 2022,
    mileage: 8500,
    fuel: 'Benzine',
    transmission: 'Handgeschakeld',
    horsepower: 502,
    description: 'Iconische Porsche 911 GT3 met handgeschakelde versnellingsbak. Een echte rijderscauto voor de liefhebber.',
    price: 185000,
    images: [
      'https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    videos: [],
    isNewArrival: true,
    createdAt: '2024-01-14'
  },
  {
    id: '3',
    title: 'Audi RS6 Avant',
    brand: 'Audi',
    model: 'RS6 Avant',
    year: 2023,
    mileage: 1200,
    fuel: 'Benzine',
    transmission: 'Automaat',
    horsepower: 600,
    description: 'De ultieme kombinatie van praktisch en krachtig. Deze RS6 Avant biedt ruimte voor het hele gezin zonder in te leveren op prestaties.',
    price: 145000,
    images: [
      'https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    videos: [],
    isNewArrival: true,
    createdAt: '2024-01-13'
  },
  {
    id: '4',
    title: 'Mercedes-AMG GT63 S',
    brand: 'Mercedes-AMG',
    model: 'GT63 S',
    year: 2022,
    mileage: 5600,
    fuel: 'Benzine',
    transmission: 'Automaat',
    horsepower: 630,
    description: 'Luxueuze vierdeurs coupé met indrukwekkende prestaties. Perfect voor wie comfort en sportiviteit wil combineren.',
    price: 165000,
    images: [
      'https://images.pexels.com/photos/909907/pexels-photo-909907.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1104007/pexels-photo-1104007.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    videos: [],
    isNewArrival: true,
    createdAt: '2024-01-12'
  },
  {
    id: '5',
    title: 'Lamborghini Huracán',
    brand: 'Lamborghini',
    model: 'Huracán',
    year: 2021,
    mileage: 12000,
    fuel: 'Benzine',
    transmission: 'Automaat',
    horsepower: 610,
    description: 'Exotische Italiaanse supersportauto die geen introductie nodig heeft. Pure emotie op vier wielen.',
    price: 225000,
    images: [
      'https://images.pexels.com/photos/2127733/pexels-photo-2127733.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1719648/pexels-photo-1719648.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    videos: [],
    isNewArrival: true,
    createdAt: '2024-01-11'
  },
  {
    id: '6',
    title: 'Ferrari F8 Tributo',
    brand: 'Ferrari',
    model: 'F8 Tributo',
    year: 2020,
    mileage: 8900,
    fuel: 'Benzine',
    transmission: 'Automaat',
    horsepower: 720,
    description: 'De perfecte balans tussen prestaties en dagelijks gebruik. Deze F8 Tributo is een waar kunstwerk op wielen.',
    price: 285000,
    images: [
      'https://images.pexels.com/photos/1805053/pexels-photo-1805053.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/919073/pexels-photo-919073.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    videos: [],
    isNewArrival: true,
    createdAt: '2024-01-10'
  }
];

// In a real app, this would be connected to a database
let carsStore: Car[] = [...dummyCars];

export const getCars = (): Car[] => {
  return carsStore;
};

export const getNewArrivals = (): Car[] => {
  return carsStore.filter(car => car.isNewArrival).slice(0, 6);
};

export const getCarById = (id: string): Car | undefined => {
  return carsStore.find(car => car.id === id);
};

export const addCar = (car: Omit<Car, 'id' | 'createdAt'>): Car => {
  const newCar: Car = {
    ...car,
    id: Date.now().toString(),
    createdAt: new Date().toISOString().split('T')[0]
  };
  carsStore.unshift(newCar);
  return newCar;
};

export const updateCar = (id: string, updates: Partial<Car>): Car | null => {
  const index = carsStore.findIndex(car => car.id === id);
  if (index === -1) return null;
  
  carsStore[index] = { ...carsStore[index], ...updates };
  return carsStore[index];
};

export const deleteCar = (id: string): boolean => {
  const index = carsStore.findIndex(car => car.id === id);
  if (index === -1) return false;
  
  carsStore.splice(index, 1);
  return true;
};