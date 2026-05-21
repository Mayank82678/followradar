import Link from 'next/link';
import { ArrowRight, ShieldCheck, Zap, Sparkles, Users, TrendingUp } from 'lucide-react';

const features = [
  {
    title: 'Real-time unfollow alerts',
    description: 'Know first when someone unfollows you and act instantly with one-click unfollow back.',
    icon: Zap,
  },
  {
    title: 'Smart follower analysis',
    description: 'Track mutuals, ghost followers, and non-followers with beautiful insights and focused actions.',
    icon: Users,
  },
  {
    title: 'Premium conversion-first design',
    description: 'A dark, luxury interface built to inspire trust, retention, and recurring upgrades.',
    icon: ShieldCheck,
  },
];

const stats = [
  { label: 'Followers you keep', value: '92%', accent: 'text-emerald-400' },
  { label: 'Instant cleanup rate', value: '83%', accent: 'text-sky-400' },
  { label: 'Average retention', value: '14 days', accent: 'text-violet-400' },
];

const faqs = [
  { question: 'How quickly do I get unfollow alerts?', answer: 'Alerts arrive within minutes of a tracked follower change, so you can react fast and maintain momentum.' },
  { question: 'Can I use FollowRadar without Instagram login?', answer: 'Yes, the app supports secure Instagram session tracking and auth through Firebase to keep your data safe.' },
  { question: 'Does Pro include unlimited cleanup?', answer: 'Yes — the Pro plan unlocks unlimited tracking, bulk cleanup tools, and priority support.' },
];

