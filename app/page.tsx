// "use client"
import { Metadata } from 'next';
import Image from 'next/image';
import totalYears from './composables/totalYears';


// Importing page components
import Hero from './ui/components/hero';
import Nash from './ui/widgets/nash';

export const metadata: Metadata = {
  title: 'Home | Chris Nash',
};

export default function Home() {

  const years = totalYears();

  const about = (
    `Chris Nash has been in the industry for ${years} years and recently built relationships with great professionals in loan origination.`
  );

  const whatIDo = (
    <div>
      <h2>What I Do</h2>
      I offer a wide variety of lending options and pride ourselves in being able to pair the right product with our customers.
      Navigating the complicated world of mortgages can be daunting.
      I will help to explain the benefits and challenges of each program available to you.
    </div>
  );

  const howIHelp = (
    <div>
      <h2>WHO I HELP</h2>
      Clients come from all walks of life and extend not only to Northwest Montana, but all over Big Sky Country. I've helped clients with purchase and refinance loans in Columbia Falls, Kalispell, & Whitefish, along with the surrounding areas of Bigfork, Hungry Horse & West Glacier. We are also licensed to originate loans throughout the entire state of Montana.
    </div>
  )



  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero video source={'/videos/video-chris-one.mp4'} />
      <section>
      <div>
          {about}
          {whatIDo}
          {howIHelp}
          </div>
      <Image
            src={`/assets/chris-one.webp`}
            alt="Image of Chris Nash"
            width={301}
            height={452}
            priority
          />
        </section>
    </main>
  )
}
