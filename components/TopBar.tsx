import { Star, Phone, Mail } from 'lucide-react';

export function TopBar() {
  return (
    <div className="bg-gray-50 border-b border-gray-200 hidden sm:block">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-10 text-xs lg:text-sm">
          <div className="flex items-center space-x-1 text-gray-600">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="ml-2 hidden md:inline">263 klanten waarderen ons gemiddeld met een 9.9/10</span>
            <span className="ml-2 md:hidden">9.9/10 rating</span>
          </div>
          
          <div className="flex items-center space-x-2 lg:space-x-4 text-gray-600">
            <div className="flex items-center space-x-1 hidden lg:flex">
              <Phone className="w-3 h-3" />
              <span>+31 34 123 45 67</span>
            </div>
            <div className="flex items-center space-x-1 hidden lg:flex">
              <Mail className="w-3 h-3" />
              <span>info@beekautomotive.nl</span>
            </div>
            <div className="flex items-center space-x-2 lg:hidden">
              <Phone className="w-3 h-3" />
              <Mail className="w-3 h-3" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}