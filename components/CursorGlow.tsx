'use client'

import { useEffect, useState } from 'react'

export default function CursorGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [])

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[9999]"
      style={{
        background: `radial-gradient(
          600px at ${position.x}px ${position.y}px,
          rgba(168, 85, 247, 0.15),
          transparent 80%
        )`,
      }}
    />
  )
}
