'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import { motion } from 'framer-motion'

export default function ContactPage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-black/50 text-white">

      {/* Left image + sticky Navbar */}
      <div className="w-full md:w-1/2 h-96 md:h-screen p-4 md:sticky md:top-0">
        <div className="relative w-full h-full overflow-hidden">
          <Image
            src="https://media.istockphoto.com/id/177379806/photo/empty-glasses-set-in-restaurant.jpg?s=612x612&w=0&k=20&c=zdrixXAcnBVjpYegWRNf_LGrioacCnQmt-_rxwUFikc="
            alt="Contact background"
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
                CONTACT US
              </h1>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Contact form on right */}
      <div className="w-full md:w-1/2 px-6 md:px-12 py-12 md:py-24 overflow-y-auto">
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={mounted ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          onSubmit={(e) => {
            e.preventDefault()
            alert('Message sent! We will get back to you shortly.')
          }}
          className="space-y-6 max-w-xl mx-auto md:mx-0"
        >
          <h1 className="text-4xl font-bold tracking-wide text-white mb-8">
            Get in Touch
          </h1>

          {/* Social icons */}
          <div className="flex gap-6 mb-8">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="text-white hover:text-blue-400 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-6 h-6"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14.86 4.48 4.48 0 001.98-2.48 9.14 9.14 0 01-2.88 1.1 4.52 4.52 0 00-7.7 4.13A12.8 12.8 0 013 4.4a4.52 4.52 0 001.4 6.05 4.48 4.48 0 01-2.05-.56v.06a4.53 4.53 0 003.63 4.43 4.52 4.52 0 01-2.04.08 4.53 4.53 0 004.22 3.14 9 9 0 01-5.56 1.92A9.3 9.3 0 012 19.54 12.76 12.76 0 008.29 21c7.54 0 11.67-6.25 11.67-11.67 0-.18 0-.35-.01-.53A8.18 8.18 0 0023 3z" />
              </svg>
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-white hover:text-pink-500 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-6 h-6"
              >
                <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 2A3.75 3.75 0 004 7.75v8.5A3.75 3.75 0 007.75 20h8.5a3.75 3.75 0 003.75-3.75v-8.5A3.75 3.75 0 0016.25 4h-8.5zm8.75 1.25a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0zM12 7a5 5 0 110 10 5 5 0 010-10zm0 2a3 3 0 100 6 3 3 0 000-6z" />
              </svg>
            </a>

            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="text-white hover:text-red-600 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-6 h-6"
              >
                <path d="M19.8 7.02a2.4 2.4 0 00-1.68-1.7C16.5 5 12 5 12 5s-4.5 0-6.12.32a2.4 2.4 0 00-1.68 1.7A25.2 25.2 0 004 12a25.2 25.2 0 00.2 4.98 2.4 2.4 0 001.68 1.7C7.5 19 12 19 12 19s4.5 0 6.12-.32a2.4 2.4 0 001.68-1.7A25.2 25.2 0 0020 12a25.2 25.2 0 00-.2-4.98zM10 15.5v-7l6 3.5-6 3.5z" />
              </svg>
            </a>

            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-white hover:text-blue-700 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-6 h-6"
              >
                <path d="M22 12a10 10 0 10-11.5 9.87v-6.99H8v-2.88h2.5V9.41c0-2.48 1.49-3.85 3.77-3.85 1.09 0 2.22.2 2.22.2v2.44h-1.25c-1.23 0-1.62.77-1.62 1.56v1.88h2.76l-.44 2.88h-2.32v6.99A10 10 0 0022 12z" />
              </svg>
            </a>
          </div>

          <label className="block">
            <span className="text-gray-300 text-sm mb-1 block">Full Name</span>
            <input
              type="text"
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
            <span className="text-gray-300 text-sm mb-1 block">Subject</span>
            <input
              type="text"
              name="subject"
              required
              placeholder="Subject of your message"
              className="w-full rounded-md border border-white/20 bg-black/20 px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-zinc-500"
            />
          </label>

          <label className="block">
            <span className="text-gray-300 text-sm mb-1 block">Message</span>
            <textarea
              name="message"
              required
              rows={5}
              placeholder="Write your message here..."
              className="w-full rounded-md border border-white/20 bg-black/20 px-4 py-2 text-white placeholder-gray-400 resize-y focus:outline-none focus:ring-2 focus:ring-zinc-500"
            />
          </label>

          <button
            type="submit"
            className="w-full bg-zinc-800 border border-white/20 rounded-md py-3 text-white font-semibold shadow hover:shadow-xl transition flex items-center justify-center gap-2"
          >
            Send Message
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

          {/* Location Section at bottom */}
          <section className="mt-16">
            <h2 className="text-2xl font-semibold mb-4 text-white tracking-wide">
              Our Location
            </h2>
            <p className="mb-4 text-zinc-300 max-w-md">
              1234 Meraki Street, London, UK<br />
              Open Mon-Sat, 10am - 10pm
            </p>
            <div className="w-full max-w-md rounded-lg overflow-hidden border border-white/20 shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19893.933913593767!2d-0.1277580624250734!3d51.50735079954436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b333f8489e1%3A0xdceec7e5e29a1b8e!2sLondon%2C%20UK!5e0!3m2!1sen!2sng!4v1691500000000!5m2!1sen!2sng"
                width="100%"
                height="240"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Meraki Restaurant Location"
              />
            </div>
          </section>
        </motion.form>
      </div>

    </div>
  )
}
