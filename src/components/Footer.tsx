
import { MapPin, Phone, Mail, Calendar, WhatsApp } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-prix-blue text-white py-12">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <img 
              src="/lovable-uploads/8d6a373d-335c-4f5e-b652-d87676af30cc.png" 
              alt="Grupo Prix" 
              className="h-14 mb-4 brightness-0 invert"
            />
            <p className="text-gray-300 mb-4">
              Oferecendo soluções em administração imobiliária e antecipação de recebíveis com excelência e compromisso.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-gray-300 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" className="text-white hover:text-gray-300 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" className="text-white hover:text-gray-300 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-montserrat font-semibold text-white text-lg mb-4">Empresas</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Múltiplo FIDC</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">São Felipe Comercial</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Magazine Pelicano</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Nossa História</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Governança</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Política de Privacidade</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-montserrat font-semibold text-white text-lg mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex">
                <Phone className="text-gray-300 mr-3 shrink-0" size={20} />
                <span className="text-gray-300">(11) 3411-1400</span>
              </li>
              <li className="flex">
                <WhatsApp className="text-gray-300 mr-3 shrink-0" size={20} />
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
                  <p>Horário de expediente:</p>
                  <p>Segunda à Quinta: 08h30 às 18h15 | Sexta: 08h30 às 17h30</p>
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
