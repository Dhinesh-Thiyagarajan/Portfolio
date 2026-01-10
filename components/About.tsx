'use client'
import { motion } from 'framer-motion'

export default function About() {
  const specializations = [
    'LLMs & Fine-tuning (LoRA, PEFT, Deepspeed, Unsloth)',
    'Retrieval-Augmented Generation (RAG)',
    'NER & Medical Text Summarization',
    'AI Automation & Low-code / No-code Tools',
    'LLM APIs (OpenAI, Gemini, Groq, etc.)',
    'MCP Servers & LangChain Pipelines',
  ]

  return (
    <section id="about" className="relative py-36 bg-black">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 w-[900px] h-[900px] -translate-x-1/2 -translate-y-1/2 bg-purple-600/10 blur-[160px]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        {/* ===== SECTION HEADING ===== */}
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold">
            <span className="text-white">About</span>{' '}
            <span className="text-purple-400">Me</span>
          </h2>
          <div className="w-20 h-1 bg-purple-400 mx-auto mt-4 rounded-full" />
        </div>

        {/* ===== ABOUT CARD ===== */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="
            relative rounded-3xl p-12
            bg-[#0B0B14]
            border border-purple-500/20
            transition-all duration-500
            hover:border-purple-400
            hover:shadow-[0_0_80px_rgba(168,85,247,0.25)]
          "
        >
          {/* Hover glow */}
          <div
            className="
              absolute inset-0 rounded-3xl
              opacity-0 hover:opacity-100
              transition-opacity duration-500
              bg-gradient-to-tr from-purple-600/20 via-transparent to-purple-400/20
              pointer-events-none
            "
          />

          <div className="relative grid md:grid-cols-2 gap-12 items-center">
            {/* FLOATING IMAGE */}
            <div className="flex justify-center">
              <motion.div
                animate={{
                  y: [0, -12, 0],
                  rotate: [0, 1.2, -1.2, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="relative"
              >
                <div className="absolute -inset-2 rounded-full bg-gradient-to-tr from-purple-600/40 to-purple-400/10 blur-md" />

                <img
                  src="/pfp.JPEG"
                  alt="Dhinesh Thiyagarajan"
                  className="
                    relative w-72 h-72 object-cover rounded-full
                    border border-purple-500/30
                    shadow-xl
                  "
                />
              </motion.div>
            </div>

            {/* TEXT */}
            <div>
              <p className="text-xl font-semibold text-cyan-400 mb-6">
                B.Tech in Computer Science and Technology{' '}
                <span className="text-gray-300 font-normal">
                  from Dayananda Sagar University
                </span>
              </p>

              <p className="text-gray-300 leading-relaxed text-lg">
                I am a Computer Science student with strong interests in artificial
                intelligence, databases, and modern software development. I enjoy
                building practical, data-driven systems and scalable products that
                solve real-world problems.
              </p>
            </div>
          </div>
        </motion.div>

        {/* ===== SPECIALIZATIONS ===== */}
        <div className="mt-24">
          <h3 className="text-2xl font-semibold text-purple-400 mb-10 text-center">
            I specialize in:
          </h3>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.12 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {specializations.map((item) => (
              <motion.div
                key={item}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.45, ease: 'easeOut' }}
                className="
                  group flex items-start gap-3
                  p-5 rounded-xl
                  bg-[#0F0F1A]
                  border border-purple-800/30
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:border-purple-500
                  hover:shadow-[0_0_30px_rgba(168,85,247,0.35)]
                "
              >
                <span
                  className="
                    text-purple-400 text-lg
                    transition-transform duration-300
                    group-hover:scale-125
                  "
                >
                  ✦
                </span>

                <span
                  className="
                    text-gray-300
                    transition-colors duration-300
                    group-hover:text-white
                  "
                >
                  {item}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
