'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import styles from './page.module.css'

const SERVICES = [
  {
    num: 1,
    title: 'Подбор персонала',
    desc: 'Профессиональный подбор клинингового персонала под ваши требования.',
    image: '/images/cleaning-team.png',
  },
  {
    num: 2,
    title: 'Контроль качества',
    desc: 'Постоянный мониторинг и контроль работы персонала 24/7.',
    image: '/images/cleaning-kitchen.png',
  },
  {
    num: 3,
    title: 'Замена сотрудников',
    desc: 'Оперативная замена персонала без остановки работы объекта.',
    image: '/images/cleaning-livingroom.png',
  },
  {
    num: 4,
    title: 'Управление процессами',
    desc: 'Полное управление клининговыми процессами под ключ.',
    image: '/images/cleaning-office.png',
  },
]

const PORTFOLIO = [
  { title: 'Фитнес-клуб Premium', image: '/images/cleaning-office.png' },
  { title: 'Ресторан Москва', image: '/images/cleaning-kitchen.png' },
  { title: 'Бизнес-центр Сити', image: '/images/cleaning-livingroom.png' },
  { title: 'Сеть кафе Вкусно', image: '/images/cleaning-team.png' },
  { title: 'Отель Люкс', image: '/images/cleaning-hero.png' },
]

