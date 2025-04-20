import Link from "next/link";
import { Mail, Users, FileText, Calendar } from "lucide-react";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-[#fdfaf3] text-gray-800">
      <nav className="w-full bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo on left */}
            <Link href="/" className="text-2xl font-bold text-blue-700">
              StratBot
            </Link>
            {/* Navigation links on right */}
            <div className="flex space-x-6 lg:space-x-8">
              <Link
                href="/contact"
                className="flex items-center text-gray-700 hover:text-blue-700"
              >
                <Mail className="w-5 h-5 mr-1" />
                Contact
              </Link>
              <Link
                href="/team"
                className="flex items-center text-gray-700 hover:text-blue-700"
              >
                <Users className="w-5 h-5 mr-1" />
                Team
              </Link>
              <Link
                href="/blog"
                className="flex items-center text-gray-700 hover:text-blue-700"
              >
                <FileText className="w-5 h-5 mr-1" />
                Blog
              </Link>
              <Link
                href="/book"
                className="flex items-center text-gray-700 hover:text-blue-700"
              >
                <Calendar className="w-5 h-5 mr-1" />
                Book a Call
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <main className="flex-grow">
        {children}
      </main>
    </div>
  );
}
