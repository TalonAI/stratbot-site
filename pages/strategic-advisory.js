// pages/strategic-advisory.js

import Link from 'next/link';

export default function StrategicAdvisory() {
  return (
    <div className="bg-blue-50 min-h-screen text-gray-800">
      

      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-6 text-center">
          <span className="text-purple-700 font-extrabold">Mos</span><span className="text-teal-500 font-extrabold">AI</span><span className="text-purple-700 font-extrabold">cs AI</span> Strategic Advisory
        </h1>
        <p className="text-lg mb-8 text-center text-gray-700">
          Go beyond automation—build a strategic edge. MosAIcs AI becomes your clarity partner, helping you architect systems that scale, not just solve.
        </p>

                <div className="flex justify-center mb-12">
          <img src="/images/flywheel.png" alt="Strategic Flywheel" className="w-full max-w-2xl" />
        </div>

        <div className="space-y-10">
  <div className="bg-white p-6 rounded-xl shadow-md text-center">
    <h2 className="text-2xl font-semibold mb-3">From Tactical Win → Strategic Flywheel</h2>
    <p className="mb-2">We start where the friction lives—then expand clarity into the 20% of your business that drives 80% of your value. Strategic Advisory isn’t about dashboards—it’s about decision velocity. We help you install thinking systems that align with how you lead, delegate, and decide, giving you a true unfair advantage if you want clarity, not chaos.</p>
  </div>

  <div className="bg-white p-6 rounded-xl shadow-md text-center">
    <h2 className="text-2xl font-semibold mb-3">Executive AI Coaching & Strategic Partnership</h2>
    <p className="mb-2">For high-agency founders who want a co-architect, not a consultant. This partnership provides monthly strategy calls, embedded clarity systems, and a disciplined operating rhythm to help you think sharper, decide faster, and lead with less drag and more focus.</p>
  </div>
</div>

<div className="mt-16 text-center">
          <Link href="/contact" className="inline-block bg-gradient-to-r from-blue-700 to-teal-500 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:opacity-90">
            Apply for Executive Coaching
          </Link>
        </div>
      </div>
    </div>
  );
}
