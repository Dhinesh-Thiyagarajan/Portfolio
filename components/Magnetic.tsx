'use client'

import { useRef } from 'react'

type MagneticProps = {
  children: React.ReactNode
  strength?: number
}

export default function Magnetic({ children, strength = 0.25 }: MagneticProps) {
  const ref = useRef<HTMLElement>(null)

  const onMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!ref.current) return

    const rect = ref.current.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2

    ref.current.style.transform = `translate(${x * strength}px, ${
      y * strength
    }px)`
  }

  const onMouseLeave = () => {
    if (!ref.current) return
    ref.current.style.transform = `translate(0px, 0px)`
  }

  return (
    <span
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className="inline-block transition-transform duration-300 ease-out"
    >
      {children}
    </span>
  )
}
