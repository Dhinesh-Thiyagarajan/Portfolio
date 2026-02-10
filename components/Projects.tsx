'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
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
    title: 'Mushroom Detection and Mapping Pipeline',
    description:
      'Computer vision pipeline for detecting, counting, and mapping mushrooms with custom YOLOv8 model training.',
    longDescription:
      'A complete mushroom detection system that detects mushrooms in images, counts them, estimates their sizes, and generates spatial distribution maps. Successfully trained a custom YOLOv8 model that improved detection accuracy from 22% to 58%. The pipeline handles variable lighting and camera angles, produces normalized coordinate maps, and generates structured CSV outputs with detection data.',
    tech: ['Python', 'YOLOv8', 'Computer Vision', 'OpenCV', 'PyTorch', 'Machine Learning'],
    github: 'https://github.com/Dhinesh-Thiyagarajan/mushroom_detection',
  },
  {
    title: 'Interview Audio Transcript & Summarization App',
    description:
      'AI-powered application for transcribing and summarizing interview audio for HAL.',
    longDescription:
      'Developed for Hindustan Aeronautics Limited (HAL) to streamline interview processes. The application uses speech-to-text technology to transcribe audio interviews and employs AI summarization to extract key insights and candidate highlights, improving HR efficiency and decision-making.',
    tech: ['Python', 'OpenAI Whisper', 'AI/ML', 'Audio Processing', 'NLP'],
    github: 'https://github.com/Dhinesh-Thiyagarajan/audio_transcript_summarization',
  },
  {
    title: 'Top-Down 2D Game for DSU International Affairs',
    description:
      'Interactive 2D campus navigation game developed for Dayananda Sagar University.',
    longDescription:
      'Led development of a 2D top-down game for DSU International Affairs as a client project. Created an interactive digital twin of the college campus, allowing users to navigate and explore the university grounds virtually. The game serves as an engaging tool for campus orientation and virtual tours.',
    tech: ['Godot Engine', 'Game Development', '2D Graphics', 'Level Design'],
    github: 'https://github.com/Dhinesh-Thiyagarajan',
  },
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
  const [visibleProjects, setVisibleProjects] = useState<number[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-project-index') || '0')
            setVisibleProjects(prev => [...new Set([...prev, index])])
          }
        })
      },
      { threshold: 0.2 }
    )

    const projects = document.querySelectorAll('[data-project-index]')
    projects.forEach(project => observer.observe(project))

    return () => observer.disconnect()
  }, [])

  return (
    <section id="projects" className="relative py-36 bg-black overflow-hidden">
      {/* Enhanced Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.25, 0.15]
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute top-1/2 left-1/2 w-[1000px] h-[1000px] -translate-x-1/2 -translate-y-1/2 bg-purple-600/15 blur-[200px]" 
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Enhanced Heading */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <motion.h2 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl font-bold mb-5"
          >
            <span className="text-white">Projects</span>{' '}
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-purple-400"
            >
              & Work
            </motion.span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            Selected projects showcasing my interest in databases,
            application development, and problem-solving.
          </motion.p>
        </motion.div>

        {/* Enhanced Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => {
            const isVisible = visibleProjects.includes(index)
            
            return (
              <motion.div
                key={project.title}
                data-project-index={index}
                initial={{ opacity: 0, y: 60, scale: 0.9 }}
                animate={isVisible ? { 
                  opacity: 1, 
                  y: 0, 
                  scale: 1 
                } : {}}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.15,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                whileHover={{ 
                  y: -12,
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
                className="
                  group relative rounded-3xl p-8
                  bg-white/5 backdrop-blur-xl
                  border border-purple-500/20
                  transition-all duration-500
                  hover:border-purple-400
                  hover:shadow-[0_0_60px_rgba(168,85,247,0.35)]
                "
              >
                {/* Enhanced Glow */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={isVisible ? { opacity: 1 } : {}}
                  transition={{ duration: 1, delay: index * 0.15 + 0.5 }}
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-tr from-purple-600/20 via-transparent to-purple-400/20 pointer-events-none" 
                />

                <div className="relative flex flex-col h-full">
                  <motion.h3 
                    initial={{ opacity: 0, y: 20 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.15 + 0.3 }}
                    className="text-xl font-semibold text-white mb-4 group-hover:text-purple-300 transition-colors duration-300"
                  >
                    {project.title}
                  </motion.h3>

                  <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.15 + 0.4 }}
                    className="text-gray-300 text-sm mb-6"
                  >
                    {project.description}
                  </motion.p>

                  {/* Enhanced Tech Stack */}
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={isVisible ? { opacity: 1 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.15 + 0.5 }}
                    className="flex flex-wrap gap-2 mb-6"
                  >
                    {project.tech.map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                        transition={{ 
                          duration: 0.4, 
                          delay: index * 0.15 + 0.6 + techIndex * 0.05,
                          type: "spring",
                          stiffness: 200
                        }}
                        className="px-3 py-1 text-xs rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20 hover:bg-purple-500/20 transition-colors duration-200"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </motion.div>

                  {/* Enhanced CTA */}
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.15 + 0.7 }}
                    className="mt-auto flex gap-6"
                  >
                    <motion.button
                      onClick={() => setActiveProject(project)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="
                        px-5 py-2 text-sm rounded-full
                        bg-purple-600 text-white
                        transition-all duration-300
                        hover:bg-purple-500
                        hover:shadow-[0_0_30px_rgba(168,85,247,0.8)]
                      "
                    >
                      View Details
                    </motion.button>

                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05, x: 5 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center gap-2 text-sm text-purple-300 hover:text-white transition-colors duration-200"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </motion.a>
                  </motion.div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* Enhanced MODAL */}
      {activeProject && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4"
          onClick={() => setActiveProject(null)}
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative max-w-lg w-full rounded-3xl bg-[#0B0B14] border border-purple-500/30 p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <motion.button
              onClick={() => setActiveProject(null)}
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors duration-200"
            >
              <X />
            </motion.button>

            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-2xl font-semibold text-white mb-4"
            >
              {activeProject.title}
            </motion.h3>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-300 text-sm mb-6"
            >
              {activeProject.longDescription}
            </motion.p>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-2 mb-6"
            >
              {activeProject.tech.map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ 
                    duration: 0.3, 
                    delay: 0.4 + index * 0.05,
                    type: "spring",
                    stiffness: 200
                  }}
                  className="px-3 py-1 text-xs rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20"
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>

            <motion.a
              href={activeProject.github}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              whileHover={{ scale: 1.05, x: 5 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 text-purple-400 hover:text-white transition-colors duration-200"
            >
              <Github className="w-4 h-4" />
              View on GitHub
            </motion.a>
          </motion.div>
        </motion.div>
      )}
    </section>
  )
}
