export default function Blog() {
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

      <main className="max-w-4xl mx-auto px-6 py-12 space-y-10">
        <h1 className="text-4xl font-bold text-center">Insights from the Field</h1>
        <p className="text-center text-gray-600">Real stories. Practical strategy. AI you can use today.</p>
        <ul className="list-disc list-inside space-y-4 mt-6 text-left text-gray-800">
          <li><a href="#" className="text-blue-600 hover:underline">How AI Helped Me Make Decisions—Not Just Get Overwhelmed</a></li>
          <li><a href="#" className="text-blue-600 hover:underline">From Strategy to Execution: AI Gave Me Daily Tactical Clarity</a></li>
        </ul>
      </main>
    </>
  );
}
