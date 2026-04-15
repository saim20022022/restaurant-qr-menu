export interface DatabaseConfig {
  databaseUrl: string;
  redisUrl: string;
}

export function getDatabaseConfig(): DatabaseConfig {
  const databaseUrl =
    process.env.DATABASE_URL ??
    'postgresql://restaurant_user:restaurant_pass@localhost:5432/restaurant_qr?schema=public';

  const redisUrl = process.env.REDIS_URL ?? 'redis://localhost:6379';

  return { databaseUrl, redisUrl };
}
