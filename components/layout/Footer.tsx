import { Instagram } from 'lucide-react'
import Logo from '@/components/ui/Logo'
import PatternBackground from '@/components/ui/PatternBackground'
import Divider from '@/components/ui/Divider'

const currentYear = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="relative bg-bordeaux text-white overflow-hidden">
      <PatternBackground variant="bordeaux" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="flex flex-col items-center gap-6">

          <Logo variant="stacked" height={100} />

          <Divider light className="max-w-[200px] mx-auto opacity-30" />

          <div className="flex flex-col sm:flex-row items-center gap-5 sm:gap-8">
            <a
              href="https://www.instagram.com/mirellemanheze.adv"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-red-hat text-[10px] tracking-brand uppercase text-champagne/70 hover:text-champagne transition-colors duration-250"
              aria-label="Instagram da Dra. Mirelle Manheze (abre em nova aba)"
            >
              <Instagram size={13} aria-hidden="true" />
              @mirellemanheze.adv
            </a>

            <span className="hidden sm:block text-champagne/20 text-xs" aria-hidden="true">|</span>

            <a
              href="/politica-de-privacidade"
              className="font-red-hat text-[10px] tracking-brand uppercase text-champagne/50 hover:text-champagne/80 transition-colors duration-250"
            >
              Política de Privacidade
            </a>

            <span className="hidden sm:block text-champagne/20 text-xs" aria-hidden="true">|</span>

            <span className="font-red-hat text-[10px] tracking-brand uppercase text-champagne/55">
              OAB/SP 540.038
            </span>
          </div>
        </div>

        <Divider light className="max-w-sm mx-auto mt-10 mb-6 opacity-20" />

        <div className="flex flex-col items-center gap-2">
          <p className="font-red-hat text-[10px] tracking-wider text-white/25 text-center">
            © {currentYear} Dra. Mirelle Manheze. Todos os direitos reservados.
          </p>
          <a
            href="https://github.com/rafaelmotadasilva"
            target="_blank"
            rel="noopener noreferrer"
            className="font-red-hat text-[10px] tracking-wider text-white/25 hover:text-white/50 transition-colors duration-250"
          >
            Desenvolvido por Rafael Mota • Infraestrutura & Cloud
          </a>
        </div>
      </div>
    </footer>
  )
}
