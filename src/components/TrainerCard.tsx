import { Card, CardContent } from '@/components/ui/card'

interface TrainerCardProps {
  name: string
  role: string
  bio: string
  specialties: string[]
}

export function TrainerCard({ name, role, bio, specialties }: TrainerCardProps) {
  return (
    <Card>
      <CardContent className="flex flex-col gap-3">
        <div className="size-16 rounded-full bg-muted" aria-hidden />
        <div>
          <p className="font-semibold">{name}</p>
          <p className="text-sm text-primary">{role}</p>
        </div>
        <p className="text-sm text-muted-foreground">{bio}</p>
        <p className="text-xs text-muted-foreground">{specialties.join(' · ')}</p>
      </CardContent>
    </Card>
  )
}
