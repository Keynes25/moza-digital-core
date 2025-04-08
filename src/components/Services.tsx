
import { Monitor, Code, Server, Shield, Database, BarChart } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const servicesData = [
  {
    icon: <Monitor className="h-10 w-10 mb-4 text-itcore-secondary" />,
    title: "Desenvolvimento Web",
    description: "Websites profissionais e plataformas web personalizadas que representam a sua marca e melhoram a sua presença online.",
  },
  {
    icon: <Code className="h-10 w-10 mb-4 text-itcore-secondary" />,
    title: "Desenvolvimento de Software",
    description: "Aplicações personalizadas para automatizar processos, aumentar a eficiência e resolver desafios específicos da sua empresa.",
  },
  {
    icon: <Server className="h-10 w-10 mb-4 text-itcore-secondary" />,
    title: "Infraestrutura de TI",
    description: "Implementação e gestão de servidores, redes e sistemas para garantir a operação eficiente do seu negócio.",
  },
  {
    icon: <Shield className="h-10 w-10 mb-4 text-itcore-secondary" />,
    title: "Segurança Informática",
    description: "Proteja os seus dados e sistemas contra ameaças cibernéticas com as nossas soluções de segurança abrangentes.",
  },
  {
    icon: <Database className="h-10 w-10 mb-4 text-itcore-secondary" />,
    title: "Gestão de Dados",
    description: "Armazenamento, análise e gestão eficiente dos dados da sua empresa para apoiar decisões estratégicas.",
  },
  {
    icon: <BarChart className="h-10 w-10 mb-4 text-itcore-secondary" />,
    title: "Consultoria de TI",
    description: "Orientação especializada para maximizar o retorno dos seus investimentos em tecnologia e impulsionar a inovação.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Os Nossos Serviços</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Oferecemos um conjunto completo de soluções tecnológicas para impulsionar o crescimento e a eficiência do seu negócio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <Card key={index} className="hover-scale border-t-4 border-t-itcore-secondary">
              <CardHeader className="pt-6">
                <div className="flex justify-center">{service.icon}</div>
                <CardTitle className="text-xl text-center">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-gray-600">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
