import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'Política de Privacidade',
  description:
    'Saiba como a Dra. Mirelle Manheze coleta, usa e protege seus dados pessoais, em conformidade com a Lei Geral de Proteção de Dados (LGPD).',
  robots: { index: true, follow: false },
}

const LAST_UPDATED = '29 de abril de 2026'
const CONTACT_EMAIL = 'contato@mirellemanheze.adv.br'
const SITE_URL = 'mirellemanheze.adv.br'

/* ─── Componentes de estrutura ───────────────────────────────── */

function Section({
  id,
  number,
  title,
  children,
}: {
  id: string
  number: string
  title: string
  children: React.ReactNode
}) {
  return (
    <section id={id} aria-labelledby={`${id}-heading`} className="scroll-mt-28">
      <div className="flex items-baseline gap-4 mb-5">
        <span className="font-red-hat text-xs tracking-brand uppercase text-champagne flex-shrink-0">
          {number}
        </span>
        <h2
          id={`${id}-heading`}
          className="font-bona-nova text-bordeaux text-2xl md:text-3xl tracking-wide leading-heading"
        >
          {title}
        </h2>
      </div>
      <div className="pl-8 space-y-4 font-red-hat text-warm text-base leading-[1.8]">
        {children}
      </div>
    </section>
  )
}

function Item({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex gap-3">
      <div className="w-1.5 h-1.5 rounded-full bg-champagne flex-shrink-0 mt-3" aria-hidden="true" />
      <div>
        {label && <strong className="font-medium text-bordeaux">{label}: </strong>}
        {children}
      </div>
    </div>
  )
}

/* ─── Índice de seções ───────────────────────────────────────── */

const sections = [
  { id: 'controlador',    number: '01', title: 'Quem somos' },
  { id: 'dados',          number: '02', title: 'Dados que coletamos' },
  { id: 'finalidade',     number: '03', title: 'Como usamos seus dados' },
  { id: 'base-legal',     number: '04', title: 'Base legal (LGPD)' },
  { id: 'armazenamento',  number: '05', title: 'Armazenamento e segurança' },
  { id: 'compartilhamento', number: '06', title: 'Compartilhamento de dados' },
  { id: 'retencao',       number: '07', title: 'Por quanto tempo mantemos' },
  { id: 'direitos',       number: '08', title: 'Seus direitos como titular' },
  { id: 'cookies',        number: '09', title: 'Cookies e rastreamento' },
  { id: 'contato',        number: '10', title: 'Como falar conosco' },
  { id: 'atualizacoes',   number: '11', title: 'Atualizações desta política' },
]

/* ─── Página ─────────────────────────────────────────────────── */

