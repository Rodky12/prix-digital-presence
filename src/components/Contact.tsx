
import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';

const Contact = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

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
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1976000344805!2d-46.65410742376747!3d-23.565639178429584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c7eb352091%3A0x2a296f4170f7d3e1!2sAv.%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1714569967736!5m2!1spt-BR!2sbr"
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
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-prix-blue mr-3 mt-1">
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    <p className="text-prix-gray-dark">
                      Av. Paulista, 1000, Bela Vista<br />
                      São Paulo - SP, 01310-100
                    </p>
                  </div>
                  <div className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-prix-blue mr-3 mt-1">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                    <p className="text-prix-gray-dark">
                      (11) 3322-1000
                    </p>
                  </div>
                  <div className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-prix-blue mr-3 mt-1">
                      <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14l4 4v12Z"></path>
                      <path d="M16 8h-5"></path>
                      <path d="M15 12H9"></path>
                      <path d="M14 16h-3"></path>
                    </svg>
                    <p className="text-prix-gray-dark">
                      <a href="mailto:contato@grupoprix.com.br" className="hover:text-prix-blue transition-colors">
                        contato@grupoprix.com.br
                      </a>
                    </p>
                  </div>
                  <div className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-prix-blue mr-3 mt-1">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                      <line x1="16" y1="2" x2="16" y2="6"></line>
                      <line x1="8" y1="2" x2="8" y2="6"></line>
                      <line x1="3" y1="10" x2="21" y2="10"></line>
                    </svg>
                    <div className="text-prix-gray-dark">
                      <p className="font-medium">Horário de Funcionamento:</p>
                      <p>Segunda a Sexta: 09h às 18h</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-prix-blue/5 p-8 rounded-lg border border-prix-blue/10">
              <h3 className="text-xl font-montserrat font-semibold text-prix-blue mb-6">Entre em contato</h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-prix-gray-dark mb-1">Nome</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-prix-blue focus:border-transparent outline-none transition"
                    placeholder="Seu nome completo"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-prix-gray-dark mb-1">E-mail</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-prix-blue focus:border-transparent outline-none transition"
                    placeholder="seu@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-prix-gray-dark mb-1">Telefone</label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-prix-blue focus:border-transparent outline-none transition"
                    placeholder="(00) 00000-0000"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-prix-gray-dark mb-1">Mensagem</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-prix-blue focus:border-transparent outline-none transition"
                    placeholder="Como podemos ajudar?"
                  ></textarea>
                </div>
                <div className="mt-6">
                  <Button className="w-full bg-prix-blue hover:bg-opacity-90 font-medium py-6 text-base">
                    Enviar mensagem
                  </Button>
                </div>
              </form>
            </div>
            
            <div className="mt-6 p-4 bg-prix-blue/5 rounded-lg border border-prix-blue/10 flex items-center">
              <div className="bg-green-100 p-2 rounded-full mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600">
                  <path d="M6 18c0 .6.4 1 1 1h10c.6 0 1-.4 1-1v-3H6v3z"></path>
                  <path d="M16 13v-3h5l-1.4-5c-.2-.6-.8-1-1.4-1H6c-.5 0-1.2.4-1.4 1L3 10h5v3"></path>
                  <path d="M14 13V7c0-1.1-.9-2-2-2s-2 .9-2 2v6"></path>
                </svg>
              </div>
              <div>
                <p className="font-montserrat font-medium">Precisa de atendimento rápido?</p>
                <a 
                  href="https://wa.me/5511933221000" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-green-600 font-medium hover:underline"
                >
                  Fale conosco pelo WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
