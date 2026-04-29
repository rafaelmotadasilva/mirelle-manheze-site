import { cn } from '@/lib/utils'

interface DividerProps {
  light?:     boolean
  className?: string
}

export default function Divider({ light = false, className }: DividerProps) {
  return (
    <hr
      aria-hidden="true"
      className={cn(
        'border-none h-px w-full',
        light ? 'bg-champagne/30' : 'bg-champagne/50',
        className,
      )}
    />
  )
}
