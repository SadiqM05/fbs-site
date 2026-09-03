import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export interface ScheduleClass {
  time: string
  name: string
  instructor: string
}

interface ScheduleTableProps {
  schedule: Record<string, ScheduleClass[]>
}

export function ScheduleTable({ schedule }: ScheduleTableProps) {
  const days = Object.keys(schedule)

  return (
    <Tabs defaultValue={days[0]}>
      <TabsList className="flex-wrap">
        {days.map((day) => (
          <TabsTrigger key={day} value={day}>
            {day}
          </TabsTrigger>
        ))}
      </TabsList>
      {days.map((day) => (
        <TabsContent key={day} value={day}>
          <div className="flex flex-col divide-y divide-border rounded-lg border border-border">
            {schedule[day].map((session) => (
              <div
                key={`${session.time}-${session.name}`}
                className="flex items-center justify-between gap-4 px-4 py-3"
              >
                <span className="w-24 shrink-0 text-sm font-medium text-muted-foreground">
                  {session.time}
                </span>
                <span className="flex-1 text-sm font-semibold">{session.name}</span>
                <span className="text-sm text-muted-foreground">{session.instructor}</span>
              </div>
            ))}
          </div>
        </TabsContent>
      ))}
    </Tabs>
  )
}
