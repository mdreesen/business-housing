import type { Metadata } from 'next';

import Nash from './ui/widgets/nash';


import { Inter } from 'next/font/google'
import './globals.css';

import Navbar from '@/app/ui/navbar';


const inter = Inter({ subsets: ['latin'] })

// export const metadata: Metadata = {
//   title: {
//     template: '%s | Chris Nash',
//     default: 'Chris Nash',
//   },
//   description: 'Loan Officer/Certified Mortgage Advisor.',
// };

const widge = () => <div id="widgetData" data-encoded="eyJzcmMiOiJodHRwczovL21ic2hpZ2h3YXkuY29tL2ltYWdlcy9mcm9udGVuZC91c2VyRGF0YS84ZmMzMTE0MC0xMTk4LTQyZTktOTg0Mi0yOTlmNWM2NGFmYzUvaGVhZGVyL2hlYWRzaG90LnBuZz92PTcxMCIsIkxPZW1haWwiOiJDaHJpc05AbXRubGsuY29tIiwiaGVhZGVyRGV0YWlscyI6eyJuYW1lIjoiQ2hyaXMgTmFzaCIsImVtYWlsIjoiQ2hyaXNOQG10bmxrLmNvbSIsIm51bWJlciI6IjQwNjI2MDcyNzIiLCJjb21wYW55IjoiTW91bnRhaW4gTGFrZSBNb3J0Z2FnZSIsImNvYnJhbmRDb2RlIjoiIiwiY29icmFuZEVtYWlsIjoiIiwicmVxdWVzdENvZGUiOiIifSwic2V0dGluZ3MiOnsiY29ycCI6dHJ1ZSwiZW1haWwiOnRydWUsIm5hbWUiOnRydWUsInBob3RvIjp0cnVlLCJhdm0iOmZhbHNlLCJ1cmwiOiIifX0=" />


export default function RootLayout({children,}: {children: React.ReactNode}) {
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
