"use client"
import { Metadata } from 'next';
import Image from 'next/image';
import { Suspense } from 'react';
import GoogleMap from "@/app/ui/components/googleMap";


// Importing styling
import styles from '../ui/styles/homepage.module.css';
import { lexend, zilla_slab } from '@/app/ui/styles/fonts';
import Link from 'next/link';


// Importing page components
// import Hero from './ui/components/hero';

// export const metadata: Metadata = {
//   title: 'Contact | Chris Nash',
// };

export default function Contact() {

  return (
    <main className="flex flex-col items-center justify-between">
      <section>
        <div><GoogleMap/></div>
        <div>
        162 Timberwolf Parkway, Suite C
          Kalispell, MT 59901<br/>
          Phone: 406-751-2350<br/>
          Cell: 406-260-7272<br/>
          Email: ChrisN@mtnlk.com
        </div>
      </section>
    </main>
  )
}
