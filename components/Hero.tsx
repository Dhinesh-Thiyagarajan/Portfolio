'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function Hero() {
  const [offset, setOffset] = useState(0)

  // Parallax background
  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY * 0.35)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section
      id="hero"
      className="relative h-screen pt-24 flex items-center justify-center overflow-hidden"
    >
      {/* ================= PARALLAX BACKGROUND ================= */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-110 will-change-transform"
        style={{
          backgroundImage: "url('/hero-bg.jpg')",
          transform: `translateY(${offset}px)`,
        }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Gradient glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-transparent to-cyan-500/10" />

      {/* ================= PARTICLES ================= */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 18 }).map((_, i) => (
          <motion.span
            key={i}
            className="absolute w-1 h-1 rounded-full bg-purple-400/40"
            initial={{
              x: Math.random() * 100 + 'vw',
              y: Math.random() * 100 + 'vh',
              opacity: 0,
            }}
            animate={{
              y: ['0vh', '-120vh'],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              delay: Math.random() * 6,
              ease: 'linear',
            }}
          />
        ))}
      </div>

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 text-center px-6">
        {/* Name reveal */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-5xl md:text-7xl font-bold mb-6"
        >
          <span className="text-white">Dhinesh</span>{' '}
          <span className="text-purple-400">Thiyagarajan</span>
        </motion.h1>

        {/* Subtitle reveal */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-10"
        >
          Computer Science Student · Databases · AI · Product Development
        </motion.p>

        {/* Buttons reveal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.6 }}
          className="flex justify-center gap-6"
        >
          <a
            href="#projects"
            className="
              px-6 py-3 rounded-full
              bg-purple-600 text-white
              transition
              hover:bg-purple-500
              hover:shadow-[0_0_30px_rgba(168,85,247,0.7)]
            "
          >
            View My Work
          </a>

          <a
            href="#contact"
            className="
              px-6 py-3 rounded-full
              border border-purple-400 text-purple-300
              transition
              hover:bg-purple-400 hover:text-black
            "
          >
            Get In Touch
          </a>
        </motion.div>
      </div>
    </section>
  )
}
