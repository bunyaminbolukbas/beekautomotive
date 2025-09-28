import { NewNavigation } from '@/components/NewNavigation';
import { FixedContactButtons } from '@/components/FixedContactButtons';
import { Footer } from '@/components/Footer';
import { Star, Quote } from 'lucide-react';

export default function ReviewsPage() {
  const reviews = [
    {
      id: 1,
      name: 'Bianca Vlaanderen',
      rating: 5,
      date: '2 weken geleden',
      text: 'Gisteren 10 sept mijn nieuw aangekochte Ford focus opgehaald bij car relief en is keurig afgeleverd.... Was beschadiging op bumper en heeft hij heel mooi laten herstellen.. Erg blij mee en rijd heerlijk. In love with this Ford!!! Dank je wel Rutger'
    },
    {
      id: 2,
      name: 'Dennis',
      rating: 5,
      date: 'een maand geleden',
      text: 'Halverwege juni kocht ik een occasion bij Car-Relief in Wekerom. Ik kon op korte termijn de auto komen bezichtigen en er een proefrit mee maken...'
    },
    {
      id: 3,
      name: 'Jan Kelder',
      rating: 5,
      date: 'een maand geleden',
      text: 'Op de eerste plaats kwam hier voor het eerst dus was sceptisch. maar jongens om eerlijk te zijn alles in de puntjes verzorgd kan niet anders zeggen deze jongens...'
    },
    {
      id: 4,
      name: 'Stefanie Scheffers',
      rating: 5,
      date: '2 maanden geleden',
      text: 'Ik zou Car Relief Automotive zeker aanraden! Vriendelijk geholpen tijdens het eerste bezoek door Rutger. Eerlijke en duidelijke communicatie. De verkoop (oude...'
    },
    {
      id: 5,
      name: 'Frans Warntjes',
      rating: 5,
      date: '3 maanden geleden',
      text: 'Zeer tevreden over de service en communicatie van Car Relief. Wij zijn geholpen door Rutger. Wij wonen in het noorden van Nederland en de auto werd thuis...'
    },
    {
      id: 6,
      name: 'Silva Hoenen',
      rating: 5,
      date: '4 maanden geleden',
      text: 'Ontzettend fijne garage en een zeer prettige ervaring. Vanaf het eerste bericht ben ik snel, professioneel en heel vriendelijk geholpen door Rutger en Ilias...'
    }
  ];

  const averageRating = 4.8;
  const totalReviews = 69;

  return (
    <div className="min-h-screen" style={{backgroundColor: '#0A0E14'}}>
      <NewNavigation />
      <FixedContactButtons />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        {/* Header */}
        <div className="text-center mb-16 sm:mb-20">
          <h1 className="text-4xl sm:text-5xl font-light text-white mb-4">
            Wat onze klanten zeggen
          </h1>

          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 sm:w-8 sm:h-8 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <div className="text-2xl sm:text-3xl font-bold text-white">{averageRating}/5</div>
          </div>

          <p className="text-lg sm:text-xl text-gray-300">
            Gebaseerd op {totalReviews} Google reviews
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {reviews.map((review) => (
            <div key={review.id} className="bg-gray-800 border border-gray-700 p-6 sm:p-8 hover:bg-gray-750 transition-colors duration-300">
              <div className="mb-6">
                <h3 className="font-semibold text-white text-sm sm:text-base">{review.name}</h3>
                <p className="text-xs sm:text-sm text-gray-400">{review.date}</p>
              </div>

              <div className="flex items-center space-x-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <div className="relative">
                <Quote className="absolute -top-2 -left-2 w-6 h-6 text-gray-600" />
                <p className="text-gray-300 leading-relaxed text-sm sm:text-base pl-4">
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
            className="inline-block bg-gray-800 hover:bg-gray-700 text-white px-8 py-3 transition-colors font-medium text-base"
          >
            <span>Bekijk alle reviews op Google</span>
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
}