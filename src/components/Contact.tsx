
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Entre em Contacto</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Estamos prontos para ajudar a transformar o seu negócio através da tecnologia. Contacte-nos hoje para uma consulta gratuita.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <Card className="h-full">
              <CardContent className="p-6 flex flex-col h-full">
                <h3 className="text-xl font-semibold mb-6 text-itcore-primary">Informações de Contacto</h3>
                
                <div className="space-y-6 flex-grow">
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-itcore-secondary mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium mb-1">Endereço</h4>
                      <p className="text-gray-600">Av. Julius Nyerere, 257<br />Maputo, Moçambique</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="h-6 w-6 text-itcore-secondary mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium mb-1">Telefone</h4>
                      <p className="text-gray-600">+258 21 123 456<br />+258 84 123 4567</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail className="h-6 w-6 text-itcore-secondary mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium mb-1">Email</h4>
                      <p className="text-gray-600">info@itcore.co.mz<br />suporte@itcore.co.mz</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h4 className="font-medium mb-4">Horário de Funcionamento</h4>
                  <p className="text-gray-600">Segunda a Sexta: 8:00 - 17:00<br />Sábado: 9:00 - 13:00</p>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="lg:col-span-2">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-6 text-itcore-primary">Envie-nos uma Mensagem</h3>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block mb-2 font-medium">Nome</label>
                      <Input id="name" placeholder="Seu nome completo" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block mb-2 font-medium">Email</label>
                      <Input id="email" type="email" placeholder="Seu endereço de email" />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block mb-2 font-medium">Telefone</label>
                    <Input id="phone" placeholder="Seu número de telefone" />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block mb-2 font-medium">Assunto</label>
                    <Input id="subject" placeholder="Assunto da mensagem" />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block mb-2 font-medium">Mensagem</label>
                    <Textarea id="message" placeholder="Sua mensagem" rows={5} />
                  </div>
                  
                  <Button className="btn-primary w-full sm:w-auto" size="lg">
                    <Send className="mr-2 h-4 w-4" />
                    Enviar Mensagem
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
