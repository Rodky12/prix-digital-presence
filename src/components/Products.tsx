
import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { 
  Banknote, 
  FileText, 
  HandCoins, 
  Globe, 
  ShieldCheck,
  CircleDollarSign
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
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('animate');
          }, delay);
        }
      },
      { threshold: 0.2 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [delay]);

  return (
    <div 
      ref={cardRef}
      className="bg-white rounded-lg shadow-sm p-6 transition-transform duration-300 hover:-translate-y-1 hover:shadow-md border border-gray-100 opacity-0 translate-y-10 transition-all duration-700 ease-out"
      style={{ transitionDelay: `${delay}ms` }}
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

  // Custom Capital de Giro Icon (Working Capital concept)
  const CapitalGiroIcon = () => (
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
      <circle cx="12" cy="12" r="10" strokeWidth="1.5" />
      <path d="M12 6v12" strokeWidth="1.5" />
      <path d="M8 10l4-4 4 4" strokeWidth="1.5" />
      <path d="M8 14l4 4 4-4" strokeWidth="1.5" />
      <path d="M16 12H8" strokeWidth="1.5" />
    </svg>
  );

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
      icon: <CircleDollarSign className="text-prix-blue w-6 h-6" />,
      title: "Capital de Giro",
      description: "Financiamento para manter as operações diárias da empresa, como pagamento de fornecedores, folha de pagamento e contas."
    },
    {
      icon: <ChequeIcon />,
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
        <div className="text-center mb-16 opacity-0 transform translate-y-10 transition-all duration-700 animate-on-scroll">
          <div className="flex justify-center mb-6">
            <img 
              src="/lovable-uploads/2c4d32aa-3ea6-4483-84bb-7a6419dc7572.png" 
              alt="Múltiplo FIDC" 
              className="h-20"
            />
          </div>
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-prix-blue mb-4">Nossos Produtos</h2>
          <div className="w-20 h-1 bg-prix-blue mx-auto mb-6"></div>
          <p className="text-prix-gray-dark max-w-2xl mx-auto">
            O Múltiplo FIDC oferece uma variedade de soluções de crédito para atender às necessidades específicas do seu negócio.
          </p>
        </div>

        <div ref={sectionRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <ProductCard 
              key={index}
              icon={product.icon}
              title={product.title}
              description={product.description}
              delay={index * 150}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
