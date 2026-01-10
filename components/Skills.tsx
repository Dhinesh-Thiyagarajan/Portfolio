'use client'

import { useRef } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import {
  Code2,
  Database,
  Brain,
  Cloud,
  Wrench,
} from 'lucide-react'

type Skill = {
  name: string
  level: number // 1–5
  note: string
}

const skillGroups = [
  {
    title: 'Languages & Core',
    icon: Code2,
    items: [
      { name: 'C++', level: 4, note: 'Strong problem solving & OOP' },
      { name: 'Java', level: 4, note: 'DSA & backend fundamentals' },
      { name: 'Python', level: 4, note: 'AI/ML & scripting' },
      { name: 'JavaScript', level: 3, note: 'Frontend & logic handling' },
      { name: 'SQL', level: 5, note: 'Advanced queries & schema design' },
    ],
  },
  {
  title: 'Frontend Technologies',
  icon: Code2,
  items: [
    { name: 'HTML5', level: 4, note: 'Semantic structure & accessibility' },
    { name: 'CSS3', level: 4, note: 'Responsive layouts & animations' },
    { name: 'Tailwind CSS', level: 4, note: 'Utility-first styling & theming' },
    { name: 'React', level: 4, note: 'Component-based UI development' },
    { name: 'Next.js', level: 4, note: 'Routing, layouts & SSR basics' },
  ],
},

  {
    title: 'Databases & Data',
    icon: Database,
    items: [
      { name: 'PostgreSQL', level: 4, note: 'Relational design & indexing' },
      { name: 'MySQL', level: 4, note: 'Query optimization' },
      { name: 'Database Design', level: 4, note: 'Normalization & modeling' },
    ],
  },
  {
    title: 'AI & Machine Learning',
    icon: Brain,
    items: [
      { name: 'RAG', level: 4, note: 'Vector search & LLM pipelines' },
      { name: 'Machine Learning', level: 3, note: 'Model training basics' },
      { name: 'Computer Vision', level: 3, note: 'Image processing fundamentals' },
    ],
  },
  {
    title: 'Systems & OS',
    icon: Cloud,
    items: [
      { name: 'Linux', level: 4, note: 'CLI, permissions, services' },
      { name: 'Shell Scripting', level: 3, note: 'Automation scripts' },
    ],
  },
  {
    title: 'Tools & Platforms',
    icon: Wrench,
    items: [
      { name: 'Git & GitHub', level: 5, note: 'Version control & workflows' },
      { name: 'Power BI', level: 3, note: 'Dashboards & analytics' },
    ],
  },
]

function MagneticCard({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)
  const strength = 0.1 // capped for stability

  const onMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const x = Math.max(-40, Math.min(40, e.clientX - rect.left - rect.width / 2))
    const y = Math.max(-40, Math.min(40, e.clientY - rect.top - rect.height / 2))
    ref.current.style.transform = `translate(${x * strength}px, ${y * strength}px)`
  }

  const onMouseLeave = () => {
    if (!ref.current) return
    ref.current.style.transform = 'translate(0px, 0px)'
  }

  return (
    <div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className="transition-transform duration-300 ease-out will-change-transform"
    >
      {children}
    </div>
  )
}

export default function Skills() {
  const reduceMotion = useReducedMotion()

  return (
    <section id="skills" className="relative py-36 bg-black overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 w-[1000px] h-[1000px] -translate-x-1/2 -translate-y-1/2 bg-purple-600/15 blur-[200px]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-24">
          <h2 className="text-4xl font-bold mb-5">
            <span className="text-white">Skills</span>{' '}
            <span className="text-purple-400">& Expertise</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Experience-based view of my technical strengths.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {skillGroups.map((group, gi) => {
            const Icon = group.icon
            return (
              <MagneticCard key={group.title}>
                <motion.div
                  initial={reduceMotion ? false : { opacity: 0, y: 30 }}
                  whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.5, delay: gi * 0.08 }}
                  className="
                    group relative rounded-3xl p-8
                    bg-white/5 backdrop-blur-xl
                    border border-purple-500/20
                    hover:border-purple-400
                    hover:shadow-[0_0_60px_rgba(168,85,247,0.35)]
                    transition-all duration-500
                  "
                >
                  {/* Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 rounded-xl bg-purple-500/15">
                      <Icon className="w-6 h-6 text-purple-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-white">
                      {group.title}
                    </h3>
                  </div>

                  {/* Skills */}
                  <ul className="space-y-5">
                    {group.items.map((skill, si) => (
                      <li key={skill.name} className="relative group/skill">
                        <div className="text-sm text-gray-300 mb-2">
                          {skill.name}
                        </div>

                        {/* Dots */}
                        <div className="flex gap-2">
                          {[1, 2, 3, 4, 5].map((dot) => (
                            <motion.span
                              key={dot}
                              initial={reduceMotion ? false : { scale: 0 }}
                              whileInView={reduceMotion ? {} : { scale: 1 }}
                              viewport={{ once: true }}
                              transition={{ delay: si * 0.04 + dot * 0.04 }}
                              className={`
                                w-3 h-3 rounded-full
                                ${dot <= skill.level
                                  ? 'bg-purple-400'
                                  : 'bg-white/20'}
                              `}
                            />
                          ))}
                        </div>

                        {/* Tooltip */}
                        <div
                          className="
                            absolute left-0 top-full mt-2
                            px-3 py-1.5 rounded-md
                            text-xs text-white
                            bg-black/80 border border-purple-500/30
                            opacity-0 group-hover/skill:opacity-100
                            transition-opacity duration-300
                            pointer-events-none
                            whitespace-nowrap
                          "
                        >
                          {skill.note}
                        </div>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </MagneticCard>
            )
          })}
        </div>
      </div>
    </section>
  )
}
