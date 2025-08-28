
import React, { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const SaoFelipeComercial = () => {
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
            onClick={() => navigate("/#history")} 
            className="mb-8 text-prix-blue hover:bg-prix-blue/10"
          >
            <ArrowLeft className="mr-2 w-4 h-4" /> Voltar
          </Button>
          
          {/* Logo centralizado */}
          <div className="flex justify-center mb-16">
            <img 
              src="/lovable-uploads/0fe52703-72b9-4ab3-bfd4-79a448bc659b.png" 
              alt="São Felipe Comercial" 
              className="w-auto h-24"
            />
          </div>
          
          {/* Nossa História */}
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-xl font-montserrat font-semibold text-prix-blue mb-4">Nossa História</h2>
            <p className="text-prix-gray-dark mb-4 text-justify">
              Com atuação nacional, desde 1995 a São Felipe Comercial é responsável pela gestão de um portfólio de imóveis próprios para locação. 
              Incluindo shopping centers, centros comerciais, galpões logísticos, andares corporativos e lojas nos grandes centros de varejo das 
              principais cidades brasileiras.
            </p>
            <p className="text-prix-gray-dark mb-4 text-justify">
              A empresa consolidou-se como referência no setor imobiliário comercial, na aquisição e locação de imóveis estratégicos.
            </p>
            <p className="text-prix-gray-dark text-justify">
              Com um portfólio robusto e diversificado de imóveis próprios, a São Felipe Comercial vem ampliando sua presença no mercado nacional, 
              mantendo o foco na excelência e na geração de valor para seus parceiros.
            </p>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default SaoFelipeComercial;
