import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'

import { slideUp } from '@/animations/variants'
import { Button } from '@/components/ui/button'

interface CTASectionProps {
  title: string
  subtitle?: string
  ctaLabel: string
  ctaTo: string
}

export function CTASection({ title, subtitle, ctaLabel, ctaTo }: CTASectionProps) {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={slideUp}
      className="bg-primary text-primary-foreground"
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 py-16 text-center">
        <h2 className="text-[24px] font-bold leading-tight tracking-tight sm:text-[32px]">
          {title}
        </h2>
        {subtitle ? <p className="max-w-xl text-base text-primary-foreground/80">{subtitle}</p> : null}
        <Button asChild variant="secondary" size="lg" className="mt-2">
          <NavLink to={ctaTo}>{ctaLabel}</NavLink>
        </Button>
      </div>
    </motion.section>
  )
}
