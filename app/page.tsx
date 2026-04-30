'use client';
import About from '@/components/About';
import Hero from '@/components/Hero';
import Goal from '@/components/Goal';
import Mission from '@/components/Mission';
import Service from '@/components/Service';
import Donate from '@/components/Donate';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Goal />
      <section className="flex flex-col sm:flex-row">
        <Mission />
        <Service />
      </section>
      <Donate />
    </>
  );
}
