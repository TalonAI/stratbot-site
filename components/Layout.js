import Link from "next/link";
import { Mail, Users, FileText, Calendar } from "lucide-react";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-[#fdfaf3] text-gray-800">
      <nav className="w-full bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Centered nav with uniform gaps */}
          <div className="flex items-center justify-center h-16 space-x-12">
            <Link href="/" className="flex items-center text-blue-700 font-bold text-2xl hover:text-blue-800">
              StratBot
            </Link>
            <Link href="/contact" className="flex items-center text-gray-700 hover:text-blue-700">
              <Mail className="w-5 h-5 mr-2" />
              <span>Contact</span>
            </Link>
            <Link href="/team" className="flex items-center text-gray-700 hover:text-blue-700">
              <Users className="w-5 h-5 mr-2" />
              <span>Team</span>
            </Link>
            <Link href="/blog" className="flex items-center text-gray-700 hover:text-blue-700">
              <FileText className="w-5 h-5 mr-2" />
              <span>Blog</span>
            </Link>
            <Link href="/book" className="flex items-center text-gray-700 hover:text-blue-700">
              <Calendar className="w-5 h-5 mr-2" />
              <span>Book a Call</span>
            </Link>
          </div>
        </div>
      </nav>
      <main className="flex-grow">
        {children}
      </main>
    </div>
  );
}
