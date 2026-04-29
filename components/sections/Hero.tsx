import Button from '@/components/ui/Button'
import PatternBackground from '@/components/ui/PatternBackground'
import { formatWhatsAppUrl, WA_DEFAULT_MSG } from '@/lib/utils'

export default function Hero() {
  const whatsappUrl = formatWhatsAppUrl(
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '',
    WA_DEFAULT_MSG,
  )

  return (
    <section
      id="inicio"
      aria-label="Apresentação"
      className="relative min-h-screen bg-bordeaux flex flex-col"
    >
      <PatternBackground variant="bordeaux" />

      {/*
        Foto de fundo (opcional):
        Descomente e adicione o arquivo em public/assets/photo/mirelle-hero.jpg

        <div className="absolute inset-0 z-0">
          <Image src="/assets/photo/mirelle-hero.jpg" alt="" fill
            className="object-cover object-top" priority />
          <div className="absolute inset-0 bg-bordeaux/75" aria-hidden="true" />
        </div>
      */}

      <div className="relative z-10 flex flex-1 items-center">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 w-full pt-36 pb-28">
          <div className="max-w-3xl">

            <p
              className="font-ephesis text-champagne/90 text-4xl sm:text-5xl mb-3 leading-none"
              aria-hidden="true"
            >
              Seja bem-vindo(a)
            </p>

            <div className="h-px w-12 bg-champagne/60 mb-8" aria-hidden="true" />

            {/*
              Escala responsiva da headline:
              - mobile  (< 640px):  text-4xl = 36px — evita quebras excessivas
              - sm      (≥ 640px):  text-5xl = 48px — tablets portrait
              - md      (≥ 768px):  text-6xl = 60px — tablets landscape
              - lg/xl   (≥ 1024px): text-7xl = 72px — desktop (impacto monumental)
            */}
            <h1 className="font-bona-nova font-normal text-white tracking-tight leading-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-7">
              Advocacia com estratégia, ética e dedicação.
            </h1>

            <p className="font-red-hat text-white/75 text-base md:text-lg lg:text-xl leading-relaxed mb-12 max-w-xl">
              Assessoria jurídica conduzida com preparo, responsabilidade e comprometimento
              com os direitos de cada cliente.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
              <Button href={whatsappUrl} variant="secondary" target="_blank">
                Agendar Consulta
              </Button>
              <Button href="#sobre" variant="outline-light">
                Conheça a Dra. Mirelle
              </Button>
            </div>

          </div>
        </div>
      </div>

      {/* Seta decorativa — aria-hidden para não criar link redundante */}
      <div className="relative z-10 flex justify-center pb-10" aria-hidden="true">
        <a
          href="#sobre"
          className="text-champagne/40 hover:text-champagne/80 transition-colors duration-250"
          tabIndex={-1}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="1">
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </a>
      </div>
    </section>
  )
}
