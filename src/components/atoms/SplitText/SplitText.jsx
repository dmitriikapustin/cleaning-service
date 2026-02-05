'use client'

import { motion } from 'framer-motion'
import styles from './SplitText.module.css'

/**
 * SplitText — каждое слово со своей маской
 */
export default function SplitText({ 
  children, 
  as: Tag = 'div',
  delay = 0,
  stagger = 0.03,
  className = '',
  ...props 
}) {
  const words = typeof children === 'string' 
    ? children.split(' ').filter(w => w.length > 0)
    : [children]

  return (
    <Tag className={className} {...props}>
      {words.map((word, i) => (
        <span key={i}>
          <span className={styles.mask}>
            <motion.span
              className={styles.word}
              initial={{ y: '100%' }}
              whileInView={{ y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
                delay: delay + (i * stagger)
              }}
            >
              {word}
            </motion.span>
          </span>
          {i < words.length - 1 && ' '}
        </span>
      ))}
    </Tag>
  )
}
