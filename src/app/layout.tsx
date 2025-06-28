import type { Metadata } from 'next'
import './globals.css'
import {Header} from '../components/Header'

export const metadata: Metadata = {
  title: 'Ella Portfolio - Growth & Revenue Consultant',
  description: 'Portfolio website of Ella – Growth & Revenue Consultant specializing in digital strategy, business development, and market expansion for tech and SaaS companies.',
  keywords: ['portfolio', 'growth consultant', 'revenue', 'business development', 'digital strategy', 'market expansion'],
  authors: [{ name: 'Ella' }],
  robots: 'index, follow',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className="min-h-screen font-sans antialiased"
        style={{ background: "#fff", color: "#6b5b2e" }}
      >
        <div className="relative flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
        </div>
      </body>
    </html>
  )
}
