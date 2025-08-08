'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import { motion } from 'framer-motion'

export default function BookTablePage() {
  const [mounted, setMounted] = useState(false)
  const [guests, setGuests] = useState(1)

  useEffect(() => {
    setMounted(true)
  }, [])

  const increaseGuests = () => setGuests((g) => Math.min(g + 1, 20))
  const decreaseGuests = () => setGuests((g) => Math.max(g - 1, 1))

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-black/50 text-white">

      {/* Left image + sticky Navbar */}
      <div className="w-full md:w-1/2 h-96 md:h-screen p-4 md:sticky md:top-0">
        <div className="relative w-full h-full overflow-hidden">
          <Image
            src="https://framerusercontent.com/images/DXQ6CScAGLm28TyBbKjUbd6nwQ.png"
            alt="Book a Table background"
            fill
            className="object-cover transition-all duration-700 ease-in-out"
            priority
          />
          <div className="absolute inset-0 bg-black/40 flex flex-col border-r border-white/20">

            {/* Sticky Navbar */}
            <motion.div
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="sticky top-0 z-10 w-full bg-black/10 backdrop-blur-sm"
            >
              <div className="max-w-3xl mx-auto px-4 py-4">
                <Navbar />
              </div>
            </motion.div>

            {/* Centered heading */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="flex flex-1 items-center justify-center px-6"
            >
              <h1 className="text-3xl md:text-4xl font-serif font-light leading-snug drop-shadow-lg text-white tracking-widest text-center max-w-lg">
                BOOK A TABLE
              </h1>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Form on right */}
      <div className="w-full md:w-1/2 px-6 md:px-12 py-12 md:py-24 overflow-y-auto">
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={mounted ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          onSubmit={(e) => {
            e.preventDefault()
            alert('Booking submitted! We will contact you soon.')
          }}
          className="space-y-6 max-w-xl mx-auto md:mx-0"
        >
          <h1 className="text-3xl md:text-4xl font-serif font-light leading-snug drop-shadow-lg text-white tracking-widest text-center max-w-lg">
            Reservation Table
          </h1>

          <label className="block">
            <span className="text-gray-300 text-sm mb-1 block">Full Name</span>
            <input
              type="text font-bold"
              name="name"
              required
              placeholder="Your full name"
              className="w-full rounded-md border border-white/20 bg-black/20 px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-zinc-500"
            />
          </label>

          <label className="block">
            <span className="text-gray-300 text-sm mb-1 block">Email</span>
            <input
              type="email"
              name="email"
              required
              placeholder="you@example.com"
              className="w-full rounded-md border border-white/20 bg-black/20 px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-zinc-500"
            />
          </label>

          <label className="block">
            <span className="text-gray-300 text-sm mb-1 block">Phone Number</span>
            <input
              type="tel"
              name="phone"
              required
              placeholder="+1234567890"
              className="w-full rounded-md border border-white/20 bg-black/20 px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-zinc-500"
            />
          </label>

          <label className="block">
            <span className="text-gray-300 text-sm mb-1 block">Date</span>
            <input
              type="date"
              name="date"
              required
              className="w-full rounded-md border border-white/20 bg-black/20 px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-zinc-500"
            />
          </label>

          <label className="block">
            <span className="text-gray-300 text-sm mb-1 block">Time</span>
            <input
              type="time"
              name="time"
              required
              className="w-full rounded-md border border-white/20 bg-black/20 px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-zinc-500"
            />
          </label>

          {/* Number of Guests */}
          <label className="block">
            <span className="text-gray-300 text-sm mb-2 block">Number of Guests</span>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={decreaseGuests}
                className="w-9 h-9 rounded-md bg-zinc-800 border border-white/20 text-white font-bold text-xl flex items-center justify-center hover:bg-zinc-700 transition"
                aria-label="Decrease guests"
              >
                -
              </button>
              <span className="text-white text-lg min-w-[24px] text-center">{guests}</span>
              <button
                type="button"
                onClick={increaseGuests}
                className="w-9 h-9 rounded-md bg-zinc-800 border border-white/20 text-white font-bold text-xl flex items-center justify-center hover:bg-zinc-700 transition"
                aria-label="Increase guests"
              >
                +
              </button>
            </div>
          </label>

          {/* Special Requests */}
          <label className="block">
            <span className="text-gray-300 text-sm mb-1 block">Special Requests</span>
            <textarea
              name="specialRequests"
              placeholder="Celebrating a small birthday, please prepare a small dessert with a candle."
              rows={4}
              className="w-full rounded-md border border-white/20 bg-black/20 px-4 py-2 text-white placeholder-gray-400 resize-y focus:outline-none focus:ring-2 focus:ring-zinc-500"
            />
          </label>

          <button
            type="submit"
            className="w-full bg-gray-200 cursor-pointer hover:bg-white/10 hover:text-white rounded-md py-3 text-black shadow hover:shadow-xl transition flex items-center justify-center gap-2"
          >
            Book Now
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-5 h-5"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </motion.form>
      </div>

    </div>
  )
}
