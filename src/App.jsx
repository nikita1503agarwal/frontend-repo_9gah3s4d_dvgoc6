import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Menu from './components/Menu'
import Gallery from './components/Gallery'
import Reserve from './components/Reserve'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white relative">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(50%_50%_at_50%_0%,rgba(251,191,36,0.08),rgba(244,63,94,0.05)_40%,transparent_70%)]" />

      <Navbar />
      <Hero />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-10 h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent" />
      </div>
      <Features />
      <Menu />
      <Gallery />
      <Reserve />

      <footer className="pb-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent mb-6" />
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-white/70">
            <p>© {new Date().getFullYear()} Savoré Restaurant. All rights reserved.</p>
            <div className="text-sm">123 Market Street, Your City • (123) 456-7890</div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
