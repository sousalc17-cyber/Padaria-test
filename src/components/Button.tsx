import type { ReactNode } from 'react'

type ButtonProps = {
  href: string
  children: ReactNode
  variant?: 'solid' | 'outline' | 'light'
  size?: 'sm' | 'md'
  icon?: ReactNode
  className?: string
  onClick?: () => void
}

const variants: Record<NonNullable<ButtonProps['variant']>, string> = {
  solid: 'bg-ink text-cream hover:bg-brown',
  outline: 'border border-ink/20 text-ink hover:border-ink/50 hover:bg-ink/[0.03]',
  light: 'bg-cream text-ink hover:bg-white',
}

const sizes: Record<NonNullable<ButtonProps['size']>, string> = {
  sm: 'px-5 py-2.5',
  md: 'px-6 py-3.5',
}

export default function Button({
  href,
  children,
  variant = 'solid',
  size = 'md',
  icon,
  className = '',
  onClick,
}: ButtonProps) {
  const isExternal = href.startsWith('http')

  return (
    <a
      href={href}
      onClick={onClick}
      {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className={[
        'inline-flex items-center justify-center gap-2 rounded-[2px] text-[11px] font-medium uppercase',
        'tracking-[0.14em] transition-colors duration-300',
        variants[variant],
        sizes[size],
        className,
      ].join(' ')}
    >
      {children}
      {icon ? <span aria-hidden="true">{icon}</span> : null}
    </a>
  )
}
