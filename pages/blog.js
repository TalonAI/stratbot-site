import Layout from "../components/Layout"
import Link from "next/link"

export default function Blog() {
  const blogPosts = [
    {
      id: 4,
      title: "How to Install a Strategic Thinking System (Without Saying ‘AI’ Once)",
      excerpt:
        "Most owners don’t need another app—they need a repeatable way to think clearly when everything feels urgent. Here’s how to build your own decision system—no tech jargon required.",
      date: "May 13, 2025",
      readTime: "7 min read",
      slug: "strategic-thinking-system",
    },
    {
      id: 2,
      title: "Strategy to Execution: Installing Systems That Actually Scale",
      excerpt: "From building clarity to deploying AI-powered leverage, this guide breaks down how high-agency leaders turn chaos into rhythm.",
      date: "April 5, 2024",
      readTime: "7 min read",
      slug: "strategy-to-execution",
    },
    {
      id: 1,
      title: "Decision Velocity: The Hidden Advantage of High-Agency Leaders",
      excerpt:
        "Explore how the speed and quality of decision-making can become your competitive advantage in today's fast-paced business environment.",
      date: "April 26, 2023",
      readTime: "8 min read",
      slug: "decision-velocity",
    },
  ]

  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-700">
          Strategic Insights Blog
        </h1>

        <div className="space-y-10">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-blue-500 hover:shadow-xl transition"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <span className="text-sm text-gray-500">{post.date}</span>
                  <span className="mx-2 text-gray-300">•</span>
                  <span className="text-sm text-gray-500">{post.readTime}</span>
                </div>
              </div>
              <h2 className="text-2xl font-bold mb-3 text-gray-800">{post.title}</h2>
              <p className="text-gray-600 mb-5">{post.excerpt}</p>
              <Link
                href={`/blog/${post.slug}`}
                className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800"
              >
                Read More
                <svg
                  className="ml-2 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6">Want strategic insights delivered to your inbox?</p>
          <Link
            href="/contact"
            className="inline-block bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-6 py-3 rounded-lg font-medium hover:from-blue-700 hover:to-indigo-800 transition shadow-md"
          >
            Subscribe to Our Newsletter
          </Link>
        </div>
      </div>
    </Layout>
  )
}
