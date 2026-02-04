'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Briefcase, Gamepad2, ExternalLink } from 'lucide-react'

const experiences = [
  {
    company: 'Hindustan Aeronautics Limited (HAL)',
    role: 'Product Developer Intern',
    location: 'Bengaluru, India',
    period: 'January 2026',
    website: 'https://hal-india.co.in/home',
    icon: Briefcase,
    highlights: [
      'Executed the full SDLC within an Agile environment, translating complex user requirements into scalable system architecture and robust deployment pipelines.',
      'Implemented LLM-based architecture like OpenAI Whisper and Google Gemini 2.5 using Python and PyTorch ensuring code modularity and strict adherence to safety-critical protocols.',
      'Resolved critical hardware-software integration bottlenecks, resulting in an increase in system processing speed and operational stability.',
      'Optimized product features during design reviews, successfully aligning engineering deliverables with manufacturing constraints to prevent downstream production delays.',
      'Used Soft Skills: Problem Solving, Team Leadership, Technical Communication, Hardware Expertise, Collaboration, Continuous Learning.'
    ]
  },
  {
    company: 'Dayananda Sagar University',
    role: 'Game Development Lead',
    location: 'Bengaluru, India',
    period: 'January 2026',
    website: 'https://dsu.edu.in/international/international-affairs/',
    icon: Gamepad2,
    highlights: [
      'Led a small development team using Godot engine to build a 2D Top-down game for DSU International Affairs as a client project.',
      'Engineered and designed a navigable digital twin of the college campus, translating real-world layouts into an interactive 2D experience.',
      'Acted as the primary liaison between College higher authorities and the Development team, presenting updates, managing feedback, and ensuring aligned project delivery.',
      'Managed project timeline and deliverables while coordinating with stakeholders to meet client requirements and expectations.'
    ]
  }
]

