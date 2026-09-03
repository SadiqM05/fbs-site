import { Check } from 'lucide-react'
import { NavLink } from 'react-router-dom'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { cn } from '@/lib/utils'

interface PricingCardProps {
  name: string
  price: string
  period?: string
  features: string[]
  highlighted?: boolean
  ctaTo?: string
}

export function PricingCard({
  name,
  price,
  period = '/mo',
  features,
  highlighted = false,
  ctaTo = '/contact',
}: PricingCardProps) {
  return (
    <Card className={cn(highlighted && 'border-primary shadow-md')}>
      <CardHeader>
        <CardTitle className="text-xl">{name}</CardTitle>
        <p className="text-3xl font-bold">
          {price}
          <span className="text-sm font-normal text-muted-foreground">{period}</span>
        </p>
      </CardHeader>
      <CardContent>
        <ul className="flex flex-col gap-2 text-sm">
          {features.map((feature) => (
            <li key={feature} className="flex items-center gap-2">
              <Check className="size-4 shrink-0 text-primary" aria-hidden />
              {feature}
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full" variant={highlighted ? 'default' : 'outline'}>
          <NavLink to={ctaTo}>Get Started</NavLink>
        </Button>
      </CardFooter>
    </Card>
  )
}
