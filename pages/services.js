import Link from 'next/link';
import { Brain, ClipboardList, TrendingUp } from 'lucide-react';

export default function Services() {
  return (
    <section className="max-w-6xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold text-center text-navy mb-12">
        Executive Stacks
      </h1>

      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {/* Clarity */}
        <div className="card">
          <Brain className="card-icon" />
          <h3 className="card-title">Clarity&nbsp;Stack</h3>
          <p className="card-copy">
            Personalized Decision Companion that cuts noise and surfaces priorities.
          </p>
          <Link href="/clarity" className="card-cta">Learn&nbsp;More</Link>
        </div>

        {/* Command */}
        <div className="card">
          <ClipboardList className="card-icon" />
          <h3 className="card-title">Command&nbsp;Stack</h3>
          <p className="card-copy">
            SOP & KPI engine that keeps your team in sync and on-mission.
          </p>
          <Link href="/command" className="card-cta">Learn&nbsp;More</Link>
        </div>

        {/* Scale */}
        <div className="card">
          <TrendingUp className="card-icon" />
          <h3 className="card-title">Scale&nbsp;Stack</h3>
          <p className="card-copy">
            Automations and dashboards to grow without founder bottlenecks.
          </p>
          <Link href="/call" className="card-cta">Book&nbsp;a&nbsp;Call</Link>
        </div>
      </div>

      {/* simple card styles */}
      <style jsx>{`
        .card {
          background: #ffffff;
          border-radius: 0.75rem;
          box-shadow: 0 4px 12px rgba(0,0,0,0.06);
          padding: 2rem 1.5rem; text-align:center;
          transition: transform .15s;
        }
        .card:hover { transform: translateY(-4px); }
        .card-icon { width:40px;height:40px;color:#1e3a8a;margin:0 auto 1rem; }
        .card-title { font-size:1.25rem;font-weight:700;margin-bottom:.75rem; }
        .card-copy { font-size:.95rem;line-height:1.5;margin-bottom:1.25rem; }
        .card-cta {
          background:#f97316;color:#fff;padding:.5rem 1.25rem;
          border-radius:9999px;font-weight:600;transition:opacity .15s;
        }
        .card-cta:hover { opacity:.9; }
      `}</style>
    </section>
  );
}
