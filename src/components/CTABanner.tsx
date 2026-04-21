import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, Phone, Shield } from 'lucide-react'

export default function CTABanner() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section id="cotacao" ref={ref} className="py-20 lg:py-32 bg-[linear-gradient(135deg,#0EA5E9_0%,#0F2851_100%)] relative overflow-hidden">
      {/* Background shield watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-5">
        <Shield className="w-[600px] h-[600px] text-white" strokeWidth={0.5} />
      </div>

      {/* Decorative blobs */}
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-white/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-[#F59E0B]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium px-4 py-2 rounded-full mb-6"
        >
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          Resposta em até 2 horas
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-white leading-tight mb-6"
        >
          Pronto para proteger o que
          <br />
          mais importa?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-white/70 text-lg sm:text-xl mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          Solicite sua cotação gratuita agora. Sem compromisso, sem burocracia. Nossa equipe entra em contato rapidamente com a melhor proposta.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="mailto:cotacao@vanguardaseguros.com.br"
            className="inline-flex items-center justify-center gap-2 bg-[#F59E0B] hover:bg-[#D97706] text-[#0F2851] font-bold px-8 py-4 rounded-xl text-base transition-all hover:shadow-2xl hover:-translate-y-0.5 group"
          >
            Solicitar Cotação Gratuita
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="tel:+551140028922"
            className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white hover:bg-white/10 font-semibold px-8 py-4 rounded-xl text-base transition-all"
          >
            <Phone className="w-5 h-5" />
            Falar com Consultor
          </a>
        </motion.div>

        {/* Trust row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-10 flex items-center justify-center gap-8 flex-wrap"
        >
          {[
            '✓ Sem compromisso',
            '✓ 100% gratuito',
            '✓ Resposta rápida',
          ].map((text) => (
            <span key={text} className="text-white/60 text-sm font-medium">
              {text}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
