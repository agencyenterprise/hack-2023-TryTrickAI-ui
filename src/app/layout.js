import { twMerge } from 'tailwind-merge'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Try Trick AI',
  description: 'Try Trick AI',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={twMerge(inter.className, 'bg-background')}
        suppressHydrationWarning
      >
        <main className="grid place-content-center min-h-screen bg-[url(/background.png)] bg-cover bg-center pb-5">
          {children}
        </main>
      </body>
    </html>
  )
}
