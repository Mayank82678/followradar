import { DashboardShell } from '@/components/DashboardShell';
import { SmartUnfollowTable } from '@/components/SmartUnfollowTable';

export default function UnfollowersPage() {
  return (
    <DashboardShell active="/unfollowers">
      <section className="rounded-[2rem] border border-slate-800 bg-slate-900/80 p-8 shadow-xl shadow-slate-950/20">
        <h1 className="text-3xl font-semibold text-white">Recent unfollowers</h1>
        <p className="mt-3 text-slate-400">See the people who recently left your circle and take fast action with smart unfollow suggestions.</p>
      </section>
      <SmartUnfollowTable />
    </DashboardShell>
  );
}
