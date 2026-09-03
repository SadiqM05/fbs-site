import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Menu } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { cn } from '@/lib/utils'

const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'Gym', to: '/gym' },
  { label: 'Combat Club', to: '/combat-club' },
  { label: 'Schedule', to: '/schedule' },
  { label: 'Personal Training', to: '/personal-training' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
]

function NavItem({ to, label, onClick }: { to: string; label: string; onClick?: () => void }) {
  return (
    <NavLink
      to={to}
      end={to === '/'}
      onClick={onClick}
      className={({ isActive }) =>
        cn(
          'text-sm font-medium transition-colors hover:text-white',
          isActive ? 'text-white' : 'text-white/70',
        )
      }
    >
      {label}
    </NavLink>
  )
}

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 bg-black text-white">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <NavLink to="/" className="text-lg font-bold tracking-tight text-white">
          Frankie's Body Shop
        </NavLink>

        <nav className="hidden items-center gap-6 md:flex">
          {NAV_LINKS.map((link) => (
            <NavItem key={link.to} {...link} />
          ))}
        </nav>

        <div className="hidden md:block">
          <Button asChild size="sm" variant="secondary">
            <NavLink to="/contact">Join Now</NavLink>
          </Button>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:bg-white/10 hover:text-white md:hidden"
              aria-label="Open menu"
            >
              <Menu />
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col gap-4 px-4">
              {NAV_LINKS.map((link) => (
                <NavItem key={link.to} {...link} onClick={() => setOpen(false)} />
              ))}
              <Button asChild size="sm" className="mt-2 w-fit" onClick={() => setOpen(false)}>
                <NavLink to="/contact">Join Now</NavLink>
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
