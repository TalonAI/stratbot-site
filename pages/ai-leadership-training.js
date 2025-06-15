// pages/services/ai-leadership-training.js

import Link from 'next/link';

export default function AILeadershipTraining() {
	return (
	  <div className="bg-blue-50 min-h-screen text-gray-800">


      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-6 text-center">
          AI Operational Leadership Training
        </h1>
        <p className="text-lg mb-8 text-center text-gray-700">
          Train your team to lead with clarity, not reaction. These sessions are designed to help operators install structure, improve decision velocity, and build repeatable execution habits.
        </p>

        <div className="space-y-10">
          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <h2 className="text-2xl font-semibold mb-3">6-Week Training Program</h2>
            <p className="mb-2">
              A modular course designed to help teams install operating rhythm, clarity rituals, and AI-enabled delegation habits. Includes async videos, SOP toolkits, and live coaching sessions.{' '}
              <Link href="/scale-syllabus" className="text-blue-700 underline hover:text-blue-900">View full syllabus →</Link>
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <h2 className="text-2xl font-semibold mb-3">Live Workshop (Virtual or Onsite)</h2>
            <p className="mb-2">
              Half-day or full-day custom sessions that blend AI operations with leadership clarity. Ideal for executive teams, department heads, and offsite sessions.
            </p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/contact"
            className="inline-block bg-gradient-to-r from-purple-700 to-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:opacity-90"
          >
            Book a Training Consult
          </Link>
        </div>
      </div>
    </div>
  );
}
