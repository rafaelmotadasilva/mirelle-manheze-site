import { cn } from '@/lib/utils'

type ButtonVariant = 'primary' | 'secondary' | 'outline-light' | 'outline-dark'
type ButtonSize    = 'sm' | 'md'

interface ButtonProps {
  variant?:    ButtonVariant
  size?:       ButtonSize
  href?:       string
  children:    React.ReactNode
  className?:  string
  onClick?:    () => void
  type?:       'button' | 'submit' | 'reset'
  disabled?:   boolean
  target?:     '_blank' | '_self'
  rel?:        string
  'aria-label'?: string
}

const variantClasses: Record<ButtonVariant, string> = {
  'primary':       'bg-bordeaux text-white hover:bg-bronze',
  'secondary':     'bg-champagne text-bordeaux hover:bg-bronze hover:text-white',
  'outline-light': 'border border-white text-white bg-transparent hover:bg-white hover:text-bordeaux',
  'outline-dark':  'border border-bordeaux text-bordeaux bg-transparent hover:bg-bordeaux hover:text-white',
}

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'text-xs px-6 py-2.5',
  md: 'text-sm px-8 py-3',
}

const base = 'inline-flex items-center justify-center font-red-hat font-medium tracking-brand uppercase rounded-brand transition-all duration-250 cursor-pointer select-none disabled:opacity-50 disabled:cursor-not-allowed'

export default function Button({
  variant  = 'primary',
  size     = 'md',
  href,
  children,
  className,
  onClick,
  type     = 'button',
  disabled,
  target,
  rel,
  'aria-label': ariaLabel,
}: ButtonProps) {
  const classes = cn(base, sizeClasses[size], variantClasses[variant], className)

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        target={target}
        rel={rel ?? (target === '_blank' ? 'noopener noreferrer' : undefined)}
        aria-label={ariaLabel}
      >
        {children}
      </a>
    )
  }

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  )
}
