import { motion } from 'framer-motion'
import type { Variants } from 'framer-motion'
import { ArrowRight, ChevronDown, Shield, Users, Award } from 'lucide-react'

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
}

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-[linear-gradient(135deg,#0d1f3c_0%,#0F2851_50%,#1a3a6e_100%)] flex items-center overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#0EA5E9]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-[#F59E0B]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 lg:pt-32 lg:pb-24 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium px-4 py-2 rounded-full mb-6">
              <Users className="w-4 h-4 text-[#F59E0B]" />
              Mais de 50.000 famílias protegidas
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-[1.1] tracking-tight mb-6"
            >
              Proteja o que mais
              <br />
              importa{' '}
              <span className="bg-linear-to-r from-sky to-amber bg-clip-text text-transparent">para você</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl text-white/70 leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0"
            >
              Seguros completos com o melhor custo-benefício do mercado. Contratação 100% digital, atendimento 24/7 e resposta em até 2 horas.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <a
                href="#cotacao"
                className="inline-flex items-center justify-center gap-2 bg-[#F59E0B] hover:bg-[#D97706] text-[#0F2851] font-bold px-8 py-4 rounded-xl text-base transition-all hover:shadow-xl hover:-translate-y-0.5 group"
              >
                Solicitar Cotação Gratuita
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#servicos"
                className="inline-flex items-center justify-center gap-2 border-2 border-[#0EA5E9] text-white hover:bg-[#0EA5E9]/10 font-semibold px-8 py-4 rounded-xl text-base transition-all"
              >
                Conheça Nossos Planos
              </a>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              variants={itemVariants}
              className="mt-10 flex items-center gap-6 justify-center lg:justify-start flex-wrap"
            >
              {[
                { icon: Shield, text: 'Regulamentada SUSEP' },
                { icon: Award, text: '18+ anos no mercado' },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2 text-white/60 text-sm">
                  <Icon className="w-4 h-4 text-[#0EA5E9]" />
                  {text}
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — decorative illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: 'easeOut', delay: 0.3 }}
            className="hidden lg:flex items-center justify-center relative"
          >
            {/* Main shield */}
            <div className="relative">
              <div className="w-80 h-80 xl:w-96 xl:h-96 bg-white/5 backdrop-blur-sm border border-white/10 rounded-[40%] flex items-center justify-center shadow-2xl">
                <Shield className="w-40 h-40 xl:w-48 xl:h-48 text-white/10" strokeWidth={0.5} />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Shield className="w-32 h-32 xl:w-40 xl:h-40 text-[#F59E0B]/30" strokeWidth={1} />
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Shield className="w-20 h-20 xl:w-28 xl:h-28 text-[#0EA5E9]" strokeWidth={1.5} />
                </div>
              </div>

              {/* Floating cards */}
              <motion.div
                animate={{ y: [-6, 6, -6] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-8 -left-8 bg-white rounded-2xl p-4 shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                    <Shield className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500">Sinistro aprovado</div>
                    <div className="text-sm font-bold text-gray-800">R$ 12.500,00</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [6, -6, 6] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-4 shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#FEF3C7] rounded-xl flex items-center justify-center">
                    <Award className="w-5 h-5 text-[#F59E0B]" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500">Satisfação</div>
                    <div className="text-sm font-bold text-gray-800">98% aprovação</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40"
      >
        <span className="text-xs">Role para baixo</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  )
}
