import { NewNavigation } from '@/components/NewNavigation';
import { FixedContactButtons } from '@/components/FixedContactButtons';
import { Footer } from '@/components/Footer';
import { Car, Heart, Users, Award } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <NewNavigation />
      <FixedContactButtons />
      
      {/* Hero Section with Team Photo */}
      <div className="relative py-24 sm:py-32">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&w=1600)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 sm:mb-8">
            Over Beek Automotive
          </h1>
          <p className="text-xl sm:text-2xl text-gray-200 max-w-3xl mx-auto">
            Van hobby tot passie, van passie tot professie
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        
        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center mb-20 sm:mb-32">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
              Ons verhaal
            </h2>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                Beek Automotive werd opgericht door twee gepassioneerde autoliefhebbers: 
                <strong> Rutger</strong> en <strong>Ilias</strong>. Wat begon als een gedeelde hobby 
                en liefde voor exclusieve auto's, groeide uit tot een professionele onderneming 
                die zich specialiseert in premium voertuigen.
              </p>
              <p>
                Rutger en Ilias leerden elkaar kennen door hun gemeenschappelijke passie voor 
                auto's. Weekenden werden doorgebracht op autobeurzen, circuits en bij dealers, 
                altijd op zoek naar die ene bijzondere auto. Hun kennis en netwerk groeiden, 
                en al snel begonnen vrienden en familie hen om advies te vragen bij het kopen 
                van hun droomauto.
              </p>
              <p>
                De stap van hobby naar fulltime baan was een natuurlijke evolutie. In 2020 
                besloten ze hun passie om te zetten in hun professie en richtten Beek Automotive op. 
                Hun missie: autoliefhebbers helpen bij het vinden van die ene speciale auto 
                die perfect bij hen past.
              </p>
            </div>
          </div>
          
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Rutger en Ilias - Oprichters van Beek Automotive"
              className="w-full h-96 sm:h-[500px] object-cover rounded-lg shadow-xl"
            />
            <div className="absolute bottom-4 left-4 bg-black bg-opacity-75 text-white p-4 rounded">
              <p className="font-semibold">Rutger & Ilias</p>
              <p className="text-sm">Oprichters Beek Automotive</p>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20 sm:mb-32">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-16">
            Onze waarden
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Passie</h3>
              <p className="text-gray-600">
                Auto's zijn onze passie. Deze liefde voor voertuigen delen we graag met onze klanten.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Persoonlijk</h3>
              <p className="text-gray-600">
                Elke klant is uniek. We nemen de tijd om uw wensen te begrijpen en de perfecte match te vinden.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Kwaliteit</h3>
              <p className="text-gray-600">
                Alleen de beste auto's komen in onze showroom. Kwaliteit staat altijd voorop.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                <Car className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibent text-gray-900 mb-4">Expertise</h3>
              <p className="text-gray-600">
                Jarenlange ervaring en een uitgebreid netwerk zorgen voor de beste service.
              </p>
            </div>
          </div>
        </div>

        {/* Mission Section */}
        <div className="bg-gray-50 rounded-2xl p-8 sm:p-12 lg:p-16 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
            Onze missie
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto mb-8">
            Bij Beek Automotive geloven we dat elke autoliefhebber zijn droomauto verdient. 
            Wij specialiseren ons in datgene waar autoliefhebbers voor omkijken: exclusieve, 
            bijzondere en premium voertuigen die niet alleen vervoermiddel zijn, maar een 
            statement maken.
          </p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Van sportauto's tot luxe sedans, van klassiekers tot moderne supercars - 
            wij helpen u bij het vinden van die ene auto die perfect bij u past.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}