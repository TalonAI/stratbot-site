import Link from 'next/link';

export default function Home() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-12 space-y-16">
      <section className="text-center space-y-6">
        <h1 className="text-5xl font-bold leading-tight">
          Build Your AI Advisor. Think Faster. Do More. Waste Less.
        </h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          In one session, we’ll build your custom Strategic GPT that thinks like you—
          so you can move faster, automate the obvious, and unlock real clarity.
        </p>
        <Link href="/contact">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-xl text-lg font-medium hover:bg-blue-700 transition">
            Build My AI Advisor
          </button>
        </Link>
      </section>

      <section className="space-y-4 text-center">
        <h2 className="text-3xl font-bold">Why StratBot?</h2>
        <p className="text-gray-700 max-w-3xl mx-auto">
          Most leaders aren’t lacking tools—they’re buried in them. The real challenge is the constant cognitive load of prioritizing, switching contexts, and making high-stakes decisions under pressure.
        </p>
        <p className="text-gray-700 max-w-3xl mx-auto">
          StratBot reduces executive decision fatigue by creating a thinking environment built on your logic, not just more noise. We help you scale clarity, compress decision cycles, and act with confidence.
        </p>
        <p className="text-gray-700 max-w-3xl mx-auto">
          We don’t just build a GPT—we give you a system that helps you think sharper, move faster, and reclaim focus.
        </p>
      </section>

      <section className="space-y-6 text-center">
        <h2 className="text-3xl font-bold text-center">The AI Advisor Sprint</h2>
        <ul className="list-disc list-inside inline-block text-left text-gray-700 space-y-2">
          <li>Custom GPT with your expertise, tone, and strategy</li>
          <li>Embedded SOPs, frameworks, and decision logic</li>
          <li>Delivered within 48 hours—fully functional, no fluff</li>
        </ul>
      </section>

      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-center">Early Access Feedback</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <blockquote className="bg-gray-50 p-6 rounded-xl border">
            <p className="text-gray-700 italic">
              “I thought I needed more AI tools. Turns out, I needed a thinking partner built on my logic. Game changer.”
            </p>
            <footer className="text-sm text-gray-500 pt-4">— Ops Lead, SaaS Company</footer>
          </blockquote>
          <blockquote className="bg-gray-50 p-6 rounded-xl border">
            <p className="text-gray-700 italic">
              “In one week, I’ve saved 7 hours and clarified three major strategic priorities. I’m hooked.”
            </p>
            <footer className="text-sm text-gray-500 pt-4">— Founder, Professional Services Firm</footer>
          </blockquote>
          <blockquote className="bg-gray-50 p-6 rounded-xl border">
            <p className="text-gray-700 italic">
              “I finally feel like my decisions are based on strategy, not just whatever’s screaming loudest that day.”
            </p>
            <footer className="text-sm text-gray-500 pt-4">— Executive Coach & Consultant</footer>
          </blockquote>
        </div>
      </section>

      <section className="text-center">
        <p className="text-xl font-medium">Ready to build your strategic edge?</p>
        <Link href="/contact">
          <button className="bg-blue-600 text-white px-6 py-3 mt-4 rounded-xl text-lg font-medium hover:bg-blue-700 transition">
            Start the AI Advisor Sprint
          </button>
        </Link>
      </section>
    </main>
  );
}
