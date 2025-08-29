
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-scroll';
import { Menu, X } from 'lucide-react';
import { Link as RouterLink, useLocation } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      // Determine if scrolled down more than 50px
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const navLinks = [
    { name: 'Início', to: 'home' },
    { name: 'Empresas', to: 'history' },
    { name: 'Produtos FIDC', to: 'products' },
    { name: 'Contato', to: 'contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white shadow-md py-2`}
    >
      <div className="container flex justify-between items-center">
        <div className="flex items-center">
          <RouterLink to="/">
            <img 
              src="/lovable-uploads/82dd5968-a35a-46ef-affc-9b22172a5db1.png" 
              alt="Grupo Prix" 
              className="h-12 md:h-14"
            />
          </RouterLink>
        </div>
        
        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {isHomePage ? (
            <>
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  spy={true}
                  smooth={true}
                  offset={-20}
                  duration={500}
                  className="font-montserrat text-sm font-medium cursor-pointer transition-colors hover:text-prix-blue text-prix-gray-dark"
                >
                  {link.name}
                </Link>
              ))}
            </>
          ) : (
            <RouterLink 
              to="/" 
              className="font-montserrat text-sm font-medium cursor-pointer transition-colors hover:text-prix-blue text-prix-gray-dark"
            >
              Voltar para o Início
            </RouterLink>
          )}
          <RouterLink to="/cliente">
            <Button 
              variant="default" 
              className="bg-prix-blue hover:bg-opacity-90 text-white"
            >
              Área do Cliente
            </Button>
          </RouterLink>
        </nav>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleMobileMenu}
            className="text-prix-blue"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white py-4 shadow-md">
          <div className="container flex flex-col space-y-4">
            {isHomePage ? (
              <>
                {navLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    spy={true}
                    smooth={true}
                    offset={-20}
                    duration={500}
                    onClick={() => setMobileMenuOpen(false)}
                    className="font-montserrat text-prix-gray-dark text-lg font-medium py-2 cursor-pointer transition-colors hover:text-prix-blue"
                  >
                    {link.name}
                  </Link>
                ))}
              </>
            ) : (
              <RouterLink 
                to="/" 
                onClick={() => setMobileMenuOpen(false)}
                className="font-montserrat text-prix-gray-dark text-lg font-medium py-2 cursor-pointer transition-colors hover:text-prix-blue"
              >
                Voltar para o Início
              </RouterLink>
            )}
            <RouterLink 
              to="/cliente" 
              onClick={() => setMobileMenuOpen(false)}
            >
              <Button 
                variant="default" 
                className="bg-prix-blue hover:bg-opacity-90 text-white w-full"
              >
                Área do Cliente
              </Button>
            </RouterLink>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
