import { APP_NAME, DEFAULT_CURRENCY, DEFAULT_LOCALE, DEFAULT_TIMEZONE } from './constants';

export interface SharedAppConfig {
  name: string;
  locale: string;
  timezone: string;
  currency: string;
}

export function getSharedAppConfig(): SharedAppConfig {
  return {
    name: process.env.NEXT_PUBLIC_APP_NAME ?? APP_NAME,
    locale: process.env.NEXT_PUBLIC_DEFAULT_LOCALE ?? DEFAULT_LOCALE,
    timezone: process.env.APP_TIMEZONE ?? DEFAULT_TIMEZONE,
    currency: process.env.NEXT_PUBLIC_CURRENCY ?? DEFAULT_CURRENCY,
  };
}
