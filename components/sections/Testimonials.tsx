import SectionTitle from '@/components/ui/SectionTitle'

interface Testimonial {
  quote:   string
  name:    string
  context: string
}

const testimonials: Testimonial[] = [
  {
    quote:
      'Profissional extremamente dedicada e preparada. Conduziu todo o processo com clareza e nos manteve informados em cada etapa. A sensação de estar em boas mãos foi constante.',
    name:    'M.C.',
    context: 'Direito de Família',
  },
  {
    quote:
      'Desde o primeiro atendimento senti segurança e seriedade. A Dra. Mirelle demonstrou conhecimento profundo do caso e nos trouxe um resultado que não esperávamos ser possível.',
    name:    'R.S.',
    context: 'Direito Civil',
  },
  {
    quote:
      'Atendimento humanizado, estratégico e completamente transparente. Nunca fiquei sem resposta sobre o andamento do meu processo. Recomendo sem hesitar.',
    name:    'A.L.',
    context: 'Assessoria Jurídica',
  },
]

function QuoteIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 36"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path d="M0 36V22.909C0 10.227 7.636 3.273 22.909 0l2.545 4.364C17.745 6.164 13.527 10.2 12 16.364h10.909V36H0zm25.09 0V22.909C25.09 10.227 32.727 3.273 48 0l2.545 4.364C42.836 6.164 38.618 10.2 37.09 16.364H48V36H25.09z" />
    </svg>
  )
}

export default function Testimonials() {
  return (
    <section id="depoimentos" aria-labelledby="depoimentos-titulo" className="bg-linen">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-28 lg:py-36">

        <SectionTitle
          id="depoimentos-titulo"
          subtitle="Depoimentos"
          title="O que dizem os clientes"
          align="center"
        />

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8" role="list">
          {testimonials.map((t) => (
            <li key={t.name}>
              <figure className="h-full flex flex-col bg-cream border border-champagne/40 rounded-brand p-10">

                {/* Aspas */}
                <QuoteIcon className="h-7 w-auto text-champagne/70 mb-8 flex-shrink-0" />

                {/* Citação */}
                <blockquote className="flex-1">
                  <p className="font-red-hat text-warm text-[0.9rem] leading-[1.8] italic">
                    {t.quote}
                  </p>
                </blockquote>

                {/* Separador */}
                <div className="h-px w-10 bg-champagne/50 mt-8 mb-6" aria-hidden="true" />

                {/* Identificação */}
                <figcaption className="flex flex-col gap-1">
                  <span className="font-ephesis text-bronze text-2xl leading-none">
                    {t.name}
                  </span>
                  <span className="font-red-hat text-[10px] tracking-brand uppercase text-bronze/75">
                    {t.context}
                  </span>
                </figcaption>

              </figure>
            </li>
          ))}
        </ul>

      </div>
    </section>
  )
}
