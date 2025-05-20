
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CircleDollarSign, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const MultiploFIDC = () => {
  const navigate = useNavigate();

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
          
          <div className="flex flex-col md:flex-row md:items-center gap-8 mb-12">
            <div className="w-16 h-16 bg-prix-blue/10 rounded-full flex items-center justify-center">
              <CircleDollarSign className="text-prix-blue w-6 h-6" />
            </div>
            <h1 className="font-montserrat font-bold text-3xl md:text-4xl text-prix-blue">Múltiplo FIDC</h1>
          </div>
          
          <div className="max-w-3xl">
            <div className="mb-8">
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
            
            <div className="inline-block px-3 py-1 bg-prix-blue/5 rounded-full text-prix-blue text-sm font-medium">
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
