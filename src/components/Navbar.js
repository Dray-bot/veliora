"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import clsx from "clsx"
import { usePathname } from "next/navigation"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const links = [
    { href: "/", label: "Home" },
    { href: "/menu", label: "Menu" },
    { href: "/about", label: "About" },
    { href: "/book", label: "Book a Table" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 z-40 backdrop-blur-sm bg-black/30 transition-all duration-300"
          onClick={() => setIsOpen(false)}
        />
      )}

      <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-[95%] md:max-w-fit">
        <div className="bg-zinc-900 px-4 md:px-6 py-1.5 rounded-full shadow-lg flex items-center justify-between md:gap-6 border border-zinc-900 text-white">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-full bg-black/50 focus:outline-none transition-transform duration-300 cursor-pointer"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
            <div className="text-3xl font-forum tracking-wide">Veloria</div>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex gap-4 text-sm font-forum bg-black/50 border border-black/50 rounded-full px-6 py-2">
            {links.slice(1, 4).map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={clsx(
                  "hover:text-yellow-500 transition-colors",
                  pathname === link.href && "text-yellow-500"
                )}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Small Screen: Book a Table Button */}
          <div className="md:hidden">
            <a
              href="/book"
              className="bg-black text-white text-sm font-forum px-4 py-2 rounded-full shadow-md hover:bg-yellow-500 hover:text-black transition-colors"
            >
              Book a Table
            </a>
          </div>
        </div>
      </nav>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="absolute top-[80px] left-1/2 -translate-x-1/2 z-50 bg-white/10 backdrop-blur-md border border-white/20 text-white font-forum rounded-xl p-6 space-y-3 shadow-lg w-60 text-center">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={clsx(
                "block hover:text-yellow-500 transition-colors",
                pathname === link.href && "text-yellow-500"
              )}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </>
  )
}