export default function HomePage() {
  return (
    <div className={styles.pageWrapper}>
      <div className={styles.pageBody}>
        {/* Navbar */}
        <nav className={styles.navbar}>
          <div className={styles.navbarInner}>
            <Link href="/" className={styles.brand}>
              MSL<span>Clean</span>
            </Link>
            <div className={styles.navMenu}>
              <Link href="#services" className={styles.navLink}>Услуги</Link>
              <Link href="#about" className={styles.navLink}>О нас</Link>
              <Link href="#portfolio" className={styles.navLink}>Портфолио</Link>
            </div>
            <Link href="#contact" className={styles.navButton}>
              Связаться
            </Link>
          </div>
        </nav>

        {/* Hero Section - Full screen image like Samara Mars */}
        <section className={styles.heroSection}>
          <div className={styles.heroPadding}>
            <div className={styles.heroContent}>
              {/* Hero Title - Top Left */}
              <div className={styles.heroTitleWrapper}>
                <motion.h1 
                  className={styles.heroTitle}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  Чистота без<br/>управленческих забот
                </motion.h1>
              </div>

              {/* Description Box - Bottom Right */}
              <motion.div 
                className={styles.heroDescriptionBox}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <p>
                  Мы понимаем важность чистоты для вашего бизнеса. Наша команда экспертов 
                  обеспечит профессиональный клининг и избавит вас от забот по управлению персоналом.
                </p>
                <Link href="#contact" className={styles.button}>
                  Связаться
                </Link>
              </motion.div>

              {/* Background Image */}
              <div className={styles.heroBkg}>
                <Image 
                  src="/images/cleaning-hero.png"
                  alt="Профессиональный клининг"
                  fill
                  priority
                  className={styles.heroImage}
                />
                <div className={styles.heroOverlay} />
              </div>
            </div>
          </div>
        </section>

        {/* About Section - Centered text like Samara Mars */}
        <section className={styles.aboutSection} id="about">
          <div className={styles.sectionPadding}>
            <div className={styles.aboutContent}>
              <motion.div 
                className={styles.tag}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                Добро пожаловать в MSL Clean
              </motion.div>
              <motion.h2 
                className={styles.aboutTitle}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                Ваш надёжный партнёр в аутстафинге клинингового персонала
              </motion.h2>
              <motion.p 
                className={styles.aboutText}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                MSL Clean — компания, специализирующаяся на аутстафинге клинингового персонала 
                для ресторанов и фитнес-клубов. Мы берём на себя подбор, контроль и управление 
                сотрудниками, обеспечивая стабильную чистоту на вашем объекте.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Banner - Full width image like Samara Mars */}
        <section className={styles.bannerSection}>
          <div className={styles.bannerBkg}>
            <Image 
              src="/images/cleaning-kitchen.png"
              alt="Чистая кухня"
              fill
              className={styles.bannerImage}
            />
            <div className={styles.bannerOverlay} />
          </div>
        </section>

        {/* Services Section - Row-based like Samara Mars */}
        <section className={styles.servicesSection} id="services">
          <div className={styles.sectionPadding}>
            <div className={styles.servicesTop}>
              <div className={styles.aboutContent}>
                <motion.div 
                  className={styles.tag}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                >
                  Услуги
                </motion.div>
                <motion.h2 
                  className={styles.aboutTitle}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  Профессиональные услуги для успешного клининга
                </motion.h2>
              </div>
            </div>

            <div className={styles.servicesGrid}>
              {SERVICES.map((service, index) => (
                <motion.div 
                  key={service.num}
                  className={styles.serviceItem}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className={styles.serviceContent}>
                    <div className={styles.serviceNum}>
                      <span>{service.num}</span>
                    </div>
                    <h3 className={styles.serviceTitle}>{service.title}</h3>
                    <div className={styles.serviceImageWrapper}>
                      <div className={styles.serviceImageInner}>
                        <Image 
                          src={service.image}
                          alt={service.title}
                          fill
                          className={styles.serviceImage}
                        />
                      </div>
                    </div>
                    <p className={styles.serviceDesc}>{service.desc}</p>
                  </div>
                  <div className={styles.serviceLine} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio Slider - Like Samara Mars */}
        <section className={styles.portfolioSection} id="portfolio">
          <div className={styles.sectionPadding}>
            <div className={styles.portfolioTop}>
              <div className={styles.portfolioInfo}>
                <motion.div 
                  className={styles.tag}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                >
                  Портфолио
                </motion.div>
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  Наши объекты и проекты
                </motion.h2>
              </div>
              <div className={styles.sliderArrows}>
                <button className={`${styles.sliderArrow} swiper-prev`}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M5 12l14 0M5 12l6 6M5 12l6-6"/>
                  </svg>
                </button>
                <button className={`${styles.sliderArrow} swiper-next`}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M5 12l14 0M13 18l6-6M13 6l6 6"/>
                  </svg>
                </button>
              </div>
            </div>

            <Swiper
              modules={[Navigation]}
              spaceBetween={30}
              slidesPerView="auto"
              navigation={{
                prevEl: '.swiper-prev',
                nextEl: '.swiper-next',
              }}
              className={styles.portfolioSlider}
            >
              {PORTFOLIO.map((item, index) => (
                <SwiperSlide key={index} className={styles.portfolioSlide}>
                  <div className={styles.portfolioCard}>
                    <div className={styles.portfolioImageWrapper}>
                      <Image 
                        src={item.image}
                        alt={item.title}
                        fill
                        className={styles.portfolioImage}
                      />
                      <div className={styles.portfolioImageOverlay} />
                    </div>
                    <div className={styles.portfolioCardInfo}>
                      <h4>{item.title}</h4>
                      <button className={styles.button}>Подробнее</button>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>

        {/* Contact Section - Gradient background like Samara Mars */}
        <section className={styles.contactSection} id="contact">
          <div className={styles.contactBkg}>
            <div className={styles.contactGradient} />
          </div>
          <div className={styles.contactContent}>
            <div className={styles.sectionPadding}>
              <div className={styles.contactGrid}>
                <div className={styles.contactLeft}>
                  <div className={styles.tagWhite}>Связаться с нами</div>
                  <h2>Давайте обсудим<br/>ваш проект</h2>
                  <p>Не любите формы? Напишите на email</p>
                  <a href="mailto:info@mslclean.ru" className={styles.emailLink}>
                    info@mslclean.ru
                  </a>
                </div>
                <div className={styles.contactRight}>
                  <form className={styles.contactForm}>
                    <div className={styles.formRow}>
                      <div className={styles.formGroup}>
                        <label>Ваше имя</label>
                        <input type="text" placeholder="Имя" required />
                      </div>
                      <div className={styles.formGroup}>
                        <input type="text" placeholder="Фамилия" />
                      </div>
                    </div>
                    <div className={styles.formRow}>
                      <div className={styles.formGroup}>
                        <label>Телефон</label>
                        <input type="tel" placeholder="+7 (999) 999-99-99" required />
                      </div>
                      <div className={styles.formGroup}>
                        <label>Email</label>
                        <input type="email" placeholder="info@company.ru" />
                      </div>
                    </div>
                    <div className={styles.formGroup}>
                      <label>Сообщение</label>
                      <textarea placeholder="Расскажите о вашем проекте..." rows={4} />
                    </div>
                    <button type="submit" className={styles.button}>
                      Отправить
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <footer className={styles.footer}>
            <div className={styles.sectionPadding}>
              <div className={styles.footerContent}>
                <div className={styles.footerTop}>
                  <div className={styles.footerBrand}>
                    <Link href="/" className={styles.brand}>
                      MSL<span>Clean</span>
                    </Link>
                    <p>Аутстафинг клинингового персонала для ресторанов и фитнес-клубов</p>
                  </div>
                  <div className={styles.footerNav}>
                    <div className={styles.footerColumn}>
                      <h5>Навигация</h5>
                      <div className={styles.footerDivider} />
                      <Link href="/">Главная</Link>
                      <Link href="#services">Услуги</Link>
                      <Link href="#about">О нас</Link>
                      <Link href="#portfolio">Портфолио</Link>
                    </div>
                    <div className={styles.footerColumn}>
                      <h5>Контакты</h5>
                      <div className={styles.footerDivider} />
                      <a href="tel:+79999999999">+7 (999) 999-99-99</a>
                      <a href="mailto:info@mslclean.ru">info@mslclean.ru</a>
                      <span>Москва, Россия</span>
                    </div>
                  </div>
                </div>
                <div className={styles.footerBottom}>
                  <a href="mailto:info@mslclean.ru" className={styles.footerEmail}>
                    info@mslclean.ru
                  </a>
                  <div className={styles.footerSocial}>
                    <a href="#">Telegram</a>
                    <a href="#">WhatsApp</a>
                  </div>
                </div>
                <div className={styles.footerMisc}>
                  <span>© 2024 MSL Clean. Все права защищены</span>
                </div>
              </div>
            </div>
          </footer>
        </section>
      </div>
    </div>
  )
}
