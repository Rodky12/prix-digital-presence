
import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, Mail, Calendar, MessageSquare } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

const Contact = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would normally send the form data to your backend
    
    // For demo purposes, just show a success toast
    toast({
      title: "Mensagem enviada!",
      description: "Entraremos em contato em breve.",
    });
    
    // Clear form
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="contact" className="section bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-prix-blue mb-4">Entre em Contato</h2>
          <div className="w-20 h-1 bg-prix-blue mx-auto mb-6"></div>
          <p className="text-prix-gray-dark max-w-2xl mx-auto">
            Estamos à disposição para atender às suas necessidades e esclarecer qualquer dúvida sobre nossos serviços.
          </p>
        </div>

        <div ref={sectionRef} className="animate-on-scroll grid md:grid-cols-2 gap-8 lg:gap-16">
          <div>
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <div className="h-64 w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1976000344805!2d-46.65410742376747!3d-23.565639178429584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c7eb352091%3A0x2a296f4170f7d3e1!2sAv.%20Paulista%2C%20460%20-%20Bela%20Vista%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2001310-904!5e0!3m2!1spt-BR!2sbr!4v1714569967736!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização Grupo Prix"
                ></iframe>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-montserrat font-semibold text-prix-blue mb-4">Nosso Endereço</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="text-prix-blue mr-3 mt-1 w-5 h-5" />
                    <p className="text-prix-gray-dark">
                      Avenida Paulista, 460 - 13º Andar<br />
                      Bela Vista - São Paulo - SP<br />
                      CEP 01310-904
                    </p>
                  </div>
                  <div className="flex items-start">
                    <Phone className="text-prix-blue mr-3 mt-1 w-5 h-5" />
                    <p className="text-prix-gray-dark">
                      (11) 3411-1400
                    </p>
                  </div>
                  <div className="flex items-start">
                    <Mail className="text-prix-blue mr-3 mt-1 w-5 h-5" />
                    <p className="text-prix-gray-dark">
                      <a href="mailto:contato@grupoprix.com.br" className="hover:text-prix-blue transition-colors">
                        contato@grupoprix.com.br
                      </a>
                    </p>
                  </div>
                  <div className="flex items-start">
                    <Calendar className="text-prix-blue mr-3 mt-1 w-5 h-5" />
                    <div className="text-prix-gray-dark">
                      <p className="font-medium">Horário de Expediente:</p>
                      <p>Segunda à Quinta: 08h30 às 18h15</p>
                      <p>Sexta: 08h30 às 17h30</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-prix-blue/5 p-8 rounded-lg border border-prix-blue/10">
              <h3 className="text-xl font-montserrat font-semibold text-prix-blue mb-6">Entre em contato</h3>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-prix-gray-dark mb-1">Nome</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-prix-blue focus:border-transparent outline-none transition"
                    placeholder="Seu nome completo"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-prix-gray-dark mb-1">E-mail</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-prix-blue focus:border-transparent outline-none transition"
                    placeholder="seu@email.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-prix-gray-dark mb-1">Telefone</label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-prix-blue focus:border-transparent outline-none transition"
                    placeholder="(00) 00000-0000"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-prix-gray-dark mb-1">Mensagem</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-prix-blue focus:border-transparent outline-none transition"
                    placeholder="Como podemos ajudar?"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                  ></textarea>
                </div>
                <div className="mt-6">
                  <Button type="submit" className="w-full bg-prix-blue hover:bg-opacity-90 font-medium py-6 text-base">
                    Enviar mensagem
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
