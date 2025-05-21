
import { Button } from '@/components/ui/button';
import { ArrowRight, CircleDollarSign, FileCheck, Download, Users } from 'lucide-react';
import { useRef, useEffect } from 'react';

const Products = () => {
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
    <section id="products" className="section bg-gray-50 h-screen flex items-center">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-prix-blue mb-4">Produtos FIDC</h2>
          <div className="w-20 h-1 bg-prix-blue mx-auto mb-6"></div>
          <p className="text-prix-gray-dark max-w-2xl mx-auto">
            Com mais de 35 anos de experiência no Mercado Financeiro, o Múltiplo FIDC oferece soluções completas para empresas de diversos segmentos.
          </p>
        </div>

        <div ref={sectionRef} className="animate-on-scroll grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white rounded-lg shadow-sm p-6 transition-transform duration-300 hover:-translate-y-1 hover:shadow-md border border-gray-100">
            <div className="w-16 h-16 bg-prix-blue/10 rounded-full flex items-center justify-center mb-6">
              <CircleDollarSign className="text-prix-blue w-8 h-8" />
            </div>
            <h3 className="text-xl font-montserrat font-semibold text-prix-blue mb-3">Antecipação de Recebíveis</h3>
            <p className="text-prix-gray-dark mb-6">Antecipação de vendas a prazo. Receba hoje suas vendas parceladas em cartão de crédito e duplicatas.</p>
            <Button variant="ghost" size="sm" className="text-prix-blue hover:bg-prix-blue/10 p-0 h-auto">
              Detalhes <ArrowRight className="ml-1 w-4 h-4" />
            </Button>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6 transition-transform duration-300 hover:-translate-y-1 hover:shadow-md border border-gray-100 delay-100">
            <div className="w-16 h-16 bg-prix-blue/10 rounded-full flex items-center justify-center mb-6">
              <FileCheck className="text-prix-blue w-8 h-8" />
            </div>
            <h3 className="text-xl font-montserrat font-semibold text-prix-blue mb-3">Crédito Corporativo</h3>
            <p className="text-prix-gray-dark mb-6">Financiamento de capital de giro para sua empresa, com as melhores condições do mercado.</p>
            <Button variant="ghost" size="sm" className="text-prix-blue hover:bg-prix-blue/10 p-0 h-auto">
              Detalhes <ArrowRight className="ml-1 w-4 h-4" />
            </Button>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6 transition-transform duration-300 hover:-translate-y-1 hover:shadow-md border border-gray-100 delay-200">
            <div className="w-16 h-16 bg-prix-blue/10 rounded-full flex items-center justify-center mb-6">
              <Download className="text-prix-blue w-8 h-8" />
            </div>
            <h3 className="text-xl font-montserrat font-semibold text-prix-blue mb-3">Desconto Eletrônico</h3>
            <p className="text-prix-gray-dark mb-6">Solução integrada para antecipação automatizada de recebíveis, conectada ao seu ERP.</p>
            <Button variant="ghost" size="sm" className="text-prix-blue hover:bg-prix-blue/10 p-0 h-auto">
              Detalhes <ArrowRight className="ml-1 w-4 h-4" />
            </Button>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6 transition-transform duration-300 hover:-translate-y-1 hover:shadow-md border border-gray-100 delay-300">
            <div className="w-16 h-16 bg-prix-blue/10 rounded-full flex items-center justify-center mb-6">
              <Users className="text-prix-blue w-8 h-8" />
            </div>
            <h3 className="text-xl font-montserrat font-semibold text-prix-blue mb-3">Atendimento Personalizado</h3>
            <p className="text-prix-gray-dark mb-6">Conte com uma equipe especializada para te auxiliar nas melhores estratégias financeiras para seu negócio.</p>
            <Button variant="ghost" size="sm" className="text-prix-blue hover:bg-prix-blue/10 p-0 h-auto">
              Detalhes <ArrowRight className="ml-1 w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
