export default function BlogIndex() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12 space-y-12">
      <h1 className="text-4xl font-bold text-center">StratBot Insights</h1>

      <section className="space-y-8">
        <article className="border rounded-xl p-6 shadow hover:shadow-md transition">
          <h2 className="text-2xl font-semibold mb-2">
            <a href="/blog/decision-velocity" className="text-blue-600 hover:underline">
              From Information Paralysis to Decision Velocity: How AI Transformed My Leadership
            </a>
          </h2>
          <p className="text-gray-700">
            I was drowning in inputs but struggling to make timely, strategic decisions. Here's how a custom AI Advisor changed my process—and my outcomes.
          </p>
          <a href="/blog/decision-velocity" className="text-blue-500 mt-2 inline-block hover:underline">Read more →</a>
        </article>

        <article className="border rounded-xl p-6 shadow hover:shadow-md transition">
          <h2 className="text-2xl font-semibold mb-2">
            <a href="/blog/strategy-to-execution" className="text-blue-600 hover:underline">
              From Strategic Drift to Consistent Revenue: How I Closed the Execution Gap
            </a>
          </h2>
          <p className="text-gray-700">
            How I turned my strategic goals into daily execution and unlocked $15K/month in new revenue. Includes the actual filters and frameworks I use.
          </p>
          <a href="/blog/strategy-to-execution" className="text-blue-500 mt-2 inline-block hover:underline">Read more →</a>
        </article>
      </section>
    </main>
  );
}
