import { motion } from 'framer-motion'

const items = [
  {
    category: 'Small Plates',
    dishes: [
      { name: 'Heirloom Tomato Burrata', price: 14, desc: 'basil oil, smoked sea salt, grilled sourdough' },
      { name: 'Charred Octopus', price: 18, desc: 'chili-garlic glaze, citrus, crispy potato' },
      { name: 'Hearth Bread', price: 9, desc: 'whipped honey butter, sea salt' },
    ],
  },
  {
    category: 'Mains',
    dishes: [
      { name: 'Wood-Fired Ribeye', price: 34, desc: 'roasted garlic jus, confit shallot, herb salad' },
      { name: 'Miso Glazed Salmon', price: 28, desc: 'forbidden rice, bok choy, sesame dashi' },
      { name: 'Wild Mushroom Risotto', price: 22, desc: 'truffle, parmesan, fine herbs' },
    ],
  },
  {
    category: 'Desserts',
    dishes: [
      { name: 'Basque Cheesecake', price: 11, desc: 'brûléed sugar, seasonal compote' },
      { name: 'Chocolate Nemesis', price: 12, desc: 'cocoa nib, chantilly, olive oil' },
    ],
  },
]

export default function Menu() {
  return (
    <section id="menu" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Signature Menu</h2>
          <p className="mt-2 text-white/70">A snapshot of favorites. Full menu available on-site.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {items.map((section, i) => (
            <motion.div
              key={section.category}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ delay: i * 0.07, duration: 0.5 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
            >
              <h3 className="text-xl font-semibold text-white mb-4">{section.category}</h3>
              <ul className="space-y-4">
                {section.dishes.map((d) => (
                  <li key={d.name} className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-white font-medium">{d.name}</p>
                      <p className="text-white/60 text-sm">{d.desc}</p>
                    </div>
                    <span className="text-amber-300 font-semibold">${d.price}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
