// pages/services.js
import Link from 'next/link';
import { Brain, ClipboardList, TrendingUp } from 'lucide-react';

export default function Services() {
  return (
    <>
      <section className="max-w-6xl mx-auto py-16 px-4">
        <h1 className="text-4xl font-bold text-center text-navy mb-12">
          Executive Stacks
        </h1>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {/* Clarity Stack */}
          <div className="bg-white rounded-2xl shadow p-8 text-center hover:shadow-lg transition">
            <Brain className="mx-auto mb-4 w-12 h-12 text-navy" />
            <h3 className="text-xl font-semibold mb-2">Clarity Stack</h3>
            <p className="text-gray-700 mb-4">
              Your personalized <b>Strategic AI Advisor</b> that cuts noise,
              surfaces priorities, and frees mental bandwidth.
            </p>
            <Link
              href="/services/clarity"
              className="inline-block bg-blue-700 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-800 transition"
            >
              Learn More
            </Link>
          </div>

          {/* Command Stack */}
          <div className="bg-white rounded-2xl shadow p-8 text-center hover:shadow-lg transition">
            <ClipboardList className="mx-auto mb-4 w-12 h-12 text-navy" />
            <h3 className="text-xl font-semibold mb-2">Command Stack</h3>
            <p className="text-gray-700 mb-4">
              SOP & KPI engine that aligns everyone to the mission and locks
              in execution rhythm.
            </p>
            <Link
              href="/services/command"
              className="inline-block bg-blue-700 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-800 transition"
            >
              Learn More
            </Link>
          </div>

          {/* Scale Stack */}
          <div className="bg-white rounded-2xl shadow p-8 text-center hover:shadow-lg transition">
            <TrendingUp className="mx-auto mb-4 w-12 h-12 text-navy" />
            <h3 className="text-xl font-semibold mb-2">Scale Stack</h3>
            <p className="text-gray-700 mb-4">
              Equip your leadership team through our <b>6-Week Training Program</b>—master AI-driven workflows that scale your business.
            </p>
            <Link
              href="/services/scale"
              className="inline-block bg-blue-700 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-800 transition"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
