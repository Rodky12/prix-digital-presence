
import { useEffect } from 'react';
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import History from "@/components/History";
import Products from "@/components/Products";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach((element) => {
        const position = element.getBoundingClientRect();
        // If element is in viewport
        if (position.top < window.innerHeight * 0.85 && position.bottom >= 0) {
          element.classList.add('animate');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    // Call once on mount to check for elements already in view
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <History />
      <Products />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
