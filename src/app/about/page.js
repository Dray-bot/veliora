'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import { motion } from 'framer-motion'

export default function AboutPage() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-black/50 text-white">

      {/* Left image + sticky Navbar */}
      <div className="w-full md:w-1/2 h-96 md:h-screen p-4 md:sticky md:top-0">
        <div className="relative w-full h-full overflow-hidden rounded-lg">
          <Image
            src="https://img.freepik.com/free-photo/delicious-gourmet-cheeseburger-with-smoke_23-2151985515.jpg?semt=ais_hybrid&w=740&q=80"
            alt="About background"
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
                ABOUT US
              </h1>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scrollable text content on right */}
      <div className="w-full md:w-1/2 px-6 md:px-12 py-12 md:py-24 overflow-y-auto space-y-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={mounted ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-xl mx-auto md:mx-0 text-gray-300 text-base md:text-lg leading-relaxed"
        >
          <p>
            At Veloria, we craft every dish with love and precision. Our passion for authentic flavors and quality
            ingredients drives us to deliver an unforgettable dining experience. We combine fresh, locally sourced
            produce with expert culinary techniques to bring you a menu that celebrates tradition and innovation.
          </p>

          <p className="mt-6">
            Our chefs dedicate themselves to creating dishes that not only taste incredible but also tell a story.
            Whether it&apos;s a classic recipe passed down through generations or a modern twist on a beloved favorite,
            every plate reflects our commitment to excellence.
          </p>

          <p className="mt-6">
            Join us at Veloria to experience food that speaks to your soul and moments that turn into lasting memories.
            We believe that great food has the power to bring people together, and we look forward to welcoming you
            to our table.
          </p>
        </motion.div>

        {/* Opening hours + Book a Table container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={mounted ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-zinc-900 rounded-lg p-4 flex flex-col md:flex-row items-center gap-4 md:gap-6 shadow-md hover:shadow-xl transition border border-white/10 max-w-md mx-auto"
        >
          <div>
            <h3 className="text-xl font-semibold mb-4 tracking-wide text-white">Opening Hours</h3>
            <ul className="text-gray-300 space-y-2">
              <li>Monday - Friday: 8:00 AM - 10:00 PM</li>
              <li>Saturday: 9:00 AM - 11:00 PM</li>
            </ul>
          </div>

          <Link href="/book" passHref>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-zinc-800 border border-white/20 rounded-md text-center py-3 px-10 text-white text-base font-semibold cursor-pointer shadow hover:shadow-xl transition inline-flex items-center justify-center gap-2 select-none"
            >
              Book a Table
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
            </motion.div>
          </Link>
        </motion.div>
      </div>

    </div>
  )
}
