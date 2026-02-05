'use client'

import { useRef, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import SplitType from 'split-type'
import styles from './SplitText.module.css'

/**
 * SplitText — разбивает текст на строки с помощью split-type
 * Анимирует каждую строку отдельно
 */
export default function SplitText({ 
  children, 
  as: Tag = 'div',
  delay = 0,
  stagger = 0.08,
  className = '',
  ...props 
}) {
  const textRef = useRef(null)
  const [lines, setLines] = useState([])
  const splitInstance = useRef(null)

  useEffect(() => {
    if (!textRef.current || typeof children !== 'string') {
      return
    }

    // Сначала рендерим оригинальный текст
    textRef.current.textContent = children

    // Создаём split instance
    splitInstance.current = new SplitType(textRef.current, {
      types: 'lines',
      tagName: 'span'
    })

    // Получаем строки
    const lineElements = splitInstance.current.lines || []
    setLines(lineElements.map(el => el.textContent))

    // Cleanup
    return () => {
      if (splitInstance.current) {
        splitInstance.current.revert()
      }
    }
  }, [children])

  // Пересчёт при ресайзе
  useEffect(() => {
    const handleResize = () => {
      if (splitInstance.current && textRef.current) {
        splitInstance.current.revert()
        textRef.current.textContent = children
        splitInstance.current = new SplitType(textRef.current, {
          types: 'lines',
          tagName: 'span'
        })
        const lineElements = splitInstance.current.lines || []
        setLines(lineElements.map(el => el.textContent))
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [children])

  // Варианты анимации
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: stagger,
        delayChildren: delay
      }
    }
  }

  const lineVariants = {
    hidden: { y: '100%' },
    visible: {
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  }

  // Если строки ещё не готовы — показываем скрытый оригинал для измерения
  if (lines.length === 0) {
    return (
      <Tag 
        ref={textRef} 
        className={`${className} ${styles.measuring}`}
        {...props}
      >
        {children}
      </Tag>
    )
  }

  return (
    <Tag className={className} {...props}>
      <motion.span
        className={styles.container}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
      >
        {lines.map((line, i) => (
          <span key={i} className={styles.lineWrapper}>
            <motion.span className={styles.line} variants={lineVariants}>
              {line}
            </motion.span>
          </span>
        ))}
      </motion.span>
    </Tag>
  )
}
