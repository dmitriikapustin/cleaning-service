'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Button } from '../atoms'
import styles from './HeroSection.module.css'

/**
 * Template: HeroSection
 * Полноширинный hero с фоновым изображением и плашкой
 */
export default function HeroSection() {
  return (
    <section className={styles.hero}>
      {/* Фоновое изображение */}
      <div className={styles.imageWrapper}>
        <Image 
          src="/images/cleaning-hero.png" 
          alt="Профессиональный клининг"
          fill
          priority
          style={{ objectFit: 'cover' }}
        />
        <div className={styles.overlay} />
      </div>

      {/* Заголовок слева */}
      <motion.div 
        className={styles.titleBlock}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <h1 className={styles.title}>
          Чистота.<br />
          Без управленческих<br />
          забот
        </h1>
      </motion.div>

      {/* Плашка справа внизу */}
      <motion.div 
        className={styles.card}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <p className={styles.cardText}>
          Подбор, замены и контроль клининг-процессов под ключ для ресторанов 
          и фитнес-клубов. Мы предоставляем сотрудников и полностью берём 
          на себя управление их работой.
        </p>
        <Button href="#contact" size="medium">
          Бесплатная консультация
        </Button>
      </motion.div>
    </section>
  )
}
