export interface AppConfig {
  name: string;
  env: string;
  port: number;
  locale: string;
  timezone: string;
  currency: string;
  corsOrigin: string;
  rateLimitTtl: number;
  rateLimitLimit: number;
  redisUrl: string;
}

export default (): { app: AppConfig } => ({
  app: {
    name: process.env.APP_NAME ?? 'Restaurant QR Menu API',
    env: process.env.NODE_ENV ?? 'development',
    port: Number(process.env.PORT ?? 4000),
    locale: process.env.APP_LOCALE ?? 'tr-TR',
    timezone: process.env.APP_TIMEZONE ?? 'Europe/Istanbul',
    currency: process.env.APP_CURRENCY ?? 'TRY',
    corsOrigin: process.env.CORS_ORIGIN ?? 'http://localhost:3000',
    rateLimitTtl: Number(process.env.RATE_LIMIT_TTL ?? 60),
    rateLimitLimit: Number(process.env.RATE_LIMIT_LIMIT ?? 120),
    redisUrl: process.env.REDIS_URL ?? 'redis://localhost:6379',
  },
});
