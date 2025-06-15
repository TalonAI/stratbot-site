import Link from "next/link"

export default function CommandStack() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
        <Link href="/services" className="flex items-center text-mosaics-dark mb-8 hover:text-mosaics-purple transition-colors">
          <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to All Stacks
        </Link>

        <h1 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-mosaics-dark to-mosaics-purple">
          Command Stack
        </h1>

        <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-mosaics-teal mb-12">
          <p className="text-xl text-gray-700 mb-6">
            The Command Stack helps SMBs turn internal company workflows into branded, GPT-powered apps.
            We identify processes where a custom AI assistant could drive clarity, consistency, or speed—and
            then wrap that logic into a tool your entire team can use.
          </p>

          <h2 className="text-2xl font-bold mb-4 text-mosaics-dark">What’s Included:</h2>

          <div className="space-y-6 mb-8">
            <div className="bg-mosaics-gray p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-2 text-mosaics-dark">Workflow Audit & GPT Opportunity Mapping</h3>
              <p className="text-gray-700">
                We analyze your current processes and surface high-leverage tasks where an internal AI assistant would reduce friction or improve speed.
              </p>
            </div>

            <div className="bg-mosaics-gray p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-2 text-mosaics-dark">Custom GPT Logic Design (Clarity Stack)</h3>
              <p className="text-gray-700">
                We build a GPT prompt structure, tone, and decision logic tailored to your company’s workflow—no templates, just precision.
              </p>
            </div>

            <div className="bg-mosaics-gray p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-2 text-mosaics-dark">Company-Wide App Deployment (AI Wrapper)</h3>
              <p className="text-gray-700">
                Your advisor is launched as a shareable app your team can access on desktop or mobile, with optional tracking and usage analytics.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-4 text-mosaics-dark">Example Use Cases:</h2>
          <ul className="list-disc pl-6 mb-8 space-y-2 text-gray-700">
            <li>Personalized Customer Engagement & Complex Query Resolution</li>
            <li>Internal Knowledge Bots (e.g. PeachtreeVA SOP Access Tool)</li>
            <li>Complex B2B Lead Qualification & Sales Outreach</li>
            <li>Analysis of Unstructured Financial & Operational Data</li>
            <li>Standardized Responses to Non-Standard HR Requests</li>
          </ul>

          <div className="bg-gradient-to-r from-mosaics-dark to-mosaics-purple p-6 rounded-xl text-white">
            <h3 className="text-xl font-bold mb-2">Ready to build your first internal AI app?</h3>
            <p className="mb-4">
              Schedule a free 30-minute call to scope your first GPT workflow. We’ll map it, build it, and deploy it — all within one sprint.
            </p>
            <a
              href="https://calendly.com/paulmaggio56"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-mosaics-dark px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition shadow-md"
            >
              Book Your Consultation
            </a>
          </div>
        </div>
      </div>
  )
}
