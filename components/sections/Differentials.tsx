import { UserCheck, Target, ShieldCheck, MessageSquare, type LucideIcon } from 'lucide-react'
import SectionTitle from '@/components/ui/SectionTitle'
import PatternBackground from '@/components/ui/PatternBackground'
import Divider from '@/components/ui/Divider'

interface Differential {
  icon:        LucideIcon
  title:       string
  description: string
}

const differentials: Differential[] = [
  {
    icon: UserCheck,
    title: 'Atendimento Personalizado',
    description:
      'Cada cliente recebe atenção individualizada. Nenhum caso é tratado como genérico — porque não é.',
  },
  {
    icon: Target,
    title: 'Estratégia e Preparo',
    description:
      'Estudo aprofundado de cada situação, com visão estratégica para encontrar os melhores caminhos dentro da lei.',
  },
  {
    icon: ShieldCheck,
    title: 'Ética e Responsabilidade',
    description:
      'Atuação pautada por rigor ético, transparência com o cliente e responsabilidade em cada etapa do processo.',
  },
  {
    icon: MessageSquare,
    title: 'Comunicação Transparente',
    description:
      'Informações claras em todas as fases. O cliente sempre sabe o que está acontecendo com o seu caso.',
  },
]

export default function Differentials() {
  return (
    <section
      id="diferenciais"
      aria-labelledby="diferenciais-titulo"
      className="relative bg-bordeaux overflow-hidden"
    >
      <PatternBackground variant="bordeaux" />
      <Divider light className="absolute top-0 left-0 right-0 opacity-20" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 py-28 lg:py-36">

        <SectionTitle
          id="diferenciais-titulo"
          subtitle="Por que escolher"
          title="O que nos diferencia"
          align="center"
          light
        />

        <ul
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10"
          role="list"
        >
          {differentials.map((item, index) => {
            const Icon = item.icon
            return (
              <li key={item.title} className="text-center">
                <div className="relative flex flex-col items-center">

                  {/* Ordinal decorativo — tamanho aumentado para mais impacto */}
                  <span
                    className="absolute -top-3 left-1/2 -translate-x-1/2 font-bona-nova text-white/[0.07] text-8xl leading-none select-none"
                    aria-hidden="true"
                  >
                    0{index + 1}
                  </span>

                  {/* Ícone */}
                  <div className="relative w-14 h-14 flex items-center justify-center mb-7">
                    <Icon size={28} className="text-champagne" aria-hidden />
                  </div>

                  <h3 className="relative font-bona-nova text-white text-xl tracking-wide leading-heading mb-4">
                    {item.title}
                  </h3>

                  <p className="relative font-red-hat text-white/65 text-sm leading-[1.75]">
                    {item.description}
                  </p>
                </div>
              </li>
            )
          })}
        </ul>
      </div>

      <Divider light className="absolute bottom-0 left-0 right-0 opacity-20" />
    </section>
  )
}
