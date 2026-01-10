'use client'

export default function Footer() {
  return (
    <footer className="relative mt-32 py-10">
      {/* soft background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-1/2 w-[600px] h-[200px] -translate-x-1/2 -translate-y-1/2 bg-purple-600/10 blur-[120px]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="flex justify-center">
          <p
            className="
              text-sm tracking-wide
              text-gray-400
              transition-colors duration-300
              hover:text-purple-400
            "
          >
            BUILT BY{' '}
            <span className="font-semibold text-gray-300">
              DHINESH.T
            </span>{' '}
            © 2026
          </p>
        </div>
      </div>
    </footer>
  )
}
