import { Footer, Navbar } from '@/components'
import './globals.css'

export const metadata = {
  title: 'Carhub',
  description: 'Rent or purchase a car today',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
