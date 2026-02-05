'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import styles from './MobileMenu.module.css'

const NAV_ITEMS = [
  { href: '#about', label: 'О компании' },
  { href: '#services', label: 'Услуги' },
  { href: '#portfolio', label: 'Клиенты' },
  { href: '#contact', label: 'Контакты' },
]

/**
 * MobileMenu — Fullscreen меню с анимацией сверху вниз
 */
export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  // Фон — появляется сверху вниз (clip-path)
  const backgroundVariants = {
    closed: {
      clipPath: 'inset(0 0 100% 0)',
      transition: {
        duration: 0.5,
        ease: [0.76, 0, 0.24, 1],
        delay: 0.2,
      }
    },
    open: {
      clipPath: 'inset(0 0 0% 0)',
      transition: {
        duration: 0.6,
        ease: [0.76, 0, 0.24, 1],
      }
    }
  }

  // Контейнер для stagger
  const containerVariants = {
    closed: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      }
    },
    open: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.08,
      }
    }
  }

  // Пункты меню — появляются снизу с fade
  const itemVariants = {
    closed: {
      y: 40,
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: [0.76, 0, 0.24, 1],
      }
    },
    open: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      }
    }
  }

  return (
    <>
      {/* Бургер кнопка */}
      <button
        className={`${styles.burgerButton} ${isOpen ? styles.active : ''}`}
        onClick={toggleMenu}
        aria-label={isOpen ? 'Закрыть меню' : 'Открыть меню'}
        aria-expanded={isOpen}
      >
        <div className={styles.burgerIcon}>
          <span className={styles.burgerLine} />
          <span className={styles.burgerLine} />
          <span className={styles.burgerLine} />
        </div>
      </button>

      {/* Fullscreen меню */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={styles.menuOverlay}
            initial="closed"
            animate="open"
            exit="closed"
            variants={backgroundVariants}
          >
            {/* Контент меню */}
            <motion.nav
              className={styles.menuContent}
              variants={containerVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              {/* Лого */}
              <motion.div className={styles.menuLogo} variants={itemVariants}>
                MSL<span>Clean</span>
              </motion.div>

              {/* Навигация */}
              <div className={styles.menuNav}>
                {NAV_ITEMS.map((item, index) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    className={styles.menuLink}
                    variants={itemVariants}
                    onClick={closeMenu}
                    whileHover={{ x: 10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className={styles.menuNumber}>0{index + 1}</span>
                    <span className={styles.menuLabel}>{item.label}</span>
                  </motion.a>
                ))}
              </div>

              {/* CTA */}
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

              {/* Контакты */}
              <motion.div className={styles.menuFooter} variants={itemVariants}>
                <a href="tel:+79999999999" className={styles.menuPhone}>
                  +7 (999) 999-99-99
                </a>
                <span className={styles.menuHint}>Работаем 24/7</span>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
