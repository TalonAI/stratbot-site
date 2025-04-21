import React from 'react';
import Layout from '../components/Layout';
import Link from 'next/link';

export default function Services() {
  return (
    <Layout>
      <div className="bg-white text-gray-900">

        {/* Hero Section */}
        <section className="text-center py-20 px-6 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">StratBot: AI Execution Stacks for Founders and Operators</h1>
          <p className="text-lg md:text-xl text-gray-600 mb-6">Multiply your decisions. Build leverage into your systems. Scale execution—without hiring another person.</p>
          <div className="space-x-4">
            <a href="/contact" className="bg-blue-600 text-white px-6 py-3 rounded-xl shadow hover:bg-blue-700 transition">Book a Strategy Call</a>
            <a href="#stacks" className="text-blue-600 font-semibold hover:underline">See the Stacks ↓</a>
          </div>
        </section>

        {/* Intro Section */}
        <section className="bg-gray-50 py-12 px-6" id="stacks">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">3 Paths to AI Leverage—Choose Your Stack</h2>
            <p className="text-gray-600">StratBot offers productized service stacks designed to evolve with your business. Start with your own AI Advisor. Scale yourself. Then scale your company.</p>
          </div>
        </section>

        {/* Stack 1 */}
        <section className="py-16 px-6 max-w-5xl mx-auto">
          <h3 className="text-2xl font-bold mb-2 text-blue-600">Stack 1: The AI Operator</h3>
          <p className="text-xl font-semibold mb-4">Start with leverage—build your own AI strategic advisor.</p>
          <ul className="list-disc list-inside text-gray-700 mb-4">
            <li>Custom GPT trained on your docs, tone, and processes</li>
            <li>Async workflows for strategic memos, meeting prep, decision-making</li>
            <li>Integrates with Notion, Google Docs, SOPs</li>
            <li>Onboarding + usage playbook</li>
          </ul>
          <p className="mb-4 text-gray-700">Outcome: Clarity, judgment, and async output—without you in the loop.</p>
          <a href="/contact" className="text-blue-600 font-semibold hover:underline">Build My AI Operator →</a>
        </section>

        {/* Stack 2 */}
        <section className="bg-gray-50 py-16 px-6 max-w-5xl mx-auto">
          <h3 className="text-2xl font-bold mb-2 text-blue-600">Stack 2: The Augmented Executive</h3>
          <p className="text-xl font-semibold mb-4">Scale your leadership, decisions, and deals—with AI-embedded workflows.</p>
          <ul className="list-disc list-inside text-gray-700 mb-4">
            <li>GPT agents for deal prep, strategy reviews, async leadership</li>
            <li>Integrations via Lindy, Make, n8n, Slack, Google Calendar</li>
            <li>AI Project Manager agents for task breakdowns and updates</li>
            <li>Training on prompt design + executive usage</li>
          </ul>
          <p className="mb-4 text-gray-700">Outcome: You operate like a team of 5—fast, focused, and scalable.</p>
          <a href="/contact" className="text-blue-600 font-semibold hover:underline">Upgrade My Execution Stack →</a>
        </section>

        {/* Stack 3 */}
        <section className="py-16 px-6 max-w-5xl mx-auto">
          <h3 className="text-2xl font-bold mb-2 text-blue-600">Stack 3: The AI Operating System</h3>
          <p className="text-xl font-semibold mb-4">Turn your entire company into an AI-native org.</p>
          <ul className="list-disc list-inside text-gray-700 mb-4">
            <li>Org-wide AI audit + implementation plan</li>
            <li>Internal GPTs for teams: SalesBot, OpsBot, SupportBot</li>
            <li>Workflow redesign for meetings, SOPs, ops</li>
            <li>Ongoing fractional AI leadership and integration</li>
          </ul>
          <p className="mb-4 text-gray-700">Outcome: An org that executes faster, smarter, and more autonomously.</p>
          <a href="/contact" className="text-blue-600 font-semibold hover:underline">Build My AI Operating System →</a>
        </section>

        {/* Final CTA */}
        <section className="bg-blue-600 text-white py-20 px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Build Your Stack?</h2>
          <p className="text-lg mb-6">StratBot gives you execution leverage with strategic AI that works like you do.</p>
          <a href="/contact" className="bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition">Book a Strategy Call</a>
        </section>

      </div>
    </Layout>
  );
}
