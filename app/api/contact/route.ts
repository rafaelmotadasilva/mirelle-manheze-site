import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { z } from 'zod'

const bodySchema = z.object({
  name:    z.string().min(2),
  email:   z.string().email(),
  phone:   z.string().min(10),
  message: z.string().min(15),
  consent: z.literal(true),
})

// Rate limiting simples por IP (em memória — reinicia com o servidor)
const requestLog = new Map<string, number[]>()
const WINDOW_MS   = 60_000  // 1 minuto
const MAX_REQUESTS = 3

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const times = (requestLog.get(ip) ?? []).filter((t) => now - t < WINDOW_MS)
  requestLog.set(ip, times)
  if (times.length >= MAX_REQUESTS) return true
  requestLog.set(ip, [...times, now])
  return false
}

export async function POST(req: NextRequest) {
  // Rate limiting
  const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'unknown'
  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: 'Muitas requisições. Aguarde um momento e tente novamente.' },
      { status: 429 },
    )
  }

  // Parse e validação
  const body = await req.json().catch(() => null)
  const parsed = bodySchema.safeParse(body)
  if (!parsed.success) {
    return NextResponse.json({ error: 'Dados inválidos.' }, { status: 400 })
  }

  const { name, email, phone, message } = parsed.data
  const toEmail = process.env.CONTACT_EMAIL
  const resendKey = process.env.RESEND_API_KEY

  if (!toEmail || !resendKey) {
    console.error('[contact] CONTACT_EMAIL ou RESEND_API_KEY não configurados')
    return NextResponse.json({ error: 'Configuração de e-mail ausente.' }, { status: 500 })
  }

  const resend = new Resend(resendKey)

  const { error } = await resend.emails.send({
    from: 'Site Mirelle <contato@mirellemanheze.adv.br>',
    to: toEmail,
    reply_to: email,
    subject: `Novo contato pelo site - Mirelle Manheze`,
    html: `
      <div style="font-family: Georgia, serif; color: #73061B; max-width: 600px; margin: 0 auto; padding: 32px;">
        <h2 style="font-size: 20px; margin-bottom: 24px; border-bottom: 1px solid #A79479; padding-bottom: 12px;">
          Nova mensagem pelo site
        </h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #897257; font-size: 12px; letter-spacing: 0.1em; text-transform: uppercase; width: 120px;">Nome</td>
            <td style="padding: 8px 0; color: #3D3530;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #897257; font-size: 12px; letter-spacing: 0.1em; text-transform: uppercase;">E-mail</td>
            <td style="padding: 8px 0; color: #3D3530;"><a href="mailto:${email}" style="color: #73061B;">${email}</a></td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #897257; font-size: 12px; letter-spacing: 0.1em; text-transform: uppercase;">Telefone</td>
            <td style="padding: 8px 0; color: #3D3530;">${phone}</td>
          </tr>
        </table>
        <div style="margin-top: 24px; padding: 20px; background: #EAE7E2; border-left: 3px solid #A79479;">
          <p style="font-size: 12px; color: #897257; letter-spacing: 0.1em; text-transform: uppercase; margin: 0 0 8px 0;">Mensagem</p>
          <p style="color: #3D3530; line-height: 1.6; margin: 0;">${message.replace(/\n/g, '<br>')}</p>
        </div>
        <p style="margin-top: 32px; font-size: 11px; color: #A79479;">
          Mensagem enviada pelo formulário de contato do site — ${new Date().toLocaleString('pt-BR')}
        </p>
      </div>
    `,
  })

  if (error) {
    console.error('[contact] Erro ao enviar e-mail:', error)
    return NextResponse.json({ error: 'Falha no envio.' }, { status: 500 })
  }

  return NextResponse.json({ ok: true }, { status: 200 })
}
