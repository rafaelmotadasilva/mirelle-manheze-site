import Link from 'next/link'
import Logo from '@/components/ui/Logo'

export default function NotFound() {
  return (
    <main className="min-h-screen bg-linen flex flex-col items-center justify-center px-6 text-center">

      <Logo mode="dark" height={44} className="mb-16" />

      <div className="max-w-sm">
        <p
          className="font-ephesis text-champagne text-6xl mb-3 leading-none"
          aria-hidden="true"
        >
          404
        </p>

        <h1 className="font-bona-nova text-bordeaux text-2xl tracking-wide mb-4">
          Página não encontrada
        </h1>

        <p className="font-red-hat text-warm text-sm leading-relaxed mb-10">
          O endereço que você acessou não existe ou foi removido.
          Verifique o link ou retorne à página principal.
        </p>

        <Link
          href="/"
          className="inline-block font-red-hat font-medium text-xs tracking-brand uppercase text-bronze border-b border-champagne pb-px hover:text-bordeaux hover:border-bordeaux transition-colors duration-250"
        >
          Voltar ao início
        </Link>
      </div>

    </main>
  )
}
