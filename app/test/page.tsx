'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, type Variants } from 'motion/react';
import type { LucideIcon } from 'lucide-react';

import {
  Heart,
  GraduationCap,
  Users,
  Globe,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react';

type FadeUpVariant = {
  hidden: {
    opacity: number;
    y: number;
  };
  visible: (delay?: number) => {
    opacity: number;
    y: number;
    transition: {
      duration: number;
      delay: number;
      ease: 'easeOut';
    };
  };
};

type Program = {
  icon: LucideIcon;
  title: string;
  text: string;
};

type StatCardProps = {
  number: string;
  label: string;
};

type FeatureProps = {
  text: string;
};

const fadeUp: FadeUpVariant = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay,
      ease: 'easeOut',
    },
  }),
};

const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const slideInLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -60,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
};

const slideInRight: Variants = {
  hidden: {
    opacity: 0,
    x: 60,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
};

const scaleIn: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

const programs: Program[] = [
  {
    icon: GraduationCap,
    title: 'Education Support',
    text: 'Providing books, uniforms, digital learning tools, and safe classrooms for children in remote villages.',
  },
  {
    icon: Heart,
    title: 'Healthcare Outreach',
    text: 'Helping children access medical care, nutrition programs, and clean drinking water.',
  },
  {
    icon: Users,
    title: 'Community Empowerment',
    text: 'Working with local families to create sustainable opportunities and long-term growth.',
  },
];

export default function NGOHomePage(): JSX.Element {
  return (
    <main className="min-h-screen bg-[#f5f2ea] text-gray-900 overflow-hidden">
      <Navbar />
      <HeroSection />
      <ImpactSection />
      <ProgramsSection />
      <StorySection />
      <DonationSection />
      <Footer />
    </main>
  );
}

function Navbar(): JSX.Element {
  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/30 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2"
        >
          <Globe className="text-orange-300" />

          <span className="text-white font-bold text-lg tracking-wide">
            HopeRise Africa
          </span>
        </motion.div>

        <nav className="hidden md:flex items-center gap-8 text-sm text-white">
          <Link href="#impact">Impact</Link>
          <Link href="#programs">Programs</Link>
          <Link href="#stories">Stories</Link>
          <Link href="#donate">Donate</Link>
        </nav>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.96 }}
          className="bg-orange-400 hover:bg-orange-300 text-black font-semibold px-5 py-2 rounded-full"
        >
          Support Us
        </motion.button>
      </div>
    </header>
  );
}

