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
 * MobileMenu — современная кнопка с текстом + плавное появление меню
 */
export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  // Плавное появление панели снизу вверх
  const menuVariants = {
    closed: {
      opacity: 0,
      y: '100%',
      transition: {
        duration: 0.3,
        ease: [0.4, 0, 0.2, 1],
      }
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.4, 0, 0.2, 1],
      }
    }
  }

  // Stagger анимация для пунктов меню — построчно
  const containerVariants = {
    closed: {
      transition: {
        staggerChildren: 0.03,
        staggerDirection: -1
      }
    },
    open: {
      transition: {
        delayChildren: 0.15,
        staggerChildren: 0.06
      }
    }
  }

  const itemVariants = {
    closed: {
      y: 30,
      opacity: 0,
    },
    open: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: [0.4, 0, 0.2, 1]
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
      {/* Кнопка с текстом "Меню" */}
      <motion.button
        className={styles.floatingButton}
        onClick={toggleMenu}
        animate={isOpen ? 'open' : 'closed'}
        whileTap={{ scale: 0.95 }}
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
        <span className={styles.buttonLabel}>
          {isOpen ? 'Закрыть' : 'Меню'}
        </span>
      </motion.button>

      {/* Fullscreen меню — панель снизу */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className={styles.backdrop}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={closeMenu}
            />
            
            {/* Панель меню */}
            <motion.div
              className={styles.menuPanel}
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
                    whileHover={{ x: 10, color: 'var(--color-secondary)' }}
                    whileTap={{ scale: 0.98 }}
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
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
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
          </>
        )}
      </AnimatePresence>
    </>
  )
}
