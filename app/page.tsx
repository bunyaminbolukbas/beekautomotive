import { NewNavigation } from '@/components/NewNavigation';
import { FixedContactButtons } from '@/components/FixedContactButtons';
import { ScrollToTop } from '@/components/ScrollToTop';
import { Hero } from '@/components/Hero';
import { NewArrivals } from '@/components/NewArrivals';
import { SpecialOfferSection } from '@/components/SpecialOfferSection';
import { WhyChooseUs } from '@/components/WhyChooseUs';
import { Newsletter } from '@/components/Newsletter';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen" style={{backgroundColor: '#f2f4f6'}}>
      <NewNavigation />
      <FixedContactButtons />
      <ScrollToTop />
      <Hero />
      <NewArrivals />
      <SpecialOfferSection />
      <WhyChooseUs />
      <Newsletter />
      <Footer />
    </div>
  );
}