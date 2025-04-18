import Layout from "../components/Layout"

export default function Team() {
  return (
    <div className="text-center pt-2 pb-8">
      <h1 className="text-4xl font-bold mb-6">Meet the Founder</h1>
      <img src="/images/paul-ai.jpg" alt="Paul Maggio" className="mx-auto rounded-full w-40 h-40 mb-4" />
      <h2 className="text-2xl font-semibold">Paul Maggio</h2>
      <p className="mt-4 max-w-xl mx-auto text-gray-700">
        Fractional COO. Strategic Operator. AI Systems Architect. I help founders and CEOs scale clarity, not chaos—by
        building systems that make execution inevitable. StratBot is how I bring that edge to life: one custom GPT at
        a time.
      </p>
    </div>
  );
}