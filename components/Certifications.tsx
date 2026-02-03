'use client'

import { useEffect, useRef, useState } from 'react'
import { Brain, Database, Code2 } from 'lucide-react'

/* ---------- DATA ---------- */
const certifications = [
  {
    title: 'AWS Certified Solutions Architect – Associate',
    org: 'Cloud Computing',
    year: '2025',
    category: 'Cloud',
    description:
      'Validated expertise in designing and deploying scalable, highly available, and fault-tolerant systems on AWS.',
    icon: Database,
  },
  {
    title: 'Advanced SQL for Data Analysis',
    org: 'Database Management',
    year: '2024',
    category: 'Databases',
    description:
      'Complex queries, joins, subqueries, and analytical SQL patterns for data analysis.',
    icon: Database,
  },
  {
    title: 'HTML & JavaScript Fundamentals',
    org: 'Web Development',
    year: '2024',
    category: 'Frontend',
    description:
      'Core web development skills including HTML structure and JavaScript programming.',
    icon: Code2,
  },
  {
    title: 'Chatbot Tools & Development',
    org: 'AI Development',
    year: '2024',
    category: 'AI & Tools',
    description:
      'Building conversational AI systems and chatbot applications using IBM tools.',
    icon: Brain,
  },
  {
    title: 'Power BI Data Visualization',
    org: 'Business Intelligence',
    year: '2024',
    category: 'Analytics',
    description:
      'Creating interactive dashboards and data visualizations for business intelligence.',
    icon: Database,
  },
  {
    title: 'Linux System Administration',
    org: 'System Administration',
    year: '2024',
    category: 'Systems',
    description:
      'Command line operations, system configuration, and server management in Linux environments.',
    icon: Code2,
  },
  {
    title: 'Modern React with Hooks & Context',
    org: 'Frontend Development',
    year: '2024',
    category: 'Frontend',
    description:
      'Component architecture, hooks, state management, and scalable UI patterns.',
    icon: Code2,
  },
  {
    title: 'Next.js & Full-Stack Web Development',
    org: 'Full-Stack Development',
    year: '2024',
    category: 'Frontend',
    description:
      'Server components, routing, performance optimization, and full-stack patterns.',
    icon: Code2,
  },
  {
    title: 'HTML, CSS & Responsive Web Design',
    org: 'freeCodeCamp',
    year: '2022',
    category: 'Frontend',
    description:
      'Semantic HTML, modern CSS, layouts, and responsive design principles.',
    icon: Code2,
  },
]

/* ---------- COMPONENT ---------- */
export default function Certifications() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  const [count, setCount] = useState(0)

  /* scroll observer */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.2 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  /* count up */
  useEffect(() => {
    if (!visible) return
    let current = 0
    const total = certifications.length
    const interval = setInterval(() => {
      current++
      setCount(current)
      if (current === total) clearInterval(interval)
    }, 60)

    return () => clearInterval(interval)
  }, [visible])

  return (
    <section
      id="certifications"
      ref={sectionRef}
      className="relative py-36 bg-black"
    >
      {/* background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 w-[900px] h-[900px] -translate-x-1/2 -translate-y-1/2 bg-purple-600/10 blur-[180px]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        {/* heading */}
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold">
            <span className="text-white">Certifi</span>
            <span className="text-purple-400">cations</span>
          </h2>

          <div className="w-24 h-1 bg-purple-400 mx-auto mt-4 rounded-full" />

          {/* count */}
          <div className="mt-6 text-purple-300 text-lg font-semibold">
            {count}+ Professional Certifications
          </div>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Continuous learning across AI systems, databases, and modern frontend development.
          </p>
        </div>

        {/* grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-1 sm:px-0 transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]">
          {certifications.map((cert, index) => {
            const Icon = cert.icon
            return (
              <div
                key={index}
                className={`
                  group rounded-2xl p-4 sm:p-6
                  bg-white/5 backdrop-blur-md
                  border border-purple-500/20
                  transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]
                  hover:-translate-y-2
                  hover:border-purple-400
                  hover:shadow-[0_0_40px_rgba(168,85,247,0.4)]
                  ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
                `}
                style={{ transitionDelay: `${index * 70}ms`, transitionProperty: 'box-shadow, border-color, transform, opacity, background' }}
              >
                {/* icon */}
                <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-xl bg-purple-500/15 mb-3 sm:mb-4">
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400" />
                </div>

                {/* badge */}
                <span className="inline-block mb-3 px-3 py-1 text-xs rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/30">
                  {cert.category}
                </span>

                <h3 className="text-base sm:text-lg font-semibold text-white mb-1 sm:mb-2">
                  {cert.title}
                </h3>

                <p className="text-xs sm:text-sm text-gray-400 mb-2 sm:mb-3">
                  {cert.org}
                </p>

                <span className="text-xs text-purple-300">
                  {cert.year}
                </span>

                {/* description */}
                <p className="mt-2 sm:mt-4 text-xs sm:text-sm text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {cert.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}