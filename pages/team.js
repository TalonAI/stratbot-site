import Layout from "../components/Layout"

export default function Team() {
  return (
    <Layout>
      <div className="bg-white shadow-xl rounded-2xl p-8 max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-700">
          Meet the Founder
        </h1>
        <div className="flex flex-col items-center">
          <div className="relative w-48 h-48 mb-6 rounded-full overflow-hidden border-4 border-blue-500 shadow-lg">
            <img src="/images/paul-ai.jpg" alt="Paul Maggio" className="object-cover w-full h-full" />
          </div>
          <h2 className="text-2xl font-semibold mb-2">Paul Maggio</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mb-6 rounded-full"></div>
          <p className="mt-4 max-w-xl mx-auto text-gray-700 text-lg leading-relaxed">
            Fractional COO. Strategic Operator. AI Systems Architect. I help founders and CEOs scale clarity, not
            chaos—by building systems that make execution inevitable. StratBot is how I bring that edge to life: one
            custom GPT at a time.
          </p>
        </div>
      </div>
    </Layout>
  )
}
