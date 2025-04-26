import Link from 'next/link';
import {
  Layers,
  Calendar,
  FileText,
  Users,
  Mail,
  Phone,
} from 'lucide-react';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-[#fdfaf3] text-gray-800">
      {/* ── Top navigation bar ───────────────────────── */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center py-2 px-4 sm:px-6 lg:px-8">
          {/* Brand (left) */}
          <Link
            href="/"
            className="font-extrabold text-lg text-navy mr-6 hover:text-accent"
          >
            MIH&nbsp;ClarityOps
          </Link>

          {/* Nav links (evenly spaced) */}
          <ul className="flex flex-1 items-center justify-evenly">
            <li>
              <Link href="/services" className="nav">
                <Layers className="icon" />
                Executive&nbsp;Stacks
              </Link>
            </li>
            <li>
              <Link href="/training" className="nav">
                <Calendar className="icon" />
                6-Week&nbsp;Training
              </Link>
            </li>
            <li>
              <Link href="/results" className="nav">
                <FileText className="icon" />
                Case&nbsp;Studies
              </Link>
            </li>
            <li>
              <Link href="/team" className="nav">
                <Users className="icon" />
                Team
              </Link>
            </li>
            <li>
              <Link href="/contact" className="nav">
                <Mail className="icon" />
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="/call"
                className="flex items-center bg-accent text-white rounded-full px-4 py-1.5 shadow hover:opacity-90 transition"
              >
                <Phone className="w-4 h-4 mr-1" />
                Book&nbsp;a&nbsp;Call
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* ── Page body ──────────────────────────────── */}
      <main className="flex-grow">{children}</main>

      {/* ── Inline helper styles ───────────────────── */}
      <style jsx>{`
        .nav {
          display: flex;
          align-items: center;
          color: #374151; /* gray-700 */
          transition: color 0.15s, transform 0.15s;
        }
        .nav:hover {
          color: #2563eb; /* blue-600 */
          transform: translateY(-2px);
        }
        .icon {
          width: 18px;
          height: 18px;
          margin-right: 4px;
        }
        .text-navy {
          color: #1e3a8a;
        }
        .hover\\:text-accent:hover {
          color: #f97316;
        }
      `}</style>
    </div>
  );
}
