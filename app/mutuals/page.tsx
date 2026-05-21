import { DashboardShell } from '@/components/DashboardShell';
import { SmartUnfollowTable } from '@/components/SmartUnfollowTable';

export default function MutualsPage() {
  return (
    <DashboardShell active="/mutuals">
      <section className="rounded-[2rem] border border-slate-800 bg-slate-900/80 p-8 shadow-xl shadow-slate-950/20">
        <h1 className="text-3xl font-semibold text-white">Mutual followers</h1>
        <p className="mt-3 text-slate-400">People who follow you and you follow back. These are your strongest audience relationships.</p>
      </section>
      <SmartUnfollowTable />
    </DashboardShell>
  );
}
