
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-itcore-primary text-white">
      <div className="container mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">ITCORE Moçambique</h3>
            <p className="mb-4 text-gray-300">
              Soluções tecnológicas inovadoras para empresas de todos os tamanhos em Moçambique, com foco em qualidade e resultados.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4">Serviços</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Desenvolvimento Web</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Desenvolvimento de Software</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Infraestrutura de TI</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Segurança Informática</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Gestão de Dados</a></li>
            </ul>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Início</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-white transition-colors">Sobre Nós</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors">Serviços</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contacto</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Carreira</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 mt-1 text-itcore-secondary" />
                <span>Av. Julius Nyerere, 257<br />Maputo, Moçambique</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-itcore-secondary" />
                <span>+258 21 123 456</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-itcore-secondary" />
                <span>info@itcore.co.mz</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Copyright */}
      <div className="bg-itcore-dark py-4">
        <div className="container mx-auto text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} ITCORE Moçambique. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
