import { TopBar } from '@/components/TopBar';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { NewArrivals } from '@/components/NewArrivals';
import { BrandLogos } from '@/components/BrandLogos';
import { InstagramSection } from '@/components/InstagramSection';
import { WhyChooseUs } from '@/components/WhyChooseUs';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <TopBar />
      <Navbar />
      <Hero />
      <NewArrivals />
      <BrandLogos />
      <InstagramSection />
      <WhyChooseUs />
      <Footer />
    </div>
  );
}