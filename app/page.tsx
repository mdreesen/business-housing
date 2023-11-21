// "use client"
import { Metadata } from 'next';
import Image from 'next/image';
import { Suspense } from 'react';
import totalYears from './composables/totalYears';
import Modal from './ui/components/modal';

// Importing styling
import styles from './ui/styles/homepage.module.css';
import { lexend, zilla_slab } from '@/app/ui/styles/fonts';


// Importing page components
import Hero from './ui/components/hero';
import Nash from './ui/widgets/nash';
import seasons from './composables/seasons';

export const metadata: Metadata = {
  title: 'Home | Chris Nash',
};

export default function Home() {

  const years = totalYears();

  const about = (
    <p className={`${zilla_slab.className}`}>{`Chris Nash has been in the industry for ${years} years and recently built relationships with great professionals in loan origination.`}</p>
  );

  const whatIDo = (
    <div>
      <h2 className={`${lexend.className}`}>What I Do</h2>
      <p className={`${zilla_slab.className}`}>I offer a wide variety of lending options and pride ourselves in being able to pair the right product with our customers.
      Navigating the complicated world of mortgages can be daunting.
      I will help to explain the benefits and challenges of each program available to you.</p>
    </div>
  );

  const howIHelp = (
    <div>
      <h2 className={`${lexend.className}`}>WHO I HELP</h2>
      <p className={`${zilla_slab.className}`}>Clients come from all walks of life and extend not only to Northwest Montana, but all over Big Sky Country. I've helped clients with purchase and refinance loans in Columbia Falls, Kalispell, & Whitefish, along with the surrounding areas of Bigfork, Hungry Horse & West Glacier. We are also licensed to originate loans throughout the entire state of Montana.</p>
    </div>
  )

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Suspense fallback={`/assets/${seasons}.webp`}>
        <Hero video source={'/videos/video-chris-one.mp4'} />
      </Suspense>
      <section>
        <h2 className={`${lexend.className}`}>ABOUT</h2>
        <div className={styles['section-two']}>
        <div>
          {about}
          {whatIDo}
          {howIHelp}
        </div>
        <Image
        className='hidden md:block'
          src={`/assets/chris/chris-transparent.webp`}
          alt="Image of Chris Nash"
          width={301}
          height={452}
          priority
        />
        </div>
      </section>
      <Modal/>
    </main>
  )
}
