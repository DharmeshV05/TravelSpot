import { Link } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'
import { useState } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

const navLinks = [
  { href: '#destinations', label: 'Destinations' },
  { href: '#tips', label: 'Tips' },
  { href: '#reviews', label: 'Reviews' },
  { href: '#newsletter', label: 'Newsletter' }
]

const Header = () => {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 bg-slate-800/90 backdrop-blur py-3">
      <nav className="container mx-auto flex items-center gap-6 px-4 text-slate-100">
        <Link to="/" className="text-2xl font-extrabold text-brand tracking-wide">
          TravelSpot
        </Link>
        {/* Desktop nav */}
        <ul className="hidden md:flex gap-6 items-center">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-brand">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <ThemeToggle className="ml-auto md:ml-0" />
        {/* Hamburger button */}
        <button
          className="md:hidden ml-2 p-2 rounded hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-brand"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
        </button>
        {/* Mobile menu overlay with blur */}
        {open && (
          <div
            className="fixed inset-0 z-50 md:hidden bg-black/40 backdrop-blur-sm transition-all"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />
        )}
        {/* Mobile menu */}
        <ul
          className={`fixed top-0 right-0 h-full w-64 bg-slate-800 shadow-lg z-50 flex flex-col items-center gap-8 p-8 pt-24 transition-transform duration-200 md:hidden ${open ? 'translate-x-0' : 'translate-x-full'}`}
          style={{ pointerEvents: open ? 'auto' : 'none' }}
          aria-label="Mobile menu"
        >
          <button
            className="absolute top-4 right-4 p-2 rounded hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-brand"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
          >
            <XMarkIcon className="w-6 h-6" />
          </button>
          {navLinks.map((l) => (
            <li key={l.href} className="w-full">
              <a
                href={l.href}
                className="block py-2 px-4 rounded hover:bg-brand hover:text-white text-lg text-center w-full"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Header 