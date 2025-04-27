import Layout from "../../components/Layout"
import Link from "next/link"

export default function BlogPostTemplate() {
  return (
    <Layout>
      <div className="max-w-3xl mx-auto px-6 py-12">
        <Link href="/blog" className="flex items-center text-blue-600 mb-8 hover:text-blue-800 transition-colors">
          <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to All Posts
        </Link>

        <article>
          <header className="mb-8">
            <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-700">
              Blog Post Title
            </h1>
            <div className="flex items-center text-gray-600 text-sm">
              <span>Month Day, Year</span>
              <span className="mx-2">•</span>
              <span>X min read</span>
            </div>
          </header>

          <div className="prose prose-lg max-w-none">
            {/* Blog post content goes here */}
            <p className="lead text-xl text-gray-700 mb-6">
              This is the lead paragraph that introduces the blog post topic.
            </p>

            <h2>First Section Heading</h2>
            <p>Content for the first section goes here.</p>

            {/* Add more sections as needed */}
          </div>
        </article>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <h3 className="text-xl font-bold mb-4">Call to action heading</h3>
          <p className="mb-6">Brief description encouraging the reader to take the next step.</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/services"
              className="inline-block bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-6 py-3 rounded-lg font-medium hover:from-blue-700 hover:to-indigo-800 transition shadow-md text-center"
            >
              Primary CTA
            </Link>
            <Link
              href="/contact"
              className="inline-block border-2 border-blue-600 text-blue-700 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition shadow-md text-center"
            >
              Secondary CTA
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  )
}
