
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import WhatsappButton from '../components/WhatsappButton';
import { SchedulePopupProvider } from '../context/SchedulePopupContext';

const Index = () => {
  return (
    <SchedulePopupProvider>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Hero />
          <About />
          <Services />
          <Contact />
        </main>
        <Footer />
        <WhatsappButton />
      </div>
    </SchedulePopupProvider>
  );
};

export default Index;
