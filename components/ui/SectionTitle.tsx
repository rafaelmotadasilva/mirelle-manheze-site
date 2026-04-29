import { cn } from '@/lib/utils'

interface SectionTitleProps {
  id?:        string
  title:      string
  subtitle?:  string
  align?:     'left' | 'center'
  light?:     boolean
  className?: string
}

export default function SectionTitle({
  id,
  title,
  subtitle,
  align     = 'left',
  light     = false,
  className,
}: SectionTitleProps) {
  const isCenter = align === 'center'

  return (
    <div
      className={cn(
        'mb-16',
        isCenter ? 'text-center' : 'text-left',
        className,
      )}
    >
      {/* Linha ornamental */}
      <div
        className={cn('h-px w-10 bg-champagne mb-5', isCenter ? 'mx-auto' : '')}
        aria-hidden="true"
      />

      {/* Subtítulo em Ephesis — delicado, accent */}
      {subtitle && (
        <p
          className={cn(
            'font-ephesis text-4xl mb-2 leading-none',
            light ? 'text-champagne/80' : 'text-bronze',
          )}
        >
          {subtitle}
        </p>
      )}

      {/* Título principal — hierarquia máxima da seção */}
      <h2
        id={id}
        className={cn(
          'font-bona-nova font-normal tracking-wide leading-heading',
          'text-3xl md:text-4xl lg:text-[2.75rem]',
          light ? 'text-white' : 'text-bordeaux',
        )}
      >
        {title}
      </h2>
    </div>
  )
}
