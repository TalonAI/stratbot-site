import Link from 'next/link';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white shadow">
     <nav className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center space-x-4">
          <Link href="/" className="text-xl font-bold text-gray-900 mr-8">
			StratBot
		  </Link>

          <div className="space-x-6">
            <Link href="/team" className="text-gray-700 hover:text-blue-600">Team</Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600">Contact</Link>
            <Link href="/blog" className="text-gray-700 hover:text-blue-600">Blog</Link>
          </div>
        </nav>
      </header>

      <main className="flex-grow">{children}</main>

      <footer className="text-center text-gray-500 text-sm py-6 border-t mt-12">
        © {new Date().getFullYear()} StratBot. All rights reserved.
      </footer>
    </div>
  );
}
