import Layout from "../../components/Layout"
import Link from "next/link"

export default function ScaleStack() {
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
          Scale Stack
        </h1>

        <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-blue-500 mb-12">
          <p className="text-xl text-gray-700 mb-6">
            The Scale Stack is designed for established businesses ready to accelerate growth and expand their impact.
            We help you build the foundation for sustainable scaling.
          </p>

          <h2 className="text-2xl font-bold mb-4 text-blue-700">What's Included:</h2>

          <div className="space-y-6 mb-8">
            <div className="bg-blue-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-2 text-blue-800">Growth Strategy Development</h3>
              <p className="text-gray-700">
                A comprehensive growth plan that identifies key leverage points and opportunities for expansion in your
                business.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-2 text-blue-800">Scalable Process Implementation</h3>
              <p className="text-gray-700">
                Design and implementation of processes that can handle increased volume without sacrificing quality or
                requiring proportional team growth.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-2 text-blue-800">Performance Optimization</h3>
              <p className="text-gray-700">
                Systems to measure, track, and continuously improve key performance indicators across your business.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-4 text-blue-700">Who It's For:</h2>
          <ul className="list-disc pl-6 mb-8 space-y-2 text-gray-700">
            <li>Established businesses ready for their next growth phase</li>
            <li>Leaders looking to increase capacity without proportional cost increases</li>
            <li>Teams that need to maintain quality while handling more volume</li>
            <li>Businesses preparing for market expansion or new offerings</li>
          </ul>

          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-6 rounded-xl text-white">
            <h3 className="text-xl font-bold mb-2">Ready to scale?</h3>
            <p className="mb-4">
              Schedule a free 30-minute consultation to discuss how the Scale Stack can help you grow your business
              sustainably.
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
