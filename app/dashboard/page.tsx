import { dashboardStats } from '@/lib/mockData';
import { DashboardShell } from '@/components/DashboardShell';
import { SmartUnfollowTable } from '@/components/SmartUnfollowTable';

export default function DashboardPage() {
  return (
    <DashboardShell active="/dashboard">
      <section className="rounded-[2rem] border border-slate-800 bg-slate-900/80 p-8 shadow-xl shadow-slate-950/20">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-brand-300">Welcome back</p>
            <h1 className="mt-3 text-3xl font-semibold text-white">Your Instagram relationship intelligence</h1>
            <p className="mt-3 text-slate-400">The dashboard helps you spot non-followers, recent unfollowers, mutuals, and ghost accounts in one clean workspace.</p>
          </div>
          <div className="inline-flex items-center gap-3 rounded-full bg-slate-950/80 px-5 py-3 text-sm text-slate-300 ring-1 ring-slate-800">
            <span className="h-2 w-2 rounded-full bg-emerald-400" /> Live tracking active
          </div>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {dashboardStats.map((card) => (
          <div key={card.title} className="rounded-[2rem] border border-slate-800 bg-slate-950/90 p-6 shadow-xl shadow-slate-950/20">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-500">{card.title}</p>
            <p className="mt-4 text-4xl font-semibold text-white">{card.value}</p>
            <p className="mt-3 text-sm text-slate-400">{card.change === 'live' ? 'Real-time updates' : `Change ${card.change}`}</p>
          </div>
        ))}
      </section>

      <section className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-[2rem] border border-slate-800 bg-slate-950/90 p-8 shadow-xl shadow-slate-950/20">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-brand-300">Recent unfollowers</p>
              <h2 className="mt-3 text-2xl font-semibold text-white">Stay first on the list</h2>
            </div>
            <button className="rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-200 transition hover:border-brand-500 hover:text-white">View all</button>
          </div>
          <div className="mt-6 space-y-3 text-slate-300">
            <div className="rounded-3xl bg-slate-900/90 p-5 ring-1 ring-slate-800">
              <p className="font-semibold text-white">@sam.growth</p>
              <p className="mt-2 text-sm text-slate-400">Unfollowed 9 minutes ago. Recommended action: Unfollow back quickly to preserve engagement.</p>
            </div>
            <div className="rounded-3xl bg-slate-900/90 p-5 ring-1 ring-slate-800">
              <p className="font-semibold text-white">@nina.launch</p>
              <p className="mt-2 text-sm text-slate-400">Unfollowed 35 minutes ago. A high-value account with strong engagement potential.</p>
            </div>
          </div>
        </div>

        <div className="rounded-[2rem] border border-slate-800 bg-slate-950/90 p-8 shadow-xl shadow-slate-950/20">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-brand-300">Ghost follower signal</p>
              <h2 className="mt-3 text-2xl font-semibold text-white">Keep engagement sharp</h2>
            </div>
            <span className="rounded-full bg-violet-500/10 px-3 py-2 text-xs uppercase tracking-[0.25em] text-violet-200">Insight</span>
          </div>
          <p className="mt-6 text-slate-400">Ghost followers are accounts with no interactions for over 30 days. Clear them to stay eligible for branded opportunities and preserve your algorithm standing.</p>
          <div className="mt-8 grid gap-4">
            <div className="rounded-3xl bg-slate-900/90 p-5 ring-1 ring-slate-800">
              <p className="text-sm uppercase tracking-[0.25em] text-slate-500">Ghost follower growth</p>
              <p className="mt-3 text-2xl font-semibold text-white">+11% last month</p>
            </div>
            <div className="rounded-3xl bg-slate-900/90 p-5 ring-1 ring-slate-800">
              <p className="text-sm uppercase tracking-[0.25em] text-slate-500">Cleanup potential</p>
              <p className="mt-3 text-2xl font-semibold text-white">24 recommended accounts</p>
            </div>
          </div>
        </div>
      </section>

      <SmartUnfollowTable />
    </DashboardShell>
  );
}
