import React from 'react';
import Link from 'next/link';

export default function Services() {
  return (
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
          <h2 className="text-3xl font-bold mb-4">3 Execution Stacks for AI Leverage</h2>
          <p className="text-gray-600">StratBot delivers execution-ready AI capabilities designed to evolve with your leadership. Start with clarity. Move to control. Then scale the entire company.</p>
        </div>
      </section>

      {/* Clarity Stack */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <h3 className="text-2xl font-bold mb-2 text-blue-600">Clarity Stack: Your Strategic Advisor</h3>
        <p className="text-xl font-semibold mb-4">Start with clarity—your own AI Advisor that thinks like you do.</p>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          <li>Custom GPT trained on your documents, tone, and decision patterns</li>
          <li>Built to support strategic decisions, write memos, prep meetings</li>
          <li>Delivers the hard truth—this is the voice you need, not your spouse, not your board, not your team</li>
          <li>Includes onboarding and usage playbook</li>
        </ul>
        <p className="mb-4 text-gray-700">Outcome: A thinking partner with no agenda—just clarity and leverage.</p>
        <Link href="/services/clarity" className="text-blue-600 font-semibold hover:underline">Explore the Clarity Stack →</Link>
      </section>

      {/* Command Stack */}
      <section className="bg-gray-50 py-16 px-6 max-w-5xl mx-auto">
        <h3 className="text-2xl font-bold mb-2 text-blue-600">Command Stack: The Augmented Executive</h3>
        <p className="text-xl font-semibold mb-4">Scale your leadership, decisions, and deals with AI-enhanced workflows.</p>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          <li>GPT agents for deal prep, strategy reviews, and async leadership</li>
          <li>Automation of repetitive workflows across ops, projects, and meetings</li>
          <li>AI task managers and assistant workflows embedded into your tools</li>
          <li>Training you and your team to use AI like an operator—not a tinkerer</li>
        </ul>
        <p className="mb-4 text-gray-700">Outcome: You move faster, think clearer, and lead without bottlenecking execution.</p>
        <Link href="/services/command" className="text-blue-600 font-semibold hover:underline">Explore the Command Stack →</Link>
      </section>

      {/* Scale Stack */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <h3 className="text-2xl font-bold mb-2 text-blue-600">Scale Stack: The AI Operating System</h3>
        <p className="text-xl font-semibold mb-4">Turn your entire company into an AI-native execution engine.</p>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          <li>Org-wide AI audit and implementation roadmap</li>
          <li>Shared Team GPTs for Sales, Ops, Support and beyond</li>
          <li>Redesigns of meeting rhythms, SOPs, and internal comms with AI leverage</li>
          <li>Ongoing fractional AI leadership to own implementation and iteration</li>
        </ul>
        <p className="mb-4 text-gray-700">Outcome: An organization that executes faster, scales smarter, and adapts to change in real time.</p>
        <Link href="/services/scale" className="text-blue-600 font-semibold hover:underline">Explore the Scale Stack →</Link>
      </section>

      {/* Final CTA */}
      <section className="bg-blue-600 text-white py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Build Your Stack?</h2>
        <p className="text-lg mb-6">StratBot gives you execution leverage with strategic AI that works like you do.</p>
        <a href="/contact" className="bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition">Book a Strategy Call</a>
      </section>

    </div>
  );
}
