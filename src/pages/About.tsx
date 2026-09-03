import { CTASection } from '@/components/CTASection'
import { HeroSection } from '@/components/HeroSection'
import { Reveal } from '@/components/Reveal'
import { SectionHeading } from '@/components/SectionHeading'

const VALUES = [
  {
    title: 'Community First',
    description: 'A gym where members and coaches know each other by name.',
  },
  {
    title: 'Coaching Over Equipment',
    description: 'We invest in great instruction, not just machines.',
  },
  {
    title: 'For Every Level',
    description: 'From first-time gym-goers to competitive fighters.',
  },
]

export default function About() {
  return (
    <>
      <HeroSection
        eyebrow="About Us"
        title="Built by the community, for the community"
        subtitle="Frankie's Body Shop brings together strength training and combat sports coaching under one roof."
      />

      <Reveal>
        <section className="mx-auto max-w-3xl px-6 py-8">
          <SectionHeading title="Our Story" />
          <p className="mt-4 text-base text-muted-foreground">
            Frankie's Body Shop started as a small strength gym and grew into a full training
            facility after adding a dedicated combat sports program. Today we bring gym members,
            boxers, grapplers, and everyone in between together under one membership.
          </p>
        </section>
      </Reveal>

      <Reveal>
        <section className="mx-auto max-w-6xl px-6 py-8">
          <SectionHeading eyebrow="What we believe" title="Our values" align="center" />
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {VALUES.map((value) => (
              <div key={value.title} className="rounded-md border border-border p-6 text-center">
                <p className="font-semibold">{value.title}</p>
                <p className="mt-2 text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      <CTASection
        title="Come train with us"
        subtitle="Stop by for a tour or jump into a class this week."
        ctaLabel="Contact Us"
        ctaTo="/contact"
      />
    </>
  )
}
