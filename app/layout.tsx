import type { Metadata } from 'next';



import { Inter } from 'next/font/google'
import './globals.css';

import Navbar from '@/app/ui/components/navbar';


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    template: '%s | Chris Nash',
    default: 'Chris Nash',
  },
  description: 'Loan Officer/Certified Mortgage Advisor.',
};

export default function RootLayout({ children, }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script src="https://mbshighway.com/scripts/plugins/widgetRender.js" />
      </head>

      <body suppressHydrationWarning={true} className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
