import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import ProductCategories from './components/ProductCategories';
import WhyChooseUs from './components/WhyChooseUs';
import Contact from './components/Contact';
import WhatsAppButton from './components/WhatsAppButton';
import Footer from './components/Footer';
import Maps from './components/Maps';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'products', 'why-choose-us', 'contact', 'location'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      <Hero setActiveSection={setActiveSection} />
      <About />
      <ProductCategories />
      <WhyChooseUs />
      <Contact />
      <Maps />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;