
import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Separator } from '@/components/ui/separator';

const PrivacyPolicy = () => {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-20">
        <section className="bg-[#1b3462] text-white flex flex-col items-center justify-center relative" style={{ height: '114px' }}>
          <div className="text-center">
            <h1 className="font-montserrat font-bold text-2xl md:text-3xl text-white mb-3">Política de Privacidade</h1>
            <div className="w-16 h-0.5 bg-white mx-auto"></div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container max-w-4xl">
            <div className="prose prose-lg max-w-none">
              <div className="mb-8">
                <p className="text-prix-gray-dark mb-6">
                  O Grupo Prix está comprometido em proteger a privacidade e segurança das informações pessoais de nossos usuários, clientes e visitantes. Esta Política de Privacidade descreve como coletamos, usamos, compartilhamos e protegemos suas informações.
                </p>
                <p className="text-prix-gray-dark text-sm">
                  Última atualização: {new Date().toLocaleDateString('pt-BR')}
                </p>
              </div>

              <Separator className="my-8" />

              <div className="space-y-8">
                <section>
                  <h2 className="font-montserrat font-bold text-2xl text-prix-blue mb-4">1. Informações Coletadas</h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-lg text-prix-blue mb-2">1.1 Informações Pessoais</h3>
                      <p className="text-prix-gray-dark">
                        Coletamos informações pessoais que você nos fornece diretamente, incluindo:
                      </p>
                      <ul className="list-disc list-inside text-prix-gray-dark mt-2 space-y-1">
                        <li>Nome completo</li>
                        <li>Endereço de e-mail</li>
                        <li>Número de telefone</li>
                        <li>Dados da empresa</li>
                        <li>Informações financeiras (quando aplicável)</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-semibold text-lg text-prix-blue mb-2">1.2 Informações de Uso</h3>
                      <p className="text-prix-gray-dark">
                        Automaticamente coletamos informações sobre como você utiliza nossos serviços:
                      </p>
                      <ul className="list-disc list-inside text-prix-gray-dark mt-2 space-y-1">
                        <li>Endereço IP</li>
                        <li>Tipo de navegador</li>
                        <li>Páginas visitadas</li>
                        <li>Tempo de permanência no site</li>
                        <li>Dados de localização (quando autorizado)</li>
                      </ul>
                    </div>
                  </div>
                </section>

                <Separator />

                <section>
                  <h2 className="font-montserrat font-bold text-2xl text-prix-blue mb-4">2. Uso das Informações</h2>
                  <p className="text-prix-gray-dark mb-4">
                    Utilizamos suas informações para:
                  </p>
                  <ul className="list-disc list-inside text-prix-gray-dark space-y-2">
                    <li>Fornecer e manter nossos serviços</li>
                    <li>Processar transações e operações financeiras</li>
                    <li>Comunicar sobre produtos, serviços e atualizações</li>
                    <li>Melhorar nossos produtos e serviços</li>
                    <li>Cumprir obrigações legais e regulamentares</li>
                    <li>Prevenir fraudes e atividades ilegais</li>
                  </ul>
                </section>

                <Separator />

                <section>
                  <h2 className="font-montserrat font-bold text-2xl text-prix-blue mb-4">3. Compartilhamento de Informações</h2>
                  <p className="text-prix-gray-dark mb-4">
                    Não vendemos suas informações pessoais. Podemos compartilhar suas informações apenas nas seguintes situações:
                  </p>
                  <ul className="list-disc list-inside text-prix-gray-dark space-y-2">
                    <li>Com seu consentimento explícito</li>
                    <li>Para cumprir obrigações legais</li>
                    <li>Com parceiros de negócios autorizados (sob acordos de confidencialidade)</li>
                    <li>Em caso de reestruturação empresarial</li>
                    <li>Para proteger nossos direitos e segurança</li>
                  </ul>
                </section>

                <Separator />

                <section>
                  <h2 className="font-montserrat font-bold text-2xl text-prix-blue mb-4">4. Segurança das Informações</h2>
                  <p className="text-prix-gray-dark mb-4">
                    Implementamos medidas de segurança técnicas e organizacionais para proteger suas informações:
                  </p>
                  <ul className="list-disc list-inside text-prix-gray-dark space-y-2">
                    <li>Criptografia de dados sensíveis</li>
                    <li>Controles de acesso restritivos</li>
                    <li>Monitoramento contínuo de segurança</li>
                    <li>Treinamento regular da equipe</li>
                    <li>Auditorias de segurança periódicas</li>
                  </ul>
                </section>

                <Separator />

                <section>
                  <h2 className="font-montserrat font-bold text-2xl text-prix-blue mb-4">5. Seus Direitos</h2>
                  <p className="text-prix-gray-dark mb-4">
                    De acordo com a Lei Geral de Proteção de Dados (LGPD), você tem os seguintes direitos:
                  </p>
                  <ul className="list-disc list-inside text-prix-gray-dark space-y-2">
                    <li>Confirmação da existência de tratamento de dados</li>
                    <li>Acesso aos seus dados pessoais</li>
                    <li>Correção de dados incompletos, inexatos ou desatualizados</li>
                    <li>Anonimização, bloqueio ou eliminação de dados</li>
                    <li>Portabilidade dos dados</li>
                    <li>Eliminação dos dados tratados com consentimento</li>
                    <li>Revogação do consentimento</li>
                  </ul>
                </section>

                <Separator />

                <section>
                  <h2 className="font-montserrat font-bold text-2xl text-prix-blue mb-4">6. Cookies</h2>
                  <p className="text-prix-gray-dark mb-4">
                    Utilizamos cookies e tecnologias similares para melhorar sua experiência em nosso site. Você pode gerenciar suas preferências de cookies através das configurações do seu navegador.
                  </p>
                </section>

                <Separator />

                <section>
                  <h2 className="font-montserrat font-bold text-2xl text-prix-blue mb-4">7. Alterações na Política</h2>
                  <p className="text-prix-gray-dark mb-4">
                    Esta Política de Privacidade pode ser atualizada periodicamente. Notificaremos sobre mudanças significativas através de nosso site ou por e-mail.
                  </p>
                </section>

                <Separator />

                <section>
                  <h2 className="font-montserrat font-bold text-2xl text-prix-blue mb-4">8. Contato</h2>
                  <p className="text-prix-gray-dark mb-4">
                    Para questões sobre esta Política de Privacidade ou para exercer seus direitos, entre em contato conosco:
                  </p>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <p className="text-prix-gray-dark"><strong>E-mail:</strong> contato@grupoprix.com.br</p>
                    <p className="text-prix-gray-dark"><strong>Telefone:</strong> (11) 3411-1400</p>
                    <p className="text-prix-gray-dark"><strong>Endereço:</strong> Avenida Paulista, 460 - 13º Andar, Bela Vista - São Paulo - SP, CEP 01310-904</p>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
