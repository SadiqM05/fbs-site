import { NavLink } from 'react-router-dom'

import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 py-32 text-center">
      <p className="text-sm font-semibold uppercase tracking-wide text-accent">404</p>
      <h1 className="text-[32px] font-bold leading-tight tracking-tight sm:text-[48px]">
        Page not found
      </h1>
      <p className="max-w-md text-muted-foreground">
        The page you're looking for doesn't exist or may have moved.
      </p>
      <Button asChild className="mt-2">
        <NavLink to="/">Back to Home</NavLink>
      </Button>
    </section>
  )
}
