import type { ReactNode } from 'react'
import { motion } from 'framer-motion'

import { slideUp } from '@/animations/variants'
import { cn } from '@/lib/utils'

interface HeroSectionProps {
  eyebrow?: string
  title: string
  subtitle?: string
  children?: ReactNode
  className?: string
}

export function HeroSection({ eyebrow, title, subtitle, children, className }: HeroSectionProps) {
  return (
    <section className={cn('border-b border-border bg-section', className)}>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={slideUp}
        className="mx-auto flex max-w-6xl flex-col items-start gap-4 px-6 py-16 text-left sm:py-24"
      >
        {eyebrow ? (
          <span className="text-sm font-semibold uppercase tracking-wide text-accent">
            {eyebrow}
          </span>
        ) : null}
        <h1 className="text-[32px] font-bold leading-tight tracking-tight sm:text-[48px]">
          {title}
        </h1>
        {subtitle ? (
          <p className="max-w-2xl text-base text-muted-foreground">{subtitle}</p>
        ) : null}
        {children}
      </motion.div>
    </section>
  )
}
