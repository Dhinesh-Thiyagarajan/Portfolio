<<<<<<< HEAD

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
=======
'use client'

import { useState } from 'react'
import { Github, X } from 'lucide-react'

type Project = {
  title: string
  period: string
  description: string
  details: string[]
  tech: string[]
  github: string
}

const projects: Project[] = [
  {
    title: 'Formula 1 – 2024 Race Database',
    period: '2024',
    description:
      'End-to-end database system for storing and accessing complete Formula 1 2024 season data.',
    details: [
      'Designed normalized relational schemas for race and driver data',
      'Implemented complex SQL queries for analytics and insights',
      'Built a simple frontend interface for data access',
    ],
    tech: ['PostgreSQL', 'SQL', 'JavaScript', 'HTML', 'CSS'],
    github: 'https://github.com/Dhinesh-Thiyagarajan/FORMULA-1-2024-DATABASE',
  },
  {
    title: 'Social Media Announcement App',
    period: '2024',
    description:
      'Academic announcement platform inspired by social media interaction models.',
    details: [
      'Role-based announcement publishing',
      'Structured academic communication flow',
      'Backend–frontend integration',
    ],
    tech: ['Java', 'Spring', 'React', 'REST API'],
    github: 'https://github.com/Abhijay30/social-media-app/tree/main',
  },
  {
    title: 'Top-Down 2D Game',
    period: '2023',
    description:
      'Collaborative 2D game project exploring gameplay mechanics and interaction.',
    details: [
      'Player movement and collision handling',
      'Game loop and state management',
      'Canvas-based rendering',
    ],
    tech: ['JavaScript', 'Game Logic', 'Canvas'],
    github: 'https://github.com/Abhijay30/top-down-game',
  },
]

export default function Projects() {
  const [activeProject, setActiveProject] = useState<Project | null>(null)

  return (
    <section id="projects" className="relative py-36 bg-black overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 w-[1000px] h-[1000px] -translate-x-1/2 -translate-y-1/2 bg-purple-600/15 blur-[200px]" />
>>>>>>> e0d8f9a3329178977c4456887931508233f82e9f
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Heading */}
<<<<<<< HEAD
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
=======
        <div className="text-center mb-24">
          <h2 className="text-4xl font-bold mb-5">
            <span className="text-white">Project</span>{' '}
            <span className="text-purple-400">Timeline</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A chronological view of my project work and technical growth.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 top-0 bottom-0 w-px bg-purple-500/40" />

          <div className="space-y-16 pl-16">
            {projects.map((project) => (
              <div key={project.title} className="relative">
                {/* Timeline dot */}
                <div className="absolute -left-[9px] top-3 w-4 h-4 rounded-full bg-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.8)]" />

                {/* Card */}
                <div
                  className="
                    group relative rounded-3xl p-8
                    bg-white/5 backdrop-blur-xl
                    border border-purple-500/20
                    transition-all duration-500
                    hover:-translate-y-1
                    hover:border-purple-400
                    hover:shadow-[0_0_60px_rgba(168,85,247,0.35)]
                  "
                >
                  {/* Glow */}
                  <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-tr from-purple-600/20 via-transparent to-purple-400/20 pointer-events-none" />

                  <div className="relative">
                    {/* Header */}
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-semibold text-white">
                        {project.title}
                      </h3>
                      <span className="text-sm text-purple-400">
                        {project.period}
                      </span>
                    </div>

                    <p className="text-gray-300 text-sm mb-4">
                      {project.description}
                    </p>

                    {/* Details */}
                    <ul className="list-disc list-inside text-gray-400 text-sm space-y-1 mb-6">
                      {project.details.map((d) => (
                        <li key={d}>{d}</li>
                      ))}
                    </ul>

                    {/* Tech */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* CTA */}
                    <div className="flex gap-6">
                      <button
                        onClick={() => setActiveProject(project)}
                        className="
                          px-5 py-2 text-sm rounded-full
                          bg-purple-600 text-white
                          transition-all duration-300
                          hover:bg-purple-500
                          hover:shadow-[0_0_30px_rgba(168,85,247,0.8)]
                        "
                      >
                        View Details
                      </button>

                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-purple-300 hover:text-white transition-colors"
                      >
                        <Github className="w-4 h-4" />
                        Code
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* MODAL */}
      {activeProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4">
          <div className="relative max-w-lg w-full rounded-3xl bg-[#0B0B14] border border-purple-500/30 p-8">
            <button
              onClick={() => setActiveProject(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
            >
              <X />
            </button>

            <h3 className="text-2xl font-semibold text-white mb-4">
              {activeProject.title}
            </h3>

            <p className="text-gray-300 text-sm mb-6">
              {activeProject.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {activeProject.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20"
                >
                  {tech}
                </span>
              ))}
            </div>

            <a
              href={activeProject.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-purple-400 hover:text-white transition-colors"
            >
              <Github className="w-4 h-4" />
              View on GitHub
            </a>
          </div>
        </div>
      )}
>>>>>>> e0d8f9a3329178977c4456887931508233f82e9f
    </section>
  )
}
