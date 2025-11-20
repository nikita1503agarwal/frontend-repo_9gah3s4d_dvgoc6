import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Reserve() {
  const [submitted, setSubmitted] = useState(false)

  const submit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="reserve" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Reserve a Table</h2>
            <p className="mt-2 text-white/70 max-w-xl">We welcome reservations for dinner and the lounge. For parties of 6 or more, please call us.</p>
            <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-6 text-white/80 backdrop-blur">
              <p className="font-medium text-white">Hours</p>
              <ul className="mt-2 text-sm space-y-1">
                <li>Mon–Thu: 5pm – 10pm</li>
                <li>Fri–Sat: 5pm – 12am</li>
                <li>Sun: Closed</li>
              </ul>
              <p className="mt-4 font-medium text-white">Location</p>
              <p className="text-sm">123 Market Street, Your City</p>
            </div>
          </div>

          <motion.form
            onSubmit={submit}
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
          >
            {submitted ? (
              <div className="text-center text-white">
                <p className="text-xl font-semibold">Thank you! Well confirm shortly.</p>
                <button type="button" onClick={() => setSubmitted(false)} className="mt-4 rounded-lg bg-white/10 px-4 py-2 border border-white/20">Make another</button>
              </div>
            ) : (
              <div className="grid sm:grid-cols-2 gap-4 text-white">
                <div>
                  <label className="text-sm text-white/70">Name</label>
                  <input required className="mt-1 w-full rounded-lg bg-black/30 border border-white/20 px-3 py-2 outline-none focus:ring-2 focus:ring-amber-400" />
                </div>
                <div>
                  <label className="text-sm text-white/70">Email</label>
                  <input type="email" required className="mt-1 w-full rounded-lg bg-black/30 border border-white/20 px-3 py-2 outline-none focus:ring-2 focus:ring-amber-400" />
                </div>
                <div>
                  <label className="text-sm text-white/70">Date</label>
                  <input type="date" required className="mt-1 w-full rounded-lg bg-black/30 border border-white/20 px-3 py-2 outline-none focus:ring-2 focus:ring-amber-400" />
                </div>
                <div>
                  <label className="text-sm text-white/70">Time</label>
                  <input type="time" required className="mt-1 w-full rounded-lg bg-black/30 border border-white/20 px-3 py-2 outline-none focus:ring-2 focus:ring-amber-400" />
                </div>
                <div>
                  <label className="text-sm text-white/70">Guests</label>
                  <select className="mt-1 w-full rounded-lg bg-black/30 border border-white/20 px-3 py-2 outline-none focus:ring-2 focus:ring-amber-400">
                    {[...Array(8)].map((_, i) => (
                      <option key={i+1}>{i + 1}</option>
                    ))}
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label className="text-sm text-white/70">Notes</label>
                  <textarea rows="3" className="mt-1 w-full rounded-lg bg-black/30 border border-white/20 px-3 py-2 outline-none focus:ring-2 focus:ring-amber-400" />
                </div>
                <div className="sm:col-span-2">
                  <button className="w-full rounded-xl bg-gradient-to-r from-amber-500 to-rose-500 px-6 py-3 text-white font-semibold shadow-lg shadow-amber-500/30 hover:shadow-rose-500/40">
                    Request Reservation
                  </button>
                </div>
              </div>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  )
}
