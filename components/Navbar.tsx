'use client'

import { useEffect, useRef, useState } from 'react'
import Magnetic from './Magnetic'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const lastScrollY = useRef(0)

  useEffect(() => {
    const onScroll = () => {
      const current = window.scrollY
      setScrolled(current > 40)

      if (current > lastScrollY.current && current > 120) {
        setHidden(true)
      } else {
        setHidden(false)
      }

      lastScrollY.current = current
    }

    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`
        fixed top-0 w-full z-50
        transition-transform duration-300
        ${hidden ? '-translate-y-full' : 'translate-y-0'}
        ${scrolled
          ? 'bg-black/80 backdrop-blur-xl'
          : 'bg-black/40 backdrop-blur-md'}
      `}
    >
      {/* bottom glow line */}
      <div className="absolute bottom-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
        {/* LOGO */}
        <a href="#hero" className="text-xl font-bold text-purple-400">
          DT
        </a>

        {/* NAV LINKS */}
        <div className="hidden md:flex gap-10">
          {[
            'about',
            'skills',
            'projects',
            'education',
            'certifications',
<<<<<<< HEAD
            'experience',
=======
>>>>>>> e0d8f9a3329178977c4456887931508233f82e9f
            'contact',
          ].map((id) => (
            <a
              key={id}
              href={`#${id}`}
              className="
                text-gray-300 capitalize
                transition-colors duration-300
                hover:text-white
                relative
                after:absolute after:left-0 after:-bottom-1
                after:h-[2px] after:w-0
                after:bg-purple-400
                after:transition-all after:duration-300
                hover:after:w-full
              "
            >
              {id}
            </a>
          ))}
        </div>

        {/* CTA BUTTONS */}
        <div className="flex gap-4">
          <Magnetic strength={0.25}>
            <a
              href="/Dhinesh-resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="
                px-5 py-2.5 rounded-full
                border border-purple-400 text-purple-300
                transition-all duration-300
                hover:bg-purple-500 hover:text-black
                hover:shadow-[0_0_25px_rgba(168,85,247,0.5)]
              "
            >
              View Resume
            </a>
          </Magnetic>

          <Magnetic strength={0.35}>
            <a
              href="#contact"
              className="
                px-5 py-2.5 rounded-full
                bg-purple-600 text-white
                transition-all duration-300
                hover:bg-purple-500
                hover:shadow-[0_0_25px_rgba(168,85,247,0.6)]
              "
            >
              Get In Touch
            </a>
          </Magnetic>
        </div>
      </div>
    </nav>
  )
}
