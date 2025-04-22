import Link from 'next/link';
import React from 'react';
import Layout from '../../components/Layout';

export default function Clarity() {
  return (
    <Layout>
      <div className="bg-white text-gray-900 py-12 px-6 max-w-5xl mx-auto">
        <h1 className="text-4xl font-extrabold text-blue-700 mb-6">Clarity Stack</h1>
        <p className="text-lg text-gray-700 mb-10">
          The Clarity Stack gives you your own AI Strategic Advisor—an always-on, judgment-focused thinking partner trained on your voice, decisions, and style. It's not just about automating answers—it's about enhancing your decision-making with frictionless insight.
        </p>

        <div className="bg-gray-100 rounded-2xl p-6 shadow-xl space-y-6">
          <div className="flex items-start">
            <div className="bg-blue-600 text-white rounded-full h-10 w-10 flex items-center justify-center font-bold mr-4">F</div>
            <div>
              <p className="text-gray-800 font-semibold">Founder</p>
              <p className="text-gray-700 mt-1">We keep missing our product deadlines. Feels like everything takes longer than it should. What am I not seeing?</p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="bg-gray-700 text-white rounded-full h-10 w-10 flex items-center justify-center font-bold mr-4">S</div>
            <div>
              <p className="text-gray-800 font-semibold">StratBot Advisor</p>
              <p className="text-gray-700 mt-1">
                You're treating delays like a planning problem. But based on your past two post-mortems, it’s a <span className="font-semibold">decision bottleneck issue</span>—not tasks, but waiting on you to approve specs and unblock teams.
                <br /><br />
                <span className="font-semibold">Recommend:</span><br />
                • Delegate spec approval to your product lead with a simple escalation rule.<br />
                • Set a weekly async review rhythm to prevent mid-week stalls.<br /><br />
                This isn’t about better planning. It’s about removing yourself from the critical path.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
