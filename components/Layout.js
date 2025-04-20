import Link from 'next/link';
import { Mail, Users, FileText, Calendar } from 'lucide-react';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-[#fdfaf3] text-gray-800">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Nav with icon-only leading margin */}
          <div className="flex justify-around items-center h-16">
            <Link href="/" className="text-blue-700 font-bold text-xl hover:text-blue-800">
              StratBot
            </Link>

            <Link href="/contact" className="flex items-center text-gray-700 hover:text-blue-700">
              <Mail className="w-5 h-5 ml-8" />
              Contact
            </Link>

            <Link href="/team" className="flex items-center text-gray-700 hover:text-blue-700">
              <Users className="w-5 h-5 ml-8" />
              Team
            </Link>

            <Link href="/blog" className="flex items-center text-gray-700 hover:text-blue-700">
              <FileText className="w-5 h-5 ml-8" />
              Blog
            </Link>

            <Link href="/book" className="flex items-center text-gray-700 hover:text-blue-700">
              <Calendar className="w-5 h-5 ml-8" />
              Book a Call
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
