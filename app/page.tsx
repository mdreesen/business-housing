// "use client"
import { Metadata } from 'next';


// Importing page components
import Hero from './ui/components/hero';
import Nash from './ui/widgets/nash';

export const metadata: Metadata = {
  title: 'Home | Chris Nash',
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      {/* <Nash /> */}
    </main>
  )
}
