// "use client"
import { Metadata } from 'next';
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

  const whatWeDo = (
    <div>We offer a wide variety of lending options and pride ourselves in being able to pair the right product with our customers. Navigating the complicated world of mortgages can be daunting. We will help to explain the benefits and challenges of each program available to you.</div>
  )

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero video source={'/videos/video-chris-one.mp4'} />
      {/* <Nash /> */}
      <section>{about}</section>
      <section>{whatWeDo}</section>
    </main>
  )
}
