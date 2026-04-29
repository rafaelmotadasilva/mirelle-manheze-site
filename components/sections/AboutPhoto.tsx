'use client'

import Image from 'next/image'
import { useState } from 'react'

/*
  Exibe a foto da Dra. Mirelle se disponível;
  caso contrário renderiza um placeholder elegante com a logo oficial.

  Para adicionar a foto:
    1. Coloque o arquivo em: public/assets/photo/mirelle-profile.jpg
    2. Proporção recomendada: 3:4 (retrato)
    3. Resolução mínima: 800 × 1067px
*/
export default function AboutPhoto() {
  const [hasError, setHasError] = useState(false)

  if (hasError) return <PhotoPlaceholder />

  return (
    <Image
      src="/assets/photo/mirelle-profile.jpg"
      alt="Dra. Mirelle Manheze, advogada"
      fill
      className="object-cover object-top"
      sizes="(max-width: 1024px) 100vw, 50vw"
      onError={() => setHasError(true)}
    />
  )
}

function PhotoPlaceholder() {
  // logo-dark.svg: elementos escuros visíveis sobre o fundo cream do placeholder
  // ratio horizontal: 795.54 / 145.81 ≈ 5.455 — width = round(36 * 5.455) = 196
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 bg-cream px-8">
      <Image
        src="/assets/logo/logo-dark.svg"
        alt=""
        width={196}
        height={36}
        unoptimized
        aria-hidden="true"
        className="opacity-25"
      />
      <div className="text-center space-y-1.5">
        <p className="font-red-hat text-xs tracking-brand uppercase text-bronze/50">
          Foto profissional
        </p>
        <p className="font-red-hat text-[10px] text-bronze/30 leading-relaxed">
          Adicione em<br />
          <span className="font-mono">public/assets/photo/</span>
        </p>
      </div>
    </div>
  )
}
