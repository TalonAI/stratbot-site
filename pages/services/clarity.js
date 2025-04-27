import Layout from "../../components/Layout"
import Link from "next/link"

export default function ClarityStack() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-6 py-12">
        <Link href="/services" className="flex items-center text-blue-600 mb-8 hover:text-blue-800 transition-colors">
          <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to All Stacks
        </Link>

        <h1 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-700">
          Clarity Stack
        </h1>

        <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-blue-500 mb-12">
          <p className="text-xl text-gray-700 mb-6">
            The Clarity Stack is designed for founders and leaders who feel stuck in decision paralysis or overwhelmed
            by competing priorities. We help you cut through the noise and create a clear path forward.
          </p>

          <h2 className="text-2xl font-bold mb-4 text-blue-700">What's Included:</h2>

          <div className="space-y-6 mb-8">
            <div className="bg-blue-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-2 text-blue-800">Strategic Decision Framework</h3>
              <p className="text-gray-700">
                A customized framework that aligns with your values and business goals, making complex decisions simpler
                and more consistent.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-2 text-blue-800">Priority Mapping</h3>
              <p className="text-gray-700">
                Identify what truly matters for your business right now and create a visual map of priorities that keeps
                you focused on high-impact activities.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-2 text-blue-800">Action Plan Development</h3>
              <p className="text-gray-700">
                Transform insights into concrete steps with clear ownership, timelines, and success metrics to ensure
                momentum.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-4 text-blue-700">Who It's For:</h2>
          <ul className="list-disc pl-6 mb-8 space-y-2 text-gray-700">
            <li>Founders facing critical strategic decisions</li>
            <li>Leaders overwhelmed by competing priorities</li>
            <li>Teams that need alignment on direction and goals</li>
            <li>Businesses at an inflection point or transition</li>
          </ul>

          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-6 rounded-xl text-white">
            <h3 className="text-xl font-bold mb-2">Ready to gain clarity?</h3>
            <p className="mb-4">
              Schedule a free 30-minute consultation to discuss how the Clarity Stack can help you move forward with
              confidence.
            </p>
            <a
              href="https://calendly.com/paulmaggio56"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-blue-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition shadow-md"
            >
              Book Your Consultation
            </a>
          </div>
        </div>
      </div>
    </Layout>
  )
}
