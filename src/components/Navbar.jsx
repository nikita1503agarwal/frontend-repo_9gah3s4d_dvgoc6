import { useState } from 'react'
import { Menu as MenuIcon, X, Utensils, Instagram, Facebook, Phone } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Menu', href: '#menu' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Reserve', href: '#reserve' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-white/10 bg-black/30 backdrop-blur supports-[backdrop-filter]:bg-black/40">
          <div className="flex items-center justify-between px-4 py-3">
            <a href="#home" className="flex items-center gap-3 group">
              <div className="relative">
                <motion.div
                  initial={{ scale: 0.8, rotate: -10, opacity: 0 }}
                  animate={{ scale: 1, rotate: 0, opacity: 1 }}
                  transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                  className="p-2 rounded-xl bg-gradient-to-tr from-amber-500 to-red-500 shadow-lg shadow-amber-500/20"
                >
                  <Utensils className="w-6 h-6 text-white" />
                </motion.div>
                <span className="absolute -bottom-1 -right-1 h-3 w-3 rounded-full bg-emerald-400 ring-2 ring-black/50" />
              </div>
              <div>
                <span className="block text-white font-semibold tracking-tight text-lg">Savoré</span>
                <span className="block text-xs text-white/60 -mt-1">Modern Dining</span>
              </div>
            </a>

            <nav className="hidden md:flex items-center gap-6">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="relative text-white/80 hover:text-white transition"
                >
                  {item.label}
                  <span className="absolute left-0 -bottom-1 h-px w-0 bg-gradient-to-r from-amber-400 to-red-500 transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </nav>

            <div className="hidden md:flex items-center gap-3">
              <a href="tel:+1234567890" className="text-white/80 hover:text-white">
                <Phone className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/80 hover:text-white">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/80 hover:text-white">
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#reserve"
                className="ml-3 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-amber-500 to-red-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-amber-500/30 hover:shadow-amber-500/40"
              >
                Reserve
              </a>
            </div>

            <button
              className="md:hidden text-white/90"
              onClick={() => setOpen((o) => !o)}
              aria-label="Toggle menu"
            >
              {open ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>

          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="md:hidden overflow-hidden border-t border-white/10"
              >
                <div className="px-4 py-3 space-y-2">
                  {navItems.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="block rounded-lg px-3 py-2 text-white/90 hover:bg-white/5"
                    >
                      {item.label}
                    </a>
                  ))}
                  <div className="pt-2 flex items-center gap-3">
                    <a href="tel:+1234567890" className="text-white/80 hover:text-white">
                      <Phone className="w-5 h-5" />
                    </a>
                    <a href="#" className="text-white/80 hover:text-white">
                      <Instagram className="w-5 h-5" />
                    </a>
                    <a href="#" className="text-white/80 hover:text-white">
                      <Facebook className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  )
}
