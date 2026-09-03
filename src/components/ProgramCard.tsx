import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

interface ProgramCardProps {
  name: string
  level: string
  description: string
}

export function ProgramCard({ name, level, description }: ProgramCardProps) {
  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between">
        <CardTitle className="text-xl">{name}</CardTitle>
        <Badge variant="secondary">{level}</Badge>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  )
}
