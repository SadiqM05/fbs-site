import { CTASection } from '@/components/CTASection'
import { HeroSection } from '@/components/HeroSection'
import { ProgramCard } from '@/components/ProgramCard'
import { Reveal } from '@/components/Reveal'
import { SectionHeading } from '@/components/SectionHeading'

const PROGRAMS = [
  {
    name: 'Muay Thai',
    level: 'All Levels',
    description: 'Traditional Thai boxing focused on striking technique and conditioning.',
  },
  {
    name: 'Boxing',
    level: 'All Levels',
    description: 'Fundamentals of footwork, combinations, and defense on the pads and bag.',
  },
  {
    name: 'Brazilian Jiu-Jitsu',
    level: 'Beginner–Advanced',
    description: 'Gi and no-gi grappling classes covering technique, drilling, and live rolling.',
  },
  {
    name: 'Kickboxing Conditioning',
    level: 'All Levels',
    description: 'High-intensity, cardio-focused class blending striking with conditioning circuits.',
  },
  {
    name: 'Youth Combat',
    level: 'Ages 8–14',
    description: 'Introductory striking and grappling fundamentals in a structured, safe environment.',
  },
  {
    name: 'Competition Team',
    level: 'Advanced (By Invite)',
    description: 'Sparring-focused training for members preparing for amateur competition.',
  },
]

export default function CombatClub() {
  return (
    <>
      <HeroSection
        eyebrow="Combat Club"
        title="Boxing. Muay Thai. BJJ."
        subtitle="Structured combat sports programs for every skill level, from first class to competition."
      />

      <Reveal>
        <section className="mx-auto max-w-6xl px-6 py-8">
          <SectionHeading eyebrow="Programs" title="Find your discipline" align="center" />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {PROGRAMS.map((program) => (
              <ProgramCard key={program.name} {...program} />
            ))}
          </div>
        </section>
      </Reveal>

      <CTASection
        title="Try your first class free"
        subtitle="New to combat sports? Join a beginner-friendly class this week."
        ctaLabel="Book a Class"
        ctaTo="/contact"
      />
    </>
  )
}
