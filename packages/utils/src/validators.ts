export function isValidTurkishPhone(value: string): boolean {
  return /^(\+90|0)?5\d{9}$/.test(value.replace(/\s+/g, ''));
}

export function isPositiveAmount(value: number): boolean {
  return Number.isFinite(value) && value > 0;
}
