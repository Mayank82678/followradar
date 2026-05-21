import Link from 'next/link';
import { panelItems } from '@/lib/mockData';

interface SidebarProps {
  active: string;
}

export function Sidebar({ active }: SidebarProps) {
  return (
    <aside className="hidden w-72 shrink-0 space-y-6 rounded-[2rem] border border-slate-800 bg-slate-950/80 p-6 shadow-xl shadow-slate-950/20 lg:block">
      <div className="space-y-3">
        <p className="text-xs uppercase tracking-[0.3em] text-slate-500">FollowRadar</p>
        <h2 className="text-2xl font-semibold text-white">Analytics</h2>
        <p className="text-sm text-slate-400">Track audience health, cleanup opportunities, and the accounts that matter most.</p>
      </div>
      <nav className="space-y-2 pt-4">
        {panelItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`block rounded-3xl px-5 py-3 text-sm font-medium transition ${active === item.href ? 'bg-brand-500/10 text-white ring-1 ring-brand-500/20' : 'text-slate-300 hover:bg-slate-900/80 hover:text-white'}`}
          >
            {item.label}
          </Link>
        ))}
      </nav>
      <div className="rounded-3xl border border-slate-800 bg-slate-900/90 p-5 text-sm text-slate-300">
        <p className="font-semibold text-white">Need help?</p>
        <p className="mt-3 leading-7">Visit the support center for onboarding guides, billing questions, and best practices.</p>
      </div>
    </aside>
  );
}
