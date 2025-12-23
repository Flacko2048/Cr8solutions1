import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { Services } from '../components/Services';
import { Portfolio } from '../components/Portfolio';
import { Testimonials } from '../components/Testimonials';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';

interface HomePageProps {
  onBookingClick: () => void;
}

export function HomePage({ onBookingClick }: HomePageProps) {
  return (
    <div className="min-h-screen bg-white">
      <Header onBookingClick={onBookingClick} />
      <Hero onBookingClick={onBookingClick} />
      <Services />
      <Portfolio onBookingClick={onBookingClick} />
      <Testimonials />
      <Contact onBookingClick={onBookingClick} />
      <Footer onBookingClick={onBookingClick} />
    </div>
  );
}