export default function Experience() {
  const [visibleCards, setVisibleCards] = useState<number[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0')
            setVisibleCards(prev => [...new Set([...prev, index])])
          }
        })
      },
      { threshold: 0.2 }
    )

    const cards = document.querySelectorAll('[data-experience-index]')
    cards.forEach(card => observer.observe(card))

    return () => observer.disconnect()
  }, [])

  return (
    <section id="experience" className="relative py-36 bg-black overflow-hidden">
      {/* Enhanced Ambient glow with animation */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.15, 0.1]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute top-1/2 left-1/2 w-[900px] h-[900px] -translate-x-1/2 -translate-y-1/2 bg-purple-600/10 blur-[180px]" 
        />
        <motion.div 
          animate={{ 
            x: [0, 100, 0],
            y: [0, -50, 0]
          }}
          transition={{ 
            duration: 12, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-blue-600/5 blur-[120px]" 
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Enhanced Heading with stagger animation */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <motion.h2 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl font-bold mb-2"
          >
            <span className="text-white">Professional</span>{' '}
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-purple-400"
            >
              Experience
            </motion.span>
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="h-1 bg-gradient-to-r from-purple-600 to-purple-400 mx-auto mt-4 rounded-full" 
          />
        </motion.div>

        <div className="space-y-12">
          {experiences.map((exp, i) => {
            const Icon = exp.icon
            const isVisible = visibleCards.includes(i)
            
            return (
              <motion.div
                key={i}
                data-experience-index={i}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: i * 0.3,
                  ease: "easeOut"
                }}
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.3 }
                }}
                className="relative rounded-3xl p-0 sm:p-0 bg-gradient-to-br from-[#18122B]/90 via-[#0B0B14]/90 to-[#18122B]/80 border border-purple-500/30 shadow-[0_0_60px_rgba(168,85,247,0.18)] transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] hover:border-purple-400 hover:shadow-[0_0_80px_rgba(168,85,247,0.25)] overflow-hidden will-change-transform group"
                style={{ transitionProperty: 'box-shadow, border-color, transform, background' }}
              >
                {/* Animated background gradient */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: i * 0.3 + 0.5 }}
                  className="absolute inset-0 bg-gradient-to-r from-purple-600/5 via-transparent to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />

                {/* Header Row with enhanced animations */}
                <motion.div 
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.3 + 0.2 }}
                  className="flex items-center gap-4 px-7 pt-7 pb-2 transition-all duration-500 ease-in-out"
                >
                  <motion.div 
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ 
                      duration: 0.8, 
                      delay: i * 0.3 + 0.3,
                      type: "spring",
                      stiffness: 200
                    }}
                    whileHover={{ 
                      scale: 1.1,
                      rotate: 5,
                      transition: { duration: 0.2 }
                    }}
                    className="p-3 rounded-xl bg-purple-500/15 flex items-center justify-center"
                  >
                    <Icon className="w-7 h-7 text-purple-400" />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: i * 0.3 + 0.4 }}
                  >
                    <motion.h3 
                      className="text-lg sm:text-xl font-bold text-white mb-1"
                      whileHover={{ color: "#a855f7" }}
                      transition={{ duration: 0.2 }}
                    >
                      {exp.company}
                    </motion.h3>
                    <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-purple-300 font-medium">
                      <motion.span
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: i * 0.3 + 0.5 }}
                      >
                        {exp.role}
                      </motion.span>
                      <span className="hidden sm:inline">|</span>
                      <motion.span 
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: i * 0.3 + 0.6 }}
                        className="text-gray-400 font-normal"
                      >
                        {exp.location}
                      </motion.span>
                      <span className="hidden sm:inline">|</span>
                      <motion.span 
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: i * 0.3 + 0.7 }}
                        className="text-gray-400 font-normal"
                      >
                        {exp.period}
                      </motion.span>
                    </div>
                    
                    {/* Company Website Button */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: i * 0.3 + 0.8, type: "spring", stiffness: 200 }}
                      className="mt-3"
                    >
                      <motion.a
                        href={exp.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ 
                          scale: 1.05,
                          transition: { duration: 0.2 }
                        }}
                        whileTap={{ scale: 0.95 }}
                        className="
                          inline-flex items-center gap-2
                          px-4 py-2 text-sm rounded-full
                          bg-purple-600/20 text-purple-300 border border-purple-500/30
                          transition-all duration-300
                          hover:bg-purple-600/40 hover:text-white hover:border-purple-400
                          cursor-pointer relative z-10
                        "
                      >
                        <ExternalLink className="w-4 h-4" />
                        Visit Company
                      </motion.a>
                    </motion.div>
                  </motion.div>
                </motion.div>

                {/* Description Card with staggered highlight animations */}
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.3 + 0.5 }}
                  className="px-7 pb-7 pt-2"
                >
                  <div className="rounded-2xl bg-black/40 border border-purple-500/10 p-5 mb-2 shadow-[0_2px_16px_rgba(168,85,247,0.08)] transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]">
                    <ul className="space-y-3">
                      {exp.highlights.map((h, j) => (
                        <motion.li
                          key={j}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ 
                            duration: 0.5, 
                            delay: i * 0.3 + 0.7 + j * 0.1 
                          }}
                          whileHover={{ 
                            x: 5,
                            transition: { duration: 0.2 }
                          }}
                          className="flex items-start gap-2 transition-all duration-500 ease-in-out"
                          style={{ transitionProperty: 'color, background, transform' }}
                        >
                          <motion.span 
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ 
                              duration: 0.3, 
                              delay: i * 0.3 + 0.8 + j * 0.1,
                              type: "spring",
                              stiffness: 300
                            }}
                            className="mt-1 w-2 h-2 rounded-full bg-purple-400 inline-block flex-shrink-0 transition-all duration-500 ease-in-out" 
                          />
                          <span className="text-gray-200 text-sm leading-relaxed transition-all duration-500 ease-in-out">{h}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}