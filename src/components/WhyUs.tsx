import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { WHY_US } from '../data/content'
import type { DifferentialItem } from '../data/content'

interface DifferentialCardProps {
  item: DifferentialItem
  index: number
}

function DifferentialCard({ item, index }: DifferentialCardProps) {
  const { Icon, title, description } = item
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -4 }}
      className="group bg-white rounded-2xl p-6 border border-gray-100 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] hover:border-[#0EA5E9]/30 transition-all duration-300 cursor-default"
    >
      <div className="w-12 h-12 bg-[#EFF6FF] rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#0EA5E9]/10 transition-colors">
        <Icon className="w-6 h-6 text-[#0EA5E9]" />
      </div>
      <h3 className="text-base font-bold text-[#0F2851] mb-2">{title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
    </motion.div>
  )
}

export default function WhyUs() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="por-que-nos" className="py-20 lg:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <span className="inline-block text-[#0EA5E9] text-sm font-bold uppercase tracking-widest mb-3">
              Por Que Nos Escolher
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0F2851] leading-tight mb-6">
              Sua confiança é nossa
              <br />
              <span className="bg-linear-to-r from-sky to-amber bg-clip-text text-transparent">maior conquista</span>
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-8">
              Há mais de 18 anos protegendo famílias e empresas com transparência, agilidade e o melhor atendimento do mercado de seguros.
            </p>

            {/* Watermark number */}
            <div className="relative">
              <span className="absolute -top-8 -left-4 text-[160px] font-black text-[#F59E0B]/10 leading-none select-none pointer-events-none">
                4
              </span>
              <div className="relative space-y-3">
                {WHY_US.map((item, i) => (
                  <div key={item.title} className="flex items-start gap-3">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-[#F59E0B] mt-2 shrink-0" />
                      <span className="text-gray-700 font-semibold">{item.title}</span>
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>

            <motion.a
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
              href="#cotacao"
              className="inline-flex items-center gap-2 mt-8 bg-[#0F2851] hover:bg-[#1a3a6e] text-white font-bold px-7 py-3.5 rounded-xl transition-all hover:shadow-lg hover:-translate-y-0.5"
            >
              Conhecer Nossos Diferenciais
            </motion.a>
          </motion.div>

          {/* Right — 2x2 grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-5"
          >
            {WHY_US.map((item, index) => (
              <DifferentialCard key={item.title} item={item} index={index} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
