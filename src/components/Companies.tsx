
import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';

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
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-prix-blue">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="3" y1="9" x2="21" y2="9"></line>
                  <line x1="9" y1="21" x2="9" y2="9"></line>
                </svg>
              </div>
              <h3 className="text-2xl md:text-3xl font-montserrat font-bold text-prix-blue mb-4">São Felipe Comercial S/A</h3>
              <p className="text-prix-gray-dark mb-4">
                Com início das atividades em 1995, a São Felipe Comercial é responsável pela administração de diversos imóveis em todo o Brasil, incluindo:
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
                O foco da São Felipe é atuar nos centros de varejo de importantes cidades brasileiras, principalmente no estado de São Paulo.
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
                      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-prix-gray-medium">
                        <rect x="2" y="6" width="20" height="12" rx="2"></rect>
                        <path d="M12 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"></path>
                        <path d="M14 12h2"></path>
                        <path d="M8 12H6"></path>
                        <path d="M16 6V4"></path>
                        <path d="M8 6V4"></path>
                        <path d="M16 20v-2"></path>
                        <path d="M8 20v-2"></path>
                      </svg>
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
                      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-prix-gray-medium">
                        <path d="M16 16v2a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2"></path>
                        <rect width="8" height="12" x="16" y="4" rx="2" transform="rotate(90 16 4)"></rect>
                        <path d="M22 18h-4"></path>
                      </svg>
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
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-prix-blue">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="m16 8-8 8"></path>
                  <path d="M8.5 8.5a1 1 0 1 0 2 0 1 1 0 1 0-2 0"></path>
                  <path d="M14.5 13.5a1 1 0 1 0 2 0 1 1 0 1 0-2 0"></path>
                </svg>
              </div>
              <h3 className="text-2xl md:text-3xl font-montserrat font-bold text-prix-blue mb-4">Múltiplo - FIDC</h3>
              <p className="text-prix-gray-dark mb-4">
                O Múltiplo - FIDC (Fundo de Investimento em Direitos Creditórios Não-Padronizados Multissetorial) foi constituído pelo grupo em 2005 com a experiência de mais de 20 anos no ramo de Factoring.
              </p>
              
              <p className="text-prix-gray-dark mb-6">
                Atuamos principalmente na compra de duplicatas mercantis e de serviços, originadas da venda a prazo de empresas do segmento "Middle Market". Nossas taxas de crédito são bastante competitivas e nos destacamos pela:
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center p-3 bg-prix-blue/5 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-prix-blue mr-3">
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                    <path d="m9 12 2 2 4-4"></path>
                  </svg>
                  <span className="text-prix-gray-dark font-medium">Transparência</span>
                </div>
                <div className="flex items-center p-3 bg-prix-blue/5 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-prix-blue mr-3">
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                    <path d="m9 12 2 2 4-4"></path>
                  </svg>
                  <span className="text-prix-gray-dark font-medium">Compromisso</span>
                </div>
                <div className="flex items-center p-3 bg-prix-blue/5 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-prix-blue mr-3">
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                    <path d="m9 12 2 2 4-4"></path>
                  </svg>
                  <span className="text-prix-gray-dark font-medium">Seriedade</span>
                </div>
                <div className="flex items-center p-3 bg-prix-blue/5 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-prix-blue mr-3">
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                    <path d="m9 12 2 2 4-4"></path>
                  </svg>
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
