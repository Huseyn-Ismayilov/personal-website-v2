import { motion } from 'framer-motion'
import React, { ReactNode } from 'react'
import { useInView } from 'react-intersection-observer'

interface BlockTransitionProps {
  children: ReactNode
}

const BlockTransition: React.FC<BlockTransitionProps> = ({ children }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <motion.section
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.1 }}
      ref={ref}
    >
      {children}
    </motion.section>
  )
}

export default BlockTransition
