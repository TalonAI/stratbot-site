import Link from "next/link";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <nav className="bg-white shadow-md">
		<div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
		<Link href="/" className="text-2xl font-extrabold text-gray-900 hover:text-blue-600">
      StratBot
    </Link>
    <div className="space-x-6 text-lg flex">
      <Link href="/team" className="text-gray-700 hover:text-blue-600">Team</Link>
      <Link href="/contact" className="text-gray-700 hover:text-blue-600">Contact</Link>
      <Link href="/blog" className="text-gray-700 hover:text-blue-600">Blog</Link>
    </div>
  </div>
</nav>


      <main className="flex-grow bg-white">
        {children}
      </main>

      <footer className="text-center text-sm text-gray-500 py-6 border-t">
        &copy; 2025 StratBot. All rights reserved.
      </footer>
    </div>
  );
}
