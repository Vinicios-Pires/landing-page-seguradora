import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { STATS } from '../data/content'
import { useCountUp } from '../hooks/useCountUp'

interface StatItemProps {
  value: number
  suffix: string
  label: string
  isActive: boolean
  index: number
}

function StatItem({ value, suffix, label, isActive, index }: StatItemProps) {
  const count = useCountUp(value, 2000, isActive)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isActive ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
      className="flex flex-col items-center text-center px-4 py-6 lg:py-8"
    >
      <span className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#F59E0B] tabular-nums">
        {count.toLocaleString('pt-BR')}{suffix}
      </span>
      <span className="mt-2 text-sm sm:text-base text-white/70 font-medium uppercase tracking-wider">
        {label}
      </span>
    </motion.div>
  )
}

export default function StatsBar() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="bg-[#0d1f3c] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-white/10">
          {STATS.map((stat, index) => (
            <StatItem
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              isActive={isInView}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
