'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import { motion } from 'framer-motion'

const sections = [
  {
    title: '🍳BREAKFAST',
    items: [
      { name: 'Fluffy Pancakes 🌿', desc: 'Fluffy pancakes with syrup.', price: '$ 8.00', img: 'https://framerusercontent.com/images/u8ljKC6SGztsKfTfpoPZTvM4hk.png' },
      { name: 'Avocado Toast 🥑', desc: 'Soft pancakes with maple syrup.', price: '$ 12.00', img: 'https://framerusercontent.com/images/llDhix4nHiejvQM3iHwbQmCzRHI.png' },
      { name: 'Classic Omelette 🍳', desc: 'Soft pancakes with maple syrup.', price: '$ 12.00', img: 'https://framerusercontent.com/images/gD7PBoFZiCWkaW7EMPFCTQn15U.png' },
      { name: 'Fruit Parfait 🍓', desc: 'Layers of yogurt, granola, and fresh fruits.', price: '$ 12.00', img: 'https://framerusercontent.com/images/ScDKttVet2DJUpuxzHdVQ2ufAFo.png' },
    ],
  },

  {
    title: '🥗 LUNCH',
    items: [
      { name: 'Caesar Salad with Grilled Chicken 🥗', desc: 'Romaine lettuce, chicken, and caesar dressing.', price: '$ 15.00', img: 'https://framerusercontent.com/images/V1QQOVUJQQ9Wb3i6lDj8UFsc.png' },
      { name: 'Wagyu Beef Burger 🍔', desc: 'Premium wagyu beef with cheddar and truffle mayo.', price: '$ 18.00', img: 'https://framerusercontent.com/images/PQQo472u99WNRQmhHDbo0UNq15A.png' },
      { name: 'Seafood Pasta 🍝', desc: 'Linguine with shrimp and white wine sauce.', price: '$ 22.00', img: 'https://framerusercontent.com/images/cr49lnQ3GRFACIjoaRI0wvWwlk.png' },
      { name: 'Grilled Veggie Wrap 🌯', desc: 'Roasted veggies wrapped in warm flatbread.', price: '$ 14.00', img: 'https://framerusercontent.com/images/BBkgT2hWLc7GvgeN6azrv5k86RI.png' },
      { name: 'Herb-Crusted Salmon 🐟', desc: 'Seared salmon with herb crust and lemon.', price: '$ 20.00', img: 'https://framerusercontent.com/images/ITl1Rn4shmPJB9sThsaGZGcTvq8.png' },
    ],
  },

  {
    title: '🍽️DINNER',
    items: [
      { name: 'Filet Mignon 🥩', desc: 'Tender beef with red wine sauce.', price: '$ 22.00', img: 'https://framerusercontent.com/images/S86qcP1VM2ZrpCaeplI3tlgilE.png' },
      { name: 'Grilled Salmon 🐟', desc: 'Salmon with lemon butter sauce.', price: '$ 28.00', img: 'https://framerusercontent.com/images/31UoRKVGoU5vlYDgara8fpnUdos.png' },
      { name: 'Black Truffle Risotto 🌿', desc: 'Creamy risotto with truffle essence.', price: '$ 29.00', img: 'https://framerusercontent.com/images/NcA7mQScCIL3pfgGXFoL5LAjU.png' },
      { name: 'Rack of Lamb 🍖', desc: 'Juicy lamb chops with mint sauce.', price: '$ 29.00', img: 'https://framerusercontent.com/images/TthXS7oK2mmgcqqI60jpAgiQZE.png' },
      { name: 'Lobster Thermidor 🦞', desc: 'Baked lobster in creamy mustard sauce.', price: '$ 24.00', img: 'https://framerusercontent.com/images/OHSiswiXaKh6YorIFh9RiyM1A.png' },
    ],
  },

  {
    title: '🍹MOCKTAILS',
    items: [
      { name: 'Tropical Paradise 🍍', desc: 'Pineapple, coconut, and mango blend.', price: '$ 8.00', img: 'https://framerusercontent.com/images/FChdOXlnJuR85c2csSH5kkwxoU.jpg' },
      { name: 'Citrus Refresher 🍋', desc: 'Lime and orange with soda.', price: '$ 7.00', img: 'https://framerusercontent.com/images/pRaDVF8S3kGnuKGBnbXraJvUVk.png' },
      { name: 'Berry Bliss 🍓', desc: 'Mixed berries and sparkling water.', price: '$ 8.00', img: 'https://framerusercontent.com/images/GDHVHLZ7KVBQlkxoN63F8Tww.png' },
      { name: 'Green Mojito 🌱', desc: 'Mint, cucumber, and tonic.', price: '$ 9.00', img: 'https://framerusercontent.com/images/A31qDJ6jjigT1NcNiKhjXEFNOK8.png' },
    ],
  },
  {
    title: '🥂 DRINKS',
    items: [
      { name: 'Freshly Squeezed Orange Juice 🍊', desc: 'Refreshing and natural.', price: '$ 6.00', img: 'https://framerusercontent.com/images/HvJS9HRNYSJwaZ2iOfjHVISJYEw.png' },
      { name: 'Signature Iced Coffee ☕', desc: 'Bold and chilled', price: '$ 5.50', img: 'https://framerusercontent.com/images/71Z65QqqmpzS3wQ1i0L25XjOx8.png' },
      { name: 'Sparkling Water 💧', desc: 'Light and refreshing.', price: '$ 4.00', img: 'https://framerusercontent.com/images/3lYnB7FB7VCer8rltwEzjpdGp2E.png' },
      { name: 'Artisan Hot Chocolate 🍫', desc: 'Creamy with whipped topping.', price: '$ 7.00', img: 'https://framerusercontent.com/images/o2BygnIvz8eqUmhCzWZodvo8.png' },
    ],
  },
]

