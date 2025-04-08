
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <a href="#" className="flex items-center">
              <span className="text-2xl font-bold text-itcore-primary">ITCORE</span>
              <span className="text-itcore-secondary ml-1">Moçambique</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-itcore-secondary font-medium transition-colors">
              Início
            </a>
            <a href="#services" className="text-gray-700 hover:text-itcore-secondary font-medium transition-colors">
              Serviços
            </a>
            <a href="#about" className="text-gray-700 hover:text-itcore-secondary font-medium transition-colors">
              Sobre Nós
            </a>
            <a href="#contact" className="text-gray-700 hover:text-itcore-secondary font-medium transition-colors">
              Contacto
            </a>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="bg-itcore-accent hover:bg-orange-600 text-white font-medium">
              Consulta Grátis
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-500 hover:text-gray-600"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <a
                href="#"
                className="text-gray-700 hover:text-itcore-secondary font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Início
              </a>
              <a
                href="#services"
                className="text-gray-700 hover:text-itcore-secondary font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Serviços
              </a>
              <a
                href="#about"
                className="text-gray-700 hover:text-itcore-secondary font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Sobre Nós
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-itcore-secondary font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contacto
              </a>
              <Button className="bg-itcore-accent hover:bg-orange-600 text-white font-medium w-full">
                Consulta Grátis
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
