
'use client'

import { Briefcase, Gamepad2 } from 'lucide-react'

const experiences = [
  {
    company: 'Hindustan Aeronautics Limited (HAL)',
    role: 'Product Developer Intern',
    location: 'Bengaluru, India',
    period: 'January 2026',
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
    company: 'Game Development Lead',
    role: 'Paid Game Dev Intern',
    location: 'Bengaluru, India',
    period: 'January 2026',
    icon: Gamepad2,
    highlights: [
      'Led a small development team using Godot engine to build a 2D Top-down game for my college as a client.',
      'Engineered and designed a navigable digital twin of the college campus for DSU International Affairs, translating real-world layouts into an interactive 2D experience.',
      'Acted as the primary liaison between College higher authorities and the Development team, presenting updates, managing feedback, and ensuring aligned project delivery.'
    ]
  }
]

export default function Experience() {
  return (
    <section id="experience" className="relative py-36 bg-black overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 w-[900px] h-[900px] -translate-x-1/2 -translate-y-1/2 bg-purple-600/10 blur-[180px]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold mb-2">
            <span className="text-white">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-purple-400 mx-auto mt-4 rounded-full" />
        </div>

        <div className="space-y-12">
          {experiences.map((exp, i) => {
            const Icon = exp.icon
            return (
              <div
                key={i}
                className="relative rounded-3xl p-0 sm:p-0 bg-gradient-to-br from-[#18122B]/90 via-[#0B0B14]/90 to-[#18122B]/80 border border-purple-500/30 shadow-[0_0_60px_rgba(168,85,247,0.18)] transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] hover:border-purple-400 hover:shadow-[0_0_80px_rgba(168,85,247,0.25)] overflow-hidden will-change-transform"
                style={{ transitionProperty: 'box-shadow, border-color, transform, background' }}
              >
                {/* Header Row */}
                <div className="flex items-center gap-4 px-7 pt-7 pb-2 transition-all duration-500 ease-in-out">
                  <div className="p-3 rounded-xl bg-purple-500/15 flex items-center justify-center">
                    <Icon className="w-7 h-7 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-1">{exp.company}</h3>
                    <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-purple-300 font-medium">
                      <span>{exp.role}</span>
                      <span className="hidden sm:inline">|</span>
                      <span className="text-gray-400 font-normal">{exp.location}</span>
                      <span className="hidden sm:inline">|</span>
                      <span className="text-gray-400 font-normal">{exp.period}</span>
                    </div>
                  </div>
                </div>
                {/* Description Card */}
                <div className="px-7 pb-7 pt-2">
                  <div className="rounded-2xl bg-black/40 border border-purple-500/10 p-5 mb-2 shadow-[0_2px_16px_rgba(168,85,247,0.08)] transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]">
                    <ul className="space-y-3">
                      {exp.highlights.map((h, j) => (
                        <li
                          key={j}
                          className="flex items-start gap-2 transition-all duration-500 ease-in-out"
                          style={{ transitionProperty: 'color, background, transform' }}
                        >
                          <span className="mt-1 w-2 h-2 rounded-full bg-purple-400 inline-block flex-shrink-0 transition-all duration-500 ease-in-out" />
                          <span className="text-gray-200 text-sm leading-relaxed transition-all duration-500 ease-in-out">{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
