import Link from 'next/link';

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-10 text-slate-100">
      <div className="mx-auto w-full max-w-3xl rounded-[2rem] border border-slate-800 bg-slate-900/80 p-10 shadow-xl shadow-slate-950/20">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-brand-300">Welcome back</p>
            <h1 className="mt-3 text-4xl font-semibold text-white">Login to FollowRadar</h1>
          </div>
          <Link href="/signup" className="self-start rounded-full border border-slate-700 px-5 py-2 text-sm font-semibold text-slate-200 transition hover:border-slate-500 hover:text-white sm:self-auto">
            Create account
          </Link>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.9fr_0.55fr]">
          <form className="space-y-6 rounded-3xl bg-slate-950/90 p-8 ring-1 ring-slate-800">
            <div>
              <label className="text-sm font-semibold text-slate-200" htmlFor="email">Email</label>
              <input id="email" type="email" placeholder="you@company.com" className="mt-3 w-full rounded-3xl border border-slate-800 bg-slate-900 px-4 py-3 text-slate-100 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20" />
            </div>
            <div>
              <label className="text-sm font-semibold text-slate-200" htmlFor="password">Password</label>
              <input id="password" type="password" placeholder="••••••••" className="mt-3 w-full rounded-3xl border border-slate-800 bg-slate-900 px-4 py-3 text-slate-100 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20" />
            </div>
            <button type="submit" className="w-full rounded-full bg-brand-500 px-6 py-3 text-base font-semibold text-slate-950 transition hover:bg-brand-400">Login securely</button>
          </form>

          <div className="rounded-3xl border border-slate-800 bg-slate-950/90 p-8 text-slate-300">
            <p className="text-sm uppercase tracking-[0.25em] text-brand-300">Why FollowRadar?</p>
            <ul className="mt-6 space-y-4 text-sm leading-7">
              <li>• One-click unfollow suggestions</li>
              <li>• Live alert system for unfollowers</li>
              <li>• Premium dashboard designed for creators</li>
              <li>• Fast onboarding and recurring subscription model</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
