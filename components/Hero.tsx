'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

type Particle = {
  x: string
  y: string
  duration: number
  delay: number
}

export default function Hero() {
  const [offset, setOffset] = useState(0)
  const [particles, setParticles] = useState<Particle[]>([])

  // Parallax background (UNCHANGED)
  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY * 0.35)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Generate particles ONLY on client (hydration-safe)
  useEffect(() => {
    setParticles(
      Array.from({ length: 18 }).map(() => ({
        x: Math.random() * 100 + 'vw',
        y: Math.random() * 100 + 'vh',
        duration: 10 + Math.random() * 10,
        delay: Math.random() * 6,
      }))
    )
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
        {particles.map((p, i) => (
          <motion.span
            key={i}
            className="absolute w-1 h-1 rounded-full bg-purple-400/40"
            initial={{
              x: p.x,
              y: p.y,
              opacity: 0,
            }}
            animate={{
              y: ['0vh', '-120vh'],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              delay: p.delay,
              ease: 'linear',
            }}
          />
        ))}
      </div>

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 text-center px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            <motion.span 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-white inline-block"
            >
              Dhinesh
            </motion.span>{' '}
            <motion.span 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="text-purple-400 inline-block"
            >
              Thiyagarajan
            </motion.span>
          </motion.h1>

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1, delay: 0.9 }}
            className="h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent mb-8 max-w-md mx-auto"
          />

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8, ease: "easeOut" }}
            className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-10"
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.3, duration: 0.6 }}
            >
              Computer Science Student
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.6 }}
            >
              {' · '}
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.7, duration: 0.6 }}
            >
              Databases
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.9, duration: 0.6 }}
            >
              {' · '}
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.1, duration: 0.6 }}
            >
              AI
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.3, duration: 0.6 }}
            >
              {' · '}
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.5, duration: 0.6 }}
            >
              Product Development
            </motion.span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.7, duration: 0.8 }}
            className="flex justify-center gap-6"
          >
            <motion.a
              href="#projects"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 2.9, duration: 0.5, type: "spring", stiffness: 200 }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 40px rgba(168,85,247,0.8)",
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.95 }}
              className="
                px-6 py-3 rounded-full
                bg-purple-600 text-white
                transition-all duration-300
                hover:bg-purple-500
              "
            >
              View My Work
            </motion.a>

            <motion.a
              href="#contact"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 3.1, duration: 0.5, type: "spring", stiffness: 200 }}
              whileHover={{ 
                scale: 1.05,
                backgroundColor: "rgba(168,85,247,0.4)",
                color: "#000",
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.95 }}
              className="
                px-6 py-3 rounded-full
                border border-purple-400 text-purple-300
                transition-all duration-300
              "
            >
              Get In Touch
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
