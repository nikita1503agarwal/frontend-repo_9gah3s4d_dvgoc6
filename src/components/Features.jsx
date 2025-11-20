import { motion } from 'framer-motion'
import { Leaf, Flame, Sparkles, Clock4 } from 'lucide-react'

const features = [
  {
    icon: Leaf,
    title: 'Seasonal & Local',
    desc: 'We partner with nearby farms and purveyors to serve ingredients at their peak.',
  },
  {
    icon: Flame,
    title: 'Wood-Fired Cooking',
    desc: 'A custom hearth brings smoke-kissed depth to signature plates and breads.',
  },
  {
    icon: Sparkles,
    title: 'Playful Tasting',
    desc: 'Curated tasting menus that surprise and delight with every course.',
  },
  {
    icon: Clock4,
    title: 'Late Night Lounge',
    desc: 'Craft cocktails and small bites until midnight on weekends.',
  },
]

export default function Features() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white/90 backdrop-blur hover:bg-white/10 transition"
            >
              <div className="mb-4 inline-flex rounded-xl bg-gradient-to-tr from-amber-500/20 to-rose-500/20 p-3">
                <f.icon className="h-6 w-6 text-amber-300" />
              </div>
              <h3 className="text-lg font-semibold text-white">{f.title}</h3>
              <p className="mt-2 text-sm text-white/70">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
