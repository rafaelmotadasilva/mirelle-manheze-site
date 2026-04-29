import SectionTitle from '@/components/ui/SectionTitle'
import AboutPhoto from '@/components/sections/AboutPhoto'

const credentials = [
  { label: 'OAB/SP',         value: '540.038' },
  { label: 'Especialização', value: 'Direito Civil e de Família' },
  { label: 'Atuação',        value: 'Assessoria e Contencioso' },
]

export default function About() {
  return (
    <section id="sobre" aria-labelledby="sobre-titulo" className="bg-linen">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-28 lg:py-36">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-28 items-center">

          {/* ── Foto ─────────────────────────────────────────── */}
          <div className="order-2 lg:order-1">
            {/*
              ml-6 mt-6 no mobile dá espaço para os frames absolutos de -top-6 -left-6
              não causarem overflow horizontal. Em lg+, o grid já tem margem suficiente.
            */}
            <div className="relative ml-6 mt-6 lg:ml-0 lg:mt-0">
              {/* Frame externo */}
              <div
                className="absolute -top-6 -left-6 w-full h-full border border-champagne/30 rounded-brand"
                aria-hidden="true"
              />
              {/* Frame interno — cria sensação de profundidade */}
              <div
                className="absolute -top-3 -left-3 w-full h-full border border-champagne/15 rounded-brand"
                aria-hidden="true"
              />
              <div className="relative aspect-[3/4] overflow-hidden rounded-brand bg-cream">
                <AboutPhoto />
              </div>
            </div>
          </div>

          {/* ── Texto ─────────────────────────────────────────── */}
          <div className="order-1 lg:order-2">
            <SectionTitle
              id="sobre-titulo"
              subtitle="Sobre"
              title="Uma trajetória construída com determinação e propósito"
            />

            <div className="space-y-6 font-red-hat text-warm text-base leading-[1.8]">
              <p>
                A marca{' '}
                <strong className="font-medium text-bordeaux">Dra. Mirelle Manheze</strong>{' '}
                surge de uma trajetória construída com determinação, ética e um profundo
                comprometimento com a justiça. Mais do que oferecer serviços jurídicos, o
                escritório nasce com a missão de entregar estratégia, organização e uma
                defesa firme e responsável dos direitos de cada cliente.
              </p>
              <p>
                Cada caso é conduzido com atenção individualizada. O comprometimento vai além
                da representação jurídica formal — é compreender a situação com profundidade,
                estudar as possibilidades e buscar as melhores soluções de forma responsável
                e bem fundamentada.
              </p>
              <p>
                Uma advocacia sólida, estratégica e confiável. Uma presença que transmite
                segurança e respeito, mas também proximidade e humanidade — porque cada
                decisão importa e cada cliente merece ser ouvido.
              </p>
            </div>

            <blockquote className="mt-10 border-l-[3px] border-champagne pl-6">
              <p className="font-ephesis text-bronze text-3xl leading-snug">
                &ldquo;Clareza, estratégia e dedicação em cada etapa do seu caso.&rdquo;
              </p>
            </blockquote>

            <dl className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8">
              {credentials.map((item) => (
                <div key={item.label} className="border-t-2 border-champagne/40 pt-5">
                  <dt className="font-red-hat text-[10px] tracking-brand uppercase text-bronze mb-2">
                    {item.label}
                  </dt>
                  <dd className="font-bona-nova text-bordeaux text-lg tracking-wide leading-tight">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

        </div>
      </div>
    </section>
  )
}
