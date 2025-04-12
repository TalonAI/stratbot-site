export default function Team() {
  return (
    <>
      <nav className="w-full bg-white border-b border-gray-200 py-4 px-6 sticky top-0 z-50 shadow-sm">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <a href="/" className="text-xl font-bold text-gray-900">StratBot</a>
          <div className="space-x-6">
            <a href="/" className="text-gray-700 hover:text-blue-600 transition">Home</a>
            <a href="/team" className="text-gray-700 hover:text-blue-600 transition">Team</a>
            <a href="/contact" className="text-gray-700 hover:text-blue-600 transition">Contact</a>
            <a href="/blog" className="text-gray-700 hover:text-blue-600 transition">Blog</a>
          </div>
        </div>
      </nav>

      <main className="max-w-3xl mx-auto px-6 py-12 space-y-10 text-center">
        <h1 className="text-4xl font-bold">Meet the Founder</h1>
        <div className="space-y-4 pt-8">
          <img src="/images/paul-ai.jpg" alt="Paul Maggio" className="w-40 h-40 rounded-full mx-auto" />
          <h2 className="text-2xl font-semibold">Paul Maggio</h2>
          <p className="text-gray-600">Founder of StratBot. Systems thinker, operator, AI leverage builder.</p>
        </div>
      </main>
    </>
  );
}
