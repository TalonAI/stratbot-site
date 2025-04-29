import Link from "next/link"
import { Mail, Users, FileText, Calendar, Layers, BookOpen } from "lucide-react"

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 to-blue-50 text-gray-800">
      <nav className="bg-white shadow-md border-b-4 border-blue-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <ul className="flex justify-center items-center">
            <li className="px-6">
              <Link
                href="/"
                className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-700 font-bold text-xl hover:text-blue-800"
              >
                StratBot&nbsp;&nbsp;&nbsp;
              </Link>
            </li>
            <li className="px-6">
              <Link
                href="/services"
                className="flex items-center text-gray-700 hover:text-blue-600 transition-all duration-200"
              >
                <Layers className="w-4 h-4 mr-2 text-blue-500" />
                Execution Stacks&nbsp;&nbsp;&nbsp;
              </Link>
            </li>
            <li className="px-6">
              <Link
                href="/services/scale"
                className="flex items-center text-gray-700 hover:text-blue-600 transition-all duration-200"
              >
                <BookOpen className="w-4 h-4 mr-2 text-blue-500" />
                AI Team Training&nbsp;&nbsp;&nbsp;
              </Link>
            </li>
            <li className="px-6">
              <Link
                href="/contact"
                className="flex items-center text-gray-700 hover:text-blue-600 transition-all duration-200"
              >
                <Mail className="w-4 h-4 mr-2 text-blue-500" />
                Contact&nbsp;&nbsp;&nbsp;
              </Link>
            </li>
            <li className="px-6">
              <Link
                href="/team"
                className="flex items-center text-gray-700 hover:text-blue-600 transition-all duration-200"
              >
                <Users className="w-4 h-4 mr-2 text-blue-500" />
                Team&nbsp;&nbsp;&nbsp;
              </Link>
            </li>
            <li className="px-6">
              <Link
                href="/blog"
                className="flex items-center text-gray-700 hover:text-blue-600 transition-all duration-200"
              >
                <FileText className="w-4 h-4 mr-2 text-blue-500" />
                Blog&nbsp;&nbsp;&nbsp;
              </Link>
            </li>
            <li className="px-6">
              <a
                href="https://calendly.com/paulmaggio56"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-700 hover:text-blue-600 transition-all duration-200"
              >
                <Calendar className="w-4 h-4 mr-2 text-blue-500" />
                Book a Call&nbsp;&nbsp;&nbsp;
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Main content */}
      <main className="container mx-auto p-8 max-w-5xl">{children}</main>

      {/* Footer */}
      <footer className="container mx-auto p-6 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} StratBot. All rights reserved.
      </footer>
    </div>
  )
}
