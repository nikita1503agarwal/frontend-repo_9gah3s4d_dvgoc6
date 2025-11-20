import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -inset-[10%] bg-[radial-gradient(60%_60%_at_50%_0%,rgba(251,191,36,0.15),rgba(244,63,94,0.12)_40%,transparent_70%)]" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-[0.15]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-40 pb-24">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h1
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="text-4xl sm:text-6xl font-black tracking-tight text-white"
            >
              Savor the Night at
              <span className="block mt-2 bg-gradient-to-r from-amber-300 via-rose-300 to-red-400 bg-clip-text text-transparent">
                Savoré Restaurant
              </span>
            </motion.h1>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.15, duration: 0.6 }}
              className="mt-6 text-lg text-white/80 max-w-xl"
            >
              A modern culinary experience blending seasonal ingredients, playful creativity, and warm hospitality. Reserve your table for an evening to remember.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <a
                href="#reserve"
                className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-amber-500 to-rose-500 px-6 py-3 text-white font-semibold shadow-lg shadow-amber-500/30 hover:shadow-rose-500/40"
              >
                Book a Table
              </a>
              <a
                href="#menu"
                className="inline-flex items-center justify-center rounded-xl bg-white/10 px-6 py-3 text-white backdrop-blur border border-white/20 hover:bg-white/15"
              >
                Explore Menu
              </a>
            </motion.div>

            <div className="mt-10 flex items-center gap-6 text-white/70">
              <div className="flex -space-x-3">
                {['/public/chef.png','/public/dish.png','/public/room.png'].map((src, i) => (
                  <img key={i} src={src} alt="" className="w-10 h-10 rounded-full ring-2 ring-white/20" />
                ))}
              </div>
              <p>900+ five-star reviews this year</p>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-amber-500/20 to-rose-500/20 blur-2xl" />
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="relative rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur"
            >
              <img
                src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1800&auto=format&fit=crop"
                alt="Signature dish"
                className="h-[420px] w-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
