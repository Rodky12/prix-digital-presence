
import { useEffect, useRef } from 'react';
import { MapPin, Phone, Mail, Calendar } from 'lucide-react';

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
        <div className="text-center mb-8">
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-prix-blue mb-4">Contato</h2>
          <div className="w-20 h-1 bg-prix-blue mx-auto"></div>
        </div>

        <div ref={sectionRef} className="animate-on-scroll">
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="h-72 w-full">
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
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start justify-items-start">
                {/* Endereço e Horário - Primeira coluna */}
                <div>
                  <h3 className="text-xl font-montserrat font-semibold text-prix-blue mb-2">Endereço</h3>
                  <div className="flex items-start mb-4">
                    <MapPin className="text-prix-blue mr-3 mt-1 w-5 h-5" />
                    <p className="text-prix-gray-dark">
                      Avenida Paulista, 460 - 13º Andar<br />
                      Bela Vista - São Paulo - SP<br />
                      CEP 01310-904
                    </p>
                  </div>
                  
                  <h3 className="text-xl font-montserrat font-semibold text-prix-blue mb-2">Horário de Expediente</h3>
                  <div className="flex items-start">
                    <Calendar className="text-prix-blue mr-3 mt-1 w-5 h-5" />
                    <div className="text-prix-gray-dark">
                      <p>Segunda à Quinta: 08h30 às 18h15</p>
                      <p>Sexta: 08h30 às 17h30</p>
                    </div>
                  </div>
                </div>

                {/* Dados para Contato - Segunda coluna */}
                <div className="md:justify-self-end md:mr-8">
                  <h3 className="text-xl font-montserrat font-semibold text-prix-blue mb-2">Dados para Contato</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Phone className="text-prix-blue mr-3 mt-1 w-5 h-5" />
                      <p className="text-prix-gray-dark">
                        (11) 3411-1400
                      </p>
                    </div>
                    <div className="flex items-start">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-prix-blue mr-3 mt-1" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                      </svg>
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
                  </div>
                </div>

                {/* QR Code - Terceira coluna */}
                <div className="flex items-start md:justify-self-end">
                  <img 
                    src="/lovable-uploads/VCard-PrixEmpresarial.png" 
                    alt="QR Code Prix Empresarial" 
                    className="w-52 h-52 object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
