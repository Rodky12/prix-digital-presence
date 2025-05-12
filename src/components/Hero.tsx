
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link as ScrollLink } from 'react-scroll';

const Hero = () => {
  return (
    <section id="home" className="relative py-32 md:py-40 bg-no-repeat bg-cover bg-center" 
      style={{backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1920&q=80")'}}>
      <div className="container">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          <div className="animate-fade-in text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              Excelência em serviços empresariais
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-xl text-gray-100">
              Grupo empresarial que atua nos segmentos Imobiliário, Shopping Center e Fundo de Recebíveis (FIDC), com mais de 50 anos de experiência no mercado brasileiro.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <ScrollLink to="companies" smooth={true} offset={-80} duration={500}>
                <Button className="bg-prix-blue hover:bg-opacity-90 font-medium px-6 py-6 text-base">
                  Conheça nossas empresas
                </Button>
              </ScrollLink>
              <ScrollLink to="products" smooth={true} offset={-80} duration={500}>
                <Button className="bg-prix-blue hover:bg-opacity-90 font-medium px-6 py-6 text-base">
                  Nossos produtos <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </ScrollLink>
            </div>
          </div>
          <div className="hidden md:flex justify-center items-center">
            <img 
              src="/lovable-uploads/82dd5968-a35a-46ef-affc-9b22172a5db1.png" 
              alt="Grupo Prix Logo" 
              className="w-auto h-32"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
