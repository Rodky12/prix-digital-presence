
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Store, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const MagazinePelicano = () => {
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
              <Store className="text-prix-blue w-6 h-6" />
            </div>
            <div className="flex items-center">
              <img 
                src="/lovable-uploads/772002df-dce1-4ca8-bfd4-0f29002148b6.png" 
                alt="Magazine Pelicano" 
                className="h-10"
              />
            </div>
            <h1 className="font-montserrat font-bold text-3xl md:text-4xl text-prix-blue">Magazine Pelicano</h1>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center mb-16">
            <div>
              <h2 className="text-2xl md:text-3xl font-montserrat font-bold text-prix-blue mb-4">Magazine Pelicano</h2>
              <p className="text-prix-gray-dark mb-4">
                Fundado em 1971, o Magazine Pelicano foi pioneiro no comércio varejista de bancas de mercadorias. Revolucionou este mercado atingindo a marca de mais de 150 filiais distribuídas por todo o Brasil com mais de 3.000 colaboradores.
              </p>
              
              <p className="text-prix-gray-dark mb-6">
                Foi o início das atividades empresariais do grupo, e posteriormente deu origem às duas empresas que compõem o Grupo Prix atualmente: a São Felipe Comercial e o Múltiplo FIDC.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center p-3 bg-prix-blue/5 rounded-lg">
                  <span className="text-prix-gray-dark font-medium">Pioneirismo</span>
                </div>
                <div className="flex items-center p-3 bg-prix-blue/5 rounded-lg">
                  <span className="text-prix-gray-dark font-medium">Inovação</span>
                </div>
                <div className="flex items-center p-3 bg-prix-blue/5 rounded-lg">
                  <span className="text-prix-gray-dark font-medium">Tradição</span>
                </div>
              </div>
            </div>
            <div>
              <div className="relative">
                <div className="absolute inset-0 bg-prix-blue/5 rounded-2xl transform rotate-3"></div>
                <div className="relative bg-white shadow-lg rounded-2xl overflow-hidden border border-gray-100 p-8">
                  <img 
                    src="/lovable-uploads/d2e93879-9fd9-4617-a889-5c13c9f23f44.png" 
                    alt="Magazine Pelicano" 
                    className="w-full h-auto mb-6"
                  />
                  <h4 className="font-montserrat font-semibold text-prix-blue text-lg mb-3">Origem do Grupo Prix</h4>
                  <p className="text-sm text-prix-gray-dark">
                    O Magazine Pelicano foi o início de uma jornada empresarial que hoje se consolida no Grupo Prix, com empresas atuando nos segmentos Imobiliário e de Investimentos em Direitos Creditórios.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="max-w-3xl mb-8">
            <h2 className="text-xl font-montserrat font-semibold text-prix-blue mb-4">Nossa História</h2>
            <p className="text-prix-gray-dark mb-4">
              Fundado em 1971, o Magazine Pelicano foi pioneiro no comércio varejista de bancas de mercadorias e artigos de época.
              Revolucionou este mercado atingindo a marca de mais de 200 filiais e 3.000 colaboradores distribuídos por todo o Brasil.
            </p>
            <p className="text-prix-gray-dark mb-4">
              Durante quase quatro décadas, o Magazine Pelicano manteve-se como referência no varejo brasileiro, oferecendo produtos diversos
              e um atendimento de qualidade que marcou uma era no comércio nacional.
            </p>
            <p className="text-prix-gray-dark">
              As operações do Magazine Pelicano se encerraram em 2008, mas seu legado e importância histórica para o Grupo Prix permanecem como 
              parte fundamental da trajetória empresarial que levou à formação das demais empresas do grupo.
            </p>
          </div>
          
          <div className="inline-block px-3 py-1 bg-prix-blue/5 rounded-full text-prix-blue text-sm font-medium">
            De 1971 a 2008
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default MagazinePelicano;
