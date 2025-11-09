import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Features', href: '#features' },
    { label: 'How it works', href: '#how' },
    { label: 'Pricing', href: '#pricing' },
  ]

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-black/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-purple-500 via-blue-500 to-amber-400" />
            <span className="text-lg font-semibold tracking-tight">AuraLead AI</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-gray-600">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="hover:text-gray-900 transition-colors">
                {item.label}
              </a>
            ))}
            <a
              href="#cta"
              className="inline-flex items-center rounded-md bg-gray-900 text-white px-4 py-2 text-sm font-medium shadow-sm hover:bg-black/90"
            >
              Book a demo
            </a>
          </nav>

          <button
            aria-label="Toggle menu"
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden border-t border-black/5 py-4">
            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="px-2 py-2 rounded-md hover:bg-gray-50 text-gray-700"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#cta"
                className="mt-1 inline-flex items-center justify-center rounded-md bg-gray-900 text-white px-4 py-2 text-sm font-medium shadow-sm hover:bg-black/90"
                onClick={() => setOpen(false)}
              >
                Book a demo
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
