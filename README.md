# Dra. Mirelle Manheze — Site Institucional

Site institucional desenvolvido em Next.js 14 com App Router, TypeScript e Tailwind CSS.

---

## Pré-requisitos

- Node.js 18+ (recomendado: 20+)
- npm 9+

---

## Instalação

```bash
# 1. Instalar dependências
npm install

# 2. Configurar variáveis de ambiente
cp .env.local.example .env.local
# Edite .env.local com os valores reais

# 3. Rodar em desenvolvimento
npm run dev
```

Acesse: [http://localhost:3000](http://localhost:3000)

---

## Assets da Marca — Configuração Obrigatória

Antes do primeiro uso, copie os arquivos da pasta da identidade visual
para `public/assets/`. A correspondência é:

### Logos (`public/assets/logo/`)

| Destino | Origem (pasta IDV Projeto Final) |
|---|---|
| `logo-horizontal-bordeaux.png` | `Logo/PNG - Marca Dagua/` — variação horizontal, símbolo dourado/bordeaux, fundo transparente |
| `logo-horizontal-white.png` | `Logo/PNG - Marca Dagua/` — variação horizontal, símbolo branco/champagne, fundo transparente |
| `monogram-white.png` | `Logo/PNG - Marca Dagua/` — apenas o símbolo M, versão clara, fundo transparente |

> Dica: os arquivos PNG da pasta `PNG - Marca Dagua/` têm fundo transparente.
> Identifique as versões corretas pelo prefixo do número:
> - PNG01, PNG02 = versão vertical sobre fundos diferentes
> - Procure pela variação horizontal nos números seguintes

### Pattern (`public/assets/pattern/`)

| Destino | Origem |
|---|---|
| `pattern-bordeaux.jpg` | `Logo/Pattern - Estampa/JPG - Imagem/P-JPG01.jpg` |
| `pattern-cream.jpg` | `Logo/Pattern - Estampa/JPG - Imagem/P-JPG02.jpg` |

### Foto da Advogada (`public/assets/photo/`)

| Destino | Descrição |
|---|---|
| `mirelle-profile.jpg` | Foto profissional para seção "Sobre" (proporção 3:4, retrato) |

### Imagem Open Graph (`public/`)

| Destino | Descrição |
|---|---|
| `og-image.jpg` | 1200×630px — imagem de compartilhamento em redes sociais (criar separadamente) |

---

## Variáveis de Ambiente

Edite `.env.local`:

```bash
RESEND_API_KEY=re_...              # Chave da API Resend para envio de e-mails
CONTACT_EMAIL=seu@email.com.br     # E-mail que receberá os formulários de contato
NEXT_PUBLIC_WHATSAPP_NUMBER=5511999999999  # Número do WhatsApp (sem símbolos)
NEXT_PUBLIC_SITE_URL=https://www.seudominio.com.br
```

---

## Personalização de Conteúdo

### Informações a substituir antes do lançamento

| Arquivo | Campo | Valor atual (placeholder) |
|---|---|---|
| `app/layout.tsx` | `description` | Texto genérico — substituir com copy real |
| `app/layout.tsx` | `addressLocality` | Comentado — preencher com a cidade |
| `app/layout.tsx` | `addressRegion` | Comentado — preencher com o estado |
| `app/layout.tsx` | Instagram URL | `dramirellemanheze` — confirmar handle |
| `components/layout/Footer.tsx` | OAB | `OAB/XX 000.000` — substituir |
| `components/sections/About.tsx` | `highlights` | OAB, especialização, atuação — preencher |
| `components/sections/About.tsx` | Parágrafos | Texto institucional — validar com a cliente |
| `components/sections/Contact.tsx` | E-mail | `contato@seudominio.com.br` — substituir |
| `components/sections/Contact.tsx` | WhatsApp display | `(XX) XXXXX-XXXX` — exibição visual |
| `components/sections/Contact.tsx` | Localização | `Cidade — Estado, Brasil` — substituir |
| `components/layout/Footer.tsx` | Instagram URL | Confirmar handle correto |

### Áreas de Atuação

Edite o array `areas` em `components/sections/PracticeAreas.tsx`.

### Diferenciais

Edite o array `differentials` em `components/sections/Differentials.tsx`.

---

## Deploy na Vercel

```bash
# 1. Instalar Vercel CLI (se necessário)
npm i -g vercel

# 2. Deploy
vercel

# 3. Configurar variáveis de ambiente na Vercel
# Acesse: vercel.com → Projeto → Settings → Environment Variables
# Adicione todas as variáveis do .env.local.example
```

Ou conecte o repositório diretamente no dashboard da Vercel para deploy automático.

---

## Scripts disponíveis

```bash
npm run dev    # Desenvolvimento com hot-reload
npm run build  # Build de produção
npm run start  # Serve o build de produção localmente
npm run lint   # Verificação de lint
```

---

## Estrutura do Projeto

```
mirelle-manheze-site/
├── app/
│   ├── api/contact/route.ts   # API de formulário de contato
│   ├── globals.css            # Estilos globais e variáveis CSS
│   ├── layout.tsx             # Layout raiz — fontes, metadata, schema
│   └── page.tsx               # Página principal (composição das seções)
│
├── components/
│   ├── layout/
│   │   ├── Header.tsx         # Header fixo com scroll behavior e menu mobile
│   │   └── Footer.tsx         # Footer com monograma e links
│   ├── sections/
│   │   ├── Hero.tsx           # Hero section (bordeaux, full-height)
│   │   ├── About.tsx          # Seção sobre a advogada
│   │   ├── PracticeAreas.tsx  # Grid de áreas de atuação
│   │   ├── Differentials.tsx  # Diferenciais (fundo bordeaux)
│   │   └── Contact.tsx        # Formulário de contato + informações
│   └── ui/
│       ├── Button.tsx         # Componente de botão (4 variantes)
│       ├── SectionTitle.tsx   # Título de seção com linha decorativa
│       ├── PatternBackground.tsx  # Overlay de pattern da marca
│       └── Divider.tsx        # Linha divisória fina
│
├── lib/
│   └── utils.ts               # Utilitários: cn(), formatWhatsAppUrl()
│
├── public/
│   └── assets/
│       ├── logo/              # ← copiar logos PNG aqui
│       ├── pattern/           # ← copiar P-JPG01 e P-JPG02 aqui
│       └── photo/             # ← foto da advogada aqui
│
├── .env.local.example         # Template de variáveis de ambiente
├── CLAUDE.md                  # Guia completo de identidade e desenvolvimento
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## Identidade Visual

Consulte o `CLAUDE.md` (na pasta raiz da identidade visual) para todas as
regras de cores, tipografia, componentes e tom de voz.

Manual da marca original: `IDV Projeto Final/Manual da Marca - Mirelle Manheze ADV.pdf`
