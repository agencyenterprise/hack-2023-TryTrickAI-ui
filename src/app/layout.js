import './globals.css'
import { Menu } from '@/components/Menu'

export const metadata = {
  title: 'Try Trick AI',
  description: 'Try Trick AI',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='overflow-y-scroll overflow-x-hidden' suppressHydrationWarning>
        <span className='fixed inset-0 bg-[url(/background.png)] bg-cover bg-center bg-black -z-[11]' />
        <Menu />
        <main className="grid place-content-center min-h-screen p-4 md:p-0 pb-5">
          {children}
        </main>
        <div class="text-center mb-4" aria-label="Made with love by AE Studio">
          Made with ❤️ by {' '}
          <a href="https://ae.studio/" target="_blank" class="ae-studio">AE Studio</a>
        </div>
      </body>
    </html>
  )
}
