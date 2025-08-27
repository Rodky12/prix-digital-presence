import { MapPin, Mail, Calendar, MessageSquare, Instagram, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleGrupoPrixEmpresasClick = () => {
    // Se já estamos na página inicial, apenas faz scroll para a seção history
    if (window.location.pathname === '/') {
      scrollToSection('history');
    } else {
      // Se não estamos na página inicial, navega e depois faz scroll
      window.location.href = '/#history';
    }
  };

  return (
    <footer className="bg-prix-blue text-white py-12">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <img 
              src="/lovable-uploads/21d22293-ab61-4a16-9b4d-dfe321cb8551.png" 
              alt="Grupo Prix" 
              className="h-14 mb-4"
            />
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/prixempresarial/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-colors">
                <Instagram width="32" height="32" />
              </a>
              <a href="https://www.linkedin.com/company/grupo-prix/?trk=top_nav_home" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-colors">
                <Linkedin width="32" height="32" />
              </a>
              <a href="https://wa.me/5511996112990" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-colors">
                <img src="/lovable-uploads/f5c6121c-5bb3-4cae-b17a-96c5fdefc722.png" alt="WhatsApp" width="32" height="32" />
              </a>
            </div>
          </div>
          
          <div>
            <button 
              onClick={handleGrupoPrixEmpresasClick}
              className="font-montserrat font-semibold text-white text-lg mb-4 hover:text-gray-300 transition-colors cursor-pointer block"
            >
              Grupo Prix - Empresas
            </button>
            <ul className="space-y-3">
              <li>
                <Link to="/multiplo-fidc" className="text-gray-300 hover:text-white transition-colors">
                  Múltiplo FIDC
                </Link>
              </li>
              <li>
                <Link to="/sao-felipe-comercial" className="text-gray-300 hover:text-white transition-colors">
                  São Felipe Comercial
                </Link>
              </li>
              <li>
                <Link to="/magazine-pelicano" className="text-gray-300 hover:text-white transition-colors">
                  Magazine Pelicano
                </Link>
              </li>
            </ul>

            <div className="mt-32">
              <Link to="/politica-privacidade" className="text-gray-300 hover:text-white transition-colors">Política de Privacidade</Link>
            </div>
          </div>
          
          <div>
            <h3 className="font-montserrat font-semibold text-white text-lg mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-300 mr-3 shrink-0">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <span className="text-gray-300">(11) 3411-1400</span>
              </li>
              <li className="flex">
                <MessageSquare className="text-gray-300 mr-3 shrink-0" size={20} />
                <a href="https://wa.me/5511996112990" className="text-gray-300 hover:text-white transition-colors">
                  (11) 99611-2990
                </a>
              </li>
              <li className="flex">
                <Mail className="text-gray-300 mr-3 shrink-0" size={20} />
                <span className="text-gray-300">contato@grupoprix.com.br</span>
              </li>
              <li className="flex">
                <MapPin className="text-gray-300 mr-3 shrink-0" size={20} />
                <div className="text-gray-300">
                  <p>
                    Avenida Paulista, 460 - 13º Andar<br />
                    Bela Vista - São Paulo - SP<br />
                    CEP 01310-904
                  </p>
                </div>
              </li>
              <li className="flex mt-2">
                <Calendar className="text-gray-300 mr-3 shrink-0 mt-1" size={20} />
                <div className="text-gray-300">
                  <div>Horário de expediente:</div>
                  <div>Segunda à Quinta: 08h30 às 18h15</div> 
                  <div>Sexta: 08h30 às 17h30</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 text-center">
          <p className="text-gray-400">
            © {currentYear} Grupo Prix. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
