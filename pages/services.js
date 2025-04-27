// pages/services.js
import Layout from "../components/Layout"
import Link from "next/link"

export default function Services() {
  const checkSvg = (
    <svg
      className="h-5 w-5 text-blue-500 mr-2 mt-1"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
    </svg>
  )

  return (
    <Layout>
      <div className="max-w-5xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-700">
          Execution Stacks
        </h1>

        <p className="text-lg text-gray-700 mb-12 max-w-3xl mx-auto text-center">
          Choose the right execution stack for your business needs. Each stack is designed to solve specific operational
          challenges and help you move forward with clarity and purpose.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {/* Clarity Stack */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-blue-500 hover:shadow-xl transition transform hover:-translate-y-1">
            <h2 className="text-2xl font-bold mb-4 text-blue-700">Clarity Stack</h2>
            <p className="text-gray-700 mb-6">
              Get unstuck and create a clear path forward. Perfect for founders and leaders who need to break through
              decision paralysis.
            </p>
            <ul className="space-y-2 mb-8">
              {[
                "Strategic decision framework",
                "Priority mapping",
                "Mission-to-metric alignment",
              ].map((item) => (
                <li key={item} className="flex items-start">
                  {checkSvg}
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/services/clarity"
              className="inline-block bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-medium px-6 py-3 rounded-lg hover:opacity-90 transition"
            >
              Explore Clarity Stack →
            </Link>
          </div>

          {/* Command Stack */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-blue-500 hover:shadow-xl transition transform hover:-translate-y-1">
            <h2 className="text-2xl font-bold mb-4 text-blue-700">Command Stack</h2>
            <p className="text-gray-700 mb-6">
              Stand up core SOPs, negotiation aids, and live dashboards with your leadership team—so you can stop firefighting
              and start commanding your operations.
            </p>
            <ul className="space-y-2 mb-8">
              {["SOP Builder kit", "Negotiation Assistant GPT", "Live KPI Dashboard"].map((item) => (
                <li key={item} className="flex items-start">
                  {checkSvg}
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/services/command"
              className="inline-block bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-medium px-6 py-3 rounded-lg hover:opacity-90 transition"
            >
              Explore Command Stack →
            </Link>
          </div>

          {/* Scale Stack */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-blue-500 hover:shadow-xl transition transform hover:-translate-y-1">
            <h2 className="text-2xl font-bold mb-4 text-blue-700">Scale Stack</h2>
            <p className="text-gray-700 mb-6">
              Accelerate growth and expand your impact. Perfect for established businesses ready to reach the next
              level through our 6-week AI Operational Leadership training program.
            </p>
            <ul className="space-y-2 mb-8">
              {[
                "Growth strategy development",
                "Scalable process implementation",
                "Team-wide AI training program (6 weeks)",
              ].map((item) => (
                <li key={item} className="flex items-start">
                  {checkSvg}
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/services/scale"
              className="inline-block bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-medium px-6 py-3 rounded-lg hover:opacity-90 transition"
            >
              Explore Scale Stack →
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  )
}
