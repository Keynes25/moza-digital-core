
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-itcore-light to-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-itcore-primary">
              Soluções Digitaiseeeerree <span className="gradient-text">Inovadoras</span> para o seu Negócio
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              Transformamos a sua visão em realidade digital com soluções de TI personalizadas e estratégicas para empresas de todos os tamanhos em Moçambique.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="btn-primary group" size="lg">
                Os Nossos Serviços
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" className="border-itcore-secondary text-itcore-secondary hover:bg-itcore-secondary hover:text-white" size="lg">
                Fale Connosco
              </Button>
            </div>
          </div>
          <div className="hidden md:block">
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
              alt="IT Professional" 
              className="w-full h-auto rounded-lg shadow-xl hover-scale object-cover" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
