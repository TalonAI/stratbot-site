// components/Layout.js

import Link from "next/link"

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex bg-[#fdfaf3] text-gray-800">
      {/* Sidebar */}
      <aside className="w-52 border-r-4 border-yellow-500 p-6 bg-white shadow-lg flex flex-col justify-start">
        <div className="mb-10">
          <Link href="/" className="text-3xl font-extrabold text-gray-900 hover:text-yellow-600 block">
            StratBot
          </Link>
        </div>
        <nav className="flex flex-col space-y-6 text-lg font-semibold">
          <Link href="/contact" className="hover:text-yellow-600 block">
            Contact
          </Link>
          <Link href="/team" className="hover:text-yellow-600 block">
            Team
          </Link>
          <Link href="/blog" className="hover:text-yellow-600 block">
            Blog
          </Link>
          <a
            href="https://calendly.com/paulmaggio56"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-600 block"
          >
            Book a Call
          </a>
        </nav>
      </aside>

      {/* Main content - Reduced padding */}
      <div className="flex-1 p-4 max-w-6xl mx-auto bg-white border-l-4 border-yellow-400 shadow-2xl rounded-md">
        <main>{children}</main>
        <footer className="text-sm text-gray-500 border-t pt-4 mt-8 text-center">
          &copy; {new Date().getFullYear()} StratBot. All rights reserved.
        </footer>
      </div>
    </div>
  )
}
