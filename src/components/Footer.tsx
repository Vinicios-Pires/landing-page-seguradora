import { Shield, Phone, Mail, MapPin } from 'lucide-react'

interface IconProps { className?: string }

function IconInstagram({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <circle cx="12" cy="12" r="3.5" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

function IconLinkedin({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

function IconFacebook({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}
import { FOOTER_LINKS, NAV_LINKS } from '../data/content'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#0F2851] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">

          {/* Column 1 — Brand */}
          <div>
            <a href="#" className="flex items-center gap-2.5 mb-5" aria-label="Vanguarda Seguros">
              <div className="w-9 h-9 bg-[#F59E0B] rounded-lg flex items-center justify-center">
                <Shield className="w-5 h-5 text-[#0F2851]" strokeWidth={2.5} />
              </div>
              <span className="text-white font-bold text-lg leading-tight">
                Vanguarda<br />
                <span className="text-[#0EA5E9] text-sm font-medium">Seguros</span>
              </span>
            </a>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              Há mais de 18 anos protegendo famílias e empresas com transparência, agilidade e o melhor atendimento do mercado.
            </p>
            {/* Social */}
            <div className="flex gap-3">
              {[
                { Icon: IconInstagram, label: 'Instagram' },
                { Icon: IconLinkedin, label: 'LinkedIn' },
                { Icon: IconFacebook, label: 'Facebook' },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-9 h-9 bg-white/10 hover:bg-[#0EA5E9] rounded-lg flex items-center justify-center transition-colors group"
                >
                  <Icon className="w-4 h-4 text-white/60 group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2 — Links rápidos */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-5">Links Rápidos</h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/50 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              {FOOTER_LINKS.empresa.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/50 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Seguros */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-5">Nossos Seguros</h4>
            <ul className="space-y-3">
              {FOOTER_LINKS.servicos.map((servico) => (
                <li key={servico}>
                  <a href="#servicos" className="text-white/50 hover:text-white text-sm transition-colors">
                    {servico}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Contato */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-5">Contato</h4>
            <ul className="space-y-4">
              <li>
                <a href="tel:+551140028922" className="flex items-start gap-3 text-white/50 hover:text-white text-sm transition-colors group">
                  <Phone className="w-4 h-4 mt-0.5 shrink-0 text-[#0EA5E9]" />
                  (11) 4002-8922
                </a>
              </li>
              <li>
                <a href="mailto:contato@vanguardaseguros.com.br" className="flex items-start gap-3 text-white/50 hover:text-white text-sm transition-colors">
                  <Mail className="w-4 h-4 mt-0.5 shrink-0 text-[#0EA5E9]" />
                  contato@vanguardaseguros.com.br
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-white/50 text-sm">
                  <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-[#0EA5E9]" />
                  <span>
                    Av. Paulista, 1.000 — 10º andar<br />
                    Bela Vista, São Paulo — SP<br />
                    CEP: 01310-100
                  </span>
                </div>
              </li>
            </ul>

            {/* Emergency */}
            <div className="mt-6 p-3 bg-[#F59E0B]/10 border border-[#F59E0B]/20 rounded-xl">
              <p className="text-[#F59E0B] text-xs font-bold mb-1">Central de Sinistros 24h</p>
              <a href="tel:08000000000" className="text-white text-sm font-bold">0800 000 0000</a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="text-white/30 text-xs">
            © {currentYear} Vanguarda Seguros. Todos os direitos reservados.
            <br className="sm:hidden" />
            {' '}SUSEP nº 15.003.927/0001-00
          </p>
          <div className="flex gap-4 text-white/30 text-xs">
            <a href="#" className="hover:text-white/60 transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-white/60 transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-white/60 transition-colors">Ouvidoria</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
