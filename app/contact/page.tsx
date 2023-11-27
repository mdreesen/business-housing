import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Hero from '@/app/ui/components/hero';
import { Suspense } from 'react';
import GoogleMap from "@/app/ui/components/googleMap";
import { RevenueChartSkeleton } from "@/app/ui/components/skeletons"


// Importing styling
import styles from '../ui/styles/contact.module.css';

export const metadata: Metadata = {
  title: 'Contact | Chris Nash',
};

export default function Contact() {

  const address = (
    <div className={styles['address-container']}>
      162 Timberwolf Parkway, Suite C<br />
      Kalispell, MT 59901<br />
      Phone: 406-751-2350<br />
      Cell: 406-260-7272<br />
    </div>
  );

  const googleMap = <Suspense fallback={<RevenueChartSkeleton />}><GoogleMap /></Suspense>


  return (
    <main className="flex flex-col items-center justify-between">
      <Hero image source={'/assets/background-default.webp'} altTitle='Nature image' />
      <section className={styles['section-container']}>
      <div>
          {address}
          {googleMap}
      </div>
      <div>
        <p>If you have any questions, you can send an email by clicking the link below</p>
        <a href="mailto:mdreesen90@gmail.com">Email Me</a>
      </div>
      </section>
    </main>
  )
}
