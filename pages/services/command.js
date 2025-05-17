import Layout from "../../components/Layout"
import Link from "next/link"

export default function CommandStack() {
  return (
    <Layout>
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
            The Command Stack is designed for businesses ready to take control of their operations and streamline
            execution. We help you implement systems that drive consistent results.
          </p>

          <h2 className="text-2xl font-bold mb-4 text-mosaics-dark">What's Included:</h2>

          <div className="space-y-6 mb-8">
            <div className="bg-mosaics-gray p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-2 text-mosaics-purple">Operational Systems Design</h3>
              <p className="text-gray-700">
                Custom-built operational systems that create predictability and consistency in your business processes.
              </p>
            </div>

            <div className="bg-mosaics-gray p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-2 text-mosaics-purple">Workflow Optimization</h3>
              <p className="text-gray-700">
                Streamline your team's workflows to eliminate bottlenecks, reduce friction, and increase output quality.
              </p>
            </div>

            <div className="bg-mosaics-gray p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-2 text-mosaics-purple">Team Alignment Strategies</h3>
              <p className="text-gray-700">
                Frameworks and tools to ensure everyone on your team is moving in the same direction with clear
                accountability.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-4 text-mosaics-dark">Who It's For:</h2>
          <ul className="list-disc pl-6 mb-8 space-y-2 text-gray-700">
            <li>Growing businesses experiencing operational friction</li>
            <li>Leaders looking to reduce their day-to-day involvement in operations</li>
            <li>Teams that need better coordination and communication</li>
            <li>Businesses preparing for their next growth phase</li>
          </ul>

          <div className="bg-gradient-to-r from-mosaics-dark to-mosaics-purple p-6 rounded-xl text-white">
            <h3 className="text-xl font-bold mb-2">Ready to take command?</h3>
            <p className="mb-4">
              Schedule a free 30-minute consultation to discuss how the Command Stack can help you streamline your
              operations.
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
    </Layout>
  )
}
