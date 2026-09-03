import type { LucideIcon } from 'lucide-react'

import { Card, CardContent } from '@/components/ui/card'

interface ContactInfoCardProps {
  icon: LucideIcon
  label: string
  value: string
}

export function ContactInfoCard({ icon: Icon, label, value }: ContactInfoCardProps) {
  return (
    <Card>
      <CardContent className="flex items-center gap-4">
        <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
          <Icon className="size-5" aria-hidden />
        </div>
        <div>
          <p className="text-sm text-muted-foreground">{label}</p>
          <p className="font-semibold">{value}</p>
        </div>
      </CardContent>
    </Card>
  )
}
