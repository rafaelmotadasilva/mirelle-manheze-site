'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { MessageCircle, Mail, MapPin, Send, Loader2 } from 'lucide-react'
import SectionTitle from '@/components/ui/SectionTitle'
import Button from '@/components/ui/Button'
import { cn, formatWhatsAppUrl, WA_DEFAULT_MSG } from '@/lib/utils'

/* ─── Schema ─────────────────────────────────────────────────── */
const schema = z.object({
  name:    z.string().min(2,  'Nome deve ter ao menos 2 caracteres'),
  email:   z.string().email('E-mail inválido'),
  phone:   z.string().min(10, 'Telefone inválido — informe DDD + número'),
  message: z.string().min(15, 'Mensagem muito curta — descreva brevemente sua situação'),
  consent: z.boolean().refine((v) => v === true, 'Consentimento obrigatório para prosseguir'),
})

type FormData    = z.infer<typeof schema>
type SubmitState = 'idle' | 'loading' | 'success' | 'error'

/* ─── Estilos de campo ───────────────────────────────────────── */
const inputBase = cn(
  'w-full bg-linen border border-champagne/60 rounded-brand',
  'font-red-hat text-sm text-bordeaux placeholder:text-warm/30',
  'px-4 py-3.5 transition-colors duration-250',
  'focus:outline-none focus:border-bronze focus:ring-1 focus:ring-bronze/25',
)

/* ─── Dados de contato ───────────────────────────────────────── */
const WA_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? ''

const contactInfo = [
  {
    icon:  MessageCircle,
    label: 'WhatsApp',
    value: WA_NUMBER ? '+55 (11) 97988-1341' : '(11) 97988-1341',
    href:  formatWhatsAppUrl(WA_NUMBER, WA_DEFAULT_MSG),
  },
  {
    icon:  Mail,
    label: 'E-mail',
    value: 'contato@mirellemanheze.adv.br',
    href:  'mailto:contato@mirellemanheze.adv.br',
  },
  {
    icon:  MapPin,
    label: 'Localização',
    value: 'Av. Pereira Barreto, 1395, sl. 75 — Santo André, SP',
    href:  undefined,
  },
] as const

const labelClass = 'block font-red-hat text-[10px] tracking-brand uppercase text-bronze mb-2.5'
const errorClass = 'mt-2 font-red-hat text-xs text-red-600 leading-snug'

