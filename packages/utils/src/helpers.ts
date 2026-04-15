export function toSlug(value: string): string {
  return value
    .toLocaleLowerCase('tr-TR')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-ğüşöçıİ]/gi, '')
    .replace(/-+/g, '-');
}

export function generateOrderCode(prefix = 'SIP'): string {
  const random = Math.floor(100000 + Math.random() * 900000);
  return `${prefix}-${random}`;
}
