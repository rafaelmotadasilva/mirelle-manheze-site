import { cn } from '@/lib/utils'

interface PatternBackgroundProps {
  variant?: 'bordeaux' | 'cream'
  className?: string
}

/*
  Renderiza o pattern da marca como textura de fundo (opacidade baixa).
  Posicione o elemento pai com position: relative (class "relative" no Tailwind).

  Assets necessários em public/assets/pattern/:
    - pattern-bordeaux.jpg  (ouro sobre bordeaux — para seções escuras)
    - pattern-cream.jpg     (ouro/bege sobre off-white — para seções claras)

  Origem dos arquivos: pasta original da identidade visual
    Logo/Pattern - Estampa/JPG - Imagem/P-JPG01.jpg → pattern-bordeaux.jpg
    Logo/Pattern - Estampa/JPG - Imagem/P-JPG02.jpg → pattern-cream.jpg
*/
export default function PatternBackground({
  variant = 'bordeaux',
  className,
}: PatternBackgroundProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        variant === 'bordeaux' ? 'pattern-bordeaux' : 'pattern-cream',
        className,
      )}
    />
  )
}
