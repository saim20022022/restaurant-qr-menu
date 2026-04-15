import { useMemo } from 'react';

export function useLocale(): string {
  return useMemo(() => process.env.NEXT_PUBLIC_DEFAULT_LOCALE ?? 'tr-TR', []);
}
