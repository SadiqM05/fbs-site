import { HeroSection } from '@/components/HeroSection'
import { Reveal } from '@/components/Reveal'
import { ScheduleTable, type ScheduleClass } from '@/components/ScheduleTable'

const SCHEDULE: Record<string, ScheduleClass[]> = {
  Monday: [
    { time: '6:00 AM', name: 'Strength & Conditioning', instructor: 'Coach Dana' },
    { time: '12:00 PM', name: 'Boxing Fundamentals', instructor: 'Coach Marcus' },
    { time: '6:00 PM', name: 'Muay Thai', instructor: 'Coach Priya' },
  ],
  Tuesday: [
    { time: '6:00 AM', name: 'BJJ Fundamentals', instructor: 'Coach Ana' },
    { time: '5:30 PM', name: 'Kickboxing Conditioning', instructor: 'Coach Marcus' },
    { time: '7:00 PM', name: 'BJJ All Levels', instructor: 'Coach Ana' },
  ],
  Wednesday: [
    { time: '6:00 AM', name: 'Strength & Conditioning', instructor: 'Coach Dana' },
    { time: '12:00 PM', name: 'Muay Thai', instructor: 'Coach Priya' },
    { time: '6:00 PM', name: 'Youth Combat', instructor: 'Coach Priya' },
  ],
  Thursday: [
    { time: '6:00 AM', name: 'BJJ Fundamentals', instructor: 'Coach Ana' },
    { time: '5:30 PM', name: 'Boxing Fundamentals', instructor: 'Coach Marcus' },
    { time: '7:00 PM', name: 'Competition Team', instructor: 'Coach Marcus' },
  ],
  Friday: [
    { time: '6:00 AM', name: 'Strength & Conditioning', instructor: 'Coach Dana' },
    { time: '5:30 PM', name: 'Muay Thai', instructor: 'Coach Priya' },
  ],
  Saturday: [
    { time: '9:00 AM', name: 'BJJ All Levels', instructor: 'Coach Ana' },
    { time: '10:30 AM', name: 'Kickboxing Conditioning', instructor: 'Coach Marcus' },
  ],
  Sunday: [{ time: '10:00 AM', name: 'Open Mat', instructor: 'Staff' }],
}

export default function Schedule() {
  return (
    <>
      <HeroSection
        eyebrow="Schedule"
        title="Weekly class schedule"
        subtitle="Browse gym and combat club classes by day. Schedule subject to change on holidays."
      />

      <Reveal>
        <section className="mx-auto max-w-6xl bg-section px-6 py-8">
          <ScheduleTable schedule={SCHEDULE} />
        </section>
      </Reveal>
    </>
  )
}
