import type { LucideIcon } from 'lucide-react'

import { Card, CardContent } from '@/components/ui/card'

interface AmenityCardProps {
  icon: LucideIcon
  label: string
  description: string
}

export function AmenityCard({ icon: Icon, label, description }: AmenityCardProps) {
  return (
    <Card>
      <CardContent className="flex flex-col items-start gap-3">
        <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
          <Icon className="size-5" aria-hidden />
        </div>
        <p className="font-semibold">{label}</p>
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  )
}
