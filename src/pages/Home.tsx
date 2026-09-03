import { Dumbbell, Swords, Users } from 'lucide-react'
import { NavLink } from 'react-router-dom'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { CTASection } from '@/components/CTASection'
import { HeroSection } from '@/components/HeroSection'
import { Reveal } from '@/components/Reveal'
import { SectionHeading } from '@/components/SectionHeading'

const OVERVIEW = [
  {
    icon: Dumbbell,
    title: 'The Gym',
    description: 'Strength training, cardio, and open floor space with flexible memberships.',
    to: '/gym',
  },
  {
    icon: Swords,
    title: 'Combat Club',
    description: 'Boxing, Muay Thai, and BJJ programs for all skill levels.',
    to: '/combat-club',
  },
  {
    icon: Users,
    title: 'Personal Training',
    description: 'One-on-one coaching tailored to your goals.',
    to: '/personal-training',
  },
]

export default function Home() {
  return (
    <>
      <HeroSection
        eyebrow="Frankie's Body Shop"
        title="One gym. One combat club. One membership."
        subtitle="Strength training and martial arts under one roof, with a schedule and community built to keep you coming back."
      >
        <div className="flex gap-3">
          <Button asChild size="lg">
            <NavLink to="/contact">Join Now</NavLink>
          </Button>
          <Button asChild size="lg" variant="outline">
            <NavLink to="/schedule">View Schedule</NavLink>
          </Button>
        </div>
      </HeroSection>

      <Reveal>
        <section className="mx-auto max-w-6xl px-6 py-8">
          <SectionHeading
            eyebrow="What we offer"
            title="Everything you need in one place"
            align="center"
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {OVERVIEW.map(({ icon: Icon, title, description, to }) => (
              <Card key={title}>
                <CardHeader>
                  <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="size-5" aria-hidden />
                  </div>
                  <CardTitle className="mt-2">{title}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col gap-4">
                  <p className="text-sm text-muted-foreground">{description}</p>
                  <Button asChild variant="link" className="w-fit px-0">
                    <NavLink to={to}>Learn more →</NavLink>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </Reveal>

      <CTASection
        title="Ready to get started?"
        subtitle="Come try a class or tour the gym — no commitment required."
        ctaLabel="Contact Us"
        ctaTo="/contact"
      />
    </>
  )
}
