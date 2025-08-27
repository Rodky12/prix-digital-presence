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
                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zm4.52 7.01c-.18-.4-.46-.75-.84-.98-.27-.16-.58-.24-.9-.24-.23 0-.47.06-.68.18-.27.15-.49.37-.64.65-.1.18-.15.39-.15.6 0 .14.02.28.07.41l.82 2.07c.1.25.25.47.43.65.25.25.58.39.92.39.18 0 .35-.04.51-.11l2.4-.98c.16-.07.31-.16.43-.28.18-.18.29-.42.29-.68 0-.32-.13-.62-.35-.84-.27-.27-.63-.42-1.01-.42-.23 0-.46.05-.67.14l-1.37.56-.28-.71c-.05-.13-.08-.27-.08-.41 0-.21.08-.41.22-.57.18-.2.43-.31.69-.31.18 0 .35.04.51.12.21.1.39.25.52.43.1.14.15.3.15.47 0 .12-.02.24-.07.35l-.28.71 1.37-.56c.21-.09.44-.14.67-.14.38 0 .74.15 1.01.42.22.22.35.52.35.84 0 .26-.11.5-.29.68-.12.12-.27.21-.43.28l-2.4.98c-.16.07-.33.11-.51.11-.34 0-.67-.14-.92-.39-.18-.18-.33-.4-.43-.65l-.82-2.07c-.05-.13-.07-.27-.07-.41 0-.21.05-.42.15-.6.15-.28.37-.5.64-.65.21-.12.45-.18.68-.18.32 0 .63.08.9.24.38.23.66.58.84.98z"/>
                </svg>
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
