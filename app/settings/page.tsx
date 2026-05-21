import Link from 'next/link';

export default function SettingsPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-12 text-slate-100">
      <div className="mx-auto max-w-5xl space-y-10">
        <div className="rounded-[2rem] border border-slate-800 bg-slate-900/80 p-10 shadow-xl shadow-slate-950/20">
          <p className="text-sm uppercase tracking-[0.25em] text-brand-300">Settings</p>
          <h1 className="mt-4 text-4xl font-semibold text-white">Your account and billing</h1>
          <p className="mt-4 max-w-2xl text-slate-400">Manage your profile, subscription, and notification preferences from one polished settings page.</p>
        </div>

        <section className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-slate-800 bg-slate-950/90 p-8 shadow-xl shadow-slate-950/20">
            <h2 className="text-2xl font-semibold text-white">Profile</h2>
            <div className="mt-6 space-y-5">
              <input className="w-full rounded-3xl border border-slate-800 bg-slate-900 px-4 py-3 text-slate-100 outline-none" placeholder="Full name" />
              <input className="w-full rounded-3xl border border-slate-800 bg-slate-900 px-4 py-3 text-slate-100 outline-none" placeholder="Email address" />
              <button className="mt-4 rounded-full bg-brand-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-brand-400">Save profile</button>
            </div>
          </div>
          <div className="rounded-[2rem] border border-slate-800 bg-slate-950/90 p-8 shadow-xl shadow-slate-950/20">
            <h2 className="text-2xl font-semibold text-white">Subscription</h2>
            <p className="mt-6 text-slate-400">You are currently on the Pro plan. Manage billing, payment methods and renewal settings here.</p>
            <div className="mt-6 space-y-4 rounded-3xl border border-slate-800 bg-slate-900/90 p-6">
              <p className="text-sm uppercase tracking-[0.25em] text-slate-500">Plan</p>
              <p className="text-xl font-semibold text-white">Pro — ₹299 / month</p>
              <button className="mt-4 w-full rounded-full border border-slate-700 px-5 py-3 text-sm font-semibold text-slate-200 transition hover:border-brand-500 hover:text-white">Manage subscription</button>
            </div>
          </div>
        </section>

        <section className="rounded-[2rem] border border-slate-800 bg-slate-950/90 p-8 shadow-xl shadow-slate-950/20">
          <h2 className="text-2xl font-semibold text-white">Security</h2>
          <div className="mt-6 space-y-5">
            <div className="grid gap-4 sm:grid-cols-2">
              <button className="rounded-3xl border border-slate-800 bg-slate-900 px-4 py-3 text-left text-slate-200 transition hover:border-brand-500 hover:text-white">Change password</button>
              <button className="rounded-3xl border border-slate-800 bg-slate-900 px-4 py-3 text-left text-slate-200 transition hover:border-brand-500 hover:text-white">Set up 2FA</button>
            </div>
            <div className="rounded-3xl bg-slate-900/90 p-5 text-sm text-slate-300">
              <p className="font-semibold text-white">Connected accounts</p>
              <p className="mt-3">Instagram account connected via secure auth. Disconnect or refresh session below.</p>
              <div className="mt-5 flex flex-wrap gap-3">
                <button className="rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-200 transition hover:border-brand-500 hover:text-white">Refresh session</button>
                <button className="rounded-full border border-rose-500/40 bg-rose-500/10 px-4 py-2 text-sm text-rose-200 transition hover:bg-rose-500/20">Disconnect</button>
              </div>
            </div>
          </div>
        </section>

        <div className="rounded-[2rem] border border-slate-800 bg-slate-900/80 p-8 shadow-xl shadow-slate-950/20">
          <p className="text-sm uppercase tracking-[0.25em] text-brand-300">Need help?</p>
          <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-center">
            <p className="max-w-2xl text-slate-400">If you have questions about billing or account setup, our support team is ready to assist.</p>
            <Link href="/support" className="inline-flex rounded-full bg-brand-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-brand-400">Open support</Link>
          </div>
        </div>
      </div>
    </main>
  );
}
