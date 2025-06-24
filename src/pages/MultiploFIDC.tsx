
import React, { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";
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
              src="/lovable-uploads/dacdcd05-1479-4e15-9ed0-de3c875a776a.png" 
              alt="Múltiplo FIDC" 
              className="w-auto h-24"
            />
          </div>
          
          {/* Nossa História */}
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-xl font-montserrat font-semibold text-prix-blue mb-4">Nossa História</h2>
            <p className="text-prix-gray-dark mb-4">
              Com mais de 35 anos de experiência no Mercado Financeiro, iniciou as atividades de antecipação de recebíveis pelo Banko Fomento. 
              Em 2005 constituiu o Múltiplo FIDC, sendo pioneiro no segmento de FIDC (Fundo de Recebíveis)
            </p>
            <p className="text-prix-gray-dark mb-4">
              O Múltiplo FIDC foi uma evolução natural após anos de atuação no mercado financeiro, permitindo atender empresas 
              de Middle Market dos mais diversos segmentos com necessidade de capital de giro, antecipação de recebíveis e operações estruturadas de forma rápida e eficiente.
            </p>
            <p className="text-prix-gray-dark">
              Ao longo dos anos, o Múltiplo FIDC consolidou sua posição no mercado como uma instituição sólida e eficaz,
              oferecendo soluções financeiras personalizadas e competitivas para seus clientes.
            </p>
          </div>

          {/* Selos de Certificação */}
          <div className="max-w-3xl mx-auto mb-16">
            <div className="flex justify-center items-center gap-8 md:gap-12">
              <img 
                src="/lovable-uploads/a37b96b7-20e6-45da-9d3c-d3a188ed8694.png" 
                alt="Certifica" 
                className="h-12 w-auto opacity-80 hover:opacity-100 transition-opacity"
              />
              <img 
                src="/lovable-uploads/31c388af-bad2-47d2-b5ad-06abb7ce8925.png" 
                alt="ANBIMA" 
                className="h-12 w-auto opacity-80 hover:opacity-100 transition-opacity"
              />
              <img 
                src="/lovable-uploads/30c5c984-1667-42fa-b567-592835414778.png" 
                alt="QI Tech" 
                className="h-16 w-auto opacity-80 hover:opacity-100 transition-opacity"
              />
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default MultiploFIDC;
