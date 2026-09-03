import type { ReactNode } from 'react'
import { motion } from 'framer-motion'

import { slideUp } from '@/animations/variants'

interface RevealProps {
  children: ReactNode
  className?: string
}

export function Reveal({ children, className }: RevealProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={slideUp}
      className={className}
    >
      {children}
    </motion.div>
  )
}
