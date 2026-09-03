import { CTASection } from '@/components/CTASection'
import { HeroSection } from '@/components/HeroSection'
import { Reveal } from '@/components/Reveal'
import { SectionHeading } from '@/components/SectionHeading'
import { TrainerCard } from '@/components/TrainerCard'

const TRAINERS = [
  {
    name: 'Dana Whitfield',
    role: 'Strength & Conditioning',
    bio: 'Specializes in strength programming for general population and athletes alike.',
    specialties: ['Powerlifting', 'Mobility', 'Nutrition Coaching'],
  },
  {
    name: 'Marcus Reyes',
    role: 'Combat Sports Coach',
    bio: '10+ years coaching boxing and kickboxing, from beginners to competitors.',
    specialties: ['Boxing', 'Kickboxing', 'Pad Work'],
  },
  {
    name: 'Priya Nandan',
    role: 'Muay Thai & Youth Programs',
    bio: 'Former competitor turned coach, focused on technique-first development.',
    specialties: ['Muay Thai', 'Youth Coaching', 'Conditioning'],
  },
  {
    name: 'Ana Cortez',
    role: 'BJJ Instructor',
    bio: 'Black belt instructor running the gi and no-gi grappling programs.',
    specialties: ['BJJ', 'Grappling', 'Self-Defense'],
  },
]

const STEPS = [
  { step: '1', title: 'Book a Consult', description: 'Tell us your goals and schedule.' },
  { step: '2', title: 'Get a Plan', description: 'Your trainer builds a program around you.' },
  { step: '3', title: 'Train & Track', description: 'Regular sessions with progress check-ins.' },
]

export default function PersonalTraining() {
  return (
    <>
      <HeroSection
        eyebrow="Personal Training"
        title="One-on-one coaching that fits your goals"
        subtitle="Work directly with a coach for strength, conditioning, or combat sports development."
      />

      <Reveal>
        <section className="mx-auto max-w-6xl px-6 py-8">
          <SectionHeading eyebrow="How it works" title="Getting started is simple" align="center" />
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {STEPS.map((item) => (
              <div key={item.step} className="flex flex-col items-center gap-2 text-center">
                <div className="flex size-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-semibold">
                  {item.step}
                </div>
                <p className="font-semibold">{item.title}</p>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="mx-auto max-w-6xl px-6 py-8">
          <SectionHeading eyebrow="Our Trainers" title="Meet the coaching staff" align="center" />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {TRAINERS.map((trainer) => (
              <TrainerCard key={trainer.name} {...trainer} />
            ))}
          </div>
        </section>
      </Reveal>

      <CTASection
        title="Book your first session"
        subtitle="Get matched with the right trainer for your goals."
        ctaLabel="Get Started"
        ctaTo="/contact"
      />
    </>
  )
}
