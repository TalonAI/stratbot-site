import Link from 'next/link';

export default function BlogIndex() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12 space-y-16">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold">StratBot Insights</h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Tactical examples and strategic frameworks from the frontlines of AI-assisted leadership.
        </p>
      </section>

      <section className="space-y-8">
        <article className="border rounded-xl p-6 shadow hover:shadow-md transition">
          <h2 className="text-2xl font-semibold mb-2">
            <Link href="/blog/decision-velocity" className="text-blue-600 hover:underline">
              From Information Paralysis to Decision Velocity: How AI Transformed My Leadership
            </Link>
          </h2>
          <p className="text-gray-700">
            I was drowning in inputs but struggling to make timely, strategic decisions. Here's how a custom AI Advisor changed my process—and my outcomes.
          </p>
          <Link href="/blog/decision-velocity" className="text-blue-500 mt-2 inline-block hover:underline">Read more →</Link>
        </article>

        <article className="border rounded-xl p-6 shadow hover:shadow-md transition">
          <h2 className="text-2xl font-semibold mb-2">
            <Link href="/blog/strategy-to-execution" className="text-blue-600 hover:underline">
              From Strategic Drift to Consistent Revenue: How I Closed the Execution Gap
            </Link>
          </h2>
          <p className="text-gray-700">
            How I turned my strategic goals into daily execution and unlocked $15K/month in new revenue. Includes the actual filters and frameworks I use.
          </p>
          <Link href="/blog/strategy-to-execution" className="text-blue-500 mt-2 inline-block hover:underline">Read more →</Link>
        </article>
      </section>
    </main>
  );
}
