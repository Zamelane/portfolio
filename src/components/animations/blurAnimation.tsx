'use client'

import { motion } from 'framer-motion';

type BlurAnimationProps = {
  children: React.ReactNode
  i?: number
  delay?: number
}
export function BlurAnimation({ children, i, delay }: BlurAnimationProps) {
  return (
    <motion.div
      initial={{ scale: 1.1, opacity: 0, filter: 'blur(20px)' }}
      animate={{ scale: 1, opacity: 1, filter: 'blur(0px)' }}
      transition={{ duration: 0.6, delay: (i ?? 1) * 0.1 + (delay ?? 0) }}
    >
      { children }
    </motion.div>
  )
}