import type { ReactNode } from 'react';

interface PanelCardProps {
  title: string;
  children: ReactNode;
}

export function PanelCard({ title, children }: PanelCardProps): JSX.Element {
  return (
    <section className="rounded-xl bg-white p-4 shadow-sm">
      <h3 className="text-lg font-semibold text-slate-800">{title}</h3>
      <div className="mt-2 text-slate-700">{children}</div>
    </section>
  );
}
