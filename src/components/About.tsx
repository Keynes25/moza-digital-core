
import { CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const About = () => {
  const advantages = [
    "Equipas de especialistas certificados",
    "Mais de 10 anos de experiência em Moçambique",
    "Soluções personalizadas para cada cliente",
    "Suporte técnico 24/7",
    "Tecnologias de ponta e inovadoras",
    "Compromisso com a satisfação do cliente"
  ];

  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" 
              alt="Equipa ITCORE" 
              className="rounded-lg shadow-xl w-full"
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-itcore-primary">
              Sobre a ITCORE Moçambique
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Desde 2010, a ITCORE Moçambique tem sido líder em oferecer soluções tecnológicas inovadoras para empresas de todos os setores. A nossa missão é transformar desafios em oportunidades através de tecnologia de ponta.
            </p>
            <p className="text-lg text-gray-700 mb-8">
              Com uma equipa de especialistas altamente qualificados, criamos soluções personalizadas que impulsionam o crescimento, aumentam a eficiência e proporcionam vantagens competitivas aos nossos clientes.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {advantages.map((advantage, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-itcore-secondary mt-0.5 mr-2 flex-shrink-0" />
                  <span>{advantage}</span>
                </div>
              ))}
            </div>
            
            <Button className="btn-secondary">
              Conheça Melhor a Nossa Equipa
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
