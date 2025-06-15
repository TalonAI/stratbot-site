// pages/index.js

import Link from 'next/link';

export default function Home() {
  return (
    <div className="bg-blue-50 text-gray-800">
      

      <main className="min-h-screen px-6 py-12 max-w-5xl mx-auto">
        <div className="text-center mb-12 shadow-md p-8 rounded-xl bg-white">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
            <span className="text-purple-700">Mos</span><span className="text-teal-500">AI</span><span className="text-purple-700">cs AI</span> turns AI chaos into operational clarity.
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            We help business owners install AI-driven tools that solve today's bottlenecks and evolve into systems that drive tomorrow's scale—all powered by your own thinking environment, refined and extended through AI-powered systems.
          </p>
          <div className="flex justify-center">
            <Link href="/tactical-tools" className="bg-gradient-to-r from-blue-700 to-purple-700 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:opacity-90">
              Explore Tactical Tools
            </Link>
          </div>
        </div>

        <section className="my-20 p-8 bg-white rounded-xl shadow-lg text-center">
          <h2 className="text-3xl font-semibold text-center mb-4">Why MosAIcs AI?</h2>
          <p className="mb-4 text-lg">
            Most leaders aren't lacking tools—they're buried in them. The real challenge is the constant cognitive load of prioritizing, switching contexts, and making high-stakes decisions under pressure.
          </p>
          <p className="mb-4 text-lg">
            Mosaics AI reduces executive decision fatigue by creating a thinking environment built on your logic, not just more noise. We help you scale clarity, compress decision cycles, and act with confidence.
          </p>
          <p className="text-lg">
            We don’t just deploy AI—we design clarity-driven systems that help you think sharper, move faster, and reclaim focus.
          </p>
        </section>

        <section className="my-20">
          <h2 className="text-3xl font-semibold text-center mb-8">Early Access Feedback</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <blockquote className="border-t-4 border-teal-500 rounded-lg p-6 shadow bg-white">
              <p className="italic">"I thought I needed more AI tools. Turns out, I needed a thinking partner built on my logic. Game changer."</p>
              <footer className="mt-4 text-sm text-gray-500">— Ops Lead, SaaS Company</footer>
            </blockquote>
            <blockquote className="border-t-4 border-teal-500 rounded-lg p-6 shadow bg-white">
              <p className="italic">"I was struggling (really putting off) creating a Business Plan and LOI for a SMB I wanted to purchase. With the system we created, we got them both done in one short afternoon."</p>
              <footer className="mt-4 text-sm text-gray-500">— Business Buyer</footer>
            </blockquote>
            <blockquote className="border-t-4 border-teal-500 rounded-lg p-6 shadow bg-white">
              <p className="italic">"I finally feel like my decisions are based on strategy, not just whatever's screaming loudest that day."</p>
              <footer className="mt-4 text-sm text-gray-500">— Executive Coach & Consultant</footer>
            </blockquote>
          </div>
        </section>

        <section className="mt-16 text-center">
          <Link href="/community/how-do-i-use-ai" className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:opacity-90">
            How Do I AI?
          </Link>
        </section>

        <section className="mt-12 text-center">
          <Link href="/contact" className="inline-block bg-gradient-to-r from-teal-500 to-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:opacity-90">
            Contact Us to Get Started
          </Link>
        </section>
      </main>
    </div>
  );
}
