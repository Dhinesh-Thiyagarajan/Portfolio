'use client'

import { Mail, Linkedin, Github, MessageCircle } from 'lucide-react'
import { useRef } from 'react'

/* ---------- magnetic hook (UNCHANGED LOGIC) ---------- */
function useMagnetic() {
  const ref = useRef<HTMLDivElement | HTMLAnchorElement | null>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!ref.current) return

    const rect = ref.current.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2

    ref.current.style.transform = `translate(${x * 0.06}px, ${y * 0.06}px)`
  }

  const reset = () => {
    if (!ref.current) return
    ref.current.style.transform = 'translate(0, 0)'
  }

  return { ref, handleMouseMove, reset }
}

export default function Contact() {
  return (
    <section id="contact" className="relative py-36 bg-black">
      {/* background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-1/2 w-[900px] h-[500px] -translate-x-1/2 -translate-y-1/2 bg-purple-600/20 blur-[180px]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">
            <span className="text-white">Let&apos;s </span>
            <span className="text-purple-400">Connect</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            I&apos;m always open to discussing projects, opportunities, or just
            connecting with like-minded people.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {[
            {
              icon: Mail,
              title: 'Email',
              text: 'dhineshtv@gmail.com',
              href: 'mailto:dhineshtv@gmail.com',
            },
            {
              icon: Linkedin,
              title: 'LinkedIn',
              text: 'Connect professionally',
              href: 'http://www.linkedin.com/in/dhinesh-thiyagarajan-8a1265273',
            },
            {
              icon: Github,
              title: 'GitHub',
              text: 'View my code & projects',
              href: 'https://github.com/Dhinesh-Thiyagarajan',
            },
            {
              icon: MessageCircle,
              title: 'WhatsApp',
              text: '+91 84311 14223',
              href: 'https://wa.me/918431114223',
            },
          ].map((item, i) => {
            const magnetic = useMagnetic()
            const Icon = item.icon

            return (
              <a
                key={i}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                ref={magnetic.ref as React.RefObject<HTMLAnchorElement>}
                onMouseMove={magnetic.handleMouseMove}
                onMouseLeave={magnetic.reset}
                className="
                  group relative rounded-2xl p-6
                  bg-white/5 backdrop-blur-xl
                  border border-white/10
                  hover:border-purple-500/50
                  hover:bg-purple-500/10
                  transition-all duration-300
                "
              >
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="p-4 rounded-xl bg-purple-500/20 text-purple-400 group-hover:scale-110 transition">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-400">{item.text}</p>
                </div>
              </a>
            )
          })}
        </div>

        <MagneticCTA />
      </div>
    </section>
  )
}

/* ---------- CTA ---------- */
function MagneticCTA() {
  const magnetic = useMagnetic()

  return (
    <div className="text-center">
      <a
        href="https://wa.me/918431114223"
        target="_blank"
        rel="noopener noreferrer"
        ref={magnetic.ref as React.RefObject<HTMLAnchorElement>}
        onMouseMove={magnetic.handleMouseMove}
        onMouseLeave={magnetic.reset}
        className="
          inline-block px-8 py-4 rounded-full
          bg-purple-500 text-white font-semibold
          hover:bg-purple-400
          hover:shadow-[0_0_40px_rgba(168,85,247,0.6)]
          transition-all duration-300
        "
      >
        Start a Conversation
      </a>
    </div>
  )
}
