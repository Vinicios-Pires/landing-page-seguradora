import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import type { Variants } from 'framer-motion'
import { Star } from 'lucide-react'
import { TESTIMONIALS } from '../data/content'
import type { TestimonialItem } from '../data/content'

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

function TestimonialCard({ item }: { item: TestimonialItem }) {
  const { name, city, initials, rating, product, text } = item
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -6 }}
      className="relative bg-white rounded-2xl p-7 border border-gray-100 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transition-all duration-300 border-t-4 border-t-[#F59E0B]"
    >
      {/* Quote mark */}
      <span className="absolute top-5 right-6 text-6xl font-black text-[#F59E0B]/15 leading-none select-none pointer-events-none">
        "
      </span>

      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} className="w-4 h-4 text-[#F59E0B] fill-[#F59E0B]" />
        ))}
      </div>

      {/* Text */}
      <p className="text-gray-600 text-sm leading-relaxed mb-6 italic relative z-10">
        "{text}"
      </p>

      {/* Product badge */}
      <span className="inline-block bg-[#EFF6FF] text-[#0EA5E9] text-xs font-semibold px-3 py-1 rounded-full mb-5">
        {product}
      </span>

      {/* Author */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-[#0F2851] rounded-full flex items-center justify-center shrink-0">
          <span className="text-white text-sm font-bold">{initials}</span>
        </div>
        <div>
          <div className="text-sm font-bold text-[#0F2851]">{name}</div>
          <div className="text-xs text-gray-400">{city}</div>
        </div>
      </div>
    </motion.div>
  )
}

export default function Testimonials() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.15 })

  return (
    <section id="depoimentos" ref={ref} className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-[#0EA5E9] text-sm font-bold uppercase tracking-widest mb-3">
            Depoimentos
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0F2851] mb-4 leading-tight">
            O que nossos clientes
            <br />
            <span className="bg-linear-to-r from-sky to-amber bg-clip-text text-transparent">dizem sobre nós</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Mais de 50.000 clientes satisfeitos são a nossa melhor recomendação.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {TESTIMONIALS.map((item) => (
            <TestimonialCard key={item.name} item={item} />
          ))}
        </motion.div>

        {/* Overall rating */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 p-6 bg-gray-50 rounded-2xl border border-gray-100"
        >
          <div className="flex gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="w-6 h-6 text-[#F59E0B] fill-[#F59E0B]" />
            ))}
          </div>
          <div className="text-center sm:text-left">
            <span className="text-2xl font-black text-[#0F2851]">4.9 / 5.0</span>
            <span className="text-gray-500 text-sm ml-2">— Avaliação média</span>
          </div>
          <div className="hidden sm:block w-px h-8 bg-gray-200" />
          <p className="text-gray-500 text-sm text-center sm:text-left">
            Baseado em <strong className="text-[#0F2851]">+12.000 avaliações</strong> verificadas
          </p>
        </motion.div>
      </div>
    </section>
  )
}
