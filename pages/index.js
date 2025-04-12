import { useState } from "react";

export default function LandingPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://formsubmit.co/wfaiadm@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(form),
      });
      const result = await response.json();
      if (result.success === "true" || result.success === true) {
        setStatus("Message sent successfully!");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("Failed to send message. Please try again later.");
      }
    } catch (err) {
      setStatus("An error occurred. Please try again later.");
    }
  };

  return (
    <>
      <nav className="w-full bg-white border-b border-gray-200 py-4 px-6 sticky top-0 z-50 shadow-sm">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <a href="/" className="text-xl font-bold text-gray-900">StratBot</a>
          <div className="space-x-6">
            <a href="/" className="text-gray-700 hover:text-blue-600 transition">Home</a>
            <a href="/team" className="text-gray-700 hover:text-blue-600 transition">Team</a>
            <a href="/contact" className="text-gray-700 hover:text-blue-600 transition">Contact</a>
            <a href="/blog" className="text-gray-700 hover:text-blue-600 transition">Blog</a>
          </div>
        </div>
      </nav>

      <main className="flex flex-col items-center justify-center px-6 py-12 space-y-24 max-w-5xl mx-auto font-sans bg-white text-gray-900">
        <section className="text-center space-y-6">
          <h1 className="text-5xl font-extrabold tracking-tight">Build Your AI Advisor. Think Faster. Do More. Waste Less.</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            In one session, we’ll build your custom Strategic GPT that thinks like you—so you can move faster, automate the obvious, and unlock real clarity.
          </p>
          <button className="px-6 py-3 bg-blue-600 text-white text-lg rounded-xl shadow-md hover:bg-blue-700 transition">Build My AI Advisor</button>
        </section>

        <section className="space-y-6 text-center max-w-3xl">
          <h2 className="text-3xl font-semibold">Why StratBot?</h2>
          <p className="text-gray-700">
            Most people are “using AI” but still drowning in noise. At StratBot, we help you <strong>think better</strong>, not just type faster.
            We build your first GPT-based Advisor using your words, your logic, your workflows—then show you how to turn it into real leverage.
          </p>
        </section>

        <section className="space-y-6 max-w-3xl text-center">
          <h2 className="text-3xl font-semibold">The AI Advisor Sprint</h2>
          <ul className="space-y-2 text-left list-disc list-inside text-gray-700">
            <li>Custom GPT with your expertise, tone, and strategy</li>
            <li>Embedded SOPs, frameworks, and decision logic</li>
            <li>How-To guide for instant results</li>
            <li>Access inside your ChatGPT Plus account ($20/mo)</li>
            <li>Follow-up session to explore deeper use cases</li>
          </ul>
          <div className="text-center">
            <p className="text-xl font-medium">Beta Pricing: $249 → 10 Client Limit</p>
            <button className="mt-4 px-6 py-3 bg-blue-600 text-white text-lg rounded-xl shadow hover:bg-blue-700 transition">Book Your Sprint Now</button>
          </div>
        </section>

        <section className="w-full max-w-4xl text-center space-y-12">
          <h2 className="text-3xl font-semibold">Early Access Feedback</h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="bg-gray-50 p-6 rounded-xl shadow">
              <p className="text-gray-700 italic">"StratBot built my Advisor GPT in one session—and it instantly became my go-to for ops decisions and internal clarity. Game changer."</p>
              <p className="mt-4 font-semibold">— Jordan, Ops Director</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl shadow">
              <p className="text-gray-700 italic">"This is the first AI tool that didn’t create more work—it actually saved me time. Their team made it stupid simple to get started."</p>
              <p className="mt-4 font-semibold">— Alex, SMB Owner</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl shadow">
              <p className="text-gray-700 italic">"We went from chaos to clarity in 48 hours. If you’re even thinking about AI in your business, start here. It works."</p>
              <p className="mt-4 font-semibold">— Casey, General Manager</p>
            </div>
          </div>
        </section>

        <section className="w-full max-w-4xl text-center space-y-12">
          <h2 className="text-3xl font-semibold">From the Blog</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow hover:shadow-md transition">
              <h3 className="text-xl font-semibold mb-2">Blog Title Placeholder</h3>
              <p className="text-gray-700 text-sm mb-4">
                This is a placeholder for a blog summary. Use this space to give readers a quick reason to click through and learn more about how AI is transforming real-world operations.
              </p>
              <a href="/blog" className="text-blue-600 font-medium hover:underline">Read more →</a>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow hover:shadow-md transition">
              <h3 className="text-xl font-semibold mb-2">Another Blog Post Preview</h3>
              <p className="text-gray-700 text-sm mb-4">
                Here’s another teaser. It should be simple, benefit-focused, and tie to a transformation or insight you’re delivering through StratBot.
              </p>
              <a href="/blog" className="text-blue-600 font-medium hover:underline">Read more →</a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
