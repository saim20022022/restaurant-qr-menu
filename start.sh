#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$ROOT_DIR"

if ! command -v pnpm >/dev/null 2>&1; then
  echo "[info] pnpm bulunamadı, global olarak yükleniyor..."
  npm install -g pnpm@9
fi

echo "[info] Altyapı servisleri başlatılıyor (PostgreSQL + Redis)..."
docker compose up -d

echo "[info] Bağımlılıklar yükleniyor..."
pnpm install

echo "[info] Prisma generate çalıştırılıyor..."
pnpm prisma:generate || true

echo "[info] Geliştirme sunucuları başlatılıyor..."
pnpm dev
