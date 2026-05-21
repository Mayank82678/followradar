import Link from 'next/link';
import { pricingPlans } from '@/lib/mockData';

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-12 text-slate-100">
      <div className="mx-auto max-w-6xl space-y-10">
        <div className="rounded-[2rem] border border-slate-800 bg-slate-900/80 p-10 shadow-xl shadow-slate-950/20">
          <p className="text-sm uppercase tracking-[0.25em] text-brand-300">Pricing</p>
          <h1 className="mt-4 text-4xl font-semibold text-white">Simple plans for serious Instagram growth.</h1>
          <p className="mt-4 max-w-2xl text-slate-400">Choose the package that unlocks the best insight, alerting, and cleanup workflow for your creator account.</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {pricingPlans.map((plan) => (
            <div key={plan.name} className={`rounded-[2rem] border p-8 shadow-xl transition ${plan.highlight ? 'border-brand-500 bg-brand-500/10 shadow-glow' : 'border-slate-800 bg-slate-950/90'}`}>
              <p className="text-sm uppercase tracking-[0.25em] text-slate-400">{plan.name}</p>
              <p className="mt-4 text-4xl font-semibold text-white">{plan.price}</p>
              <ul className="mt-6 space-y-3 text-slate-300">
                {plan.details.map((detail) => (
                  <li key={detail}>• {detail}</li>
                ))}
              </ul>
              <Link
                href="/signup"
                className={`mt-8 inline-flex w-full items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition ${plan.highlight ? 'bg-white text-slate-950 hover:bg-slate-100' : 'border border-slate-700 text-slate-200 hover:border-slate-500 hover:text-white'}`}
              >
                Choose {plan.name}
              </Link>
            </div>
          ))}
        </div>

        <section className="rounded-[2rem] border border-slate-800 bg-slate-900/80 p-8 shadow-xl shadow-slate-950/20">
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-semibold text-white">Built for higher retention and upgrades</h2>
              <p className="mt-4 text-slate-400">The Pro plan is designed for creators who want instant feedback on who unfollows them, faster cleanup workflows, and a premium analytics edge.</p>
            </div>
            <div className="space-y-4 text-slate-300">
              <p>• Unlimited follower scans</p>
              <p>• Smart unfollow table with one-click actions</p>
              <p>• Razorpay-secure checkout flow</p>
              <p>• Dedicated help from the FollowRadar team</p>
            </div>
          </div>
        </section>

        <div className="rounded-[2rem] border border-slate-800 bg-slate-950/90 p-8 text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-brand-300">Need a quote?</p>
          <p className="mt-4 text-2xl font-semibold text-white">Contact our team for enterprise account planning.</p>
          <Link href="/support" className="mt-6 inline-flex rounded-full bg-brand-500 px-6 py-3 text-base font-semibold text-slate-950 transition hover:bg-brand-400">
            Visit support
          </Link>
        </div>
      </div>
    </main>
  );
}
