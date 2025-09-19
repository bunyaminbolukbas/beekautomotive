import { TopBar } from '@/components/TopBar';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Star, Quote } from 'lucide-react';

export default function ReviewsPage() {
  const reviews = [
    {
      id: 1,
      name: 'Marco van der Berg',
      rating: 5,
      date: '2 weken geleden',
      text: 'Fantastische service bij Beek Automotive! Rutger en Ilias hebben me perfect geholpen bij het vinden van mijn droomauto. Hun kennis en passie voor auto\'s is echt indrukwekkend. Zeer professioneel en eerlijk in hun advies.',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100&h=100'
    },
    {
      id: 2,
      name: 'Sandra Jansen',
      rating: 5,
      date: '1 maand geleden',
      text: 'Uitstekende ervaring! De auto was precies zoals beschreven en de service was top. Rutger nam alle tijd om alles uit te leggen en er waren geen verrassingen. Echt een betrouwbare dealer!',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100'
    },
    {
      id: 3,
      name: 'Thomas de Wit',
      rating: 5,
      date: '3 weken geleden',
      text: 'Geweldige ervaring bij Beek Automotive. Ilias heeft me fantastisch geholpen bij de aankoop van mijn BMW M4. Zeer deskundig en altijd bereikbaar voor vragen. Absoluut een aanrader!',
      avatar: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=100&h=100'
    },
    {
      id: 4,
      name: 'Lisa Vermeulen',
      rating: 5,
      date: '2 maanden geleden',
      text: 'Top service! Rutger en Ilias zijn echte professionals die weten waar ze het over hebben. Ze hebben me geholpen bij het vinden van de perfecte auto binnen mijn budget. Zeer tevreden!',
      avatar: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=100&h=100'
    },
    {
      id: 5,
      name: 'Robert Bakker',
      rating: 5,
      date: '1 maand geleden',
      text: 'Beek Automotive staat voor kwaliteit en betrouwbaarheid. De auto die ik kocht was in perfecte staat en de service was uitstekend. Ilias heeft me geweldig geholpen met alle formaliteiten.',
      avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=100&h=100'
    },
    {
      id: 6,
      name: 'Emma Scholten',
      rating: 5,
      date: '3 maanden geleden',
      text: 'Fantastische ervaring! Rutger en Ilias zijn zeer kundig en eerlijk. Ze hebben me niet geprobeerd iets aan te smeren wat ik niet nodig had. Echte autoliefhebbers die hun passie delen!',
      avatar: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=100&h=100'
    }
  ];

  const averageRating = 9.9;
  const totalReviews = 263;

  return (
    <div className="min-h-screen">
      <TopBar />
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        {/* Header */}
        <div className="text-center mb-16 sm:mb-20">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 sm:mb-8">
            Wat onze klanten zeggen
          </h1>
          
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 sm:w-8 sm:h-8 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <div className="text-2xl sm:text-3xl font-bold text-gray-900">{averageRating}/10</div>
          </div>
          
          <p className="text-lg sm:text-xl text-gray-600">
            Gebaseerd op {totalReviews} Google reviews
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {reviews.map((review) => (
            <div key={review.id} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 sm:p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center space-x-4 mb-6">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold text-gray-900 text-sm sm:text-base">{review.name}</h3>
                  <p className="text-xs sm:text-sm text-gray-500">{review.date}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              <div className="relative">
                <Quote className="absolute -top-2 -left-2 w-6 h-6 text-gray-200" />
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base pl-4">
                  {review.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Google Reviews Link */}
        <div className="text-center mt-16 sm:mt-20">
          <a
            href="https://www.google.com/maps/place/Beek+Automotive"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-black text-white px-8 sm:px-12 py-4 font-semibold hover:bg-gray-800 transition-colors text-sm sm:text-base"
          >
            <span>Bekijk alle reviews op Google</span>
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
}