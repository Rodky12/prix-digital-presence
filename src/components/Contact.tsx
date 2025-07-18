
import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, Mail, Calendar, MessageSquare, Settings } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

const Contact = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [webhookUrl, setWebhookUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!webhookUrl) {
      toast({
        title: "Configuração necessária",
        description: "Configure o webhook do Zapier primeiro.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    try {
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "no-cors",
        body: JSON.stringify({
          nome: formData.name,
          email: formData.email,
          telefone: formData.phone,
          mensagem: formData.message,
          destinatario: "contato@grupoprix.com.br",
          timestamp: new Date().toISOString(),
          origem: "Website Prix Empresarial",
        }),
      });

      toast({
        title: "Mensagem enviada!",
        description: "Sua mensagem foi enviada para contato@grupoprix.com.br. Entraremos em contato em breve.",
      });
      
      // Clear form
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      console.error("Erro ao enviar mensagem:", error);
      toast({
        title: "Erro",
        description: "Falha ao enviar a mensagem. Tente novamente.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
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
        <div className="text-center mb-8">
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-prix-blue mb-4">Contato</h2>
          <div className="w-20 h-1 bg-prix-blue mx-auto"></div>
        </div>

        <div ref={sectionRef} className="animate-on-scroll grid md:grid-cols-2 gap-8 lg:gap-16">
          <div>
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <div className="h-48 w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.2493883324145!2d-46.647944!3d-23.5683894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59bec2052c7f%3A0x589c13729fc02ecf!2sPrix%20Empresarial%20Ltda!5e0!3m2!1spt-BR!2sbr!4v1714569967736!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização Prix Empresarial Ltda"
                ></iframe>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-montserrat font-semibold text-prix-blue mb-4">Endereço</h3>
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
                    <MessageSquare className="text-prix-blue mr-3 mt-1 w-5 h-5" />
                    <p className="text-prix-gray-dark">
                      <a href="https://wa.me/5511996112990" className="hover:text-prix-blue transition-colors">
                        WhatsApp: (11) 99611-2990
                      </a>
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
            <div className="bg-prix-blue/5 p-6 rounded-lg border border-prix-blue/10">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-montserrat font-semibold text-prix-blue">Fale Conosco</h3>
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowSettings(!showSettings)}
                  className="text-prix-blue hover:bg-prix-blue/10"
                >
                  <Settings className="w-4 h-4" />
                </Button>
              </div>
              
              {showSettings && (
                <div className="mb-6 p-4 bg-white/50 rounded-lg border border-prix-blue/20">
                  <label htmlFor="webhookUrl" className="block text-sm font-medium text-prix-gray-dark mb-2">
                    Zapier Webhook URL
                  </label>
                  <input
                    type="url"
                    id="webhookUrl"
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-prix-blue focus:border-transparent outline-none transition"
                    placeholder="https://hooks.zapier.com/hooks/catch/..."
                    value={webhookUrl}
                    onChange={(e) => setWebhookUrl(e.target.value)}
                  />
                  <p className="text-xs text-prix-gray-dark mt-1">
                    Configure um Zap que envie email para contato@grupoprix.com.br quando receber dados do webhook
                  </p>
                </div>
              )}
              
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-prix-gray-dark mb-1">Nome</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-prix-blue focus:border-transparent outline-none transition"
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
                    rows={3}
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-prix-blue focus:border-transparent outline-none transition"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                  ></textarea>
                </div>
                <div className="mt-6">
                  <Button 
                    type="submit" 
                    disabled={isLoading}
                    className="w-full bg-prix-blue hover:bg-opacity-90 font-medium py-6 text-base disabled:opacity-50"
                  >
                    {isLoading ? 'Enviando...' : 'Enviar mensagem'}
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
