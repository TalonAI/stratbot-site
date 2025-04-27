import Layout from "../components/Layout"

export default function Services() {
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
              <li className="flex items-start">
                <svg className="h-5 w-5 text-blue-500 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Strategic decision framework</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-blue-500 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Priority mapping</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-blue-500 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Action plan development</span>
              </li>
            </ul>
            <a
              href="/services/clarity"
              className="inline-block bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-6 py-3 rounded-lg font-medium hover:from-blue-700 hover:to-indigo-800 transition shadow-md"
            >
              Learn More
            </a>
          </div>

          {/* Command Stack */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-blue-500 hover:shadow-xl transition transform hover:-translate-y-1">
            <h2 className="text-2xl font-bold mb-4 text-blue-700">Command Stack</h2>
            <p className="text-gray-700 mb-6">
              Take control of your operations and streamline execution. Ideal for businesses ready to implement systems
              that drive results.
            </p>
            <ul className="space-y-2 mb-8">
              <li className="flex items-start">
                <svg className="h-5 w-5 text-blue-500 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Operational systems design</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-blue-500 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Workflow optimization</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-blue-500 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Team alignment strategies</span>
              </li>
            </ul>
            <a
              href="/services/command"
              className="inline-block bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-6 py-3 rounded-lg font-medium hover:from-blue-700 hover:to-indigo-800 transition shadow-md"
            >
              Learn More
            </a>
          </div>

          {/* Scale Stack */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-blue-500 hover:shadow-xl transition transform hover:-translate-y-1">
            <h2 className="text-2xl font-bold mb-4 text-blue-700">Scale Stack</h2>
            <p className="text-gray-700 mb-6">
              Accelerate growth and expand your impact. Perfect for established businesses ready to reach the next
              level.
            </p>
            <ul className="space-y-2 mb-8">
              <li className="flex items-start">
                <svg className="h-5 w-5 text-blue-500 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Growth strategy development</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-blue-500 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Scalable process implementation</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-blue-500 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Performance optimization</span>
              </li>
            </ul>
            <a
              href="/services/scale"
              className="inline-block bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-6 py-3 rounded-lg font-medium hover:from-blue-700 hover:to-indigo-800 transition shadow-md"
            >
              Learn More
            </a>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-6 text-gray-800">Not sure which stack is right for you?</h3>
          <a
            href="https://calendly.com/paulmaggio56"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-8 py-4 rounded-xl text-lg font-medium hover:from-blue-700 hover:to-indigo-800 transition shadow-lg"
          >
            Schedule a Free Consultation
          </a>
        </div>
      </div>
    </Layout>
  )
}
