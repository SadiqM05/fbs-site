import { cn } from '@/lib/utils'

interface SectionHeadingProps {
  eyebrow?: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  className?: string
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'left',
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'flex max-w-2xl flex-col gap-2',
        align === 'center' && 'mx-auto items-center text-center',
        className,
      )}
    >
      {eyebrow ? (
        <span className="text-sm font-semibold uppercase tracking-wide text-accent">
          {eyebrow}
        </span>
      ) : null}
      <h2 className="text-[24px] font-bold leading-tight tracking-tight sm:text-[32px]">
        {title}
      </h2>
      {subtitle ? <p className="text-base text-muted-foreground">{subtitle}</p> : null}
    </div>
  )
}
