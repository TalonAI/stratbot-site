import Layout from "../components/Layout"
import Link from "next/link"

export default function Training() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-700">
          6-Week Training Class
        </h1>

        <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-blue-500 mb-12">
          <p className="text-xl text-gray-700 mb-8">
            Transform your strategic thinking and execution capabilities with our intensive 6-week program designed for
            high-agency leaders who want to build systems that drive results.
          </p>

          <h2 className="text-2xl font-bold mb-6 text-blue-700">What You'll Learn</h2>

          <div className="space-y-6 mb-10">
            <div className="flex items-start">
              <div className="bg-blue-100 rounded-full p-2 mr-4 mt-1">
                <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Strategic Decision Frameworks</h3>
                <p className="text-gray-700">
                  Build custom frameworks that align with your values and business goals, making complex decisions
                  simpler and more consistent.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-blue-100 rounded-full p-2 mr-4 mt-1">
                <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Operational Systems Design</h3>
                <p className="text-gray-700">
                  Create scalable operational systems that drive consistency and predictability in your business
                  processes.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-blue-100 rounded-full p-2 mr-4 mt-1">
                <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">AI Integration Strategies</h3>
                <p className="text-gray-700">
                  Learn how to effectively integrate AI tools into your workflow to automate routine decisions and
                  enhance strategic thinking.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-6 text-blue-700">Program Structure</h2>

          <div className="bg-blue-50 p-6 rounded-xl mb-8">
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="font-bold text-blue-700 mr-2">Week 1-2:</span>
                <span>Strategic Foundations and Decision Architecture</span>
              </li>
              <li className="flex items-start">
                <span className="font-bold text-blue-700 mr-2">Week 3-4:</span>
                <span>Operational Systems Design and Implementation</span>
              </li>
              <li className="flex items-start">
                <span className="font-bold text-blue-700 mr-2">Week 5-6:</span>
                <span>AI Integration and Scaling Your Strategic Systems</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-6 rounded-xl text-white">
            <h3 className="text-xl font-bold mb-2">Next Cohort Starting Soon</h3>
            <p className="mb-4">
              Limited to 10 participants to ensure personalized attention and maximum impact. Reserve your spot today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://calendly.com/paulmaggio56"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-blue-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition shadow-md text-center"
              >
                Schedule a Call to Apply
              </a>
              <Link
                href="/contact"
                className="inline-block border-2 border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition shadow-md text-center"
              >
                Request Program Details
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
