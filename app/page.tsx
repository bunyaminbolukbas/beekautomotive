import { NewNavigation } from '@/components/NewNavigation';
import { FixedContactButtons } from '@/components/FixedContactButtons';
import { Hero } from '@/components/Hero';
import { NewArrivals } from '@/components/NewArrivals';
import { BrandLogos } from '@/components/BrandLogos';
import { WhyChooseUs } from '@/components/WhyChooseUs';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <NewNavigation />
      <FixedContactButtons />
      <Hero />
      <NewArrivals />
      <BrandLogos />
      <WhyChooseUs />
      <Footer />
    </div>
  );
}