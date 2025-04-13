export default function Home() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12 space-y-12">
      <section className="text-center space-y-4">
        <h1 className="text-5xl font-bold">Beyond the Bot: Build the Executive System That Scales</h1>
        <p className="text-lg text-gray-700">
          StratBot isn't just about giving you an AI tool—it's about transforming how you make decisions.
          We help executive leaders close the gap between strategy and execution, reduce decision fatigue, and scale their clarity.
        </p>
        <p className="text-lg text-gray-700">
          Because real leverage doesn’t come from more information. It comes from judgment systems that work at scale.
        </p>
      </section>

      <section className="pt-12 space-y-8">
        <h2 className="text-3xl font-bold text-center">StratBot Insights</h2>

        <article className="border rounded-xl p-6 shadow hover:shadow-md transition">
          <h3 className="text-2xl font-semibold mb-2">
            <a href="/blog/decision-velocity" className="text-blue-600 hover:underline">
              From Information Paralysis to Decision Velocity: How AI Transformed My Leadership
            </a>
          </h3>
          <p className="text-gray-700">
            I was drowning in inputs but struggling to make timely, strategic decisions.
            Here's how a custom AI Advisor changed my process—and my outcomes.
          </p>
          <a href="/blog/decision-velocity" className="text-blue-500 mt-2 inline-block hover:underline">Read more →</a>
        </article>

        <article className="border rounded-xl p-6 shadow hover:shadow-md transition">
          <h3 className="text-2xl font-semibold mb-2">
            <a href="/blog/strategy-to-execution" className="text-blue-600 hover:underline">
              From Strategic Drift to Consistent Revenue: How I Closed the Execution Gap
            </a>
          </h3>
          <p className="text-gray-700">
            How I turned my strategic goals into daily execution and unlocked $15K/month in new revenue.
            Includes the actual filters and frameworks I use.
          </p>
          <a href="/blog/strategy-to-execution" className="text-blue-500 mt-2 inline-block hover:underline">Read more →</a>
        </article>
      </section>
    </main>
  );
}
