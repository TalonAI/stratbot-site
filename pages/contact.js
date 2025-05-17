import Layout from "../components/Layout";

export default function Contact() {
  return (
    <Layout>
      <div className="max-w-3xl mx-auto">
        <div className="bg-white shadow-xl rounded-2xl overflow-hidden">
          <div className="bg-gradient-to-r from-mosaics-dark to-mosaics-purple p-8 text-white">
            <h1 className="text-4xl font-bold text-center">Contact Us</h1>
            <p className="text-center text-lg mt-4 max-w-xl mx-auto">
              Have questions? Curious how a <strong>MosAIcs Advisor</strong> can help streamline your decisions and free up your time? Fill out the form and we'll follow up within 24 hours.
            </p>
          </div>

          <form
            action="https://formspree.io/f/mrbpwglg"
            method="POST"
            className="p-8 space-y-6"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-mosaics-teal focus:border-mosaics-teal"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-mosaics-teal focus:border-mosaics-teal"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows="4"
                required
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-mosaics-teal focus:border-mosaics-teal"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-mosaics-dark to-mosaics-purple text-white px-6 py-3 rounded-xl text-lg font-medium hover:from-mosaics-dark hover:to-mosaics-teal transition shadow-lg"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
}
