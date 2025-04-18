import Link from "next/link"

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex bg-gradient-to-br from-slate-50 to-blue-50 text-gray-800">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg p-6 flex flex-col justify-start fixed h-full border-r-4 border-blue-500">
        <div className="mb-10">
          <Link href="/" className="text-3xl font-extrabold block">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-700">StratBot</span>
          </Link>
        </div>
        <nav className="flex flex-col space-y-5 text-lg">
          <Link
            href="/contact"
            className="text-gray-700 hover:text-blue-600 transition-all duration-200 transform hover:translate-x-1 flex items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2 text-blue-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            Contact
          </Link>
          <Link
            href="/team"
            className="text-gray-700 hover:text-blue-600 transition-all duration-200 transform hover:translate-x-1 flex items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2 text-blue-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
            Team
          </Link>
          <Link
            href="/blog"
            className="text-gray-700 hover:text-blue-600 transition-all duration-200 transform hover:translate-x-1 flex items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2 text-blue-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
              />
            </svg>
            Blog
          </Link>
          <a
            href="https://calendly.com/paulmaggio56"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-blue-600 transition-all duration-200 transform hover:translate-x-1 flex items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2 text-blue-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <span className="text-sm">Book a Call</span>
          </a>
        </nav>

        <div className="mt-auto pt-6 border-t border-gray-200 text-sm text-gray-500">
          &copy; {new Date().getFullYear()} StratBot
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 ml-64">
        <main className="p-8 max-w-5xl mx-auto">{children}</main>
      </div>
    </div>
  )
}
