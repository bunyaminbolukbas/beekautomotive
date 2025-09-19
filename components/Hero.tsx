import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative min-h-[70vh] sm:min-h-[80vh] flex items-center justify-start">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg?auto=compress&cs=tinysrgb&w=1600)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Drive en passie voor specialer, strakker en sneller.
          </h1>
          
          <p className="mt-6 sm:mt-8 text-lg sm:text-xl md:text-2xl text-gray-200 font-light">
            Wij zijn gespecialiseerd in datgene waar autoliefhebbers voor omkijken.
          </p>

          <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row gap-6">
            <Link
              href="/aanbod"
              className="group inline-flex items-center justify-center px-8 sm:px-10 py-4 text-base sm:text-lg font-medium text-white bg-transparent border-2 border-white hover:bg-white hover:text-black transition-all duration-300"
            >
              Bekijk ons aanbod
              <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link
              href="/over-ons"
              className="group inline-flex items-center justify-center px-8 sm:px-10 py-4 text-base sm:text-lg font-medium text-white bg-transparent border-2 border-white/50 hover:border-white hover:bg-white/10 transition-all duration-300"
            >
              Lees verder over Beek Automotive
              <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}