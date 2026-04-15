import Link from 'next/link';

const links = [
  { href: '/', label: 'Ana Sayfa' },
  { href: '/admin', label: 'Admin' },
  { href: '/customer', label: 'Müşteri' },
  { href: '/kitchen', label: 'Mutfak' },
  { href: '/cashier', label: 'Kasiyer' },
  { href: '/waiter', label: 'Garson' },
];

export function MainNav(): JSX.Element {
  return (
    <header className="border-b border-slate-200 bg-white">
      <nav className="mx-auto flex max-w-6xl flex-wrap items-center gap-3 px-4 py-3">
        {links.map((link) => (
          <Link key={link.href} href={link.href} className="text-sm font-medium text-slate-700 hover:text-slate-900">
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
