import './globals.css'
import { Menu } from '@/components/Menu'

export const metadata = {
  title: 'Try Trick AI',
  description: 'Try Trick AI',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='bg-background' suppressHydrationWarning>
        <span className='fixed inset-0 bg-[url(/background.png)] bg-cover bg-center bg-black -z-[11]' />
        <Menu />
        <main className="grid place-content-center min-h-screen pb-5">
          {children}
        </main>
      </body>
    </html>
  )
}
