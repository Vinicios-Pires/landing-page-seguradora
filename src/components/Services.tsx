import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import type { Variants } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { SERVICES } from '../data/content'
import type { ServiceItem } from '../data/content'

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

interface ServiceCardProps {
  item: ServiceItem
}

function ServiceCard({ item }: ServiceCardProps) {
  const { Icon, title, description } = item
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -6 }}
      className="group bg-white rounded-2xl p-6 border border-gray-100 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transition-all duration-300 cursor-default border-l-4 border-l-[#F59E0B]"
    >
      <div className="w-12 h-12 bg-[#0F2851] rounded-xl flex items-center justify-center mb-5 group-hover:bg-[#1a3a6e] transition-colors">
        <Icon className="w-6 h-6 text-[#0EA5E9]" />
      </div>
      <h3 className="text-lg font-bold text-[#0F2851] mb-2">{title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed mb-4">{description}</p>
      <button className="flex items-center gap-1.5 text-[#0EA5E9] text-sm font-semibold hover:gap-3 transition-all group-hover:text-[#0284c7]">
        Saiba mais
        <ArrowRight className="w-4 h-4" />
      </button>
    </motion.div>
  )
}

export default function Services() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section id="servicos" ref={ref} className="py-20 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-[#0EA5E9] text-sm font-bold uppercase tracking-widest mb-3">
            Nossas Coberturas
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0F2851] mb-4 leading-tight">
            Proteção para cada
            <br />
            <span className="bg-linear-to-r from-sky to-amber bg-clip-text text-transparent">momento da sua vida</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
            Soluções completas desenvolvidas para proteger você, sua família e seu patrimônio em qualquer situação.
          </p>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {SERVICES.map((item) => (
            <ServiceCard key={item.title} item={item} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
