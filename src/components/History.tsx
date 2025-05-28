
import { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';

const History = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="history" className="section bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-prix-blue mb-4">Grupo Prix - Empresas</h2>
          <div className="w-20 h-1 bg-prix-blue mx-auto mb-6"></div>
          <p className="text-prix-gray-dark max-w-2xl mx-auto">
            Conheça nossas empresas, suas trajetórias e seus ramos de atuação.
          </p>
        </div>

        <div ref={sectionRef} className="animate-on-scroll grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-sm p-8 transition-transform duration-300 hover:-translate-y-1 hover:shadow-md border border-gray-100 flex flex-col h-full">
            <div className="flex items-start gap-4 mb-6">
              <div className="flex items-center justify-center">
                <img 
                  src="/lovable-uploads/3199546a-e493-4a69-8495-bf90fa77afff.png" 
                  alt="Magazine Pelicano" 
                  style={{ width: '251.7px', height: '151px' }}
                  className="object-contain"
                />
              </div>
            </div>
            <div className="flex-grow flex flex-col">
              <div className="min-h-20 mb-4">
                <p className="text-prix-gray-dark">Fundado em 1971, o Magazine Pelicano foi pioneiro no comércio varejista de bancas de mercadorias e artigos de época.</p>
              </div>
              <div className="min-h-20 mb-6 flex-grow">
                <p className="text-prix-gray-dark">Revolucionou este mercado atingindo a marca de mais de 200 filiais e 3.000 colaboradores distribuídos por todo o Brasil.</p>
              </div>
              <div className="flex items-center space-x-2 mt-auto">
                <div className="inline-block px-3 py-1 bg-prix-blue/5 rounded-full text-prix-blue text-sm font-medium">
                  De 1971 a 2008
                </div>
                <Link to="/magazine-pelicano">
                  <Button variant="ghost" size="sm" className="text-prix-blue hover:bg-prix-blue/10 p-1 h-auto">
                    Saiba Mais <ArrowRight className="ml-1 w-3 h-3" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8 transition-transform duration-300 hover:-translate-y-1 hover:shadow-md border border-gray-100 delay-100 flex flex-col h-full">
            <div className="flex items-start gap-4 mb-6">
              <div className="flex items-center justify-center">
                <img 
                  src="/lovable-uploads/fd4e802f-7f62-413d-90dd-98e44d594460.png" 
                  alt="São Felipe Comercial" 
                  style={{ width: '267.2px', height: '110px' }}
                  className="object-contain"
                />
              </div>
            </div>
            <div className="flex-grow flex flex-col">
              <div className="min-h-20 mb-4">
                <p className="text-prix-gray-dark">Com atuação nacional, desde 1995 a São Felipe Comercial é responsável pela gestão de um portfólio de imóveis próprios para locação.</p>
              </div>
              <div className="min-h-20 mb-6 flex-grow">
                <p className="text-prix-gray-dark">Incluindo shopping centers, centros comerciais, galpões logísticos, andares corporativos e lojas nos grandes centros de varejo das principais cidades brasileiras.</p>
              </div>
              <div className="flex items-center space-x-2 mt-auto">
                <div className="inline-block px-3 py-1 bg-prix-blue/5 rounded-full text-prix-blue text-sm font-medium">
                  Desde 1995
                </div>
                <Link to="/sao-felipe-comercial">
                  <Button variant="ghost" size="sm" className="text-prix-blue hover:bg-prix-blue/10 p-1 h-auto">
                    Saiba Mais <ArrowRight className="ml-1 w-3 h-3" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8 transition-transform duration-300 hover:-translate-y-1 hover:shadow-md border border-gray-100 delay-200 flex flex-col h-full">
            <div className="flex items-start gap-4 mb-6">
              <div className="flex items-center justify-center">
                <img 
                  src="/lovable-uploads/ee847d6d-b1d0-4474-bc1d-b2e7376612c7.png" 
                  alt="Múltiplo FIDC" 
                  style={{ width: '251.7px', height: '79px' }}
                  className="object-contain"
                />
              </div>
            </div>
            <div className="flex-grow flex flex-col">
              <div className="min-h-20 mb-4">
                <p className="text-prix-gray-dark">Com mais de 35 anos de experiência no Mercado Financeiro, iniciou as atividades de antecipação de recebíveis pelo Banko Fomento.</p>
              </div>
              <div className="min-h-20 mb-6 flex-grow">
                <p className="text-prix-gray-dark">Em 2005 constituiu o Múltiplo FIDC, sendo pioneiro no segmento de Fundos de Recebíveis.</p>
              </div>
              <div className="flex items-center space-x-2 mt-auto">
                <div className="inline-block px-3 py-1 bg-prix-blue/5 rounded-full text-prix-blue text-sm font-medium">
                  Desde 2005
                </div>
                <Link to="/multiplo-fidc">
                  <Button variant="ghost" size="sm" className="text-prix-blue hover:bg-prix-blue/10 p-1 h-auto">
                    Saiba Mais <ArrowRight className="ml-1 w-3 h-3" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default History;
