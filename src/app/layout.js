import './globals.css'

export const metadata = {
  title: 'Try Trick AI',
  description: 'Try Trick AI',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className="bg-background"
        suppressHydrationWarning
      >
        <main className="grid place-content-center min-h-screen bg-[url(/background.png)] bg-cover bg-center pb-5">
          {children}
        </main>
      </body>
    </html>
  )
}