export default function HomePage() {
  return (
    <main className="relative isolate overflow-hidden min-h-screen bg-slate-950 text-slate-100">
      <div className="absolute inset-x-0 top-0 -z-10 h-96 bg-gradient-to-b from-slate-900 via-slate-950 to-transparent opacity-90" />
      <div className="mx-auto max-w-7xl px-6 py-10 sm:py-14 lg:px-8">
        <header className="flex items-center justify-between gap-10">
          <div>
            <span className="inline-flex rounded-full bg-brand-500/10 px-4 py-1.5 text-sm font-medium text-brand-100 ring-1 ring-brand-500/20">
              Launching a smarter Instagram cleanup flow
            </span>
          </div>
          <nav className="hidden items-center gap-8 text-sm text-slate-400 md:flex">
            <Link href="/pricing" className="transition hover:text-white">Pricing</Link>
            <Link href="/dashboard" className="transition hover:text-white">Dashboard</Link>
            <Link href="/support" className="transition hover:text-white">Support</Link>
            <Link href="/login" className="rounded-full border border-slate-700 px-4 py-2 text-white transition hover:border-slate-500">Login</Link>
          </nav>
        </header>

        <section className="grid gap-12 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-300">Premium Instagram growth intelligence</p>
            <h1 className="mt-6 text-5xl font-semibold tracking-tight text-white sm:text-6xl">
              FollowRadar helps you keep the followers who matter and remove the rest.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
              Track who follows you back, spot recent unfollowers, uncover ghost followers, and turn insights into fast cleanup actions — all in a luxury dashboard built for creators and boutique brands.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link href="/signup" className="inline-flex items-center justify-center rounded-full bg-brand-500 px-6 py-3 text-base font-semibold text-slate-950 shadow-glow transition hover:bg-brand-400">
                Start tracking today
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link href="/pricing" className="inline-flex items-center justify-center rounded-full border border-slate-700 px-6 py-3 text-base font-semibold text-slate-200 transition hover:border-slate-500 hover:text-white">
                View pricing
              </Link>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-3">
              {stats.map((item) => (
                <div key={item.label} className="rounded-3xl border border-slate-800 bg-slate-900/80 p-5 shadow-xl shadow-slate-950/20">
                  <p className="text-sm uppercase tracking-[0.2em] text-slate-500">{item.label}</p>
                  <p className={`mt-3 text-3xl font-semibold ${item.accent}`}>{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative isolate overflow-hidden rounded-[2rem] border border-slate-800 bg-slate-950/80 p-8 shadow-glow">
            <div className="absolute inset-0 bg-radial-glow opacity-70" />
            <div className="relative space-y-6">
              <div className="flex items-center justify-between rounded-3xl bg-slate-900/80 p-5 ring-1 ring-white/5">
                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-slate-500">Unfollow alert</p>
                  <p className="mt-2 text-lg font-semibold text-white">@alexa.morgan unfollowed you</p>
                </div>
                <button className="rounded-full bg-brand-500 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-brand-400">Unfollow Back</button>
              </div>
              <div className="grid gap-4 rounded-3xl bg-slate-900/80 p-5 ring-1 ring-white/5">
                <div className="flex items-center justify-between text-sm text-slate-400">
                  <span>Non-followers</span>
                  <span className="text-white">1,274</span>
                </div>
                <div className="flex items-center justify-between text-sm text-slate-400">
                  <span>Mutual followers</span>
                  <span className="text-white">8,402</span>
                </div>
                <div className="flex items-center justify-between text-sm text-slate-400">
                  <span>Ghost followers</span>
                  <span className="text-white">624</span>
                </div>
              </div>
              <div className="rounded-3xl bg-slate-800/90 p-5 text-sm text-slate-300">
                <p className="font-semibold text-white">Why FollowRadar?</p>
                <p className="mt-3 leading-7">Fast alerts + clean UX help you retain real fans and keep your account engagement healthy without wasting time on bad connections.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-10 rounded-[2rem] border border-slate-800 bg-slate-900/80 p-10 shadow-xl shadow-slate-950/20 sm:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.title} className="space-y-4 rounded-3xl border border-slate-800 bg-slate-950/70 p-7 transition hover:-translate-y-1 hover:border-brand-500/30 hover:bg-slate-900">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-brand-500/10 text-brand-200">
                <feature.icon className="h-6 w-6" />
              </div>
              <h2 className="text-xl font-semibold text-white">{feature.title}</h2>
              <p className="text-slate-400">{feature.description}</p>
            </div>
          ))}
        </section>

        <section className="mt-16 grid gap-14 lg:grid-cols-[0.95fr_0.8fr] lg:items-center">
          <div className="rounded-[2rem] border border-slate-800 bg-slate-900/80 p-10 shadow-xl shadow-slate-950/20">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-300">Solve your follower problem</p>
            <h2 className="mt-5 text-4xl font-semibold tracking-tight text-white">From follower mystery to full account control</h2>
            <p className="mt-6 text-lg leading-8 text-slate-300">Most creators never learn who actually follows them back, who ghosts them, or who unfollowed most recently. FollowRadar turns all of that into a premium dashboard, alerts, and cleanup suggestions.</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl bg-slate-950/70 p-5 ring-1 ring-slate-800">
                <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Problem</p>
                <p className="mt-4 text-slate-300">You lose time chasing engagement with the wrong followers and miss people who unfollow you first.</p>
              </div>
              <div className="rounded-3xl bg-brand-500/10 p-5 ring-1 ring-brand-400/10">
                <p className="text-sm uppercase tracking-[0.2em] text-brand-200">Solution</p>
                <p className="mt-4 text-slate-300">Get instant unfollow notifications, precise follower signals, and a dashboard designed to make cleanup easy and reliable.</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-[2rem] border border-slate-800 bg-slate-950/80 p-8 shadow-xl shadow-slate-950/20">
              <h3 className="text-xl font-semibold text-white">How it works</h3>
              <div className="mt-6 space-y-4 text-slate-400">
                <p><span className="font-semibold text-white">1.</span> Connect your Instagram with secure Firebase auth and authorize tracking.</p>
                <p><span className="font-semibold text-white">2.</span> FollowRadar scans account relationships and identifies non-followers, mutuals, and ghost followers.</p>
                <p><span className="font-semibold text-white">3.</span> Receive unfollow alerts and use the smart dashboard to clean up with confidence.</p>
              </div>
            </div>
            <div className="rounded-[2rem] border border-slate-800 bg-slate-950/80 p-8 shadow-xl shadow-slate-950/20">
              <h3 className="text-xl font-semibold text-white">Designed for serious creators</h3>
              <p className="mt-4 text-slate-400">The dashboard is built to feel premium, fast, and focused so users upgrade, engage, and keep returning every week.</p>
            </div>
          </div>
        </section>

        <section className="mt-16 rounded-[2rem] border border-slate-800 bg-slate-900/80 p-10 shadow-xl shadow-slate-950/20">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-brand-300">Pricing built for growth</p>
              <h2 className="mt-3 text-4xl font-semibold text-white">One plan to unlock everything creators need.</h2>
            </div>
            <Link href="/pricing" className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-100">
              See full pricing
            </Link>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            <div className="rounded-3xl border border-slate-800 bg-slate-950/80 p-8">
              <p className="text-sm uppercase tracking-[0.25em] text-slate-500">Free plan</p>
              <p className="mt-4 text-4xl font-semibold text-white">Free</p>
              <ul className="mt-6 space-y-3 text-slate-400">
                <li>Limited scans</li>
                <li>Basic follower tracking</li>
                <li>1 custom alert</li>
              </ul>
            </div>
            <div className="rounded-3xl border border-brand-500 bg-brand-500/10 p-8 shadow-glow">
              <p className="text-sm uppercase tracking-[0.25em] text-brand-100">Pro plan</p>
              <p className="mt-4 text-4xl font-semibold text-white">₹299 / month</p>
              <ul className="mt-6 space-y-3 text-slate-200">
                <li>Instant unfollow alerts</li>
                <li>Unlimited tracking</li>
                <li>Bulk cleanup tools</li>
                <li>Priority support</li>
              </ul>
            </div>
            <div className="rounded-3xl border border-slate-800 bg-slate-950/80 p-8">
              <p className="text-sm uppercase tracking-[0.25em] text-slate-500">Enterprise-ready</p>
              <p className="mt-4 text-4xl font-semibold text-white">Custom</p>
              <ul className="mt-6 space-y-3 text-slate-400">
                <li>Team onboarding</li>
                <li>Custom automations</li>
                <li>Dedicated success</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mt-16 grid gap-8 lg:grid-cols-3">
          <div className="rounded-[2rem] border border-slate-800 bg-slate-950/80 p-8">
            <p className="text-sm uppercase tracking-[0.25em] text-brand-300">Testimonials</p>
            <div className="mt-6 space-y-6 text-slate-300">
              <div className="rounded-3xl bg-slate-900/90 p-6 ring-1 ring-slate-800">
                <p className="text-lg font-semibold text-white">"FollowRadar helped me cut ghost followers and kept my account clean with zero effort."</p>
                <p className="mt-4 text-sm text-slate-400">— Maya, Creator & Brand Strategist</p>
              </div>
              <div className="rounded-3xl bg-slate-900/90 p-6 ring-1 ring-slate-800">
                <p className="text-lg font-semibold text-white">"The UX feels premium, and the unfollow alerts are addictive in the best way."</p>
                <p className="mt-4 text-sm text-slate-400">— Aaron, Digital Marketer</p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-2 rounded-[2rem] border border-slate-800 bg-slate-950/80 p-8">
            <p className="text-sm uppercase tracking-[0.25em] text-brand-300">FAQ</p>
            <div className="mt-6 grid gap-4">
              {faqs.map((item) => (
                <div key={item.question} className="rounded-3xl border border-slate-800 bg-slate-900/90 p-6">
                  <h3 className="text-lg font-semibold text-white">{item.question}</h3>
                  <p className="mt-3 text-slate-400">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-20 rounded-[2rem] border border-brand-500/20 bg-slate-900/90 p-10 text-center shadow-xl shadow-slate-950/20">
          <p className="text-sm uppercase tracking-[0.25em] text-brand-300">Ready to own your follower list?</p>
          <h2 className="mt-4 text-4xl font-semibold text-white">Start tracking your audience with confidence.</h2>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row sm:justify-center">
            <Link href="/signup" className="inline-flex items-center justify-center rounded-full bg-brand-500 px-8 py-3 text-base font-semibold text-slate-950 transition hover:bg-brand-400">
              Create account
            </Link>
            <Link href="/pricing" className="inline-flex items-center justify-center rounded-full border border-slate-700 px-8 py-3 text-base font-semibold text-slate-200 transition hover:border-slate-500 hover:text-white">
              Explore plans
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
