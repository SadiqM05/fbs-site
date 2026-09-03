import { createBrowserRouter } from 'react-router-dom'

import { RootLayout } from '@/layouts/RootLayout'
import About from '@/pages/About'
import CombatClub from '@/pages/CombatClub'
import Contact from '@/pages/Contact'
import Gym from '@/pages/Gym'
import Home from '@/pages/Home'
import NotFound from '@/pages/NotFound'
import PersonalTraining from '@/pages/PersonalTraining'
import Schedule from '@/pages/Schedule'

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/gym', element: <Gym /> },
      { path: '/combat-club', element: <CombatClub /> },
      { path: '/schedule', element: <Schedule /> },
      { path: '/personal-training', element: <PersonalTraining /> },
      { path: '/about', element: <About /> },
      { path: '/contact', element: <Contact /> },
      { path: '*', element: <NotFound /> },
    ],
  },
])
