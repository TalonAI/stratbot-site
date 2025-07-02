// pages/team.js
export default function Team() {
  return (
    <div className="bg-blue-50 min-h-screen text-gray-800 py-12 px-4">
      <div className="bg-white shadow-xl rounded-2xl p-8 max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-mosaics-dark to-mosaics-purple">
          Meet the Founders
        </h1>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Paul Maggio */}
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

          {/* Mike Wish */}
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

          {/* Michael Martin */}
          <div className="md:col-span-2 flex flex-col items-center text-center">
            <div className="relative w-48 h-48 mb-6 rounded-full overflow-hidden border-4 border-mosaics-teal shadow-lg">
              <img src="/images/M2.jpg" alt="Michael Martin" className="object-cover w-full h-full" />
            </div>
            <h2 className="text-2xl font-semibold mb-2">Michael Martin</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-mosaics-teal to-mosaics-purple mb-6 rounded-full"></div>
            <p className="max-w-md text-gray-700 text-lg leading-relaxed">
              Strategic Systems & Scale Architect. Michael brings a rare blend of operational discipline and scalable systems thinking. With deep experience in both startup and enterprise environments, he’s led transformations in org design, process automation, and tech-enabled execution. At <strong><span className="text-purple-700">Mos</span><span className="text-teal-500">AI</span><span className="text-purple-700">cs AI</span></strong>, he turns messy operations into elegant systems—building the infrastructure behind growth.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
