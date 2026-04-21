import { useState, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { FAQ_ITEMS } from '../data/content'
import type { FAQItem } from '../data/content'

interface FAQItemProps {
  item: FAQItem
  isOpen: boolean
  onToggle: () => void
}

function FAQItemComponent({ item, isOpen, onToggle }: FAQItemProps) {
  return (
    <div className="border-b border-gray-100 last:border-0">
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        className="w-full flex items-center justify-between gap-4 py-5 text-left cursor-pointer group min-h-[44px]"
      >
        <span className={`text-base font-semibold transition-colors ${isOpen ? 'text-[#0EA5E9]' : 'text-[#0F2851] group-hover:text-[#1a3a6e]'}`}>
          {item.question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.25, ease: 'easeInOut' }}
          className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${isOpen ? 'bg-[#0EA5E9] text-white' : 'bg-gray-100 text-gray-400 group-hover:bg-gray-200'}`}
        >
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-gray-500 text-sm leading-relaxed pr-12">
              {item.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" ref={ref} className="py-20 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="lg:sticky lg:top-32"
          >
            <span className="inline-block text-[#0EA5E9] text-sm font-bold uppercase tracking-widest mb-3">
              FAQ
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0F2851] leading-tight mb-6">
              Perguntas
              <br />
              <span className="bg-linear-to-r from-sky to-amber bg-clip-text text-transparent">frequentes</span>
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-8">
              Tire suas dúvidas sobre nossos seguros. Se não encontrar o que procura, nossa equipe está disponível 24/7 para ajudar.
            </p>
            <a
              href="tel:+551140028922"
              className="inline-flex items-center gap-2 bg-[#0F2851] hover:bg-[#1a3a6e] text-white font-bold px-7 py-3.5 rounded-xl transition-all hover:shadow-lg hover:-translate-y-0.5"
            >
              Falar com um consultor
            </a>
          </motion.div>

          {/* Right — accordion */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
            className="bg-white rounded-2xl border border-gray-100 shadow-[var(--shadow-card)] px-6 py-2"
          >
            {FAQ_ITEMS.map((item, index) => (
              <FAQItemComponent
                key={index}
                item={item}
                isOpen={openIndex === index}
                onToggle={() => handleToggle(index)}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
