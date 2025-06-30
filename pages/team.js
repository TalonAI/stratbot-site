
export default function Team() {
  return (
    <div className="bg-blue-50 min-h-screen text-gray-800 py-12 px-4">
      <div className="bg-white shadow-xl rounded-2xl p-8 max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-mosaics-dark to-mosaics-purple">
          Meet the Founders
        </h1>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="flex flex-col items-center text-center">
            <div className="relative w-48 h-48 mb-6 rounded-full overflow-hidden border-4 border-mosaics-teal shadow-lg">
              <img src="/images/paul-ai.jpg" alt="Paul Maggio" className="object-cover w-full h-full" />
            </div>
            <h2 className="text-2xl font-semibold mb-2">Paul Maggio</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-mosaics-teal to-mosaics-purple mb-6 rounded-full"></div>
            <p className="max-w-md text-gray-700 text-lg leading-relaxed">
              Fractional COO & AI Systems Architect. Paul brings operational clarity and execution discipline to every build. A veteran operator, he helps leaders scale systems with precision and purpose. <strong><span className="text-purple-700">Mos</span><span className="text-teal-500">AI</span><span className="text-purple-700">cs AI</span></strong> is his command center for building AI systems that make execution inevitable.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="relative w-48 h-48 mb-6 rounded-full overflow-hidden border-4 border-mosaics-teal shadow-lg">
              <img src="/images/mike-w.jpg" alt="Mike Wish" className="object-cover w-full h-full" />
            </div>
            <h2 className="text-2xl font-semibold mb-2">Mike Wish</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-mosaics-teal to-mosaics-purple mb-6 rounded-full"></div>
            <p className="max-w-md text-gray-700 text-lg leading-relaxed">
              AI Strategy & Training Architect. Mike develops and delivers AI training programs for founders and ops teams. A former Marine officer, he brings tactical clarity and deep strategic insight—helping teams think, plan, and execute with AI. <strong><span className="text-purple-700">Mos</span><span className="text-teal-500">AI</span><span className="text-purple-700">cs AI</span></strong> is how he scales that mission.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
