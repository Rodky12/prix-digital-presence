
import React, { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Building2, ArrowLeft } from "lucide-react";
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
            onClick={() => navigate("/")} 
            className="mb-8 text-prix-blue hover:bg-prix-blue/10"
          >
            <ArrowLeft className="mr-2 w-4 h-4" /> Voltar
          </Button>
          
          <div className="flex flex-col md:flex-row md:items-center gap-8 mb-12">
            <div className="w-16 h-16 bg-prix-blue/10 rounded-full flex items-center justify-center">
              <Building2 className="text-prix-blue w-6 h-6" />
            </div>
            <div className="flex items-center">
              <img 
                src="/lovable-uploads/6725d9df-3853-469b-9da9-f5626aed064f.png" 
                alt="São Felipe Comercial" 
                className="h-10"
              />
            </div>
            <h1 className="font-montserrat font-bold text-3xl md:text-4xl text-prix-blue">São Felipe Comercial</h1>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center mb-16">
            <div className="order-2 md:order-1">
              <div className="relative">
                <div className="absolute inset-0 bg-prix-blue/5 rounded-2xl transform -rotate-6"></div>
                <div className="relative bg-white shadow-lg rounded-2xl overflow-hidden border border-gray-100 p-8">
                  <img 
                    src="/lovable-uploads/d6d89c29-3bf1-4d4d-9df0-5d5c09c0aec6.png" 
                    alt="São Felipe Comercial" 
                    className="w-full h-auto mb-6"
                  />
                  <h4 className="font-montserrat font-semibold text-prix-blue text-lg mb-3">Administração de alto padrão</h4>
                  <p className="text-sm text-prix-gray-dark">
                    Gerenciamento eficiente de propriedades comerciais em localizações estratégicas para maximizar o retorno sobre o investimento.
                  </p>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-2xl md:text-3xl font-montserrat font-bold text-prix-blue mb-4">São Felipe Comercial</h2>
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
            </div>
          </div>
          
          <div className="max-w-3xl mb-8">
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
      </section>
      
      <Footer />
    </div>
  );
};

export default SaoFelipeComercial;
