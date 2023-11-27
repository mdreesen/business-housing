import { Metadata } from 'next';
import Image from 'next/image';
import { Suspense } from 'react';
import date from '../composables/date';
import Modal from '@/app/ui/components/modal';

// Importing styling
import styles from '../ui/styles/homepage.module.css';
import { lexend, zilla_slab } from '@/app/ui/styles/fonts';
import Link from 'next/link';


// Importing page components
// import Hero from './ui/components/hero';

export const metadata: Metadata = {
  title: 'About | Chris Nash',
};

export default function Home() {

  const years = date();

  const about = (
    <div>
      <h2 className={`${lexend.className}`}>About</h2>
      <p className={`${zilla_slab.className}`}>{`Chris Nash has been in the industry for ${years?.yearsInField} years and recently built relationships with great professionals in loan origination. `}
      Adding Lorem text for more filler - Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur perferendis, iusto dignissimos assumenda temporibus quis nesciunt voluptatibus libero! Repellendus consequatur laborum aperiam velit fugit iste ratione accusantium nisi nemo assumenda!</p>
    </div>
  );

  return (
    <main className="flex flex-col items-center justify-between">
      <section>
        <div className={styles['section-two']}>
            {about}
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
      <Link href={"https://www.blink.mortgage/app/signup/p/mountainlakemortgagecorporation/chrisnash"}>Apply Here</Link>
    </main>
  )
}
