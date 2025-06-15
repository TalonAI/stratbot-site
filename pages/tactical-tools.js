// pages/tactical-tools.js

import Link from 'next/link';

export default function TacticalTools() {
  return (
    <div className="bg-blue-50 min-h-screen text-gray-800">
      

      <div className="max-w-5xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-6 text-center"><span className="text-purple-700">Mos</span><span className="text-teal-500">AI</span><span className="text-purple-700">cs AI</span> Tactical Tools</h1>
        <p className="text-lg mb-10 text-center">
          These high-impact solutions aren’t off-the-shelf apps—they’re clarity-first systems that remove friction and bottlenecks where it hurts most. Each is personalized to your business needs and operational style.
        </p>

        <div className="grid md:grid-cols-2 gap-8 justify-items-center">
          <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md text-center">
            <h2 className="text-2xl font-semibold mb-2">Customer Flow Amplifier</h2>
            <p>Personalized customer engagement and smart handling of complex inbound queries—without extra staff.</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md text-center">
            <h2 className="text-2xl font-semibold mb-2">KnowledgeOps Copilot</h2>
            <p>A central source of truth that eliminates tribal knowledge and accelerates delegation with confidence.</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md text-center">
            <h2 className="text-2xl font-semibold mb-2">Outbound Intelligence Engine</h2>
            <p>High-context B2B lead qualification and personalized outreach that feels human—but scales effortlessly.</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md text-center">
            <h2 className="text-2xl font-semibold mb-2">Insight Extractor</h2>
            <p>Transforms messy financial and operational data into sharp, actionable summaries. No spreadsheets required.</p>
          </div>

          <div className="col-span-full flex justify-center">
  <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md text-center">
    <h2 className="text-2xl font-semibold mb-2">PeopleOps Streamliner</h2>
			<p>Simplifies non-standard HR workflows like onboarding, evaluations, and compliance—with AI structure, not rigidity.</p>
    </div>
</div>


        </div>

        <div className="mt-16 text-center">
          <Link href="/contact" className="inline-block bg-gradient-to-r from-teal-500 to-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:opacity-90">
            Talk to Us About Your Tactical Need
          </Link>
        </div>
      </div>
    </div>
  );
}
