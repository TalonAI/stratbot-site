import Layout from "../../components/Layout"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function ScaleStack() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Back link */}
        <Link
          href="/services"
          className="flex items-center text-mosaics-dark mb-8 hover:text-mosaics-purple"
        >
          <ChevronLeft className="w-5 h-5 mr-2" /> Back to All Stacks
        </Link>

        {/* Header & overview */}
        <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-mosaics-dark to-mosaics-purple">Scale Stack — AI Team Training Program</h1>
        <p className="mb-8 text-lg text-gray-700">
          Empower your entire team to leverage AI, establish operating rhythms, and scale your business.
          This hands-on program is delivered as a 6-week live cohort class, designed to multiply staff impact
          and free leadership to focus on strategy.
        </p>

        {/* Info cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
          <div className="p-6 bg-white rounded-md shadow">
            <h3 className="font-semibold mb-2">Program Duration</h3>
            <p>6 weeks / 1 hour live session per week + async content</p>
          </div>
          <div className="p-6 bg-white rounded-md shadow">
            <h3 className="font-semibold mb-2">Audience</h3>
            <p>Cross-functional team members (ops, CS, sales, admin)</p>
          </div>
          <div className="p-6 bg-white rounded-md shadow">
            <h3 className="font-semibold mb-2">Mode</h3>
            <p>Live cohort sessions + curated Loom videos + AI companions</p>
          </div>
          <div className="p-6 bg-white rounded-md shadow">
            <h3 className="font-semibold mb-2">Outcome</h3>
            <p>SOP library, role-based AI workflows, weekly execution cadence</p>
          </div>
        </div>

        {/* CTA to full syllabus */}
        <Link
          href="/services/scale-syllabus"
          className="inline-flex items-center bg-mosaics-dark text-white font-medium px-6 py-3 rounded-lg hover:bg-mosaics-teal transition"
        >
          View Full 6-Week Syllabus <ChevronRight className="ml-2 w-5 h-5" />
        </Link>
      </div>
    </Layout>
  )
}
