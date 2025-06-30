
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link as ScrollLink } from 'react-scroll';

const Hero = () => {
  return (
    <section id="home" className="relative py-32 md:py-40">
      {/* Video Background */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          onError={(e) => {
            console.log('Video failed to load, falling back to background image');
            e.currentTarget.style.display = 'none';
          }}
        >
          <source src="https://drive.google.com/uc?export=download&id=1wQn6AK2BSqnfIvvXyfdnZKeab-ALPDhF" type="video/mp4" />
        </video>
        {/* Overlay escuro para melhor legibilidade do texto */}
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      </div>

      {/* Fallback Background Image (caso o vídeo não carregue) */}
      <div 
        className="absolute inset-0 bg-no-repeat bg-cover bg-center"
        style={{backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("/lovable-uploads/0bd10c8e-5d0f-4885-8015-fcc13a4708a3.png")'}}
      ></div>

      {/* Content */}
      <div className="container relative z-10">
        <div className="flex flex-col items-center justify-center">
          <div className="animate-fade-in text-white text-center max-w-3xl mx-auto">
            <div className="mb-8 flex justify-center">
              <img 
                src="/lovable-uploads/82dd5968-a35a-46ef-affc-9b22172a5db1.png" 
                alt="Grupo Prix" 
                className="h-28 filter brightness-0 invert"
              />
            </div>
            <p className="text-lg md:text-xl mb-8 text-gray-100 text-justify">
              Grupo empresarial que atua nos segmentos Imobiliário, de Shopping Centers e de Fundos de Recebíveis (FIDC), com mais de 50 anos de experiência no mercado.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <ScrollLink to="history" smooth={true} offset={-80} duration={500}>
                <Button className="bg-prix-blue hover:bg-opacity-90 font-medium px-6 py-6 text-base">
                  Empresas do Grupo
                </Button>
              </ScrollLink>
              <ScrollLink to="products" smooth={true} offset={-80} duration={500}>
                <Button className="bg-prix-blue hover:bg-opacity-90 font-medium px-6 py-6 text-base">
                  Produtos FIDC <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </ScrollLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
