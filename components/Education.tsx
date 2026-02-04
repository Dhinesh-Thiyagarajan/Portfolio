'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { GraduationCap, BookOpen, Award } from 'lucide-react'

const educationData = [
  {
    institution: 'Dayananda Sagar University',
    degree: 'B.Tech in Computer Science & Technology',
    period: '2023 – 2027',
    status: 'current',
    description: 'Specializing in AI/ML, Database Systems, and Software Engineering with focus on practical applications and industry-relevant projects.',
    icon: GraduationCap,
    color: 'purple'
  },
  {
    institution: 'Jain PU College',
    degree: 'Pre-University Studies (Science)',
    period: '2020 – 2022',
    status: 'completed',
    description: 'Comprehensive study in Physics, Chemistry, Mathematics, and Computer Science with strong academic performance and leadership development.',
    icon: BookOpen,
    color: 'blue'
  },
  {
    institution: 'Shantinikethan Institution of Education',
    degree: 'Secondary Education',
    period: 'Until 2020',
    status: 'completed',
    description: 'Strong foundation in Mathematics, Science, and Technology with early exposure to programming and problem-solving methodologies.',
    icon: Award,
    color: 'green'
  }
]

export default function Education() {
  const [visibleItems, setVisibleItems] = useState<number[]>([])
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0')
            setVisibleItems(prev => [...new Set([...prev, index])])
          }
        })
      },
      { threshold: 0.3 }
    )

    const items = document.querySelectorAll('[data-index]')
    items.forEach(item => observer.observe(item))

    return () => observer.disconnect()
  }, [])

  return (
    <section id="education" ref={sectionRef} className="relative py-36 bg-black overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-1/2 w-[800px] h-[800px] -translate-x-1/2 -translate-y-1/2 bg-purple-600/10 blur-[120px]" />
        <div className="absolute left-1/4 top-1/4 w-[400px] h-[400px] bg-blue-600/5 blur-[80px]" />
        <div className="absolute right-1/4 bottom-1/4 w-[300px] h-[300px] bg-green-600/5 blur-[60px]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-bold mb-4">
            <span className="text-white">Educational</span>{' '}
            <span className="text-purple-400">Journey</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A progressive path through academic excellence and continuous learning
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-purple-400 mx-auto mt-6 rounded-full" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Main Timeline Line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-purple-600/50 via-blue-500/30 to-green-500/30" />
          
          {/* Timeline Items */}
          <div className="space-y-12">
            {educationData.map((item, index) => {
              const Icon = item.icon
              const isVisible = visibleItems.includes(index)
              
              return (
                <motion.div
                  key={index}
                  data-index={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isVisible ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="relative flex items-start gap-6"
                >
                  {/* Timeline Node */}
                  <div className="relative z-10 flex-shrink-0">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={isVisible ? { scale: 1 } : {}}
                      transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                      className={`
                        w-12 h-12 rounded-full flex items-center justify-center
                        ${item.color === 'purple' ? 'bg-purple-600/20 border-2 border-purple-400' : ''}
                        ${item.color === 'blue' ? 'bg-blue-600/20 border-2 border-blue-400' : ''}
                        ${item.color === 'green' ? 'bg-green-600/20 border-2 border-green-400' : ''}
                        backdrop-blur-sm shadow-lg
                      `}
                    >
                      <Icon className={`
                        w-5 h-5
                        ${item.color === 'purple' ? 'text-purple-400' : ''}
                        ${item.color === 'blue' ? 'text-blue-400' : ''}
                        ${item.color === 'green' ? 'text-green-400' : ''}
                      `} />
                    </motion.div>
                  </div>

                  {/* Content Card */}
                  <div className="flex-1 min-w-0">
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={isVisible ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.6, delay: index * 0.2 + 0.4 }}
                      className={`
                        relative p-6 rounded-2xl
                        bg-gradient-to-br from-white/10 to-white/5
                        backdrop-blur-xl border border-white/10
                        hover:border-white/20 transition-all duration-500
                        hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)]
                        group
                      `}
                    >
                      {/* Status Badge */}
                      <div className={`
                        absolute -top-3 left-4
                        px-3 py-1 rounded-full text-xs font-semibold
                        ${item.status === 'current' 
                          ? 'bg-purple-600 text-white' 
                          : 'bg-gray-700 text-gray-300'
                        }
                      `}>
                        {item.status === 'current' ? 'Current' : 'Completed'}
                      </div>

                      {/* Period */}
                      <div className={`
                        text-sm font-medium mb-2 mt-2
                        ${item.color === 'purple' ? 'text-purple-400' : ''}
                        ${item.color === 'blue' ? 'text-blue-400' : ''}
                        ${item.color === 'green' ? 'text-green-400' : ''}
                      `}>
                        {item.period}
                      </div>

                      {/* Institution */}
                      <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                        {item.institution}
                      </h3>

                      {/* Degree */}
                      <h4 className="text-base sm:text-lg font-semibold text-gray-300 mb-4">
                        {item.degree}
                      </h4>

                      {/* Description */}
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {item.description}
                      </p>

                      {/* Decorative Element */}
                      <div className={`
                        absolute -z-10 inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500
                        ${item.color === 'purple' ? 'bg-gradient-to-br from-purple-600/10 to-transparent' : ''}
                        ${item.color === 'blue' ? 'bg-gradient-to-br from-blue-600/10 to-transparent' : ''}
                        ${item.color === 'green' ? 'bg-gradient-to-br from-green-600/10 to-transparent' : ''}
                      `} />
                    </motion.div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}