
import React, { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { 
  Banknote, 
  FileText, 
  HandCoins, 
  ShieldCheck,
  CircleDollarSign
} from 'lucide-react';

const MultiploFIDC = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  // Custom Cheque Icon
  const ChequeIcon = () => (
    <svg 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className="text-prix-blue"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <line x1="3" y1="10" x2="21" y2="10" />
      <line x1="7" y1="15" x2="11" y2="15" />
      <line x1="14" y1="15" x2="17" y2="15" />
      <path d="M7 5v3" />
    </svg>
  );

  const products = [
    {
      icon: <Banknote className="text-prix-blue w-6 h-6" />,
      title: "Antecipação de Recebíveis",
      description: "Antecipe seus recebimentos de vendas a prazo, melhorando seu fluxo de caixa e permitindo novos investimentos."
    },
    {
      icon: <HandCoins className="text-prix-blue w-6 h-6" />,
      title: "Fomento a Produção",
      description: "Incentivo financeiro para impulsionar a produção empresarial, oferecendo recursos para aumentar a capacidade produtiva."
    },
    {
      icon: <FileText className="text-prix-blue w-6 h-6" />,
      title: "CCB e Nota Comercial",
      description: "Operações financeiras estruturadas de médio e longo prazo."
    },
    {
      icon: <CircleDollarSign className="text-prix-blue w-6 h-6" />,
      title: "Capital de Giro",
      description: "Financiamento para manter as operações diárias da empresa, como pagamento de fornecedores, folha de pagamento e despesas."
    },
    {
      icon: <ChequeIcon />,
      title: "Cheque Prix (Hot Money)",
      description: "Crédito rápido e descomplicado para impulsionar seu negócio. Com condições sob medida, você acessa recursos com segurança e agilidade."
    },
    {
      icon: <ShieldCheck className="text-prix-blue w-6 h-6" />,
      title: "Conta Escrow",
      description: "Utilizada para custodiar recursos, garantindo o cumprimento das condições acordadas entre as partes."
    },
  ];

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
              src="/lovable-uploads/dacdcd05-1479-4e15-9ed0-de3c875a776a.png" 
              alt="Múltiplo FIDC" 
              className="w-auto h-24"
            />
          </div>
          
          {/* Nossa História */}
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-xl font-montserrat font-semibold text-prix-blue mb-4">Nossa História</h2>
            <p className="text-prix-gray-dark mb-4 text-justify">
              Com mais de 35 anos de experiência no Mercado Financeiro, iniciou as atividades de antecipação de recebíveis pelo Banko Fomento. 
              Em 2005 constituiu o Múltiplo FIDC, sendo pioneiro no segmento de FIDC (Fundo de Recebíveis)
            </p>
            <p className="text-prix-gray-dark mb-4 text-justify">
              O Múltiplo FIDC foi uma evolução natural após anos de atuação no mercado financeiro, permitindo atender empresas 
              de Middle Market dos mais diversos segmentos com necessidade de capital de giro, antecipação de recebíveis e operações estruturadas de forma rápida e eficiente.
            </p>
            <p className="text-prix-gray-dark text-justify">
              Ao longo dos anos, o Múltiplo FIDC consolidou sua posição no mercado como uma instituição sólida e eficaz,
              oferecendo soluções financeiras personalizadas e competitivas para seus clientes.
            </p>
          </div>

          {/* Nossos Produtos */}
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-xl font-montserrat font-semibold text-prix-blue mb-4">Nossos Produtos</h2>
            <p className="text-prix-gray-dark mb-6">
              O Múltiplo FIDC oferece uma variedade de soluções de crédito para atender às necessidades específicas do seu negócio.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {products.map((product, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-lg shadow-sm p-6 transition-transform duration-300 hover:-translate-y-1 hover:shadow-md border border-gray-100"
                >
                  <div className="w-14 h-14 bg-prix-blue/10 rounded-full flex items-center justify-center mb-6">
                    {product.icon}
                  </div>
                  <h3 className="text-xl font-montserrat font-semibold text-prix-blue mb-3">{product.title}</h3>
                  <p className="text-prix-gray-dark">{product.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Nossos Parceiros */}
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-xl font-montserrat font-semibold text-prix-blue mb-4">Nossos Parceiros</h2>
            <div className="flex justify-center">
              <img 
                src="/lovable-uploads/427bec44-9ae3-469e-a11f-1412f2c98ea9.png" 
                alt="Nossos Parceiros" 
                className="w-full max-w-4xl h-auto"
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
