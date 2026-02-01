'use client'

import { useState } from 'react'
import { Github, X } from 'lucide-react'

type Project = {
  title: string
  description: string
  longDescription: string
  tech: string[]
  github: string
}

const projects: Project[] = [
  {
    title: 'Formula 1 – 2024 Race Database',
    description:
      'Centralized database and frontend for complete 2024 Formula 1 season data.',
    longDescription:
      'This passion project was built to store, manage, and serve structured data for the entire 2024 Formula 1 season. It includes race details, drivers, results, and standings, with a backend database and a simple frontend for querying and visualization.',
    tech: ['PostgreSQL', 'SQL', 'JavaScript', 'HTML', 'CSS'],
    github: 'https://github.com/Dhinesh-Thiyagarajan/FORMULA-1-2024-DATABASE',
  },
  {
    title: 'Social Media Announcement App',
    description:
      'Academic announcement platform using a social-media-style interface.',
    longDescription:
      'A college project designed to simplify academic communication. It allows structured announcements, role-based access, and organized information delivery using a familiar social media interaction model.',
    tech: ['Java', 'Spring', 'React', 'REST API'],
    github: 'https://github.com/Abhijay30/social-media-app/tree/main',
  },
  {
    title: 'Top-Down 2D Game',
    description:
      'JavaScript-based 2D game focusing on gameplay mechanics and interaction.',
    longDescription:
      'A collaborative project developed to experiment with game loops, player movement, collision handling, and interaction logic using JavaScript and canvas-based rendering.',
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
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-24">
          <h2 className="text-4xl font-bold mb-5">
            <span className="text-white">Projects</span>{' '}
            <span className="text-purple-400">& Work</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Selected projects showcasing my interest in databases,
            application development, and problem-solving.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <div
              key={project.title}
              className="
                group relative rounded-3xl p-8
                bg-white/5 backdrop-blur-xl
                border border-purple-500/20
                transition-all duration-500
                hover:-translate-y-2
                hover:border-purple-400
                hover:shadow-[0_0_60px_rgba(168,85,247,0.35)]
              "
            >
              {/* Glow */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-tr from-purple-600/20 via-transparent to-purple-400/20 pointer-events-none" />

              <div className="relative flex flex-col h-full">
                <h3 className="text-xl font-semibold text-white mb-4">
                  {project.title}
                </h3>

                <p className="text-gray-300 text-sm mb-6">
                  {project.description}
                </p>

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
                <div className="mt-auto flex gap-6">
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
          ))}
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
              {activeProject.longDescription}
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
    </section>
  )
}
