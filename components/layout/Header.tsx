'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { Menu, X } from 'lucide-react'
import Logo from '@/components/ui/Logo'
import Button from '@/components/ui/Button'
import { cn, formatWhatsAppUrl, WA_DEFAULT_MSG } from '@/lib/utils'

const navLinks = [
  { label: 'Sobre',        href: '#sobre' },
  { label: 'Atuação',      href: '#atuacao' },
  { label: 'Diferenciais', href: '#diferenciais' },
  { label: 'Depoimentos',  href: '#depoimentos' },
  { label: 'Contato',      href: '#contato' },
]

const WA_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? ''

export default function Header() {
  const [scrolled,  setScrolled]  = useState(false)
  const [menuOpen,  setMenuOpen]  = useState(false)
  const hamburgerRef = useRef<HTMLButtonElement>(null)
  const menuRef      = useRef<HTMLDivElement>(null)

  /* Scroll detection */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* Bloqueia scroll do body com menu aberto */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  /* Quando o menu abre, move o foco para o primeiro link */
  useEffect(() => {
    if (!menuOpen) return
    const first = menuRef.current?.querySelector<HTMLElement>('a, button')
    first?.focus()
  }, [menuOpen])

  /*
    Focus trap + Escape:
    - Tab/Shift+Tab ficam contidos dentro do menu
    - Escape fecha o menu e devolve o foco ao botão hamburguer
    WCAG 2.1.1 (Keyboard) + 2.4.3 (Focus Order)
  */
  useEffect(() => {
    if (!menuOpen) return

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMenuOpen(false)
        hamburgerRef.current?.focus()
        return
      }

      if (e.key !== 'Tab') return

      const focusable = menuRef.current?.querySelectorAll<HTMLElement>(
        'a[href]:not([tabindex="-1"]), button:not([disabled]):not([tabindex="-1"])',
      )
      if (!focusable || focusable.length === 0) return

      const first = focusable[0]
      const last  = focusable[focusable.length - 1]

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [menuOpen])

  const closeMenu = useCallback(() => setMenuOpen(false), [])

  const whatsappUrl = formatWhatsAppUrl(WA_NUMBER, WA_DEFAULT_MSG)

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-linen/95 backdrop-blur-sm border-b border-champagne/25 shadow-sm'
          : 'bg-transparent',
      )}
    >
      {/* Skip-to-content — WCAG 2.4.1 */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-bordeaux focus:text-white focus:px-4 focus:py-2 focus:font-red-hat focus:text-sm focus:rounded-brand"
      >
        Pular para o conteúdo
      </a>

      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          <a href="#inicio" aria-label="Dra. Mirelle Manheze — Página inicial">
            <Logo
              mode={scrolled ? 'dark' : 'light'}
              height={36}
              priority
            />
          </a>

          {/* Nav desktop */}
          <nav aria-label="Navegação principal" className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={cn(
                  'font-red-hat font-medium text-[11px] tracking-brand uppercase transition-colors duration-250',
                  scrolled
                    ? 'text-bordeaux hover:text-bronze'
                    : 'text-white/80 hover:text-champagne',
                )}
              >
                {link.label}
              </a>
            ))}
            <Button
              href={whatsappUrl}
              variant={scrolled ? 'primary' : 'outline-light'}
              size="sm"
              target="_blank"
              className="ml-2"
            >
              Agendar Consulta
            </Button>
          </nav>

          {/* Hamburguer */}
          <button
            ref={hamburgerRef}
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            className={cn(
              'lg:hidden p-2 rounded-brand transition-colors duration-250',
              scrolled ? 'text-bordeaux' : 'text-white',
            )}
          >
            {menuOpen ? <X size={22} aria-hidden /> : <Menu size={22} aria-hidden />}
          </button>
        </div>
      </div>

      {/*
        Menu mobile.
        - aria-hidden={!menuOpen}: oculta do leitor de tela quando fechado
        - role="dialog" + aria-modal: sinaliza modal para AT
        - Focus trap no useEffect acima garante que Tab não escapa do menu
      */}
      <div
        ref={menuRef}
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Menu de navegação"
        aria-hidden={!menuOpen}
        className={cn(
          'lg:hidden fixed inset-0 top-20 z-40 bg-bordeaux flex flex-col',
          'transition-all duration-300',
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none',
        )}
      >
        <div className="pattern-bordeaux" aria-hidden="true" />

        <nav className="relative z-10 flex flex-col items-center justify-center flex-1 gap-7 px-6 py-12">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              tabIndex={menuOpen ? 0 : -1}
              className="font-red-hat font-medium text-sm tracking-brand uppercase text-white/80 hover:text-champagne transition-colors duration-250"
            >
              {link.label}
            </a>
          ))}

          <div className="h-px w-10 bg-champagne/30 my-2" aria-hidden="true" />

          <Button
            href={whatsappUrl}
            variant="secondary"
            target="_blank"
            onClick={closeMenu}
            className="w-full max-w-xs"
            {...(menuOpen ? {} : { tabIndex: -1 })}
          >
            Agendar Consulta
          </Button>
        </nav>
      </div>
    </header>
  )
}
