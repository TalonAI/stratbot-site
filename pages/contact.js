import { useState } from "react";

export default function Contact() {
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

      <main className="max-w-2xl mx-auto px-6 py-12 space-y-10">
        <h1 className="text-4xl font-bold text-center">Contact Us</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-xl"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-xl"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            rows="5"
            className="w-full px-4 py-2 border border-gray-300 rounded-xl"
            required
          ></textarea>
          <button type="submit" className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition">
            Send Message
          </button>
          {status && <p className="text-sm text-gray-700 pt-2">{status}</p>}
        </form>
      </main>
    </>
  );
}
