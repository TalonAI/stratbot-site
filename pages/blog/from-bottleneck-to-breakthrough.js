import Link from "next/link";

export default function FromBottleneckToBreakthrough() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
        <Link href="/blog" className="flex items-center text-mosaics-dark mb-8 hover:text-mosaics-purple transition-colors">
          <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to All Posts
        </Link>

        <article>
          <header className="mb-8">
            <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-mosaics-dark to-mosaics-purple">
              From Bottleneck to Breakthrough: How a Custom GPT Becomes a Company-Wide App
            </h1>
            <div className="flex items-center text-gray-600 text-sm">
              <span>May 26, 2025</span>
              <span className="mx-2">•</span>
              <span>6 min read</span>
            </div>
          </header>

          <div className="prose prose-lg max-w-none">
            <p className="mb-6">Most bottlenecks in SMBs aren’t tools. They’re decisions. The approval you’re waiting on. The info hidden in someone’s head. The recurring thing that always requires a Slack ping or hallway ask.</p>

            <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-mosaics-dark to-mosaics-purple">Why a GPT alone isn’t enough</h2>
            <p className="mb-6">A GPT trained on your process is a great start. But if your team has to open ChatGPT, remember how to phrase the prompt, and manually copy/paste... it’s not a solution. It’s a smart workaround.</p>

            <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-mosaics-dark to-mosaics-purple">What we do instead</h2>
            <ol className="list-decimal pl-6 space-y-2 text-gray-700">
  <li>Identify a high-friction workflow</li>
  <li>Build a GPT that mirrors your team’s best logic</li>
  <li>Wrap it in a shareable, branded interface</li>
  <li>Deploy it as a company-wide app</li>
</ol>

            <h2 className="text-2xl font-bold mt-14 bg-clip-text text-transparent bg-gradient-to-r from-mosaics-dark to-mosaics-purple">Examples</h2>
            <ul>
              <li>Lead qualifier that generates custom emails based on filters</li>
              <li>Internal onboarding assistant for new employees or techs</li>
              <li>Financial report analyzer that summarizes PDFs into weekly scorecards</li>
            </ul>

            <h2 className="text-2xl font-bold mt-14 bg-clip-text text-transparent bg-gradient-to-r from-mosaics-dark to-mosaics-purple">Why this matters</h2>
            <p className="mb-6">This isn’t just automation — it’s applied intelligence. It turns friction into flow. Instead of duct-taping a workflow together, you get a clean, ownable app your team can use on Day 1.</p>
          </div>
        </article>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-mosaics-dark to-mosaics-purple mb-4">Want to turn a bottleneck into an AI-powered workflow?</h3>
          <p className="mb-6">We’ll map it, build the GPT, and deploy the tool — fully wrapped and branded — in a single sprint.</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="inline-block bg-gradient-to-r from-mosaics-dark to-mosaics-purple text-white px-6 py-3 rounded-lg font-medium hover:from-mosaics-dark hover:to-mosaics-teal transition shadow-md text-center">
              Book a Clarity Call
            </Link>
            <Link href="/services" className="inline-block border-2 border-mosaics-dark text-mosaics-dark px-6 py-3 rounded-lg font-medium hover:bg-mosaics-gray transition shadow-md text-center">
              Explore the Command Stack
            </Link>
          </div>
        </div>
      </div>
  );
}
