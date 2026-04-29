import { Users, Scale, FileText, FileCheck, ShieldCheck, Lightbulb, type LucideIcon } from 'lucide-react'
import SectionTitle from '@/components/ui/SectionTitle'
import { cn } from '@/lib/utils'

interface PracticeArea {
  icon:        LucideIcon
  title:       string
  description: string
}

const areas: PracticeArea[] = [
  {
    icon: Users,
    title: 'Direito de Família',
    description:
      'Divórcio, guarda, alimentos, adoção e demais questões familiares, com atenção ao equilíbrio entre os interesses das partes e a proteção dos envolvidos.',
  },
  {
    icon: Scale,
    title: 'Direito Civil',
    description:
      'Ações cíveis em geral, responsabilidade civil, cobranças, vícios de produto e demais demandas que envolvam relações entre particulares.',
  },
  {
    icon: FileText,
    title: 'Inventários e Sucessões',
    description:
      'Inventário judicial e extrajudicial, partilha de bens, testamentos e planejamento sucessório para garantir a transmissão segura do patrimônio.',
  },
  {
    icon: FileCheck,
    title: 'Contratos e Negócios',
    description:
      'Elaboração, revisão e análise de contratos em geral, com foco na proteção dos interesses do cliente e na prevenção de litígios.',
  },
  {
    icon: ShieldCheck,
    title: 'Direito do Consumidor',
    description:
      'Defesa dos direitos do consumidor frente a cobranças indevidas, negativações, atrasos em entrega, vícios de produto e serviço.',
  },
  {
    icon: Lightbulb,
    title: 'Assessoria Preventiva',
    description:
      'Orientação jurídica estratégica para antecipar riscos, evitar conflitos e tomar decisões mais seguras no âmbito pessoal e negocial.',
  },
]

export default function PracticeAreas() {
  return (
    <section id="atuacao" aria-labelledby="atuacao-titulo" className="bg-cream">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-28 lg:py-36">

        <SectionTitle
          id="atuacao-titulo"
          subtitle="Atuação"
          title="Áreas de Atuação"
          align="center"
        />

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8" role="list">
          {areas.map((area) => {
            const Icon = area.icon
            return (
              <li key={area.title}>
                <article
                  className={cn(
                    'group h-full flex flex-col',
                    'bg-linen border border-champagne/50 rounded-brand p-10',
                    'transition-all duration-300',
                    'hover:bg-bordeaux hover:border-bordeaux',
                  )}
                >
                  {/* Ícone com área de respiro */}
                  <div className="mb-7">
                    <Icon
                      size={24}
                      className="text-bronze group-hover:text-champagne transition-colors duration-300"
                      aria-hidden
                    />
                  </div>

                  <h3 className="font-bona-nova text-bordeaux group-hover:text-white text-xl tracking-wide leading-heading mb-4 transition-colors duration-300">
                    {area.title}
                  </h3>

                  <p className="font-red-hat text-warm group-hover:text-white/75 text-sm leading-[1.75] transition-colors duration-300 mt-auto">
                    {area.description}
                  </p>
                </article>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
