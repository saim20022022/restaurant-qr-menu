const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL ?? 'http://localhost:4000';

export async function apiGet<T>(path: string): Promise<T> {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    headers: { 'Content-Type': 'application/json' },
    next: { revalidate: 0 },
  });

  if (!response.ok) {
    throw new Error(`API isteği başarısız oldu: ${response.status}`);
  }

  return (await response.json()) as T;
}
