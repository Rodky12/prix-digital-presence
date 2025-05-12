
import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { 
  Banknote, 
  FileText, 
  HandCoins, 
  Globe, 
  ShieldCheck 
} from 'lucide-react';

const ProductCard = ({
  icon,
  title,
  description,
  delay = 0
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
}) => {
  return (
    <div 
      className="bg-white rounded-lg shadow-sm p-6 transition-transform duration-300 hover:-translate-y-1 hover:shadow-md border border-gray-100"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="w-14 h-14 bg-prix-blue/10 rounded-full flex items-center justify-center mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-montserrat font-semibold text-prix-blue mb-3">{title}</h3>
      <p className="text-prix-gray-dark">{description}</p>
    </div>
  );
};

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

  const PiggyBankIcon = () => (
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
      <path d="M11.5 6.755a3 3 0 0 0-1-.755H5a2 2 0 0 0 0 4h2.5"/>
      <path d="M8 10h7a6 6 0 0 1 6 6v1a2 2 0 0 1-2 2v0a2 2 0 0 1-2-2v-1a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v1a2 2 0 0 1-4 0v0a2 2 0 0 1-2-2v0a2 2 0 0 1 2-2h3"/>
      <path d="M16 10.5V10"/>
      <path d="M20 10.5V10"/>
      <path d="M10.5 14.5c.83 1 2.17 1 3 0"/>
      <path d="M16.5 8c.83 1 2.17 1 3 0"/>
      <path d="M19 5c.96 1.16 2.5 1.16 3.46 0"/>
    </svg>
  );

  const CheckIcon = () => (
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
      <rect width="18" height="10" x="3" y="8" rx="2" />
      <path d="M7 8V6a4 4 0 0 1 4-4h2a4 4 0 0 1 4 4v2" />
      <path d="m12 12 2 2 4-4" />
    </svg>
  );

  const products = [
    {
      icon: <Banknote className="text-prix-blue w-6 h-6" />,
      title: "Antecipação de recebíveis",
      description: "Antecipe seus recebimentos de vendas a prazo, melhorando seu fluxo de caixa e permitindo novos investimentos."
    },
    {
      icon: <HandCoins className="text-prix-blue w-6 h-6" />,
      title: "Fomento a Produção",
      description: "Incentivo financeiro para impulsionar a produção empresarial, oferecendo recursos para aumentar a capacidade produtiva."
    },
    {
      icon: <FileText className="text-prix-blue w-6 h-6" />,
      title: "CCB e Nota comercial",
      description: "Emissão de Cédulas de Crédito Bancário e Notas Comerciais para captação de recursos junto a investidores qualificados."
    },
    {
      icon: <PiggyBankIcon />,
      title: "Capital de Giro",
      description: "Financiamento para manter as operações diárias da empresa, como pagamento de fornecedores, folha de pagamento e contas."
    },
    {
      icon: <CheckIcon />,
      title: "Cheque Prix",
      description: "Solução financeira para antecipar recebimentos de cheques pré-datados, proporcionando liquidez imediata para sua empresa."
    },
    {
      icon: <ShieldCheck className="text-prix-blue w-6 h-6" />,
      title: "Conta Escrow",
      description: "Conta garantia que aumenta a segurança em operações financeiras, servindo como intermediária entre as partes envolvidas."
    },
  ];

  return (
    <section id="products" className="section bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-prix-blue mb-4">Nossos Produtos</h2>
          <div className="w-20 h-1 bg-prix-blue mx-auto mb-6"></div>
          <p className="text-prix-gray-dark max-w-2xl mx-auto">
            O Múltiplo FIDC oferece uma variedade de produtos financeiros para atender às necessidades específicas do seu negócio.
          </p>
        </div>

        <div ref={sectionRef} className="animate-on-scroll grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <ProductCard 
              key={index}
              icon={product.icon}
              title={product.title}
              description={product.description}
              delay={index * 100}
            />
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button 
            className="bg-prix-blue hover:bg-opacity-90 font-medium px-8 py-6 text-base"
            onClick={() => window.open('https://cliente.grupoprix.com.br', '_blank')}
          >
            Solicite uma proposta
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Products;
