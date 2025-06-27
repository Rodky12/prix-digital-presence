
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
      <main className="flex-grow">
        <section className="bg-[#1b3462] text-white flex flex-col items-center justify-center relative" style={{ height: '114px', marginTop: '80px' }}>
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
                  O Grupo Prix está comprometido em proteger a privacidade e segurança das informações pessoais de nossos usuários, clientes e visitantes. Esta Política de Privacidade descreve como coletamos, usamos, compartilhamos e protegemos suas informações quando você visita nosso site, utiliza nossos serviços ou interage conosco.
                </p>
                <p className="text-prix-gray-dark text-sm">
                  Última atualização: 06/06/2025
                </p>
              </div>

              <Separator className="my-8" />

              <div className="space-y-8">
                <section>
                  <h2 className="font-montserrat font-bold text-2xl text-prix-blue mb-4">1. Informações Coletadas</h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-lg text-prix-blue mb-2">1.1 Informações Fornecidas Voluntariamente</h3>
                      <p className="text-prix-gray-dark mb-2">
                        Coletamos informações pessoais que você nos fornece diretamente através de:
                      </p>
                      <ul className="list-disc list-inside text-prix-gray-dark space-y-1">
                        <li>Formulário de Contato: Nome completo, endereço de e-mail, número de telefone e mensagem</li>
                        <li>Área do Cliente: Dados de acesso aos sistemas e informações comerciais</li>
                        <li>Comunicações diretas: E-mails, telefonemas e outras formas de contato</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-semibold text-lg text-prix-blue mb-2">1.2 Informações Coletadas Automaticamente</h3>
                      <p className="text-prix-gray-dark mb-2">
                        Quando você navega em nosso site, é coletado automaticamente:
                      </p>
                      <ul className="list-disc list-inside text-prix-gray-dark space-y-1">
                        <li>Endereço IP e localização aproximada</li>
                        <li>Tipo e versão do navegador</li>
                        <li>Sistema operacional utilizado</li>
                        <li>Páginas visitadas e tempo de permanência</li>
                        <li>Data e horário de acesso</li>
                        <li>Site de origem (referrer)</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-semibold text-lg text-prix-blue mb-2">1.3 Redes Sociais</h3>
                      <p className="text-prix-gray-dark">
                        Quando você interage com nossos perfis nas redes sociais (Instagram e LinkedIn) ou clica em nossos links para essas plataformas, suas interações podem ser registradas de acordo com as políticas de privacidade dessas plataformas.
                      </p>
                    </div>
                  </div>
                </section>

                <Separator />

                <section>
                  <h2 className="font-montserrat font-bold text-2xl text-prix-blue mb-4">2. Finalidades do Tratamento</h2>
                  <p className="text-prix-gray-dark mb-4">
                    Utilizamos suas informações pessoais para as seguintes finalidades:
                  </p>
                  <ul className="list-disc list-inside text-prix-gray-dark space-y-2">
                    <li>Atendimento ao cliente: Responder às suas solicitações enviadas pelo formulário de contato</li>
                    <li>Comunicação comercial: Enviar informações sobre nossos produtos e serviços, caso solicitado</li>
                    <li>Prestação de serviços: Fornecer acesso aos sistemas da área do cliente</li>
                    <li>Melhorias do site: Analisar a navegação para aprimorar a experiência do usuário</li>
                    <li>Cumprimento legal: Atender obrigações legais e regulamentares do setor financeiro</li>
                    <li>Segurança: Prevenir fraudes e proteger nossos sistemas</li>
                  </ul>
                </section>

                <Separator />

                <section>
                  <h2 className="font-montserrat font-bold text-2xl text-prix-blue mb-4">3. Bases Legais (LGPD)</h2>
                  <p className="text-prix-gray-dark mb-4">
                    O tratamento de seus dados pessoais é fundamentado nas seguintes bases legais:
                  </p>
                  <ul className="list-disc list-inside text-prix-gray-dark space-y-2">
                    <li>Consentimento: Para comunicações comerciais e resposta ao formulário de contato</li>
                    <li>Interesse legítimo: Para melhorias do site e análise de navegação</li>
                    <li>Cumprimento de obrigação legal: Para atender exigências do Banco Central e CVM</li>
                    <li>Execução de contrato: Para prestação de serviços aos clientes</li>
                  </ul>
                </section>

                <Separator />

                <section>
                  <h2 className="font-montserrat font-bold text-2xl text-prix-blue mb-4">4. Compartilhamento de Informações</h2>
                  <p className="text-prix-gray-dark mb-4">
                    Não vendemos, alugamos ou comercializamos suas informações pessoais. Podemos compartilhar suas informações apenas nas seguintes situações:
                  </p>
                  <ul className="list-disc list-inside text-prix-gray-dark space-y-2">
                    <li>Com seu consentimento explícito e específico</li>
                    <li>Para cumprimento de obrigações legais ou ordem judicial</li>
                    <li>Para proteger nossos direitos, propriedade ou segurança</li>
                    <li>Com prestadores de serviços que nos auxiliam (sob acordos de confidencialidade)</li>
                    <li>Em caso de reorganização societária, mediante notificação prévia</li>
                  </ul>
                </section>

                <Separator />

                <section>
                  <h2 className="font-montserrat font-bold text-2xl text-prix-blue mb-4">5. Retenção de Dados</h2>
                  <div className="space-y-4">
                    <p className="text-prix-gray-dark">
                      Mantemos seus dados pessoais pelo período necessário para cumprir as finalidades descritas nesta política:
                    </p>
                    <ul className="list-disc list-inside text-prix-gray-dark space-y-2">
                      <li>Dados do formulário de contato</li>
                      <li>Dados de navegação</li>
                      <li>Dados de clientes: Conforme exigências legais do setor financeiro</li>
                      <li>Cookies técnicos: Até o fechamento da sessão do navegador</li>
                    </ul>
                    <p className="text-prix-gray-dark mt-4">
                      Após esses períodos, os dados serão anonimizados ou excluídos, salvo quando a manutenção for exigida por lei.
                    </p>
                  </div>
                </section>

                <Separator />

                <section>
                  <h2 className="font-montserrat font-bold text-2xl text-prix-blue mb-4">6. Cookies e Tecnologias Similares</h2>
                  <div className="space-y-4">
                    <p className="text-prix-gray-dark">
                      Caso necessário utilizamos cookies e tecnologias similares para melhorar sua experiência em nosso site:
                    </p>
                    <ul className="list-disc list-inside text-prix-gray-dark space-y-2">
                      <li>Cookies essenciais: Necessários para o funcionamento básico do site</li>
                      <li>Cookies de preferências: Lembram suas configurações e escolhas</li>
                      <li>Cookies analíticos: Nos ajudam a entender como você usa o site</li>
                    </ul>
                    <p className="text-prix-gray-dark">
                      Você pode gerenciar suas preferências de cookies através das configurações do seu navegador. Note que desabilitar alguns cookies pode afetar a funcionalidade do site.
                    </p>
                  </div>
                </section>

                <Separator />

                <section>
                  <h2 className="font-montserrat font-bold text-2xl text-prix-blue mb-4">7. Segurança das Informações</h2>
                  <p className="text-prix-gray-dark mb-4">
                    Implementamos medidas de segurança técnicas, administrativas e físicas para proteger suas informações:
                  </p>
                  <ul className="list-disc list-inside text-prix-gray-dark space-y-2">
                    <li>Criptografia de dados sensíveis em trânsito e em repouso</li>
                    <li>Controles de acesso baseados em funções e necessidade</li>
                    <li>Monitoramento contínuo de atividades suspeitas</li>
                    <li>Treinamento regular da equipe sobre segurança da informação</li>
                  </ul>
                </section>

                <Separator />

                <section>
                  <h2 className="font-montserrat font-bold text-2xl text-prix-blue mb-4">8. Seus Direitos</h2>
                  <p className="text-prix-gray-dark mb-4">
                    De acordo com a Lei Geral de Proteção de Dados (LGPD), você tem os seguintes direitos:
                  </p>
                  <ul className="list-disc list-inside text-prix-gray-dark space-y-2">
                    <li>Confirmação: Saber se tratamos seus dados pessoais</li>
                    <li>Acesso: Obter uma cópia dos seus dados pessoais</li>
                    <li>Correção: Solicitar a correção de dados incompletos, inexatos ou desatualizados</li>
                    <li>Anonimização ou bloqueio: Solicitar a anonimização ou bloqueio de dados desnecessários</li>
                    <li>Eliminação: Solicitar a exclusão de dados tratados com seu consentimento</li>
                    <li>Portabilidade: Solicitar a portabilidade dos dados para outro fornecedor</li>
                    <li>Informação: Obter informações sobre o compartilhamento de dados</li>
                    <li>Revogação: Revogar o consentimento para o tratamento de dados</li>
                  </ul>
                  <p className="text-prix-gray-dark mt-4">
                    Para exercer qualquer um desses direitos, entre em contato conosco através dos canais informados.
                  </p>
                </section>

                <Separator />

                <section>
                  <h2 className="font-montserrat font-bold text-2xl text-prix-blue mb-4">9. Alterações na Política</h2>
                  <p className="text-prix-gray-dark mb-4">
                    Esta Política de Privacidade pode ser atualizada periodicamente para refletir mudanças em nossas práticas ou na legislação aplicável. Caso necessário notificaremos sobre alterações significativas através de:
                  </p>
                  <ul className="list-disc list-inside text-prix-gray-dark space-y-2">
                    <li>Aviso destacado em nosso site</li>
                    <li>E-mail para os contatos em nossa base de dados</li>
                    <li>Comunicação através de nossos canais oficiais</li>
                  </ul>
                  <p className="text-prix-gray-dark mt-4">
                    Recomendamos que você revise esta política regularmente para se manter informado sobre como protegemos suas informações.
                  </p>
                </section>

                <Separator />

                <section>
                  <h2 className="font-montserrat font-bold text-2xl text-prix-blue mb-4">10. Contato</h2>
                  <p className="text-prix-gray-dark mb-4">
                    Para questões sobre esta Política de Privacidade, exercício de direitos ou dúvidas sobre o tratamento de dados, entre em contato conosco:
                  </p>
                  <div className="bg-gray-50 p-6 rounded-lg space-y-3">
                    <p className="text-prix-gray-dark">Grupo Prix</p>
                    <p className="text-prix-gray-dark"><strong>E-mail:</strong> contato@grupoprix.com.br</p>
                    <p className="text-prix-gray-dark"><strong>Telefone:</strong> (11) 3411-1400</p>
                    <p className="text-prix-gray-dark"><strong>WhatsApp:</strong> (11) 99611-2990</p>
                    <p className="text-prix-gray-dark"><strong>Endereço:</strong> Avenida Paulista, 460 - 13º Andar, Bela Vista - São Paulo - SP, CEP 01310-904</p>
                    <p className="text-prix-gray-dark"><strong>Horário de atendimento:</strong> Segunda a quinta: 08h30 às 18h15 | Sexta: 08h30 às 17h30</p>
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
