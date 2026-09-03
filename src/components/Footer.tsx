import { NavLink } from 'react-router-dom'
import { AtSign, Globe, MapPin, Phone, Clock } from 'lucide-react'

const QUICK_LINKS = [
  { label: 'Gym', to: '/gym' },
  { label: 'Combat Club', to: '/combat-club' },
  { label: 'Schedule', to: '/schedule' },
  { label: 'Personal Training', to: '/personal-training' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
]

export function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-12 sm:grid-cols-3">
        <div>
          <p className="text-lg font-bold tracking-tight text-white">Frankie's Body Shop</p>
          <p className="mt-2 text-sm text-white/70">
            Gym &amp; Combat Club — strength, conditioning, and martial arts under one roof.
          </p>
          <div className="mt-4 flex gap-4 text-white/70">
            <a href="#" aria-label="Instagram" className="hover:text-white">
              <AtSign className="size-5" />
            </a>
            <a href="#" aria-label="Facebook" className="hover:text-white">
              <Globe className="size-5" />
            </a>
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold text-white">Quick Links</p>
          <ul className="mt-3 flex flex-col gap-2">
            {QUICK_LINKS.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  className="text-sm text-white/70 transition-colors hover:text-white"
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold text-white">Visit Us</p>
          <ul className="mt-3 flex flex-col gap-2 text-sm text-white/70">
            <li className="flex items-center gap-2">
              <MapPin className="size-4 shrink-0" aria-hidden /> 123 Main St, Your City
            </li>
            <li className="flex items-center gap-2">
              <Phone className="size-4 shrink-0" aria-hidden /> (555) 123-4567
            </li>
            <li className="flex items-center gap-2">
              <Clock className="size-4 shrink-0" aria-hidden /> Mon–Fri 6am–9pm, Sat–Sun 8am–4pm
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-4 text-center text-xs text-white/50">
        © {new Date().getFullYear()} Frankie's Body Shop. All rights reserved.
      </div>
    </footer>
  )
}
