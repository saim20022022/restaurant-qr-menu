import { useMemo } from 'react';

export function usePanelTitle(baseTitle: string, suffix = 'Restaurant QR Menu'): string {
  return useMemo(() => `${baseTitle} | ${suffix}`, [baseTitle, suffix]);
}
