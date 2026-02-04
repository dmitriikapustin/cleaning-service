'use client'

import Link from "next/link"
import { 
  CheckCircle, 
  Clock, 
  Shield, 
  Users, 
  FileText, 
  Phone, 
  Award,
  Zap,
  HeartHandshake,
  ClipboardCheck,
  Search,
  UserX,
  AlertCircle,
  BadgeCheck
} from "lucide-react"

export default function Page() {
  return (
    <>
      {/* Header */}
      <header className="header">
        <div className="container header-inner">
          <Link href="/" className="logo">CleanPro</Link>
          
          <nav className="nav">
            <a href="#problems">Проблемы</a>
            <a href="#solution">Решение</a>
            <a href="#usp">Преимущества</a>
            <a href="#how-it-works">Как работаем</a>
            <a href="#contact">Контакты</a>
          </nav>
          
          <div className="header-right">
            <div className="phone">
              <a href="tel:+78001234567">+7 (800) 123-45-67</a>
              <span>Работаем 24/7</span>
            </div>
            <a href="#contact" className="btn btn-primary">
              Получить расчёт
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="container hero-inner">
          <div className="hero-content">
            <span className="hero-tag">🧹 Скидка 10% для сетевых бизнесов</span>
            <h1>Чистота. Без управленческих забот</h1>
            <p className="hero-subtitle">
              Подбор, замены и контроль процессов под ключ для ресторанов и фитнес-клубов. 
              Мы предоставляем сотрудников и полностью берём на себя управление их работой.
            </p>
            
            <div className="hero-features">
              <div className="hero-feature">
                <CheckCircle size={20} />
                <span>Готовый персонал за 24 часа</span>
              </div>
              <div className="hero-feature">
                <CheckCircle size={20} />
                <span>Замена без остановки объекта</span>
              </div>
              <div className="hero-feature">
                <CheckCircle size={20} />
                <span>Юридическое оформление и страховка</span>
              </div>
            </div>
            
            <div className="hero-cta">
              <a href="#contact" className="btn btn-primary">
                Бесплатная консультация
              </a>
              <span className="hero-cta-hint">Ответим в течение 10 минут</span>
            </div>
          </div>
          
          <div className="hero-image">
            <img src="/assets/hero-cleaning.jpg" alt="Профессиональный клининг" />
          </div>
        </div>
      </section>

      {/* Problems Section */}
      <section className="problems" id="problems">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Знакомые проблемы?</span>
            <h2>Вам знакомо это?</h2>
            <p className="section-subtitle">Это обходится вам дорого — временем, нервами и репутацией</p>
          </div>
          
          <div className="problems-grid">
            <div className="problem-card">
              <h3><UserX size={24} style={{display: 'inline', marginRight: 8}} />Текучка персонала</h3>
              <ul>
                <li>Клинер не пришёл на работу</li>
                <li>Потеря репутации и клиентов</li>
                <li>Дорогостоящая непредвиденная замена</li>
              </ul>
            </div>
            
            <div className="problem-card">
              <h3><Search size={24} style={{display: 'inline', marginRight: 8}} />Поиск и обучение</h3>
              <ul>
                <li>Ищете клинера месяц через Авито</li>
                <li>Переплачиваете наличными</li>
                <li>Нет гарантий на качество</li>
              </ul>
            </div>
            
            <div className="problem-card">
              <h3><AlertCircle size={24} style={{display: 'inline', marginRight: 8}} />Управление персоналом</h3>
              <ul>
                <li>Вы не кадровик, но следите за графиком</li>
                <li>Больничные, отпуска, конфликты</li>
                <li>Налоги, ПФР, документы — ваша задача</li>
              </ul>
            </div>
            
            <div className="problem-card">
              <h3><Shield size={24} style={{display: 'inline', marginRight: 8}} />Стандарты качества</h3>
              <ul>
                <li>Ваш клинер — ваша ответственность</li>
                <li>Если что-то сломал — вам платить</li>
                <li>Нет контроля качества</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="solution" id="solution">
        <div className="container solution-inner">
          <div className="solution-content">
            <span className="section-tag">Наше решение</span>
            <h2>Аутстафинг клинингового персонала</h2>
            <p className="solution-lead">
              Вы работаете — мы отвечаем за чистоту. Никаких звонков клинерам, 
              никаких замен в спешке, никаких юридических проблем.
            </p>
            
            <div className="solution-list">
              <div className="solution-item">
                <div className="solution-icon">
                  <Clock size={24} />
                </div>
                <div>
                  <h4>Готовый персонал 24/7</h4>
                  <p>Подбираем по 7 параметрам: опыт, документы, навыки, рекомендации. 
                  Готовый сотрудник за 24-48 часов.</p>
                </div>
              </div>
              
              <div className="solution-item">
                <div className="solution-icon">
                  <Zap size={24} />
                </div>
                <div>
                  <h4>Замена без остановки</h4>
                  <p>Заболел — пришлём замену той же смены. Контроль 24/7, 
                  вы не заметите разницы.</p>
                </div>
              </div>
              
              <div className="solution-item">
                <div className="solution-icon">
                  <FileText size={24} />
                </div>
                <div>
                  <h4>Юридическое оформление</h4>
                  <p>Договор, безналичная оплата, фиксированная цена. 
                  Экономия на ФОТ, налогах, ПФР.</p>
                </div>
              </div>
              
              <div className="solution-item">
                <div className="solution-icon">
                  <BadgeCheck size={24} />
                </div>
                <div>
                  <h4>Контроль качества</h4>
                  <p>Каждый объект сопровождает менеджер. 
                  Не нравится — замена в течение дня.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="solution-visual">
            <h3>Мы берём на себя</h3>
            <div className="solution-stats">
              <div className="stat">
                <div className="stat-value">100%</div>
                <div className="stat-label">Юридическая ответственность</div>
              </div>
              <div className="stat">
                <div className="stat-value">24ч</div>
                <div className="stat-label">Подбор персонала</div>
              </div>
              <div className="stat">
                <div className="stat-value">2ч</div>
                <div className="stat-label">Замена сотрудника</div>
              </div>
              <div className="stat">
                <div className="stat-value">0₽</div>
                <div className="stat-label">Скрытых платежей</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* USP Section */}
      <section className="usp" id="usp">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Преимущества</span>
            <h2>Почему выбирают нас</h2>
          </div>
          
          <div className="usp-grid">
            <div className="usp-card">
              <div className="usp-icon">
                <Award size={28} />
              </div>
              <h3>Специалисты по вашей индустрии</h3>
              <p>Работаем с фитнес-клубами и ресторанами 3+ года, понимаем специфику вашего бизнеса.</p>
            </div>
            
            <div className="usp-card">
              <div className="usp-icon">
                <CheckCircle size={28} />
              </div>
              <h3>Гарантия качества</h3>
              <p>Если персонал не подходит — замена в течение дня, без доплаты.</p>
            </div>
            
            <div className="usp-card">
              <div className="usp-icon">
                <FileText size={28} />
              </div>
              <h3>Фиксированная цена</h3>
              <p>Никаких скрытых платежей, никаких наличных расчётов. Всё прозрачно.</p>
            </div>
            
            <div className="usp-card">
              <div className="usp-icon">
                <Zap size={28} />
              </div>
              <h3>Быстрый подбор</h3>
              <p>Готовый персонал за 24-48 часов, замена — за 2 часа.</p>
            </div>
            
            <div className="usp-card">
              <div className="usp-icon">
                <Shield size={28} />
              </div>
              <h3>Полная юридическая поддержка</h3>
              <p>Договор, налоги, ПФР, страховка — всё на нас. Вы защищены.</p>
            </div>
            
            <div className="usp-card">
              <div className="usp-icon">
                <Users size={28} />
              </div>
              <h3>Контроль 24/7</h3>
              <p>Менеджер отвечает за каждый объект, контроль качества в режиме реального времени.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works" id="how-it-works">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Процесс</span>
            <h2>Как это работает? Всего 4 шага</h2>
            <p className="section-subtitle">Простой процесс — быстрый результат</p>
          </div>
          
          <div className="steps">
            <div className="step">
              <div className="step-number">1</div>
              <h3>Анализ задачи</h3>
              <p>Изучаем объект, требования и процессы вашего бизнеса.</p>
            </div>
            
            <div className="step">
              <div className="step-number">2</div>
              <h3>Подбор персонала</h3>
              <p>Формируем команду под конкретные задачи за 24-48 часов.</p>
            </div>
            
            <div className="step">
              <div className="step-number">3</div>
              <h3>Запуск работы</h3>
              <p>Выводим персонал на объект, обучаем стандартам.</p>
            </div>
            
            <div className="step">
              <div className="step-number">4</div>
              <h3>Контроль качества</h3>
              <p>Менеджер сопровождает объект, контролируем 24/7.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta" id="contact">
        <div className="container cta-inner">
          <div className="cta-content">
            <span className="section-tag">Связаться с нами</span>
            <h2>Давайте составим план действий</h2>
            <p>
              Оставьте заявку, и мы свяжемся с вами в течение 10 минут. 
              Обсудим задачи и предложим оптимальное решение.
            </p>
            
            <div style={{marginTop: 32}}>
              <div className="hero-feature" style={{marginBottom: 12}}>
                <Phone size={20} />
                <a href="tel:+78001234567" style={{color: 'var(--primary)', fontWeight: 600}}>
                  +7 (800) 123-45-67
                </a>
              </div>
              <div className="hero-feature">
                <Clock size={20} />
                <span>Работаем круглосуточно, 24/7</span>
              </div>
            </div>
          </div>
          
          <div className="cta-form">
            <h3>Получить бесплатный расчёт</h3>
            <form>
              <div className="form-group">
                <input type="text" placeholder="Ваше имя" required />
              </div>
              <div className="form-group">
                <input type="tel" placeholder="Телефон" required />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Email" />
              </div>
              <div className="form-group">
                <textarea placeholder="Опишите вашу задачу"></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                Отправить заявку
              </button>
            </form>
            <p className="form-hint">Ответим в течение 10 минут</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container footer-inner">
          <div className="footer-brand">
            <Link href="/" className="logo">CleanPro</Link>
            <p>
              Аутстафинг клинингового персонала с гарантией качества, 
              контролем и заменой. Фиксированная цена, договор, безналичная оплата.
            </p>
          </div>
          
          <div className="footer-column">
            <h4>Услуги</h4>
            <ul>
              <li><a href="#">Для ресторанов</a></li>
              <li><a href="#">Для фитнес-клубов</a></li>
              <li><a href="#">Для сетевых бизнесов</a></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h4>Компания</h4>
            <ul>
              <li><a href="#">О нас</a></li>
              <li><a href="#">Клиенты</a></li>
              <li><a href="#">Вакансии</a></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h4>Контакты</h4>
            <ul>
              <li><a href="tel:+78001234567">+7 (800) 123-45-67</a></li>
              <li><a href="mailto:info@cleanpro.ru">info@cleanpro.ru</a></li>
              <li><a href="#">Москва, ул. Примерная, 1</a></li>
            </ul>
          </div>
        </div>
        
        <div className="container">
          <div className="footer-bottom">
            © 2026 CleanPro. Все права защищены.
          </div>
        </div>
      </footer>
    </>
  )
}
