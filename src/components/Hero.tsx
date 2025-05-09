
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link as ScrollLink } from 'react-scroll';

const Hero = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-32 bg-gradient-to-b from-white to-gray-50">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-prix-blue mb-4 leading-tight">
              Soluções financeiras e imobiliárias com credibilidade
            </h1>
            <p className="text-lg md:text-xl text-prix-gray-dark mb-8 max-w-xl">
              O Grupo Prix oferece serviços de administração de imóveis comerciais e antecipação de recebíveis com excelência, transparência e compromisso.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <ScrollLink to="companies" smooth={true} offset={-80} duration={500}>
                <Button className="bg-prix-blue hover:bg-opacity-90 font-medium px-6 py-6 text-base">
                  Conheça nossas empresas
                </Button>
              </ScrollLink>
              <ScrollLink to="products" smooth={true} offset={-80} duration={500}>
                <Button variant="outline" className="border-prix-blue text-prix-blue hover:bg-prix-blue/5 font-medium px-6 py-6 text-base">
                  Nossos produtos <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </ScrollLink>
            </div>
          </div>
          <div className="hidden md:block animate-fade-in">
            <div className="relative">
              <div className="absolute inset-0 bg-prix-blue rounded-xl opacity-10 transform rotate-3"></div>
              <div className="relative bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                <img 
                  src="/lovable-uploads/8d6a373d-335c-4f5e-b652-d87676af30cc.png" 
                  alt="Grupo Prix Logo" 
                  className="w-full h-auto mb-6"
                />
                <div className="space-y-3">
                  <div className="h-3 bg-gray-100 rounded-full w-5/6"></div>
                  <div className="h-3 bg-gray-100 rounded-full"></div>
                  <div className="h-3 bg-gray-100 rounded-full w-4/6"></div>
                </div>
                <div className="mt-8 flex justify-between items-center">
                  <div className="w-24 h-8 bg-prix-blue rounded-md"></div>
                  <div className="w-10 h-10 rounded-full bg-prix-gray-light flex items-center justify-center">
                    <ArrowRight className="h-5 w-5 text-prix-gray-dark" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background elements */}
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-prix-gray-light opacity-20 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-prix-blue opacity-5 rounded-full blur-3xl -z-10"></div>
    </section>
  );
};

export default Hero;
