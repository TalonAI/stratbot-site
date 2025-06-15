import Link from 'next/link';

export default function Layout({ children }) {
  return (
    <>
      <nav className="bg-blue-900 text-white shadow-md">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16 text-lg">
            <div className="flex-shrink-0">
              <Link href="/" className="text-2xl font-bold">MosAIcs AI</Link>
            </div>
            <div className="hidden md:flex space-x-8">
              <Link href="/tactical-tools" className="hover:text-gray-300">Tactical Tools</Link>
              <Link href="/strategic-advisory" className="hover:text-gray-300">Strategic Advisory</Link>
              <Link href="/ai-leadership-training" className="hover:text-gray-300">AI Leadership Training</Link>
              <Link href="/blog" className="hover:text-gray-300">Blog</Link>
              <Link href="/team" className="hover:text-gray-300">Team</Link>
              <Link href="/contact" className="hover:text-gray-300">Contact</Link>
            </div>
          </div>
        </div>
      </nav>
      <main className="container mx-auto p-6">
        {children}
      </main>
      <footer className="bg-gray-100 text-center py-4">
        © {new Date().getFullYear()} MosAIcs AI
      </footer>
    </>
  );
}
