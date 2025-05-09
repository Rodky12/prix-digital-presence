
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-scroll';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
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
    { name: 'História', to: 'history' },
    { name: 'Empresas', to: 'companies' },
    { name: 'Produtos', to: 'products' },
    { name: 'Contato', to: 'contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container flex justify-between items-center">
        <div className="flex items-center">
          <img 
            src="/lovable-uploads/8d6a373d-335c-4f5e-b652-d87676af30cc.png" 
            alt="Grupo Prix" 
            className="h-12 md:h-14"
          />
        </div>
        
        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              className={`font-montserrat text-sm font-medium cursor-pointer transition-colors hover:text-prix-blue ${
                isScrolled ? 'text-prix-gray-dark' : 'text-prix-blue'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Button 
            variant="default" 
            className="bg-prix-blue hover:bg-opacity-90 text-white"
            onClick={() => window.open('https://cliente.grupoprix.com.br', '_blank')}
          >
            Área do Cliente
          </Button>
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
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                onClick={() => setMobileMenuOpen(false)}
                className="font-montserrat text-prix-gray-dark text-lg font-medium py-2 cursor-pointer transition-colors hover:text-prix-blue"
              >
                {link.name}
              </Link>
            ))}
            <Button 
              variant="default" 
              className="bg-prix-blue hover:bg-opacity-90 text-white w-full"
              onClick={() => window.open('https://cliente.grupoprix.com.br', '_blank')}
            >
              Área do Cliente
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
