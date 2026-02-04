'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Container, Tag, Button, AnimatedSection, AnimatedText } from '../atoms'
import { FeatureItem } from '../molecules'
import styles from './HeroSection.module.css'

const FEATURES = [
  { icon: 'CheckCircle', text: 'Готовый персонал за 24 часа' },
  { icon: 'CheckCircle', text: 'Замена без остановки объекта' },
  { icon: 'CheckCircle', text: 'Юридическое оформление и страховка' },
]

/**
 * Template: HeroSection
 * Главный экран лендинга с анимациями
 */
export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <Container className={styles.inner}>
        <div className={styles.content}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Tag>🧹 Скидка 10% для сетевых бизнесов</Tag>
          </motion.div>
          
          <motion.h1 
            className={styles.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Чистота. Без управленческих забот
          </motion.h1>
          
          <motion.p 
            className={styles.subtitle}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Подбор, замены и контроль процессов под ключ для ресторанов и фитнес-клубов. 
            Мы предоставляем сотрудников и полностью берём на себя управление их работой.
          </motion.p>
          
          <motion.div 
            className={styles.features}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {FEATURES.map((f, i) => (
              <motion.div
                key={f.text}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
              >
                <FeatureItem icon={f.icon}>
                  {f.text}
                </FeatureItem>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div 
            className={styles.cta}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <Button href="#contact" size="large">
              Бесплатная консультация
            </Button>
            <span className={styles.ctaHint}>
              Ответим в течение 10 минут
            </span>
          </motion.div>
        </div>
        
        <motion.div 
          className={styles.imageWrapper}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className={styles.image}>
            <Image 
              src="/images/cleaning-hero.png" 
              alt="Профессиональный клининг"
              fill
              priority
              style={{ objectFit: 'cover' }}
            />
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
