
import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const ClientArea = () => {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="bg-gradient-to-br from-[#003366] to-[#001a33] py-32 text-white">
          <div className="container">
            <div className="text-center mb-16">
              <h1 className="font-montserrat font-bold text-3xl md:text-4xl mb-4">Área do Cliente</h1>
              <div className="w-20 h-1 bg-white mx-auto mb-6"></div>
              <p className="text-gray-100 max-w-2xl mx-auto">
                Acesse os serviços exclusivos para clientes do Grupo Prix.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container">
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-white rounded-lg shadow-sm p-6 transition-transform duration-300 hover:-translate-y-1 hover:shadow-md border border-gray-100 text-center">
                <div className="w-16 h-16 bg-prix-blue/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <svg 
                    className="text-prix-blue w-8 h-8"
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <rect width="18" height="18" x="3" y="3" rx="2" />
                    <path d="M7 7h10" />
                    <path d="M7 12h10" />
                    <path d="M7 17h10" />
                  </svg>
                </div>
                <h3 className="text-xl font-montserrat font-semibold text-prix-blue mb-3">Acesso ao Sistema</h3>
                <p className="text-prix-gray-dark mb-6">Acesse o sistema para gerenciar suas operações financeiras.</p>
                <Button 
                  className="bg-prix-blue hover:bg-opacity-90 w-full"
                  onClick={() => window.open('https://sistema.grupoprix.com.br:8083/netFactor/jsp/nfrInicia.jsp', '_blank')}
                >
                  Acessar Sistema
                </Button>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-6 transition-transform duration-300 hover:-translate-y-1 hover:shadow-md border border-gray-100 text-center">
                <div className="w-16 h-16 bg-prix-blue/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <svg 
                    className="text-prix-blue w-8 h-8"
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-1.5" />
                    <path d="M16 2v4" />
                    <path d="M8 2v4" />
                    <path d="M3 10h18" />
                    <path d="M18 21V8m-7 5 2 2 4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-montserrat font-semibold text-prix-blue mb-3">Assinatura de Contrato</h3>
                <p className="text-prix-gray-dark mb-6">Assine seus contratos de forma digital e segura.</p>
                <Button 
                  className="bg-prix-blue hover:bg-opacity-90 w-full"
                  onClick={() => window.open('https://portal.qcertifica.com.br/Authentication/Login.aspx', '_blank')}
                >
                  Assinar Contrato
                </Button>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-6 transition-transform duration-300 hover:-translate-y-1 hover:shadow-md border border-gray-100 text-center">
                <div className="w-16 h-16 bg-prix-blue/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <svg 
                    className="text-prix-blue w-8 h-8"
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <rect width="16" height="12" x="4" y="6" rx="2" />
                    <path d="M7 12h10" />
                    <path d="M7 16h4" />
                    <path d="M15 16h2" />
                    <path d="m6 6 6-3 6 3" />
                  </svg>
                </div>
                <h3 className="text-xl font-montserrat font-semibold text-prix-blue mb-3">Emissão de Boleto</h3>
                <p className="text-prix-gray-dark mb-6">Emita boletos para pagamentos de forma rápida e segura.</p>
                <Button 
                  className="bg-prix-blue hover:bg-opacity-90 w-full"
                  onClick={() => window.open('https://sistema.grupoprix.com.br:8083/netFactor/jsp/nfIniciaEmiteBoleto.jsp', '_blank')}
                >
                  Emitir Boleto
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ClientArea;
