import Layout from "../components/Layout"
import Link from "next/link"

export default function Home() {
  return (
    <Layout>
      <main className="max-w-5xl mx-auto px-6 py-8 space-y-16">
        <section className="text-center space-y-6 bg-white p-10 rounded-2xl shadow-xl border-t-4 border-blue-500">
          <h1 className="text-5xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-700">
            Build Your AI Advisor. Think Faster. Do More. Waste Less.
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            In one session, we'll build your custom Strategic GPT that thinks like you— so you can move faster, automate
            the obvious, and unlock real clarity.
          </p>
          <div className="flex justify-center gap-4 mt-6">
            <Link href="/contact">
              <button className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-8 py-4 rounded-xl text-lg font-medium hover:from-blue-700 hover:to-indigo-800 transition shadow-lg transform hover:-translate-y-1 hover:shadow-xl">
                Build My AI Advisor
              </button>
            </Link>
            <Link href="/services">
              <button className="bg-white border-2 border-blue-600 text-blue-700 px-8 py-4 rounded-xl text-lg font-medium hover:bg-blue-50 transition shadow-lg transform hover:-translate-y-1 hover:shadow-xl">
                View Execution Stacks
              </button>
            </Link>
          </div>
        </section>

        <section className="space-y-6 bg-gradient-to-br from-slate-50 to-blue-50 p-10 rounded-2xl shadow-lg">
          <h2 className="text-3xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-700">
            Why StratBot?
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto">
            Most leaders aren't lacking tools—they're buried in them. The real challenge is the constant cognitive load
            of prioritizing, switching contexts, and making high-stakes decisions under pressure.
          </p>
          <p className="text-gray-700 max-w-3xl mx-auto">
            StratBot reduces executive decision fatigue by creating a thinking environment built on your logic, not just
            more noise. We help you scale clarity, compress decision cycles, and act with confidence.
          </p>
          <p className="text-gray-700 max-w-3xl mx-auto">
            We don't just build a GPT—we give you a system that helps you think sharper, move faster, and reclaim focus.
          </p>
        </section>

        <section className="space-y-6 bg-white p-10 rounded-2xl shadow-lg border-l-4 border-blue-500">
          <h2 className="text-3xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-700">
            The AI Advisor Sprint
          </h2>
          <ul className="space-y-4 max-w-2xl mx-auto">
            <li className="flex items-start">
              <svg
                className="h-6 w-6 text-blue-500 mr-2 mt-1 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="text-gray-700">Custom GPT with your expertise, tone, and strategy</span>
            </li>
            <li className="flex items-start">
              <svg
                className="h-6 w-6 text-blue-500 mr-2 mt-1 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="text-gray-700">Embedded SOPs, frameworks, and decision logic</span>
            </li>
            <li className="flex items-start">
              <svg
                className="h-6 w-6 text-blue-500 mr-2 mt-1 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="text-gray-700">Delivered within 48 hours—fully functional, no fluff</span>
            </li>
          </ul>
        </section>

        <section className="space-y-8">
          <h2 className="text-3xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-700">
            Early Access Feedback
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <blockquote className="bg-white p-6 rounded-xl shadow-lg border-t-2 border-blue-500 hover:shadow-xl transition transform hover:-translate-y-1">
              <p className="text-gray-700 italic">
                "I thought I needed more AI tools. Turns out, I needed a thinking partner built on my logic. Game
                changer."
              </p>
              <footer className="text-sm text-gray-500 pt-4 font-medium">— Ops Lead, SaaS Company</footer>
            </blockquote>
            <blockquote className="bg-white p-6 rounded-xl shadow-lg border-t-2 border-blue-500 hover:shadow-xl transition transform hover:-translate-y-1">
              <p className="text-gray-700 italic">
                "I was struggling (really putting off) creating a Business Plan and LOI for a SMB I wanted to purchase.
                With my StratBot, we got them both done in one short afternoon."
              </p>
              <footer className="text-sm text-gray-500 pt-4 font-medium">— Business Buyer</footer>
            </blockquote>
            <blockquote className="bg-white p-6 rounded-xl shadow-lg border-t-2 border-blue-500 hover:shadow-xl transition transform hover:-translate-y-1">
              <p className="text-gray-700 italic">
                "I finally feel like my decisions are based on strategy, not just whatever's screaming loudest that
                day."
              </p>
              <footer className="text-sm text-gray-500 pt-4 font-medium">— Executive Coach & Consultant</footer>
            </blockquote>
          </div>
        </section>

        <section className="text-center bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-10 rounded-2xl shadow-xl">
          <p className="text-2xl font-medium mb-6">Ready to build your strategic edge?</p>
          <Link href="/contact">
            <button className="bg-white text-blue-700 px-8 py-4 rounded-xl text-lg font-bold hover:bg-gray-100 transition shadow-lg transform hover:-translate-y-1 hover:shadow-xl">
              Start the AI Advisor Sprint
            </button>
          </Link>
        </section>
      </main>
    </Layout>
  )
}
