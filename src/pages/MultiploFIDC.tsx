
import React, { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft, Users, Building2, ChartBar, CircleDollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const MultiploFIDC = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="py-24 bg-gray-50">
        <div className="container">
          <Button 
            variant="ghost" 
            onClick={() => navigate("/")} 
            className="mb-8 text-prix-blue hover:bg-prix-blue/10"
          >
            <ArrowLeft className="mr-2 w-4 h-4" /> Voltar
          </Button>
          
          {/* Logo centralizado */}
          <div className="flex justify-center mb-16">
            <img 
              src="/lovable-uploads/ea7e2e3e-7ff9-4a98-872e-64cfe6b89e87.png" 
              alt="Múltiplo FIDC" 
              className="w-auto h-24"
            />
          </div>
          
          {/* Nossa História */}
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-xl font-montserrat font-semibold text-prix-blue mb-4">Nossa História</h2>
            <p className="text-prix-gray-dark mb-4">
              Com mais de 35 anos de experiência no Mercado Financeiro, iniciou as atividades de antecipação de recebíveis pelo Banko Fomento.
              Em 2005 constituiu o Múltiplo FIDC, sendo pioneiro no segmento de Fundos de Recebíveis.
            </p>
            <p className="text-prix-gray-dark mb-4">
              O Múltiplo FIDC foi uma evolução natural após anos de atuação no mercado financeiro, permitindo atender empresas 
              com necessidade de capital de giro e antecipação de recebíveis de forma mais estruturada e eficiente.
            </p>
            <p className="text-prix-gray-dark">
              Ao longo dos anos, o Fundo consolidou sua posição no mercado como uma instituição séria e confiável,
              oferecendo soluções financeiras personalizadas e competitivas para seus clientes.
            </p>
          </div>
          
          {/* Título da seção */}
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-xl font-montserrat font-semibold text-prix-blue mb-4">Título da seção</h2>
            <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-montserrat font-bold text-prix-blue mb-4">Múltiplo FIDC</h3>
                <p className="text-prix-gray-dark mb-4">
                  O Múltiplo FIDC (Fundo de Investimento em Direitos Creditórios Não-Padronizados Multissetorial) foi constituído pelo grupo em 2005 com a experiência de mais de 20 anos no ramo de Factoring.
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
                    <Building2 className="text-prix-blue w-5 h-5 mr-3" />
                    <span className="text-prix-gray-dark font-medium">Compromisso</span>
                  </div>
                  <div className="flex items-center p-3 bg-prix-blue/5 rounded-lg">
                    <ChartBar className="text-prix-blue w-5 h-5 mr-3" />
                    <span className="text-prix-gray-dark font-medium">Seriedade</span>
                  </div>
                  <div className="flex items-center p-3 bg-prix-blue/5 rounded-lg">
                    <CircleDollarSign className="text-prix-blue w-5 h-5 mr-3" />
                    <span className="text-prix-gray-dark font-medium">Tecnologia</span>
                  </div>
                </div>
              </div>
              <div>
                <div className="relative">
                  <div className="absolute inset-0 bg-prix-blue/5 rounded-2xl transform rotate-6"></div>
                  <div className="relative bg-white shadow-lg rounded-2xl overflow-hidden border border-gray-100 p-8">
                    <img 
                      src="/lovable-uploads/ea7e2e3e-7ff9-4a98-872e-64cfe6b89e87.png" 
                      alt="Múltiplo FIDC" 
                      className="w-full h-auto mb-6"
                    />
                    <h4 className="font-montserrat font-semibold text-prix-blue text-lg mb-3">Tecnologia à serviço do cliente</h4>
                    <p className="text-sm text-prix-gray-dark">
                      Com uma informática de ponta, nosso setor de TI mantém constantes investimentos em Software e Hardware, permitindo ao nosso cliente acesso On-Line ao sistema operacional do FIDC.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="inline-block px-3 py-1 bg-prix-blue/5 rounded-full text-prix-blue text-sm font-medium mt-8">
              Desde 2005
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default MultiploFIDC;
