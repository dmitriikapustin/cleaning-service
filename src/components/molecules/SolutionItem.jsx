'use client'

import Image from 'next/image'
import { Icon } from '../atoms'
import styles from './SolutionItem.module.css'

/**
 * Молекула: SolutionItem
 * Пункт решения с иконкой и иллюстрацией
 */
export default function SolutionItem({ 
  icon,
  title,
  image,
  children,
  className = '',
  ...props 
}) {
  return (
    <div className={`${styles.item} ${className}`} {...props}>
      {image && (
        <div className={styles.imageWrapper}>
          <Image 
            src={image} 
            alt={title}
            width={200}
            height={200}
            className={styles.image}
          />
        </div>
      )}
      <div className={styles.header}>
        <div className={styles.iconWrapper}>
          <Icon name={icon} size={24} />
        </div>
        <h4 className={styles.title}>{title}</h4>
      </div>
      <p className={styles.text}>{children}</p>
    </div>
  )
}
