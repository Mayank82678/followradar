import { DashboardShell } from '@/components/DashboardShell';
import { SmartUnfollowTable } from '@/components/SmartUnfollowTable';

export default function GhostsPage() {
  return (
    <DashboardShell active="/ghosts">
      <section className="rounded-[2rem] border border-slate-800 bg-slate-900/80 p-8 shadow-xl shadow-slate-950/20">
        <h1 className="text-3xl font-semibold text-white">Ghost followers</h1>
        <p className="mt-3 text-slate-400">Accounts with very low or no engagement. Clean them to keep your engagement rate strong.</p>
      </section>
      <SmartUnfollowTable />
    </DashboardShell>
  );
}
