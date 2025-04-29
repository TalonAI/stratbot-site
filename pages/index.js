// pages/index.js
import Link from 'next/link';
import { Sparkles, Target, TrendingUp } from 'lucide-react';

export default function Home() {
  return (
    <>
      {/* ── Hero ───────────────────────────────────────── */}
      <section className="bg-white py-20 px-4">
        <h1 className="text-5xl font-bold text-center text-blue-700 leading-tight">
          Build Your Strategic AI Advisor
          <br className="hidden sm:block" />
          —Think Faster. Do More. Waste Less.
        </h1>

        <p className="mt-6 text-lg text-gray-700 max-w-3xl mx-auto text-center">
          In one focused sprint, we’ll craft a <b>custom Strategic AI Advisor </b> 
          that mirrors your expertise, accelerates decisions, and anchors your 
          Clarity Stack.
        </p>

        <div className="mt-10 flex justify-center gap-6">
			<Link
				href="/call"
				className="bg-blue-700 text-white rounded-full px-6 py-3 font-semibold shadow hover:bg-blue-800 transition"
			>
				Book a Call
			</Link>
			<Link
				href="/services"
				className="bg-blue-700 text-white rounded-full px-6 py-3 font-semibold shadow hover:bg-blue-800 transition"
			>
				Explore Stacks
			</Link>
		</div>
      </section>

      {/* ── Why Clarity/Command/Scale ───────────────────── */}
      <section className="py-16 px-4 bg-[#fdfaf3]">
        <h2 className="text-3xl font-bold text-center text-navy mb-10">
          Why Clarity, Command, and Scale Matter
        </h2>
        <div className="max-w-5xl mx-auto grid gap-8 sm:grid-cols-3">
          <div className="why-card">
            <Sparkles className="why-icon" />
            <h3 className="why-title">Strategic Clarity</h3>
            <p>Cut noise, surface priorities, reclaim focus.</p>
          </div>
          <div className="why-card">
            <Target className="why-icon" />
            <h3 className="why-title">Operational Command</h3>
            <p>Install SOPs & rhythms that keep the team on mission.</p>
          </div>
          <div className="why-card">
            <TrendingUp className="why-icon" />
            <h3 className="why-title">Ready-to-Scale</h3>
            <p>Train your leadership team to leverage AI—accelerating growth and
              scaling your business.</p>
          </div>
        </div>
      </section>

      {/* ── Sprint + Clarity Stack ─────────────────────── */}
      <section className="py-16 px-4">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-12">
          The AI Advisor Sprint + Clarity Stack
        </h2>
        <ol className="timeline max-w-4xl mx-auto">
          <li className="mb-8 flex items-start gap-4">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-navy text-white font-semibold">
              1
            </span>
            <div>
              <h4 className="font-semibold mb-1">Discovery & Blueprint</h4>
              <p>90-minute deep-dive into your goals, decisions, and chaos points.</p>
            </div>
          </li>
          <li className="mb-8 flex items-start gap-4">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-navy text-white font-semibold">
              2
            </span>
            <div>
              <h4 className="font-semibold mb-1">Build Your Strategic AI Advisor</h4>
              <p>We craft a custom advisor that thinks like you—no jargon, no fluff.</p>
            </div>
          </li>
          <li className="flex items-start gap-4">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-navy text-white font-semibold">
              3
            </span>
            <div>
              <h4 className="font-semibold mb-1">Install the Clarity Stack</h4>
              <p>Your advisor + weekly review loop + priority dashboard, ready in days.</p>
            </div>
          </li>
        </ol>
      </section>

      {/* ── Page-specific styles ──────────────────────── */}
      <style jsx>{`
        .why-card {
          background: #fff;
          border-radius: 0.75rem;
          padding: 2rem 1.5rem;
          text-align: center;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
        }
        .why-icon {
          width: 36px;
          height: 36px;
          color: #1e3a8a;
          margin: 0 auto 0.75rem;
        }
        .why-title {
          font-weight: 700;
          margin-bottom: 0.5rem;
        }
        .timeline li h4 {
          margin-bottom: 0.25rem;
        }
      `}</style>
    </>
  );
}
