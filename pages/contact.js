export default function Contact() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-12 space-y-10">
      <h1 className="text-4xl font-bold text-center">Contact Us</h1>

      <p className="text-center text-lg text-gray-700 max-w-xl mx-auto">
        Have questions? Want to see how a Strategic GPT can transform your decision-making?
        Fill out the form below and we’ll follow up within 24 hours.
      </p>

      <form
        action="https://formspree.io/f/mrbpwglg"
        method="POST"
        className="space-y-6 bg-gray-50 p-6 rounded-xl border"
      >
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
          <input type="text" name="name" id="name" required className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input type="email" name="email" id="email" required className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
          <textarea name="message" id="message" rows="4" required className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" />
        </div>
        <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded-xl text-lg font-medium hover:bg-blue-700 transition">
          Send Message
        </button>
      </form>
    </main>
  );
}
