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
              <a href="https://wa.me/551134111400" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-colors">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
              </a>
            </div>
            
            <div className="flex flex-col items-start mt-auto pt-12">
              <h3 className="font-montserrat font-semibold text-white text-lg mb-2">Salve nosso Contato</h3>
              <img 
                src="/lovable-uploads/VCard-PrixEmpresarial_Branco-FundoTransparente.png" 
                alt="QR Code Prix Empresarial" 
                className="w-36 h-36 object-contain ml-4"
              />
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

            <div className="mt-8">
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
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-gray-300 mr-3 shrink-0" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                <a href="https://wa.me/551134111400" className="text-gray-300 hover:text-white transition-colors">
                  (11) 3411-1400
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
