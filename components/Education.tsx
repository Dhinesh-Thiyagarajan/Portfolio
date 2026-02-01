'use client'

import { useEffect, useRef, useState } from 'react'

export default function Education() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const futureRef = useRef<HTMLDivElement>(null)

  const [progress, setProgress] = useState(0)
  const [futureVisible, setFutureVisible] = useState(false)

  /* ---------- Scroll-based progress fill ---------- */
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return

      const rect = sectionRef.current.getBoundingClientRect()
      const windowHeight = window.innerHeight

      const start = windowHeight * 0.9
      const end = windowHeight * 0.2

      const rawProgress = (start - rect.top) / (start - end)
      const clamped = Math.min(Math.max(rawProgress, 0), 1)

      setProgress(clamped)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  /* ---------- Future card animation ---------- */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setFutureVisible(true),
      { threshold: 0.4 }
    )

    if (futureRef.current) observer.observe(futureRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="education"
      ref={sectionRef}
      className="relative py-32 bg-black overflow-hidden"
    >
      {/* background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-1/2 w-[900px] h-[900px] -translate-x-1/2 -translate-y-1/2 bg-purple-600/10 blur-[160px]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        {/* heading */}
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold">
            <span className="text-white">Education</span>{' '}
            <span className="text-purple-400">Timeline</span>
          </h2>
          <div className="w-20 h-1 bg-purple-400 mx-auto mt-4 rounded-full" />
        </div>

        {/* timeline */}
        <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-10 md:gap-0">
          {/* base line */}
          <div className="hidden md:block absolute left-0 right-0 top-1/2 h-[2px] bg-purple-800/30" />
          <div className="block md:hidden absolute left-1/2 top-0 bottom-0 w-[2px] bg-purple-800/30" style={{transform:'translateX(-50%)'}} />

          {/* progress fill */}
          <div
            className="hidden md:block absolute left-0 top-1/2 h-[2px] bg-purple-400 shadow-[0_0_20px_rgba(168,85,247,0.6)] transition-all duration-300"
            style={{ width: `${progress * 100}%` }}
          />
          <div
            className="block md:hidden absolute left-1/2 top-0 bg-purple-400 shadow-[0_0_20px_rgba(168,85,247,0.6)] transition-all duration-300"
            style={{ height: `${progress * 100}%`, width: '2px', transform:'translateX(-50%)' }}
          />

          {/* shimmer overlay */}
          <div className="hidden md:block absolute left-0 right-0 top-1/2 h-[2px] overflow-hidden pointer-events-none">
            <div
              className="h-full w-1/3 bg-gradient-to-r from-transparent via-purple-400/50 to-transparent animate-[shimmer_7s_linear_infinite]"
              style={{ transform: `translateX(${progress * 200}%)` }}
            />
          </div>
          <div className="block md:hidden absolute left-1/2 top-0 bottom-0 w-[2px] overflow-hidden pointer-events-none" style={{transform:'translateX(-50%)'}}>
            <div
              className="w-full h-1/3 bg-gradient-to-b from-transparent via-purple-400/50 to-transparent animate-[shimmer-vert_7s_linear_infinite]"
              style={{ transform: `translateY(${progress * 200}%)` }}
            />
          </div>

          {/* cards */}
          <div className="flex flex-col md:flex-row w-full">
            <TimelineCard
              title="Shantinikethan Institution of Education"
              subtitle="School Studies"
              time="Until 2020"
              mobile
            />

            <TimelineCard
              title="Jain PU College"
              subtitle="Pre-University Studies"
              time="2020 – 2022"
              mobile
            />

            <TimelineCard
              title="Dayananda Sagar University"
              subtitle="B.Tech – Computer Science & Technology"
              time="2023 – 2027"
              mobile
            />

            {/* future */}
            <div className="relative flex flex-col items-center w-full md:w-1/4 mt-10 md:mt-0">
              <div className="w-4 h-4 rounded-full bg-purple-400 shadow-[0_0_15px_rgba(168,85,247,0.8)] z-10" />

              <div
                ref={futureRef}
                className={`
                  mt-6 px-6 py-4 rounded-2xl
                  border border-dashed border-purple-500/50
                  bg-[#0B0B14]/60 backdrop-blur
                  text-center
                  transition-all duration-700
                  ${
                    futureVisible
                      ? 'opacity-100 translate-y-0 scale-100'
                      : 'opacity-0 translate-y-6 scale-95'
                  }
                `}
              >
                <h4 className="text-purple-400 font-semibold text-lg">
                  Unexplored Future
                </h4>
                <p className="text-gray-400 text-sm mt-1">
                  Learning • Growth • Innovation
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* shimmer animation */}
      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(300%);
          }
        }
        @keyframes shimmer-vert {
          0% {
            transform: translateY(-100%);
          }
          100% {
            transform: translateY(300%);
          }
        }
      `}</style>
    </section>
  )
}

/* ---------- Timeline Card ---------- */

function TimelineCard({
  title,
  subtitle,
  time,
  mobile,
}: {
  title: string
  subtitle: string
  time: string
  mobile?: boolean
}) {
  return (
    <div className="relative flex flex-col items-center w-full md:w-1/4 mb-10 md:mb-0">
      <div className="w-4 h-4 rounded-full bg-purple-400 shadow-[0_0_15px_rgba(168,85,247,0.8)] z-10" />

      <div
        className="
          mt-6 px-6 py-4 rounded-2xl
          bg-[#0B0B14]/70 backdrop-blur
          border border-purple-500/30
          text-center
          transition-all duration-300
          hover:-translate-y-1
          hover:border-purple-400
          hover:shadow-[0_0_30px_rgba(168,85,247,0.35)]
        "
      >
        <h4 className="text-white font-semibold">{title}</h4>
        <p className="text-purple-300 text-sm mt-1">{subtitle}</p>
        <p className="text-gray-400 text-xs mt-2">{time}</p>
      </div>
    </div>
  )
}
