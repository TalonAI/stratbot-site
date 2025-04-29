// pages/services/command.js
import React from 'react';
import Link from 'next/link';

export default function Command() {
  return (
    <>
      <div className="bg-white text-gray-900 py-12 px-6 max-w-5xl mx-auto">
        <h1 className="text-4xl font-extrabold text-blue-700 mb-6">
          Command Stack
        </h1>
        <p className="text-lg text-gray-700 mb-10">
          The Command Stack provides{' '}
          <b>AI-powered decision-making tools and processes</b> across all your
          primary functions.
        </p>

        <div className="bg-gray-100 rounded-2xl p-6 shadow-xl">
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            Key Components
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-sm text-gray-700">
            <div className="bg-white p-4 rounded-xl shadow">
              <h3 className="font-semibold text-blue-700 mb-2">SOPs</h3>
              <p>
                Standardize essential processes to ensure consistency and
                quality.
              </p>
            </div>
            <div className="bg-white p-4 rounded-xl shadow">
              <h3 className="font-semibold text-blue-700 mb-2">Onboarding</h3>
              <p>
                Streamlined AI-guided training that gets new team members
                productive faster.
              </p>
            </div>
            <div className="bg-white p-4 rounded-xl shadow">
              <h3 className="font-semibold text-blue-700 mb-2">
                Cash Flow Analysis
              </h3>
              <p>
                Automated financial reviews highlighting trends, risks, and
                opportunities.
              </p>
            </div>
            <div className="bg-white p-4 rounded-xl shadow">
              <h3 className="font-semibold text-blue-700 mb-2">Negotiation</h3>
              <p>
                AI-supported frameworks to prep, script, and optimize vendor
                and client deals.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/services"
            className="text-blue-600 font-semibold hover:underline"
          >
            ← Back to Execution Stacks
          </Link>
        </div>
      </div>
    </>
  );
}
