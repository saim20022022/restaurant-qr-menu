import Link from 'next/link';

const entries = [
  { href: '/admin', label: 'Admin Paneli' },
  { href: '/customer', label: 'Müşteri Menüsü' },
  { href: '/kitchen', label: 'Mutfak Ekranı' },
  { href: '/cashier', label: 'Kasiyer Paneli' },
  { href: '/waiter', label: 'Garson Paneli' },
];

export default function HomePage(): JSX.Element {
  return (
    <section className="space-y-4 rounded-xl bg-white p-6 shadow-sm">
      <h1 className="text-2xl font-bold">Restaurant QR Menu</h1>
      <p className="text-slate-700">
        Türkçe lokalizasyon ve TRY para birimi için hazırlanmış çok panelli restoran yönetim sistemi.
      </p>
      <div className="grid gap-3 sm:grid-cols-2">
        {entries.map((entry) => (
          <Link
            key={entry.href}
            href={entry.href}
            className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold hover:bg-slate-100"
          >
            {entry.label}
          </Link>
        ))}
      </div>
    </section>
  );
}
