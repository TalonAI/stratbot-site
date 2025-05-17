import Link from "next/link";
import Image from "next/image";
import {
  Mail,
  Users,
  FileText,
  Calendar,
  Layers,
  BookOpen,
} from "lucide-react";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 to-blue-50 text-gray-800">
      {/* Logo Header */}
      <div className="flex justify-center py-4">
        <Image
          src="/mosaics-logo.png"
          alt="MosAIcs Logo"
          width={64}
          height={64}
        />
      </div>

      {/* Navigation Bar */}
      <nav className="bg-white shadow-md border-b-4 border-mosaics-teal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <ul className="flex justify-center items-center flex-wrap">
            <li className="px-6">
              <Link href="/" className="font-bold text-xl">
                <span className="text-mosaics-purple">Mos</span>
                <span className="text-mosaics-teal">AI</span>
                <span className="text-mosaics-purple">cs</span>
              </Link>
            </li>
            <li className="px-6">
              <Link
                href="/services"
                className="flex items-center text-gray-700 hover:text-mosaics-dark transition-all duration-200"
              >
                <Layers className="w-4 h-4 mr-2 text-mosaics-teal" />
                Execution Stacks
              </Link>
            </li>
            <li className="px-6">
              <Link
                href="/services/scale"
                className="flex items-center text-gray-700 hover:text-mosaics-dark transition-all duration-200"
              >
                <BookOpen className="w-4 h-4 mr-2 text-mosaics-teal" />
                AI Team Training
              </Link>
            </li>
            <li className="px-6">
              <Link
                href="/contact"
                className="flex items-center text-gray-700 hover:text-mosaics-dark transition-all duration-200"
              >
                <Mail className="w-4 h-4 mr-2 text-mosaics-teal" />
                Contact
              </Link>
            </li>
            <li className="px-6">
              <Link
                href="/team"
                className="flex items-center text-gray-700 hover:text-mosaics-dark transition-all duration-200"
              >
                <Users className="w-4 h-4 mr-2 text-mosaics-teal" />
                Team
              </Link>
            </li>
            <li className="px-6">
              <Link
                href="/blog"
                className="flex items-center text-gray-700 hover:text-mosaics-dark transition-all duration-200"
              >
                <FileText className="w-4 h-4 mr-2 text-mosaics-teal" />
                Blog
              </Link>
            </li>
            <li className="px-6">
              <a
                href="https://calendly.com/paulmaggio56"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-700 hover:text-mosaics-dark transition-all duration-200"
              >
                <Calendar className="w-4 h-4 mr-2 text-mosaics-teal" />
                Book a Call
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Main content */}
      <main className="container mx-auto p-8 max-w-5xl">{children}</main>

      {/* Footer */}
      <footer className="container mx-auto p-6 text-center text-sm text-gray-500">
        &copy; 2025 Mosaics AI, LLC. All rights reserved.
      </footer>
    </div>
  );
}
