# Restaurant QR Menu - Kurulum Rehberi

Bu proje **pnpm monorepo** yapısı kullanır.

## 1) Gereksinimler

- Node.js 18+
- pnpm 9+
- Docker + Docker Compose

## 2) Projeyi hazırlama

```bash
cd /home/ubuntu/restaurant-qr-menu
pnpm install
```

## 3) Altyapıyı başlatma (PostgreSQL + Redis)

```bash
docker compose up -d
```

## 4) Ortam değişkenleri

- `apps/api/.env.example` dosyasını `apps/api/.env` olarak kopyalayın.
- `apps/web/.env.example` dosyasını `apps/web/.env.local` olarak kopyalayın.
- `prisma/.env.example` dosyasını kullanarak Prisma bağlantılarını doğrulayın.

## 5) Prisma

```bash
pnpm prisma:generate
pnpm prisma:migrate
```

## 6) Geliştirme

```bash
pnpm dev
```

- API varsayılan: `http://localhost:4000`
- Web varsayılan: `http://localhost:3000`

## 7) Üretim derlemesi

```bash
pnpm build
```

## 8) Kapatma

```bash
docker compose down
```

## Notlar

- Para birimi varsayılanı `TRY` olarak ayarlanmıştır.
- Lokalizasyon varsayılanı `tr-TR` olarak tasarlanmıştır.
- Dağıtım tarafında `deployment/` altındaki Netlify + Render rehberleri kullanılabilir.
