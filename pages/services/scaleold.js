import React from 'react';

export default function Scale() {
  return (
    <div className="bg-white text-gray-900 py-12 px-6 max-w-5xl mx-auto">
      <h1 className="text-4xl font-extrabold text-blue-700 mb-6">Scale Stack</h1>
      <p className="text-lg text-gray-700 mb-10">
        The Scale Stack transforms your entire organization into an AI-native execution engine. It’s not just tools—it’s embedded intelligence across teams, workflows, and decisions. We build the system and lead the change.
      </p>

      <div className="bg-gray-100 rounded-2xl p-6 shadow-xl">
        <h2 className="text-xl font-bold text-gray-800 mb-4">System Overview: Embedded AI Across the Org</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-gray-700">
          <div className="bg-white p-4 rounded-xl shadow">
            <h3 className="font-semibold text-blue-700 mb-2">Sales Team GPT</h3>
            <p>Summarizes call notes, drafts follow-ups, flags pipeline risks. Operates inside CRM and Slack.</p>
          </div>
          <div className="bg-white p-4 rounded-xl shadow">
            <h3 className="font-semibold text-blue-700 mb-2">Ops & Support GPT</h3>
            <p>Auto-updates SOPs from decisions. Flags common issues. Feeds exec summaries weekly.</p>
          </div>
          <div className="bg-white p-4 rounded-xl shadow">
            <h3 className="font-semibold text-blue-700 mb-2">Executive GPT</h3>
            <p>Summarizes key metrics, decisions, risks. Preps strategy docs. Reduces meeting dependency.</p>
          </div>
        </div>
      </div>

      <div className="mt-12 text-center">
        <a href="/services" className="text-blue-600 font-semibold hover:underline">← Back to Execution Stacks</a>
      </div>
    </div>
  );
}