export default function MenuPage() {
  const [activeImg, setActiveImg] = useState(sections[0].img)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-black/50">

      {/* Image + Navbar on all screen sizes, taller height on mobile */}
      <div className="w-full md:w-1/2 h-96 md:h-screen p-4 md:sticky md:top-0">
        <div className="relative w-full h-full overflow-hidden rounded-lg">
          <Image
            src="https://img.freepik.com/free-photo/view-ready-eat-delicious-meal-go_23-2151431723.jpg?semt=ais_hybrid&w=740&q=80"
            alt="Food Preview"
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
              <div className="max-2xl mx-auto px-4 md:px-2 py-4 items-center justify-between">
                <Navbar />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="flex flex-1 items-center justify-center"
            >
              <h1 className="text-3xl md:text-4xl font-serif font-light leading-snug drop-shadow-lg text-white tracking-widest text-center px-2">
                OUR MENU
              </h1>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scrollable menu list */}
      <div className="w-full md:w-1/2 px-4 md:px-10 py-6 md:py-8 space-y-10 overflow-y-auto">
        {sections.map((section, i) => (
          <motion.div
            key={i}
            id={section.title.toLowerCase()}
            onMouseEnter={() => setActiveImg(section.img)}
            initial={{ opacity: 0, y: 30 }}
            animate={mounted ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: i * 0.15, duration: 0.6 }}
            className="scroll-mt-20"
          >
            <h2 className="text-xl md:text-2xl font-serif font-light text-gray-300 tracking-widest mb-3 md:mb-4">
              {section.title}
            </h2>
            <div className="space-y-3 md:space-y-4">
              {section.items.map((dish, j) => (
                <motion.div
                  key={j}
                  // whileHover={{ scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 200 }}
                  className="bg-zinc-900 rounded-lg p-3 flex items-center gap-3 md:gap-4 shadow-md hover:shadow-xl transition border border-white/10"
                >
                  <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-md overflow-hidden flex-shrink-0 border border-white/20">
                    <Image
                      src={dish.img}
                      alt={dish.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base md:text-lg font-medium">{dish.name}</h3>
                    <p className="text-xs md:text-sm text-gray-400">{dish.desc}</p>
                  </div>
                  <div className="bg-black/20 px-2 py-1 rounded-md text-xs md:text-sm font-semibold whitespace-nowrap border border-white/20">
                    {dish.price}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

    </div>
  )
}
