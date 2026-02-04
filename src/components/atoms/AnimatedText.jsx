'use client'

import { motion } from 'framer-motion'

/**
 * Atom: AnimatedText
 * Анимированный текст с эффектом появления
 */
export default function AnimatedText({ 
  children, 
  as: Component = 'p',
  className = '',
  delay = 0,
  ...props 
}) {
  const MotionComponent = motion[Component] || motion.p

  return (
    <MotionComponent
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.6, 
        delay,
        ease: [0.25, 0.1, 0.25, 1]
      }}
      className={className}
      {...props}
    >
      {children}
    </MotionComponent>
  )
}
