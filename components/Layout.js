import Link from 'next/link';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white shadow">
		<nav className="flex justify-between items-center px-8 py-4 border-b shadow-sm">
			<div className="text-2xl font-bold text-black">StratBot</div>
			<div className="space-x-6 text-lg">
				<a href="/team" className="text-gray-700 hover:text-black">Team</a>
				<a href="/contact" className="text-gray-700 hover:text-black">Contact</a>
				<a href="/blog" className="text-gray-700 hover:text-black">Blog</a>
			</div>
	</nav>

      </header>

      <main className="flex-grow">{children}</main>

      <footer className="text-center text-gray-500 text-sm py-6 border-t mt-12">
        © {new Date().getFullYear()} StratBot. All rights reserved.
      </footer>
    </div>
  );
}
