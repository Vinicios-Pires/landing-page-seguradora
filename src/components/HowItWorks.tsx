import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { HOW_IT_WORKS } from '../data/content'
import type { StepItem } from '../data/content'

interface StepCardProps {
  item: StepItem
  index: number
  isLast: boolean
}

function StepCard({ item, index, isLast }: StepCardProps) {
  const { number, Icon, title, description } = item
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.2, ease: 'easeOut' }}
      className="relative flex flex-col items-center text-center lg:items-start lg:text-left"
    >
      {/* Connector line (desktop) */}
      {!isLast && (
        <div className="hidden lg:block absolute top-10 left-[calc(50%+2.5rem)] right-[-calc(50%-2.5rem)] h-px border-t-2 border-dashed border-[#0EA5E9]/30" />
      )}

      {/* Step number + icon */}
      <div className="relative mb-6">
        <div className="w-20 h-20 bg-[#0F2851] rounded-2xl flex items-center justify-center shadow-lg">
          <Icon className="w-9 h-9 text-[#0EA5E9]" />
        </div>
        <div className="absolute -top-3 -right-3 w-8 h-8 bg-[#F59E0B] rounded-full flex items-center justify-center">
          <span className="text-[#0F2851] text-xs font-black">{number}</span>
        </div>
      </div>

      <h3 className="text-lg font-bold text-[#0F2851] mb-3">{title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed max-w-xs mx-auto lg:mx-0">{description}</p>
    </motion.div>
  )
}

export default function HowItWorks() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="como-funciona" ref={ref} className="py-20 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-[#0EA5E9] text-sm font-bold uppercase tracking-widest mb-3">
            Simples e Rápido
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0F2851] mb-4 leading-tight">
            Como funciona?
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
            Em apenas 3 passos simples você já está protegido com a melhor cobertura do mercado.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
          {HOW_IT_WORKS.map((item, index) => (
            <StepCard
              key={item.number}
              item={item}
              index={index}
              isLast={index === HOW_IT_WORKS.length - 1}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-14"
        >
          <a
            href="#cotacao"
            className="inline-flex items-center gap-2 bg-[#F59E0B] hover:bg-[#D97706] text-[#0F2851] font-bold px-8 py-4 rounded-xl text-base transition-all hover:shadow-xl hover:-translate-y-0.5"
          >
            Começar agora — é gratuito
          </a>
        </motion.div>
      </div>
    </section>
  )
}
