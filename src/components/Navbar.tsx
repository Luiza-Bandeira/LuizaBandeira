
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      if (isMenuOpen) setIsMenuOpen(false);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="economiza-container flex items-center justify-between">
        <div className="text-2xl font-bold">
          <span className={`${isScrolled ? 'text-azul-escuro' : 'text-white'}`}>Economiza</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => scrollToSection('inicio')}
            className={`font-medium transition-colors hover:text-vinho ${isScrolled ? 'text-azul-escuro' : 'text-white'}`}
          >
            Início
          </button>
          <button 
            onClick={() => scrollToSection('sobre')}
            className={`font-medium transition-colors hover:text-vinho ${isScrolled ? 'text-azul-escuro' : 'text-white'}`}
          >
            Sobre
          </button>
          <button 
            onClick={() => scrollToSection('servicos')}
            className={`font-medium transition-colors hover:text-vinho ${isScrolled ? 'text-azul-escuro' : 'text-white'}`}
          >
            Serviços
          </button>
          <button 
            onClick={() => scrollToSection('contato')}
            className={`font-medium transition-colors hover:text-vinho ${isScrolled ? 'text-azul-escuro' : 'text-white'}`}
          >
            Contato
          </button>
          <button 
            onClick={() => scrollToSection('agendar')}
            className="btn-secondary"
          >
            Agende uma Consultoria
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={toggleMenu} aria-label="Menu">
          {isMenuOpen ? (
            <X size={24} className={`${isScrolled ? 'text-azul-escuro' : 'text-white'}`} />
          ) : (
            <Menu size={24} className={`${isScrolled ? 'text-azul-escuro' : 'text-white'}`} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg animate-fade-in">
          <div className="economiza-container py-4 flex flex-col space-y-4">
            <button 
              onClick={() => scrollToSection('inicio')}
              className="font-medium text-azul-escuro hover:text-vinho py-2"
            >
              Início
            </button>
            <button 
              onClick={() => scrollToSection('sobre')}
              className="font-medium text-azul-escuro hover:text-vinho py-2"
            >
              Sobre
            </button>
            <button 
              onClick={() => scrollToSection('servicos')}
              className="font-medium text-azul-escuro hover:text-vinho py-2"
            >
              Serviços
            </button>
            <button 
              onClick={() => scrollToSection('contato')}
              className="font-medium text-azul-escuro hover:text-vinho py-2"
            >
              Contato
            </button>
            <button 
              onClick={() => scrollToSection('agendar')}
              className="btn-secondary inline-block text-center"
            >
              Agende uma Consultoria
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
