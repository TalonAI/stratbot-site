import Link from 'next/link';
import { Mail, Users, FileText, Calendar } from 'lucide-react';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-[#fdfaf3] text-gray-800">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ul className="flex justify-center items-center">
            <li className="px-6">
              <Link href="/" className="text-blue-700 font-bold text-xl hover:text-blue-800">
                StratBot&nbsp;&nbsp;&nbsp;
              </Link>
            </li>
            <li className="px-6">
              <Link href="/contact" className="flex items-center text-gray-700 hover:text-blue-700">
                <Mail className="w-5 h-5 mr-2" />
                Contact&nbsp;&nbsp;&nbsp;
              </Link>
            </li>
            <li className="px-6">
              <Link href="/team" className="flex items-center text-gray-700 hover:text-blue-700">
                <Users className="w-5 h-5 mr-2" />
                Team&nbsp;&nbsp;&nbsp;
              </Link>
            </li>
            <li className="px-6">
              <Link href="/blog" className="flex items-center text-gray-700 hover:text-blue-700">
                <FileText className="w-5 h-5 mr-2" />
                Blog&nbsp;&nbsp;&nbsp;
              </Link>
            </li>
            <li className="px-6">
              <Link href="/book" className="flex items-center text-gray-700 hover:text-blue-700">
                <Calendar className="w-5 h-5 mr-2" />
                Book a Call&nbsp;&nbsp;&nbsp;
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <main className="flex-grow">{children}</main>
    </div>
  );
}
