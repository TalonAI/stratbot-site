"use client"

import { useState } from "react"
import Link from "next/link"

export default function Layout({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen flex flex-col">
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo/Brand - Left justified */}
            <div>
              <Link href="/" legacyBehavior>
                <a className="text-2xl font-extrabold text-gray-900 hover:text-blue-600">StratBot</a>
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-500 hover:text-gray-700 focus:outline-none"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>

            {/* Desktop Navigation - Right justified */}
            <div className="hidden md:flex md:items-center space-x-12 text-lg">
              <Link href="/team" legacyBehavior>
                <a className="text-gray-700 hover:text-blue-600">Team</a>
              </Link>
              <Link href="/contact" legacyBehavior>
                <a className="text-gray-700 hover:text-blue-600">Contact</a>
              </Link>
              <Link href="/blog" legacyBehavior>
                <a className="text-gray-700 hover:text-blue-600">Blog</a>
              </Link>
            </div>
          </div>

          {/* Mobile menu, toggle based on menu state */}
          <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"} pt-4`}>
            <div className="flex flex-col space-y-3 px-2 pb-3 text-lg">
              <Link href="/team" legacyBehavior>
                <a className="text-gray-700 hover:text-blue-600 block px-3 py-2" onClick={() => setIsMenuOpen(false)}>
                  Team
                </a>
              </Link>
              <Link href="/contact" legacyBehavior>
                <a className="text-gray-700 hover:text-blue-600 block px-3 py-2" onClick={() => setIsMenuOpen(false)}>
                  Contact
                </a>
              </Link>
              <Link href="/blog" legacyBehavior>
                <a className="text-gray-700 hover:text-blue-600 block px-3 py-2" onClick={() => setIsMenuOpen(false)}>
                  Blog
                </a>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="flex-grow bg-white">{children}</main>

      <footer className="text-center text-sm text-gray-500 py-6 border-t">
        &copy; {new Date().getFullYear()} StratBot. All rights reserved.
      </footer>
    </div>
  )
}
