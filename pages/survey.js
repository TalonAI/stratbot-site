// pages/survey.js

import Link from 'next/link';

export default function Survey() {
  return (
    <div className="bg-blue-50 text-gray-800">
      <main className="min-h-screen px-6 py-12 max-w-5xl mx-auto">
        <div className="text-center mb-12 shadow-md p-8 rounded-xl bg-white">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
            Help Shape Practical AI Training That Actually Helps
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            We’re designing a weekly AI training series built for clarity, not confusion.
            This short survey helps us understand what you need, what’s getting in your way,
            and how we can remove the friction that’s slowing down your progress with AI.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            It takes 2 minutes, and your input will directly shape what we build next.
          </p>
          <div className="flex justify-center">
            <a
              href="https://tally.so/r/wM2A8A" // 🔁 Replace with your actual Tally URL
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:opacity-90"
            >
              Take the 2-Minute Survey
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
