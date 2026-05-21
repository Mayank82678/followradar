import Link from 'next/link';

const faqs = [
  { question: 'How do I connect my Instagram account?', answer: 'Login with your Instagram-linked email and follow the secure onboarding prompts to start tracking relationships.' },
  { question: 'Can I cancel anytime?', answer: 'Yes, Pro subscriptions can be canceled at any time through settings, and you will keep access through the current billing period.' },
  { question: 'Is my follower data safe?', answer: 'Absolutely — FollowRadar uses Firebase Auth and secure API endpoints to keep your insights private.' },
];

export default function SupportPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-12 text-slate-100">
      <div className="mx-auto max-w-6xl space-y-10">
        <div className="rounded-[2rem] border border-slate-800 bg-slate-900/80 p-10 shadow-xl shadow-slate-950/20">
          <p className="text-sm uppercase tracking-[0.25em] text-brand-300">Support</p>
          <h1 className="mt-4 text-4xl font-semibold text-white">Need help with FollowRadar?</h1>
          <p className="mt-4 max-w-2xl text-slate-400">Browse the help center or reach out to our team for growth strategy, billing, or setup support.</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="rounded-[2rem] border border-slate-800 bg-slate-950/90 p-8 shadow-xl shadow-slate-950/20">
            <h2 className="text-2xl font-semibold text-white">Quick links</h2>
            <ul className="mt-6 space-y-4 text-slate-300">
              <li>• Account setup</li>
              <li>• Payment issues</li>
              <li>• Feature requests</li>
              <li>• Privacy and security</li>
            </ul>
          </div>
          <div className="lg:col-span-2 rounded-[2rem] border border-slate-800 bg-slate-950/90 p-8 shadow-xl shadow-slate-950/20">
            <h2 className="text-2xl font-semibold text-white">Submit a request</h2>
            <p className="mt-4 text-slate-400">Our team is ready to help with setup, billing, or analytics questions. We aim to respond within one business day.</p>
            <div className="mt-8 space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <input className="rounded-3xl border border-slate-800 bg-slate-900 px-4 py-3 text-slate-100 outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20" placeholder="Name" />
                <input className="rounded-3xl border border-slate-800 bg-slate-900 px-4 py-3 text-slate-100 outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20" placeholder="Email" />
              </div>
              <textarea className="min-h-[180px] w-full rounded-3xl border border-slate-800 bg-slate-900 px-4 py-4 text-slate-100 outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20" placeholder="Describe your request" />
              <button className="rounded-full bg-brand-500 px-6 py-3 text-base font-semibold text-slate-950 transition hover:bg-brand-400">Send request</button>
            </div>
          </div>
        </div>

        <section className="rounded-[2rem] border border-slate-800 bg-slate-900/80 p-8 shadow-xl shadow-slate-950/20">
          <h2 className="text-2xl font-semibold text-white">Frequently asked questions</h2>
          <div className="mt-6 space-y-4">
            {faqs.map((faq) => (
              <div key={faq.question} className="rounded-3xl border border-slate-800 bg-slate-950/90 p-6">
                <p className="font-semibold text-white">{faq.question}</p>
                <p className="mt-3 text-slate-400">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
