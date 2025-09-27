import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function SpecialOfferSection() {
  return (
    <div className="bg-black py-12 sm:py-16 md:py-24">
      <div className="relative">
        <div
          className="aspect-[4/3] sm:aspect-[16/9] overflow-hidden"
          style={{
            backgroundImage: 'url(/audirs6.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          {/* Dark overlay for better contrast */}
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          {/* Gradient fade from black at top */}
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-transparent"></div>
          {/* Gradient fade to black at bottom */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
        </div>
      </div>
    </div>
  );
}