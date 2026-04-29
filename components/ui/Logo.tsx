import Image from 'next/image'
import { cn } from '@/lib/utils'

/*
  Arquivos de logo disponíveis em public/assets/logo/:
    logo-dark.svg    — logo com elementos escuros → fundos claros (linen, cream)
    logo-light.svg   — logo com elementos claros  → fundos escuros (bordeaux, hero)
    logo-stacked.svg — versão empilhada (símbolo + texto em colunas)
                       exclusiva para o footer (fundo bordeaux)

  Aspect ratios extraídos dos viewBox originais:
    horizontal (dark & light): 795.53711 × 145.80666 → 5.455 : 1
    stacked:                   731.91864 × 335.70932 → 2.179 : 1
*/

type LogoVariant = 'horizontal' | 'stacked'
type LogoMode    = 'dark' | 'light'

interface LogoProps {
  variant?:   LogoVariant
  mode?:      LogoMode
  /** Altura renderizada em px. Largura calculada automaticamente pelo aspect ratio. */
  height?:    number
  className?: string
  /** Passar true para logos acima da dobra (header, hero) — elimina lazy loading. */
  priority?:  boolean
}

const RATIO: Record<LogoVariant, number> = {
  horizontal: 795.53711 / 145.80666,  // 5.455
  stacked:    731.91864 / 335.70932,  // 2.179
}

const DEFAULT_HEIGHT: Record<LogoVariant, number> = {
  horizontal: 40,
  stacked:    100,
}

export default function Logo({
  variant  = 'horizontal',
  mode     = 'dark',
  height,
  className,
  priority = false,
}: LogoProps) {
  const h   = height ?? DEFAULT_HEIGHT[variant]
  const w   = Math.round(h * RATIO[variant])

  const src = variant === 'stacked'
    ? '/assets/logo/logo-stacked.svg'
    : mode === 'dark'
      ? '/assets/logo/logo-dark.svg'
      : '/assets/logo/logo-light.svg'

  return (
    <Image
      src={src}
      alt="Dra. Mirelle Manheze — Advocacia e Assessoria Jurídica"
      width={w}
      height={h}
      unoptimized
      priority={priority}
      draggable={false}
      className={cn('block', className)}
    />
  )
}
