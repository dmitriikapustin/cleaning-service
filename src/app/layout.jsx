import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin', 'cyrillic'], 
  variable: '--font-inter',
  weight: ['300', '400', '500', '600', '700'] 
})

const playfair = Playfair_Display({ 
  subsets: ['latin', 'cyrillic'], 
  variable: '--font-playfair',
  weight: ['400', '500', '600', '700'] 
})

export const metadata = {
  title: 'CleanPro — Аутстафинг клинингового персонала',
  description: 'Чистота без управленческих забот. Подбор, замены и контроль процессов под ключ для ресторанов и фитнес-клубов.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ru" className={`${inter.variable} ${playfair.variable}`}>
      <body>
        {children}
      </body>
    </html>
  )
}
