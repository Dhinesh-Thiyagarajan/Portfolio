'use client'

import { useEffect, useRef, useState } from 'react'
import { Brain, Database, Code2 } from 'lucide-react'

/* ---------- DATA ---------- */
const certifications = [
  {
    title: 'Retrieval-Augmented Generation (RAG) Specialization',
    org: 'DeepLearning.AI',
    year: '2024',
    category: 'AI & RAG',
    description:
      'Designing LLM systems that retrieve, ground, and generate accurate responses using vector databases.',
    icon: Brain,
  },
  {
    title: 'Large Language Models & Prompt Engineering',
    org: 'OpenAI',
    year: '2024',
    category: 'AI & RAG',
    description:
      'Prompt design, instruction tuning, and optimization techniques for large language models.',
    icon: Brain,
  },
  {
    title: 'LangChain for LLM Application Development',
    org: 'LangChain',
    year: '2024',
    category: 'AI & RAG',
    description:
      'Building production-ready LLM pipelines using chains, agents, tools, and memory.',
    icon: Brain,
  },
  {
    title: 'AI Agents & Workflow Automation',
    org: 'Microsoft Learn',
    year: '2024',
    category: 'AI & RAG',
    description:
      'Creating autonomous agents and automations powered by LLM reasoning.',
    icon: Brain,
  },
  {
    title: 'PostgreSQL Database Design & Optimization',
    org: 'Coursera',
    year: '2023',
    category: 'Databases',
    description:
      'Schema design, indexing strategies, query optimization, and performance tuning.',
    icon: Database,
  },
  {
    title: 'Advanced SQL for Data Analysis',
    org: 'HackerRank',
    year: '2023',
    category: 'Databases',
    description:
      'Complex queries, joins, subqueries, and analytical SQL patterns.',
    icon: Database,
  },
  {
    title: 'MySQL Performance Tuning',
    org: 'Udemy',
    year: '2023',
    category: 'Databases',
    description:
      'Optimizing MySQL queries, indexes, and server configurations.',
    icon: Database,
  },
  {
    title: 'Modern React with Hooks & Context',
    org: 'Meta',
    year: '2024',
    category: 'Frontend',
    description:
      'Component architecture, hooks, state management, and scalable UI patterns.',
    icon: Code2,
  },
  {
    title: 'Next.js & Full-Stack Web Development',
    org: 'Vercel',
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
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => {
            const Icon = cert.icon
            return (
              <div
                key={index}
                className={`
                  group rounded-2xl p-6
                  bg-white/5 backdrop-blur-md
                  border border-purple-500/20
                  transition-all duration-300 ease-out
                  hover:-translate-y-2
                  hover:border-purple-400
                  hover:shadow-[0_0_40px_rgba(168,85,247,0.4)]
                  ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
                `}
                style={{ transitionDelay: `${index * 70}ms` }}
              >
                {/* icon */}
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-purple-500/15 mb-4">
                  <Icon className="w-6 h-6 text-purple-400" />
                </div>

                {/* badge */}
                <span className="inline-block mb-3 px-3 py-1 text-xs rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/30">
                  {cert.category}
                </span>

                <h3 className="text-lg font-semibold text-white mb-2">
                  {cert.title}
                </h3>

                <p className="text-sm text-gray-400 mb-3">
                  {cert.org}
                </p>

                <span className="text-xs text-purple-300">
                  {cert.year}
                </span>

                {/* description */}
                <p className="mt-4 text-sm text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
