
import React, { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const MagazinePelicano = () => {
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
              src="/lovable-uploads/54296650-8e83-42c3-bdbc-ea91ae027e86.png" 
              alt="Magazine Pelicano" 
              className="w-auto h-24"
            />
          </div>
          
          {/* Nossa História */}
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-xl font-montserrat font-semibold text-prix-blue mb-4">Nossa História</h2>
            <p className="text-prix-gray-dark mb-4 text-justify">
              Fundado em 1971, o Magazine Pelicano foi pioneiro no comércio varejista de bancas de mercadorias e artigos de época. 
              Revolucionou este mercado atingindo a marca de mais de 200 filiais e 3.000 colaboradores distribuídos por todo o Brasil.
            </p>
            <p className="text-prix-gray-dark mb-4 text-justify">
              Durante quatro décadas, o Magazine Pelicano consolidou-se como uma referência no varejo nacional, reconhecido pela variedade de produtos 
              e pela excelência no atendimento, que marcaram época no setor.
            </p>
            <p className="text-prix-gray-dark text-justify">
              Seu legado permanece vivo como um pilar essencial na identidade e valores das demais empresas do Grupo Prix.
            </p>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default MagazinePelicano;