/* ─── Componente ─────────────────────────────────────────────── */
export default function Contact() {
  const [submitState, setSubmitState] = useState<SubmitState>('idle')

  const { register, handleSubmit, reset, formState: { errors } } =
    useForm<FormData>({ resolver: zodResolver(schema) })

  const onSubmit = async (data: FormData) => {
    setSubmitState('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error()
      setSubmitState('success')
      reset()
    } catch {
      setSubmitState('error')
    }
  }

  return (
    <section id="contato" aria-labelledby="contato-titulo" className="bg-cream">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-28 lg:py-36">

        <SectionTitle
          id="contato-titulo"
          subtitle="Contato"
          title="Vamos conversar sobre o seu caso"
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-14 lg:gap-20 items-start">

          {/* Informações laterais */}
          <aside className="lg:col-span-2 space-y-10">
            <p className="font-red-hat text-warm text-sm leading-[1.8]">
              Entre em contato para agendar uma consulta. O primeiro passo é
              conhecer a sua situação — cada caso é único e merece atenção individualizada.
            </p>

            <div className="space-y-7">
              {contactInfo.map((item) => {
                const Icon = item.icon
                const inner = (
                  <div className="flex items-start gap-5">
                    <Icon size={17} className="text-bronze/70 flex-shrink-0 mt-0.5" aria-hidden />
                    <div>
                      <p className="font-red-hat text-[10px] tracking-brand uppercase text-bronze mb-1">
                        {item.label}
                      </p>
                      <p className="font-red-hat text-sm text-bordeaux leading-snug">
                        {item.value}
                      </p>
                    </div>
                  </div>
                )

                return item.href ? (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="block hover:opacity-65 transition-opacity duration-250"
                  >
                    {inner}
                  </a>
                ) : (
                  <div key={item.label}>{inner}</div>
                )
              })}
            </div>

            <Button href={contactInfo[0].href} variant="primary" target="_blank" className="w-full">
              Falar pelo WhatsApp
            </Button>
          </aside>

          {/* Formulário */}
          <div className="lg:col-span-3">
            <form
              onSubmit={handleSubmit(onSubmit)}
              noValidate
              aria-label="Formulário de contato"
              className="space-y-6"
            >
              <div>
                <label htmlFor="contact-name" className={labelClass}>
                  Nome completo <span aria-label="campo obrigatório">*</span>
                </label>
                <input
                  id="contact-name"
                  type="text"
                  autoComplete="name"
                  placeholder="Seu nome completo"
                  aria-describedby={errors.name ? 'name-error' : undefined}
                  aria-invalid={!!errors.name}
                  className={cn(inputBase, errors.name && 'border-red-400')}
                  {...register('name')}
                />
                {errors.name && (
                  <p id="name-error" role="alert" className={errorClass}>
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="contact-email" className={labelClass}>
                    E-mail <span aria-label="campo obrigatório">*</span>
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    autoComplete="email"
                    placeholder="seu@email.com"
                    aria-describedby={errors.email ? 'email-error' : undefined}
                    aria-invalid={!!errors.email}
                    className={cn(inputBase, errors.email && 'border-red-400')}
                    {...register('email')}
                  />
                  {errors.email && (
                    <p id="email-error" role="alert" className={errorClass}>
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="contact-phone" className={labelClass}>
                    Telefone <span aria-label="campo obrigatório">*</span>
                  </label>
                  <input
                    id="contact-phone"
                    type="tel"
                    autoComplete="tel"
                    placeholder="(00) 00000-0000"
                    aria-describedby={errors.phone ? 'phone-error' : undefined}
                    aria-invalid={!!errors.phone}
                    className={cn(inputBase, errors.phone && 'border-red-400')}
                    {...register('phone')}
                  />
                  {errors.phone && (
                    <p id="phone-error" role="alert" className={errorClass}>
                      {errors.phone.message}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="contact-message" className={labelClass}>
                  Mensagem <span aria-label="campo obrigatório">*</span>
                </label>
                <textarea
                  id="contact-message"
                  rows={5}
                  placeholder="Descreva brevemente sua situação ou dúvida..."
                  aria-describedby={errors.message ? 'message-error' : undefined}
                  aria-invalid={!!errors.message}
                  className={cn(inputBase, 'resize-none', errors.message && 'border-red-400')}
                  {...register('message')}
                />
                {errors.message && (
                  <p id="message-error" role="alert" className={errorClass}>
                    {errors.message.message}
                  </p>
                )}
              </div>

              {/* Consentimento LGPD */}
              <div>
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    id="contact-consent"
                    type="checkbox"
                    className="mt-0.5 rounded-brand border-champagne text-bordeaux focus:ring-champagne cursor-pointer flex-shrink-0"
                    aria-describedby={errors.consent ? 'consent-error' : undefined}
                    aria-invalid={!!errors.consent}
                    {...register('consent')}
                  />
                  <span className="font-red-hat text-xs text-warm leading-[1.7]">
                    Concordo com o uso dos meus dados para fins de contato e atendimento,
                    conforme a{' '}
                    <a
                      href="/politica-de-privacidade"
                      className="text-bronze underline underline-offset-2 hover:text-bordeaux transition-colors duration-250"
                    >
                      Política de Privacidade
                    </a>
                    .
                  </span>
                </label>
                {errors.consent && (
                  <p id="consent-error" role="alert" className={errorClass}>
                    {errors.consent.message}
                  </p>
                )}
              </div>

              {/* Feedback de envio */}
              {submitState === 'success' && (
                <div role="status" className="px-5 py-5 bg-green-50 border border-green-200 rounded-brand">
                  <p className="font-red-hat font-medium text-sm text-green-800 mb-1">
                    Mensagem recebida com sucesso!
                  </p>
                  <p className="font-red-hat text-sm text-green-700 leading-[1.7]">
                    Entraremos em contato pelo e-mail ou telefone informados.
                    O prazo habitual de resposta é de até 1 dia útil.
                  </p>
                </div>
              )}
              {submitState === 'error' && (
                <div role="alert" className="px-5 py-5 bg-red-50 border border-red-200 rounded-brand">
                  <p className="font-red-hat font-medium text-sm text-red-800 mb-1">
                    Não foi possível enviar a mensagem.
                  </p>
                  <p className="font-red-hat text-sm text-red-700 leading-[1.7]">
                    Por favor, tente novamente ou entre em contato diretamente pelo{' '}
                    <a
                      href={formatWhatsAppUrl(WA_NUMBER, 'Olá, Dra. Mirelle! Tentei enviar uma mensagem pelo site mas ocorreu um erro.')}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium underline underline-offset-2 hover:text-red-900 transition-colors"
                    >
                      WhatsApp
                    </a>
                    .
                  </p>
                </div>
              )}

              <Button
                type="submit"
                variant="primary"
                disabled={submitState === 'loading'}
                className="w-full gap-2.5"
              >
                {submitState === 'loading' ? (
                  <><Loader2 size={14} className="animate-spin" aria-hidden />Enviando...</>
                ) : (
                  <><Send size={14} aria-hidden />Enviar Mensagem</>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
