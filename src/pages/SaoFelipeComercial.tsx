
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Building2, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const SaoFelipeComercial = () => {
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
              <Building2 className="text-prix-blue w-6 h-6" />
            </div>
            <h1 className="font-montserrat font-bold text-3xl md:text-4xl text-prix-blue">São Felipe Comercial</h1>
          </div>
          
          <div className="max-w-3xl">
            <div className="mb-8">
              <h2 className="text-xl font-montserrat font-semibold text-prix-blue mb-4">Nossa História</h2>
              <p className="text-prix-gray-dark mb-4">
                Com atuação nacional, desde 1995 a São Felipe Comercial é responsável pela gestão de um portfólio de imóveis próprios para locação.
                Incluindo shopping centers, centros comerciais, galpões logísticos, andares corporativos e lojas nos grandes centros de varejo das 
                principais cidades brasileiras.
              </p>
              <p className="text-prix-gray-dark mb-4">
                A empresa consolidou-se como referência no setor imobiliário comercial, prestando serviços de administração, planejamento e 
                desenvolvimento de projetos imobiliários estratégicos.
              </p>
              <p className="text-prix-gray-dark">
                Com um portfólio diversificado, a São Felipe Comercial continua expandindo sua atuação no mercado nacional, 
                sempre com foco na excelência e na geração de valor para seus parceiros e clientes.
              </p>
            </div>
            
            <div className="inline-block px-3 py-1 bg-prix-blue/5 rounded-full text-prix-blue text-sm font-medium">
              Desde 1995
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default SaoFelipeComercial;
