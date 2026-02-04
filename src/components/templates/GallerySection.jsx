'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Container, AnimatedSection, StaggerContainer, StaggerItem } from '../atoms'
import styles from './GallerySection.module.css'

const GALLERY_ITEMS = [
  { src: '/images/cleaning-kitchen.png', alt: 'Чистая кухня' },
  { src: '/images/cleaning-livingroom.png', alt: 'Чистая гостиная' },
  { src: '/images/cleaning-office.png', alt: 'Чистый офис' },
  { src: '/images/cleaning-team.png', alt: 'Наша команда' },
]

/**
 * Template: GallerySection
 * Секция с фотографиями работ
 */
export default function GallerySection() {
  return (
    <section className={styles.gallery}>
      <Container>
        <AnimatedSection className={styles.header}>
          <span className={styles.tag}>Наши работы</span>
          <h2>Результаты говорят сами за себя</h2>
          <p className={styles.subtitle}>
            Каждый объект — это история о профессионализме и внимании к деталям
          </p>
        </AnimatedSection>
        
        <StaggerContainer className={styles.grid}>
          {GALLERY_ITEMS.map((item, index) => (
            <StaggerItem key={index}>
              <motion.div 
                className={styles.item}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Image 
                  src={item.src}
                  alt={item.alt}
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <motion.div 
                  className={styles.overlay}
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  <span>{item.alt}</span>
                </motion.div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  )
}
