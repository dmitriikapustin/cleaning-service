'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import styles from './MobileMenu.module.css'

const NAV_ITEMS = [
  { href: '#problems', label: 'Проблемы' },
  { href: '#solution', label: 'Решение' },
  { href: '#usp', label: 'Преимущества' },
  { href: '#how-it-works', label: 'Как работаем' },
  { href: '#contact', label: 'Контакты' },
]

/**
 * MobileMenu — кнопка внизу по центру с эффектной анимацией открытия
 * Меню раскрывается как круг из точки кнопки
 */
export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  // Анимация раскрытия меню из центра кнопки
  const menuVariants = {
    closed: {
      clipPath: 'circle(0% at 50% 100%)',
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30,
      }
    },
    open: {
      clipPath: 'circle(150% at 50% 100%)',
      transition: {
        type: 'spring',
        stiffness: 80,
        damping: 20,
      }
    }
  }

  // Stagger анимация для пунктов меню
  const containerVariants = {
    closed: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    },
    open: {
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.08
      }
    }
  }

  const itemVariants = {
    closed: {
      y: 50,
      opacity: 0,
      filter: 'blur(10px)',
    },
    open: {
      y: 0,
      opacity: 1,
      filter: 'blur(0px)',
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15
      }
    }
  }

  // Анимация линий бургера
  const topLineVariants = {
    closed: { rotate: 0, y: 0 },
    open: { rotate: 45, y: 6 }
  }

  const middleLineVariants = {
    closed: { opacity: 1, scaleX: 1 },
    open: { opacity: 0, scaleX: 0 }
  }

  const bottomLineVariants = {
    closed: { rotate: 0, y: 0 },
    open: { rotate: -45, y: -6 }
  }

  return (
    <>
      {/* Floating кнопка внизу по центру */}
      <motion.button
        className={styles.floatingButton}
        onClick={toggleMenu}
        animate={isOpen ? 'open' : 'closed'}
        whileTap={{ scale: 0.9 }}
        aria-label={isOpen ? 'Закрыть меню' : 'Открыть меню'}
        aria-expanded={isOpen}
      >
        <div className={styles.burgerIcon}>
          <motion.span
            className={styles.burgerLine}
            variants={topLineVariants}
            transition={{ duration: 0.3 }}
          />
          <motion.span
            className={styles.burgerLine}
            variants={middleLineVariants}
            transition={{ duration: 0.2 }}
          />
          <motion.span
            className={styles.burgerLine}
            variants={bottomLineVariants}
            transition={{ duration: 0.3 }}
          />
        </div>
        
        {/* Пульсирующее кольцо */}
        <motion.div
          className={styles.pulseRing}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.5, 0, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
      </motion.button>

      {/* Fullscreen меню */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={styles.menuOverlay}
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
          >
            <motion.nav
              className={styles.menuContent}
              variants={containerVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              {NAV_ITEMS.map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  className={styles.menuLink}
                  variants={itemVariants}
                  onClick={closeMenu}
                  whileHover={{ x: 20, color: 'var(--color-secondary)' }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className={styles.menuNumber}>0{index + 1}</span>
                  <span className={styles.menuLabel}>{item.label}</span>
                </motion.a>
              ))}
              
              {/* Кнопка CTA в меню */}
              <motion.a
                href="#contact"
                className={styles.menuCta}
                variants={itemVariants}
                onClick={closeMenu}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Получить расчёт
              </motion.a>
              
              {/* Телефон */}
              <motion.div className={styles.menuPhone} variants={itemVariants}>
                <a href="tel:+78001234567">+7 (800) 123-45-67</a>
                <span>Работаем 24/7</span>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
