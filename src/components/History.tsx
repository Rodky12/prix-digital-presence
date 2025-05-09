
import { useEffect, useRef } from 'react';

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
    <section id="history" className="section bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-prix-blue mb-4">Nossa História</h2>
          <div className="w-20 h-1 bg-prix-blue mx-auto mb-6"></div>
          <p className="text-prix-gray-dark max-w-2xl mx-auto">
            Conheça a trajetória do Grupo Prix e como evoluímos para oferecer os melhores serviços em nossos segmentos de atuação.
          </p>
        </div>

        <div ref={sectionRef} className="animate-on-scroll grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-sm p-8 transition-transform duration-300 hover:-translate-y-1 hover:shadow-md border border-gray-100">
            <div className="w-16 h-16 bg-prix-blue/10 rounded-full flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-prix-blue">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="8" x2="12" y2="12"></line>
                <line x1="12" y1="16" x2="12.01" y2="16"></line>
              </svg>
            </div>
            <h3 className="text-xl font-montserrat font-semibold text-prix-blue mb-3">Magazine Pelicano</h3>
            <p className="text-prix-gray-dark mb-4">Fundado em 1971, o Magazine Pelicano foi pioneiro no comércio varejista de bancas de mercadorias.</p>
            <p className="text-prix-gray-dark">Revolucionou este mercado atingindo a marca de mais de 150 filiais distribuídas por todo o Brasil com mais de 3.000 colaboradores.</p>
            <div className="mt-6">
              <div className="inline-block px-3 py-1 bg-prix-blue/5 rounded-full text-prix-blue text-sm font-medium">
                Desde 1971
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8 transition-transform duration-300 hover:-translate-y-1 hover:shadow-md border border-gray-100 delay-100">
            <div className="w-16 h-16 bg-prix-blue/10 rounded-full flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-prix-blue">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="3" y1="9" x2="21" y2="9"></line>
                <line x1="9" y1="21" x2="9" y2="9"></line>
              </svg>
            </div>
            <h3 className="text-xl font-montserrat font-semibold text-prix-blue mb-3">São Felipe Comercial S/A</h3>
            <p className="text-prix-gray-dark mb-4">Com início das atividades em 1995, responsável pela administração de diversos imóveis em todo o Brasil.</p>
            <p className="text-prix-gray-dark">Inclui lojas, lajes corporativas, galpões logísticos, centros comerciais e shoppings centers, focando nos centros de varejo de importantes cidades brasileiras.</p>
            <div className="mt-6">
              <div className="inline-block px-3 py-1 bg-prix-blue/5 rounded-full text-prix-blue text-sm font-medium">
                Desde 1995
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8 transition-transform duration-300 hover:-translate-y-1 hover:shadow-md border border-gray-100 delay-200">
            <div className="w-16 h-16 bg-prix-blue/10 rounded-full flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-prix-blue">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="8" x2="12" y2="16"></line>
                <line x1="8" y1="12" x2="16" y2="12"></line>
              </svg>
            </div>
            <h3 className="text-xl font-montserrat font-semibold text-prix-blue mb-3">Múltiplo - FIDC</h3>
            <p className="text-prix-gray-dark mb-4">Constituído pelo grupo em 2005 com a experiência de mais de 20 anos no ramo de Factoring.</p>
            <p className="text-prix-gray-dark">Atua principalmente na compra de duplicatas mercantis e de serviços, originadas da venda a prazo de empresas do segmento "Middle Market".</p>
            <div className="mt-6">
              <div className="inline-block px-3 py-1 bg-prix-blue/5 rounded-full text-prix-blue text-sm font-medium">
                Desde 2005
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default History;
