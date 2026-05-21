import { smartPeers } from '@/lib/mockData';

export function SmartUnfollowTable() {
  return (
    <div className="overflow-hidden rounded-[2rem] border border-slate-800 bg-slate-950/90 shadow-xl shadow-slate-950/15">
      <div className="border-b border-slate-800 bg-slate-900/90 px-6 py-5">
        <h3 className="text-lg font-semibold text-white">Smart Unfollow Suggestions</h3>
        <p className="mt-1 text-sm text-slate-400">Curated accounts to review and decide instantly.</p>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full text-left text-sm text-slate-300">
          <thead className="border-b border-slate-800 bg-slate-950/95 text-slate-400">
            <tr>
              <th className="px-6 py-4">Username</th>
              <th className="px-6 py-4">Followed Since</th>
              <th className="px-6 py-4">Last Interaction</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800">
            {smartPeers.map((item) => (
              <tr key={item.username} className="transition hover:bg-slate-900/80">
                <td className="px-6 py-5 text-white">{item.username}</td>
                <td className="px-6 py-5">{item.followedSince}</td>
                <td className="px-6 py-5">{item.lastInteraction}</td>
                <td className="px-6 py-5">
                  <span className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${item.status === 'Mutual follower' ? 'bg-emerald-500/10 text-emerald-300' : item.status === 'Ghost follower' ? 'bg-violet-500/10 text-violet-300' : item.status === 'Unfollower' ? 'bg-rose-500/10 text-rose-300' : 'bg-slate-700/70 text-slate-100'}`}>
                    {item.status}
                  </span>
                </td>
                <td className="px-6 py-5">
                  <button className="rounded-full bg-brand-500 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-brand-400">Unfollow</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
