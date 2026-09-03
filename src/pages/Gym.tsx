import { Dumbbell, ShowerHead, Wifi, ParkingCircle, Clock, Users2 } from 'lucide-react'

import { AmenityCard } from '@/components/AmenityCard'
import { CTASection } from '@/components/CTASection'
import { HeroSection } from '@/components/HeroSection'
import { PricingCard } from '@/components/PricingCard'
import { Reveal } from '@/components/Reveal'
import { SectionHeading } from '@/components/SectionHeading'

const PLANS = [
  {
    name: 'Basic',
    price: '$39',
    features: ['Gym floor access', 'Locker room access', 'Standard hours'],
  },
  {
    name: 'Standard',
    price: '$59',
    features: ['Everything in Basic', 'All group fitness classes', 'Extended hours'],
    highlighted: true,
  },
  {
    name: 'All-Access',
    price: '$89',
    features: ['Everything in Standard', 'Combat Club classes included', '24/7 access'],
  },
]

const AMENITIES = [
  { icon: Dumbbell, label: 'Full Weight Room', description: 'Free weights, machines, and platforms.' },
  { icon: ShowerHead, label: 'Locker Rooms', description: 'Showers, lockers, and changing areas.' },
  { icon: Wifi, label: 'Free Wi-Fi', description: 'Stay connected while you train.' },
  { icon: ParkingCircle, label: 'Free Parking', description: 'On-site parking for all members.' },
  { icon: Clock, label: 'Extended Hours', description: 'Open early and late on weekdays.' },
  { icon: Users2, label: 'Group Classes', description: 'Cardio, strength, and conditioning classes.' },
]

export default function Gym() {
  return (
    <>
      <HeroSection
        eyebrow="The Gym"
        title="Train your way"
        subtitle="A fully equipped gym floor, group classes, and flexible membership plans."
      />

      <Reveal>
        <section className="mx-auto max-w-6xl bg-section px-6 py-8">
          <SectionHeading eyebrow="Membership" title="Find your plan" align="center" />
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {PLANS.map((plan) => (
              <PricingCard key={plan.name} {...plan} />
            ))}
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="mx-auto max-w-6xl bg-section px-6 py-8">
          <SectionHeading eyebrow="Amenities" title="What's included" align="center" />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {AMENITIES.map((amenity) => (
              <AmenityCard key={amenity.label} {...amenity} />
            ))}
          </div>
        </section>
      </Reveal>

      <CTASection
        title="Come see the gym floor"
        subtitle="Tour the facility and try a class before you commit."
        ctaLabel="Book a Tour"
        ctaTo="/contact"
      />
    </>
  )
}
