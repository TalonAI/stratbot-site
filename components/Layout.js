import Link from "next/link";

export default function Layout({ children }) {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar Navigation */}
      <nav className="w-48 bg-white border-r px-6 py-8 space-y-6">
        <Link href="/">
          <a className="text-3xl font-extrabold text-gray-900 hover:text-blue-600">StratBot</a>
        </Link>
        <div className="flex flex-col space-y-4 text-lg">
          <Link href="/contact">
            <a className="text-gray-700 hover:text-blue-600">Contact</a>
          </Link>
          <Link href="/team">
            <a className="text-gray-700 hover:text-blue-600">Team</a>
          </Link>
          <Link href="/blog">
            <a className="text-gray-700 hover:text-blue-600">Blog</a>
          </Link>
        </div>
      </nav>

      {/* Page Content */}
      <main className="flex-grow bg-white px-8 py-12">
        {children}
      </main>
    </div>
  );
}
