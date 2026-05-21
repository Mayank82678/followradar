import { DashboardShell } from '@/components/DashboardShell';
import { SmartUnfollowTable } from '@/components/SmartUnfollowTable';

export default function NonFollowersPage() {
  return (
    <DashboardShell active="/non-followers">
      <section className="rounded-[2rem] border border-slate-800 bg-slate-900/80 p-8 shadow-xl shadow-slate-950/20">
        <h1 className="text-3xl font-semibold text-white">Non-followers</h1>
        <p className="mt-3 text-slate-400">Accounts you follow that don’t follow you back. Review the list and decide which relationships to keep or remove.</p>
      </section>
      <SmartUnfollowTable />
    </DashboardShell>
  );
}
