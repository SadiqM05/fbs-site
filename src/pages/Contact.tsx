import { Mail, MapPin, Phone } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ContactInfoCard } from '@/components/ContactInfoCard'
import { HeroSection } from '@/components/HeroSection'
import { Reveal } from '@/components/Reveal'

export default function Contact() {
  return (
    <>
      <HeroSection
        eyebrow="Contact"
        title="Get in touch"
        subtitle="Questions about membership, classes, or personal training? Reach out below."
      />

      <Reveal>
        <section className="mx-auto grid max-w-6xl gap-8 bg-section px-6 py-8 lg:grid-cols-2">
          <div className="flex flex-col gap-4">
            <ContactInfoCard icon={MapPin} label="Address" value="123 Main St, Your City" />
            <ContactInfoCard icon={Phone} label="Phone" value="(555) 123-4567" />
            <ContactInfoCard icon={Mail} label="Email" value="info@frankiesbodyshop.com" />
          </div>

          <Card>
            <CardContent>
              <form
                className="flex flex-col gap-4"
                onSubmit={(event) => event.preventDefault()}
              >
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="h-9 rounded-md border border-input bg-section text-white px-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring/50"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="h-9 rounded-md border border-input bg-section text-white px-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring/50"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="rounded-md border border-input bg-section text-white px-3 py-2 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring/50"
                  />
                </div>
                <Button type="submit" className="w-fit">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </section>
      </Reveal>
    </>
  )
}
