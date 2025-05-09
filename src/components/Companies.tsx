
import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Building, PiggyBank, Users, ChartBar } from 'lucide-react';

const Companies = () => {
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
    <section id="companies" className="section bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-prix-blue mb-4">Nossas Empresas</h2>
          <div className="w-20 h-1 bg-prix-blue mx-auto mb-6"></div>
          <p className="text-prix-gray-dark max-w-2xl mx-auto">
            O Grupo Prix é formado por empresas que se destacam em seus respectivos segmentos, oferecendo soluções inovadoras e confiáveis para nossos clientes.
          </p>
        </div>

        <div ref={sectionRef} className="animate-on-scroll space-y-16">
          {/* São Felipe */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
            <div className="order-2 md:order-1">
              <div className="inline-flex items-center justify-center p-2 bg-prix-blue/10 rounded-lg mb-4">
                <Building className="text-prix-blue w-6 h-6" />
              </div>
              <h3 className="text-2xl md:text-3xl font-montserrat font-bold text-prix-blue mb-4">São Felipe Comercial S/A</h3>
              <p className="text-prix-gray-dark mb-4">
                Com início das atividades em 1995, a São Felipe Comercial é especializada em locação e administração imobiliária de diversos imóveis em todo o Brasil, incluindo:
              </p>
              
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-prix-blue mr-3"></div>
                  <span className="text-prix-gray-dark">Lojas comerciais</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-prix-blue mr-3"></div>
                  <span className="text-prix-gray-dark">Lajes corporativas</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-prix-blue mr-3"></div>
                  <span className="text-prix-gray-dark">Galpões logísticos</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-prix-blue mr-3"></div>
                  <span className="text-prix-gray-dark">Centros comerciais</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-prix-blue mr-3"></div>
                  <span className="text-prix-gray-dark">Shoppings centers</span>
                </li>
              </ul>
              
              <p className="text-prix-gray-dark mb-6">
                O foco da São Felipe é atuar nos centros de varejo de importantes cidades brasileiras, principalmente no estado de São Paulo, oferecendo soluções imobiliárias de alto padrão.
              </p>
              
              <Button className="bg-prix-blue hover:bg-opacity-90 font-medium">
                Saiba mais
              </Button>
            </div>
            <div className="order-1 md:order-2">
              <div className="relative">
                <div className="absolute inset-0 bg-prix-blue/5 rounded-2xl transform rotate-6"></div>
                <div className="relative bg-white shadow-lg rounded-2xl overflow-hidden border border-gray-100">
                  <div className="p-1 bg-prix-blue"></div>
                  <div className="p-8">
                    <div className="h-48 bg-gray-100 rounded-lg mb-6 flex items-center justify-center">
                      <Building className="text-prix-gray-medium h-12 w-12" />
                    </div>
                    <h4 className="font-montserrat font-semibold text-prix-blue text-lg mb-3">Administração de alto padrão</h4>
                    <p className="text-sm text-prix-gray-dark">
                      Gerenciamento eficiente de propriedades comerciais em localizações estratégicas para maximizar o retorno sobre o investimento.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Múltiplo FIDC */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
            <div className="order-2">
              <div className="relative">
                <div className="absolute inset-0 bg-prix-blue/5 rounded-2xl transform -rotate-6"></div>
                <div className="relative bg-white shadow-lg rounded-2xl overflow-hidden border border-gray-100">
                  <div className="p-1 bg-prix-blue"></div>
                  <div className="p-8">
                    <div className="h-48 bg-gray-100 rounded-lg mb-6 flex items-center justify-center">
                      <ChartBar className="text-prix-gray-medium h-12 w-12" />
                    </div>
                    <h4 className="font-montserrat font-semibold text-prix-blue text-lg mb-3">Tecnologia à serviço do cliente</h4>
                    <p className="text-sm text-prix-gray-dark">
                      Com uma informática de ponta, nosso setor de TI mantém constantes investimentos em Software e Hardware, permitindo ao nosso cliente acesso On-Line ao sistema operacional do FIDC.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1">
              <div className="inline-flex items-center justify-center p-2 bg-prix-blue/10 rounded-lg mb-4">
                <PiggyBank className="text-prix-blue w-6 h-6" />
              </div>
              <h3 className="text-2xl md:text-3xl font-montserrat font-bold text-prix-blue mb-4">Múltiplo - FIDC</h3>
              <p className="text-prix-gray-dark mb-4">
                O Múltiplo - FIDC (Fundo de Investimento em Direitos Creditórios Não-Padronizados Multissetorial) foi constituído pelo grupo em 2005 com a experiência de mais de 20 anos no ramo de Factoring.
              </p>
              
              <p className="text-prix-gray-dark mb-6">
                Oferecemos soluções financeiras especializadas, atuando principalmente na compra de duplicatas mercantis e de serviços, originadas da venda a prazo de empresas do segmento "Middle Market". Nossas taxas de crédito são bastante competitivas e nos destacamos pela:
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center p-3 bg-prix-blue/5 rounded-lg">
                  <Users className="text-prix-blue w-5 h-5 mr-3" />
                  <span className="text-prix-gray-dark font-medium">Transparência</span>
                </div>
                <div className="flex items-center p-3 bg-prix-blue/5 rounded-lg">
                  <Building className="text-prix-blue w-5 h-5 mr-3" />
                  <span className="text-prix-gray-dark font-medium">Compromisso</span>
                </div>
                <div className="flex items-center p-3 bg-prix-blue/5 rounded-lg">
                  <ChartBar className="text-prix-blue w-5 h-5 mr-3" />
                  <span className="text-prix-gray-dark font-medium">Seriedade</span>
                </div>
                <div className="flex items-center p-3 bg-prix-blue/5 rounded-lg">
                  <PiggyBank className="text-prix-blue w-5 h-5 mr-3" />
                  <span className="text-prix-gray-dark font-medium">Tecnologia</span>
                </div>
              </div>
              
              <Button className="bg-prix-blue hover:bg-opacity-90 font-medium">
                Conheça nossos produtos
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Companies;
