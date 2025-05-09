
import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';

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

  const products = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-prix-blue">
          <rect x="2" y="5" width="20" height="14" rx="2"></rect>
          <line x1="2" y1="10" x2="22" y2="10"></line>
        </svg>
      ),
      title: "Antecipação de recebíveis",
      description: "Antecipe seus recebimentos de vendas a prazo, melhorando seu fluxo de caixa e permitindo novos investimentos."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-prix-blue">
          <path d="M16 2v5h5"></path>
          <path d="M21 6v6.5c0 .8-.7 1.5-1.5 1.5h-7c-.8 0-1.5-.7-1.5-1.5v-9c0-.8.7-1.5 1.5-1.5H17l4 4z"></path>
          <path d="M7 8v8.8c0 .3.2.6.4.8.2.2.5.4.8.4H15"></path>
          <path d="M3 12v8.8c0 .3.2.6.4.8.2.2.5.4.8.4H11"></path>
        </svg>
      ),
      title: "Fomento a Produção",
      description: "Incentivo financeiro para impulsionar a produção empresarial, oferecendo recursos para aumentar a capacidade produtiva."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-prix-blue">
          <rect width="20" height="12" x="2" y="6" rx="2"></rect>
          <circle cx="12" cy="12" r="2"></circle>
          <path d="M6 12h.01M18 12h.01"></path>
        </svg>
      ),
      title: "CCB e Nota comercial",
      description: "Emissão de Cédulas de Crédito Bancário e Notas Comerciais para captação de recursos junto a investidores qualificados."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-prix-blue">
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
          <path d="M2 12h20"></path>
        </svg>
      ),
      title: "Capital de Giro",
      description: "Financiamento para manter as operações diárias da empresa, como pagamento de fornecedores, folha de pagamento e contas."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-prix-blue">
          <path d="M20 12V8H6a2 2 0 0 1-2-2c0-1.1.9-2 2-2h12v4"></path>
          <path d="M4 6v12c0 1.1.9 2 2 2h14v-4"></path>
          <path d="M18 12a2 2 0 0 0-2 2c0 1.1.9 2 2 2h4v-4h-4z"></path>
        </svg>
      ),
      title: "Cheque Prix",
      description: "Solução financeira para antecipar recebimentos de cheques pré-datados, proporcionando liquidez imediata para sua empresa."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-prix-blue">
          <rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect>
          <line x1="3" y1="9" x2="21" y2="9"></line>
          <path d="m9 16 3-3 3 3"></path>
        </svg>
      ),
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