export default function PrivacyPage() {
  return (
    <>
      <Header />

      <main id="main-content">

        {/* Hero da página */}
        <div className="bg-bordeaux pt-36 pb-20 px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <Link
              href="/"
              className="inline-flex items-center gap-2 font-red-hat text-xs tracking-brand uppercase text-champagne/70 hover:text-champagne transition-colors duration-250 mb-8"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                <path d="M19 12H5M5 12l7-7M5 12l7 7" />
              </svg>
              Voltar ao site
            </Link>
            <p className="font-ephesis text-champagne/80 text-4xl mb-3 leading-none" aria-hidden="true">
              Transparência
            </p>
            <div className="h-px w-10 bg-champagne/40 mb-6" aria-hidden="true" />
            <h1 className="font-bona-nova text-white text-4xl md:text-5xl tracking-tight leading-display mb-4">
              Política de Privacidade
            </h1>
            <p className="font-red-hat text-white/65 text-sm">
              Última atualização: {LAST_UPDATED}
            </p>
          </div>
        </div>

        {/* Corpo */}
        <div className="bg-linen">
          <div className="max-w-6xl mx-auto px-6 lg:px-8 py-20 lg:py-28">
            <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-16 lg:gap-20 items-start">

              {/* Índice lateral — desktop */}
              <aside aria-label="Índice da política" className="hidden lg:block sticky top-28 self-start">
                <p className="font-red-hat text-[10px] tracking-brand uppercase text-bronze mb-5">
                  Conteúdo
                </p>
                <nav aria-label="Seções da política de privacidade">
                  <ol className="space-y-3">
                    {sections.map((s) => (
                      <li key={s.id}>
                        <a
                          href={`#${s.id}`}
                          className="flex items-center gap-3 font-red-hat text-sm text-warm hover:text-bordeaux transition-colors duration-250 group"
                        >
                          <span className="text-[10px] tracking-wider text-champagne group-hover:text-bronze transition-colors duration-250 w-5 flex-shrink-0">
                            {s.number}
                          </span>
                          {s.title}
                        </a>
                      </li>
                    ))}
                  </ol>
                </nav>
              </aside>

              {/* Conteúdo */}
              <div className="space-y-14 min-w-0">

                {/* Nota de destaque */}
                <div className="bg-cream border-l-[3px] border-champagne px-6 py-5 rounded-brand">
                  <p className="font-red-hat text-warm text-sm leading-[1.8]">
                    Os dados enviados pelo formulário de contato deste site são usados
                    exclusivamente para <strong className="font-medium text-bordeaux">retorno de contato</strong> e{' '}
                    <strong className="font-medium text-bordeaux">análise inicial da sua solicitação</strong>.
                    Não vendemos, cedemos nem comercializamos nenhuma informação pessoal.
                  </p>
                </div>

                <Section id="controlador" number="01" title="Quem somos">
                  <p>
                    O responsável pelo tratamento dos seus dados pessoais (controlador) é:
                  </p>
                  <div className="bg-cream border border-champagne/40 rounded-brand p-6 space-y-3">
                    <Item label="Nome">Mirelle Manheze de Souza</Item>
                    <Item label="Inscrição OAB">OAB/SP 540.038</Item>
                    <Item label="Atuação">Advocacia e Assessoria Jurídica</Item>
                    <Item label="Endereço">Av. Pereira Barreto, 1395, sala 75, Torre Norte — Paraíso, Santo André, SP — CEP 09190-610</Item>
                    <Item label="E-mail">{CONTACT_EMAIL}</Item>
                    <Item label="Site">{SITE_URL}</Item>
                  </div>
                </Section>

                <Section id="dados" number="02" title="Dados que coletamos">
                  <p>
                    Este site coleta dados pessoais apenas quando você preenche o formulário
                    de contato. Os dados solicitados são:
                  </p>
                  <div className="space-y-2">
                    <Item label="Nome completo">Para identificação e personalização do atendimento.</Item>
                    <Item label="E-mail">Para retorno por mensagem eletrônica.</Item>
                    <Item label="Telefone">Para contato direto ou via WhatsApp, se preferido.</Item>
                    <Item label="Mensagem">Descrição da situação ou dúvida que motivou o contato.</Item>
                  </div>
                  <p>
                    Não coletamos documentos, dados bancários, dados sensíveis ou qualquer
                    informação além das listadas acima. O preenchimento é voluntário.
                  </p>
                  <p>
                    Adicionalmente, nosso servidor de hospedagem (Vercel) e o serviço de
                    analytics (Vercel Analytics) podem registrar automaticamente dados técnicos
                    como endereço IP, tipo de navegador e páginas visitadas, de forma
                    anonimizada e agregada.
                  </p>
                </Section>

                <Section id="finalidade" number="03" title="Como usamos seus dados">
                  <p>
                    Os dados do formulário são usados para:
                  </p>
                  <div className="space-y-2">
                    <Item label="Retorno de contato">Responder à sua mensagem por e-mail, telefone ou WhatsApp.</Item>
                    <Item label="Análise inicial">Compreender sua situação para oferecer uma orientação preliminar sobre o tipo de serviço adequado.</Item>
                    <Item label="Agendamento">Organizar internamente o agendamento de consultas presenciais ou remotas.</Item>
                  </div>
                  <p>
                    Seus dados <strong className="font-medium text-bordeaux">não serão usados</strong> para
                    envio de newsletters, marketing, publicidade ou qualquer finalidade que
                    não seja o retorno direto ao seu contato.
                  </p>
                </Section>

                <Section id="base-legal" number="04" title="Base legal (LGPD)">
                  <p>
                    O tratamento dos seus dados está fundamentado na{' '}
                    <strong className="font-medium text-bordeaux">Lei nº 13.709/2018 — Lei Geral de Proteção de Dados (LGPD)</strong>,
                    nas seguintes bases legais:
                  </p>
                  <div className="space-y-2">
                    <Item label="Consentimento (Art. 7º, I)">
                      Ao preencher o formulário e marcar a caixa de consentimento, você
                      autoriza expressamente o uso dos seus dados para as finalidades descritas.
                      Esse consentimento pode ser retirado a qualquer momento.
                    </Item>
                    <Item label="Legítimo interesse (Art. 7º, IX)">
                      O interesse legítimo de responder a uma solicitação que você mesmo
                      iniciou, de forma proporcional e sem prejudicar seus direitos fundamentais.
                    </Item>
                    <Item label="Execução de contrato (Art. 7º, V)">
                      Quando há contratação de serviços jurídicos, o tratamento dos dados
                      é necessário para a execução da relação contratual.
                    </Item>
                  </div>
                </Section>

                <Section id="armazenamento" number="05" title="Armazenamento e segurança">
                  <p>
                    As mensagens enviadas pelo formulário são encaminhadas por e-mail via
                    Resend (serviço terceiro de entrega de e-mails) para o endereço oficial
                    do escritório, e não armazenadas em bancos de dados próprios do site.
                  </p>
                  <p>
                    O escritório mantém as mensagens recebidas em sua caixa de e-mail
                    profissional, protegida por senha e autenticação de dois fatores.
                    O site é hospedado na Vercel, plataforma com certificação de segurança
                    e comunicação exclusivamente por HTTPS (certificado SSL/TLS).
                  </p>
                  <p>
                    Adotamos medidas organizacionais e técnicas para proteger seus dados
                    contra acesso não autorizado, alteração, divulgação ou destruição.
                    Não é possível, porém, garantir segurança absoluta em transmissões
                    pela internet.
                  </p>
                </Section>

                <Section id="compartilhamento" number="06" title="Compartilhamento de dados">
                  <p>
                    Seus dados pessoais são compartilhados apenas com:
                  </p>
                  <div className="space-y-2">
                    <Item label="Resend (resend.com)">
                      Serviço de envio de e-mails utilizado para entrega da sua mensagem ao
                      escritório. A Resend atua como operadora de dados e está sujeita a
                      política de privacidade própria.
                    </Item>
                    <Item label="Vercel (vercel.com)">
                      Plataforma de hospedagem do site, que pode processar dados técnicos de
                      acesso de forma anonimizada.
                    </Item>
                  </div>
                  <p>
                    <strong className="font-medium text-bordeaux">Não vendemos, alugamos, cedemos nem comercializamos</strong>{' '}
                    seus dados a terceiros em nenhuma hipótese. Seus dados não são
                    compartilhados com outros escritórios, parceiros comerciais ou
                    plataformas de marketing.
                  </p>
                  <p>
                    Em caso de obrigação legal ou ordem judicial, poderemos compartilhar
                    dados com autoridades competentes, nos termos exigidos por lei.
                  </p>
                </Section>

                <Section id="retencao" number="07" title="Por quanto tempo mantemos">
                  <p>
                    Os dados do formulário de contato são mantidos pelo tempo necessário
                    para responder à sua solicitação e, se houver contratação de serviços,
                    pelo período exigido pela legislação aplicável à relação jurídica
                    estabelecida.
                  </p>
                  <p>
                    Contatos que não resultem em contratação são mantidos por até
                    <strong className="font-medium text-bordeaux"> 12 meses</strong> para fins de atendimento e
                    histórico, após o quê são descartados. Você pode solicitar a exclusão
                    antecipada a qualquer momento pelo e-mail{' '}
                    <a
                      href={`mailto:${CONTACT_EMAIL}`}
                      className="text-bronze underline underline-offset-2 hover:text-bordeaux transition-colors duration-250"
                    >
                      {CONTACT_EMAIL}
                    </a>.
                  </p>
                </Section>

                <Section id="direitos" number="08" title="Seus direitos como titular">
                  <p>
                    A LGPD garante a você, como titular dos dados, os seguintes direitos
                    (Art. 18), que podem ser exercidos a qualquer momento mediante
                    solicitação:
                  </p>
                  <div className="space-y-2">
                    <Item label="Confirmação">Saber se tratamos algum dado seu.</Item>
                    <Item label="Acesso">Obter cópia dos dados que mantemos sobre você.</Item>
                    <Item label="Correção">Corrigir dados incompletos, inexatos ou desatualizados.</Item>
                    <Item label="Exclusão">Solicitar a exclusão de dados tratados com base em consentimento.</Item>
                    <Item label="Portabilidade">Receber seus dados em formato estruturado e legível por máquina.</Item>
                    <Item label="Revogação do consentimento">Retirar sua autorização a qualquer momento, sem prejuízo dos tratamentos realizados anteriormente.</Item>
                    <Item label="Oposição">Opor-se ao tratamento realizado com base em legítimo interesse.</Item>
                    <Item label="Informação sobre compartilhamento">Saber com quais terceiros seus dados foram compartilhados.</Item>
                  </div>
                  <p>
                    Para exercer qualquer desses direitos, envie uma solicitação para{' '}
                    <a
                      href={`mailto:${CONTACT_EMAIL}`}
                      className="text-bronze underline underline-offset-2 hover:text-bordeaux transition-colors duration-250"
                    >
                      {CONTACT_EMAIL}
                    </a>{' '}
                    com o assunto <em>&ldquo;Direitos LGPD&rdquo;</em>. Responderemos em até 15 dias úteis.
                  </p>
                  <p>
                    Você também tem o direito de apresentar reclamação à{' '}
                    <strong className="font-medium text-bordeaux">ANPD</strong> — Autoridade
                    Nacional de Proteção de Dados (gov.br/anpd), caso entenda que seus
                    direitos não foram atendidos adequadamente.
                  </p>
                </Section>

                <Section id="cookies" number="09" title="Cookies e rastreamento">
                  <p>
                    Este site utiliza cookies técnicos essenciais para seu funcionamento e
                    pode coletar dados de uso agregados e anonimizados por meio do
                    Vercel Analytics.
                  </p>
                  <div className="space-y-2">
                    <Item label="Cookies essenciais">
                      Necessários para o funcionamento básico do site (navegação, segurança).
                      Não podem ser desativados sem comprometer a experiência.
                    </Item>
                    <Item label="Analytics (anonimizado)">
                      O Vercel Analytics coleta dados agregados de acesso (páginas visitadas,
                      origem do tráfego) sem identificar usuários individualmente e sem uso de
                      cookies de rastreamento de terceiros.
                    </Item>
                  </div>
                  <p>
                    Não utilizamos cookies de publicidade, remarketing, rastreamento
                    cross-site ou pixels de redes sociais.
                  </p>
                </Section>

                <Section id="contato" number="10" title="Como falar conosco">
                  <p>
                    Para dúvidas sobre esta política, solicitações relacionadas aos seus
                    dados ou qualquer outra questão sobre privacidade:
                  </p>
                  <div className="bg-cream border border-champagne/40 rounded-brand p-6 space-y-3">
                    <Item label="E-mail">
                      <a
                        href={`mailto:${CONTACT_EMAIL}`}
                        className="text-bronze underline underline-offset-2 hover:text-bordeaux transition-colors duration-250"
                      >
                        {CONTACT_EMAIL}
                      </a>
                    </Item>
                    <Item label="Assunto sugerido">&quot;Política de Privacidade&quot; ou &quot;Direitos LGPD&quot;</Item>
                    <Item label="Prazo de resposta">Até 15 dias úteis</Item>
                    <Item label="Endereço">Av. Pereira Barreto, 1395, sala 75, Torre Norte — Santo André, SP</Item>
                  </div>
                </Section>

                <Section id="atualizacoes" number="11" title="Atualizações desta política">
                  <p>
                    Esta política pode ser atualizada periodicamente para refletir mudanças
                    nas práticas do site, na legislação aplicável ou nos serviços utilizados.
                    A data da última atualização sempre estará indicada no topo desta página.
                  </p>
                  <p>
                    Em caso de alterações relevantes que afetem seus direitos, faremos
                    esforços razoáveis para comunicar a mudança por meio de aviso no site.
                    O uso continuado do site após a publicação das alterações implica
                    ciência das novas condições.
                  </p>
                  <p className="text-sm text-bronze/70">
                    Esta política foi elaborada em conformidade com a Lei nº 13.709/2018
                    (LGPD) e com o Marco Civil da Internet (Lei nº 12.965/2014).
                  </p>
                </Section>

                {/* Rodapé da política */}
                <div className="border-t border-champagne/30 pt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <p className="font-red-hat text-xs text-bronze/60">
                    Versão: {LAST_UPDATED}
                  </p>
                  <Link
                    href="/"
                    className="inline-flex items-center gap-2 font-red-hat font-medium text-xs tracking-brand uppercase text-bordeaux border-b border-champagne pb-px hover:text-bronze transition-colors duration-250"
                  >
                    Voltar ao site
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>

              </div>
            </div>
          </div>
        </div>

      </main>

      <Footer />
    </>
  )
}
