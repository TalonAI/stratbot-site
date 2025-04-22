import React from 'react';
import Link from 'next/link';

export default function Command() {
  return (
    <div className="bg-white text-gray-900 py-12 px-6 max-w-5xl mx-auto">
      <h1 className="text-4xl font-extrabold text-blue-700 mb-6">Command Stack</h1>
      <p className="text-lg text-gray-700 mb-10">
        The Command Stack gives you execution leverage. It installs AI-powered workflows that remove you as the bottleneck—automating delegation, tracking progress, and surfacing only what needs your attention.
      </p>

      <div className="bg-gray-100 rounded-2xl p-6 shadow-xl">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Workflow: Strategic Initiative → Execution</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-sm text-gray-700">
          <div className="bg-white p-4 rounded-xl shadow">
            <h3 className="font-semibold text-blue-700 mb-2">1. Executive Input</h3>
            <p>"Launch the new onboarding experience by end of quarter."</p>
          </div>
          <div className="bg-white p-4 rounded-xl shadow">
            <h3 className="font-semibold text-blue-700 mb-2">2. GPT Breakdown</h3>
            <p>AI breaks initiative into steps, deadlines, and assigns owners via Slack/Notion.</p>
          </div>
          <div className="bg-white p-4 rounded-xl shadow">
            <h3 className="font-semibold text-blue-700 mb-2">3. Progress Checks</h3>
            <p>Agent runs async check-ins every 3 days. Gathers blockers, updates dashboards.</p>
          </div>
          <div className="bg-white p-4 rounded-xl shadow">
            <h3 className="font-semibold text-blue-700 mb-2">4. Escalation Logic</h3>
            <p>Only notifies you if something's off track—otherwise, runs autonomously.</p>
          </div>
        </div>
      </div>

      <div className="mt-12 text-center">
        <Link href="/services" className="text-blue-600 font-semibold hover:underline">← Back to Execution Stacks</Link>
      </div>
    </div>
  );
}
