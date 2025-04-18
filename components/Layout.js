import Link from "next/link";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex bg-white text-gray-800">
      {/* Sidebar */}
      <aside className="w-52 border-r border-gray-200 p-6 flex flex-col justify-start fixed h-full">
        <div className="mb-8">
          <Link href="/" className="text-2xl font-bold text-gray-900 hover:text-blue-600 block">
            StratBot
          </Link>
        </div>
        <nav className="flex flex-col space-y-5 text-lg">
          <Link href="/contact" className="text-gray-700 hover:text-blue-600 block">
            Contact
          </Link>
          <Link href="/team" className="text-gray-700 hover:text-blue-600 block">
            Team
          </Link>
          <Link href="/blog" className="text-gray-700 hover:text-blue-600 block">
            Blog
          </Link>
          <a
            href="https://calendly.com/paulmaggio56"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-blue-600 block"
          >
            Book a Call
          </a>
        </nav>
      </aside>

      {/* Main content */}
      <div className="flex-1 ml-52">
        <main className="p-8 max-w-4xl mx-auto">{children}</main>
        <footer className="text-sm text-gray-500 p-8 text-center">
          &copy; {new Date().getFullYear()} StratBot. All rights reserved.
        </footer>
      </div>
    </div>
  );
}