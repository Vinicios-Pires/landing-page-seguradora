import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Shield, Menu, X, ArrowRight } from 'lucide-react'
import { NAV_LINKS } from '../data/content'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setIsMobileOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0F2851]/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group" aria-label="Vanguarda Seguros">
            <div className="w-9 h-9 bg-[#F59E0B] rounded-lg flex items-center justify-center shadow-md group-hover:bg-[#D97706] transition-colors">
              <Shield className="w-5 h-5 text-[#0F2851]" strokeWidth={2.5} />
            </div>
            <span className="text-white font-bold text-lg leading-tight">
              Vanguarda<br />
              <span className="text-[#0EA5E9] text-sm font-medium">Seguros</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-white/80 hover:text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors hover:bg-white/10 cursor-pointer"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Desktop CTA */}
          <a
            href="#cotacao"
            className="hidden lg:flex items-center gap-2 bg-[#F59E0B] hover:bg-[#D97706] text-[#0F2851] font-bold px-5 py-2.5 rounded-lg text-sm transition-all hover:shadow-lg hover:-translate-y-0.5"
          >
            Solicitar Cotação
            <ArrowRight className="w-4 h-4" />
          </a>

          {/* Hamburger */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="lg:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
            aria-label={isMobileOpen ? 'Fechar menu' : 'Abrir menu'}
          >
            {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="lg:hidden bg-[#0F2851] border-t border-white/10 overflow-hidden"
          >
            <div className="px-4 py-4 flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-white/80 hover:text-white text-left px-4 py-3.5 rounded-lg text-base font-medium transition-colors hover:bg-white/10 cursor-pointer min-h-[44px]"
                >
                  {link.label}
                </button>
              ))}
              <a
                href="#cotacao"
                onClick={() => setIsMobileOpen(false)}
                className="mt-3 flex items-center justify-center gap-2 bg-[#F59E0B] hover:bg-[#D97706] text-[#0F2851] font-bold px-5 py-3.5 rounded-lg text-base transition-colors min-h-[44px]"
              >
                Solicitar Cotação
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
