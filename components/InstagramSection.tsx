import { Instagram } from 'lucide-react';
import Image from 'next/image';

export function InstagramSection() {
  const instagramPosts = [
    {
      id: 1,
      image: 'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=300&h=300',
      alt: 'BMW M4 in showroom'
    },
    {
      id: 2,
      image: 'https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg?auto=compress&cs=tinysrgb&w=300&h=300',
      alt: 'Porsche 911 GT3'
    },
    {
      id: 3,
      image: 'https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=300&h=300',
      alt: 'Audi RS6 Avant'
    },
    {
      id: 4,
      image: 'https://images.pexels.com/photos/909907/pexels-photo-909907.jpeg?auto=compress&cs=tinysrgb&w=300&h=300',
      alt: 'Mercedes-AMG GT63 S'
    },
    {
      id: 5,
      image: 'https://images.pexels.com/photos/2127733/pexels-photo-2127733.jpeg?auto=compress&cs=tinysrgb&w=300&h=300',
      alt: 'Lamborghini Huracán'
    },
    {
      id: 6,
      image: 'https://images.pexels.com/photos/1805053/pexels-photo-1805053.jpeg?auto=compress&cs=tinysrgb&w=300&h=300',
      alt: 'Ferrari F8 Tributo'
    }
  ];

  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Instagram className="w-6 h-6 sm:w-8 sm:h-8 text-gray-900" />
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 px-4">
              Volg ons op Instagram
            </h2>
          </div>
          <p className="text-base sm:text-lg text-gray-600">
            @beekautomotive
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 max-w-6xl mx-auto">
          {instagramPosts.slice(0, 4).map((post) => (
            <div key={post.id} className="relative aspect-square overflow-hidden rounded-lg group cursor-pointer">
              <Image
                src={post.image}
                alt={post.alt}
                width={400}
                height={400}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                <Instagram className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <a
            href="https://instagram.com/beekautomotive"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <Instagram className="w-5 h-5" />
            <span className="text-sm sm:text-base">Bekijk meer op Instagram</span>
          </a>
        </div>
      </div>
    </div>
  );
}