function HeroSection(): JSX.Element {
  return (
    <section className="relative min-h-screen flex items-center pt-24">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=2000&auto=format&fit=crop"
          alt="Children in Africa"
          fill
          className="object-cover"
          priority
        />

        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-6"
        >
          <motion.p
            custom={0.1}
            variants={fadeUp}
            className="uppercase tracking-[0.3em] text-orange-300 text-sm"
          >
            Empowering remote communities
          </motion.p>

          <motion.h1
            custom={0.2}
            variants={fadeUp}
            className="text-5xl md:text-7xl font-black text-white leading-tight"
          >
            Every Child Deserves a Future.
          </motion.h1>

          <motion.p
            custom={0.3}
            variants={fadeUp}
            className="text-gray-200 text-lg leading-relaxed max-w-xl"
          >
            We help underprivileged children in isolated African villages gain
            access to education, healthcare, food, and safe environments.
          </motion.p>

          <motion.div
            custom={0.4}
            variants={fadeUp}
            className="flex flex-wrap gap-4"
          >
            <button className="bg-orange-400 hover:bg-orange-300 transition text-black px-6 py-3 rounded-full font-semibold flex items-center gap-2">
              Donate Now
              <ArrowRight size={18} />
            </button>

            <button className="border border-white/30 text-white px-6 py-3 rounded-full hover:bg-white/10 transition">
              Learn More
            </button>
          </motion.div>
        </motion.div>

        <motion.div
          variants={slideInRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="relative"
        >
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-3xl shadow-2xl">
            <div className="grid grid-cols-2 gap-6">
              <StatCard number="12K+" label="Children Helped" />
              <StatCard number="40+" label="Remote Villages" />
              <StatCard number="95%" label="Funds to Projects" />
              <StatCard number="18" label="Community Programs" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function StatCard({
  number,
  label,
}: StatCardProps): JSX.Element {
  return (
    <motion.div
      variants={scaleIn}
      className="bg-white/10 border border-white/10 rounded-2xl p-6 text-center"
    >
      <h3 className="text-3xl font-bold text-orange-300">
        {number}
      </h3>

      <p className="text-sm text-gray-200 mt-2">
        {label}
      </p>
    </motion.div>
  );
}

function ImpactSection(): JSX.Element {
  return (
    <section
      id="impact"
      className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-center"
    >
      <motion.div
        variants={slideInLeft}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="relative h-[500px] rounded-[2rem] overflow-hidden"
      >
        <Image
          src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?q=80&w=1600&auto=format&fit=crop"
          alt="Children studying"
          fill
          className="object-cover"
        />
      </motion.div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="space-y-6"
      >
        <motion.h2
          custom={0.1}
          variants={fadeUp}
          className="text-4xl md:text-5xl font-black"
        >
          Creating Lasting Change.
        </motion.h2>

        <motion.p
          custom={0.2}
          variants={fadeUp}
          className="text-lg text-gray-700 leading-relaxed"
        >
          HopeRise Africa partners with local leaders,
          teachers, and families to build sustainable
          systems that uplift children for generations.
        </motion.p>

        <motion.div
          custom={0.3}
          variants={fadeUp}
          className="space-y-5"
        >
          <Feature text="Safe learning environments for children" />
          <Feature text="Scholarship and mentorship opportunities" />
          <Feature text="Clean water and healthcare access" />
        </motion.div>
      </motion.div>
    </section>
  );
}

function Feature({
  text,
}: FeatureProps): JSX.Element {
  return (
    <div className="flex items-center gap-4 bg-white p-5 rounded-2xl shadow-sm">
      <ShieldCheck className="text-orange-400" />

      <p className="font-medium">{text}</p>
    </div>
  );
}

function ProgramsSection(): JSX.Element {
  return (
    <section id="programs" className="bg-[#111111] text-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.h2
            custom={0.1}
            variants={fadeUp}
            className="text-4xl md:text-5xl font-black"
          >
            Our Programs
          </motion.h2>

          <motion.p
            custom={0.2}
            variants={fadeUp}
            className="text-gray-400 mt-6 text-lg"
          >
            We focus on practical solutions that directly
            improve the lives of vulnerable children and
            families.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {programs.map((program, index) => {
            const Icon = program.icon;

            return (
              <motion.div
                key={program.title}
                custom={index * 0.1}
                variants={fadeUp}
                whileHover={{ y: -10 }}
                className="bg-white/5 border border-white/10 p-8 rounded-[2rem]"
              >
                <div className="w-14 h-14 rounded-2xl bg-orange-400/20 flex items-center justify-center mb-6">
                  <Icon
                    className="text-orange-300"
                    size={28}
                  />
                </div>

                <h3 className="text-2xl font-bold mb-4">
                  {program.title}
                </h3>

                <p className="text-gray-400 leading-relaxed">
                  {program.text}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

function StorySection(): JSX.Element {
  return (
    <section
      id="stories"
      className="py-24 max-w-7xl mx-auto px-6"
    >
      <div className="grid lg:grid-cols-2 gap-14 items-center">
        <motion.div
          variants={slideInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-6"
        >
          <p className="uppercase tracking-[0.25em] text-orange-500 text-sm font-semibold">
            Real stories
          </p>

          <h2 className="text-4xl md:text-5xl font-black leading-tight">
            A Small Donation Can Change a Child&apos;s Life.
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed">
            Through your support, children in remote
            communities gain access to classrooms,
            school meals, and mentorship opportunities
            that open doors to brighter futures.
          </p>
        </motion.div>

        <motion.div
          variants={slideInRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="relative h-[500px] rounded-[2rem] overflow-hidden"
        >
          <Image
            src="https://images.unsplash.com/photo-1524069290683-0457abfe42c3?q=80&w=1600&auto=format&fit=crop"
            alt="African child smiling"
            fill
            className="object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}

function DonationSection(): JSX.Element {
  return (
    <section
      id="donate"
      className="relative py-24 bg-orange-400 overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, scale: 1.2 }}
        whileInView={{ opacity: 0.08, scale: 1 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className="absolute inset-0 bg-[radial-gradient(circle,_black_1px,_transparent_1px)] bg-[size:24px_24px]"
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="relative z-10 max-w-4xl mx-auto text-center px-6"
      >
        <motion.h2
          custom={0.1}
          variants={fadeUp}
          className="text-4xl md:text-6xl font-black text-black leading-tight"
        >
          Together We Can Build Hope.
        </motion.h2>

        <motion.p
          custom={0.2}
          variants={fadeUp}
          className="text-black/80 text-lg mt-6 leading-relaxed"
        >
          Your contribution helps provide education,
          nutrition, healthcare, and safety for children
          who need it most.
        </motion.p>

        <motion.div custom={0.3} variants={fadeUp}>
          <button className="mt-10 bg-black text-white px-8 py-4 rounded-full font-semibold hover:scale-105 transition-transform">
            Make a Donation
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}

function Footer(): JSX.Element {
  return (
    <footer className="bg-black text-white py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row gap-4 justify-between items-center">
        <p className="text-sm text-gray-400">
          © 2026 HopeRise Africa. All rights reserved.
        </p>

        <div className="flex gap-6 text-sm text-gray-400">
          <Link href="#">Privacy</Link>
          <Link href="#">Programs</Link>
          <Link href="#">Contact</Link>
        </div>
      </div>
    </footer>
  );
}