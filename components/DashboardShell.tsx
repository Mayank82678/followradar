import { ReactNode } from 'react';
import { Sidebar } from './Sidebar';

interface DashboardShellProps {
  active: string;
  children: ReactNode;
}

export function DashboardShell({ active, children }: DashboardShellProps) {
  return (
    <div className="min-h-screen bg-slate-950/95 px-6 py-8 text-slate-100">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[17rem_minmax(0,1fr)]">
        <Sidebar active={active} />
        <div className="space-y-8">
          {children}
        </div>
      </div>
    </div>
  );
}
