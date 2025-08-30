'use client'

import { HoverCard as Root, HoverCardContent, HoverCardPortal, HoverCardTrigger } from "@radix-ui/react-hover-card"
import { motion } from 'framer-motion'

type HoverCardProps = {
  children: React.ReactNode
  card: React.ReactNode
}

export function HoverCard({ card, children }: HoverCardProps) {
  return (
    <Root>
      <HoverCardTrigger asChild>
        {children}
      </HoverCardTrigger>
      <HoverCardPortal>
        <HoverCardContent sideOffset={5} asChild>
          <motion.div
            initial={{ scale: 1.1, opacity: 0, filter: 'blur(20px)' }}
            animate={{ scale: 1, opacity: 1, filter: 'blur(0px)' }}
            transition={{ duration: 0.6}}
          >
            <div className='bg-slate-900 border border-slate-800 p-2 rounded-sm'>
              {card}
            </div>
          </motion.div>
        </HoverCardContent>
      </HoverCardPortal>
    </Root>
  )
}